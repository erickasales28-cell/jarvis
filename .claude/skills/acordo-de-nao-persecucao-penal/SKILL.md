---
name: acordo-de-nao-persecucao-penal
description: Use quando o advogado pedir ANPP, acordo de não persecução penal, "o cliente quer fazer acordo com o MP", pedido de oferecimento de ANPP, ANPP depois da denúncia, recusa do MP em oferecer o acordo, ou análise se cabe ANPP. Transação penal e suspensão condicional do processo são da skill defesa-no-juizado-especial-criminal. Complementa peca-a-partir-da-ficha com o CPP 28-A inteiro, o teste de cabimento em ordem, a retroatividade e a confissão (Temas 1098 e 1303 do STJ), o RESE do art. 581, XXV e a remessa ao órgão superior.
---

# Acordo de não persecução penal

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em `metodos/peca-a-partir-da-ficha.md`), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-penal` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do ANPP.

Onde esta skill e o módulo `area-penal` divergirem, vale esta skill (atualizada em 20/10/2026).

## Antes do roteiro

Quando o pedido é consulta ("dá pra fazer acordo?"), o plano é de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se o teste abaixo barrar o acordo, pare e responda a consulta, sem plano nem peça.

Faça o teste de cabimento **nesta ordem** e mostre o resultado ao advogado antes de redigir:
1. **Não é caso de arquivamento** e o investigado confessa **formal e circunstanciadamente** (caput). Pergunte: o cliente admite o fato? A confissão é condição do acordo e pode ser formalizada na assinatura (Tema 1303 do STJ); o advogado precisa decidir com o cliente, que fica ciente do uso (§10: descumprimento leva à denúncia). Não escreva confissão em nome do cliente.
2. **Sem violência ou grave ameaça** e **pena mínima inferior a 4 anos**, considerando as causas de aumento e de diminuição do caso concreto (§1º). Liste tipo, majorantes e minorantes; a conta é do advogado.
3. **Vedações do §2º:** I cabe transação penal (Lei 9.099, art. 76); II reincidente, ou elementos de conduta criminal habitual, reiterada ou profissional, salvo infrações pretéritas insignificantes; III beneficiado nos 5 anos anteriores **ao cometimento da infração** por ANPP, transação ou suspensão condicional (a contagem parte da data do fato, não da proposta); IV violência doméstica ou familiar, ou crime contra a mulher por razões de sexo feminino, em favor do agressor. Esta última casa com a Súmula 536 do STJ (sem transação nem sursis em Maria da Penha).
4. **Pergunte a data do fato e de início do processo:** muda a oportunidade (abaixo).
5. Se o ANPP não couber, a alternativa (transação, art. 76, ou suspensão condicional, art. 89) é da skill `defesa-no-juizado-especial-criminal`; aqui só registre que o §11 permite ao MP usar o descumprimento do ANPP para negar a suspensão. Não analise o sursis nesta skill.

## Quando e como o advogado provoca

- **Confissão: continua requisito (caput do 28-A), formal e circunstanciada, mas não precisa ter sido feita no inquérito nem antes no processo.** Tema 1303 do STJ (conferido no BNP/CNJ em 19/10/2026): a confissão no inquérito não é exigência do 28-A, é inválida a recusa da proposta baseada na falta dela, e a confissão pode ser formalizada na assinatura do acordo, perante o MP, com o investigado assistido por defesa técnica. Nunca diga ao advogado que o ANPP "dispensa" a confissão: muda o momento, não a exigência.
- **Processos em andamento em 18/09/2024** (data do julgamento do Plenário do STF sobre ANPP em processos em curso, que o Tema 1098 menciona; traga o acórdão pelo conector, `buscar_stf`), em que o ANPP caberia em tese e não foi oferecido, ou foi negado sem justificativa idônea: o MP, de ofício, a pedido da defesa ou por provocação do juiz, **deve manifestar-se motivadamente, na primeira oportunidade em que falar nos autos, sobre o cabimento do acordo** (STJ Tema 1098, item 3). Para processos em andamento na entrada em vigor da Lei 13.964/2019, o Tema 1098 (item 2) admite o ANPP **se pedido antes do trânsito em julgado da condenação**, mesmo sem confissão até aquele momento; a confissão se formaliza então pelo Tema 1303. Conferido no BNP/CNJ em 19/10/2026.
- **Investigações e ações iniciadas a partir de 18/09/2024:** o ANPP é admissível **antes do recebimento da denúncia**, sem prejuízo de propô-lo no curso da ação (mesmo Tema 1098).
- Na prática: peça ao MP por petição na fase de inquérito, e repita na **resposta à acusação** (ver `resposta-a-acusacao`), requerendo manifestação motivada, mas só se o cliente decidir admitir o fato: com tese de negativa de autoria, o pedido pode colidir com a defesa.

## Estrutura

1. **Petição ao MP ou ao juiz:** qualifica o investigado; demonstra cada requisito (tabela com dispositivo e fato da ficha); declara a disposição de confessar e cumprir; propõe condições (as do caput, abaixo).
2. **Condições (caput, I a V):** reparação do dano ou restituição, salvo impossibilidade; renúncia a bens e direitos que o MP indicar como instrumento, produto ou proveito; prestação de serviços à comunidade pelo tempo da pena mínima reduzida de um a dois terços (CP 46); prestação pecuniária (CP 45); outra condição proporcional e compatível. As condições podem ser cumulativas ou alternativas. Proponha a menos onerosa que a ficha sustenta. Valores e prazos: `[DEFINIR]`, nunca calcule.
3. **Formalização:** por escrito, assinado pelo MP, investigado e defensor (§3º); **audiência de homologação** com verificação da voluntariedade e da legalidade (§4º). Prepare o cliente para a audiência. Se o juiz achar as condições inadequadas, devolve ao MP para reformular com concordância do investigado e do defensor (§5º); se recusar a homologação, volta ao MP para complementar a investigação ou denunciar (§§7º e 8º).
4. **Depois de homologado:** execução no juízo da execução penal (§6º); a vítima é intimada (§9º); o acordo não vai à certidão de antecedentes (§12); cumprido, extinção da punibilidade (§13). Descumprimento: o MP comunica o juízo para rescisão e denúncia (§10).

## Recusa do MP

- **Recusa em propor:** o investigado pode requerer a remessa dos autos ao órgão superior do MP, na forma do art. 28 (§14). Peça nesse sentido, com a demonstração dos requisitos e a crítica ao fundamento da recusa. Recusa baseada em critério fora da lei (ex.: negar a proposta só porque o investigado não confessou no inquérito, o que o Tema 1303 do STJ declara inválido) é o ângulo de ataque; busque o julgado.
- **Recusa de homologação pelo juiz:** cabe RESE (CPP 581, XXV), 5 dias para interpor e 2 para as razões (586 e 588). Confira a hipótese.
- **Analogia do sursis:** na suspensão condicional do processo, a recusa vai ao Procurador-Geral (Súmula 696 do STF); não a use no lugar do §14.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "acordo de não persecução penal", "recusa do MP ao ANPP" e "ANPP e confissão" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Os Temas 1098 e 1303 do STJ e as Súmulas 536 do STJ e 696 do STF podem entrar pelo número.

## Não fazer

- Não propor ANPP onde cabe transação (§2º, I) nem em violência doméstica (§2º, IV).
- Não deixar o cliente confessar sem orientação: a confissão é requisito e o descumprimento leva à denúncia.
- Não calcular a pena mínima nem as condições.
- Não ignorar a vítima: reparação do dano e intimação (§9º) pesam na homologação.
- Não afirmar que o ANPP "limpa" os antecedentes sem lembrar que conta para a vedação de 5 anos (§§2º, III, e 12).
- Não pedir ao juiz que imponha o acordo ao MP: a proposta é do MP e a via contra a recusa é a remessa ao órgão superior (§14).

*Referências conferidas em 20/10/2026 (CPP consolidado na Câmara dos Deputados; Lei 9.099 na Câmara; BNP/CNJ de 19/10/2026). Revisão de 20/10/2026. Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
