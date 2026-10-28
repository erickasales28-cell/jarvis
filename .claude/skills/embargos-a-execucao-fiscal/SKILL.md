---
name: embargos-a-execucao-fiscal
description: Use quando o advogado pedir embargos à execução fiscal, defesa em execução fiscal, embargar a execução da PGFN, da Fazenda estadual ou do município, garantia da execução, seguro garantia ou fiança, efeito suspensivo dos embargos, ou impugnação da Fazenda aos embargos. Complementa peca-a-partir-da-ficha com o art. 16 da Lei 6.830 (30 dias, garantia, toda a defesa de uma vez), os três termos iniciais do art. 16 (depósito, juntada da fiança ou do seguro garantia, intimação da penhora; vale o mais antigo) e a CDA. Só com a execução garantida: sem garantia, ou com tese que se prova só pelos autos, a peça é a skill excecao-de-pre-executividade.
---

# Embargos à execução fiscal

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Plano com até 5 perguntas. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-tributario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio dos embargos na execução fiscal (Lei 6.830/1980, LEF); não confunda com os embargos do CPC 914 e 917, outra skill do Kit Cível.

## Antes do roteiro

Pergunte e registre antes de redigir:
- **Prazo: 30 dias** (LEF, art. 16), contados do depósito (I), da juntada da prova da fiança ou do seguro garantia (II) ou da intimação da penhora (III). O termo da penhora é a **efetiva intimação**, não a juntada do mandado (Tema 131 do STJ). **Conta sugerida (sugestão a conferir, nunca data certa), por executado** (citação, garantia e intimação podem ter datas diferentes para cada um): identifique qual dos três eventos veio primeiro na ficha daquele executado e, do dia seguinte, conte **30 dias corridos e 30 dias úteis** (a LEF não diz "úteis"; a aplicação do CPC 219 à LEF não está confirmada `[conferir o entendimento do tribunal sobre dias úteis na LEF]`). Use o **mais curto** e escreva o resultado como "provável", mostrando as duas datas. **Conta e ALERTA vão na PRIMEIRA mensagem, antes das perguntas**, e se repetem na linha "Prazo: [conta] · [ALERTA ou nenhum]" do plano (em "Estratégia da peça") e no topo do resumo. **ALERTA** se qualquer das duas contagens, de qualquer executado, vencer em 5 dias úteis ou menos, ou já tiver passado (intempestividade: diga as saídas, como exceção de pré-executividade, sem plano de embargos).
- **Garantia primeiro:** não se admitem embargos antes de garantida a execução (art. 16, §1º). Garantias: depósito em dinheiro, fiança bancária, seguro garantia, nomeação ou penhora (art. 9º). Fiança e seguro têm os efeitos da penhora (art. 9º, §3º); só o depósito em dinheiro faz cessar a responsabilidade pela correção e juros (§4º). A fiança ou seguro não pode ser recusado por ordem legal da penhora (Tema 1385 do STJ) e só é liquidado após o trânsito em julgado desfavorável (art. 9º, §7º, Lei 14.689/2023). Pergunte qual garantia existe e se cobre o valor.
- **Citação e primeiro prazo:** o executado é citado para pagar em 5 dias ou garantir (art. 8º); a contagem é do advogado.
- **O que pedir ao cliente:** citação, CDA e demonstrativo, processo administrativo, guias, declarações, contrato social, a garantia e a prova da intimação dela.
- **Se há exceção de pré-executividade já apresentada, parcelamento ou ação anulatória:** pergunte, porque muda a estratégia (skills `excecao-de-pre-executividade`, `anulatoria-de-debito-fiscal` e `transacao-e-parcelamento`).

## Estrutura

1. Endereçamento ao juízo da execução, distribuição por dependência; tempestividade, com o evento que abriu o prazo e a data; garantia prestada.
2. Síntese da execução e da CDA.
3. **Toda a matéria útil à defesa**, as provas e o rol de testemunhas, até três, que o juiz pode ampliar ao dobro, tudo na petição (art. 16, §2º). Não se admitem reconvenção nem compensação; exceções, salvo suspeição, incompetência e impedimento, entram como preliminar (§3º). Compensação feita **antes** do ajuizamento pode ser fundamento de defesa para ilidir a CDA (Tema 294 do STJ).
4. Mérito: um tópico por fundamento, com a prova.
5. Pedido de **efeito suspensivo**, em tópico próprio: garantia suficiente e requisitos da tutela provisória (CPC 919, §1º); o STJ exige garantia, relevância da fundamentação e perigo de dano (Tema 526).
6. Pedidos: acolhimento, extinção ou redução da execução; honorários; provas.

## Teses e pedidos que costumam caber

