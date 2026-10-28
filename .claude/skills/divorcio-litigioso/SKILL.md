---
name: divorcio-litigioso
description: Use quando o advogado pedir inicial de divórcio litigioso, "ação de divórcio" com guarda, alimentos ou partilha em disputa, "divórcio liminar", contestação ou reconvenção em divórcio. Complementa peca-a-partir-da-ficha com o rito do CPC 693 a 699-A, a ordem dos pedidos e o que decidir antes sobre partilha, violência e filhos.
---

# Divórcio litigioso

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em `metodos/peca-a-partir-da-ficha.md`), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-familia-e-sucessoes` (mesma pasta). Se a skill `advo-escritorio` não estiver instalada, avise e não redija. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do divórcio litigioso.

## Antes do roteiro

- **Foro (CPC 53, I):** domicílio do guardião de filho incapaz; sem filho incapaz, último domicílio do casal; se nenhum dos dois mora lá, domicílio do réu; vítima de violência doméstica, o dela (alínea d). Registre qual alínea a ficha sustenta. Nas ações conexas de interesse do menor, a Súmula 383 do STJ reforça o foro de quem detém a guarda.
- **Rito (CPC 693 a 699-A):** citação pessoal, sem cópia da inicial, com 15 dias de antecedência da audiência de mediação (art. 695); as partes comparecem com advogado; a contestação são 15 dias contados da audiência sem acordo (arts. 697 e 335). Não há contestação antes da mediação. A contagem é do advogado.
- **Violência:** se há guarda em disputa, o juiz pergunta às partes e ao MP sobre risco de violência e dá 5 dias para prova (CPC 699-A). Pergunte se há BO ou medida protetiva. Havendo, a vítima pode pedir o divórcio no juizado de violência doméstica, sem a partilha (Lei 11.340, art. 14-A).
- **Perguntas que mudam a peça:** data do casamento e da separação de fato; regime e pacto (sem convenção vale a comunhão parcial, CC 1.640); bens comuns, particulares e sub-rogados; dívidas; filhos (iniciais, idade, incapaz?); quem mora no imóvel; renda de cada um; animal de estimação; o que já está acertado.

## Estrutura

1. Vara de Família; segredo de justiça (CPC 189, II). A audiência é a do art. 695, não a do art. 334.
2. Qualificação (CPC 319, II). Filhos por iniciais no rascunho.
3. Fatos: casamento, fim da convivência, filhos, patrimônio, situação econômica.
4. Direito: divórcio é direito potestativo, sem separação prévia nem prazo (EC 66/2010; STF, Tema 1053). Partilha pode ficar para depois (CC 1.581; Súmula 197 do STJ).
5. Pedidos, nesta ordem: decretar o divórcio com mandado de averbação (CC 10, I); nome; guarda e convivência (skill `guarda-e-convivencia`); alimentos dos filhos (skill `alimentos`); alimentos ao cônjuge, só se a ficha traz necessidade e possibilidade (CC 1.694); partilha na ação ou reserva expressa de partilha posterior (CPC 647 a 658); uso do imóvel (uso exclusivo e aluguel, abaixo) e dívidas; tutela provisória (CPC 300); citação na pessoa do réu para a mediação (CPC 695, §3º); MP se houver incapaz ou vítima de violência doméstica (CPC 698, caput e par. único); provas; valor da causa (CPC 292, III, para alimentos; bens, pelo valor deles). A skill lista o que entra no valor, não calcula.

## Teses e pedidos que costumam caber

- **Divórcio antes do resto:** o vínculo é incontroverso mesmo com guarda, alimentos e partilha em disputa. Pedir a decretação antecipada por julgamento parcial (CPC 356) ou tutela da evidência (CPC 311, IV). A aceitação varia por vara.
- **Separação de corpos** antes da ação, comprovando a necessidade (CC 1.562).
- **Guarda compartilhada** como regra, salvo recusa de um genitor ou elementos de risco de violência (CC 1.584, §2º, Lei 14.713/2023).
- **Alimentos aos filhos:** provisórios já no despacho inicial (Lei 5.478, art. 4º).
- **Alimentos entre ex-cônjuges:** só com necessidade provada; a tese corrente é a temporária. Cessam com novo casamento, união estável ou concubinato do credor (CC 1.708). O direito é irrenunciável, o exercício não (CC 1.707).
- **Nome:** o cônjuge pode manter o de casado (CC 1.571, §2º). É pedido dele, não do outro.
- **Partilha:** liste cada bem, valor a apurar, origem (comum, particular, sub-rogado), dívidas, previdência privada, FGTS e quotas de empresa. O marco da comunhão (separação de fato ou ajuizamento) é controverso: leve a ficha ao advogado.
- **Uso exclusivo do imóvel comum:** se só um dos cônjuges ocupa o imóvel depois da separação de fato, são pedidos possíveis (a decidir com o advogado, conforme o cliente seja quem ficou ou quem saiu): (a) atribuição do uso exclusivo, em tutela provisória (CPC 300), inclusive ao cônjuge que fica com os filhos; (b) aluguel ou indenização pelo uso exclusivo da parte do outro, até a partilha. Não é tese consolidada: busque o tema "indenização pelo uso exclusivo de bem comum" e o marco inicial (separação de fato, citação ou notificação) e, sem resultado, `[INSERIR JULGADO]`. Imóvel financiado: pergunte saldo devedor e quem paga as parcelas; liste os direitos do contrato (não só a propriedade) na partilha ou na reserva, com `[DEFINIR]` para o valor.
- **Animal de estimação:** Lei 15.392/2026, norma autônoma. Sem acordo, o juiz fixa a custódia compartilhada e divide as despesas (arts. 2º e 4º); com histórico ou risco de violência doméstica ou maus-tratos não há compartilhada (art. 3º); o rito é o das ações de família (art. 7º). Só entra se a ficha trouxer o animal.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "divórcio liminar ou parcial", "marco da comunhão na partilha" e "alimentos transitórios entre ex-cônjuges" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 197 e 383 do STJ e Tema 1053 do STF podem entrar pelo número.

## Não fazer

- Não pedir separação judicial nem montar a inicial em torno de culpa pelo fim do casamento.
- Não escrever "visita": é convivência.
- Não contar a contestação da citação nem protocolá-la antes da audiência do art. 695.
- Não atacar o outro cônjuge com adjetivo: fato com prova, criança por iniciais.
- Não pedir guarda unilateral sem fato que sustente a exceção do art. 1.584, §2º.
- Não pedir a partilha em tutela provisória nem no julgamento parcial do divórcio: a partilha exige instrução; de urgência cabem uso do imóvel, bloqueio ou arrolamento de bens.
- Não pedir citação por edital sem esgotar a localização do réu: o art. 695, §3º, manda citar na pessoa dele.
- Não calcular pensão, meação ou valor da causa.

*Referências conferidas em 20/10/2026 (Câmara dos Deputados, Planalto, STJ, BNP/CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
