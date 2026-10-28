# Kit Cível e Consumidor 2: comece aqui

Complemento do Advoclaude e do Kit Cível e Consumidor. Cada skill soma à **Peça a partir da ficha** a estrutura e a lista de conferência da peça, e lê o módulo `area-civel-consumidor-e-imobiliario`. As peças que o Kit Cível já cobre (inicial de consumo, contestação, réplica, recurso inominado, apelação, cumprimento de sentença, notificação) não se repetem aqui. As regras de sempre continuam valendo: ficha antes, roteiro antes, nunca inventar julgado e conferência antes de protocolar.

| Skill | Pra quê |
|---|---|
| **Agravo de instrumento** | Cabimento (CPC 1.015 e Tema 988 do STJ), peças do 1.017, efeito suspensivo, contraminuta |
| **Embargos de declaração** | Vício do 1.022, prequestionamento, multa do 1.026, regra do juizado |
| **Tutela de urgência** | Antecedente e incidental, caução, aditamento, estabilização do 304 |
| **Plano de saúde** | Negativa e rol da ANS (Lei 14.454/2022 e ADI 7265), reajuste, cancelamento, liminar |
| **Transporte aéreo** | Atraso, cancelamento, extravio, Montreal, Res. ANAC 400 e 813/2026, dano moral provado |
| **Cobrança e monitória** | Execução, monitória ou cobrança comum, embargos monitórios, prescrição por tipo de dívida |
| **Execução de título extrajudicial** | Títulos do 784, inicial do 798, pesquisa de bens, impenhorabilidades do 833 |
| **Embargos à execução** | Prazo de 15 dias, excesso com memória, efeito suspensivo, parcelamento do 916 |

## Instalação

- **Claude:** em **Customize > Skills**, envie os 8 arquivos `.zip` da pasta `claude/zips/`.
- **ChatGPT:** envie `chatgpt/kit-civel-e-consumidor-2.md` em **Conhecimento** e acrescente nas instruções a linha de `chatgpt/linha-nas-instrucoes-do-gpt.md`.

As referências de lei e jurisprudência foram conferidas e revisadas depois do teste em 20/10/2026 (Planalto, Câmara dos Deputados, STJ, STF, CNJ, ANS, ANAC). O que é recente e as skills já consideram: Lei 14.454/2022 e o julgamento da ADI 7265 pelo STF em setembro de 2025 (rol da ANS); Temas 1365 e 1316 do STJ em 2026 (dano moral na negativa e bomba de insulina); Lei 14.034/2020 (CBA 251-A e 256, §3º) e a suspensão de processos no Tema 1417 do STF (novembro de 2025, restrita em março de 2026 às hipóteses do 256, §3º); Res. ANAC 813/2026, em vigor em 26/10/2026 (texto lido na ANAC); Tema 929 do STJ julgado em setembro de 2026 (acórdão pendente); STF, Tema 77 (sem mandado de segurança contra interlocutória no Juizado); Lei 14.711/2023 e Lei 14.620/2023 (títulos executivos); Lei 14.195/2021 (prescrição intercorrente); Lei 14.905/2024 (juros e correção); Lei 15.484/2026 (relevância no recurso especial, para acórdãos publicados desde 03/09/2026). A reforma do Código Civil (PL 4/2025) é projeto, não lei. Há pontos em aberto que as skills marcam com `[conferir]`, como a divergência do STJ sobre a estabilização da tutela (Corte Especial, com vista desde agosto de 2026), o mérito do Tema 1417 e a tese publicada do Tema 929. Em prazo e prescrição, as skills mostram a conta (termo inicial, regra de contagem, resultado provável) como sugestão a conferir e abrem o resumo com ALERTA quando o prazo vence em 5 dias úteis ou menos ou a prescrição pode estar consumada; a conferência pelo calendário do tribunal é sua. Onde a peça pede julgado, a skill deixa a marca `[INSERIR JULGADO: ...]` pra você preencher com um julgado conferido. As skills nunca calculam dívida, reajuste, indenização nem limite de responsabilidade: listam o que entra.

Dado de saúde é sensível: use iniciais, tarje laudo e CID e não suba processo em segredo de justiça para conta individual.

---

*O Kit Cível e Consumidor 2 é um método de organização e produtividade que você instala na sua própria conta do Claude ou do ChatGPT. Não é serviço jurídico, consultoria nem revisão de peças. O que a IA gera é rascunho: quem confere, assina e responde pela peça, pelo prazo e pela relação com o cliente é o advogado. Claude é marca da Anthropic e ChatGPT é marca da OpenAI; este é um produto independente da Lumos, sem vínculo com nenhuma das duas.*
