---
name: contestacao-de-cobranca-de-cartao
description: Use quando o advogado pedir defesa em ação de cobrança ou monitória de banco ou administradora de cartão de crédito, embargos à monitória, contestação de dívida de fatura, "o cartão que o cliente diz que nunca usou", juros do rotativo, cobrança por cessionária de crédito. Vale para embargos à monitória de cartão; embargos à monitória de outra dívida (cheque, contrato) são da `cobranca-e-monitoria`, e embargos à execução e de declaração têm skill própria. Complementa peca-a-partir-da-ficha com a prova da contratação e das faturas, o valor que o réu entende devido (CPC 702, § 2º) e o teto de 100% do rotativo (Lei 14.690/2023, Resolução CMN 5.112/2023).
---

# Contestação de cobrança de cartão de crédito

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da defesa do cliente de cartão. A contestação cível genérica já existe no kit cível: aqui só o que é da cobrança bancária.

## Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: (a) prazo dos embargos ou da contestação: 15 dias úteis (CPC 701, 702 e 335) contados da juntada do AR ou do mandado cumprido (CPC 231, I e II; citação eletrônica: inciso V; mais de um réu: § 1º); mostre a conta dia a dia. (b) Prescrição da dívida: 5 anos do vencimento (CC 206, § 5º, I), somados ao vencimento da fatura mais antiga cobrada; compare com a data do ajuizamento. Mostre também o cenário com interrupção: parcelamento ou acordo aceito pelo devedor é reconhecimento (CC 202, VI), interrompe uma só vez e o prazo recomeça da data do ato (CC 202, par. único). Prescrição consumada nos dois cenários: ALERTA DE PRESCRIÇÃO e tese principal. O precedente de cartão entra pelo `[INSERIR JULGADO]` do bloco "Datas", abaixo.

## Antes do roteiro

- **Que ação é?** Leia o mandado e a inicial. **Monitória** (CPC 700): o réu tem **15 dias** para pagar ou opor embargos nos próprios autos, sem garantir o juízo (CPC 701 e 702, caput). **Cobrança pelo procedimento comum:** contestação em 15 dias (CPC 335). Mostre a conta (bloco acima) em vez de deixá-la ao advogado. Sem embargos nem pagamento, o mandado vira título judicial (CPC 701, § 2º): não deixe passar.
- **O cartão era pessoal ou da atividade comercial?** Se o cartão serviu à atividade do cliente (comerciante, MEI), pergunte como o crédito foi usado: o CDC depende de ele ser destinatário final (consumidor) ou de vulnerabilidade comprovada.
- **O cliente reconhece o cartão?** Três defesas diferentes: (a) nunca contratou (fraude ou cartão enviado sem pedido); (b) contratou e usou, mas a conta está errada; (c) pagou ou renegociou. Pergunte e registre.
- **Quem cobra:** o emissor ou um cessionário? Cessão exige prova do contrato de cessão e só tem eficácia contra o devedor depois de notificado, ou se ele se declarou ciente por escrito (CC 290).
- **Datas:** primeira fatura, última fatura paga, vencimento da dívida cobrada, data de eventual parcelamento ou acordo, data do ajuizamento. Com elas se faz a conta da prescrição do bloco acima; o termo inicial que o STJ adota para cartão é o vencimento da última fatura não paga, sem tema repetitivo: `[INSERIR JULGADO: prescrição quinquenal da dívida de cartão e termo inicial, conferir]`.
- **Documentos do cliente:** faturas e comprovantes de pagamento, contrato de renegociação, boletim de ocorrência se fraude, comprovante de que o cartão nunca foi desbloqueado.

## Estrutura

