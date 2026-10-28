# Kit Família e Sucessões: comece aqui

Complemento do Advoclaude pras peças mais comuns de família e sucessões. Cada skill soma à **Peça a partir da ficha** a estrutura e a lista de conferência da peça, e lê o módulo `area-familia-e-sucessoes`. As regras de sempre continuam valendo: ficha antes, roteiro antes, nunca inventar julgado e conferência antes de protocolar.

| Skill | Pra quê |
|---|---|
| **Divórcio litigioso** | Inicial e defesa com guarda, alimentos e partilha em disputa, rito do CPC 693 a 699-A |
| **Divórcio e dissolução consensual** | Teste cartório ou juízo (inclusive com filho incapaz), minuta de escritura e petição de homologação |
| **União estável** | Reconhecimento e dissolução, inclusive post mortem, com as datas e o regime que decidem a partilha |
| **Guarda e convivência** | Compartilhada como regra (Lei 14.713/2023), plano de convivência por cláusulas, alienação parental na redação atual |
| **Alimentos** | Fixação, provisórios, avós, gravídicos, prescrição |
| **Revisional e exoneração de alimentos** | Efeito desde a citação, maioridade, prova da mudança, os dois lados |
| **Execução de alimentos** | Prisão x penhora, as 3 parcelas, prazo de 3 dias, defesa do devedor |
| **Inventário judicial e arrolamento** | Escolha do rito, prazos, primeiras declarações, ITCMD |
| **Inventário extrajudicial** | Minuta de escritura, herdeiro incapaz e testamento pela Res. CNJ 571/2024 |
| **Investigação de paternidade** | Biológica, post mortem e socioafetiva, com o caminho do cartório |
| **Curatela** | Curatela limitada, laudo, curatela provisória e tomada de decisão apoiada |

## Instalação

- **Claude:** em **Customize > Skills**, envie os 11 arquivos `.zip` da pasta `claude/zips/`.
- **ChatGPT:** envie `chatgpt/kit-familia-e-sucessoes.md` em **Conhecimento** e acrescente nas instruções a linha de `chatgpt/linha-nas-instrucoes-do-gpt.md`.

As referências de lei e jurisprudência foram conferidas em outubro de 2026 (Câmara dos Deputados, Planalto, STJ, CNJ, CJF e a base de precedentes do CNJ) e revisadas em 20/10/2026. O que é recente e a skill já considera: Lei 14.382/2022 (união estável no registro civil), Lei 14.713/2023 (guarda), Lei 14.994/2024 (poder familiar nos crimes contra a mulher), Res. CNJ 571/2024 e Provimento CNJ 202/2025 (cartório com incapaz), Lei 15.240/2025 (abandono afetivo), LC 227/2026 (ITCMD), Lei 15.392/2026 (custódia de animais de estimação), Lei 15.479/2026 (transferência automática da pensão, que só entra em vigor um ano depois da publicação de 30/07/2026). A reforma do Código Civil (PL 4/2025) e o divórcio unilateral em cartório são projetos, não lei. Lei, súmula e enunciado mudam, e o ITCMD é sempre da lei do estado: a conferência antes de protocolar existe por isso. A contagem de cada prazo é sua, pela regra do rito e pelo calendário do tribunal. Onde a peça pede julgado, a skill deixa a marca `[INSERIR JULGADO: ...]` pra você preencher com um julgado conferido. A skill nunca calcula pensão, meação, quinhão nem imposto: lista o que entra.

Dado de criança, de saúde, de violência e de DNA é sensível: use iniciais e não suba processo em segredo de justiça para conta individual.

---

*O Kit Família e Sucessões é um método de organização e produtividade que você instala na sua própria conta do Claude ou do ChatGPT. Não é serviço jurídico, consultoria nem revisão de peças. O que a IA gera é rascunho: quem confere, assina e responde pela peça, pelo prazo e pela relação com o cliente é o advogado. Claude é marca da Anthropic e ChatGPT é marca da OpenAI; este é um produto independente da Lumos, sem vínculo com nenhuma das duas.*
