---
name: embargos-de-declaracao
description: Use quando o advogado pedir embargos de declaração, "embargar a sentença/acórdão", "prequestionar", apontar omissão, contradição, obscuridade ou erro material, ou responder embargos da outra parte, na vara ou no Juizado. "Embargos" sozinho pode ser outra peça: embargos à execução têm a skill `embargos-a-execucao`, embargos à monitória estão em `cobranca-e-monitoria` (de cartão, em `contestacao-de-cobranca-de-cartao`) e a impugnação ao cumprimento de sentença é da `cumprimento-de-sentenca` do Kit. Esta skill é só para vício da decisão (omissão, contradição, obscuridade, erro material). Complementa peca-a-partir-da-ficha com o vício concreto exigido pelo CPC 1.022, o prequestionamento do 1.025, a multa do 1.026 e a regra do juizado.
---

# Embargos de declaração

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio dos embargos de declaração.

## Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: o prazo é de 5 dias úteis e quase sempre dispara o ALERTA DE PRAZO. Conte dia a dia a partir do dia seguinte à ciência (só dias úteis, 1.023 e Lei 9.099, arts. 49 e 12-A), diga o último dia provável e pergunte se a data da ficha é publicação ou ciência. Para o embargado, a resposta ao pedido de efeito modificativo é de 5 dias (1.023, § 2º).

## Antes do roteiro

- **Peça a decisão e o vício.** Pergunte: qual decisão (sentença, acórdão, decisão interlocutória), data da intimação, e o trecho exato onde está o problema. Sem trecho concreto, não redija: embargos sem vício apontado viram protelatórios.
- **Hipóteses (CPC 1.022):** I esclarecer obscuridade ou eliminar contradição; II suprir omissão de ponto ou questão sobre o qual o juiz devia se pronunciar de ofício ou a requerimento; III corrigir erro material. Considera-se omissa a decisão que deixa de seguir tese de IRDR ou IAC aplicável ao caso ou que incorre em qualquer das condutas do 489, §1º. Insatisfação com o resultado não é vício.
- **Prazo:** 5 dias úteis (CPC 1.023), sem preparo; prazo em dobro para litisconsortes com advogados diferentes se aplicar o 229 (§1º). No Juizado, também 5 dias (Lei 9.099, art. 49), cabíveis nos casos do CPC (art. 48), em dias úteis (art. 12-A). Conta à mostra no bloco acima.
- **O que os embargos fazem com o prazo dos outros recursos:** interrompem (CPC 1.026, caput; Lei 9.099, art. 50). Não suspendem os efeitos da decisão, salvo pedido fundado no 1.026, §1º (probabilidade de provimento ou risco de dano grave).
- **Pergunte também:** já houve embargos antes neste processo (limite do 1.026, §4º); a ideia é só esclarecer ou também prequestionar; qual dispositivo legal ou constitucional precisa ser debatido; se a peça vai ao REsp ou ao RE depois.
- **Atenção a 2026 (só se o REsp for possível; contra a Turma Recursal do Juizado não é, Súmula 203 do STJ):** a Lei 15.484/2026 (DOU de 04/08/2026, em vigor desde 03/09/2026) criou o art. 1.035-A do CPC: o STJ não conhece do REsp sem relevância da questão federal, que o recorrente demonstra em tópico específico e fundamentado. O art. 4º da lei exige o tópico nos recursos contra acórdãos publicados após a vigência. Se os embargos preparam o REsp, avise o advogado: os embargos não suprem o tópico, e qual publicação conta (a do acórdão principal ou a dos embargos) ainda é `[conferir no regimento do STJ e na jurisprudência]`.

## Estrutura

1. Endereçamento ao juiz ou relator que proferiu a decisão. Tempestividade, com a data da intimação.
2. Síntese da decisão embargada.
3. **Um tópico por vício**, nesta ordem: transcreva o trecho da decisão; diga qual hipótese do 1.022 é (omissão: qual argumento ou prova foi ventilado, onde nos autos, e por que influi no resultado; contradição: os dois trechos que se chocam; obscuridade: o que não dá para entender; erro material: o dado certo e onde está provado).
4. Prequestionamento, se for o caso (decisão de tribunal; no Juizado, veja a seção própria abaixo): indique cada dispositivo e a tese a ser debatida. O CPC 1.025 considera incluídos no acórdão os elementos que o embargante suscitou, mesmo se os embargos forem rejeitados, quando o tribunal superior reconhece erro ou omissão. O STJ exige, para esse prequestionamento ficto, que o REsp alegue violação do 1.022: a Súmula 211 convive com o 1.025 (Informativo 785 do STJ). Sem embargos na origem e sem essa alegação no REsp, o ponto fica sem prequestionamento.
5. Efeito modificativo: se o pedido pode mudar o resultado, requeira expressamente e lembre o contraditório de 5 dias (1.023, §2º).
6. Pedidos: acolher para suprir, esclarecer ou corrigir (dizendo o ponto), com ou sem efeito modificativo; suspensão da eficácia, se houver urgência (1.026, §1º).