1. Preliminares se couberem: ilegitimidade do cessionário sem prova da cessão; inépcia por falta de demonstrativo de débito atualizado (CPC 700, § 2º; Tema 474 sobre demonstrativo); falta de prova escrita; prescrição.
2. **Prova da contratação e das faturas.** Impugne cada fato (CPC 341). O banco deve juntar o contrato assinado e a solicitação, todas as faturas desde a primeira, não só um demonstrativo próprio.
3. Mérito por encargo: juros do rotativo, juros de parcelamento, multa, mora, tarifas, anuidade, seguro.
4. **Valor que o réu entende devido**, com demonstrativo discriminado e atualizado: obrigatório quando alega excesso (CPC 702, § 2º). Se esse for o único fundamento e faltar o valor, os embargos são rejeitados liminarmente (§ 3º). O cálculo é do advogado ou de perito: deixe `[VALOR: conforme demonstrativo do réu]`.
5. Pedidos: improcedência ou procedência parcial; revisão dos encargos; restituição se houve pagamento a maior; reconvenção quando couber (CPC 702, § 6º); inversão do ônus (CDC 6º, VIII); exibição de documentos; perícia contábil; embargos parciais quanto à parcela incontroversa (CPC 702, § 7º).

## Teses e pedidos que costumam caber

- **Teto do rotativo:** juros e encargos do rotativo e do parcelamento da fatura não podem exceder 100% do valor original da dívida (Lei 14.690/2023, art. 28, regulamentado pela Resolução CMN 5.112/2023, de 21/12/2023). Vale para o rotativo iniciado em 03/01/2024 ou depois, e o "valor original" é o montante que migrou para o rotativo (instruções de preenchimento do BACEN e nota do Ministério da Fazenda); dívida anterior segue a regra antiga. Verifique a data em que o saldo foi financiado. A lei limita o total de encargos, não a taxa; na lei (art. 28, § 1º) o teto só incide porque o CMN não aprovou limites próprios em 90 dias. Texto da Resolução não aberto: `[conferir: Resolução CMN 5.112/2023 e ajustes posteriores no site do BACEN]`.
- **Juros:** administradora de cartão é instituição financeira, sem limite da Lei de Usura (Súmula 283, que é específica de administradora de cartão; para banco comum o apoio é a Súmula 596 do STF e o Tema 24). Revisão só com abusividade demonstrada frente à taxa média do BACEN (Tema 27; Súmula 382). Contrato não juntado: taxa média (Súmula 530; Temas 233 e 234). Parâmetro: série "cartão de crédito rotativo" na página "Taxas de juros de operações de crédito" do BACEN (bcb.gov.br/estatisticas/txjuros), que o advogado busca.
- **Capitalização e mora:** capitalização vale se pactuada (Súmula 539; Súmula 541; Tema 247). Juros de mora até 1% ao mês (Súmula 379; Tema 30). Comissão de permanência: Súmulas 30, 294, 296 e 472.
- **Cartão sem pedido:** envio sem solicitação prévia e expressa é prática abusiva e ato ilícito (Súmula 532).
- **Fraude no cartão:** banco responde por fortuito interno (Súmula 479; Tema 466).
- **Monitória com contrato de abertura de crédito em conta-corrente e demonstrativo:** a Súmula 247 admite; para fatura de cartão como prova escrita: `[INSERIR JULGADO: monitória instruída com contrato e faturas de cartão, conferir]`. O contrato de abertura de crédito sozinho não é título executivo (Súmula 233).
- **Negativação durante a ação:** ver a skill `negativacao-e-score`.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "ação monitória cartão de crédito faturas", "juros do rotativo" e "prescrição da cobrança de cartão" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não alegar excesso sem indicar o valor que o réu entende devido (CPC 702, § 2º).
- Não pedir limitação dos juros a 12% ao ano nem tratar o teto de 100% como limite de taxa.
- Não aplicar o teto de 100% a saldo financiado antes de 03/01/2024 sem conferir.
- Não negar a contratação se o cliente usou o cartão: a defesa vira o valor.
- Não calcular a dívida de cabeça: deixe `[VALOR]`. A prescrição é diferente: mostre a conta, com o cenário de interrupção, como sugestão a conferir.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (Planalto: CPC 231, 700 a 702, CC 290 e Lei 14.690/2023, art. 28; BNP/CNJ coletado em 19/10/2026: Súmulas 30, 233, 247, 283, 294, 296, 379, 382, 472, 479, 530, 532, 539 e 541, Temas 24, 27, 30, 233, 234, 247, 466 e 474, Súmula 596 do STF; BACEN e Ministério da Fazenda sobre o teto do rotativo). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
