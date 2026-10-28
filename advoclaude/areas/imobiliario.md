# Kit Imobiliário: comece aqui

Complemento do Advoclaude e do Kit Cível e Consumidor. Cada skill soma à **Peça a partir da ficha** a estrutura e a lista de conferência da peça, e lê o módulo `area-civel-consumidor-e-imobiliario`. Contrato genérico e execução de título extrajudicial já existem no Kit e não se repetem aqui. As regras de sempre continuam valendo: ficha antes, plano antes (até 5 perguntas), nunca inventar julgado e conferência antes de protocolar.

| Skill | Pra quê |
|---|---|
| **Ação de despejo** | Hipótese do art. 9º, 46, 47 ou 57, liminar do art. 59, §1º com caução, falta de pagamento cumulada com cobrança (art. 62) |
| **Contestação de despejo e purga da mora** | Prazo e termo inicial da purga, conteúdo do depósito, vedação em 24 meses, prazo de desocupação |
| **Revisional de aluguel** | Arts. 19, 68 e 69, aluguel provisório de 80%, alerta do prazo decadencial da renovatória |
| **Usucapião** | Modalidade, via judicial ou extrajudicial (Lei 6.015, art. 216-A; Provimento CNJ 149/2023) |
| **Compromisso de compra e venda** | Contrato do imóvel, checklist de due diligence, arras, registro do compromisso |
| **Distrato de imóvel na planta** | Lei 13.786/2018, Súmula 543, temas de retenção afetados no STJ |
| **Cobrança de condomínio** | Título do CPC 784, X, multa de 2%, prescrição de 5 anos, penhora do imóvel |

## Instalação

- **Claude:** em **Customize > Skills**, envie os 7 arquivos `.zip` da pasta `claude/zips/`.
- **ChatGPT:** envie `chatgpt/kit-imobiliario.md` em **Conhecimento** e acrescente nas instruções a linha de `chatgpt/linha-nas-instrucoes-do-gpt.md`.

As referências de lei e jurisprudência foram conferidas em outubro de 2026, revisadas após o teste em 20/10/2026 e passaram por revisão de lei na fonte em 21/10/2026 (Planalto, Câmara dos Deputados, STJ, Banco Nacional de Precedentes do CNJ). O que é recente e as skills já consideram: Lei 14.711/2023 (Marco Legal das Garantias: alienação fiduciária de imóvel, purga até a consolidação, leilões, CPC 784, XI-A); Lei 14.382/2022 (adjudicação compulsória extrajudicial do art. 216-B e o art. 216-A, §10); Lei 14.905/2024 (juros e multa no CC 1.336, §1º; arras no CC 418); Provimento CNJ 149/2023, o Código Nacional de Normas; os Temas 1464, 1465 e 1466 do STJ, afetados em 2026 com suspensão de recursos especiais, sobre a retenção no distrato. A Lei do Inquilinato não tem lei alteradora posterior à Lei 12.744/2012 no texto consolidado do Planalto (conferido em 21/10/2026); a regra especial do fiador que pede exoneração (art. 40, X: 120 dias) prevalece sobre os 60 dias do CC 835. A reforma do Código Civil (PL 4/2025) é projeto, não lei. Há pontos que as skills marcam com `[conferir]`, como a contagem em dias úteis da purga da mora e o texto do Provimento 149 no portal do CNJ. A contagem de cada prazo é sua: as skills mostram uma conta sugerida e seguem uma régua única de ALERTA: prazo processual ou contratual que vence em 5 dias úteis ou menos; decadência ou prescrição a 60 dias ou menos, ou com a janela já aberta (a renovatória, por exemplo); prazo vencido listado no topo. O ALERTA vai na primeira mensagem, antes das perguntas, e o plano ganha a linha "Prazo". Vencimento em dia não útil: a skill mostra a prorrogação legal e, para planejar, o dia útil anterior. As skills de cobrança de condomínio citam três skills (execução, embargos, cobrança e monitória) que são do Kit Cível e Consumidor 2. Onde a peça pede julgado, a skill deixa a marca `[INSERIR JULGADO: ...]` pra você preencher com um julgado conferido. As skills nunca calculam aluguel, dívida, retenção nem multa: listam o que entra.

Dado de cliente (CPF, matrícula, endereço) só na qualificação; no teste, use nomes inventados.

---

*O Kit Imobiliário é um método de organização e produtividade que você instala na sua própria conta do Claude ou do ChatGPT. Não é serviço jurídico, consultoria nem revisão de peças. O que a IA gera é rascunho: quem confere, assina e responde pela peça, pelo prazo e pela relação com o cliente é o advogado. Claude é marca da Anthropic e ChatGPT é marca da OpenAI; este é um produto independente da Lumos, sem vínculo com nenhuma das duas.*
