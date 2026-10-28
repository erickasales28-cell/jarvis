# Kit Tributário: comece aqui

Complemento do Advoclaude. Cada skill soma à **Peça a partir da ficha** a estrutura e a lista de conferência da peça (ou o roteiro, no caso da transação), e lê o módulo `area-tributario`. As regras de sempre continuam valendo: ficha antes, plano de até 5 perguntas antes, nunca inventar julgado e conferência antes de protocolar.

| Skill | Pra quê |
|---|---|
| **Impugnação de auto de infração** | Prazo de 20 dias úteis (Decreto 70.235, LC 227/2026), preclusão da prova, matéria não impugnada, instrução para auto estadual e municipal |
| **Mandado de segurança tributário** | 120 dias, autoridade coatora e pessoa jurídica, preventivo, limite da compensação (Súmulas 213 e 460 do STJ, 269 e 271 do STF) |
| **Embargos à execução fiscal** | Lei 6.830, art. 16: 30 dias, garantia, toda a defesa de uma vez, efeito suspensivo |
| **Exceção de pré-executividade** | Súmula 393 do STJ, prescrição intercorrente (art. 40 da LEF, Temas 566 a 571), honorários |
| **Repetição de indébito tributário** | CTN 165 a 169, 5 anos pagamento a pagamento, CTN 166, restituição ou compensação |
| **Anulatória de débito fiscal** | LEF art. 38, depósito integral, renúncia à via administrativa, relação com a execução |
| **Transação e parcelamento** | Lei 13.988, editais vigentes da PGFN, Lei 10.522; roteiro de decisão, sem cálculo |

## Instalação

- **Claude:** em **Configurações > Personalização > Habilidades** (em inglês, Customize > Skills), **+ Adicionar > Fazer upload de habilidade**, envie os 7 arquivos `.zip` da pasta `claude/zips/`.
- **ChatGPT:** envie `chatgpt/kit-tributario.md` em **Conhecimento** e acrescente nas instruções a linha de `chatgpt/linha-nas-instrucoes-do-gpt.md`.

As referências de lei e jurisprudência foram conferidas em 20/10/2026 e revisadas em 21/10/2026 (Planalto, Câmara dos Deputados, Banco Nacional de Precedentes do CNJ de 19/10/2026, gov.br/pgfn, Perguntas e Respostas da Receita Federal sobre a LC 227). O que mudou e as skills já consideram: **LC 227/2026** (prazo de 20 dias úteis para impugnação e recurso voluntário no processo federal, suspensão de 20/12 a 20/01, prazo residual de 10 dias úteis, transição do ADI RFB 2/2026 já esgotada, processo do IBS no Comitê Gestor; a manifestação de inconformidade de compensação segue em 30 dias corridos); **LC 236/2026**, em vigor em 04/09/2026 (novo CTN: denúncia espontânea e multa de mora, tetos de multa de 75%, 100% e 150%, nove causas de interrupção da prescrição no art. 174, novos incisos do art. 151, arts. 208-A a 208-J do processo administrativo fiscal, com 2 anos para os entes se adaptarem); **Lei 14.689/2023** (voto de qualidade no CARF, multa qualificada de 100% e 150% só na reincidência, teto de 100% do art. 14); **Lei 15.265/2025** (compensação não declarada); **Lei 13.988/2020 com alterações até 2025**; Edital 6/2026 da PGFN prorrogado pelo 10/2026 até 29/01/2027; Temas do STJ 1237, 1248, 1273, 1350, 1385 e 1413, Temas 487, 863 e 1184 do STF e Resolução CNJ 547/2024. A reforma tributária (EC 132/2023, LC 214/2025, LC 227/2026): em 2026 CBS (0,9%) e IBS (0,1%) são alíquotas de teste, com recolhimento dispensado para quem cumpre as obrigações acessórias, e as skills avisam que vale a regra do fato gerador e não ensinam o que não está vigente. Há pontos marcados com `[conferir]`, como a lei local de auto estadual ou municipal, a contagem em dias úteis na LEF, os valores mínimos do parcelamento ordinário e a aplicação no tempo das causas novas de interrupção da prescrição. **A contagem de cada prazo é sua**: onde a skill traz conta, ela é sugestão a conferir e abre a primeira mensagem com ALERTA (repetido na linha "Prazo" do plano) quando o vencimento provável está a 5 dias úteis ou menos; onde a contagem é incerta (úteis × corridos, transição), conta os dois e usa o mais curto. Revisado após o teste de 20/10/2026. Onde a peça pede julgado, a skill deixa `[INSERIR JULGADO: ...]` pra você preencher com um julgado conferido. As skills nunca calculam tributo, multa, juros, indébito, desconto nem parcela: listam o que entra.

Dado sensível (sigilo fiscal, IR, extrato bancário, dado de saúde em isenção): use iniciais, tarje o documento e não suba processo em segredo de justiça para conta individual.

---

*O Kit Tributário é um método de organização e produtividade que você instala na sua própria conta do Claude ou do ChatGPT. Não é serviço jurídico, consultoria nem revisão de peças. O que a IA gera é rascunho: quem confere, assina e responde pela peça, pelo prazo e pela relação com o cliente é o advogado. Claude é marca da Anthropic e ChatGPT é marca da OpenAI; este é um produto independente da Lumos, sem vínculo com nenhuma das duas.*
