---
name: execucao-de-alimentos
description: Use quando o advogado pedir cumprimento de sentença de alimentos, execução de alimentos, pedido de prisão do devedor, execução pelo rito da penhora, "pensão atrasada", ou defesa do devedor de alimentos (justificativa, impugnação). Complementa peca-a-partir-da-ficha com a separação das parcelas entre prisão e penhora (CPC 528, §7º, Súmula 309), o prazo de 3 dias, a intimação pessoal e a defesa do executado.
---

# Execução de alimentos

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em `metodos/peca-a-partir-da-ficha.md`), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-familia-e-sucessoes` (mesma pasta). Se a skill `advo-escritorio` não estiver instalada, avise e não redija. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da execução de alimentos, dos dois lados.

## Antes do roteiro

- **Título:** sentença ou decisão interlocutória (cumprimento, CPC 528 a 533) ou título extrajudicial, como acordo em escritura ou referendado (execução, CPC 911 a 913). Alimentos provisórios e sentença ainda não transitada correm em autos apartados (CPC 531, §1º). A prisão cabe nos dois (CPC 911, par. único, manda aplicar o art. 528, §§2º a 7º).
- **Foro:** o juízo da fixação ou o domicílio do exequente (CPC 528, §9º).
- **A decisão que define a peça: prisão ou penhora?**
  - **Prisão (CPC 528, §3º):** só as 3 prestações anteriores ao ajuizamento e as vencidas no curso do processo (CPC 528, §7º; Súmula 309 do STJ). Parcela mais antiga fica de fora.
  - **Penhora (CPC 528, §8º, e arts. 523 e seguintes):** toda a dívida, sem prisão; a impugnação, mesmo com efeito suspensivo, não impede o levantamento mensal do dinheiro penhorado (art. 528, §8º; art. 913).
  - **Padrão: dois requerimentos separados, cada um com o seu demonstrativo.** Optar pela penhora desde logo afasta a prisão (§8º). Então: (1) rito da prisão, só as 3 parcelas e as vincendas; (2) rito da penhora, o restante (15 dias, multa e honorários de 10%, CPC 523, §1º), em petição à parte ou em autos apartados. Cumular num só procedimento é decisão do advogado: busque a jurisprudência do tribunal (`cumulação de prisão e penhora`); sem o conector, `[INSERIR JULGADO]` e entregue os dois separados.
  - Pergunte o **dia do ajuizamento**: ele define as 3 parcelas da prisão.
- **Prazo do executado:** 3 dias, após intimação pessoal, para pagar, provar que pagou ou justificar (CPC 528, caput, e 911). Conta-se em dias úteis (CPC 219; Enunciado 146 da II Jornada de Direito Processual Civil do CJF, que aplica os incisos do art. 231 e afasta o §3º; enunciado não vincula). Há vara que conta corrido: ao pedir a prisão, espere o prazo mais longo.
- **Documentos:** título; demonstrativo discriminado parcela a parcela, com índice, juros e o que foi pago, **separando em dois blocos** o que cabe na prisão e o que só cabe na penhora; comprovante de intimação. Cálculo vem do advogado ou do sistema do tribunal: a skill monta a tabela com as colunas e deixa os valores vazios.

## Estrutura

1. Endereçamento e requerimento de intimação pessoal do executado (CPC 528, caput).
2. Título e histórico do inadimplemento.
3. Demonstrativo em dois blocos (prisão x penhora), cada bloco ligado ao seu requerimento.
4. **Requerimento A (prisão, só o bloco A):** intimação pessoal em 3 dias; protesto do pronunciamento judicial se não houver pagamento, prova ou justificativa aceita (§1º); prisão de 1 a 3 meses, em regime fechado, separado dos presos comuns (§§3º e 4º); ciência ao MP de indício de abandono material se o executado procrastinar (CPC 532).
5. **Requerimento B (penhora, só o bloco B):** intimação para pagar em 15 dias, com multa e honorários de 10% (CPC 523); desconto em folha, com ofício ao empregador e o limite de 50% dos ganhos líquidos para parcelar a dívida junto às vincendas (CPC 529, caput e §3º); bloqueio de ativos financeiros (CPC 854) e penhora pelo sistema do tribunal. Para o credor: a prisão só força as 3 parcelas; o resto vem pela penhora ou pela folha.

## Teses e pedidos que costumam caber

- **Justificativa do executado:** só a prova de fato que gere impossibilidade absoluta de pagar (CPC 528, §2º). Desemprego sem prova de esforço, não.
- **Prisão não paga a dívida** nem suspende as parcelas vincendas (§5º); o pagamento suspende a ordem (§6º).
- **O prazo de 60 dias da Lei 5.478, art. 19, perdeu a força:** vale o de 1 a 3 meses do CPC, segundo decisão da Terceira Turma do STJ de 2023 [conferir no acórdão: só por notícia; cite pelo conector].
- **Se o escritório defende o devedor:** pagar integralmente as 3 últimas parcelas evita a prisão; provar a impossibilidade absoluta; pedir a revisional já, porque o efeito vem da citação (Súmula 621; skill `revisional-e-exoneracao-de-alimentos`); prisão domiciliar excepcional, por idade ou saúde, depende de jurisprudência: busque.
- **Pagamento parcial** e a intimação (pessoal para a prisão; por advogado em segunda execução do mesmo título) são pontos de jurisprudência: busque antes de afirmar.
- **Transferência automática (Lei 15.479/2026, CPC 529-A):** entra em vigor um ano após a publicação de 30/07/2026 (art. 529-A e vigência conferidos no texto da lei em 20/10/2026). Hoje não se pede. Quando valer, prevê bloqueio limitado à prestação em atraso, inclusive em conta de empresário individual.
- **Prisão só para alimentos de família:** alimentos indenizatórios (ato ilícito) e compensatórios não autorizam a prisão civil, segundo as Turmas do STJ: confirme pelo conector antes de pedir.
- **Prescrição:** 2 anos por prestação (CC 206, §2º), sem correr contra o filho menor (CC 197, II).

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "prisão civil por alimentos", "cumulação de prisão e penhora" e "prisão domiciliar do devedor de alimentos" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 309 e 621 do STJ podem entrar pelo número.

## Não fazer

- Não pôr na prisão parcelas anteriores às 3 últimas.
- Não pedir prisão sem intimação pessoal.
- Não somar valores nem atualizar a dívida de cabeça.
- Não dizer ao devedor que a prisão quita a dívida.
- Não pedir prisão por alimentos indenizatórios ou compensatórios: só a pensão de direito de família a autoriza.

*Referências conferidas em 20/10/2026 (Planalto, Câmara dos Deputados, STJ, CJF). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
