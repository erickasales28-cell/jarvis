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

const trackingFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

const fillTrackingFields = () => {
  const params = new URLSearchParams(window.location.search);

  trackingFields.forEach((field) => {
    const input = form.elements.namedItem(field);

    if (input && params.has(field)) {
      input.value = params.get(field);
    }
  });

  form.elements.namedItem('page_url').value = window.location.href;
};

const setStatus = (message, isError = false) => {
  statusMessage.textContent = message;
  statusMessage.classList.toggle('is-error', isError);
};

const sendLead = async (formData) => {
  const endpoint = form.dataset.endpoint;

  if (!endpoint) {
    throw new Error('Formulario sem data-endpoint configurado.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Envio do lead falhou com status ${response.status}.`);
  }
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    setStatus('Preencha os campos obrigatorios para continuar.', true);
    form.reportValidity();
    return;
  }

  const submitButton = form.querySelector('[type="submit"]');
  const formData = new FormData(form);
  const name = formData.get('name').toString().trim().split(' ')[0];

  submitButton.disabled = true;
  setStatus('Enviando...');

  try {
    await sendLead(formData);
    setStatus(`${name}, voce entrou na lista de embarque. Em breve, enviaremos os proximos avisos do Barco dos navegantes.`);
    form.reset();
    fillTrackingFields();
  } catch (error) {
    console.error(error);
    setStatus('Nao foi possivel enviar agora. Tente novamente em instantes.', true);
  } finally {
    submitButton.disabled = false;
  }
});

fillTrackingFields();

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();