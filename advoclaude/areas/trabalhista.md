# Pacote Trabalhista: comece aqui

Complemento do Advoclaude pras peças e tarefas mais comuns de direito do trabalho, dos dois lados (reclamante e reclamada). Cada skill soma à **Peça a partir da ficha** a estrutura e a lista de conferência da peça. As regras de sempre continuam valendo: ficha antes, roteiro antes, nunca inventar julgado e conferência antes de protocolar.

| Skill | Pra quê |
|---|---|
| **Reclamação trabalhista** | Inicial do reclamante: art. 840, rito, pedido com valor, gratuidade e honorários na leitura atual |
| **Contestação trabalhista** | Defesa da reclamada: momento, revelia, preposto, impugnação pedido a pedido, documentos e valores |
| **Rescisão indireta** | Art. 483: alínea, imediatidade, emprego durante a ação, efeitos e pedidos que costumam faltar |
| **Acordo extrajudicial** | Homologação (arts. 855-B a 855-E): dois advogados, quitação limitada, prescrição, multa do art. 477 |
| **Embargos de declaração trabalhista** | Art. 897-A (Vara do Trabalho e TRT; vara cível e Juizado usam o pacote cível 2): hipóteses, vista à parte contrária, interrupção do prazo, prequestionamento |
| **Recurso ordinário** | Art. 895: prazo, custas, depósito recursal (valor vigente), quem é isento, ataque por capítulo |
| **Contrarrazões ao recurso ordinário** | Preliminares que salvam a sentença (deserção, representação), defesa por capítulo, recurso adesivo |
| **Impugnação de cálculos e embargos à execução** | Arts. 879 e 884, índice de correção depois da ADC 58 e da Lei 14.905/2024, lista do que entra na conta |
| **Agravo de petição** | Art. 897, a: delimitação de matéria e valores, o que se discute na execução |
| **Roteiro de audiência trabalhista** | Não é peça: ônus da prova por pedido, perguntas por tema, contradita, faixas de acordo do seu lado, audiência telepresencial, razões finais (no trabalhista vale esta skill, não o método genérico do Kit) |

## Instalação

- **Claude:** em **Customize > Skills**, envie os 10 arquivos `.zip` da pasta `claude/zips/`.
- **ChatGPT:** envie `chatgpt/kit-trabalhista.md` em **Conhecimento** e acrescente nas instruções a linha de `chatgpt/linha-nas-instrucoes-do-gpt.md`.

## Nota de conferência

As referências de lei e jurisprudência foram conferidas em 19/10/2026 e revisadas em 20 e 21/10/2026 (CLT pelo Planalto, atos e resoluções do TST no repositório do tribunal, Informativo STF 1228, notícias do TST e dos TRTs). Três pontos mudaram e merecem sua atenção: a **gratuidade** (o STF julgou a ADC 80 em 03/09/2026 e fixou presunção relativa até R$ 5.000,00; vale pros processos ajuizados a partir da publicação da ata do julgamento, 16/09/2026 segundo o boletim de precedentes do TRT-11, data a confirmar no STF; antes disso segue o regime anterior, Tema 21 do TST; as skills de recurso e execução perguntam a data do ajuizamento e marcam `[conferir]` no acórdão), a **correção e os juros** depois da Lei 14.905/2024, e as **súmulas canceladas** pela Resolução 225/2025 do TST. Depósito recursal: Ato SEGJUD.GP 381/2026 (R$ 14.411,57 no RO), vigente desde 01/08/2026; de 01/08/2025 a 31/07/2026 valia o Ato 391/2025 (R$ 13.813,83); muda todo ano. Cada skill mostra a conta sugerida do prazo e abre a primeira mensagem com ALERTA quando o prazo vence em 5 dias úteis ou menos (ou já venceu) ou a prescrição está a 60 dias ou menos; é sugestão, e a conferência no calendário do tribunal é sua. Depósito recursal vale o valor da data da interposição. Onde a peça pede julgado, a skill deixa a marca `[INSERIR JULGADO: ...]` pra você preencher com um julgado conferido (o Advoclaude Jurisprudência busca e verifica).

---

*O Pacote Trabalhista é um método de organização e produtividade que você instala na sua própria conta do Claude ou do ChatGPT. Não é serviço jurídico, consultoria nem revisão de peças. O que a IA gera é rascunho: quem confere, assina e responde pela peça, pelo prazo e pela relação com o cliente é o advogado. Claude é marca da Anthropic e ChatGPT é marca da OpenAI; este é um produto independente da Lumos, sem vínculo com nenhuma das duas.*
