# Advoclaude Pro: Penal, Cível e consumidor, Bancário

Métodos por peça. Cada seção complementa peca-a-partir-da-ficha (arquivos de conhecimento do Kit). Gerado dos SKILL.md em 21/10/2026.

---

## Penal

### Acordo de não persecução penal (`acordo-de-nao-persecucao-penal`)

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em o método peca-a-partir-da-ficha), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-penal` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do ANPP.

Onde esta skill e o módulo `area-penal` divergirem, vale esta skill (atualizada em 20/10/2026).

#### Antes do roteiro

Quando o pedido é consulta ("dá pra fazer acordo?"), o plano é de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se o teste abaixo barrar o acordo, pare e responda a consulta, sem plano nem peça.

Faça o teste de cabimento **nesta ordem** e mostre o resultado ao advogado antes de redigir:
1. **Não é caso de arquivamento** e o investigado confessa **formal e circunstanciadamente** (caput). Pergunte: o cliente admite o fato? A confissão é condição do acordo e pode ser formalizada na assinatura (Tema 1303 do STJ); o advogado precisa decidir com o cliente, que fica ciente do uso (§10: descumprimento leva à denúncia). Não escreva confissão em nome do cliente.
2. **Sem violência ou grave ameaça** e **pena mínima inferior a 4 anos**, considerando as causas de aumento e de diminuição do caso concreto (§1º). Liste tipo, majorantes e minorantes; a conta é do advogado.
3. **Vedações do §2º:** I cabe transação penal (Lei 9.099, art. 76); II reincidente, ou elementos de conduta criminal habitual, reiterada ou profissional, salvo infrações pretéritas insignificantes; III beneficiado nos 5 anos anteriores **ao cometimento da infração** por ANPP, transação ou suspensão condicional (a contagem parte da data do fato, não da proposta); IV violência doméstica ou familiar, ou crime contra a mulher por razões de sexo feminino, em favor do agressor. Esta última casa com a Súmula 536 do STJ (sem transação nem sursis em Maria da Penha).
4. **Pergunte a data do fato e de início do processo:** muda a oportunidade (abaixo).
5. Se o ANPP não couber, a alternativa (transação, art. 76, ou suspensão condicional, art. 89) é da skill `defesa-no-juizado-especial-criminal`; aqui só registre que o §11 permite ao MP usar o descumprimento do ANPP para negar a suspensão. Não analise o sursis nesta skill.

#### Quando e como o advogado provoca

- **Confissão: continua requisito (caput do 28-A), formal e circunstanciada, mas não precisa ter sido feita no inquérito nem antes no processo.** Tema 1303 do STJ (conferido no BNP/CNJ em 19/10/2026): a confissão no inquérito não é exigência do 28-A, é inválida a recusa da proposta baseada na falta dela, e a confissão pode ser formalizada na assinatura do acordo, perante o MP, com o investigado assistido por defesa técnica. Nunca diga ao advogado que o ANPP "dispensa" a confissão: muda o momento, não a exigência.
- **Processos em andamento em 18/09/2024** (data do julgamento do Plenário do STF sobre ANPP em processos em curso, que o Tema 1098 menciona; traga o acórdão pelo conector, `buscar_stf`), em que o ANPP caberia em tese e não foi oferecido, ou foi negado sem justificativa idônea: o MP, de ofício, a pedido da defesa ou por provocação do juiz, **deve manifestar-se motivadamente, na primeira oportunidade em que falar nos autos, sobre o cabimento do acordo** (STJ Tema 1098, item 3). Para processos em andamento na entrada em vigor da Lei 13.964/2019, o Tema 1098 (item 2) admite o ANPP **se pedido antes do trânsito em julgado da condenação**, mesmo sem confissão até aquele momento; a confissão se formaliza então pelo Tema 1303. Conferido no BNP/CNJ em 19/10/2026.
- **Investigações e ações iniciadas a partir de 18/09/2024:** o ANPP é admissível **antes do recebimento da denúncia**, sem prejuízo de propô-lo no curso da ação (mesmo Tema 1098).
- Na prática: peça ao MP por petição na fase de inquérito, e repita na **resposta à acusação** (ver `resposta-a-acusacao`), requerendo manifestação motivada, mas só se o cliente decidir admitir o fato: com tese de negativa de autoria, o pedido pode colidir com a defesa.

#### Estrutura

1. **Petição ao MP ou ao juiz:** qualifica o investigado; demonstra cada requisito (tabela com dispositivo e fato da ficha); declara a disposição de confessar e cumprir; propõe condições (as do caput, abaixo).
2. **Condições (caput, I a V):** reparação do dano ou restituição, salvo impossibilidade; renúncia a bens e direitos que o MP indicar como instrumento, produto ou proveito; prestação de serviços à comunidade pelo tempo da pena mínima reduzida de um a dois terços (CP 46); prestação pecuniária (CP 45); outra condição proporcional e compatível. As condições podem ser cumulativas ou alternativas. Proponha a menos onerosa que a ficha sustenta. Valores e prazos: `[DEFINIR]`, nunca calcule.
3. **Formalização:** por escrito, assinado pelo MP, investigado e defensor (§3º); **audiência de homologação** com verificação da voluntariedade e da legalidade (§4º). Prepare o cliente para a audiência. Se o juiz achar as condições inadequadas, devolve ao MP para reformular com concordância do investigado e do defensor (§5º); se recusar a homologação, volta ao MP para complementar a investigação ou denunciar (§§7º e 8º).
4. **Depois de homologado:** execução no juízo da execução penal (§6º); a vítima é intimada (§9º); o acordo não vai à certidão de antecedentes (§12); cumprido, extinção da punibilidade (§13). Descumprimento: o MP comunica o juízo para rescisão e denúncia (§10).

#### Recusa do MP

- **Recusa em propor:** o investigado pode requerer a remessa dos autos ao órgão superior do MP, na forma do art. 28 (§14). Peça nesse sentido, com a demonstração dos requisitos e a crítica ao fundamento da recusa. Recusa baseada em critério fora da lei (ex.: negar a proposta só porque o investigado não confessou no inquérito, o que o Tema 1303 do STJ declara inválido) é o ângulo de ataque; busque o julgado.
- **Recusa de homologação pelo juiz:** cabe RESE (CPP 581, XXV), 5 dias para interpor e 2 para as razões (586 e 588). Confira a hipótese.
- **Analogia do sursis:** na suspensão condicional do processo, a recusa vai ao Procurador-Geral (Súmula 696 do STF); não a use no lugar do §14.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "acordo de não persecução penal", "recusa do MP ao ANPP" e "ANPP e confissão" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Os Temas 1098 e 1303 do STJ e as Súmulas 536 do STJ e 696 do STF podem entrar pelo número.

#### Não fazer

- Não propor ANPP onde cabe transação (§2º, I) nem em violência doméstica (§2º, IV).
- Não deixar o cliente confessar sem orientação: a confissão é requisito e o descumprimento leva à denúncia.
- Não calcular a pena mínima nem as condições.
- Não ignorar a vítima: reparação do dano e intimação (§9º) pesam na homologação.
- Não afirmar que o ANPP "limpa" os antecedentes sem lembrar que conta para a vedação de 5 anos (§§2º, III, e 12).
- Não pedir ao juiz que imponha o acordo ao MP: a proposta é do MP e a via contra a recusa é a remessa ao órgão superior (§14).

*Referências conferidas em 20/10/2026 (CPP consolidado na Câmara dos Deputados; Lei 9.099 na Câmara; BNP/CNJ de 19/10/2026). Revisão de 20/10/2026. Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Agravo em execução e progressão de regime (`agravo-em-execucao-e-progressao`)

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em o método peca-a-partir-da-ficha), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-penal` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da execução penal. A skill não calcula pena, fração, remição nem data: lista o que entra e a conta fica com o advogado ou o SEEU.

Onde esta skill e o módulo `area-penal` divergirem, vale esta skill (atualizada em 20/10/2026).

#### Antes do roteiro

- **Qual peça:** pedido de progressão ou outro benefício (petição simples ao juízo da execução, LEP 66, III, no SEEU) ou **agravo** contra a decisão (LEP 197: "das decisões proferidas pelo juiz caberá recurso de agravo, sem efeito suspensivo"). **Prazo de 5 dias** (Súmula 700 do STF; não cite a Súmula 699, que trata do agravo da Lei 8.038). A contagem é do advogado, a partir da intimação. Sem efeito suspensivo: se o cliente segue preso em regime mais gravoso por decisão ilegal, pense em HC (ver `habeas-corpus`) e em pedido de efeito no agravo.
- **A pergunta que muda o percentual: qual a data do fato?** O art. 112 mudou três vezes e a lei mais grave só vale para fato posterior (CF 5º, XL). Peça: data de cada crime, se hediondo ou equiparado, se com resultado morte, se há violência ou grave ameaça, se o cliente é primário ou reincidente (genérico ou específico) em cada condenação, se organização criminosa ou milícia.
- **Dados para a conta (liste, não calcule):** pena total e cada guia; regime atual e data de entrada; **data-base** (a última progressão, a regressão, a falta grave); detração (prisão provisória, cautelares); dias remidos (trabalho 1 por 3, estudo 1 por 12 horas; LEP 126); faltas disciplinares e se houve PAD com defesa; multa paga; certidão de conduta; trabalho e estudo documentados; reparação do dano nos crimes contra a administração (CP 33, §4º); exame criminológico, se feito.
- **Documentos do cliente:** atestado de conduta carcerária, certidões de trabalho e estudo, comprovante de vaga de trabalho para o aberto ou saída, endereço da família.

#### LEP 112 por janela da data do FATO (conferido em 20/10/2026)

Regra: vale a redação em vigor na data do **fato** de cada crime; a lei mais grave não retroage (CF 5º, XL) e a mais benéfica alcança fato anterior. Descubra a data do fato, escolha a janela abaixo e **cite o inciso da redação aplicável, com a lei dela**: o mesmo número de inciso mudou de conteúdo entre as redações. Não calcule a fração.

- **Fato até 22/01/2020** (antes da Lei 13.964/2019, vigente desde 23/01/2020): regime anterior ao pacote anticrime, em que o LEP 112 trazia 1/6 e os hediondos seguiam a Lei 8.072, art. 2º, §2º (2/5 primário, 3/5 reincidente) [conferir a redação histórica no Planalto].
- **Fato de 23/01/2020 a 24/03/2026** (Lei 13.964/2019): I primário sem violência, 16%; II reincidente sem violência, 20%; **III primário com violência ou grave ameaça, 25%**; IV reincidente com violência ou grave ameaça, 30%; V primário em hediondo ou equiparado, 40%; VI, 50% (a primário em hediondo com resultado morte, sem livramento; b comando de organização criminosa para hediondo, sem livramento; c milícia privada); VI-A, primário em feminicídio, 55%, só para fato desde 10/10/2024 (Lei 14.994/2024) [conferir a data]; VII reincidente em hediondo, 60%; VIII reincidente em hediondo com resultado morte, sem livramento, 70%.
- **Fato de 25/03/2026 a 07/05/2026** (Lei 15.358/2026, vigente da publicação em 25/03/2026): I a IV como acima; V, 70%; VI, 75% (a a d, incluindo d primário em feminicídio, sem livramento); VI-A revogado; VII, 80%; VIII, 85%.
- **Fato desde 08/05/2026** (Lei 15.402/2026, vigente da publicação em 08/05/2026): caput, 1/6; **I primário com violência ou grave ameaça (exceto Título XII do CP), 25%**; II reincidente nesses crimes, 30%; III reincidente em crime diverso, 20%; V a VIII como na Lei 15.358; IX e X vetados. O IV (Lei 13.964: reincidente com violência, 30%) segue no texto compilado do Planalto, ao lado do II com o mesmo percentual: cite o II para fato novo e o IV para fato antigo. A Lei 15.402 foi promulgada após derrubada de veto e tem a constitucionalidade questionada no STF (ADIs de 2026, sem decisão apurada) [conferir o andamento antes de protocolar].
- **Irretroatividade:** as frações da Lei 15.358 (V a VIII) só valem para fato desde 25/03/2026; para fato anterior, ficam as da Lei 13.964. Da Lei 15.402 nada retroage em desfavor: o caput de 1/6 (16,67%) é um pouco mais gravoso que os 16% do antigo inciso I, logo não alcança fato anterior; o que apenas renumera não muda nada. Exemplo: roubo com violência por primário é o **inciso III** (25%) para fato até 07/05/2026 e o **inciso I** (25%) para fato posterior. Não cite o inciso I para fato antigo.
- Para fato anterior: STJ Tema 1084 (retroatividade do inciso V da Lei 13.964/2019 ao não reincidente específico), STF Tema 1169 (o 60% do VII não alcança reincidente não específico); STF Tema 1319 e STJ Tema 1196 em andamento [conferir].
- **§1º (Lei 14.843/2024, vigente desde 11/04/2024):** a progressão exige boa conduta carcerária, comprovada pelo diretor, **e os resultados do exame criminológico**, respeitadas as normas que vedam a progressão. Antes, o exame era possível se fundamentado (Súmula 439 do STJ; Súmula Vinculante 26). **Para crimes anteriores a 11/04/2024, a aplicação da exigência é o Tema 1408 do STF (afetado, sem tese)**; o mesmo vale para saída temporária (Tema 1381). Pergunte a data do fato e se o exame consta; sem tese final, trate como ponto aberto [conferir posição do STJ e do tribunal local].
- §3º: mãe ou responsável por criança ou pessoa com deficiência, 1/8, com requisitos cumulativos; §5º: o tráfico privilegiado não é hediondo para este artigo (Tema 600 do STJ); §6º: a falta grave interrompe o prazo.

#### Estrutura do agravo

1. Endereçamento ao juízo da execução, para retratação, e ao tribunal; tempestividade pela data da intimação; indicação da decisão e do SEEU.
2. Requisito objetivo: a fração aplicada, a data-base e o erro do juiz, com a base legal do inciso. O termo inicial é a data em que preenchido o último requisito, e a decisão é declaratória (Tema 1165 do STJ).
3. Requisito subjetivo: conduta carcerária, ausência de falta grave no período, trabalho e estudo, exame criminológico (quando o caso o exigir), contestando o laudo desfavorável (pedido de nova avaliação, laudo contraditório).
4. Falta grave: o procedimento administrativo exige defesa por advogado ou defensor público (Súmula 533 do STJ); celular é falta grave sem necessidade de perícia (Súmulas 660 e 661 do STJ); interrompe a progressão (Súmula 534; Tema 709), não o livramento nem o indulto (Tema 709; Súmula 535). Crime doloso: dispensa trânsito (Súmula 526 do STJ). Regressão cautelar é possível (Tema 1347 do STJ); o condenado é ouvido antes da regressão (LEP 118, §2º). Revogação do tempo remido: até 1/3 (LEP 127; Súmula Vinculante 9).
5. Pedidos: reforma, progressão com data retroativa ao implemento, efeito suspensivo ou ativo quando couber, cancelamento da falta.

#### Outros pedidos da execução que a skill cobre

- **Livramento (CP 83):** pena igual ou superior a 2 anos; **mais de** 1/3 se não reincidente em doloso e de bons antecedentes, **mais da** metade se reincidente em doloso, **mais de** 2/3 em hediondo, tortura, tráfico, tráfico de pessoas e terrorismo se não reincidente específico; bom comportamento, sem falta grave nos últimos 12 meses, bom desempenho no trabalho, aptidão para subsistência, reparação do dano; em crime violento, condições pessoais que afastem nova prática (parágrafo único). O comportamento considera todo o histórico prisional (Tema 1161 do STJ); a falta grave não interrompe o prazo (Súmula 441 do STJ). O art. 83 não foi alterado pela Lei 15.358; a vedação ao livramento está no LEP 112, VI, a, b e d, e VIII.
- **Remição (LEP 126):** estudo presencial ou a distância; leitura (Tema 1278 do STJ); trabalho extramuros (Súmula 562 do STJ); regime domiciliar não impede a remição (LEP 126, §9º, Lei 15.402/2026). Frequência a curso formal remiu (Súmula 341 do STJ).
- **Saída temporária (LEP 122):** após a Lei 14.843/2024, só para curso (II); os condenados por hediondo ou com violência ou grave ameaça não têm saída nem trabalho externo sem vigilância (§2º). Tempo no fechado conta (Súmula 40 do STJ).
- **Lei 15.358/2026 no sigilo:** LEP 41-A (gravação de visita a preso vinculado a organização ultraviolenta, paramilitar ou milícia) e 41-B (comunicação advogado-cliente monitorada por conluio reconhecido judicialmente vai a juízo de controle distinto do da instrução). Se houver pedido nesse sentido, peça a decisão que o autorizou.
- **Em aberto no STJ:** multa como requisito de progressão (Tema 1152, afetado); prescrição da falta grave (Tema 1126, afetado). Não dê como regra.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "progressão de regime", "exame criminológico Lei 14.843/2024", "falta grave" e "data-base" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas e temas acima, conferidos no BNP/CNJ em 19/10/2026, podem entrar pelo número.

#### Não fazer

- Não aplicar o percentual novo a fato anterior sem checar a data (CF 5º, XL), nem citar número de inciso sem dizer a lei da redação aplicável ao fato.
- Não calcular a fração, a data de progressão nem a remição.
- Não dizer que o exame criminológico é sempre obrigatório nem sempre dispensável para fato anterior a 11/04/2024: é ponto aberto.
- Não usar petição de agravo como se tivesse efeito suspensivo.
- Não contestar falta grave sem verificar se houve PAD com defesa técnica.

*Referências conferidas em 20/10/2026 (LEP consolidada e CP no Planalto; Leis 15.358 e 15.402 no Planalto; BNP/CNJ de 19/10/2026). Revisão de 20/10/2026. Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Alegações finais e memoriais (`alegacoes-finais-memoriais`)

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em o método peca-a-partir-da-ficha), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-penal` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio dos memoriais.

Onde esta skill e o módulo `area-penal` divergirem, vale esta skill (atualizada em 20/10/2026).

#### Antes do roteiro

- **Forma e prazo:** alegações orais de 20 minutos, prorrogáveis por 10, na audiência (CPP 403, caput; individual por acusado, §1º). Se o juiz converteu em memoriais, **5 dias sucessivos** e sentença em 10 (403, §3º; 404, parágrafo único: diligência imprescindível). Pergunte qual foi o despacho e a data da intimação; a contagem é do advogado. No sumário, orais de 20+10 (534).
- **Ordem dos memoriais:** acusação primeiro. Leia os memoriais do MP antes de redigir; a defesa responde ao que ele sustentou.
- **O que a instrução produziu:** peça à ficha, por testemunha e por mídia, o minuto ou a folha do trecho que ajuda e do que prejudica. Depoimento entre aspas, só do que o advogado leu. Contradição entre inquérito e juízo: marque.
- **Preso ou solto.** Preso: abra pelo pedido de liberdade (ver `liberdade-provisoria-e-revogacao-da-preventiva`).
- **Ficha da pena (sem calcular):** pena mínima e máxima do tipo e de cada causa de aumento ou diminuição; reincidência e antecedentes com a certidão; confissão (houve? foi usada pelo juiz?); idade na data do fato e na sentença; tempo de prisão provisória e cautelares cumpridas; rol de condenações anteriores com trânsito.

#### Estrutura

1. Resumo do processo e da imputação (a denúncia "imputa").
2. **Preliminares e nulidades**, com o prejuízo demonstrado onde a lei o exige (defesa deficiente só anula com prejuízo, Súmula 523 do STF). Provas ilícitas por derivação.
3. **Absolvição**, pelo inciso do **386**, escolhendo o mais forte e pondo os outros em subsidiário: I inexistência do fato; II falta de prova da existência do fato; III fato não é infração penal; IV réu não concorreu; V não há prova de que concorreu; VI excludentes ou dúvida sobre elas; VII prova insuficiente. Diga o inciso no pedido: ele define os efeitos civis da absolvição. **Qual inciso:** o V é falta de prova de que o réu **concorreu** (autoria ou participação); se a autoria está provada e a dúvida é sobre o **dolo**, use o VII (prova insuficiente) ou, se a defesa sustenta que a conduta é atípica sem o dolo, o III. Não use o V para dúvida sobre dolo.
4. **Desclassificação** e tipo privilegiado (por ex. tráfico privilegiado: Tema 1139 do STJ veda usar inquéritos e ações em curso para afastá-lo; o art. 33, §4º, não é hediondo para fins do 112 da LEP, §5º).
5. **Dosimetria** (CP 59 e 68, em três fases). Para cada fase, liste o que a ficha sustenta e deixe a conta ao advogado:
   - 1ª fase, as oito circunstâncias do 59: culpabilidade, antecedentes, conduta social, personalidade, motivos, circunstâncias, consequências, comportamento da vítima. Inquérito e ação em curso não agravam (Súmula 444 do STJ); condenação definitiva que não gera reincidência só pode pesar como antecedente, nunca como personalidade ou conduta social (Tema 1077 do STJ); premeditação exige fundamento concreto (Tema 1318 do STJ); droga em ínfima quantidade não justifica exasperação (Tema 1262 do STJ).
   - 2ª fase: atenuantes e agravantes. Confissão (CP 65, III, d) vale quando usada na sentença (Súmula 545 do STJ); compensa com a reincidência (Tema 585 do STJ, com ressalva da multirreincidência); a atenuante não leva abaixo do mínimo (Súmula 231 do STJ). Menoridade ou idade acima de 70: o art. 65, I, foi alterado pela Lei 15.160/2025, que **excetua crimes com violência sexual contra a mulher**. Agravante nova: art. 61, II, "m", crime em instituição de ensino (Lei 15.159/2025). A reincidência não pode pesar como agravante e como circunstância judicial ao mesmo tempo (Súmula 241 do STJ).
   - 3ª fase: causas de aumento e diminuição. Aumento no roubo com várias majorantes exige fundamento concreto (Súmula 443 do STJ). Continuidade: a fração segue o número de crimes (Súmula 659 do STJ). Várias causas da parte especial: o juiz pode aplicar só uma (CP 68, parágrafo único).
6. **Regime, substituição e sursis:** regime inicial pelo 33 e 59; pena fixada no mínimo não permite regime mais grave só pela gravidade abstrata (Súmulas 440 do STJ, 718 e 719 do STF); reincidente com pena até 4 anos e circunstâncias favoráveis admite semiaberto (Súmula 269 do STJ). Substituição (CP 44) e sursis (CP 77: pena até 2 anos, 2 a 4 anos de prova).
7. **Detração** (CPP 387, §2º; CP 42): o tempo de prisão provisória conta para o regime inicial. Recolhimento domiciliar noturno também detrai (Tema 1155 do STJ).
8. **Recorrer em liberdade** (387, §1º) e valor mínimo de reparação (387, IV): só pode ser fixado com pedido expresso da acusação ou do ofendido e contraditório (Tema 983 do STJ, fixado para violência doméstica e aplicado como regra geral). Sem pedido, a defesa aponta que não cabe fixar; com pedido, impugna a existência e o valor do dano.
9. Pedidos, na ordem: nulidades, absolvição com o inciso, desclassificação, pena no mínimo e afastamento de agravantes, regime, substituição ou sursis, detração, recorrer solto.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas que a ficha aciona (por ex. "dosimetria pena-base", "confissão e reincidência", "desclassificação", "prova do inquérito") (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. As súmulas e os temas do STJ acima podem entrar pelo número.

#### Não fazer

- Não calcular a pena nem dar fração de cabeça: liste o que entra em cada fase.
- Não pedir "absolvição por insuficiência de provas" sem dizer o inciso (V ou VII).
- Não esquecer o pedido subsidiário: memoriais só de absolvição deixam a pena sem defesa.
- Não citar depoimento que o advogado não leu nem trecho sem folha ou minuto.
- Não pedir condenação ou desclassificação por fato que não está na denúncia: definição jurídica diversa do mesmo fato é emendatio (CPP 383), que o juiz faz sem aditamento; fato ou circunstância nova exige aditamento do MP em 5 dias (384), com nova defesa e prova. Desclassificação para tipo contido no fato narrado é emendatio e pode ser pedida.

*Referências conferidas em 20/10/2026 (CPP consolidado na Câmara dos Deputados; CP, Leis 15.159 e 15.160 no Planalto; BNP/CNJ de 19/10/2026). Revisão de 20/10/2026. Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Apelação criminal (`apelacao-criminal`)

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em o método peca-a-partir-da-ficha), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-penal` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da apelação criminal.