- **CDA:** presunção relativa de certeza e liquidez (CTN 204); requisitos do CTN 202 e nulidade (203). A Fazenda pode substituir a CDA até a sentença dos embargos para corrigir erro material ou formal, nunca para mudar o sujeito passivo (Súmula 392 do STJ) nem para incluir, complementar ou modificar o fundamento legal do crédito (Tema 1350 do STJ, 2026). Petição inicial sem demonstrativo de cálculo ou sem CPF não é vício (Súmulas 558 e 559).
- **Controle de legalidade da inscrição** a qualquer tempo, de ofício ou a pedido (CTN 201, §2º, LC 236/2026).
- **Prescrição e decadência:** crédito constituído e prescrição pelo CTN 174 (Súmulas 622 e 409 do STJ). O art. 174, §1º, na redação da LC 236/2026 (04/09/2026), interrompe a prescrição por: I despacho que ordena a citação; II protesto da CDA; III ato judicial de mora; IV reconhecimento do débito; V mediação; VI arbitragem especial, retroagindo ao requerimento; VII sentença que extingue a execução por não localização do devedor ou de bens, se a intercorrente não começou; VIII habilitação do crédito em falência ou liquidação; IX ato inicial da execução fiscal extrajudicial de lei específica ainda não localizada; o prazo recomeça do ato interruptivo ou do último ato do processo (§3º). Fato anterior a 04/09/2026: `[conferir aplicação no tempo]`. Intercorrente pelo art. 40 da LEF (skill `excecao-de-pre-executividade` traz a conta).
- **Responsabilidade de sócio:** o inadimplemento, por si, não responsabiliza (Súmula 430); a dissolução irregular presumida permite redirecionar (Súmula 435; Tema 981 do STJ). Sócio que consta da CDA tem o ônus de provar a ausência do art. 135 (Tema 103).
- **Encargo de 20% do DL 1.025/1969:** exigível, inclusive na massa falida (Súmula 400). Desistência da execução após os embargos não afasta a sucumbência (Súmula 153).
- **Recurso:** sentença em execução de valor igual ou inferior a 50 ORTN (art. 34) comporta só embargos infringentes, em 10 dias ao mesmo juízo (§2º), e embargos de declaração; é compatível com a Constituição (Tema 408 do STF). A alçada é R$ 328,27 de janeiro de 2001 corrigidos pelo IPCA-E, aferida na data da propositura (Tema 395 do STJ); CDA com vários exercícios conta pelo total (Tema 1248). A skill não calcula o valor: confira a tabela do tribunal antes de escolher o recurso.
- **Adesão a transação ou parcelamento** exige desistência dos embargos e renúncia ao direito; desistir para aderir a programa federal não gera nova condenação em honorários, porque o encargo do DL 1.025 já os cobre (Tema 400; Tema 1317, com RE pendente no STF).
- **Execução de baixo valor:** extinção por falta de interesse de agir (Tema 1184 do STF, restrito ao baixo valor pelos embargos de declaração de 22/04/2024). Resolução CNJ 547/2024, art. 1º, §1º: extingue-se a execução de valor inferior a R$ 10 mil no ajuizamento, sem movimentação útil há mais de um ano, sem citação ou sem bens; apensos se somam; a Fazenda pode pedir 90 dias; o ajuizamento depende de conciliação prévia e protesto (arts. 2º e 3º). Alterada pelas Resoluções 617/2025 e 689/2026 `[conferir texto consolidado]`.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "embargos à execução fiscal garantia", "efeito suspensivo embargos execução fiscal", "nulidade da CDA" e "redirecionamento ao sócio" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 153, 392, 400, 409, 430, 435, 558, 559 e 622 e Temas 103, 131, 294, 395, 400, 526, 981, 1248, 1350 e 1385 do STJ, e Temas 408 e 1184 do STF, podem entrar pelo número.

## Não fazer

- Não embargar sem garantia nem contar o prazo da juntada do mandado.
- Não reservar tese ou prova para depois: tudo vai na petição (art. 16, §2º).
- Não pedir compensação como pedido autônomo nos embargos (art. 16, §3º), só como fundamento de compensação já feita.
- Não pedir efeito suspensivo sem garantia suficiente e sem fato de dano.
- Não calcular o débito, a prescrição em número final nem o excesso: liste o que entra.

*Referências conferidas em 21/10/2026 (LEF e CTN com a LC 236/2026 no Planalto via proxy; Resolução CNJ 547/2024 no PDF do DJe; súmulas e Temas 103, 131, 294, 395, 400, 526, 981, 1248, 1317, 1350 e 1385 do STJ e 408 e 1184 do STF no Banco Nacional de Precedentes do CNJ de 19/10/2026). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
