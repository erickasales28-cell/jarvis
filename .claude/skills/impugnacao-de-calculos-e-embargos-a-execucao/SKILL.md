---
name: impugnacao-de-calculos-e-embargos-a-execucao
description: Use quando o advogado pedir impugnação aos cálculos de liquidação, impugnação à conta, embargos à execução trabalhista, embargos à penhora, garantia do juízo, correção monetária e juros na execução trabalhista, ou conferência de conta do PJe-Calc. Complementa peca-a-partir-da-ficha com os prazos dos arts. 879 e 884, o que cabe em cada peça, o índice de correção depois da ADC 58 e da Lei 14.905/2024 e a lista do que entra na conta.
---

# Impugnação de cálculos e embargos à execução (CLT, arts. 879 e 884)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-trabalhista`. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da liquidação e dos embargos, do lado do executado e do exequente. **Valor e conta a skill não faz**: ela confere a conta alheia contra a lista abaixo e deixa `[valor: PJe-Calc do escritório]`.

## Prazo, prescrição e plano
Mostre a conta sugerida (termo inicial, regra de contagem, úteis ou corridos com a base legal, dias pulados, resultado provável), marcada `[conferir: calendário do TRT]` e nunca como data certa. Na PRIMEIRA mensagem, antes das perguntas, abra com **ALERTA DE PRAZO** se o prazo vence em 5 dias úteis ou menos, e com **ALERTA DE PRESCRIÇÃO** se faltam 60 dias ou menos ou a janela já abriu; prazo que JÁ venceu vai no topo, como **VENCIDO**. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (publicação × disponibilização; úteis × corridos): conte os dois cenários e use o mais curto, com `[conferir]`. Sem a data de hoje, pergunte. O plano ganha a linha "Prazo"; no máximo 5 perguntas, priorizadas, o resto vira `[DEFINIR]`. Onde esta skill divergir do módulo `area-trabalhista`, vale esta skill; avise o advogado.

Aqui o prazo de maior consequência é o da impugnação à conta: 8 dias úteis comuns (art. 879, §2º), com preclusão. Conte do dia útil seguinte à intimação, em dois cenários (A: a data da ficha é a publicação; B: é a disponibilização), vale o mais curto; mostre o último dia provável. Havendo garantia ou penhora, mostre ao lado a conta dos embargos (5 dias, art. 884). A União tem 10 dias quando há contribuição previdenciária (§3º).

## Antes do roteiro
- **Em que fase está?** Conta homologada ou só apresentada? Já houve intimação pra pagar ou garantir? Garantia feita? A resposta decide a peça.
- **Impugnação à conta:** prazo comum de **8 dias úteis**, **fundamentada, com indicação dos itens e valores impugnados, sob pena de preclusão** (art. 879, §2º). A União tem 10 dias quando há contribuição previdenciária (§3º). Peça a sentença, a decisão que fixou os parâmetros de liquidação, o cálculo (e o arquivo do PJe-Calc) e o despacho de intimação.
- **Garantia:** citado, o executado paga ou garante em 48 horas, sob pena de penhora (art. 880). Garantia por depósito atualizado, seguro-garantia judicial ou penhora, na ordem do art. 835 do CPC (art. 882).
- **Embargos à execução:** **5 dias** da garantia ou da penhora, e o exequente tem igual prazo pra impugnar (art. 884, caput). Entidades filantrópicas e seus diretores são dispensados da garantia (§6º). Ente público: `[conferir prazo e regra, Lei 9.494/1997]`. A conta vai no bloco acima.
- **Pergunte:** qual lado, o título (sentença, acórdão, acordo), a data do trânsito, a data do ajuizamento e da citação (marcos de juros; o ajuizamento também define o regime da gratuidade que pese em custas e honorários: antes de 16/09/2026, Tema 21 do TST e Súmula 463, I; depois, ADC 80), o que já foi pago, o cálculo de cada parte.

## O que cabe em cada peça
- **Impugnação à conta (art. 879, §2º):** erro de cálculo, de parâmetro, de índice, de base, de período. **Não se reabre a causa**: a liquidação não pode modificar nem inovar a sentença nem discutir a matéria da causa principal (§1º).
- **Embargos (art. 884, §1º):** cumprimento da decisão ou do acordo, quitação ou prescrição da dívida. Mais a inexigibilidade do título fundado em lei ou ato declarado inconstitucional pelo STF (§5º). A sentença de liquidação só é atacável nos embargos (§3º); a preclusão do §2º do art. 879 pesa sobre quem não impugnou a conta no prazo `[conferir posição do TRT]`.
- **Prescrição intercorrente:** 2 anos, a contar do descumprimento de ordem judicial pelo exequente (art. 11-A). A Súmula 114 do TST foi cancelada em 2025: não cite.
- **Desconsideração e sócio:** incidente do art. 855-A; na execução, a decisão interlocutória do incidente desafia agravo de petição sem garantia do juízo (§1º).
- **Protesto e cadastros:** só 45 dias depois da citação, sem garantia (art. 883-A).

