const header = document.querySelector('[data-header]');
const revealItems = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('[data-count]');
const faqButtons = document.querySelectorAll('.faq-question');
const form = document.querySelector('.lead-form');
const statusMessage = document.querySelector('.form-status');

const updateHeader = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
};

const animateCounter = (counter) => {
  const target = Number(counter.dataset.count);
  const suffix = counter.textContent.includes('%') || target <= 100 ? '%' : '';
  const duration = 900;
  const startTime = performance.now();

  const tick = (time) => {
    const progress = Math.min((time - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = `${Math.round(target * eased)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add('is-visible');

    if (entry.target.matches('[data-count]')) {
      animateCounter(entry.target);
    }

    observer.unobserve(entry.target);
  });
}, { threshold: 0.18 });

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();

  return rect.top < window.innerHeight && rect.bottom > 0;
};

revealItems.forEach((item) => observer.observe(item));
counters.forEach((counter) => {
  if (isInViewport(counter)) {
    animateCounter(counter);
    return;
  }

  observer.observe(counter);
});

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    faqButtons.forEach((item) => {
      item.setAttribute('aria-expanded', 'false');
      item.nextElementSibling.classList.remove('is-open');
    });

    button.setAttribute('aria-expanded', String(!isOpen));
    answer.classList.toggle('is-open', !isOpen);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    statusMessage.textContent = 'Preencha os campos obrigatorios para continuar.';
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const name = formData.get('name').toString().trim().split(' ')[0];

  statusMessage.textContent = `${name}, voce entrou na lista de embarque. Em breve, enviaremos os proximos avisos do Barco dos navegantes.`;
  form.reset();
});

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();