# Pacote Previdenciário: comece aqui

Complemento do Advoclaude Pro para a advocacia contra o INSS (RGPS e BPC). Cada skill soma à **Peça a partir da ficha** a estrutura, os prazos e a lista de conferência de uma peça ou tarefa. As regras de sempre continuam valendo: ficha antes, roteiro antes, nunca inventar julgado e conferência antes de protocolar. Nenhuma skill calcula RMI, tempo de contribuição, renda per capita ou atrasados: elas listam o que entra, e o número vem de você ou do seu sistema de cálculo.

| Skill | Pra quê |
|---|---|
| **Requerimento administrativo no INSS** | Pedido apto (Tema 1124/STJ), conferência do CNIS, documentos por benefício, prazos de análise |
| **Recurso ao CRPS** | Regimento de 2026 (Portaria MPS 125/2026): recurso ordinário e especial, 30 dias corridos, embargos em 30, prova nova, risco de renúncia por ação idêntica |
| **Inicial de benefício por incapacidade** | Auxílio por incapacidade temporária e aposentadoria por incapacidade permanente, art. 129-A, DII, Tema 350 |
| **Inicial de BPC/LOAS** | Idoso e pessoa com deficiência, art. 20 da Lei 8.742 atual, Decreto 12.534/2025 |
| **Inicial de aposentadoria** | Tempo, idade, especial, rural e híbrida; regras de transição da EC 103; EPI, vigilante, prova rural |
| **Pensão por morte** | Dependentes, união estável, duração por idade, cotas da EC 103 |
| **Salário-maternidade** | Urbana, rural, desempregada; carência derrubada pelo STF; prazo de 30 dias |
| **Revisão de benefício** | Decadência do art. 103 como está hoje; o que cabe e o que caiu (vida toda) |
| **Quesitos para perícia** | Médica e social, por doença e por profissão, assistente técnico |
| **Impugnação ao laudo pericial** | Pontos atacáveis, esclarecimentos, nova perícia (CPC 477 e 480) |

## Instalação

- **Claude:** em **Customize > Skills**, envie os 10 arquivos `.zip` da pasta `claude/zips/`.
- **ChatGPT:** envie `chatgpt/kit-previdenciario.md` em **Conhecimento** e acrescente nas instruções a linha de `chatgpt/linha-nas-instrucoes-do-gpt.md`.

## Conferência

As referências de lei, súmula, tema e enunciado foram conferidas em 19/10/2026 e revisadas em 20/10/2026 (Planalto, STJ, STF, Banco Nacional de Precedentes do CNJ, gov.br, DOU e as páginas de súmulas do CJF que abriram: 47, 53, 63, 68, 77, 79 e 80). O que não foi possível confirmar na fonte oficial está marcado `[conferir: ...]` no texto das skills. A contagem de cada prazo é sua, pela regra do rito e pelo calendário do tribunal. Onde a peça pede julgado, a skill deixa a marca `[INSERIR JULGADO: ...]` ou usa o Advoclaude Jurisprudência, se estiver ligado.

---

*O Pacote Previdenciário é um método de organização e produtividade que você instala na sua própria conta do Claude ou do ChatGPT. Não é serviço jurídico, consultoria nem revisão de peças. O que a IA gera é rascunho: quem confere, assina e responde pela peça, pelo prazo e pela relação com o cliente é o advogado. Claude é marca da Anthropic e ChatGPT é marca da OpenAI; este é um produto independente da Lumos, sem vínculo com nenhuma das duas.*