Onde esta skill e o módulo `area-penal` divergirem, vale esta skill (atualizada em 20/10/2026).

#### Antes do roteiro

- **Dois prazos, duas peças.** Interposição em **5 dias** (CPP 593, caput); razões em **8 dias** para cada parte, apelante primeiro (600, caput; 3 dias nas contravenções). O apelante pode declarar que arrazoará no tribunal (600, §4º). No JECrim o prazo é outro: 10 dias, já com razões (Lei 9.099, art. 82, §1º; ver `defesa-no-juizado-especial-criminal`).
- **Termo inicial:** o prazo corre da intimação, não da juntada do mandado (Súmula 710 do STF). Intimação na sexta-feira: o prazo começa na segunda (Súmula 310 do STF). Pergunte: quem foi intimado (réu, defensor, os dois), em que data e como (publicação eletrônica ou não). Para sentença sem intimação do defensor constituído, veja a nulidade (CPP 370, §1º). Réu e defensor intimados em datas diferentes: a linha firme do STJ conta o prazo da defesa da **última** intimação, seja do réu ou do defensor; peça as duas datas, confirme no conector e não escolha sozinho. A contagem é do advogado.
- **Prazo provavelmente vencido:** se, pelas datas da ficha, mesmo a intimação mais favorável ao advogado já está a mais de 5 dias de hoje, avise o advogado **antes de redigir**: mostre as datas, a regra e o que falta confirmar (data exata, forma da intimação, intimação do defensor, despacho da apelação no prazo, Súmula 320 do STF). Não afirme o vencimento. Se confirmado, a apelação intempestiva não será conhecida; as saídas são outras e dependem do caso (nulidade da intimação, HC com ilegalidade flagrante, revisão criminal do CPP 621 se couber) e o cliente deve ser informado por escrito. Só redija a apelação depois que o advogado decidir.
- **Renúncia ao recurso:** a do réu sem assistência do defensor não impede a apelação do defensor (Súmula 705 do STF). Pergunte se o cliente disse ao oficial de justiça que não queria recorrer.
- **A apelação não solta nem prende:** na sentença o juiz decide fundamentadamente sobre manter ou impor a preventiva (387, §1º), e o recurso do réu é conhecido mesmo sem recolhimento (Súmula 347 do STJ). Condenação do júri executa imediatamente, qualquer pena (Tema 1068 do STF). Pergunte se a sentença já mandou prender e se há HC cabível.
- **Ficha:** dispositivo da sentença (pena, regime, substituição, detração, valor de reparação, custas), fundamentos que a defesa ataca, nulidades já arguidas, prova que sustenta o recurso (folha ou ID), antecedentes, se há assistente de acusação, se o MP apelou.

#### Estrutura

1. **Interposição** (petição curta): endereçada ao juiz da sentença; identifica a decisão, requer o recebimento, indica se as razões vão nesta instância ou no tribunal (600, §4º) e pede a subida. Cabimento por inciso: I sentença definitiva de juiz singular; II decisão definitiva sem recurso específico; III decisão do júri (593).
2. **Razões**: tempestividade; síntese; preliminares (nulidade com prejuízo, ver Súmula 523 do STF); mérito na ordem: absolvição pelo inciso do 386; desclassificação; dosimetria (59 e 68; ver `alegacoes-finais-memoriais`); regime (pena de até 4 anos, primário e circunstâncias favoráveis: confira se o aberto cabe, CP 33, §2º, c); substituição; sursis (CP 77: só se a pena final for de até 2 anos; com pena acima disso, peça-o apenas como subsidiário condicionado à redução da pena); detração; recorrer solto; reparação mínima.
3. **Júri (593, III):** a apelação é **vinculada** à alínea e o efeito devolutivo fica restrito aos fundamentos invocados (Súmula 713 do STF). Escolha e diga: (a) nulidade posterior à pronúncia (quesitos: Súmulas 156 e 162 do STF; jurado que já atuou: 206); (b) sentença do juiz presidente contrária à lei expressa ou à decisão dos jurados; (c) erro ou injustiça na aplicação da pena ou da medida de segurança; (d) decisão dos jurados manifestamente contrária à prova dos autos. Na alínea d, o provimento leva a novo júri e **não se admite segunda apelação pelo mesmo motivo** (593, §3º): use-a com cuidado. Quando couber apelação, não cabe RESE (593, §4º).
4. **Pedidos:** conhecimento e provimento com a consequência exata (absolver com o inciso, anular, desclassificar, reduzir, mudar regime); prequestionamento dos dispositivos que irão ao STJ e ao STF.

#### Teses e pedidos que costumam caber

- **Contrarrazões ao MP:** as mesmas 8 dias; se o MP apelou da pena ou da absolvição, responda por tópico.
- **Apelação do ofendido (598):** se o MP não apelou, o ofendido ou os do art. 31 apelam em 15 dias a contar do fim do prazo do MP, mesmo sem habilitação como assistente. Se a vítima apelou, a defesa contra-arrazoa.
- **Embargos infringentes e de nulidade (609, parágrafo único):** 10 dias da publicação do acórdão, se não unânime e desfavorável ao réu, limitados à divergência. Aviso em toda ficha de apelação: se o voto vencido favorece, o próximo passo é este antes do REsp.
- **Nulidade do julgamento:** sem intimação da pauta (Súmula 431 do STF); renúncia do único defensor sem intimar o réu a constituir outro (Súmula 708 do STF).
- **Reformatio in pejus:** o tribunal não acolhe contra o réu nulidade que a acusação não arguiu (Súmula 160 do STF). Se só a defesa recorreu e o tribunal afasta circunstância negativa, a pena-base reduz proporcionalmente (Tema 1214 do STJ).
- **Progressão e execução antes do trânsito:** admite-se progressão antes do trânsito (Súmula 716 do STF); pena restritiva de direitos só executa depois do trânsito (Súmula 643 do STJ).
- **Apelação despachada no prazo** não fica prejudicada pela demora da juntada por culpa do cartório (Súmula 320 do STF).

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "decisão manifestamente contrária à prova dos autos", "apelação do júri" e os da tese material (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. As súmulas e o Tema 1068 acima podem entrar pelo número.

#### Não fazer

- Não juntar interposição e razões na mesma petição sem avisar o advogado que o prazo de razões é outro.
- Não pedir tudo no júri: apelação sem fundamento na alínea limita o conhecimento (Súmula 713).
- Não usar RESE onde cabe apelação (593, §4º).
- Não citar "novo julgamento" como pedido da alínea d sem lembrar que só há uma chance.
- Não afirmar data de vencimento.

*Referências conferidas em 20/10/2026 (CPP consolidado na Câmara dos Deputados; Lei 9.099 na Câmara; BNP/CNJ de 19/10/2026). Revisão de 20/10/2026. Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Defesa no Juizado Especial Criminal (`defesa-no-juizado-especial-criminal`)

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em o método peca-a-partir-da-ficha), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-penal` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do JECrim e sai em roteiro de audiência mais do que em peça escrita.

Onde esta skill e o módulo `area-penal` divergirem, vale esta skill (atualizada em 20/10/2026).

#### Antes do roteiro

- **É JECrim?** Contravenção e crime com pena máxima até 2 anos, cumulada ou não com multa (Lei 9.099, art. 61). Pergunte a pena máxima do tipo e dos aumentos. Violência doméstica contra a mulher fica fora, qualquer que seja a pena (Lei 11.340, art. 41; Súmula 536 do STJ: sem transação nem sursis processual).
- **Plano:** esta skill sai em roteiro de audiência, não em peça. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se a triagem barrar o caso (não é JECrim, acordo vedado, representação decaída), pare e responda a consulta, sem plano.
- **Autor do fato, não réu** na fase preliminar. Termo circunstanciado (art. 69): sem prisão em flagrante nem fiança se o autor comparece ou se compromete a comparecer; em violência doméstica, o juiz pode afastar do lar (art. 69, parágrafo único).
- **Citação e complexidade:** a citação é pessoal (art. 66); se o autor não é achado, as peças vão ao juízo comum. Caso complexo também (arts. 66, parágrafo único, e 77, §2º).
- **Ficha:** termo circunstanciado, data do fato, versão do cliente, antecedentes e **o que cada acordo traz de efeito** (condenação anterior a pena privativa de liberdade; benefício nos últimos 5 anos), dano da vítima e sua posição, se o crime é de ação pública condicionada.

#### Estrutura (fase por fase)

1. **Audiência preliminar (arts. 70 a 75):** presença do autor, da vítima, do responsável civil, do MP e dos advogados (art. 72). Ordem de exame:
   - **Composição dos danos civis (art. 74):** reduzida a escrito, homologada por sentença irrecorrível, vale título no juízo cível. Em ação privada ou pública condicionada à representação, a homologação **implica renúncia ao direito de queixa ou representação** (parágrafo único): para quem defende, é saída; para quem acusa, pense antes de assinar.
   - **Representação oral (art. 75):** se não houver composição, o ofendido pode representar na hora; não oferecê-la ali não gera decadência.
   - **Transação penal (art. 76):** o MP propõe pena restritiva de direitos ou multa. Não cabe se o autor foi condenado a pena privativa de liberdade por sentença definitiva (§2º, I); foi beneficiado nos últimos 5 anos (II); antecedentes, conduta social, personalidade, motivos e circunstâncias indicam que não é necessária e suficiente (III). Aceita pelo autor **e pelo defensor** (§3º), o juiz aplica; não gera reincidência, vai só ao registro para impedir novo benefício em 5 anos (§4º), não consta de certidão de antecedentes, não tem efeitos civis (§6º). Cabe apelação (§5º). Recusa injustificada do MP: peça manifestação motivada.
   - **Descumprimento da transação:** a homologação não faz coisa julgada material e o MP pode oferecer denúncia ou requisitar inquérito (Súmula Vinculante 35). Avise o cliente.
2. **Denúncia ou queixa oral (art. 77):** dispensado o inquérito; exame de corpo de delito pode ser substituído por boletim médico (§1º).
3. **Suspensão condicional do processo (art. 89):** pena mínima de até 1 ano, acusado sem outro processo nem condenação por crime, com os requisitos do sursis (CP 77). Período de prova de 2 a 4 anos; condições legais: reparar o dano, não frequentar certos lugares, não sair da comarca sem autorização, comparecer mensalmente (§1º); o juiz pode impor outras (§2º). Revogação obrigatória se processado por crime ou se não reparar sem justo motivo (§3º); facultativa se contravenção ou outra condição descumprida (§4º). Prescrição suspensa (§6º). Concurso de crimes ou continuidade: some a pena mínima e o aumento mínimo (Súmulas 243 do STJ e 723 do STF). Cabe na desclassificação e na procedência parcial (Súmula 337 do STJ). Recusa do promotor: remessa ao Procurador-Geral (Súmula 696 do STF). Aceitar o sursis não impede o pedido de trancamento (Súmula 667 do STJ). Descumprido o sursis, a revogação vale se o fato ocorreu durante o prazo, mesmo vencido (Tema 920 do STJ).
4. **Audiência de instrução e julgamento (arts. 78 a 81):** o acusado é cientificado da data e leva suas testemunhas ou pede intimação com 5 dias de antecedência no mínimo (art. 78, §1º). **Resposta oral** (art. 81): aberta a audiência, a defesa responde à acusação e o juiz recebe ou não a denúncia; depois vêm vítima, testemunhas de acusação e de defesa, interrogatório, debates orais e sentença. Todas as provas na audiência (§1º). Respeite a dignidade da vítima e das testemunhas (art. 81, §1º-A, Lei 14.245/2021: vedadas perguntas sobre circunstâncias alheias aos fatos e linguagem ofensiva).
5. **Recursos:** apelação à Turma Recursal em 10 dias, com razões e pedido, contra a rejeição da denúncia e contra a sentença (art. 82, §1º); contrarrazões em 10 dias (§2º); embargos de declaração em 5 dias, por escrito ou oral, e interrompem o prazo do recurso (art. 83, §§1º e 2º). HC contra a Turma: ver `habeas-corpus`.

#### Teses e pedidos que costumam caber

- Lesão corporal leve e culposa só procede com representação (art. 88). Crime de ação condicionada: conferir se a vítima representou no prazo (decadência, CPP 38).
- Se a proposta de transação vier a quem já foi beneficiado há menos de 5 anos ou tem condenação definitiva a pena privativa de liberdade, ela é inválida (art. 76, §2º, I e II): a ficha precisa dessas datas antes de aceitar.
- Antes de aceitar acordo, o advogado pergunta ao cliente se prefere discutir a prova em audiência; transação não discute culpa.
- Efeitos: transação e composição não geram reincidência (76, §4º), mas contam para a vedação de 5 anos do ANPP (CPP 28-A, §2º, III).

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "transação penal", "suspensão condicional do processo" e "Turma Recursal" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. As Súmulas 243, 337, 536 e 667 do STJ, 696 e 723 do STF e a Súmula Vinculante 35 podem entrar pelo número.

#### Não fazer

- Não deixar o cliente aceitar transação ou suspensão sem explicar o efeito (5 anos, descumprimento, perda do ANPP).
- Não chamar o autor do fato de "réu" na fase preliminar.
- Não propor composição de danos sem conferir que ela encerra a representação.
- Não contar prazo como dia útil: o prazo penal conta corrido (CPP 798, ver módulo `area-penal`); o art. 12-A da Lei 9.099 (dias úteis) está na seção dos atos processuais do juizado cível e não alcança o JECrim.
- Não aplicar a Lei 9.099 à violência doméstica contra a mulher.

*Referências conferidas em 20/10/2026 (Lei 9.099 consolidada na Câmara dos Deputados; Lei 11.340 e CPP no Planalto e na Câmara; BNP/CNJ de 19/10/2026). Revisão de 20/10/2026. Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Habeas corpus (`habeas-corpus`)

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em o método peca-a-partir-da-ficha), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-penal` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do habeas corpus.

Onde esta skill e o módulo `area-penal` divergirem, vale esta skill (atualizada em 20/10/2026).

#### Antes do roteiro

- **Sem prazo** (CF 5º, LXVIII), gratuito (LXXVII). Mas a prova é pré-constituída: o HC não tem dilação probatória. Peça ao advogado a decisão atacada, a certidão de intimação, a denúncia ou o auto de prisão, e o que prova a ilegalidade. Documento que não veio: `[JUNTAR]`.
- **Quem é a autoridade coatora** define o tribunal. Pergunte: quem decretou ou mantém a prisão, e se já houve HC antes, em que tribunal e com que resultado (sucessivos HCs sem recurso próprio é o tropeço comum).
  - Delegado ou autoridade sem foro: juiz de primeiro grau. Juiz estadual: TJ. Juiz federal: TRF (CF 108, I, d); e juiz federal em matéria criminal de sua competência julga HC quando o constrangimento vem de autoridade sem outra jurisdição (109, VII).
  - Tribunal estadual ou regional como coator: STJ (105, I, c). Tribunal superior como coator: STF (102, I, i). Autoridades do art. 102, I, d e do 105, I, c: o tribunal da prerrogativa.
  - Promotor de justiça como coator: TJ. Contra decisão de Turma Recursal do JECrim: ao **TJ** (ou ao TRF, no juizado federal). A Súmula 690 do STF (competência originária do STF) ainda consta no BNP, mas o Plenário do STF a superou em 2006: não a cite nem enderece o HC ao STF.
  - **Recurso ordinário em HC:** contra HC denegado por TJ/TRF, ao STJ (CF 105, II, a); por tribunal superior, ao STF (102, II, a). **5 dias, já com as razões** (Lei 8.038/1990, art. 30), protocolado perante o tribunal que denegou a ordem; a contagem é do advogado. Se pelas datas da ficha o prazo parece vencido, avise antes de redigir e peça a data exata da intimação; não afirme o vencimento. Vencido, o HC originário não substitui o RO: só serve para pedir concessão de ofício (647-A) por ilegalidade flagrante, sem garantia de conhecimento. Conteúdo do RO: cabimento, fatos com fl./ID, inciso do 648, pedido de reforma, liminar se a prisão persiste.
- **HC não é o primeiro passo contra toda prisão.** Se o cliente ainda não pediu ao juiz da causa a liberdade ou a revogação, comece por esse pedido (ver `liberdade-provisoria-e-revogacao-da-preventiva`, que traz o mérito da preventiva: 312, §4º, contemporaneidade, medidas do 319). O HC cabe diante de ilegalidade concreta, decisão mantida em segundo grau, teratologia ou urgência que o recurso não atende; abra as duas skills.
- **Preso ou solto, desde quando, e o fato.** Preso: "RÉU PRESO" no topo.
- **Há recurso cabível?** Se a ficha mostra decisão com apelação, RESE ou agravo em execução em curso, o HC substitutivo é o ponto fraco (ver Teses).

#### Estrutura

1. Endereçamento ao tribunal competente; impetrante, paciente, autoridade coatora, com nomes e iniciais conforme a regra do escritório. O art. 654, §1º exige: quem sofre a coação e quem a exerce; a espécie de constrangimento (ou as razões do temor, se preventivo); assinatura do impetrante e indicação das residências.
2. Cabimento: coação ou ameaça à liberdade de locomoção (CPP 647). Preventivo, se há ameaça.
3. Fatos e cronologia, sempre com a folha ou o ID.
4. Direito, pelo CPP 648: I sem justa causa; II preso além do prazo legal; III coação de quem não tem competência; IV cessado o motivo; V não admitida fiança onde a lei a autoriza; VI processo manifestamente nulo; VII punibilidade extinta. Diga o inciso.
5. Liminar: *fumus* (a ilegalidade na decisão) e *periculum* (a prisão ou o ato em curso). A liminar não tem artigo no CPP; vem do poder geral de cautela e do regimento do tribunal (abra o regimento). Peça-a com urgência e dê o motivo concreto.
6. Pedidos: liminar; no mérito, concessão da ordem com a consequência exata (relaxar, revogar, trancar, cassar a decisão, medida do art. 319 em vez da prisão). Pedido subsidiário de concessão **de ofício** (CPP 647-A, parágrafo único, Lei 14.836/2024): o juiz ou tribunal pode conceder a ordem mesmo sem conhecer da ação ou recurso.

#### Teses e pedidos que costumam caber

