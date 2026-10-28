# Kit Empresarial e Contratos: comece aqui

Complemento do Advoclaude. Cada skill soma ao método **Peça a partir da ficha** e ao **Plano antes de gerar** o que é próprio do contrato ou da peça, e lê o módulo `area-empresarial`. As skills de contrato aprofundam o tipo e não repetem os métodos gerais `contrato-a-partir-do-briefing` e `auditor-de-contratos`; em todas, diga o lado (pró-contratante ou pró-contratado, majoritário ou minoritário, credor ou devedor). As regras de sempre continuam valendo: ficha antes, plano antes, nunca inventar julgado e conferência antes de protocolar ou assinar.

| Skill | Pra quê |
|---|---|
| **Contrato de prestação de serviços** | CC 593 a 609, escopo, SLA, reajuste anual, rescisão, multa (CC 412-413), LGPD, alerta de pejotização |
| **Acordo de sócios** | Quotistas de Ltda: tag e drag along, lock-up, saída, não concorrência, deadlock, limite do pacto separado |
| **Contrato social e alteração** | Ltda e SLU, quóruns do CC 1.071-1.076 (Lei 14.451/2022), registro na Junta em 30 dias, DREI |
| **NDA e confidencialidade** | Unilateral ou bilateral, definição, exceções, prazo em duas camadas, multa, segredo de empresa, LGPD |
| **Dissolução parcial e apuração de haveres** | CPC 599-609, CC 1.028-1.032 e 1.085, data de corte, critério do art. 606, quesitos da perícia |
| **Habilitação e impugnação de crédito** | Lei 11.101, arts. 7º a 20 (Lei 14.112/2020), prazos corridos, divergência, retardatária, classe |
| **Notificação e distrato empresarial** | Mora, resolução e resilição (CC 472-473), notificação judicial, quitação e o que não quitar |

## Instalação

- **Claude:** em **Customize > Skills**, envie os 7 arquivos `.zip` da pasta `claude/zips/`.
- **ChatGPT:** envie `chatgpt/kit-empresarial-e-contratos.md` em **Conhecimento** e acrescente nas instruções a linha de `chatgpt/linha-nas-instrucoes-do-gpt.md`.

As referências de lei e jurisprudência foram conferidas em outubro de 2026, revisadas após o teste em 20/10/2026 e passaram por revisão de lei na fonte em 21/10/2026 (Câmara dos Deputados, Planalto, Banco Nacional de Precedentes do CNJ, Manual de Registro de Sociedade Limitada da DREI em PDF). O que as skills já consideram: Lei 14.451/2022 (quórum de Ltda), Lei 14.195/2021 (EIRELI virou sociedade limitada unipessoal), Lei 14.905/2024 (juros e correção do CC, em vigor desde 30/8/2024), Lei 14.112/2020 (recuperação e falência, inclusive a renumeração do art. 99 e a decadência de 3 anos do art. 10, §10), Lei 9.609 (software feito sob contrato de serviço pertence ao contratante, salvo cláusula), Res. CD/ANPD 15/2024 (3 dias úteis no incidente), IN DREI/MEMP 1/2024, 1/2025 e 1/2026, Tema 1389 do STF (pejotização, afetado, sem tese, suspensão nacional levantada em 06/2026) e Tema 1250 do STJ (honorários em habilitação). A reforma do Código Civil (PL 4/2025) e o PL 170/2025 (recuperação) são projetos, não lei. Há pontos que as skills marcam com `[conferir]` ou `[INSERIR JULGADO]`, como a contagem do prazo do agravo na recuperação judicial, a prescrição dos haveres e do inadimplemento contratual (sem súmula nem tema) e a taxa legal aplicável. A contagem de cada prazo é sua; a skill mostra a conta sugerida e segue uma régua única de ALERTA: prazo processual ou contratual que vence em 5 dias úteis ou menos; decadência ou prescrição a 60 dias ou menos, ou com a janela já aberta (o arquivamento na Junta, por exemplo); prazo vencido listado no topo. O ALERTA vai na primeira mensagem, antes das perguntas, e o plano ganha a linha "Prazo". Onde a skill e o método `contrato-a-partir-do-briefing` divergirem, vale a skill. Onde a peça pede julgado, a skill deixa `[INSERIR JULGADO: ...]` pra você preencher com um julgado conferido. As skills nunca calculam dívida, multa, juros, reajuste nem haveres: listam o que entra.

Dados de sócios, faturamento e segredos de empresa: use iniciais e a ficha, nunca o perfil do escritório.

---

*O Kit Empresarial e Contratos é um método de organização e produtividade que você instala na sua própria conta do Claude ou do ChatGPT. Não é serviço jurídico, consultoria nem revisão de peças. O que a IA gera é rascunho: quem confere, assina e responde pela peça, pelo contrato, pelo prazo e pela relação com o cliente é o advogado. Claude é marca da Anthropic e ChatGPT é marca da OpenAI; este é um produto independente da Lumos, sem vínculo com nenhuma das duas.*
