# Design System - BARCO DOS NAVEGANTES

Escopo: `--design-system`
Stack: HTML + CSS + JS puro
Direcao visual: Dark Premium / Clean Minimalist

Este documento define as regras visuais, estruturais e interativas para manter o produto Barco dos navegantes consistente, sofisticado e facil de evoluir.

## 1. Principios de Produto

### Essencia

Barco dos navegantes comunica direcao, travessia, clareza e escolha consciente. A interface deve parecer premium, calma e orientadora, sem excesso decorativo ou promessa agressiva.

### Regras de experiencia

- A primeira tela deve deixar claro o nome do produto, o convite principal e a metafora de rota/travessia.
- A navegacao deve ser curta e funcional, com poucos destinos.
- Cada secao deve responder uma pergunta do visitante: onde estou, o que ganho, como funciona, por que confiar e qual o proximo passo.
- O CTA principal deve sempre parecer uma entrada na rota, nao uma compra impulsiva.
- Provas, metricas e depoimentos devem ser usados com sobriedade. Quando forem ilustrativos, devem ser marcados como tal.

## 2. Identidade Visual

### Estilo Base

- Dark Premium: fundo profundo, contraste elegante, brilho controlado e sensacao de profundidade.
- Clean Minimalist: poucos elementos por bloco, hierarquia clara, espaco negativo generoso e bordas discretas.
- Navegacional: elementos de bussola, barco, linha, rota, mapa, horizonte e sinal podem aparecer como linguagem visual.

### Anti-padroes

- Nao usar paleta clara como base principal.
- Nao usar visual infantil, nautico literal em excesso ou ilustracao cartunesca.
- Nao usar cards grandes empilhados sem funcao clara.
- Nao usar gradientes roxos genericos como unico recurso visual.
- Nao criar chamadas com promessa absoluta, urgencia falsa ou comparacao agressiva.

## 3. Tokens de Cor

Os tokens abaixo devem orientar o CSS em `:root`. O visual atual usa uma base Midnight Galaxy.

```css
:root {
  --color-ink: #f7f3ff;
  --color-muted: #c8bfd9;
  --color-paper: #100d1c;
  --color-surface: #1b1630;
  --color-line: rgba(230, 230, 250, 0.18);
  --color-primary: #4a4e8f;
  --color-primary-soft: #a490c2;
  --color-accent: #e6e6fa;
  --color-accent-soft: #d9c9f2;
  --color-depth: #2b1e3e;
  --shadow-premium: 0 24px 80px rgba(8, 7, 20, 0.44);
  --radius-base: 8px;
}
```

### Uso das cores

- `--color-paper`: fundo principal da pagina.
- `--color-surface`: paineis, cards, formulario e blocos de suporte.
- `--color-ink`: titulos, textos principais e elementos de alto contraste.
- `--color-muted`: paragrafos, descricoes, navegacao secundaria e labels.
- `--color-primary`: elementos de marca, estados ativos, destaques estruturais.
- `--color-primary-soft`: brilho de suporte, marcadores e detalhes premium.
- `--color-accent`: CTA secundario, foco visivel e pequenos realces.
- `--color-depth`: areas profundas, overlays e fundos de componentes.

### Contraste

- Texto normal deve manter contraste minimo de 4.5:1.
- Texto pequeno sobre gradientes deve receber fundo ou sombra discreta.
- CTAs devem ter diferenca clara entre estado normal, hover, focus e disabled.

## 4. Tipografia

### Direcao

Para um produto premium e minimalista, a tipografia deve combinar uma fonte editorial para titulos com uma fonte limpa para leitura.

Recomendacao principal:

- Titulos: `Bodoni Moda`, Georgia, serif.
- Corpo e UI: `Jost`, `Avenir Next`, `Segoe UI`, sans-serif.

Import sugerido:

```css
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@500;600;700&family=Jost:wght@300;400;500;600;700&display=swap');
```

### Escala tipografica

```css
:root {
  --font-display: 'Bodoni Moda', Georgia, serif;
  --font-ui: 'Jost', 'Avenir Next', 'Segoe UI', sans-serif;
  --text-xs: 0.78rem;
  --text-sm: 0.9rem;
  --text-md: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.45rem;
  --text-2xl: 2rem;
  --text-3xl: clamp(2.45rem, 6vw, 5.25rem);
  --leading-tight: 1.02;
  --leading-body: 1.55;
}
```

### Regras

- H1 deve ser amplo, editorial e direto.
- H2 deve sustentar leitura rapida, sem competir com o H1.
- Corpo deve ter minimo de 16px no mobile.
- Evitar letter-spacing negativo.
- Eyebrows podem usar caixa alta, peso 700 e tracking moderado.

## 5. Layout e Grid

### Container

```css
.wrap {
  width: min(1120px, calc(100% - 40px));
  margin-inline: auto;
}
```

### Regras de composicao

- Usar uma coluna dominante no mobile.
- No desktop, combinar texto principal com elemento visual de apoio quando isso reforcar a metafora de rota.
- Hero deve ocupar quase toda a primeira dobra, mas deixar indicio visual da proxima secao.
- Secoes devem alternar entre layouts abertos e bandas sutis, nao pilhas de cards decorativos.
- Evitar componentes aninhados em cards dentro de cards.