- **HC substitutivo de recurso:** desde 2012 o STF e o STJ não conhecem do HC usado no lugar do recurso próprio (RO, apelação, RESE, agravo em execução, REsp), mas concedem a ordem de ofício em ilegalidade flagrante; o 647-A, parágrafo único (Lei 14.836/2024), positivou a concessão de ofício "ainda que não conhecidos a ação ou o recurso". Fundamente a flagrante ilegalidade ou a teratologia com o inciso do 648; o precedente vem do conector, cite só o que voltar.
- **Liminar negada em tribunal superior:** o STF não conhece HC contra decisão do relator que indefere a liminar (Súmula 691 do STF). Avalie caso excepcional antes de impetrar.
- **Excesso de prazo:** superado com o encerramento da instrução (Súmula 52 do STJ) e com a pronúncia (Súmula 21 do STJ). Nos crimes hediondos, a vedação de liberdade provisória não impede relaxar por excesso (Súmula 697 do STF).
- **Trancamento:** a sentença condenatória prejudica o HC de trancamento por falta de justa causa (Súmula 648 do STJ); aceitar o sursis processual não prejudica o exame (Súmula 667 do STJ).
- **Não se conhece:** pena de multa isolada (693), exclusão de militar ou perda de função (694), pena já extinta (695), HC contra decisão de turma ou plenário do STF em HC (606), custas (395). Todas do STF, conferidas no BNP em 19/10/2026.
- **Regime e pena:** regime mais gravoso só pela gravidade abstrata (Súmulas 718 e 719 do STF; 440 do STJ).
- **Preventiva:** o fundamento do 312 e a contemporaneidade (ver `liberdade-provisoria-e-revogacao-da-preventiva`). Flagrante convertido de ofício em preventiva: Súmula 676 do STJ.
- **Coletivo:** o 647-A fala em HC individual ou coletivo.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "habeas corpus substitutivo", "concessão de ofício art. 647-A" e no tema material da coação (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. As súmulas acima podem entrar pelo número.

#### Não fazer

- Não impetrar no tribunal errado: confira a autoridade coatora antes.
- Não usar HC para reexame de prova nem como segunda apelação.
- Não deixar de juntar a decisão atacada e a prova: sem prova pré-constituída, o relator nega seguimento.
- Não afirmar que há "constrangimento" sem apontar o inciso do 648.
- Não repetir pedido já negado sem fato novo.
- Não impetrar HC contra decisão monocrática de relator (liminar negada, seguimento negado) sem antes esgotar o agravo interno no próprio tribunal: STF e STJ não conhecem (Súmula 691 e sua extensão).

*Referências conferidas em 20/10/2026 (CPP consolidado na Câmara dos Deputados; CF, Lei 8.038 e Lei 14.836 no Planalto; BNP/CNJ de 19/10/2026). Revisão de 20/10/2026. Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Liberdade provisória e revogação da preventiva (`liberdade-provisoria-e-revogacao-da-preventiva`)

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em o método peca-a-partir-da-ficha), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-penal` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do pedido de liberdade.

Onde esta skill e o módulo `area-penal` divergirem, vale esta skill (atualizada em 20/10/2026).

#### Antes do roteiro

- **Em que ponto está a prisão:** flagrante sem custódia, custódia já feita, preventiva decretada, preventiva sentida há mais de 90 dias, preso na sentença. A peça muda em cada ponto. Pergunte a data e a hora da prisão e a da custódia.
- **Custódia (CPP 310, caput, Lei 15.358/2026):** em até 24 horas, por videoconferência, o juiz relaxa a prisão ilegal (I), converte em preventiva (II) ou concede liberdade provisória (III). §§ 7º a 13 (mesma lei): conferência dos processos pendentes (§7º), **entrevista prévia, reservada e inviolável com o defensor** (§9º), preso sozinho na sala (§10), repetição integral da audiência se a falha técnica for do tribunal (§11), presencial só por força maior (§13). Pergunte se a entrevista reservada ocorreu: se não, é nulidade a arguir na hora.
- **Prisão sem custódia no prazo:** a autoridade que deu causa sem motivação idônea responde administrativa, civil e penalmente (§3º); o §4º diz que, passadas 24 horas além do prazo sem motivação idônea, a prisão é ilegal e deve ser relaxada, sem prejuízo de nova preventiva. O STF examinou o §4º nas ADIs do Pacote Anticrime (2023) [conferir o alcance da decisão antes de pedir relaxamento automático]; use-o como fundamento, não como certeza.
- **310, §2º:** reincidente, integrante de organização criminosa armada ou milícia, ou portando arma de uso restrito, o juiz "deverá denegar" a liberdade provisória. Se a ficha cai aí, enfrente o §2º de frente (prova da reincidência, do vínculo, da arma) em vez de ignorá-lo.
- **Dados do cliente que o juiz vai pesar:** residência fixa, trabalho ou renda, filhos e dependentes, saúde, antecedentes, ações em curso, fatos posteriores, local da prisão. Documento só entra como "doc. N" se o advogado o leu.
- **Esta skill é o pedido ao juiz da causa; HC é outra via.** Peça primeiro ao juízo que mantém a prisão. Se ele já decidiu, o tribunal já manteve, ou a via própria não resolve a tempo, vá ao HC (ver `habeas-corpus`), que aproveita o mérito do 312 daqui. Não impetre HC para pedir o que nunca foi pedido ao juiz.
- **Fato e capitulação:** o 313 limita o cabimento (ver abaixo). Pergunte a pena máxima, reincidência, se há violência doméstica, se o fato é de organização criminosa ultraviolenta, milícia ou crime sexual contra criança.

#### Estrutura

1. "RÉU PRESO" no topo; endereçamento ao juízo que mantém a prisão.
2. Síntese da prisão (data, hora, local, motivo, decisão atacada, fl./ID).
3. **Ordem dos pedidos:** (a) relaxamento por ilegalidade (CF 5º, LXV; CPP 310, I): flagrante fora das hipóteses do art. 302, falta de custódia, nulidade; (b) liberdade provisória ou revogação por ausência dos requisitos (CF 5º, LXVI; CPP 310, III e 321); (c) subsidiariamente, uma ou mais das nove medidas do **319** (comparecimento periódico, proibição de lugares, de contato ou de ausentar-se da comarca, recolhimento noturno, suspensão de função, internação provisória, fiança, monitoração), indicando as que a ficha sustenta; a preventiva só cabe quando nenhuma delas basta, com justificativa individualizada (282, §6º); (d) prisão domiciliar (318, 318-A) com a prova idônea exigida no parágrafo único do 318.
4. Direito: **312**. Requisitos: prova da existência do crime, indício suficiente de autoria e perigo gerado pelo estado de liberdade. §2º: motivação em fatos novos ou contemporâneos. **§3º (Lei 15.272/2025):** a periculosidade que justifica a ordem pública considera modus operandi, participação em organização criminosa, natureza, quantidade e variedade de droga, arma ou munição, e fundado receio de reiteração, inclusive por outros inquéritos ou ações. **§4º:** é incabível a preventiva só pela gravidade abstrata. Rebata ponto a ponto o que o decreto usou.
5. Cabimento (313): I crime doloso com pena máxima acima de 4 anos; II reincidente em doloso; III violência doméstica; V (Lei 15.358/2026) organização ultraviolenta, paramilitar ou milícia; VI (Lei 15.487/2026) crimes sexuais contra criança e adolescente listados; §2º veda antecipar pena. O inciso IV foi revogado. Confira o inciso que o juiz invocou.
6. **Circunstâncias do 310, §5º (Lei 15.272/2025)** que o MP vai invocar na custódia: reiteração, violência ou grave ameaça, liberação anterior em custódia por outra infração, fato cometido com inquérito ou ação em curso, fuga ou perigo de fuga, perigo para a instrução. O §6º obriga o juiz a fundamentar à luz dos §§ 2º e 5º e do 312, §3º. Prepare a resposta a cada uma.
7. Pedido, com requerimento de alvará de soltura e comunicação ao BNMP.

#### Teses e pedidos que costumam caber

- **Revisão a cada 90 dias (316, parágrafo único):** o órgão que decretou revisa de ofício, por decisão fundamentada, sob pena de ilegalidade. O STF, nas ADIs 6.581 e 6.582 (2022), fixou que o atraso **não revoga automaticamente** a prisão: o juízo deve ser instado a reavaliar a legalidade e a atualidade dos fundamentos. Peça essa reavaliação; liste as datas dos decretos e das revisões; não calcule o prazo.
- **Indeferido o pedido:** cabe RESE (581, V) em 5 dias, razões em 2 (586 e 588), e, a qualquer tempo até o julgamento, pedido ao tribunal de efeito suspensivo ou ativo (584, §4º, Lei 15.358/2026: relevância dos motivos, plausibilidade do direito e dano irreparável). O HC segue possível.
- **Conversão de ofício:** o juiz não pode decretar nem converter em preventiva sem provocação (Súmula 676 do STJ). Preventiva converte-se do flagrante a pedido do MP ou da autoridade policial.
- **Excesso de prazo:** superado com o fim da instrução (Súmula 52 do STJ) e com a pronúncia (Súmula 21); nos hediondos, a vedação de liberdade provisória não impede relaxar por excesso (Súmula 697 do STF). **A regra do art. 5º, §4º, da Lei 15.358/2026 (descumprir prazo não relaxa sozinho) vale para os prazos de inquérito dos crimes dessa lei**; não a estenda a todo processo.
- **Fiança:** vedada só nas hipóteses dos arts. 323 e 324; a autoridade policial arbitra até pena máxima de 4 anos, acima disso pede-se ao juiz, que decide em 48 horas (322). A Súmula 81 do STJ (soma das mínimas acima de 2 anos) é anterior à Lei 12.403/2011 e não deve ser usada contra o cliente.
- **Antecedentes:** inquéritos e ações em curso não agravam a pena-base (Súmula 444 do STJ), mas entram no 312, §3º, IV: separe as duas coisas.
- **Preso na sentença:** o juiz decide fundamentadamente sobre manter ou impor a preventiva (387, §1º). Condenação do júri executa imediatamente (Tema 1068 do STF).
- **Algemas e custódia:** uso de algemas só com excepcionalidade escrita (Súmula Vinculante 11).
- **Coleta de DNA (310-A, Lei 15.272/2025):** em flagrante por crime violento, sexual, hediondo ou de organização armada, o MP ou a polícia pede a coleta do perfil genético na custódia ou em até 10 dias. Avise o cliente.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "prisão preventiva gravidade abstrata", "contemporaneidade da preventiva", "revisão nonagesimal" e "prisão domiciliar mãe de criança" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 21, 52, 444 e 676 do STJ, 697 do STF e Súmula Vinculante 11 podem entrar pelo número.

#### Não fazer

- Não pedir só a liberdade: peça o relaxamento antes e a cautelar do 319 depois.
- Não invocar o 312 sem ler o que o decreto de fato usou.
- Não afirmar que o excesso de prazo ou a falta de revisão solta automaticamente.
- Não citar a redação antiga do 310, §§ 1º a 4º, como se fosse tudo: os §§ 5º a 13 são novos.
- Não anexar prova de residência ou trabalho sem tê-la lido; use `[JUNTAR: comprovante de residência]`.

*Referências conferidas em 20/10/2026 (CPP consolidado na Câmara dos Deputados; Leis 15.272, 15.358 e 15.487 no Planalto; BNP/CNJ de 19/10/2026). Revisão de 20/10/2026. Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Queixa-crime (`queixa-crime`)

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em o método peca-a-partir-da-ficha), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-penal` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da queixa-crime, para quem acusa e para quem defende o querelado.

Onde esta skill e o módulo `area-penal` divergirem, vale esta skill (atualizada em 20/10/2026).

#### Antes do roteiro

- **Decadência: a primeira pergunta é a data em que o cliente soube quem é o autor.** Prazo de **6 meses** (CPP 38, caput; CP 103), contado dessa ciência. **Desde 19/06/2026** (Lei 15.438/2026), nos crimes de violência doméstica e familiar contra a mulher a ofendida tem **12 meses** (CPP 38, §2º; CP 103, parágrafo único; Lei 11.340, art. 16-A). Fato anterior a 19/06/2026: a decadência extingue a punibilidade (CP 107, IV), tem natureza penal, e o prazo maior é mais gravoso ao querelado, logo não deve retroagir (CF 5º, XL); não há precedente apurado [conferir no conector]. Não afirme data de vencimento; a contagem inclui o dia do começo (CP 10).
- **Decadência provavelmente consumada:** se pelas datas da ficha a ciência da autoria foi há mais de 6 meses (ou 12, no caso do 38, §2º), avise o advogado **antes de redigir** a queixa: mostre a data da ciência, a data de hoje e o prazo aplicável, e peça confirmação da data e de fato novo (nova postagem, repetição da ofensa): cada publicação nova é fato com ciência e prazo próprios. Não declare a queixa tempestiva nem a decadência consumada: a contagem é do advogado. Se consumada, a queixa perde objeto (extinção da punibilidade, CP 107, IV); restam as vias cíveis (indenização, remoção do conteúdo por ordem judicial). Pergunte se o cliente quer seguir por elas.
- **Qual crime (138, 139 ou 140):** calúnia exige imputar falsamente **fato determinado** definido como crime; difamação, imputar fato determinado ofensivo à reputação; injúria, atribuir qualidade negativa ofensiva à dignidade ou ao decoro, sem fato determinado. Xingamento genérico, como chamar alguém de "ladrão" ou "golpista" sem dizer o que fez, tende a ser **injúria (140)**, não calúnia. Se a postagem narra o fato ("desviou o dinheiro da sociedade em tal data"), aí sim calúnia ou difamação. Classifique pela frase transcrita, mostre a escolha ao advogado e, na dúvida, peça os tipos em concurso ou subsidiariamente, sem forçar a calúnia.
- **Ação é privada?** Crimes contra a honra: queixa (CP 145). Exceções: injúria real com lesão corporal (ação pública); requisição do Ministro da Justiça se o ofendido é o Presidente ou chefe de governo estrangeiro (141, I); representação se o ofendido é funcionário público em razão da função ou presidente do Senado, da Câmara ou do STF (141, II, redação da Lei 14.197/2021) ou injúria do 140, §3º, que desde a Lei 14.532/2023 só cobre religião, pessoa idosa e pessoa com deficiência (145, parágrafo único). **Ofensa por raça, cor, etnia ou procedência nacional não é queixa:** é o crime do art. 2º-A da Lei 7.716/1989, de ação pública incondicionada; oriente o cliente a registrar a ocorrência. Funcionário público ofendido em razão da função: legitimidade concorrente, queixa ou representação (Súmula 714 do STF). Confirme o tipo antes de escolher a peça.
- **Procuração com poderes especiais (CPP 44):** o instrumento traz o **nome do querelante** e a **menção ao fato criminoso**. Sem isso, a queixa é irregular e o prazo decadencial não espera: o vício é sanável por ratificação (CPP 568), mas a linha do STJ só o admite dentro do prazo decadencial. Redija a minuta da procuração junto com a queixa; o advogado precisa dela assinada no dia do protocolo.
- **Prova do fato:** print com URL, data e hora; ata notarial; testemunhas; quem divulgou e onde. Crime cometido ou divulgado em rede social: pena em **triplo** (CP 141, §2º); por paga ou promessa de recompensa, em dobro (§1º); são causas de aumento que podem tirar o caso do JECrim. Competência é a do lugar da consumação (CPP 70); para ofensa na internet, busque no conector o critério do tribunal da causa antes de escolher o foro. Documento só entra como "doc. N" se o advogado o leu; senão `[JUNTAR: ata notarial]`.
- **Foro e rito:** a maioria dos crimes contra a honra é de menor potencial ofensivo (Lei 9.099, art. 61: pena máxima até 2 anos); com os aumentos do 141 pode sair do JECrim. Confira a pena máxima com os aumentos, sem calcular. No JECrim há queixa oral (Lei 9.099, art. 77, §3º) e audiência preliminar de composição (arts. 72 e 74, parágrafo único: o acordo civil homologado implica renúncia à queixa). Fora dele, rito dos arts. 519 a 523 do CPP.

#### Estrutura

1. Endereçamento ao juízo (ou ao JECrim); qualificação do querelante e do querelado; procuração com poderes especiais anexa.
2. **Exposição do fato criminoso com todas as circunstâncias**, qualificação do querelado ou dados que o identifiquem, **classificação do crime** e rol de testemunhas (CPP 41). Transcreva a frase ofensiva entre aspas, com data, local, meio e a quem foi dita; diga a quem se imputa o fato.
3. Dolo específico (animus): a ficha precisa mostrar a intenção de ofender; explique por quê o contexto não é de crítica, informação ou ofensa em juízo (CP 142).
4. **Tempestividade:** a data da ciência da autoria e a data do protocolo.
5. Pedidos: recebimento; citação; **designação da audiência de reconciliação, que o art. 520 do CPP manda oferecer antes de receber a queixa** (nos crimes sujeitos àquele rito); condenação; ciência ao MP, que pode aditar a queixa e intervir (CPP 45); pedido expresso de valor mínimo de reparação (CPP 387, IV), sem o qual o juiz não o fixa (Tema 983 do STJ); testemunhas.

#### Teses e pedidos que costumam caber

- **Indivisibilidade:** a queixa contra um dos autores obriga o processo de todos (CPP 48); a renúncia quanto a um estende-se a todos (49). Querelar só um dos ofensores, por escolha, é renúncia tácita aos demais. O MP vela pela indivisibilidade.
- **Perempção (CPP 60):** o querelante que deixa de promover o andamento por 30 dias seguidos; que falta a ato sem justificativa; que não pede a condenação nas alegações finais. Avise o cliente e programe esses atos.
- **Retratação (CP 143):** a retratação do querelado antes da sentença, nos casos de calúnia e difamação, extingue a punibilidade (CP 107, VI). Pode ser nos mesmos meios de comunicação, se o ofendido quiser (143, parágrafo único). **Perdão** do querelante, aceito pelo querelado, extingue (CPP 51 a 59); proponha acordos antes da audiência quando o cliente quer a retratação mais do que a condenação.
- **Exceção da verdade (CP 138, §3º; 139, parágrafo único):** o querelante a contesta em 2 dias (CPP 523); a difamação só admite a exceção contra funcionário público em razão das funções.
- **Pedido de explicações em juízo (CP 144):** quando a ofensa é por alusão ou referência, antes da queixa.
- **Imunidade e liberdade de expressão:** a ofensa irrogada em juízo pela parte ou procurador (CP 142, I) não é punível; crítica a agente político na defesa da coisa pública: no conflito entre a liberdade de expressão do agente político e a honra de terceiro prevalece o interesse coletivo (Tema 562 do STF, conferido no BNP em 19/10/2026), tese que o querelado invoca quando a ofensa vem de político em debate público.
- **Defesa do querelado:** decadência, ausência de poderes especiais, falta de dolo, 142, exceção da verdade, perempção, indivisibilidade, retratação e pedido de rejeição (CPP 395).

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "crime contra a honra animus", "queixa-crime decadência" e "ofensa em rede social" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. A Súmula 714 e o Tema 562 do STF e o Tema 983 do STJ podem entrar pelo número.

#### Não fazer

- Não protocolar sem procuração com poderes especiais e menção ao fato.
- Não esquecer a data da ciência da autoria: é ela que conta, não a da ofensa.
- Não imputar crime que a ficha não descreve nem chamar o querelado de criminoso: "o querelado atribuiu ao querelante".
- Não ajuizar contra um só dos ofensores por conveniência.
- Não aplicar o triplo do 141, §2º, sem mostrar na ficha que a ofensa foi cometida ou divulgada em rede social; e não calcular a pena resultante.