## Correção monetária e juros (confira o estado atual na conta)
- **ADC 58 e 59 (STF):** afastaram a TR (art. 879, §7º, da CLT, com notas "Vide ADC 58, ADC 59, ADI 5867 e ADI 6021"). Até 29/08/2024: fase pré-judicial com IPCA-E e juros do art. 39, caput, da Lei 8.177/1991; do ajuizamento em diante, Selic, que engloba juros e correção. O acórdão original da ADC 58 dizia "citação"; o STF corrigiu o erro material nos embargos de declaração (sessão virtual de 15 a 22/10/2021, ata publicada em 09/12/2021, data que consta da Resolução 225/2025 do TST): o marco é o **ajuizamento**, e é como as Turmas do TST aplicam. Há TRT que ainda escreve "citação": o que vale na execução é o que a sentença fixou.
- **Lei 14.905/2024:** a SBDI-1 do TST uniformizou o tema (outubro de 2024): a partir de 30/08/2024, correção pelo IPCA e juros pela taxa legal do art. 406, §1º, do CC (Selic menos IPCA), com a possibilidade de taxa zero (§3º); as Turmas aplicam assim em 2026. `[INSERIR JULGADO: SBDI-1, Lei 14.905 e correção trabalhista, conferir]`. Dano moral: há Turma aplicando só a Selic desde o ajuizamento, sem fase pré-judicial `[conferir]`. **Antes de impugnar o índice, veja o que a sentença fixou e o que o TRT aplica** (coisa julgada pesa mais que a tese nova) e confira a parametrização vigente do PJe-Calc. As Súmulas 307, 311 e 439 do TST (juros e correção) foram canceladas em 2025 por força da ADC 58 e da ADI 5867: não use.

## Lista do que entra na conta (pra conferir a conta alheia)
Principal e reflexos (o DSR majorado por horas extras habituais repercute em férias, 13º, aviso e FGTS só pras horas extras trabalhadas a partir de 20/03/2023: OJ 394 da SBDI-1 na redação do Tema 9 do TST, IRR; antes disso, não), FGTS e multa de 40%, divisor e adicionais, períodos de afastamento, valores já pagos e deduzidos, limite dos pedidos e da sentença, marco inicial de juros (ajuizamento ou citação), índices por período, contribuição previdenciária (cota do empregado e do empregador, por competência), imposto de renda (rendimentos acumulados: `[conferir]`), honorários do art. 791-A (base), honorários periciais, custas (art. 789) e custas da execução (art. 789-A: impugnação à sentença de liquidação R$ 55,35; embargos à execução e agravo de petição R$ 44,26), multa e indenização por litigância de má-fé.

## Estrutura
1. Tempestividade e fase. 2. **Quadro de impugnação:** item | valor do cálculo | valor correto | fundamento (com a conta alternativa em anexo). 3. Tópicos por item, com a decisão exequenda transcrita. 4. Pedido de homologação da conta do impugnante e **liberação do incontroverso**. 5. Nos embargos: garantia e tempestividade, matéria do §1º do art. 884, pedido.

## Julgado
Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema do item impugnado (por exemplo "correção monetária trabalhista, Lei 14.905/2024" ou "limites da liquidação, coisa julgada") (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou `buscar_tst`). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer
- Não impugnar "os cálculos" em bloco: sem item e valor, preclui.
- Não discutir o mérito da condenação (coisa julgada, art. 879, §1º).
- Não deixar passar os 8 dias da impugnação ou os 5 dos embargos: confira a intimação.
- Não refazer a conta: indique o que entra e deixe o valor pro PJe-Calc.

*Referências conferidas em 19/10/2026 e revisadas em 20 e 21/10/2026 (CLT no Planalto pelo proxy; Resolução 225/2025 no PDF oficial do juslaboris, inclusive a data da ata dos embargos da ADC 58; Tema 9 do TST, OJ 394, no BNP/CNJ; embargos da ADC 58 por notícia do STF reproduzida em acórdãos do TST; tese da SBDI-1 sobre a Lei 14.905 por atas, acórdãos e notícias do TST). Lei, súmula e tese mudam: por isso existe a conferência antes de protocolar.*