### Espacamentos

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 72px;
  --space-9: 96px;
}
```

## 6. Componentes

### Header

- Sticky no topo com blur discreto.
- Altura compacta, sem ocupar area nobre do hero.
- Estado `is-scrolled` deve adicionar linha e sombra suave.
- Brand mark deve manter leitura circular, associada a bussola.
- Navegacao deve ter no maximo 4 links primarios.

### Hero

- Deve conter: eyebrow, H1, texto curto, CTA primario, CTA secundario e 2 a 3 sinais de confianca.
- A arte de bussola/barco deve ser de suporte, sem bloquear texto ou CTA.
- O CTA primario deve ser visualmente mais forte que o secundario.
- A mensagem deve evitar exagero: foco em direcao, clareza e proximo passo.

### Botoes

```css
.button {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: var(--radius-base);
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}
```

Regras:

- Primario: alto contraste, fundo claro ou acento premium, texto escuro ou muito contrastante.
- Secundario: fundo transparente, borda visivel e hover refinado.
- Disabled: reduzir opacidade e remover transform.
- Focus: usar `outline` claro e offset de 3px.

### Cards e Paineis

- Raio maximo padrao: 8px.
- Usar borda fina e sombra profunda apenas em paineis principais.
- Cards repetidos devem ter mesma altura visual quando estiverem no mesmo grid.
- Numero, icone ou marcador deve ser pequeno e funcional.

### Formularios

- Labels sempre visiveis ou semanticamente associadas.
- Inputs com altura minima de 44px.
- Mensagens de erro devem aparecer perto do campo ou no status do formulario.
- O envio deve prevenir estado ambivalente: mostrar sucesso, erro ou carregamento.
- Checkbox de aceite/LGPD deve ser claro quando houver coleta real de dados.

### FAQ

- Perguntas devem ser botoes reais (`button`).
- Usar `aria-expanded` e controlar a abertura via JS.
- A area clicavel deve respeitar 44px de altura minima.
- O icone de abertura deve comunicar estado sem depender apenas de cor.

## 7. Iconografia e Elementos de Marca

### Linguagem visual

- Bussola: direcao, criterio, decisao.
- Barco: travessia, movimento possivel, continuidade.
- Linhas e ondas: percurso, ritmo, passagem.
- Sinais luminosos: pontos de orientacao, nao decoracao gratuita.

### Regras

- Preferir CSS/SVG simples para marcas geometricas.
- Nao usar emoji como icone.
- Icones devem ter `aria-hidden="true"` quando forem decorativos.
- Icon-only buttons precisam de `aria-label`.

## 8. Movimento e Interacao

### Duracoes

- Hover e focus: 150ms a 220ms.
- Reveals: 450ms a 700ms.
- Movimento de fundo/arte: acima de 8s, suave e nao intrusivo.

### Regras de JS

- Usar JS apenas para comportamento: header scroll, reveal, contador, FAQ e validacao de formulario.
- Evitar dependencias externas.
- Componentes interativos devem manter atributos ARIA sincronizados com estado visual.
- Animacoes devem respeitar `prefers-reduced-motion`.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 9. Acessibilidade

- Documento deve iniciar com `<!doctype html>` e `lang="pt-BR"`.
- Usar landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Links de navegacao devem apontar para IDs existentes.
- Todo controle interativo deve ser acessivel por teclado.
- Focus visivel obrigatorio em links, botoes, inputs e accordions.
- Nao depender apenas de animacao para revelar informacao essencial.
- Texto alternativo deve descrever imagens reais; elementos abstratos devem ser ocultos com `aria-hidden`.

## 10. Responsividade

### Breakpoints

```css
:root {
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1440px;
}
```

### Regras

- Testar larguras: 375px, 768px, 1024px e 1440px.
- Mobile deve priorizar leitura, CTA e formulario.
- Menus e grids devem colapsar sem scroll horizontal.
- Arte do hero pode reduzir opacidade, tamanho ou sair do fluxo se competir com o texto.
- Nenhum texto deve depender de `vw` para tamanho de fonte.

## 11. Tom de Voz

### Personalidade verbal

- Calmo, claro, sensivel e orientador.
- Premium sem distancia excessiva.
- Convite sem pressao.
- Metaforico com controle: rota, travessia, direcao e embarque.

### Preferir

- "Entre na lista de embarque"
- "Escolha um rumo"
- "Construa uma rota possivel"
- "Receba os proximos avisos"
- "Menos ruido, mais direcao"

### Evitar

- "Transformacao garantida"
- "Resultado imediato"
- "Ultima chance"
- "Metodo infalivel"
- "Voce nunca mais vai..."

## 12. Estrutura Recomendada da Landing Page

1. Header compacto com marca e CTA.
2. Hero com promessa clara, arte de bussola/barco e CTA principal.
3. Sinais de confianca ou contexto.
4. Beneficios em tres pontos.
5. Metodo em tres movimentos.
6. Prova/contexto com metricas reais ou claramente ilustrativas.
7. Comparacao antes/depois.
8. Formulario ou bloco de lista de espera.
9. FAQ.
10. Footer simples.

## 13. Checklist de Qualidade

- [x] Nome do produto aparece de forma clara na primeira dobra.
- [x] CTA principal aparece no hero e no fechamento.
- [x] Paleta escura premium domina a experiencia.
- [x] Componentes respeitam raio maximo de 8px.
- [x] Botoes e inputs tem area minima de 44px.
- [x] Focus states sao visiveis.
- [x] `prefers-reduced-motion` esta implementado.
- [x] Nao ha scroll horizontal em 375px.
- [x] Textos de prova nao prometem resultado garantido.
- [x] HTML, CSS e JS permanecem independentes de framework.