*Referências conferidas em 20/10/2026 (CPP consolidado na Câmara dos Deputados; CP, Lei 11.340 e Lei 15.438 no Planalto; Lei 9.099 na Câmara; BNP/CNJ de 19/10/2026). Revisão de 20/10/2026. Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Resposta à acusação (`resposta-a-acusacao`)

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em o método peca-a-partir-da-ficha), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-penal` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da resposta à acusação.

Onde esta skill e o módulo `area-penal` divergirem, vale esta skill (atualizada em 20/10/2026).

#### Antes do roteiro

- **Prazo:** 10 dias da citação (CPP 396, caput). Citação por edital: o prazo só começa com o comparecimento pessoal do acusado ou do defensor constituído (396, parágrafo único). A contagem é do advogado; a skill nunca crava data. Pergunte a data da citação pessoal ou do comparecimento.
- **Rito:** pena máxima a partir de 4 anos, ordinário; abaixo, sumário (CPP 394, §1º). Os arts. 395 a 398 valem para todos os ritos de primeiro grau (394, §4º). Drogas: defesa prévia em 10 dias da notificação, antes do recebimento da denúncia, com até 5 testemunhas (Lei 11.343, art. 55, caput e §1º). Júri: resposta em 10 dias da citação (CPP 406). Funcional afiançável: resposta preliminar em 15 dias antes do recebimento (CPP 514); com inquérito, o STJ a dispensa (Súmula 330), o STF diverge: confira o tribunal da causa.
- **Preso ou solto, e desde quando.** Se preso, a peça abre com o pedido de liberdade (ver `liberdade-provisoria-e-revogacao-da-preventiva`).
- **Ficha mínima:** denúncia lida inteira (fato, circunstâncias, classificação, rol, CPP 41); data do recebimento e quem recebeu (o texto do CPP 3º-C diz que o juiz das garantias atua até o recebimento da denúncia, mas o STF, ao julgar as ADIs do Pacote Anticrime em 2023, assentou que a competência dele cessa com o oferecimento; a resposta vai ao juiz da instrução, que reexamina as cautelares em 10 dias, 3º-C, §2º; confira se a comarca o instalou); versão do cliente marcada como versão; testemunhas com nome, endereço e o que cada uma prova; documentos e mídias; antecedentes; se houve confissão no inquérito; pena mínima abstrata com causas de aumento e diminuição, para sursis e ANPP.

#### Estrutura

1. Endereçamento, qualificação, tempestividade com a data da citação.
2. Preliminares (CPP 396-A): inépcia (395, I), falta de pressuposto ou condição da ação (395, II), falta de justa causa (395, III), incompetência, nulidades do inquérito e das provas já obtidas, prescrição. Exceções (suspeição, incompetência) correm em apartado (396-A, §1º); suspeição exige procuração com poderes especiais (CPP 98).
3. Absolvição sumária (CPP 397): I excludente de ilicitude; II excludente de culpabilidade, salvo inimputabilidade; III fato evidentemente não criminoso; IV extinção da punibilidade. Peça com a prova documental que já sustenta o inciso.
4. Mérito em síntese: negativa de autoria, tipicidade, desclassificação. Não antecipe toda a tese; resguarde o que depende de prova oral.
5. Provas (396-A, caput): documentos e justificações; **rol de testemunhas aqui**, qualificadas e com pedido de intimação (CPP 401: até 8 por fato no ordinário; 532: até 5 no sumário). Diligências, perícia e mídias com origem.
6. Pedidos: absolvição sumária; subsidiariamente, instrução; benefícios cabíveis.

#### Teses e pedidos que costumam caber

- **ANPP e sursis processual:** se a ficha mostra pena mínima abaixo de 4 anos e crime sem violência ou grave ameaça, o ANPP é cabível em tese (CPP 28-A; ver `acordo-de-nao-persecucao-penal`). **Antes de pedi-lo, avise o advogado:** o ANPP exige confissão (caput; pode ser formalizada na assinatura, Tema 1303 do STJ) e pedi-lo pode colidir com a tese de negativa de autoria ou com o pedido de absolvição sumária do cliente que nega o fato. É decisão do advogado com o cliente. Pergunte se ele admite o fato; sem essa decisão, não peça, ou formule em caráter subsidiário e diga que o faz assim. Não escreva confissão em nome do cliente. Pena mínima até 1 ano: suspensão condicional do processo (Lei 9.099, art. 89); recusa do promotor, Súmula 696 do STF. Desclassificação não impede o sursis (Súmula 337 do STJ); concurso de crimes: Súmulas 243 do STJ e 723 do STF.
- **Tráfico privilegiado:** inquéritos e ações em curso não afastam o art. 33, §4º (Tema 1139 do STJ, conferido no BNP em 19/10/2026).
- **Prova do inquérito:** acesso amplo aos autos é direito da defesa (Súmula Vinculante 14). Quebra da cadeia de custódia (CPP 158-A a 158-F), reconhecimento fora do rito do 226, busca pessoal sem fundada suspeita (244) e ingresso em domicílio sem fundadas razões justificadas a posteriori (Tema 280 do STF) entram como preliminar de ilicitude quando a ficha mostrar o vício.
- **Falta de resposta:** o juiz nomeia defensor e dá vista por 10 dias (396-A, §2º); a resposta pobre não é causa de nulidade sem prejuízo (Súmula 523 do STF), por isso o conteúdo vem agora.
- **Citação por edital:** o comparecimento do defensor inicia o prazo; sem comparecimento, suspensão do processo e da prescrição (CPP 366). Antes de se apresentar, pense se convém.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "absolvição sumária", "inépcia da denúncia", "ingresso em domicílio sem mandado" e "tráfico privilegiado" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 330, 337 e 243 do STJ, 696 e 723 do STF e o Tema 1139 do STJ podem entrar pelo número.

#### Não fazer

- Não deixar o rol de testemunhas para depois: ele vai na resposta (396-A).
- Não guardar nulidade relativa para os memoriais: não arguida na primeira oportunidade, preclui (CPP 571 e 572 [conferir o inciso do rito]). Nulidade absoluta e ilicitude da prova podem voltar depois, mas pesam mais aqui.
- Não confessar nem narrar a versão do cliente sem ele ter decidido; versão entra como "versão do cliente".
- Não chamar o cliente de criminoso: "a denúncia imputa".
- Não pedir absolvição sumária por falta de prova: o inciso III do 397 exige fato evidentemente não criminoso, e dúvida sobre autoria vai para a instrução.
- Não calcular pena mínima de cabeça para sursis e ANPP: liste tipo, causas de aumento e diminuição e deixe a conta ao advogado.

*Referências conferidas em 20/10/2026 (CPP consolidado na Câmara dos Deputados; Lei 11.343 no Planalto; BNP/CNJ de 19/10/2026). Revisão de 20/10/2026. Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

---

## Cível e consumidor

### Agravo de instrumento (`agravo-de-instrumento`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do agravo de instrumento, dos dois lados (agravante e agravado).

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: 15 dias úteis da intimação (CPC 1.003, § 5º, e 219). Pergunte se a data da ficha é a da ciência ou a da disponibilização no sistema, porque o termo inicial muda `[conferir CPC 231 e a regra do sistema do tribunal]`. Compare o último dia provável com a data do evento que torna a decisão urgente (demolição, leilão, consulta): se o prazo final cai no dia do evento ou depois, o ALERTA diz que o agravo deve ser protocolado já, com o pedido de tutela recursal, sem esperar o fim do prazo. O relator decide o efeito em 5 dias da distribuição (1.019, I).

#### Antes do roteiro

- **Primeiro teste: cabe agravo?** Pergunte qual é a decisão, a data da intimação e o tema. Cabe contra interlocutória nas hipóteses do CPC 1.015 (I tutelas provisórias; II mérito; III rejeição de convenção de arbitragem; IV desconsideração da personalidade jurídica; V gratuidade (rejeição ou revogação); VI exibição ou posse de documento ou coisa; VII exclusão de litisconsorte; VIII rejeição de limitação do litisconsórcio; IX admissão ou inadmissão de intervenção de terceiros; X efeito suspensivo dos embargos à execução; XI distribuição do ônus da prova (373, §1º); XIII outros casos previstos em lei; o XII foi vetado). O parágrafo único soma liquidação, cumprimento de sentença, execução e inventário.
- **Fora do rol:** Tema 988 do STJ, taxatividade mitigada: cabe quando há urgência decorrente da inutilidade do julgamento da questão na apelação. Vale para interlocutórias publicadas depois de 19/12/2018. Se o advogado quer agravar fora do rol, a peça tem uma seção própria que mostra, com fato da ficha, por que esperar a apelação esvazia o direito. "Prejuízo" genérico não basta.
- **Cabimento já decidido pelo STJ:** recuperação e falência, todas as interlocutórias (Tema 1022); juiz que nega seguimento à apelação em execução ou cumprimento (Tema 1267); primeira fase da ação de exigir contas é interlocutória e a apelação seria erro grosseiro (Tema 1281). Súmula 118: homologação de atualização de cálculo na liquidação.
- **Juizado Especial:** não faça agravo de instrumento. A Lei 9.099 só prevê recurso contra sentença (art. 42) e o STF fixou que não cabe mandado de segurança contra interlocutória no rito da 9.099 (Tema 77 da repercussão geral). A questão fica para o recurso inominado; Turma Recursal que admite MS em caso excepcional é prática local `[conferir enunciados da Turma]`.
- **Prazo:** 15 dias úteis (CPC 1.003, §5º, e 219), com a conta à mostra no bloco acima. Feriado local: prove na interposição; se faltar, o tribunal manda corrigir ou desconsidera o vício se a informação já está no processo eletrônico (1.003, §6º, Lei 14.939/2024). Contraminuta: 15 dias (1.019, II).
- **Decisão negativa (indeferiu liminar, prova ou pedido) pede efeito ativo, não efeito suspensivo.** Não há o que suspender numa negativa: o pedido é de antecipação da tutela recursal, para o relator deferir o que o juiz negou (1.019, I: "deferir, em antecipação de tutela, total ou parcial, a pretensão recursal"). Contra decisão que deferiu, o pedido é efeito suspensivo. Diga qual dos dois é, antes do roteiro. Se o fundamento é perda do objeto da prova (demolição, reforma, perecimento), avalie em paralelo a produção antecipada de prova (CPC 381, I: fundado receio de que se torne impossível ou muito difícil a verificação de certos fatos na pendência da ação) como via complementar, e pergunte se já houve pedido de reconsideração. Se a decisão for apelável (sentença), o recurso é outro.
- **Documentos da ficha:** a decisão agravada com a certidão de intimação, petição inicial, contestação, a petição que provocou a decisão e as duas procurações.

#### Estrutura

1. Petição ao tribunal (CPC 1.016): nomes das partes; exposição do fato e do direito; razões do pedido de reforma ou de invalidação da decisão e o próprio pedido; nome e endereço completo dos advogados de todos os atuantes no processo.
2. Cabimento e tempestividade: inciso do 1.015 ou a seção do Tema 988; data da intimação.
3. Síntese do processo e da decisão, com o trecho atacado.
4. Razões: um tópico por fundamento da decisão. Ataque o que o juiz decidiu, não repita a inicial.
5. Pedido de efeito suspensivo (decisão que deferiu) ou de antecipação da tutela recursal, o efeito ativo (decisão que negou) (CPC 1.019, I), em tópico separado: probabilidade do direito e risco de dano grave, com o fato concreto e a data que o torna urgente (995, par. único: risco de dano grave, de difícil ou impossível reparação, e probabilidade de provimento). O relator decide em 5 dias da distribuição.
6. Pedidos finais: provimento, reforma ou anulação dizendo exatamente o que muda.
7. **Rol de peças (CPC 1.017):** em autos eletrônicos, as cópias obrigatórias (I) e a declaração de inexistência (II) ficam dispensadas (§5º). Em autos físicos: inicial, contestação, petição que provocou a decisão, decisão agravada, certidão de intimação ou outro documento oficial da tempestividade e as procurações de agravante e agravado, ou declaração do advogado sob responsabilidade pessoal; custas e porte quando devidos (§1º). Peça faltante: o relator abre prazo para sanar (§3º com 932, par. único). Sem certidão, outro meio inequívoco prova a tempestividade (Tema 697).
8. Juízo de origem (CPC 1.018): em autos físicos, junte na origem cópia do agravo, do comprovante e da relação de documentos em 3 dias (§2º); se o agravado arguir e provar a falta, o agravo é inadmitido (§3º). Em autos eletrônicos é facultativo. Se o juiz reformar a decisão por inteiro, o agravo fica prejudicado (§1º).

#### Teses e pedidos que costumam caber

- **Agravado:** contraminuta com preliminar de não cabimento se não houver inciso nem urgência demonstrada; peça faltante; ausência de dano que justifique o efeito suspensivo.
- Se o relator negar o efeito suspensivo ou decidir monocraticamente, cabe agravo interno (1.021); multa de 1% a 5% se manifestamente inadmissível ou improcedente por unanimidade (§4º).
- Julgamento é marcado até 1 mês depois da intimação do agravado (1.020).

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "taxatividade mitigada do art. 1.015" e no tema da decisão agravada (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Temas 988, 1022, 1267, 1281 e 697 e as Súmulas 86 e 118 do STJ, e o Tema 77 do STF, podem entrar pelo número.

#### Não fazer

- Não agravar sentença (é apelação) nem decisão que só tem despacho de mero expediente.
- Não invocar o Tema 988 sem demonstrar a urgência com fato da ficha.
- Não impetrar mandado de segurança como substituto de agravo no Juizado (STF, Tema 77).
- Não protocolar sem o rol do 1.017 conferido peça por peça. Em processo eletrônico, as peças obrigatórias e a declaração são dispensadas (§5º): confira só o que o sistema do tribunal ainda exige.
- Não pedir efeito suspensivo dentro das razões, sem tópico próprio, nem sem dizer o que acontece e quando.

*Referências conferidas e revisadas em 20/10/2026 (Planalto via proxy: CPC 219, 381, 995, 1.003, 1.015 a 1.021; Lei 9.099, art. 42; portal do STJ; Banco Nacional de Precedentes do CNJ: Temas 697, 988, 1022, 1267 e 1281 e Súmulas 86 e 118 do STJ, Tema 77 do STF). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Cobrança e monitória (`cobranca-e-monitoria`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da cobrança e da monitória, de credor e devedor.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: a pergunta "dá monitória?" é consulta. Responda com o parecer curto (teste do título, prescrição por documento, via recomendada) e não abra o plano de cinco blocos; o plano só vem se o advogado mandar redigir. A prescrição vai num quadro por documento: documento, data de emissão ou vencimento, prazo e base legal, data-limite sugerida, situação em relação a hoje. Mostre duas contas quando houver reconhecimento da dívida pelo devedor (e-mail, acordo, pagamento parcial): sem interrupção e com interrupção (CC 202, VI; uma só vez; o prazo recomeça da data do ato, CC 202, par. único). Se nos dois cenários a pretensão está prescrita, diga isso com ALERTA DE PRESCRIÇÃO e passe às saídas, sem esconder a conta.

#### Antes do roteiro

- **Primeiro teste: a prova é título executivo?** Se for (CPC 784: cheque dentro do prazo, contrato assinado por duas testemunhas, contrato eletrônico com assinatura prevista em lei e integridade conferida por provedor, que dispensa testemunhas, §4º, escritura, confissão de dívida, aluguel documentado, cédula de crédito bancário com planilha, Lei 10.931, art. 28, e Tema 576), a via é a execução; veja `execucao-de-titulo-extrajudicial`. A monitória é para prova escrita **sem** eficácia de título. Conversão de execução em monitória depois da citação é inadmissível (Tema 320).
- **Qual prova escrita:** contrato sem testemunhas, extrato, faturas, e-mails e mensagens, cheque e nota promissória prescritos, duplicata sem requisitos, confissão sem testemunhas. A prova pode ser prova oral documentada, produzida antecipadamente (CPC 700, §1º, com o 381).
- **Prescrição, antes de tudo.** Mostre a conta da data da pretensão, documento por documento, e confira o prazo (abaixo): é sugestão a conferir, com a regra do bloco acima. Prescrito, a monitória não salva; avalie as saídas, como a ação causal do cheque (o negócio que ele pagou) e o locupletamento (Lei 7.357, art. 61: 2 anos contados da prescrição da execução, art. 59), cada uma com o seu prazo; a ação causal segue o prazo do negócio que o cheque pagou (art. 62).
- **Cálculo:** peça ao advogado a memória atualizada na data do ajuizamento: principal, índice, juros, multa e período. A skill lista as colunas e não calcula. Correção e juros legais: IPCA (CC 389, par. único) e taxa legal Selic menos IPCA (CC 406), desde a Lei 14.905/2024 (publicada em 01/07/2024, eficaz 60 dias depois, em 30/08/2024, salvo o §2º do 406, desde a publicação), salvo o que o contrato fixar.
- **Perguntas:** quem assina o contrato e quem é o devedor (avalista?); houve pagamento parcial; há cláusula de foro; relação de consumo (CDC 101, I); valor (JEC até 40 salários mínimos para cobrança comum; monitória no JEC é controvertida por ser procedimento especial `[conferir enunciado da Turma]`).

#### Estrutura da monitória (CPC 700 a 702)

1. Inicial instruída com a prova escrita e: (I) a importância devida **com memória de cálculo**; ou (II) o valor atual da coisa reclamada; ou (III) o conteúdo patrimonial ou o proveito econômico perseguido (700, §2º). O valor da causa corresponde a essa quantia (§3º). Sem isso, a inicial é indeferida (§4º). Tema 474 do STJ: o demonstrativo de débito atualizado até o ajuizamento é exigido, e a falta pode ser suprida.
2. Pedidos: expedição do mandado de pagamento, entrega ou fazer. O réu tem **15 dias** para cumprir e paga **5%** de honorários sobre o valor da causa; cumprindo, fica isento de custas (701, caput e §1º).
3. Sem pagamento e sem embargos, constitui-se de pleno direito o título executivo judicial, e segue em cumprimento de sentença (701, §2º). Cabe parcelamento do 916 (701, §5º).
4. Citação por qualquer meio do procedimento comum (700, §7º); por edital cabe (Súmula 282 do STJ). Contra a Fazenda cabe monitória (700, §6º; Súmula 339).
5. Dúvida do juiz sobre a prova: pode mandar emendar para o procedimento comum (700, §5º).

#### Embargos monitórios (lado do devedor e resposta do credor)

- Nos mesmos autos, em 15 dias, **sem garantia** (702, caput). Qualquer matéria de defesa do procedimento comum (§1º). Excesso: indicar o valor tido por correto com memória atualizada; sem isso, rejeição liminar se for o único fundamento, ou processamento sem exame do excesso (§§2º e 3º).
- Os embargos suspendem a eficácia do mandado até a sentença (§4º). Autor responde em 15 dias (§5º). Cabe reconvenção, não a reconvenção da reconvenção (§6º). Embargos parciais: a parte incontroversa vira título (§7º). Rejeitados, segue como cumprimento (§8º); apelação (§9º). Multa de até 10% do valor da causa para quem litigar de má-fé, autor ou réu (§§10 e 11).

#### Prescrição por tipo de dívida

- **Dívida líquida em instrumento público ou particular:** 5 anos (CC 206, §5º, I). **Cheque sem força executiva:** monitória em 5 anos a contar do dia seguinte à data de emissão (Súmula 503 e Tema 628). **Nota promissória:** 5 anos do dia seguinte ao vencimento (Súmula 504 e Tema 641). Cheque: execução em 6 meses do fim do prazo de apresentação (Lei 7.357, art. 59) e enriquecimento sem causa em 2 anos (art. 61).
- **Duplicata:** execução contra o sacado em 3 anos do vencimento (Lei 5.474, art. 18, I). Outros títulos de crédito: 3 anos do vencimento (CC 206, §3º, VIII). Aluguel: 3 anos (§3º, I). Enriquecimento sem causa: 3 anos (§3º, IV). Honorários de profissional liberal: 5 anos (§5º, II). Prescrição da pretensão de responsabilidade contratual (indenização por inadimplemento) é a geral de 10 anos (CC 205); a distinção entre cobrar valor líquido e pedir indenização é de jurisprudência `[buscar]`. Letra de câmbio e nota promissória: 3 anos do vencimento (CC 206, §3º, VIII; o art. 70 da Lei Uniforme, Decreto 57.663, não abriu `[conferir]`).
- Interrupção: despacho que ordena a citação (CC 202, I), retroagindo à propositura (CPC 240, §1º), e ato inequívoco, ainda que extrajudicial, de reconhecimento do direito pelo devedor (CC 202, VI); só uma vez, e o prazo recomeça da data do ato (CC 202, caput e par. único). Prescrição não corre entre cônjuges na constância do casamento (CC 197, I).

#### Súmulas úteis

247 e 233 (contrato de abertura de crédito: com demonstrativo de débito serve à monitória; não é título executivo); 299 (cheque prescrito); 531 e Tema 564 (dispensa o negócio subjacente no cheque prescrito); 384 (saldo de alienação fiduciária); 300 (confissão de dívida é título); 292 (reconvenção; hoje 702, §6º).

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "ação monitória prova escrita", "prescrição da ação monitória" e "prescrição art. 206 §5º I" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. As Súmulas 233, 247, 282, 299, 339, 384, 503, 504 e 531 e os Temas 320, 474, 564, 628 e 641 do STJ podem entrar pelo número.

#### Não fazer

- Não propor monitória com prova que já é título executivo sem explicar a escolha.
- Não omitir a memória de cálculo nem calcular a dívida de cabeça (o valor fica `[VALOR]`; a prescrição, ao contrário, tem a conta à mostra).
- Não deixar de checar a prescrição pelo tipo de documento nem de mostrar a conta.
- Não dizer ao devedor que os embargos precisam de garantia.

*Referências conferidas e revisadas em 20/10/2026 (Planalto via proxy: CPC 240, 700 a 702 e 784, CC 189, 197, 202, 205, 206, 389, 395 e 406, Lei 7.357, arts. 33, 47, 59, 61 e 62, Lei 5.474, arts. 15 e 18, Lei 10.931, art. 28, Lei 14.905/2024; Câmara dos Deputados; Banco Nacional de Precedentes do CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Embargos à execução (`embargos-a-execucao`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio dos embargos à execução de título extrajudicial; contra cumprimento de sentença o instrumento é a impugnação (CPC 525), outra peça.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: conte 15 dias úteis (CPC 915) a partir do dia seguinte à juntada do comprovante de citação, dia a dia, com os feriados do período (inclusive o de 02/11, quando cair no intervalo) e o último dia provável. Mostre também os prazos que correm em separado: 5 dias do 854, § 3º, da intimação do bloqueio (impenhorabilidade e excesso, por simples petição) e 15 dias do 917, § 1º, para impugnar a penhora ou a avaliação. Das perguntas abaixo, leve ao plano as cinco que mais pesam (defender ou parcelar, datas da citação e do bloqueio, natureza da conta, cálculo do cliente, garantia para o efeito suspensivo).

#### Antes do roteiro

- **Prazo: 15 dias úteis** (CPC 915), contados na forma do art. 231, isto é, da juntada aos autos do comprovante da citação, e não da penhora. Vários executados: o prazo de cada um corre da juntada do seu comprovante; cônjuges e companheiros, da última (§1º). O art. 229 (prazo em dobro) **não** se aplica (§3º). Execução por carta: §2º. Conta à mostra no bloco acima, a partir da ficha.
- **Bloqueio por penhora online (854):** o executado tem 5 dias da intimação da indisponibilidade para provar impenhorabilidade ou excesso (854, §3º), prazo diferente dos embargos. Pergunte a data do bloqueio, se a conta é de pessoa física ou do MEI e se há salário ou poupança. A conversão em penhora não reabre o prazo dos embargos.
- **Não exige garantia** do juízo (914). Distribuição por dependência, em autos apartados, instruída com as cópias relevantes, que o advogado autentica (914, §1º).
- **Alternativa de pagamento (916):** dentro do prazo, reconhecendo o crédito e depositando 30% do débito mais custas e honorários, o executado pede pagar o restante em até 6 parcelas mensais, com correção e 1% ao mês de juros. Ele **renuncia aos embargos** (§6º); indeferido o pedido, o depósito vira penhora (§4º); atraso vence as parcelas e soma multa de 10% (§5º). Não vale no cumprimento de sentença (§7º). Pergunte ao cliente se prefere defender ou parcelar.
- **O que pedir ao cliente:** título e contrato, demonstrativo do exequente, comprovantes de pagamento, extratos, correspondência, documentos que provem a nulidade ou o excesso, e o **cálculo que o próprio cliente ou o contador fez**. Sem número e sem memória, não há embargo de excesso.
- **Cédula de crédito bancário:** o título tem requisitos próprios, entre eles a planilha ou os extratos que demonstram o saldo (Lei 10.931/2004, art. 28: título executivo com liquidez pela soma indicada ou pela planilha e extratos; o §2º exige cálculo claro e preciso, discriminando utilizações, amortizações e encargos; Tema 576 do STJ confirma a executividade); falta de requisito ou de planilha vai para inexequibilidade (917, I).
- **Cliente consumidor?** Se o executado é MEI ou empresa pequena, pergunte para que usou o crédito: o CDC só entra se ele for destinatário final ou se houver vulnerabilidade comprovada. Cláusulas abusivas (CDC 51, IV); juros acima de 12% ao ano, por si, não indicam abusividade (Súmula 382 do STJ); capitalização inferior à anual permitida no SFN se pactuada (Súmula 539); atenção a contrato de abertura de crédito usado como título (Súmula 233).

#### Estrutura

1. Endereçamento ao juízo da execução, por dependência. Tempestividade, com a data da juntada do comprovante da citação.
2. Síntese da execução e do título.
3. **Matérias (CPC 917):** I inexequibilidade do título ou inexigibilidade da obrigação; II penhora incorreta ou avaliação errônea; III excesso de execução ou cumulação indevida; IV retenção por benfeitorias (entrega de coisa); V incompetência absoluta ou relativa; VI qualquer matéria de defesa do processo de conhecimento (pagamento, prescrição, compensação, nulidade de cláusula, ilegitimidade).
4. **Excesso de execução (917, §2º):** o exequente pede mais do que o título; a penhora recai sobre bem diverso; a execução se processa de modo diferente do título; exige o devedor cumprir sem cumprir o credor a sua obrigação; ou o credor não prova a condição ou o termo.
5. **Memória de cálculo (917, §3º):** quem alega que o credor pede mais do que o título tem de **declarar na petição o valor que entende correto, com demonstrativo discriminado e atualizado**. Sem isso, os embargos são rejeitados liminarmente se o excesso for o único fundamento, e, havendo outros, são processados sem exame do excesso (§4º). Monte a tabela com as colunas (principal, índice, juros, multa, período, pagamentos) e deixe os valores para o advogado ou o contador.
6. Pedido de **efeito suspensivo** (919, §1º), em tópico próprio: probabilidade do direito e risco de dano, com a execução já garantida por penhora, depósito ou caução suficientes. O 919, §1º, positivou os três requisitos que o Tema 526 do STJ já exigia sob o CPC/73 (garantia, relevância da fundamentação e dano grave). Ele pode ser parcial (§3º) e é revisável (§2º); não impede substituição, reforço ou redução da penhora (§5º).
7. Pedidos: acolhimento, extinção da execução ou redução ao valor correto; condenação em honorários; produção de provas.

#### Teses e pedidos que costumam caber

- **Vício de penhora ou avaliação:** pode ser impugnado por simples petição em 15 dias da ciência do ato (917, §1º), sem embargos.
- **Impenhorabilidade:** poupança até 40 salários mínimos não é matéria de ordem pública e se alega no primeiro momento ou nos embargos, sob pena de preclusão (Tema 1235 do STJ); bem de família e salário: veja `execucao-de-titulo-extrajudicial`.
- **Prescrição, pagamento e nulidade da citação** (803, II e III): arguíveis nos embargos. Matéria de ordem pública sem dilação probatória pode ser levada por simples petição (exceção de pré-executividade: construção jurisprudencial, sem súmula na execução civil; a 393 do STJ é de execução fiscal) `[buscar pelo conector]`.
- **Exequente:** rejeição liminar por intempestividade, inépcia ou propósito protelatório (918), resposta em 15 dias (920, I), requerimento de honorários majorados até 20% se rejeitados (827, §2º), multa por ato atentatório (774, par. único; 918, par. único).
- **Efeito dos embargos:** não suspendem a execução (919, caput). A apelação contra a sentença de improcedência não suspende a execução, que é definitiva (Súmula 317). Decisão sobre o efeito suspensivo é agravável (1.015, X).

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "embargos à execução excesso de execução art. 917", "efeito suspensivo dos embargos art. 919" e "impenhorabilidade" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 233, 317, 382 e 539 e Temas 526, 576 e 1235 do STJ podem entrar pelo número.

#### Não fazer

- Não alegar excesso sem o valor correto e a memória detalhada e atualizada: é o erro que faz o juiz rejeitar a tese de plano.
- Não contar o prazo da penhora, nem em dobro.
- Não pedir efeito suspensivo sem garantia do juízo e sem fato de dano concreto.
- Não usar embargos para discutir só vício de penhora (917, §1º) nem confundir com impugnação de cumprimento.
- Não somar valores nem calcular o excesso: liste o que entra.
- Não deixar a impenhorabilidade da poupança para depois: preclui se não alegada no primeiro momento ou nos embargos (Tema 1235).

*Referências conferidas e revisadas em 20/10/2026 (Planalto via proxy: CPC 229, 231, 525, 803, 827, 854, 914 a 920 e 1.015, Lei 10.931/2004, art. 28; Banco Nacional de Precedentes do CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Embargos de declaração (`embargos-de-declaracao`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio dos embargos de declaração.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: o prazo é de 5 dias úteis e quase sempre dispara o ALERTA DE PRAZO. Conte dia a dia a partir do dia seguinte à ciência (só dias úteis, 1.023 e Lei 9.099, arts. 49 e 12-A), diga o último dia provável e pergunte se a data da ficha é publicação ou ciência. Para o embargado, a resposta ao pedido de efeito modificativo é de 5 dias (1.023, § 2º).

#### Antes do roteiro

- **Peça a decisão e o vício.** Pergunte: qual decisão (sentença, acórdão, decisão interlocutória), data da intimação, e o trecho exato onde está o problema. Sem trecho concreto, não redija: embargos sem vício apontado viram protelatórios.
- **Hipóteses (CPC 1.022):** I esclarecer obscuridade ou eliminar contradição; II suprir omissão de ponto ou questão sobre o qual o juiz devia se pronunciar de ofício ou a requerimento; III corrigir erro material. Considera-se omissa a decisão que deixa de seguir tese de IRDR ou IAC aplicável ao caso ou que incorre em qualquer das condutas do 489, §1º. Insatisfação com o resultado não é vício.
- **Prazo:** 5 dias úteis (CPC 1.023), sem preparo; prazo em dobro para litisconsortes com advogados diferentes se aplicar o 229 (§1º). No Juizado, também 5 dias (Lei 9.099, art. 49), cabíveis nos casos do CPC (art. 48), em dias úteis (art. 12-A). Conta à mostra no bloco acima.
- **O que os embargos fazem com o prazo dos outros recursos:** interrompem (CPC 1.026, caput; Lei 9.099, art. 50). Não suspendem os efeitos da decisão, salvo pedido fundado no 1.026, §1º (probabilidade de provimento ou risco de dano grave).
- **Pergunte também:** já houve embargos antes neste processo (limite do 1.026, §4º); a ideia é só esclarecer ou também prequestionar; qual dispositivo legal ou constitucional precisa ser debatido; se a peça vai ao REsp ou ao RE depois.
- **Atenção a 2026 (só se o REsp for possível; contra a Turma Recursal do Juizado não é, Súmula 203 do STJ):** a Lei 15.484/2026 (DOU de 04/08/2026, em vigor desde 03/09/2026) criou o art. 1.035-A do CPC: o STJ não conhece do REsp sem relevância da questão federal, que o recorrente demonstra em tópico específico e fundamentado. O art. 4º da lei exige o tópico nos recursos contra acórdãos publicados após a vigência. Se os embargos preparam o REsp, avise o advogado: os embargos não suprem o tópico, e qual publicação conta (a do acórdão principal ou a dos embargos) ainda é `[conferir no regimento do STJ e na jurisprudência]`.

#### Estrutura

1. Endereçamento ao juiz ou relator que proferiu a decisão. Tempestividade, com a data da intimação.
2. Síntese da decisão embargada.
3. **Um tópico por vício**, nesta ordem: transcreva o trecho da decisão; diga qual hipótese do 1.022 é (omissão: qual argumento ou prova foi ventilado, onde nos autos, e por que influi no resultado; contradição: os dois trechos que se chocam; obscuridade: o que não dá para entender; erro material: o dado certo e onde está provado).
4. Prequestionamento, se for o caso (decisão de tribunal; no Juizado, veja a seção própria abaixo): indique cada dispositivo e a tese a ser debatida. O CPC 1.025 considera incluídos no acórdão os elementos que o embargante suscitou, mesmo se os embargos forem rejeitados, quando o tribunal superior reconhece erro ou omissão. O STJ exige, para esse prequestionamento ficto, que o REsp alegue violação do 1.022: a Súmula 211 convive com o 1.025 (Informativo 785 do STJ). Sem embargos na origem e sem essa alegação no REsp, o ponto fica sem prequestionamento.
5. Efeito modificativo: se o pedido pode mudar o resultado, requeira expressamente e lembre o contraditório de 5 dias (1.023, §2º).
6. Pedidos: acolher para suprir, esclarecer ou corrigir (dizendo o ponto), com ou sem efeito modificativo; suspensão da eficácia, se houver urgência (1.026, §1º).

#### Teses e pedidos que costumam caber

- **Súmula 98 do STJ:** embargos com notório propósito de prequestionamento não são protelatórios. Súmula 356 do STF: o ponto omisso sobre o qual não se opuseram embargos não é prequestionado para o RE. Súmula 282 do STF e Súmula 320 do STJ (questão só no voto vencido não prequestiona). Súmula 579 do STJ: não precisa ratificar o REsp interposto na pendência dos embargos se o resultado não mudou. A Súmula 418 do STJ está cancelada.
- **Se o relator ou juiz julgou só:** embargos contra decisão monocrática são decididos por ele (1.024, §2º), que pode recebê-los como agravo interno depois de 5 dias para o embargante complementar (1.024, §3º).
- **Quem embarga e a decisão muda:** o embargado que já recorreu tem 15 dias para complementar ou alterar as razões, só quanto à alteração (1.024, §4º); se os embargos são rejeitados ou não mudam a conclusão, o recurso já interposto segue sem ratificação (§5º; Súmula 579).
- **Defesa do embargado:** a decisão não tem vício, é rediscussão; Tema 698 do STJ trata como protelatórios os embargos que rediscutem matéria decidida conforme súmula ou precedente qualificado (tese redigida sob o CPC/73, arts. 543-B e 543-C, hoje o regime dos repetitivos). Multa do 1.026, §2º: até 2% do valor atualizado da causa; reiterados, até 10% e depósito para recorrer (§3º); depois de dois protelatórios, nenhum novo embargo (§4º).

#### Embargos contra sentença do Juizado (Lei 9.099, arts. 48 a 50)

- Cabem nos casos do CPC (art. 48), por escrito ou oralmente, em 5 dias úteis (arts. 49 e 12-A), e interrompem o prazo do recurso inominado (art. 50). Fundamente no CPC 1.022 e no 489, §1º, e avise o prazo curto.
- **Não use o CPC 1.025 contra sentença do Juizado:** o dispositivo fala em acórdão e em tribunal superior. Contra sentença, os embargos servem para suprir o vício e abrir o recurso inominado com a questão decidida.
- **Prequestionamento tem pouca serventia ali:** contra acórdão da Turma Recursal não cabe recurso especial (Súmula 203 do STJ). Só cabe recurso extraordinário, e apenas com questão constitucional (Súmula 640 do STF). Prequestionar o CC 206 (ou outro dispositivo de lei federal) não leva a lugar nenhum além da Turma: diga isso ao advogado, e peça o suprimento da omissão porque ela muda o resultado, não para "deixar prequestionado". Uniformização contra a Turma Recursal: `[conferir reclamação ou outro meio e a regra vigente]`.
- Não cite a Lei 15.484/2026 (relevância no REsp) em peça de Juizado.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "embargos de declaração omissão art. 1.022", "prequestionamento ficto art. 1.025" e "embargos protelatórios multa" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. As Súmulas 98, 203, 211, 320 e 579 do STJ e 282, 356 e 640 do STF podem entrar pelo número.

#### Não fazer

- Não usar os embargos para rediscutir mérito ou pedir nova valoração de prova.
- Não prequestionar dispositivo que ninguém debateu: indique a tese, não só o artigo.
- Não omitir o trecho da decisão nem o local dos autos da questão omitida.
- Não pedir efeito modificativo sem avisar que a outra parte será ouvida.
- Não deixar passar o prazo achando que os embargos o suspendem: eles o interrompem para recursos, mas a decisão continua eficaz.
- Não opor o terceiro embargo depois de dois considerados protelatórios (1.026, §4º), nem recorrer sem depositar a multa do §3º, salvo Fazenda e gratuidade.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (Planalto via proxy: CPC 229, 1.022 a 1.026 e 1.035-A, Lei 9.099, arts. 12-A e 48 a 50, Lei 15.484/2026, arts. 4º e 7º; Banco Nacional de Precedentes do CNJ; STJ, Informativo 785 e acórdãos sobre o 1.025, pelo site do tribunal). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Execução de título extrajudicial (`execucao-de-titulo-extrajudicial`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da execução de título extrajudicial, do lado do exequente e na resposta à alegação de impenhorabilidade.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: antes de ajuizar, mostre a conta da prescrição do título (prazos em `cobranca-e-monitoria`: cheque, duplicata, aluguel, contrato) com a data-limite sugerida e abra com ALERTA DE PRESCRIÇÃO se estiver consumada ou perto. Na defesa do executado contra a alegação de impenhorabilidade, o prazo do 854, § 3º é de 5 dias: conte-o. Das perguntas abaixo, leve ao plano as cinco que mais pesam (o documento é título, legitimidade de quem executa, fiador e benefício de ordem, bens, demonstrativo).

#### Antes do roteiro

- **O documento é título?** CPC 784: letra de câmbio, nota promissória, duplicata, debênture e cheque (I); documento público assinado pelo devedor (II); particular assinado pelo devedor e por 2 testemunhas (III); transação referendada por MP, Defensoria, Advocacia Pública, advogados ou conciliador credenciado (IV); contrato com garantia real ou caução (V); seguro de vida (VI); foro e laudêmio (VII); aluguel e encargos documentados (VIII); CDA (IX); cotas de condomínio documentadas (X); emolumentos de serventia (XI); contragarantia de seguro-garantia (XI-A, Lei 14.711/2023); o que mais a lei disser (XII). Título eletrônico: qualquer assinatura eletrônica prevista em lei, **dispensadas as testemunhas** quando a integridade for conferida por provedor de assinatura (§4º, Lei 14.620/2023). Confissão de dívida é título (Súmula 300); cédula de crédito bancário também, com a planilha do art. 28, §2º, da Lei 10.931 (Tema 576); contrato de abertura de crédito com extrato, não (Súmula 233). Sem título, veja `cobranca-e-monitoria`.
- **Certeza, liquidez e exigibilidade** (783 e 786): cálculo aritmético simples não tira a liquidez. Se o credor ainda tem de cumprir contraprestação, prove-a na inicial (787); se há condição ou termo, prove que ocorreram (798, I, c e d). Sem isso a execução é nula (803).
- **Prescrição do título** (CC 206; Lei 7.357, art. 59; Lei 5.474, art. 18): mostre a conta antes de ajuizar; a skill `cobranca-e-monitoria` traz os prazos.
- **Legitimidade ativa:** em aluguel, pergunte se quem executa é o locador ou a imobiliária que só administra o imóvel do proprietário; sem poderes ou cessão, a legitimidade é do proprietário (ou da imobiliária com mandato expresso).
- **Fiador:** pergunte se renunciou ao benefício de ordem. Se não, ele pode exigir que primeiro se executem os bens do devedor na mesma comarca (CPC 794, caput e §§ 1º e 3º). Pergunte se o contrato foi aditado: o fiador não responde por aditamento a que não anuiu (Súmula 214 do STJ).
- **Locação:** se o locatário ainda ocupa o imóvel, pergunte se o cliente quer também o despejo (ação própria, que pode ser cumulada ou separada) `[conferir Lei 8.245/1991]`.
- **Perguntas:** nome completo e CPF/CNPJ de cada executado (798, II, b); avalistas e fiadores (779); bens conhecidos, com matrícula ou placa (798, II, c); garantia real (a penhora recai sobre o bem dado em garantia, 835, §3º); foro de eleição ou domicílio (781); se há mais de um título do mesmo negócio (Súmula 27, e cumulação do 780).
- **Cálculo (798, I, b, e par. único):** demonstrativo atualizado até a propositura, com índice de correção, taxa de juros, termo inicial e final de cada um, periodicidade da capitalização e descontos obrigatórios. A skill monta as colunas e não calcula.

#### Estrutura (CPC 798)

1. Endereçamento e qualificação (CPF/CNPJ de ambas as partes).
2. Título e demonstrativo atualizado (798, I, a e b); prova de condição, termo e contraprestação (c e d).
3. Indicação da espécie de execução, se houver mais de uma (II, a), e dos bens penhoráveis (II, c).
4. Pedidos: citação para **pagar em 3 dias** (829); fixação de honorários de 10%, reduzidos à metade se o pagamento vier em 3 dias, e que podem chegar a 20% se rejeitados os embargos (827, caput e §§1º e 2º); penhora e avaliação se não houver pagamento (829, §1º), sobre os bens que o credor indicar (§2º); arresto se o oficial não achar o devedor, convertido em penhora depois da citação (830).
5. Certidão de admissão da execução para averbar em registros de bens (828). O credor comunica as averbações em 10 dias e cancela o excesso depois de penhora suficiente, sob pena de responder por perdas e danos; alienação posterior à averbação presume fraude.
6. Inclusão do executado em cadastro de inadimplentes (782, §3º), cancelada no pagamento, na garantia ou na extinção.

#### Pesquisa de bens e penhora

- **Dinheiro primeiro:** a penhora em dinheiro é prioritária; só nas demais hipóteses o juiz altera a ordem do 835 conforme o caso (§1º; Súmula 417). Fiança bancária ou seguro-garantia de ao menos 30% acima do débito equivalem a dinheiro para substituir a penhora (§2º). Faturamento é o décimo da ordem; se é excepcional ou prioritário está afetado no Tema 1409, sem tese.
- **Bloqueio eletrônico (854):** sem ciência prévia do executado, limitado ao valor da execução; o juiz desfaz o excesso em 24 horas (§1º); o executado tem 5 dias, da intimação, para provar impenhorabilidade ou excesso (§3º); sem impugnação, converte-se em penhora e o valor vai para conta judicial em 24 horas (§5º). Pesquisa: Sisbajud (ativos financeiros), Renajud (veículos), Infojud (declarações) e CNIB (indisponibilidade de imóveis), mais o que o tribunal disponibilizar.
- **Informações de terceiros e deveres do devedor:** o juiz pode mandar terceiros indicados pelo credor fornecer documentos e dados (772, III). Não indicar bens quando intimado é ato atentatório à dignidade da justiça, com multa de até 20% do débito atualizado (774, V e par. único).
- **Fraude à execução:** depende de registro da penhora ou prova de má-fé do adquirente (Súmula 375 do STJ); a averbação do 828 é o caminho.
- **Execução parada (921, Lei 14.195/2021):** sem executado ou bens, suspensão por 1 ano com a prescrição suspensa (III e §1º), depois arquivamento (§2º), desarquivável se surgirem bens (§3º). A prescrição intercorrente corre da ciência da primeira tentativa frustrada de localizar devedor ou bens, suspensa uma só vez pelo ano do §1º (§4º); citação, intimação ou constrição efetiva a interrompem (§4º-A); o juiz a reconhece de ofício depois de ouvir as partes em 15 dias (§5º; 924, V). O prazo é o da pretensão do título (Súmula 150 do STF).

#### Impenhorabilidades (CPC 833)

- Incisos: bens inalienáveis (I); móveis e utilidades domésticas comuns (II); vestuário (III); vencimentos, proventos, pensões e ganhos de autônomo (IV); ferramentas e livros da profissão (V); seguro de vida (VI); materiais de obra (VII); pequena propriedade rural (VIII); recursos públicos de educação, saúde e assistência (IX); poupança até 40 salários mínimos (X); fundo partidário (XI); recursos de incorporação (XII).
- **Exceções:** a impenhorabilidade não se opõe à dívida do próprio bem (§1º); IV e X não valem para pensão alimentícia e para o que passar de 50 salários mínimos mensais (§2º).
- **Mitigação do salário:** Tema 1230 do STJ (acórdão publicado): para dívida não alimentar, a regra do IV pode ser mitigada excepcionalmente se inviáveis outros meios e comprovado, pelo devedor, que a penhora não compromete a subsistência digna. O ônus da prova é dele. Poupança de até 40 salários: não é matéria de ordem pública e o executado a alega no primeiro momento ou nos embargos, sob pena de preclusão (Tema 1235). O Tema 1285 (40 salários em papel-moeda, conta ou fundo) está em julgamento. Pequena propriedade rural: o executado prova a exploração familiar (Tema 1234).
- **Bem de família (Lei 8.009, lida):** o único imóvel residencial da família, com os móveis quitados que o guarnecem (arts. 1º e 5º; se há vários, o de menor valor, salvo registro de outro). Exceções do art. 3º: financiamento do próprio imóvel (II), pensão alimentícia (III), IPTU e taxas do imóvel (IV), hipoteca dada pelo casal (V, lida com o Tema 1261: só se a dívida beneficiou a família), produto de crime (VI) e fiança locatícia (VII; Súmula 549; Temas 1091 do STJ e 1127 do STF). Vale para solteiro, separado e viúvo (Súmula 364) e para o imóvel alugado cuja renda sustenta a família (486). Quem, insolvente, compra imóvel mais caro para morar perde a proteção (art. 4º). Vaga de garagem com matrícula própria: Súmula 449, com o Tema 1330 afetado.
- **Sede do estabelecimento:** penhorável (Súmula 451; Tema 287).

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "penhora de salário art. 833 IV", "impenhorabilidade de poupança 40 salários" e "prescrição intercorrente execução" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 27, 214, 233, 300, 364, 375, 417, 449, 451, 486 e 549 e Temas 287, 576, 1091, 1230, 1234, 1235 e 1261 do STJ, Súmula 150 e Tema 1127 do STF, podem entrar pelo número.

#### Não fazer

- Não executar contrato particular sem duas testemunhas nem contrato de abertura de crédito como se fosse título.
- Não pedir bloqueio sem demonstrativo atualizado e sem CPF/CNPJ.
- Não somar nem atualizar o débito de cabeça.
- Não esquecer de cancelar as averbações excedentes (828).
- Não pedir penhora de verba salarial sem enfrentar o IV e o Tema 1230.

*Referências conferidas e revisadas em 20/10/2026 (Planalto via proxy: CPC 772, 774, 782 a 787, 794, 798, 803, 827 a 830, 833, 835, 854, 921 e 924, Lei 8.009/1990, Lei 10.931, art. 28; Banco Nacional de Precedentes do CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Plano de saúde (`plano-de-saude`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio das ações de plano de saúde. Dado de saúde é sensível: iniciais, laudo e CID tarjados, nada no perfil do escritório.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: a data da cirurgia, da internação ou do risco à saúde é o "prazo" da liminar: conte quantos dias úteis faltam e abra com ALERTA DE PRAZO se forem 5 ou menos. Na ação de reajuste, mostre a conta da prescrição da devolução (Tema 610), mensalidade a mensalidade, com `[conferir]`.

#### Antes do roteiro

- **Tipo de contrato:** individual ou familiar, coletivo empresarial, coletivo por adesão ou autogestão; data da contratação; operadora. CDC se aplica, salvo autogestão (Súmula 608 do STJ; a 469 está cancelada). Lei 9.656, art. 35-G: CDC subsidiário.
- **Qual é o conflito:** (a) negativa ou demora de cobertura; (b) reajuste; (c) cancelamento ou exclusão. Cada um tem estrutura própria abaixo.
- **Prova mínima:** negativa por escrito e protocolo; relatório do médico assistente com a indicação, o CID (tarjado) e a urgência; contrato e carteirinha; boletos pagos; histórico de reajustes. Registro do produto na Anvisa, se medicamento ou dispositivo.
- **Prioridade de tramitação:** beneficiário com 60 anos ou mais, ou com doença grave, tem prioridade (CPC 1.048, I). Pergunte a idade e requeira na inicial, com o documento e, se for doença grave, o laudo tarjado.
- **Urgência:** há data de cirurgia, internação ou risco à saúde? Isso decide a liminar (veja a skill `tutela-de-urgencia`). Carência: urgência e emergência, no máximo 24 horas (Lei 9.656, art. 12, V, c; Súmula 597 do STJ); parto 300 dias, demais casos 180 (art. 12, V, a e b). Emergência e urgência definidas no art. 35-C.

#### Negativa de cobertura e rol da ANS

- **Lei 14.454/2022:** o rol da ANS é referência básica (Lei 9.656, art. 10, §§ 4º e 12). O §13 manda autorizar tratamento prescrito por médico ou dentista assistente, mesmo fora do rol, se há (I) comprovação de eficácia com evidências científicas e plano terapêutico, ou (II) recomendação da Conitec ou de ao menos um órgão de avaliação de tecnologias de renome internacional, aprovado também para seus nacionais. O STJ aplica a lei de imediato aos contratos antigos (Tema 1316, acórdão publicado em 2026).
- **ADI 7265 (STF, concluída em 18/09/2025, 7 a 4):** §§12 e 13 constitucionais, com interpretação conforme. Fora do rol, requisitos cumulativos do item 2 da tese, reproduzidos pelo STJ no Tema 1316: (i) prescrição por médico ou dentista assistente habilitado; (ii) sem negativa expressa da ANS nem pedido de incorporação pendente; (iii) sem alternativa terapêutica adequada no rol; (iv) eficácia e segurança por evidência científica de alto nível ou avaliação de tecnologia em saúde; (v) registro na Anvisa. Item 3: prova do prévio requerimento à operadora com negativa, mora irrazoável ou omissão (a); análise do ato de não incorporação sem entrar no mérito técnico da ANS (b); consulta ao NATJUS ou a quem tenha expertise, sem decidir só pelo laudo da parte (c); se deferir, ofício à ANS (d). O inteiro teor do acórdão do STF não abriu `[conferir a redação integral da tese]`.
- **Como redigir:** monte a inicial como se o juiz fosse aplicar cada item da tese: um tópico por critério, com o documento que o prova. Peça o NATJUS, se couber, e inclua o relatório com evidências. Se o item está no rol, a causa é de cobertura contratual simples e o tópico some.
- **Outros temas do STJ:** 990 (sem medicamento sem registro na Anvisa); 1067 (fertilização in vitro só com previsão contratual); 1069 (plástica reparadora pós-bariátrica é obrigatória; junta médica paga pela operadora se houver dúvida razoável sobre o caráter estético); 1032 (coparticipação de até 50% em internação psiquiátrica acima de 30 dias/ano, se informada). Afetados, sem tese: 1314 (carência de 24 h e limite de internação, Súmulas 597 e 302), 1375 (reembolso fora da rede), 1463 (musicoterapia no TEA), 1467 (se a demora injustificada equivale a recusa para o Tema 1365).
- **Dano moral:** Tema 1365 do STJ: a simples recusa indevida não gera dano moral presumido; é preciso fato que ultrapasse o mero aborrecimento (urgência, agravamento, internação, sofrimento provado). A inicial narra esses fatos; não escreva "dano in re ipsa".
- **Prazos de atendimento (RN 566/2022 da ANS, contados do pedido):** consulta básica 7 dias úteis, demais especialidades 14, alta complexidade e internação eletiva 21, urgência e emergência imediato; os demais estão na tabela da ANS. A RN 623/2024 (vigente desde 01/07/2025) regula o prazo de resposta da operadora ao pedido, não os de atendimento.

#### Reajuste

- Faixa etária em plano individual ou familiar: válido se previsto em contrato, dentro das normas da ANS e sem percentuais desarrazoados que onerem o consumidor sem base atuarial ou discriminem o idoso (Tema 952). Lei 9.656, art. 15, par. único: vedada a variação por faixa etária para quem tem mais de 60 anos e mais de 10 anos de plano.
- Planos coletivos: o Tema 1016 estendeu os parâmetros do 952, ressalvou a inaplicabilidade do CDC às autogestões e fixou que a "variação acumulada" (Res. ANS 63/2003, art. 3º, II) se calcula pela fórmula matemática, não pela soma ou média dos percentuais (acórdão publicado, RE pendente).
- Reajuste anual por sinistralidade em coletivo: peça a demonstração atuarial e o cálculo de cada exercício. Prescrição da pretensão de devolver o reajuste nulo: Tema 610 (3 anos pelo CC 206, §3º, IV, ou 20 anos do CC/1916 pela regra de transição do CC 2.028). Teto anual do individual: `[conferir índice da ANS do ano]`. Em dobro (CDC 42, par. único): o Tema 929 foi julgado pela Corte Especial em setembro de 2026, acórdão ainda não publicado; a linha é dobro sem prova de má-fé, bastando cobrança contrária à boa-fé objetiva `[conferir a tese publicada e se houve modulação]`.

#### Cancelamento e rescisão

- Plano individual: só por fraude ou inadimplência acima de 60 dias, consecutivos ou não, nos últimos 12 meses, com notificação até o 50º dia; nunca com o titular internado (art. 13, par. único, II e III).
- Coletivo empresarial: Tema 1047: resilição unilateral válida em contrato com menos de 30 vidas, com motivação idônea. Mesmo após a rescisão válida, a operadora mantém o tratamento de quem está internado ou em tratamento garantidor da vida até a alta, se o titular pagar (Tema 1082).
- Demitido sem justa causa e aposentado: art. 30 (manutenção por 1/3 do tempo de plano, mínimo 6 e máximo 24 meses) e art. 31 (10 anos de contribuição; menos que isso, 1 ano por ano) da Lei 9.656, pagando integralmente; Tema 1034 (soma dos períodos; plano único entre ativos e inativos; sem direito ao mesmo plano da época).

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "plano de saúde tratamento fora do rol", "reajuste de plano de saúde" e "rescisão unilateral de plano de saúde" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 302, 597 e 608 e os Temas 610, 952, 990, 1032, 1034, 1047, 1067, 1069, 1082 e 1365 do STJ podem entrar pelo número.

#### Não fazer

- Não afirmar "o rol é taxativo" nem "o rol é exemplificativo" sem a ressalva da ADI 7265.
- Não ajuizar sem o pedido prévio à operadora comprovado, quando o tratamento está fora do rol.
- Não presumir dano moral; não citar Súmula 469.
- Não calcular reajuste nem diferença de mensalidade: liste o que entra (contrato, índices, boletos, período).
- Não prometer liminar ao cliente.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (Planalto via proxy: Lei 9.656, arts. 10, 12, 13, 15, 30, 31, 35-C e 35-G, CPC 1.048; Banco Nacional de Precedentes do CNJ, inclusive a transcrição da tese da ADI 7265 no Tema 1316; páginas da ANS sobre a RN 566/2022 e a RN 623/2024; notícias do STF e do STJ sobre a ADI 7265 e o Tema 929). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Transporte aéreo (`transporte-aereo`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio das causas contra companhia aérea, de passageiro e da companhia.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: (a) a prescrição: mostre a conta do evento até hoje pelo menor prazo possível (2 anos: CBA 317, I, do dano, da chegada ou da data prevista de chegada; Montreal, art. 35, da chegada, da data prevista ou da interrupção) e pelo CDC 27 (5 anos, do conhecimento do dano), e trate o menor como o seguro; qual prevalece é jurisprudência `[buscar]`; abra com ALERTA DE PRESCRIÇÃO se o evento tiver mais de 2 anos. (b) A pergunta "o que dá pra pedir?" é consulta: responda com a análise (o que pedir, a prova que falta, os riscos, inclusive o Tema 1417) e não abra o plano de cinco blocos; o plano vem se o advogado mandar redigir.

#### Antes do roteiro

- **Qual é o evento:** atraso, cancelamento, interrupção, preterição (overbooking), extravio temporário ou definitivo, dano ou violação de bagagem. Voo nacional ou internacional (muda a norma e o dano material).
- **Linha do tempo com horários:** horário contratado, aviso recebido e quando, horário real de partida e de chegada, tempo de espera, o que a companhia ofereceu (reacomodação, reembolso, outra modalidade) e o que de fato prestou (alimentação, hospedagem, transporte).
- **A causa que a companhia alegou** (manutenção, meteorologia, controle de tráfego, malha): define se entra o tema de caso fortuito (abaixo).
- **Prejuízo concreto:** perda de compromisso, diárias, remarcações, medicamento, evento, gastos com recibo. Sem isso o dano moral é frágil.
- **Prova:** bilhete, cartão de embarque, e-mails e prints datados, PIR/RIB de bagagem, notas fiscais, reclamação na companhia, ANAC ou consumidor.gov.br.
- **Foro e rito:** domicílio do consumidor (CDC 101, I). Até 40 salários mínimos o JEC é a via usual (Lei 9.099, art. 3º, I); pergunte o valor.

#### Normas

- **CDC 14:** responsabilidade objetiva; só se afasta por inexistência de defeito ou culpa exclusiva do consumidor ou de terceiro. **CBA, art. 256, II:** o transportador responde pelo atraso; não responde se provar que, por caso fortuito ou força maior, foi impossível adotar medidas necessárias, suficientes e adequadas para evitar o dano (§1º, II, Lei 14.034/2020). O **§3º** diz o que é fortuito ou força maior para esse fim, desde que superveniente, imprevisível e inevitável: restrição de pouso ou decolagem por meteorologia imposta pelo controle do espaço aéreo (I), indisponibilidade da infraestrutura aeroportuária (II), determinação da autoridade de aviação civil ou de outro órgão público (III), pandemia e atos de governo dela decorrentes (IV). Manutenção, malha, tripulação e overbooking não estão aí: é fortuito interno. **CBA, art. 251-A:** a indenização por dano extrapatrimonial por falha na execução do contrato exige demonstração do prejuízo e da sua extensão pelo passageiro.
- **Resolução ANAC 400/2016 (texto compilado lido na ANAC, para fato até 25/10/2026):** alteração programada avisada com 72 horas (art. 12); em atraso acima de 4 horas, cancelamento, interrupção, preterição e perda de conexão por culpa da companhia, reacomodação, reembolso ou outra modalidade, à escolha do passageiro (21); preterição: compensação imediata de 250 DES no doméstico e 500 no internacional, além do art. 21 (24); assistência material gratuita pelo tempo de espera, mesmo a bordo com portas abertas: comunicação após 1 hora, alimentação após 2, hospedagem com traslado após 4 se houver pernoite (26 e 27); reembolso em 7 dias (29); bagagem extraviada: devolução em 7 dias no doméstico e 21 no internacional, indenização em 7 dias se não achada, protesto por violação em 7 dias (32); despesas de quem está fora do domicílio, ressarcidas em 7 dias (33); limite doméstico de 1.131 DES salvo declaração de valor (17).
- **Res. ANAC 813/2026 (DOU de 25/09/2026, texto lido na ANAC, em vigor em 26/10/2026):** reescreve o art. 20 (informar de forma clara, inclusive por canal digital, a situação, a previsão de partida, as alternativas e como obter a assistência; informação digital com data e hora da última atualização); cria o 25-A (aviso prévio de que o serviço está sujeito a fatores operacionais e de segurança), o 25-B (responsabilidade civil segue a lei e os tratados, afastada no fortuito e na força maior conforme o CBA) e o par. único do 26 (prestar assistência não implica reconhecer culpa); o 27 perde o inciso I (comunicação após 1 hora) e mantém alimentação após 2 horas e hospedagem com traslado após 4, com regra para residente local e para pessoa com deficiência; 27-A (regime excepcional por decisão da ANAC em crise generalizada); 27-B (reembolso de despesas documentadas em 7 dias, só quando a assistência for inviável por limitação do aeroporto ou falta de fornecedor). Fato anterior a 26/10/2026 segue a redação antiga.
- **Montreal e Varsóvia:** STF, Tema 210: as convenções que limitam a responsabilidade das transportadoras prevalecem sobre o CDC (art. 178 da CF), mas não se aplicam aos danos extrapatrimoniais. Tema 1240 reafirma: as convenções não se aplicam ao dano extrapatrimonial do transporte aéreo internacional. Logo, dano moral em voo internacional segue o CDC e o CC, sem tarifação; dano material fica sujeito aos limites das convenções (Montreal, art. 22: tetos em DES por atraso e por bagagem, revistos periodicamente `[conferir limite vigente]`; art. 19: o transportador se exime se provar que tomou todas as medidas razoáveis). Tema 1366: para carga, os limites valem para dano material.
- **Caso fortuito e força maior, Tema 1417 do STF (repercussão geral, sem julgamento de mérito):** discute se o CBA e as normas internacionais prevalecem sobre o CDC quando o cancelamento, a alteração ou o atraso decorre de fortuito ou força maior. Suspensão nacional em 26/11/2025; em 10/03/2026, nos embargos, o relator a restringiu às hipóteses do CBA 256, §3º (ofício circular do TRF3 de 12/03/2026): fortuito interno, falha operacional e culpa do consumidor seguem correndo `[conferir se já houve julgamento]`. Se a companhia alega causa do §3º, avise que o processo pode ser sobrestado e que ela tem de provar o evento; se alega manutenção ou malha, não.

#### Estrutura

1. Fatos em ordem, com horários e o que a companhia fez e deixou de fazer.
2. Direito: responsabilidade objetiva (CDC 14; CBA 256), falha na informação e na assistência material (Res. 400), nulidade de cláusulas de limitação em face do dano extrapatrimonial (Tema 210/1240, se internacional).
3. Pedidos: dano material com recibo (restituição da passagem, gastos, diárias); dano moral com a narrativa do prejuízo (CBA 251-A); reembolso ou reacomodação; bagagem: valor do conteúdo com prova, prazos do art. 32 e despesas do art. 33 da Res. 400; preterição: compensação do art. 24 (250 ou 500 DES). Valor do dano moral: sugira faixa só como pedido do advogado, sem cálculo.
4. **Defesa da companhia:** inexistência de defeito; fortuito ou força maior do CBA 256, §1º, II, e §3º (e o Tema 1417); assistência prestada, que não é confissão (Res. 400, art. 26, par. único, desde 26/10/2026); ausência de prova do dano extrapatrimonial (251-A); limitação do dano material no internacional.

#### Teses e pedidos que costumam caber

- **Falha na assistência material, mesmo que a causa do atraso seja alheia à companhia:** a companhia deve alimentação, hospedagem e comunicação conforme o tempo de espera, e o fortuito (tráfego aéreo, tempo) não a dispensa de prestá-las. Ao descumprir a assistência, a companhia responde por falha própria, que contorna o fortuito e o Tema 1417. Enquadre o pedido assim quando a companhia alegar tráfego aéreo (Res. 400, arts. 26 e 27; desde 26/10/2026 o reembolso do 27-B só substitui a assistência quando ela for inviável, e a assistência prestada não vale como confissão, 26, par. único).
- **Atraso ou cancelamento não gera dano moral presumido:** é o entendimento do STJ nas Turmas, exigindo prova de que o transtorno passou do mero aborrecimento; a 3ª Turma diz isso há anos e a 4ª reafirmou em decisão noticiada em janeiro de 2026 (notícias do STJ e Conjur). Não há tema repetitivo: traga o julgado pelo conector. Atraso longo, perda de compromisso, falta de assistência e desamparo de idoso, criança ou doente costumam ser os fatos que sustentam o dano.
- Preterição e extravio definitivo de bagagem: o STJ tem decisões que reconhecem o dano com menos exigência `[buscar; não afirme presunção]`.
- **Prescrição:** CDC 27, 5 anos do conhecimento do dano; CBA 317, I, 2 anos do dano, da chegada ou da data em que a aeronave devia chegar; Montreal, art. 35, 2 anos da chegada, da data prevista ou da interrupção, contados pela lei do foro. Qual prevalece, no doméstico e no internacional, é jurisprudência `[buscar]`; quando puder, ajuíze dentro de 2 anos.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "atraso de voo dano moral", "extravio de bagagem" e "Convenção de Montreal dano extrapatrimonial" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Temas 210, 1240 e 1366 do STF podem entrar pelo número.

#### Não fazer

- Não afirmar dano moral presumido por atraso ou cancelamento.
- Não aplicar tarifação de Montreal ao dano moral.
- Não citar a Res. ANAC 400 sem a Res. 813/2026 e a data de vigência.
- Não pedir sobrestamento pelo Tema 1417, nem temê-lo, fora das hipóteses do CBA 256, §3º.
- Não tratar a assistência prestada como confissão de culpa (Res. 400, art. 26, par. único, desde 26/10/2026).
- Não pedir dano material sem comprovante.
- Não somar valores nem calcular o limite em DES: liste o que entra.

*Referências conferidas e revisadas em 20/10/2026 (Planalto via proxy: CDC 14, 27 e 101, CBA 251-A, 256, 257 e 317, Decreto 5.910, arts. 19, 22 e 35; textos compilado da Res. 400 e integral da Res. 813 no repositório da ANAC; Banco Nacional de Precedentes do CNJ: Temas 210, 1240, 1366 e 1417 do STF; ofício circular 18/2026 do TRF3 sobre o Tema 1417; notícias do STJ e do Conjur sobre o dano moral). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Tutela de urgência (`tutela-de-urgencia`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da tutela de urgência, no pedido e na resposta.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: mostre a conta dos prazos do rito escolhido: aditamento em 15 dias (303, § 1º, I) a partir da intimação da concessão; pedido principal em 30 dias (308) a partir da efetivação da cautelar; para o réu, o agravo em 15 dias úteis contra a decisão que concedeu, que evita a estabilização. Se faltam 5 dias úteis ou menos para qualquer deles, ALERTA DE PRAZO. Das perguntas abaixo, leve ao plano as cinco que mais pesam (necessidade da antecedente, perigo com data, estabilização, documentos, caução).

#### Antes do roteiro

Pergunte e registre antes de redigir:
- **A antecedente é necessária?** Se a ficha já permite uma inicial completa, a tutela incidental pedida na própria inicial (300) costuma bastar, sem o aditamento de 15 dias e sem o risco da estabilização. Use a antecedente (303) só quando a urgência impede reunir a inicial completa agora. Se o advogado já pediu a antecedente, pergunte o porquê antes de montá-la.
- **O que o cliente quer no fim:** se o pedido final importa (declarar um débito inexigível, indenização), a estabilização pode encerrar o processo sem decidir isso (ver Teses). Pergunte.
- **O perigo, com data:** o que acontece e quando (consulta marcada, vencimento, leilão, corte do serviço). Urgência sem data e sem fato é o motivo mais comum de indeferimento.
- **A probabilidade do direito:** quais documentos já provam o essencial sem dilação.
- **Natureza:** antecipada (satisfativa: entrega o bem da vida) ou cautelar (assegura o resultado útil: arresto, sequestro, arrolamento, protesto contra alienação, outra medida). CPC 294 a 301.
- **Momento:** incidental (já há processo ou será proposto junto com a inicial; sem custas pelo pedido, CPC 295) ou antecedente (urgência já na inicial, CPC 303 e 305).
- **Reversibilidade:** a antecipada não se concede com perigo de irreversibilidade dos efeitos (300, §3º). Se o pedido é irreversível, diga ao advogado e prepare a tese de que o dano da negativa é maior.
- **Caução:** o juiz pode exigir caução real ou fidejussória para ressarcir danos, dispensável para quem não pode oferecê-la (300, §1º). Pergunte se o cliente tem como prestar.
- **Quer liminar sem ouvir a parte contrária ou com justificação prévia** (300, §2º).

#### Estrutura

**Incidental (pedido na inicial ou em petição no curso):** seção "Da tutela de urgência" com (a) fatos do perigo, (b) probabilidade do direito com os documentos, (c) reversibilidade e caução, (d) pedido preciso (o que o réu deve fazer, em quanto tempo, multa diária se for o caso: 537, fixável de ofício, com prazo razoável para cumprir, devida desde o descumprimento (§4º) e revisável se excessiva ou insuficiente (§1º)). Competência: o juízo da causa (299).

**Antecedente satisfativo (CPC 303):** inicial que se limita ao pedido de tutela, indicando o pedido de tutela final, a lide, o direito e o perigo. A declaração de que se pretende o benefício do caput, que permite a estabilização (303, §5º), é decisão do advogado depois de avisado do custo (ver Teses): não a ponha por padrão. Valor da causa considera o pedido final (303, §4º), então as custas iniciais seguem o valor da causa final. Concedida a tutela, o autor adita em 15 dias, ou prazo maior fixado, com argumentos, documentos e confirmação do pedido final, sem novas custas sobre o aditamento (§1º, I, e §3º): isso não torna a antecedente barata; sem aditamento, o processo é extinto sem mérito (§2º). O réu é citado para audiência de conciliação ou mediação (334) e o prazo de resposta corre depois (§1º, II e III). Se o juiz entender que não há elementos, manda emendar em 5 dias, sob pena de indeferimento (§6º).

**Antecedente cautelar (CPC 305 a 310):** a inicial indica a lide, seu fundamento e a exposição sumária do direito e do perigo. Se o juiz entender que o pedido é satisfativo, adota o 303 (305, par. único). Réu: 5 dias para contestar e indicar provas (306). Revelia: fatos presumidos, decisão em 5 dias; contestado: procedimento comum (307). O pedido principal vem em **30 dias**, nos mesmos autos, sem novas custas (308), ou já junto com o pedido cautelar (§1º). A eficácia cessa se o principal não for deduzido no prazo, se a medida não for efetivada em 30 dias ou se o pedido principal for julgado improcedente ou extinto sem mérito (309); cessada, não se renova salvo sob novo fundamento (par. único). Indeferimento da tutela não impede o pedido principal, salvo se reconhecida decadência ou prescrição (310).

#### Teses e pedidos que costumam caber

- **Custo da estabilização para o autor:** se o réu não recorre, o processo é extinto e a decisão provisória vira o resultado prático, mas o pedido final (por exemplo, declarar a fatura inexigível) fica sem sentença, e a estabilização não faz coisa julgada: o réu tem 2 anos para propor ação de revisão (304, §§ 2º, 5º e 6º). Quando o pedido final é o que interessa, prefira a tutela incidental na inicial completa, ou aditar e prosseguir sem declarar o benefício do §5º.
- **Probabilidade do direito em serviço essencial (energia, água):** CDC 22 (serviços essenciais devem ser contínuos) e a regulação setorial (ANEEL, no caso de energia) `[conferir norma e jurisprudência sobre corte por apuração unilateral de fraude e débito de recuperação de consumo]`. Narre a apuração unilateral sem contraditório, se houve, e o perigo concreto.
- **Estabilização (304):** a tutela antecipada concedida em caráter antecedente se torna estável se não houver recurso, e o processo é extinto. Qualquer parte pode, em até **2 anos** da ciência da decisão que extinguiu o processo, propor ação para rever, reformar ou invalidar (§§2º e 5º); a estabilização não faz coisa julgada (§6º). Para o réu, a defesa é recorrer no prazo. O STJ diverge sobre se a contestação, sem agravo, impede a estabilização (1ª Turma: só o agravo; 3ª e 4ª: a contestação basta). A Corte Especial começou a julgar embargos de divergência em 05/08/2026, o relator votou por não conhecer e houve pedido de vista `[conferir andamento no STJ]`. Na dúvida, o réu interpõe o agravo **e** contesta.
- **Responsabilidade do requerente (302):** indenização do prejuízo da efetivação da tutela se a sentença for desfavorável, se não providenciar a citação em 5 dias na liminar antecedente, se a eficácia cessar ou se acolhida prescrição ou decadência. Avise o cliente.
- **Tutela da evidência (311):** sem prova de perigo, quando há abuso do direito de defesa, prova documental com tese firmada em repetitivo ou súmula vinculante, depósito (reipersecutória) ou prova documental suficiente sem contraprova razoável. Os incisos II e III admitem decisão liminar.
- **Recurso:** agravo de instrumento contra decisão sobre tutela provisória (1.015, I); veja a skill `agravo-de-instrumento`.
- **Contra o Poder Público:** a Lei 9.494, art. 1º, estende à tutela antecipada as vedações da Lei 8.437, art. 1º: sem liminar onde o mandado de segurança não a admitiria, sem cautelar em 1º grau contra ato de autoridade com foro em tribunal (§1º) e sem liminar que esgote o objeto da ação (§3º); vantagem a servidor só se paga após o trânsito (Lei 9.494, art. 2º-B). O que sobrou das vedações de liminar da lei do mandado de segurança: `[conferir Lei 12.016, art. 7º, §2º, e a decisão do STF sobre ele]`.
- **No plano de saúde, passagem aérea e consumo:** a liminar costuma ser o pedido central; veja as skills da área.
- **Se o escritório defende o réu:** impugne a probabilidade com a documentação, mostre a ausência de data de perigo ou a irreversibilidade, e peça caução.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "tutela de urgência requisitos art. 300", "estabilização da tutela antecipada art. 304" e "tutela cautelar antecedente prazo de 30 dias" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

#### Não fazer

- Não pedir tutela sem dizer o que, de concreto, acontece se esperar e quando.
- Não usar o 303 sem avisar que o aditamento em 15 dias é indispensável e que as custas iniciais seguem o valor da causa final.
- Não declarar o benefício do §5º (estabilização) por padrão, nem sem avisar que o pedido final pode ficar sem sentença.
- Não esquecer o prazo de 30 dias do pedido principal na cautelar antecedente, nem o valor da causa pelo pedido final na antecipada antecedente (303, §4º).
- Não misturar o regime da tutela antecedente com o do pedido incidental.
- Não dizer ao cliente que a tutela estabilizada é coisa julgada.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (Planalto via proxy: CPC 295, 300 a 311 e 537, Lei 9.494, arts. 1º e 2º-B, Lei 8.437, art. 1º, CDC 22; Banco Nacional de Precedentes do CNJ; Migalhas de 05/08/2026 sobre a sessão da Corte Especial). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

---

## Bancário

### Consignado não contratado e cartão RMC/RCC (`consignado-nao-contratado`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do consignado. A inicial de consumo genérica já existe no kit cível: aqui só o que muda no consignado.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: a prescrição da repetição corre desconto a desconto. Para o desconto mais antigo, mostre a conta pelos candidatos CDC 27 (5 anos), CC 206, § 3º, IV (3 anos) e CC 205 (10 anos). Se o primeiro desconto tem mais de 3 anos, abra com ALERTA DE PRESCRIÇÃO. Das perguntas abaixo, leve ao plano as cinco que mais mudam a peça (tipo de caso, quem recebeu o dinheiro, assinatura, data da contratação, prova que o cliente tem).

#### Antes do roteiro

- **Três casos diferentes, três peças:** (a) empréstimo consignado que o cliente nunca contratou; (b) cartão com reserva de margem (RMC) ou cartão consignado (RCC) que o cliente diz ter entendido como empréstimo; (c) empréstimo contratado mas com valor, prazo ou parcelas diferentes do combinado. Pergunte qual é.
- **O dinheiro caiu na conta do cliente?** Se sim, o banco vai pedir devolução ou compensação do valor creditado: a ficha precisa dizer se foi sacado, devolvido ou ficou na conta, e quem recebeu.
- **Documentos:** extrato de consignações do INSS (histórico de empréstimos e de crédito do benefício, baixado no Meu INSS ou na agência), contracheque ou ficha financeira se folha, extrato bancário do mês do crédito, protocolos de reclamação (banco, ouvidoria, Procon, consumidor.gov.br), BO se houve fraude. O que o cliente só descreveu entra como `[JUNTAR]`. Peça também o histórico de bloqueio e desbloqueio do benefício (Meu INSS) e, na exibição, os registros de biometria e de autenticação do desbloqueio: é a prova que a Lei 15.327 cria.
- **Perfil do cliente:** idoso, analfabeto, doente, com margem comprometida por contrato anterior. Isso pesa na vulnerabilidade (CDC 54-C) e na forma do contrato.
- **Data da contratação e do primeiro desconto**, porque a regra do INSS mudou (ver Teses).
- **Prescrição:** ponto de jurisprudência (CDC 27 ou CC 206, § 3º, IV, ou CC 205). Mostre a conta pelos três candidatos e marque `[conferir: prazo da repetição em desconto indevido de benefício]`.

#### Estrutura

1. Endereçamento (foro do domicílio do consumidor, CDC 101, I), qualificação, prioridade de tramitação se couber (CPC 1.048, I: 60 anos ou mais, ou doença grave).
2. Fatos em linha do tempo: quando percebeu o desconto, valor, banco, número do contrato, o que fez, resposta do banco.
3. Direito: relação de consumo (Súmula 297); responsabilidade objetiva do banco por fraude de terceiro, fortuito interno (CDC 14; Súmula 479; Tema 466); inversão do ônus (CDC 6º, VIII).
4. **Ônus da assinatura:** impugnada a autenticidade da assinatura do contrato juntado pelo banco, a prova é dele (Tema 1061; CPC 6º, 369, 429, II). Peça a exibição do contrato original e das provas de formalização (biometria, selfie, IP, termo) e, se o banco juntar documento assinado, a perícia grafotécnica, com o ônus do custo sobre o banco. Contrato digital: pedir os registros de formalização.
5. Pedidos: tutela de urgência para suspender os descontos (CPC 300); declaração de inexistência do contrato; restituição; dano moral; exibição de documentos; ofício ao INSS se necessário; honorários.

#### Teses e pedidos que costumam caber

- **Lei 15.327/2026 (datada de 06/01/2026, publicada no DOU de 07/01/2026; art. 14: vigência na data da publicação, conforme o texto da Câmara):** a Lei 8.213/1991, art. 115, passou a bloquear todos os benefícios para consignado. O desbloqueio exige autorização prévia, pessoal e específica, com biometria e assinatura eletrônica qualificada ou autenticação de múltiplos fatores (§ 9º); novo bloqueio após cada contratação (§ 12); vedada a contratação ou o desbloqueio por procuração ou central telefônica (§ 13). O art. 3º da Lei manda entidades associativas, instituições financeiras e sociedades de arrendamento mercantil restituir o desconto indevido, integral e atualizado, em até 30 dias da notificação da irregularidade ou da decisão administrativa definitiva (texto da Câmara: alcança o consignado, não só a mensalidade associativa). **Vigência efetiva das exigências:** a lei vale desde a publicação, mas o desbloqueio e o canal de contestação dependem de ato do Executivo (art. 12 da Lei; § 10 do art. 115). A regulamentação é a IN PRES/INSS 138/2022, alterada em 2026 (IN PRES/INSS 213/2026, DOU de 19/08/2026, segundo fonte secundária), e a biometria passou a ser exigida no Meu INSS em 19/05/2026 segundo a Agência Brasil: `[conferir no DOU o texto vigente da IN 138/2022 e a data em que o bloqueio biométrico entrou em operação]`. Pergunte a data da contratação. Se for anterior, não faça da Lei 15.327 o eixo da peça (o eixo é o Tema 1061 e o CDC 14) e use-a só como reforço. Base do consignado: Lei 10.820/2003 (art. 6º para o INSS) e Lei 8.213, art. 115, VI.
- **Dobra (CDC 42, parágrafo único):** a Corte Especial do STJ firmou em 30/03/2021 que cabe a devolução em dobro quando a cobrança contraria a boa-fé objetiva, sem exigir má-fé, com modulação para cobranças a partir dessa data. O Tema 929 (repetitivo) consta como "mérito julgado" na página do STJ, com a tese ainda não publicada em 20/10/2026. Notícias de blogs dizem que o julgamento de setembro de 2026 afastou a modulação: não confirmei. Escreva `[INSERIR TEMA: Tema 929, dobra do CDC 42, conferir tese publicada e modulação]` e peça a dobra pedindo o regime mais favorável.
- **Cartão RMC/RCC:** o Tema 1414 (Segunda Seção, afetado) discute decadência ou nulidade, parâmetros de validade e abusividade, a consequência (restituição, conversão em empréstimo consignado ou revisão) e o dano moral. Há suspensão nacional dos processos pendentes, referendada em 08/04/2026, que exclui os cumprimentos de sentença. O Tema 1328, de dano moral nesse caso, consta cancelado. Antes de ajuizar, avise o advogado do risco de suspensão e peça pedido alternativo: nulidade, conversão em consignado comum com recálculo, e restituição.
- **Dano moral por desconto em benefício:** o Tema 1435 (afetado, Segunda Seção) decide se é presumido. Há suspensão dos recursos especiais sobre o tema. Descreva o prejuízo concreto (benefício de um salário mínimo, atraso de contas, tempo perdido). `[conferir situação dos Temas 1414 e 1435]`.
- **Contratante analfabeto:** validade do contrato assinado a rogo com duas testemunhas (CC 595) é o Tema 1116 (afetado, com suspensão; julgamento iniciado na Segunda Seção em 10/06/2026 e suspenso por pedido de vista, segundo fonte secundária: `[conferir andamento]`). Pergunte se ele assina o próprio nome: analfabeto funcional que assina não é o caso do Tema 1116, e a tese vira a da assinatura impugnada (Tema 1061).
- **Desconto em conta (não consignado):** é lícito se autorizado (Tema 1085); não confunda com o consignado em folha.
- **Cartão enviado sem pedido:** prática abusiva e ato ilícito (Súmula 532).

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "consignado não contratado", "cartão de crédito com reserva de margem consignável" e "repetição em dobro CDC 42" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 297, 479 e 532 e os Temas 466 e 1061 podem entrar pelo número.

#### Não fazer

- Não afirmar que o dobro é automático nem citar a modulação de 30/03/2021 como definitiva sem ver a tese do Tema 929.
- Não dar o dano moral por presumido sem o conector trazer julgado vigente.
- Não pedir só a devolução em dobro sem tratar do valor que caiu na conta do cliente.
- Não calcular restituição: liste parcelas, datas e contrato e deixe `[VALOR: conforme extrato do INSS]`.
- Não citar "doc. N" de extrato que o cliente só descreveu.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (BNP/CNJ coletado em 19/10/2026: Súmulas 297, 479 e 532, Temas 466, 929, 1061, 1085, 1116, 1328, 1414 e 1435; Câmara dos Deputados, texto da Lei 15.327/2026, arts. 3º, 6º, 12 e 14; Planalto, CPC 1.048, CC 595, Lei 10.820/2003; página do STJ para os Temas 929, 1116, 1414 e 1435; IN do INSS e andamento do Tema 1116 só por fonte secundária). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Contestação de cobrança de cartão de crédito (`contestacao-de-cobranca-de-cartao`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da defesa do cliente de cartão. A contestação cível genérica já existe no kit cível: aqui só o que é da cobrança bancária.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: (a) prazo dos embargos ou da contestação: 15 dias úteis (CPC 701, 702 e 335) contados da juntada do AR ou do mandado cumprido (CPC 231, I e II; citação eletrônica: inciso V; mais de um réu: § 1º); mostre a conta dia a dia. (b) Prescrição da dívida: 5 anos do vencimento (CC 206, § 5º, I), somados ao vencimento da fatura mais antiga cobrada; compare com a data do ajuizamento. Mostre também o cenário com interrupção: parcelamento ou acordo aceito pelo devedor é reconhecimento (CC 202, VI), interrompe uma só vez e o prazo recomeça da data do ato (CC 202, par. único). Prescrição consumada nos dois cenários: ALERTA DE PRESCRIÇÃO e tese principal. O precedente de cartão entra pelo `[INSERIR JULGADO]` do bloco "Datas", abaixo.

#### Antes do roteiro

- **Que ação é?** Leia o mandado e a inicial. **Monitória** (CPC 700): o réu tem **15 dias** para pagar ou opor embargos nos próprios autos, sem garantir o juízo (CPC 701 e 702, caput). **Cobrança pelo procedimento comum:** contestação em 15 dias (CPC 335). Mostre a conta (bloco acima) em vez de deixá-la ao advogado. Sem embargos nem pagamento, o mandado vira título judicial (CPC 701, § 2º): não deixe passar.
- **O cartão era pessoal ou da atividade comercial?** Se o cartão serviu à atividade do cliente (comerciante, MEI), pergunte como o crédito foi usado: o CDC depende de ele ser destinatário final (consumidor) ou de vulnerabilidade comprovada.
- **O cliente reconhece o cartão?** Três defesas diferentes: (a) nunca contratou (fraude ou cartão enviado sem pedido); (b) contratou e usou, mas a conta está errada; (c) pagou ou renegociou. Pergunte e registre.
- **Quem cobra:** o emissor ou um cessionário? Cessão exige prova do contrato de cessão e só tem eficácia contra o devedor depois de notificado, ou se ele se declarou ciente por escrito (CC 290).
- **Datas:** primeira fatura, última fatura paga, vencimento da dívida cobrada, data de eventual parcelamento ou acordo, data do ajuizamento. Com elas se faz a conta da prescrição do bloco acima; o termo inicial que o STJ adota para cartão é o vencimento da última fatura não paga, sem tema repetitivo: `[INSERIR JULGADO: prescrição quinquenal da dívida de cartão e termo inicial, conferir]`.
- **Documentos do cliente:** faturas e comprovantes de pagamento, contrato de renegociação, boletim de ocorrência se fraude, comprovante de que o cartão nunca foi desbloqueado.

#### Estrutura

1. Preliminares se couberem: ilegitimidade do cessionário sem prova da cessão; inépcia por falta de demonstrativo de débito atualizado (CPC 700, § 2º; Tema 474 sobre demonstrativo); falta de prova escrita; prescrição.
2. **Prova da contratação e das faturas.** Impugne cada fato (CPC 341). O banco deve juntar o contrato assinado e a solicitação, todas as faturas desde a primeira, não só um demonstrativo próprio.
3. Mérito por encargo: juros do rotativo, juros de parcelamento, multa, mora, tarifas, anuidade, seguro.
4. **Valor que o réu entende devido**, com demonstrativo discriminado e atualizado: obrigatório quando alega excesso (CPC 702, § 2º). Se esse for o único fundamento e faltar o valor, os embargos são rejeitados liminarmente (§ 3º). O cálculo é do advogado ou de perito: deixe `[VALOR: conforme demonstrativo do réu]`.
5. Pedidos: improcedência ou procedência parcial; revisão dos encargos; restituição se houve pagamento a maior; reconvenção quando couber (CPC 702, § 6º); inversão do ônus (CDC 6º, VIII); exibição de documentos; perícia contábil; embargos parciais quanto à parcela incontroversa (CPC 702, § 7º).

#### Teses e pedidos que costumam caber

- **Teto do rotativo:** juros e encargos do rotativo e do parcelamento da fatura não podem exceder 100% do valor original da dívida (Lei 14.690/2023, art. 28, regulamentado pela Resolução CMN 5.112/2023, de 21/12/2023). Vale para o rotativo iniciado em 03/01/2024 ou depois, e o "valor original" é o montante que migrou para o rotativo (instruções de preenchimento do BACEN e nota do Ministério da Fazenda); dívida anterior segue a regra antiga. Verifique a data em que o saldo foi financiado. A lei limita o total de encargos, não a taxa; na lei (art. 28, § 1º) o teto só incide porque o CMN não aprovou limites próprios em 90 dias. Texto da Resolução não aberto: `[conferir: Resolução CMN 5.112/2023 e ajustes posteriores no site do BACEN]`.
- **Juros:** administradora de cartão é instituição financeira, sem limite da Lei de Usura (Súmula 283, que é específica de administradora de cartão; para banco comum o apoio é a Súmula 596 do STF e o Tema 24). Revisão só com abusividade demonstrada frente à taxa média do BACEN (Tema 27; Súmula 382). Contrato não juntado: taxa média (Súmula 530; Temas 233 e 234). Parâmetro: série "cartão de crédito rotativo" na página "Taxas de juros de operações de crédito" do BACEN (bcb.gov.br/estatisticas/txjuros), que o advogado busca.
- **Capitalização e mora:** capitalização vale se pactuada (Súmula 539; Súmula 541; Tema 247). Juros de mora até 1% ao mês (Súmula 379; Tema 30). Comissão de permanência: Súmulas 30, 294, 296 e 472.
- **Cartão sem pedido:** envio sem solicitação prévia e expressa é prática abusiva e ato ilícito (Súmula 532).
- **Fraude no cartão:** banco responde por fortuito interno (Súmula 479; Tema 466).
- **Monitória com contrato de abertura de crédito em conta-corrente e demonstrativo:** a Súmula 247 admite; para fatura de cartão como prova escrita: `[INSERIR JULGADO: monitória instruída com contrato e faturas de cartão, conferir]`. O contrato de abertura de crédito sozinho não é título executivo (Súmula 233).
- **Negativação durante a ação:** ver a skill `negativacao-e-score`.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "ação monitória cartão de crédito faturas", "juros do rotativo" e "prescrição da cobrança de cartão" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

#### Não fazer

- Não alegar excesso sem indicar o valor que o réu entende devido (CPC 702, § 2º).
- Não pedir limitação dos juros a 12% ao ano nem tratar o teto de 100% como limite de taxa.
- Não aplicar o teto de 100% a saldo financiado antes de 03/01/2024 sem conferir.
- Não negar a contratação se o cliente usou o cartão: a defesa vira o valor.
- Não calcular a dívida de cabeça: deixe `[VALOR]`. A prescrição é diferente: mostre a conta, com o cenário de interrupção, como sugestão a conferir.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (Planalto: CPC 231, 700 a 702, CC 290 e Lei 14.690/2023, art. 28; BNP/CNJ coletado em 19/10/2026: Súmulas 30, 233, 247, 283, 294, 296, 379, 382, 472, 479, 530, 532, 539 e 541, Temas 24, 27, 30, 233, 234, 247, 466 e 474, Súmula 596 do STF; BACEN e Ministério da Fazenda sobre o teto do rotativo). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Defesa na busca e apreensão (DL 911/1969) (`defesa-na-busca-e-apreensao`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da defesa do devedor fiduciante. Imóvel com alienação fiduciária é Lei 9.514/1997 e não entra aqui.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: o termo inicial dos dois prazos é a execução da liminar (Tema 1279). Mostre as duas contagens, em dias corridos e em dias úteis (a dúvida de contagem é do tribunal), e trate a mais curta como a segura. Exemplo com datas fictícias: execução em 06/10 → 5 dias fecham em 11/10 (corridos) ou 14/10 (úteis); 15 dias fecham em 21/10 (corridos) ou 28/10 (úteis, com o feriado de 12/10). Se os 5 dias já passaram em qualquer contagem, abra com ALERTA DE PRAZO e diga que a purga depende de acordo com o credor; os 15 dias para a resposta seguem correndo.

#### Antes do roteiro

Os dois prazos correm da **execução da liminar** (data em que o bem foi apreendido), não da citação. Primeira pergunta ao advogado: em que data apreenderam o bem?

- **5 dias** para pagar a integralidade da dívida e recuperar o bem livre do ônus; passado o prazo, consolidam-se a propriedade e a posse plenas no credor (DL 911, art. 3º, §§ 1º e 2º, redação da Lei 10.931/2004; Temas 722 e 1279).
- **15 dias** para a resposta (art. 3º, § 3º).

A conta está no bloco "Prazo, prescrição e plano", como sugestão a conferir. Se o bem ainda não foi apreendido, o prazo não começou: avise, e avalie a entrega voluntária ou o depósito.

**Cruze as datas da ficha** (primeiro vencimento, nº de parcelas, parcela em que começou o atraso, carta, execução). Incoerência vira pergunta antes do plano, não premissa.

**Cinco dias já vencidos:** não abandone o caso. Pergunte se o bem já foi vendido (a venda pelo credor muda a multa do art. 3º, § 6º, e a prestação de contas) e avalie, com o cliente que perdeu a ferramenta de trabalho, o acordo com o credor para reaver o bem e a contestação sobre o valor e os encargos.

Peça também: contrato e data (o Tema 722 vale para contratos na vigência da Lei 10.931/2004), notificação recebida (data, endereço, forma, cartório), parcelas pagas e em atraso, valor que o banco apresentou na inicial, se o bem já foi vendido, se há outro devedor ou terceiro de boa-fé.

#### Estrutura

1. Endereçamento ao juízo da busca e apreensão; número dos autos; data da execução da liminar.
2. **Decisão estratégica registrada no plano, antes da peça:** (a) pagar a integralidade em 5 dias para reaver o bem e discutir o excesso depois; (b) só contestar, aceitando a consolidação; (c) as duas coisas.
3. Preliminares e mérito: mora e notificação; encargos abusivos; pedido de restituição do pago a maior. **Adimplemento substancial** (muitas parcelas pagas) não é tese principal: a Segunda Seção do STJ afastou a teoria na alienação fiduciária do DL 911; só a use com julgado do conector, como argumento subsidiário.
4. Pedidos: improcedência; restituição do bem (se purgada a mora); multa de 50% do valor financiado se o bem tiver sido vendido e a ação for julgada improcedente, mais perdas e danos (art. 3º, §§ 6º e 7º); inversão do ônus; gratuidade se couber.

#### Teses e pedidos que costumam caber

- **Purga:** o valor é o apresentado e comprovado pelo credor na inicial (Tema 722). Peça a planilha discriminada, confira o que entrou e pague **com ressalva**. O pagamento não impede a resposta se o devedor alega pagamento a maior e quer restituição (art. 3º, § 4º). A Súmula 284 (purga só com 40% pagos) segue na lista do STJ sem cancelamento formal, mas é de 2004, anterior à Lei 10.931/2004, e o Tema 722 só a deixa viva para contrato anterior a essa lei: em contrato posterior, não a use, nem para pedir purga parcial.
- **Notificação:** sem mora comprovada não há busca e apreensão (Súmula 72). A mora decorre do vencimento e se prova por carta registrada com aviso de recebimento (art. 2º, § 2º, redação da Lei 13.043/2014); basta enviar ao endereço do contrato, sem prova de que o devedor assinou o aviso (Tema 1132). Alegue vício concreto: endereço diferente do contrato, carta devolvida, notificação sem relação com a dívida, cartório incompetente. A notificação dispensa indicar o valor (Súmula 245).
- **Contestação só depois da liminar:** a análise da contestação ocorre após a execução da medida (Tema 1040). Não peça revogação da liminar na defesa como se fosse sobrestar a apreensão. Isso não proíbe pedir a restituição do bem (se purgada a mora) nem a devolução do pago a maior.
- **Mora e encargos abusivos:** abusividade no período da normalidade (juros, capitalização) descaracteriza a mora (Tema 28), mas encargo acessório abusivo não (Tema 972, item 3). Exige pedido revisional e discriminação (ver `revisional-de-contrato-bancario`).
- **Apelação:** só no efeito devolutivo (art. 3º, § 5º).
- **Saldo devedor depois da venda:** o banco cobra por monitória (Súmula 384); o devedor tem direito à prestação de contas do valor da venda (art. 2º, caput).
- **Via extrajudicial (Lei 14.711/2023; DL 911, arts. 8º-B a 8º-E):** só com cláusula destacada no contrato. O devedor é notificado pelo cartório de títulos e documentos e tem **20 dias** para pagar ou apresentar documentos de cobrança indevida (art. 8º-B); sem entrega voluntária, multa de 5% da dívida; apreendido o bem, pode pagar a dívida integral em **5 dias úteis** (art. 8º-C, § 9º); cobrança indevida sujeita o credor à multa e à indenização do art. 3º, §§ 6º e 7º (art. 8º-D); o Judiciário fica aberto a qualquer tempo (art. 8º-C, § 11). O STF, nas ADIs 7.600, 7.601 e 7.608 (julgamento conjunto encerrado em 30/06/2025), declarou constitucionais os arts. 8º-B a 8º-E, com interpretação conforme aos §§ 4º, 5º e 7º do art. 8º-C e exigência de cautelas contra violação a direitos do devedor; só em fonte secundária: `[conferir acórdão das ADIs]`. O Provimento CNJ 196/2025 (junho de 2025) regulamenta o rito nos cartórios `[conferir texto no CNJ]`. Defesa típica aqui: vício da notificação, ausência da cláusula, valor cobrado a maior, e ação judicial para anular a consolidação.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "busca e apreensão alienação fiduciária purga da mora", "adimplemento substancial alienação fiduciária" e "notificação extrajudicial mora" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 72, 245 e 384 e os Temas 722, 1040, 1132 e 1279 podem entrar pelo número.

#### Não fazer

- Não deixar passar os 5 dias sem decidir sobre a purga: depois deles a propriedade se consolida.
- Não dizer ao devedor que basta pagar as parcelas em atraso: é a dívida integral (Tema 722).
- Não usar a Súmula 284 em contrato posterior à Lei 10.931/2004 nem pedir purga parcial.
- Não somar nem atualizar a dívida de cabeça: peça o demonstrativo e deixe `[VALOR: conforme planilha do credor]`.
- Não fundar a defesa em adimplemento substancial: o STJ a afastou no DL 911; sem julgado do conector, nem como subsidiária; se o advogado insistir, deixe `[INSERIR JULGADO: adimplemento substancial na alienação fiduciária, conferir]` e sem número de acórdão.
- Não confundir com imóvel (Lei 9.514/1997: consolidação no registro de imóveis, leilão, outro rito).

*Referências conferidas e revisadas depois do teste em 20/10/2026 (Informativo de Jurisprudência do STJ de 2017 para o adimplemento substancial; Planalto: DL 911/1969 consolidado, com os arts. 8º-B a 8º-E da Lei 14.711/2023; BNP/CNJ coletado em 19/10/2026 para Súmulas 72, 245, 284 e 384 e Temas 28, 722, 972, 1040, 1132 e 1279; ADIs e Provimento 196 só por fonte secundária). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Fraude, Pix e golpe (`fraude-pix-e-golpe`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da fraude bancária. A inicial de consumo genérica já existe no kit cível.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: (a) o prazo para abrir o MED: a transação original tem que ter no máximo 80 dias na abertura da Recuperação de Valores (Guia do MED do BACEN, versão 4.4): se estiver perto ou vencido, é ALERTA DE PRAZO; (b) a prescrição da pretensão indenizatória por fato do serviço, 5 anos do conhecimento do dano e da autoria (CDC 27), contada da data do Pix. Das perguntas abaixo, leve ao plano as cinco que mais mudam a tese (quem apertou o botão, atipicidade, limite, MED, empréstimo); as demais viram `[DEFINIR]`.

#### Antes do roteiro

Esta é a skill em que a ficha mais decide o resultado. Pergunte e registre:

- **Quem apertou o botão?** O próprio cliente, com senha ou biometria (engenharia social, falsa central, falso funcionário, venda falsa) ou o fraudador sem o cliente (invasão, clonagem, roubo do celular, coação)? A tese muda por inteiro.
- **Perfil da conta:** valores e horários habituais, limite do Pix, uso de dispositivo, destinatários anteriores. A operação foi **atípica** (valor, horário, destinatário novo, várias transferências seguidas, limite elevado na hora, novo aparelho)? Ao comparar, diga a base de cada razão: valor do Pix contra a média mensal de movimentação, contra o maior Pix anterior e o total contra a média. Não escreva "N vezes a média" sem a base.
- **Aumento de limite:** o limite foi elevado pelo cliente (e como: tela, canal, hora) ou sem ação dele? Regra do BACEN: o pedido de aumento de limite do Pix feito pelo cliente só tem efeito depois de um prazo mínimo de 24 horas, enquanto a redução é imediata (Resolução BCB 142/2021; o gov.br fala em 24 a 48 horas para o banco analisar o pedido por canal digital). Fontes: relatório de gestão do Pix 2023 (bcb.gov.br) e notícia do gov.br; o texto vigente da resolução não abriu: `[conferir norma do BACEN sobre aumento de limite do Pix]`. Se o limite subiu de R$ 1.000 a R$ 50.000 em minutos, à noite, esse é o defeito do serviço mais forte do caso: peça os logs do pedido e da efetivação.
- **O que o golpista sabia:** se citou dado do contrato, saldo, últimas compras ou número de protocolo do banco, isso indica vazamento ou falha de segurança. Registre literalmente o que foi dito.
- **O que o cliente fez depois:** hora em que percebeu, quando ligou para o banco, protocolo, quando abriu a contestação (MED) e qual resposta, BO, bloqueio de cartão e conta.
- **Houve empréstimo ou limite contratado pelo golpista no nome do cliente?** Vira pedido de inexistência do contrato (ver `consignado-nao-contratado`, Tema 1061 sobre assinatura impugnada).
- **Boleto falso:** quem emitiu o boleto, banco de destino, se os dados do pagador e do contrato vieram corretos.

#### Estrutura

1. Endereçamento (foro do domicílio do consumidor, CDC 101, I) e qualificação.
2. Fatos em linha do tempo com hora das operações e das comunicações ao banco.
3. Direito: CDC aplicável a banco (Súmula 297); responsabilidade objetiva por fortuito interno em fraudes de terceiros (Súmula 479; Tema 466; CDC 14). Ao banco cabe provar a culpa exclusiva do consumidor ou de terceiro (CDC 14, § 3º, II); fundamente a inversão (CDC 6º, VIII).
4. **O defeito do serviço, em concreto:** operação atípica não bloqueada; falha na autenticação; demora em bloquear após o aviso; falha no MED (não bloqueou os valores no banco recebedor, não abriu a recuperação de valores); vazamento de dados usados pelo golpista.
5. Pedidos: restituição dos valores (sem calcular; o valor da causa e a escolha entre JEC e vara ficam com o advogado, `[DEFINIR]`); declaração de inexistência de empréstimo; obrigação de fazer (rastreamento e bloqueio, ofício ao banco recebedor); dano moral, descrevendo o fato concreto; tutela de urgência quando ainda há valor a bloquear.

#### Teses e pedidos que costumam caber

- **Não é automático.** A Terceira Turma do STJ, em julgado divulgado pelo próprio tribunal em 15/07/2026, afastou a indenização no golpe da falsa central: a Súmula 479 e o Tema 466 pressupõem fortuito interno, e a responsabilidade depende de falha concreta do serviço (movimentação fora do perfil não barrada, fragilidade de segurança); sem isso, a conduta do golpista somada à da vítima rompe o nexo causal. É julgado de Turma, não tese vinculante: traga o acórdão pelo conector, sem número de memória, e monte a peça pelo caso concreto, não pela súmula.
- **MED do Pix:** Regulamento do Pix (anexo à Resolução BCB 1/2020), capítulo XI, seção II, e art. 39-B (bloqueio cautelar), detalhado no Guia de implementação do MED do BACEN, versão 4.4. Pontos do guia: o pagador contesta no app do banco (autoatendimento obrigatório) ou no canal de atendimento; cobre golpes, fraudes e coerção, inclusive quando o cliente autorizou com senha ou biometria; a contestação abre a Recuperação de Valores (o "MED 2.0", em produção desde 11/05/2026), que rastreia e bloqueia recursos também nas contas seguintes da cadeia; bloqueio cautelar pelo banco recebedor de até 72 horas; a transação tem que ter no máximo 80 dias. As alterações da versão 4.4 (01/09/2026 e 26/10/2026) só ampliam o prazo de contestação de uma devolução e detalham a notificação de infração: nada muda para o consumidor. O MED não cobre desacordo comercial, compra em que o vendedor foi de boa-fé nem Pix enviado por engano, e a devolução depende de saldo na conta do recebedor. Use o MED como parâmetro do dever de agir rápido, não como garantia de devolução.
- **Prova da diligência:** protocolo e hora da contestação, extrato, BO, prints da conversa com o golpista, pedido de exibição dos logs de acesso e das câmeras de segurança de autenticação, e gravação do atendimento.
- **Culpa concorrente** pode reduzir a indenização (CC 945): trate na peça o comportamento do cliente com franqueza.
- **Cartão e compra não reconhecida:** a responsabilidade por fraude no cartão é infraconstitucional (STF, repercussão geral inexistente nos Temas 286 e 417); o caminho é o STJ.
- **Banco recebedor (conta de passagem):** responsabilidade possível, sem tese qualificada no BNP: `[INSERIR JULGADO: responsabilidade do banco recebedor em golpe do Pix, conferir]`. Peça ofício ao recebedor para identificar o titular.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "fortuito interno fraude bancária", "golpe do Pix responsabilidade do banco" e "operação atípica não bloqueada" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 297 e 479 e o Tema 466 podem entrar pelo número.

#### Não fazer

- Não afirmar que a Súmula 479 torna o banco responsável em todo golpe.
- Não omitir que o cliente forneceu senha ou fez o Pix, se foi o caso: a peça fica frágil e a contestação do banco acerta nisso.
- Não prometer devolução pelo MED nem chamar o MED de chargeback.
- Não calcular valor devolvido nem juros.
- Não pedir dano moral presumido sem julgado conferido.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (BNP/CNJ coletado em 19/10/2026: Súmulas 297 e 479, Tema 466 do STJ, Temas 286 e 417 do STF; Guia de implementação do MED, BACEN, versão 4.4, com histórico de revisão; relatório de gestão do Pix 2023 e notícia do gov.br sobre limites; notícia oficial do STJ de 15/07/2026 sobre a falsa central, localizada por busca, acórdão não aberto). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Negativação indevida e score (`negativacao-e-score`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da negativação e do score. A inicial de consumo genérica já existe no kit cível: aqui só o que é de cadastro de crédito.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: (a) a inscrição só se mantém por 5 anos (CDC 43, § 1º; Súmula 323): mostre a data-limite de cada inscrição e, vencida, peça a exclusão; (b) a pretensão indenizatória por fato do serviço prescreve em 5 anos do conhecimento do dano e da autoria (CDC 27), contados da ciência da inscrição; (c) se o nome foi mantido após pagamento, conte os 5 dias úteis da Súmula 548 a partir do pagamento integral.

#### Antes do roteiro

- **A primeira providência é o extrato de TODAS as inscrições do cliente**, em cada órgão. Se houver outra inscrição legítima e anterior, a Súmula 385 afasta o dano moral (resta o cancelamento). A ficha precisa dizer se existe outra e em que situação.
- Anote: quem inscreveu (credor), em qual órgão, data da inscrição, valor, contrato; se houve **notificação prévia** e como (carta ao endereço do cliente, em que data); se a dívida foi paga (data e comprovante) e quando o nome saiu; se a dívida é do cliente ou de golpe, homônimo, contrato fraudulento.
- **Cinco anos:** a inscrição só pode ser mantida por até 5 anos (CDC 43, § 1º; Súmula 323). Se a dívida prescreveu, os sistemas não podem fornecer dados que dificultem novo crédito (CDC 43, § 5º). Pergunte a data do vencimento original.
- **Score:** há recusa de crédito concreta? Quando, por quem, com o motivo informado? Sem recusa e sem dado excessivo ou sensível, a tese cai (ver Teses).
- **Quem é o réu:** o credor que inscreveu (sempre) e o órgão mantenedor (se a falha é de notificação ou de manutenção). Com mais de uma inscrição, o credor de cada uma é réu possível, inclusive o da inscrição antiga que o cliente diz ter pago e que foi mantida (Súmula 548). Nome de órgão e CNPJ na ficha.

#### Estrutura

1. Endereçamento (foro do domicílio do consumidor, CDC 101, I; JEC se couber) e qualificação.
2. Fatos: dívida ou ausência dela, data da inscrição, descoberta, pedido administrativo de retirada, resposta.
3. Direito: CDC 43, §§ 2º e 3º; Súmula 359 (cabe ao órgão mantenedor notificar antes de inscrever); Súmula 404 (AR dispensável, basta a carta ao endereço); Súmula 548 (o credor exclui o registro em 5 dias úteis do pagamento integral); responsabilidade objetiva (CDC 14).
4. Tutela de urgência para excluir ou suspender a inscrição (CPC 300). Se o cliente reconhece parte da dívida e discute o restante (a hipótese em que o Tema 31 nasceu, a revisão de contrato), só se defere abstenção com os requisitos do Tema 31: ação que questiona o débito, aparência de bom direito em jurisprudência consolidada e depósito do incontroverso ou caução. **Se o cliente nega a dívida inteira** (fraude, contrato nunca firmado, dívida paga), não há incontroverso a depositar: não peça caução nem condicione a tutela ao Tema 31; fundamente no CPC 300 com a prova da inexistência (BO, comprovante de pagamento, impugnação da assinatura) e marque `[conferir: aplicação do Tema 31 à dívida inexistente]`.
5. Pedidos: declaração de inexistência do débito (se for o caso); exclusão; dano moral com o fato concreto; inversão do ônus; ofício ao órgão para informar as fontes dos dados (Lei 12.414/2011, art. 5º, IV; acesso, correção e informação sobre compartilhamento na LGPD, Lei 13.709/2018, art. 18, com resposta completa em até 15 dias, art. 19, II).

#### Teses e pedidos que costumam caber

- **Sem notificação prévia:** o órgão mantenedor tem legitimidade passiva e a falta de comunicação do art. 43, § 2º, enseja compensação por dano moral (Temas 37, 38 e 40; Súmula 359). O CCF do Banco do Brasil não tem esse dever (Súmula 572). Se a dívida existe e a inscrição é regular no mérito, a tese é só de forma: ponderar.
- **Inscrição indevida:** dano moral nos casos de dívida inexistente, paga ou fraudada. Presunção do dano ("in re ipsa") é entendimento a confirmar pelo conector: `[INSERIR JULGADO: dano moral in re ipsa por negativação indevida, conferir]`. O BNP não traz tese qualificada sobre isso.
- **Súmula 385:** havendo inscrição anterior legítima, sem dano moral. Se a outra inscrição também é indevida ou está sendo discutida, diga e busque julgado: `[INSERIR JULGADO: afastamento da Súmula 385 quando a inscrição anterior é discutida, conferir]`.
- **Pagamento e manutenção:** nome mantido além de 5 dias úteis do pagamento integral gera pedido de exclusão e indenização (Súmula 548).
- **Banco de dados de terceiros:** a venda de dados pessoais não sensíveis por gestor de cadastro sem comunicação ao titular, e o dano moral presumido nesse caso, são objeto do Tema 1404 (afetado). `[conferir situação e suspensão]`.
- **Score e cadastro positivo (Tema 710 e Súmula 550):** o score é prática lícita (Lei 12.414/2011, art. 5º, IV, e art. 7º, I), dispensa consentimento, mas o consumidor pode pedir esclarecimentos sobre as fontes e as informações pessoais valoradas. O abuso (dados excessivos ou sensíveis, art. 3º, § 3º, ou recusa de crédito baseada em dado incorreto ou desatualizado) gera responsabilidade objetiva e solidária do fornecedor do serviço, do banco de dados, da fonte e do consulente (art. 16), com dano moral. Score baixo sozinho não gera indenização. Desde a LC 166/2019 o cadastro positivo abre sem consentimento prévio, com comunicação ao cadastrado em até 30 dias (Lei 12.414, art. 4º, § 4º) e cancelamento gratuito a pedido (art. 5º, I).
- **Demora em baixar gravame de veículo não é dano presumido** (Tema 1078): não use por analogia na negativação.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "negativação indevida dano moral", "notificação prévia inscrição cadastro de inadimplentes" e "credit scoring" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 323, 359, 385, 404, 548, 550 e 572 e os Temas 31, 710 e 1404 podem entrar pelo número, com a situação indicada acima.

#### Não fazer

- Não pedir dano moral sem ter visto o extrato de todas as inscrições (Súmula 385).
- Não pôr o dever de notificar no credor: é do órgão mantenedor (Súmula 359).
- Não pedir indenização só porque o score é baixo.
- Não pedir exclusão de inscrição de dívida que o cliente reconhece e não pagou: sem discutir o débito, o pedido não passa.
- Não exigir depósito ou caução (Tema 31) de quem nega a dívida inteira.
- Não afirmar presunção de dano sem julgado conferido.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (BNP/CNJ coletado em 19/10/2026: Súmulas 323, 359, 385, 404, 548, 550 e 572, Temas 31, 37, 38, 40, 710, 1078 e 1404, com o texto das teses; Planalto: CDC 43, LC 166/2019 e LGPD arts. 18 e 19; Lei 12.414/2011 pela tese do Tema 710 e pela LC 166). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Revisional de contrato bancário (`revisional-de-contrato-bancario`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da revisional. A inicial de consumo genérica já existe no kit cível: aqui só o que é bancário.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: a prescrição da repetição (candidatos: CC 206, § 3º, IV; CDC 27; CC 205), contada de cada parcela paga. Mostre a conta por candidato e deixe a escolha com o advogado. Com alienação fiduciária e parcela em atraso, o prazo que pesa é o da busca e apreensão: ver `defesa-na-busca-e-apreensao`.

#### Antes do roteiro

- **Tem o contrato?** Sem o instrumento, a peça pede exibição e usa a taxa média (Súmula 530; Temas 233 e 234). Pergunte data da contratação, tipo (CCB, financiamento, empréstimo pessoal, cheque especial), valor financiado, nº e valor das parcelas, quantas já foram pagas e se há mora.
- **A data decide encargo a encargo:** capitalização mensal (contratos de 31/03/2000 em diante, Súmula 539); TAC e TEC (válidas só até 30/04/2008, Súmula 565, Temas 618 e 619); ressarcimento de correspondente bancário e pré-gravame (abusivos a partir de 25/02/2011, Temas 958 e 972).
- **Parcelas em dia ou em atraso?** Isto muda a tutela e a mora (ver Teses).
- **Renegociação anterior** não impede a discussão do contrato original (Súmula 286).
- **Prescrição da repetição:** ponto controvertido (CC 205, CC 206, § 3º, IV, CDC 27). Mostre a conta pelos três candidatos. A orientação do STJ para repetição de indébito contratual é o prazo decenal do CC 205, sem tema repetitivo no BNP: `[INSERIR JULGADO: prescrição decenal da repetição de indébito em contrato bancário, conferir]`.
- **Seguro prestamista e tarifas acessórias:** pergunte se o seguro foi imposto pelo banco (sem opção de recusar) ou era opcional. Sem a imposição na ficha, o Tema 972 é hipótese, não fato.
- **Vara ou JEC e valor da causa:** pergunte o proveito econômico (CPC 292, II) e se a perícia contábil indica a vara; sem isso, `[DEFINIR: valor da causa]`.

#### Estrutura

1. Endereçamento, qualificação, foro (domicílio do consumidor, CDC 101, I).
2. Fatos: contrato, data, taxa contratada e taxa cobrada, parcelas pagas.
3. **Obrigações contratuais controvertidas, cláusula por cláusula**, e o **valor incontroverso**, que continua sendo pago no tempo e modo contratados (CPC 330, §§ 2º e 3º). Sem isso, inépcia. Quantificar o incontroverso é do advogado: deixe `[VALOR: incontroverso, conforme planilha]`.
4. Direito: CDC aplicável a banco (Súmula 297); abusividade só com demonstração concreta (CDC 51, § 1º; Tema 27); pedido expresso de cada cláusula, porque o juiz não conhece de ofício (Súmula 381).
5. Pedidos: declaração de nulidade ou revisão de cada cláusula; recálculo; repetição do indébito; tutela; perícia contábil; exibição do contrato; inversão do ônus (CDC 6º, VIII).
6. Valor da causa e documentos.

#### Teses e pedidos que costumam caber

- **Juros remuneratórios:** 12% ao ano ou a média não bastam sozinhos (Súmula 382; Tema 25). Cabe revisão se a abusividade ficar demonstrada frente à taxa média do BACEN da mesma modalidade e período (Tema 27). A skill lista o que entra na comparação (modalidade, data da contratação, taxa mensal e anual contratada) e manda o advogado buscar a série na página "Taxas de juros de operações de crédito" do BACEN (bcb.gov.br/estatisticas/txjuros, por modalidade e período). Não calcula.
- **Juros moratórios e taxa legal:** juros de mora em contrato bancário podem ser pactuados até 1% ao mês (Súmula 379; Tema 30). A taxa legal do CC 406 na redação da Lei 14.905/2024 (Selic menos IPCA, em vigor desde 30/08/2024) não alcança os juros remuneratórios de banco (Tema 26: CC 406 e 591 inaplicáveis ao mútuo bancário); o módulo da área a cita para a correção da condenação, não para o contrato.
- **Taxa não informada ou contrato não juntado:** taxa média, salvo se a cobrada for menor (Súmula 530; Temas 233, 234).
- **Capitalização:** válida se expressamente pactuada (Súmula 539); taxa anual maior que o duodécuplo da mensal basta (Súmula 541; Tema 247). Pedir só se faltar pactuação clara ou o contrato for anterior a 31/03/2000.
- **Comissão de permanência:** não cumula com juros, mora, multa nem correção (Súmulas 30, 294, 296, 472; Tema 52).
- **Tarifas:** TAC e TEC em contrato posterior a 30/04/2008 (Súmula 565); tarifa de cadastro é válida só no início da relação (Súmula 566; Tema 620); serviço de terceiro sem especificação, comissão de correspondente após 25/02/2011, registro de contrato e avaliação do bem sem serviço prestado (Tema 958); pré-gravame após 25/02/2011 e seguro imposto pelo banco (Tema 972). IOF financiado é válido (Tema 621).
- **Mora:** abusividade nos encargos da normalidade (juros e capitalização) descaracteriza a mora (Tema 28); abusividade de encargo acessório não descaracteriza (Tema 972, item 3); a revisional sozinha não impede a mora (Súmula 380; Tema 29).
- **Tutela contra negativação:** só com ação que questione o débito, aparência de bom direito em jurisprudência consolidada e depósito do incontroverso ou caução (Tema 31). O Tema 31 nasceu na revisional bancária: é aqui que ele se aplica sem ressalva.
- **Busca e apreensão:** em financiamento com alienação fiduciária e parcelas em atraso, o risco real é a busca e apreensão, não só a negativação. A revisional não afasta a mora (Súmula 380); a notificação (Súmula 72), a purga e os prazos estão em `defesa-na-busca-e-apreensao`.
- **Repetição:** não exige prova do erro em conta-corrente (Súmula 322). Simples ou em dobro: ver CDC 42, parágrafo único, e a skill `consignado-nao-contratado` sobre o Tema 929.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "revisão de juros remuneratórios abusivos", "capitalização de juros contrato bancário" e "tarifas bancárias abusivas" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas e temas acima, conferidos, podem entrar pelo número.

#### Não fazer

- Não pedir limitação a 12% ao ano pela Lei de Usura: banco não se sujeita (Súmula 596 do STF; Tema 24 do STJ). A Súmula 283 do STJ é de administradora de cartão de crédito: não a use contra banco comum.
- Não pedir capitalização como ilegal em si.
- Não aplicar a taxa legal do CC 406 (Lei 14.905/2024) aos juros remuneratórios do contrato (Tema 26).
- Não omitir a discriminação das cláusulas nem o valor incontroverso (CPC 330, § 2º).
- Não calcular juros, saldo nem repetição: liste o que entra e deixe `[VALOR]`.
- Não afirmar que a revisional impede a negativação ou a busca e apreensão.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (BNP/CNJ coletado em 19/10/2026: Súmulas 30, 286, 294, 296, 297, 322, 379, 380, 381, 382, 472, 530, 539, 541, 565 e 566, Temas 24 a 31, 52, 233, 234, 246, 247, 618 a 621, 958 e 972 do STJ, Súmula 596 do STF; Planalto: CPC 330, §§ 2º e 3º, e Lei 14.905/2024). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*

### Superendividamento (CDC 104-A a 104-C) (`superendividamento`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do superendividamento.

#### Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: a ação não tem prazo fatal, mas o rol muda com a prescrição das dívidas antigas e com o cadastro de 5 anos (CDC 43, § 1º). Mostre a conta das mais antigas. No plano, mostre as datas sugeridas (5 anos; no plano compulsório, primeira parcela em até 180 dias da homologação, 104-B, § 4º) e os 2 anos para repetir o pedido (104-A, § 5º).

#### Antes do roteiro

- **Quem pode:** consumidor pessoa natural, de boa-fé, em impossibilidade manifesta de pagar o conjunto das dívidas de consumo, vencidas e vincendas, sem comprometer o mínimo existencial (CDC 54-A, § 1º). Ficam fora dívidas por fraude ou má-fé e as de produto ou serviço de luxo de alto valor (54-A, § 3º).
- **Fora do plano:** contrato celebrado dolosamente sem propósito de pagar, crédito com garantia real, financiamento imobiliário e crédito rural (104-A, § 1º). Veículo alienado fiduciariamente: ponto de jurisprudência `[conferir]`; por padrão, trate como fora do plano e diga isso ao advogado.
- **Dívida fora do plano continua na conta do mínimo.** A parcela do carro em dia é dívida vincenda (54-A, § 1º) e disputa a renda: lance-a como compromisso fixo no cálculo do mínimo existencial, ainda que o contrato fique fora do plano.
- **Serviço essencial (luz, água):** é serviço de prestação continuada e entra no conceito de dívida de consumo (54-A, § 2º). Entra no rol como credor, desde que seja consumo (pergunte se a ligação é residencial e desde quando atrasa). Regra de corte e parcelamento da concessionária: `[conferir regulação setorial]`.
- **Dívida contraída para saúde** (do cliente ou de familiar) reforça a boa-fé; não é produto de luxo (54-A, § 3º). Tarje o dado de saúde.
- **Foro e porta de entrada:** pergunte se o tribunal tem núcleo ou CEJUSC de superendividamento e se cabe gratuidade `[conferir no tribunal]`.
- **Peça à ficha o rol completo:** credor, tipo de contrato, saldo, parcela, atraso, garantia, se já renegociou; renda líquida e despesas básicas (moradia, alimentação, saúde, transporte). Sem o rol de todos os credores a audiência global não funciona. Renda, dívida e saúde são dado sensível: nada disso vai pro perfil do escritório.
- **Via administrativa antes?** O Procon e demais órgãos do sistema de defesa do consumidor podem conduzir audiência global e plano (104-C). Serve de prova da tentativa, não é pré-requisito legal.
- **Pergunte qual é a ação:** repactuação consensual com audiência (104-A) ou, se algum credor recusar, processo por superendividamento com plano judicial compulsório (104-B).

#### Estrutura

1. Endereçamento (foro do domicílio do consumidor, CDC 101, I) e qualificação.
2. Fatos: histórico do endividamento, o que causou, boa-fé, tentativas de renegociar.
3. Quadro de credores e dívidas, uma linha por contrato, valores vazios `[VALOR]` onde o cliente não trouxe.
4. **Mínimo existencial:** demonstrar com a renda e as despesas da ficha, não só com o número do decreto (ver Teses). Despesa que a ficha não traz vira `[DEFINIR: despesas]`; sem elas, não afirme o mínimo.
5. **Proposta de plano de pagamento:** prazo máximo de 5 anos, preservadas as garantias e formas de pagamento originais, com data de exclusão do nome dos cadastros e condição de não contrair novas dívidas (104-A, caput e § 4º). A skill monta o esqueleto do plano (credor, forma, prazo, carência) e deixa os valores para o advogado.
6. Pedidos: designação de audiência com todos os credores; suspensão de cobranças e dos encargos de mora do credor ausente (104-A, § 2º); em caso de recusa, instauração do processo do art. 104-B (credores citados com 15 dias para documentos e justificativa da recusa; administrador nomeado; plano compulsório); tutela para preservar o mínimo e retirar a negativação.

#### Teses e pedidos que costumam caber

- **Não é insolvência civil**, e o pedido só se repete 2 anos depois de cumprido o plano (104-A, § 5º). A sentença homologatória é título executivo com força de coisa julgada (104-A, § 3º).
- **Credor que não comparece sem justa causa:** suspensão da exigibilidade, interrupção dos encargos de mora e sujeição ao plano se o valor for certo e conhecido (104-A, § 2º).
- **Plano compulsório (104-B):** instaurado a pedido do consumidor quando a conciliação falha com algum credor; credores citados têm 15 dias para juntar documentos e justificar a recusa (§ 2º); o juiz pode nomear administrador, que apresenta o plano em até 30 dias (§ 3º); o plano garante ao credor, no mínimo, o principal corrigido por índices oficiais de preços, com liquidação em até 5 anos após a quitação do plano consensual, primeira parcela em até 180 dias da homologação e o restante em parcelas mensais iguais (§ 4º).
- **Deveres do fornecedor na oferta de crédito:** informação, avaliação responsável, consignado só depois de confirmada a margem (CDC 54-B a 54-D e 54-G). Descumprimento permite pedir redução de juros e encargos, alongamento do prazo e indenização (54-D). Contratos conexos: 54-F.
- **Mínimo existencial, valor:** o Decreto 11.150/2022, na redação do Decreto 11.567/2023, fixa R$ 600,00 por mês (art. 3º). As notícias oficiais do STF registram que o julgamento das ADPFs 1.005, 1.006 e 1.097 estava suspenso em 22/04/2026 e foi concluído em 23/04/2026: o CMN deve reavaliar o parâmetro todos os anos, com estudos técnicos (unanimidade), e a exclusão do consignado do cálculo foi declarada inconstitucional por maioria (divergiram Cármen Lúcia, Fux, Dino e Zanin). Relatos que falam em "suspenso" são do dia 22. O placar numérico, o dispositivo exato e a tese não constam das notícias, e o acórdão não foi aberto: `[conferir: acórdão e dispositivo das ADPFs 1.005, 1.006 e 1.097]`. O texto consolidado do decreto no Planalto ainda lista o consignado entre as exclusões (art. 4º, parágrafo único, I, "h", com nota de "vide" às ADPFs) e manda o CMN atualizar o valor (art. 3º, § 3º). Por isso: argumente o mínimo com a conta concreta do cliente, não com R$ 600 como teto fixo, e inclua o consignado no rol e no cálculo, citando o julgamento com o `[conferir]` acima.
- Não localizei decreto novo de 2026 sobre o valor `[conferir no DOU]`.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "superendividamento plano de pagamento", "mínimo existencial" e "superendividamento e consignado" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

#### Não fazer

- Não incluir no plano dívida de garantia real, financiamento imobiliário, crédito rural nem dívida contraída com dolo.
- Não propor plano maior que 5 anos nem deixar de preservar o mínimo existencial.
- Não calcular parcela, renda comprometida nem percentual: monte o quadro e deixe `[VALOR]`.
- Não afirmar que o STF fixou R$ 600 como valor definitivo, nem que a ADPF "derrubou" o decreto.
- Não pôr renda e saúde do cliente em texto aberto fora da peça.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (Planalto: CDC compilado, arts. 42, 43, 54-A a 54-G e 104-A a 104-C, e Decreto 11.150/2022 consolidado com o Decreto 11.567/2023; notícias oficiais do STF de 22 e 23/04/2026 sobre as ADPFs, acórdão não aberto). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
