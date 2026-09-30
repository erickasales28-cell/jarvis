# CLAUDE.md

Orientacoes para o Claude Code ao trabalhar neste repositorio.

## O projeto

Landing page do **Barco dos navegantes**: uma lista de espera ("lista de embarque") para uma jornada guiada de direcao e clareza. Todo o conteudo e a interface sao em portugues (`lang="pt-BR"`).

## Stack

HTML + CSS + JS puro. Sem framework, sem build, sem `package.json`, sem dependencias externas.

- `index.html`: pagina unica, com todas as secoes.
- `styles.css`: todo o estilo. Tokens em `:root`.
- `script.js`: so comportamento (header no scroll, reveal, contadores, FAQ, envio do formulario).
- `DESIGN-SYSTEM.md`: regras visuais, de texto e de acessibilidade. **E a fonte de verdade para qualquer mudanca visual ou de texto.**

Para ver a pagina: abrir `index.html` no navegador, ou rodar `python3 -m http.server` na raiz e acessar `http://localhost:8000`.

Nao ha testes automatizados. Antes de concluir uma mudanca, conferir na pagina (larguras 375px, 768px, 1024px e 1440px) e rodar o checklist da secao 13 do `DESIGN-SYSTEM.md`.

## Regras

- Leia o `DESIGN-SYSTEM.md` antes de mexer em layout, cores, tipografia, componentes ou textos.
- Nao adicione framework, bundler, biblioteca JS ou CDN sem pedir antes. O projeto e intencionalmente independente de framework.
- JS so para comportamento. Nada de gerar HTML de conteudo via JS.
- Mantenha ARIA sincronizado com o estado visual (ex.: `aria-expanded` no FAQ) e respeite `prefers-reduced-motion`.
- Raio maximo 8px, alvos de toque com no minimo 44px, foco sempre visivel.
- Tom de voz: calmo, claro, orientador. Sem promessa garantida, urgencia falsa ou "metodo infalivel" (ver secao 11 do design system).
- Os textos do site e da documentacao estao escritos sem acentos. Mantenha esse padrao; pergunte antes de mudar.

## Onde o codigo diverge do DESIGN-SYSTEM.md

Nao "corrija" essas diferencas por conta propria. Se uma tarefa esbarrar nelas, avise e pergunte.

- **Nomes dos tokens de cor**: o `styles.css` usa nomes antigos com os valores do design system.

  | `styles.css` | `DESIGN-SYSTEM.md` |
  |---|---|
  | `--ink` | `--color-ink` |
  | `--muted` | `--color-muted` |
  | `--paper` | `--color-paper` |
  | `--surface` | `--color-surface` |
  | `--line` | `--color-line` |
  | `--teal` | `--color-primary` |
  | `--coral` | `--color-primary-soft` |
  | `--teal-dark` | `--color-accent` |
  | `--mustard` | `--color-accent-soft` |
  | `--forest` | `--color-depth` |
  | `--shadow` | `--shadow-premium` |
  | `--radius` | `--radius-base` |

  Os nomes (`teal`, `coral`, `mustard`, `forest`) nao descrevem mais as cores. Use os nomes que ja existem no CSS.
- **Fontes**: o design system recomenda Bodoni Moda + Jost via Google Fonts; o CSS usa fontes do sistema (DejaVu, Charter, Georgia...).
- **Breakpoints**: o CSS usa `900px` e `620px`; o design system lista 480/768/1024/1440.
- A escala de espacamento (`--space-*`) e de texto (`--text-*`) do design system nao existe como variaveis no CSS.

## Formulario de lead

- O `<form class="lead-form">` envia via `fetch` para a URL em `data-endpoint` (webhook do Clickmax).
- **`data-endpoint` esta vazio**: hoje todo envio cai no erro "Nao foi possivel enviar agora". Nao invente uma URL; peca ao responsavel.
- Campos ocultos `utm_*` e `page_url` sao preenchidos a partir da URL da pagina. Nao remova.

## Conteudo provisorio

Os numeros da secao "Resultados" (`data-count` 92, 87, 42) e o depoimento sao **ilustrativos** e estao marcados como tal na pagina. Nao apresente esses dados como reais e nao tire o aviso sem receber os numeros verdadeiros.

## Ferramentas do Claude neste repo

- `.claude/agents/` e `.claude/skills/` tem varios agentes e skills genericos. Para este projeto, os uteis sao `frontend-design`, `javascript-pro` e `code-reviewer`. Os de backend, banco de dados e Python nao se aplicam a um site estatico.
- `.mcp.json` tem servidores MCP com valores de exemplo (chaves, tokens, connection strings). Nunca comite valores reais nesse arquivo.