## Teses e pedidos que costumam caber

- **Súmula 98 do STJ:** embargos com notório propósito de prequestionamento não são protelatórios. Súmula 356 do STF: o ponto omisso sobre o qual não se opuseram embargos não é prequestionado para o RE. Súmula 282 do STF e Súmula 320 do STJ (questão só no voto vencido não prequestiona). Súmula 579 do STJ: não precisa ratificar o REsp interposto na pendência dos embargos se o resultado não mudou. A Súmula 418 do STJ está cancelada.
- **Se o relator ou juiz julgou só:** embargos contra decisão monocrática são decididos por ele (1.024, §2º), que pode recebê-los como agravo interno depois de 5 dias para o embargante complementar (1.024, §3º).
- **Quem embarga e a decisão muda:** o embargado que já recorreu tem 15 dias para complementar ou alterar as razões, só quanto à alteração (1.024, §4º); se os embargos são rejeitados ou não mudam a conclusão, o recurso já interposto segue sem ratificação (§5º; Súmula 579).
- **Defesa do embargado:** a decisão não tem vício, é rediscussão; Tema 698 do STJ trata como protelatórios os embargos que rediscutem matéria decidida conforme súmula ou precedente qualificado (tese redigida sob o CPC/73, arts. 543-B e 543-C, hoje o regime dos repetitivos). Multa do 1.026, §2º: até 2% do valor atualizado da causa; reiterados, até 10% e depósito para recorrer (§3º); depois de dois protelatórios, nenhum novo embargo (§4º).

## Embargos contra sentença do Juizado (Lei 9.099, arts. 48 a 50)

- Cabem nos casos do CPC (art. 48), por escrito ou oralmente, em 5 dias úteis (arts. 49 e 12-A), e interrompem o prazo do recurso inominado (art. 50). Fundamente no CPC 1.022 e no 489, §1º, e avise o prazo curto.
- **Não use o CPC 1.025 contra sentença do Juizado:** o dispositivo fala em acórdão e em tribunal superior. Contra sentença, os embargos servem para suprir o vício e abrir o recurso inominado com a questão decidida.
- **Prequestionamento tem pouca serventia ali:** contra acórdão da Turma Recursal não cabe recurso especial (Súmula 203 do STJ). Só cabe recurso extraordinário, e apenas com questão constitucional (Súmula 640 do STF). Prequestionar o CC 206 (ou outro dispositivo de lei federal) não leva a lugar nenhum além da Turma: diga isso ao advogado, e peça o suprimento da omissão porque ela muda o resultado, não para "deixar prequestionado". Uniformização contra a Turma Recursal: `[conferir reclamação ou outro meio e a regra vigente]`.
- Não cite a Lei 15.484/2026 (relevância no REsp) em peça de Juizado.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "embargos de declaração omissão art. 1.022", "prequestionamento ficto art. 1.025" e "embargos protelatórios multa" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. As Súmulas 98, 203, 211, 320 e 579 do STJ e 282, 356 e 640 do STF podem entrar pelo número.

## Não fazer

- Não usar os embargos para rediscutir mérito ou pedir nova valoração de prova.
- Não prequestionar dispositivo que ninguém debateu: indique a tese, não só o artigo.
- Não omitir o trecho da decisão nem o local dos autos da questão omitida.
- Não pedir efeito modificativo sem avisar que a outra parte será ouvida.
- Não deixar passar o prazo achando que os embargos o suspendem: eles o interrompem para recursos, mas a decisão continua eficaz.
- Não opor o terceiro embargo depois de dois considerados protelatórios (1.026, §4º), nem recorrer sem depositar a multa do §3º, salvo Fazenda e gratuidade.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (Planalto via proxy: CPC 229, 1.022 a 1.026 e 1.035-A, Lei 9.099, arts. 12-A e 48 a 50, Lei 15.484/2026, arts. 4º e 7º; Banco Nacional de Precedentes do CNJ; STJ, Informativo 785 e acórdãos sobre o 1.025, pelo site do tribunal). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
