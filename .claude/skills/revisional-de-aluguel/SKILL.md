---
name: revisional-de-aluguel
description: Use quando o advogado pedir ação revisional de aluguel, revisão do valor do aluguel, aluguel provisório, "baixar o aluguel", "aumentar o aluguel pro valor de mercado", contestação de revisional, ou ação renovatória de locação comercial. Complementa peca-a-partir-da-ficha com os arts. 19, 68 e 69 da Lei 8.245 (3 anos, valor na inicial, aluguel provisório de 80%, retroação à citação) e o alerta do prazo decadencial da renovatória (art. 51, §5º).
---

# Revisional de aluguel (e alerta da renovatória)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. O plano tem até 5 perguntas, priorizadas (data do contrato e do último acordo, locação residencial ou comercial, data final do contrato, valor pretendido com avaliação, cláusula de renúncia). Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo, a estrutura dele manda. Esta skill acrescenta o que é próprio da revisional, dos dois lados, e o alerta da renovatória.

## Antes do roteiro

- **Passaram 3 anos?** A revisão só cabe "após três anos de vigência do contrato ou do acordo anterior" (art. 19). Pergunte a data do contrato e a do último acordo que fixou valor (art. 18). Mostre a conta sugerida (termo inicial, resultado provável) como sugestão a conferir.
- **Não cabe revisional** enquanto pender prazo de desocupação ou se ele foi fixado por acordo ou decisão (art. 68, §1º).
- **Há renúncia à revisão?** Só o contrato built to suit do art. 54-A (locação não residencial em que o locador compra, constrói ou reforma o imóvel sob medida) admite a renúncia (§1º). Fora dele, cláusula de renúncia é questão a conferir `[conferir jurisprudência]`.
- **Reajuste não é revisão.** O reajuste por índice corre sem juiz. Aluguel em moeda estrangeira, atrelado ao câmbio ou ao salário mínimo é vedado (art. 17).
- **Perguntas:** locador ou locatário é o autor; valor atual e periodicidade de reajuste; **valor pretendido** (a inicial o indica, art. 68, I); laudo ou avaliação de mercado e imóveis comparáveis, que o cliente deve providenciar (a skill não inventa avaliação); se o contrato é residencial ou comercial e **quando termina**.

## Estrutura

1. Procedimento: o art. 68 fala em rito sumário, que o CPC/2015 não tem mais. Aplica-se o procedimento comum, com as adaptações da lei especial (CPC 1.049, parágrafo único). Foro do imóvel (art. 58, II). Valor da causa: o art. 58, III, fala em 12 aluguéis; se é o vigente, o pretendido ou a diferença é ponto de `[conferir]`.
2. Inicial: CPC 319 + **valor do aluguel que se quer fixar** (art. 68, I), prova dos 3 anos, laudo, comparáveis.
3. **Aluguel provisório** (art. 68, II), a pedido, ao designar a audiência de conciliação, devido desde a citação: na ação do **locador**, no máximo **80% do valor pedido**; na ação do **locatário**, no mínimo **80% do aluguel vigente**. Peça-o em tópico próprio, com os elementos que o sustentam. Durante a ação ele é reajustado pela periodicidade pactuada (§2º). O réu pode pedir revisão do provisório até a audiência, com elementos (III), e o pedido **interrompe** (não suspende: o prazo recomeça do zero) o prazo do recurso contra a decisão que fixou o provisório (V).
4. **Contestação:** deve trazer **contraproposta** se discorda do valor (art. 68, IV). Sem ela, a defesa fica fraca. Perícia se necessária, depois audiência de instrução.
5. **Efeitos (art. 69):** o aluguel fixado retroage à **citação**. As diferenças, descontados os provisórios pagos, são corrigidas e exigíveis do trânsito em julgado; a execução corre nos mesmos autos. Se o pedido é do locador, a sentença pode mudar a periodicidade e o indexador (§1º). Peça isso.

## Alerta: renovatória (art. 51)

Se a locação é **comercial** e o contrato acaba em menos de um ano, abra com **ALERTA**, antes de seguir com a revisional. O valor também se discute na renovatória (art. 72, II), e o direito se perde se a ação não for proposta na janela.
- **Requisitos cumulativos (art. 51):** contrato escrito e por prazo determinado (I); prazo mínimo de 5 anos, sozinho ou somando contratos escritos ininterruptos (II); 3 anos ininterruptos no mesmo ramo (III).
- **Janela decadencial (art. 51, §5º):** a ação é proposta no máximo 1 ano e no mínimo 6 meses antes do fim do contrato. **Conta sugerida, a conferir:** parta da data final do contrato da ficha, volte 6 meses (limite final) e 1 ano (início); decadência não se interrompe. É decadência e a janela já está aberta quando o contrato acaba em menos de um ano: **ALERTA** na primeira mensagem, antes das perguntas, com início da janela, limite final e dias que faltam; o plano ganha a linha "Prazo". Passou o limite final: VENCIDO no topo, com o efeito (perdeu-se o direito à renovação, sem remédio). Limite em sábado, domingo ou feriado: mostre a prorrogação legal que couber (CC 132, §1º, fala só em feriado `[conferir fim de semana na decadência]`), mas planeje pelo dia útil anterior e proponha antes. **Régua do ALERTA (a mesma em todas as skills):** prazo processual ou contratual em 5 dias úteis ou menos; decadência ou prescrição em 60 dias ou menos, ou janela aberta; prazo vencido no topo.
- **Inicial (art. 71):** prova dos requisitos (I), cumprimento do contrato (II), quitação de impostos e taxas do locatário (III), condições da renovação (IV), fiador e sua idoneidade com aceite (V e VI), prova de cessão ou sucessão (VII). Contestação do locador é limitada (art. 72); aluguel provisório de até 80% do pedido, a pedido do locador (§4º).
- Não renovada, o mandado de despejo dá 30 dias para desocupar, mas só **se o locador pediu o despejo na contestação** (art. 74): do lado do locador, o pedido não pode faltar; do lado do locatário, sem esse pedido não há mandado na renovatória.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "ação revisional de aluguel prazo de três anos", "aluguel provisório art. 68 revisional" e "renovatória prazo decadencial art. 51" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não propor antes dos 3 anos nem com prazo de desocupação pendente.
- Não pedir revisão sem indicar o valor pretendido nem sem avaliação.
- Não pedir retroação à data da notificação ou do pedido amigável: a lei retroage à citação.
- Não citar "rito sumário" como vigente.
- Não calcular aluguel, diferenças nem percentuais. Prazo: conta sugerida, nunca data certa.

*Referências conferidas em 21/10/2026 (Lei 8.245 no Planalto via proxy, arts. 17 a 19, 51, 54-A, 58, 68, 69, 71, 72 e 74, sem lei alteradora posterior a 2012; CPC 1.049 e CC 132, §1º, na Câmara dos Deputados). Revisão de lei em 21/10/2026: art. 68, V ("interrompe" o prazo do recurso) e art. 74 ("se houver pedido na contestação"). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
