---
name: resposta-a-acusacao
description: Use quando o advogado pedir resposta à acusação, defesa preliminar, "defesa prévia", resposta do art. 396, pedido de absolvição sumária, rol de testemunhas da defesa, ou defesa depois de citado por denúncia. Complementa peca-a-partir-da-ficha com o CPP 396, 396-A, 397 e 395, o que se perde se não for dito agora (rol, preliminares, ANPP e sursis) e as armadilhas de citação por edital e de rito.
---

# Resposta à acusação

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em `metodos/peca-a-partir-da-ficha.md`), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-penal` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da resposta à acusação.

Onde esta skill e o módulo `area-penal` divergirem, vale esta skill (atualizada em 20/10/2026).

## Antes do roteiro

- **Prazo:** 10 dias da citação (CPP 396, caput). Citação por edital: o prazo só começa com o comparecimento pessoal do acusado ou do defensor constituído (396, parágrafo único). A contagem é do advogado; a skill nunca crava data. Pergunte a data da citação pessoal ou do comparecimento.
- **Rito:** pena máxima a partir de 4 anos, ordinário; abaixo, sumário (CPP 394, §1º). Os arts. 395 a 398 valem para todos os ritos de primeiro grau (394, §4º). Drogas: defesa prévia em 10 dias da notificação, antes do recebimento da denúncia, com até 5 testemunhas (Lei 11.343, art. 55, caput e §1º). Júri: resposta em 10 dias da citação (CPP 406). Funcional afiançável: resposta preliminar em 15 dias antes do recebimento (CPP 514); com inquérito, o STJ a dispensa (Súmula 330), o STF diverge: confira o tribunal da causa.
- **Preso ou solto, e desde quando.** Se preso, a peça abre com o pedido de liberdade (ver `liberdade-provisoria-e-revogacao-da-preventiva`).
- **Ficha mínima:** denúncia lida inteira (fato, circunstâncias, classificação, rol, CPP 41); data do recebimento e quem recebeu (o texto do CPP 3º-C diz que o juiz das garantias atua até o recebimento da denúncia, mas o STF, ao julgar as ADIs do Pacote Anticrime em 2023, assentou que a competência dele cessa com o oferecimento; a resposta vai ao juiz da instrução, que reexamina as cautelares em 10 dias, 3º-C, §2º; confira se a comarca o instalou); versão do cliente marcada como versão; testemunhas com nome, endereço e o que cada uma prova; documentos e mídias; antecedentes; se houve confissão no inquérito; pena mínima abstrata com causas de aumento e diminuição, para sursis e ANPP.

## Estrutura

1. Endereçamento, qualificação, tempestividade com a data da citação.
2. Preliminares (CPP 396-A): inépcia (395, I), falta de pressuposto ou condição da ação (395, II), falta de justa causa (395, III), incompetência, nulidades do inquérito e das provas já obtidas, prescrição. Exceções (suspeição, incompetência) correm em apartado (396-A, §1º); suspeição exige procuração com poderes especiais (CPP 98).
3. Absolvição sumária (CPP 397): I excludente de ilicitude; II excludente de culpabilidade, salvo inimputabilidade; III fato evidentemente não criminoso; IV extinção da punibilidade. Peça com a prova documental que já sustenta o inciso.
4. Mérito em síntese: negativa de autoria, tipicidade, desclassificação. Não antecipe toda a tese; resguarde o que depende de prova oral.
5. Provas (396-A, caput): documentos e justificações; **rol de testemunhas aqui**, qualificadas e com pedido de intimação (CPP 401: até 8 por fato no ordinário; 532: até 5 no sumário). Diligências, perícia e mídias com origem.
6. Pedidos: absolvição sumária; subsidiariamente, instrução; benefícios cabíveis.

## Teses e pedidos que costumam caber

- **ANPP e sursis processual:** se a ficha mostra pena mínima abaixo de 4 anos e crime sem violência ou grave ameaça, o ANPP é cabível em tese (CPP 28-A; ver `acordo-de-nao-persecucao-penal`). **Antes de pedi-lo, avise o advogado:** o ANPP exige confissão (caput; pode ser formalizada na assinatura, Tema 1303 do STJ) e pedi-lo pode colidir com a tese de negativa de autoria ou com o pedido de absolvição sumária do cliente que nega o fato. É decisão do advogado com o cliente. Pergunte se ele admite o fato; sem essa decisão, não peça, ou formule em caráter subsidiário e diga que o faz assim. Não escreva confissão em nome do cliente. Pena mínima até 1 ano: suspensão condicional do processo (Lei 9.099, art. 89); recusa do promotor, Súmula 696 do STF. Desclassificação não impede o sursis (Súmula 337 do STJ); concurso de crimes: Súmulas 243 do STJ e 723 do STF.
- **Tráfico privilegiado:** inquéritos e ações em curso não afastam o art. 33, §4º (Tema 1139 do STJ, conferido no BNP em 19/10/2026).
- **Prova do inquérito:** acesso amplo aos autos é direito da defesa (Súmula Vinculante 14). Quebra da cadeia de custódia (CPP 158-A a 158-F), reconhecimento fora do rito do 226, busca pessoal sem fundada suspeita (244) e ingresso em domicílio sem fundadas razões justificadas a posteriori (Tema 280 do STF) entram como preliminar de ilicitude quando a ficha mostrar o vício.
- **Falta de resposta:** o juiz nomeia defensor e dá vista por 10 dias (396-A, §2º); a resposta pobre não é causa de nulidade sem prejuízo (Súmula 523 do STF), por isso o conteúdo vem agora.
- **Citação por edital:** o comparecimento do defensor inicia o prazo; sem comparecimento, suspensão do processo e da prescrição (CPP 366). Antes de se apresentar, pense se convém.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "absolvição sumária", "inépcia da denúncia", "ingresso em domicílio sem mandado" e "tráfico privilegiado" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 330, 337 e 243 do STJ, 696 e 723 do STF e o Tema 1139 do STJ podem entrar pelo número.

## Não fazer

- Não deixar o rol de testemunhas para depois: ele vai na resposta (396-A).
- Não guardar nulidade relativa para os memoriais: não arguida na primeira oportunidade, preclui (CPP 571 e 572 [conferir o inciso do rito]). Nulidade absoluta e ilicitude da prova podem voltar depois, mas pesam mais aqui.
- Não confessar nem narrar a versão do cliente sem ele ter decidido; versão entra como "versão do cliente".
- Não chamar o cliente de criminoso: "a denúncia imputa".
- Não pedir absolvição sumária por falta de prova: o inciso III do 397 exige fato evidentemente não criminoso, e dúvida sobre autoria vai para a instrução.
- Não calcular pena mínima de cabeça para sursis e ANPP: liste tipo, causas de aumento e diminuição e deixe a conta ao advogado.

*Referências conferidas em 20/10/2026 (CPP consolidado na Câmara dos Deputados; Lei 11.343 no Planalto; BNP/CNJ de 19/10/2026). Revisão de 20/10/2026. Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
