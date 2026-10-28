# area-penal

Quando usar: Use quando o perfil do escritório disser que ele atua em direito penal (criminal, execução penal, juizado criminal) e a tarefa for ficha, peça, prazo, pesquisa, risco, checklist de documentos ou audiência dessa área. É o módulo da área: rito, prazos, peças, teses, fontes e armadilhas que as outras skills do Advoclaude leem antes de trabalhar.

# Área penal

Aqui o prazo corre em dias corridos, e a custódia, em horas. A data do fato decide a lei que vale. Este módulo é o mapa de rito e prazo; com o pacote Penal do Pro instalado, a skill da peça (`resposta-a-acusacao`, `habeas-corpus`, `liberdade-provisoria-e-revogacao-da-preventiva`, `alegacoes-finais-memoriais`, `apelacao-criminal`, `acordo-de-nao-persecucao-penal`, `queixa-crime`, `defesa-no-juizado-especial-criminal`, `agravo-em-execucao-e-progressao`) aprofunda e prevalece onde divergir.

## 1. Onde a área corre

- **Estadual:** varas criminais, júri, violência doméstica, execução, JECrim e Turma Recursal. **Federal:** CF art. 109, IV a VI e IX (contravenção nunca). **Eleitoral:** Código Eleitoral, arts. 355 a 364. **STJ** (5ª e 6ª Turmas) em lei federal; **STF** em Constituição.
- **Sistemas:** PJe, eproc, e-SAJ ou Projudi, conforme o tribunal. Execução no SEEU. Mandados no BNMP.
- **Ritos (CPP art. 394):** ordinário (pena máxima de 4 anos ou mais), sumário (menos de 4), sumaríssimo (Lei 9.099/1995, art. 61: até 2 anos e contravenção), júri (arts. 406 a 497). Especiais: drogas (Lei 11.343/2006, arts. 54 a 59), funcionais (arts. 513 a 518), honra (arts. 519 a 523), violência doméstica (Lei 11.340/2006).
- **Como se escolhe:** a pena máxima decide rito e JECrim. Violência doméstica contra a mulher nunca vai ao JECrim (Lei 11.340, art. 41). Réu não achado ou caso complexo sai do JECrim (Lei 9.099, arts. 66, p. ú., e 77, §2º). Doloso contra a vida vai ao júri, salvo, na conexão, homicídio por membro de facção ou milícia (CPP art. 78, I, Lei 15.358/2026) [conferir posição do STF].
- **Juiz das garantias** (arts. 3º-B a 3º-F): fora do júri, da violência doméstica, do JECrim e da competência originária. Confira a comarca. A competência dele cessa com o **oferecimento** da denúncia, e não com o recebimento como diz o texto do art. 3º-C (interpretação conforme do STF nas ADIs do Pacote Anticrime, 2023; fonte secundária, `[conferir]`).

## 2. Prazos que mais aparecem

**Contagem (CPP art. 798):** dias corridos; exclui o dia do começo (§1º); vencimento sem expediente vai pro dia útil seguinte (§3º); corre da intimação, não da juntada (Súmula 710 do STF). Intimação (ou publicação com efeito de intimação) na sexta começa na segunda, ou no primeiro dia útil se não houver expediente (Súmula 310 do STF, texto no BNP/CNJ, 19/10/2026). Recesso de 20/12 a 20/1 suspende, **salvo réu preso, Maria da Penha e urgência** (art. 798-A). O CPC art. 219 não se aplica, nem no STJ. O art. 12-A da Lei 9.099 é do juizado cível: JECrim conta corrido. Defensoria em dobro (LC 80/1994, art. 44, I). Decadência e prescrição: CP art. 10, inclui o dia do começo.

| Ato | Prazo | Base | Observação |
|---|---|---|---|
| Custódia | 24 horas | CPP arts. 3º-B, §1º, e 310 | videoconferência, entrevista reservada antes (Lei 15.358/2026) |
| Inquérito | 10 dias preso, 30 solto | CPP art. 10 | drogas: 30 e 90 (Lei 11.343, art. 51); facção: 90 e 270 (Lei 15.358, art. 5º) |
| Queixa ou representação | 6 meses da ciência da autoria; **12 meses** se o crime é de violência doméstica e familiar contra a mulher | CPP art. 38, caput e §2º; CP art. 103, p. ú.; Lei 11.340, art. 16-A (Lei 15.438/2026, em vigor desde 19/06/2026) | decadência; a lei não traz regra de transição: fato anterior a 19/06/2026 conta pelo prazo menor `[conferir]` |
| Revisão da preventiva | 90 dias | CPP art. 316, p. ú. | o atraso não solta sozinho (tese das ADIs 6.581 e 6.582, `[conferir]`) |
| Resposta à acusação | 10 dias | CPP art. 396 | rol de testemunhas aqui |
| Defesa prévia (drogas) | 10 dias | Lei 11.343, art. 55 | |
| Memoriais | 5 dias sucessivos | CPP art. 403, §3º | |
| Apelação | 5 dias; razões em 8 | CPP arts. 593 e 600 | JECrim: 10 dias com razões (Lei 9.099, art. 82, §1º). Do ofendido não habilitado: 15 dias, depois do prazo do MP (art. 598). Réu e defensor intimados em dias diferentes: peça as duas datas |
| Embargos infringentes e de nulidade | 10 dias | CPP art. 609, p. ú. | só com voto vencido favorável ao réu |
| RESE | 5 dias; razões em 2 | CPP arts. 586 e 588 | cabe também contra a recusa de homologar o ANPP (art. 581, XXV) |
| Recurso ordinário em HC | 5 dias, com razões | Lei 8.038/1990, art. 30 | contra HC denegado por TJ/TRF; onde se protocola: `[conferir regimento]` |
| Embargos de declaração | 2 dias | CPP arts. 382 e 619 | JECrim: 5 dias (Lei 9.099, art. 83, §1º) |
| REsp, RE e agravo da inadmissão | 15 dias corridos | CPC art. 1.003, §5º, via CPP art. 638 | |
| Agravo em execução | 5 dias | LEP art. 197; Súmula 700 do STF | |
| HC e revisão criminal | sem prazo | CF art. 5º, LXVIII; CPP art. 622 | |

## 3. As peças mais comuns

1. **Relaxamento, liberdade ou revogação da preventiva:** prisão ilegal (CF art. 5º, LXV; CPP art. 310, I); liberdade e cautelares (arts. 321 e 319); falta de requisito (arts. 312 e 313, incluídos o V da Lei 15.358/2026 e o VI da Lei 15.487/2026), de contemporaneidade (art. 312, §2º), ou só gravidade abstrata (art. 312, §4º, Lei 15.272/2025); reincidente e afins: art. 310, §§2º e 5º; domiciliar (arts. 318 e 318-A). O juiz não converte flagrante em preventiva de ofício (Súmula 676 do STJ). Custódia: entrevista reservada (art. 310, §§7º a 13) e DNA (art. 310-A). Detalhe na skill de liberdade.
2. **Habeas corpus:** impetrante, paciente, autoridade coatora; tribunal pela autoridade; hipótese do CPP art. 648; prova pré-constituída; liminar. Concessão de ofício mesmo sem conhecer (art. 647-A, Lei 14.836/2024). Contra HC denegado por TJ/TRF cabe recurso ordinário em 5 dias, e HC substitutivo só pede concessão de ofício. HC contra Turma Recursal vai ao TJ/TRF (a Súmula 690 do STF consta vigente no BNP, mas o STF não a aplica desde 2007; não citar, `[conferir]`).
3. **Resposta à acusação** (arts. 396-A e 397): preliminares, absolvição sumária, documentos, testemunhas (8 no ordinário, art. 401; 5 no sumário, art. 532). Nas drogas, defesa prévia (Lei 11.343, art. 55) com desclassificação e tráfico privilegiado (art. 33, §4º).
4. **Memoriais:** preliminares; absolvição pelo inciso do art. 386; subsidiários: desclassificação, dosimetria (CP arts. 59 e 68), regime (art. 33), substituição (art. 44), sursis (art. 77), detração (CPP art. 387, §2º), recorrer solto (art. 387, §1º).
5. **Apelação:** interposição e razões; hipótese do art. 593; no júri, efeito devolutivo preso aos fundamentos da interposição (Súmula 713 do STF) e as quatro alíneas do inciso III. Apelação do réu conhece-se sem prisão (Súmula 347 do STJ).
6. **RESE:** hipótese do art. 581; retratação (art. 589). Na decisão sobre prisão (inciso V), pede-se efeito suspensivo ou ativo ao tribunal (art. 584, §4º).
7. **Execução (SEEU):** progressão (LEP art. 112, **pela redação do tempo do fato**: ver §8), livramento (CP art. 83), remição (LEP art. 126, §9º para o domiciliar), detração (CP art. 42), indulto [conferir decreto do ano], unificação (CP art. 75). Data-base, fração e prova. Agravo em 5 dias (Súmula 700 do STF; a Súmula 699 trata de agravo da Lei 8.038, não de execução).
8. **Queixa-crime:** CPP art. 41, procuração com poderes especiais (art. 44), em 6 meses, ou 12 na violência doméstica contra a mulher (Lei 15.438/2026). Injúria por raça, cor, etnia ou procedência nacional não é queixa: é a Lei 7.716, art. 2º-A, ação pública (Lei 14.532/2023). Calúnia, difamação e injúria pelo fato determinado (CP 138, 139, 140).
9. **Acordos:** transação (Lei 9.099, art. 76), sursis processual (art. 89), ANPP (CPP art. 28-A: sem violência ou grave ameaça, pena mínima abaixo de 4 anos, confissão; vedações do §2º; recusa do MP vai ao órgão superior, §14; recusa de homologar, RESE do art. 581, XXV). Violência doméstica contra a mulher fica de fora de todos.

## 4. Teses e provas recorrentes

- **Prisão e prova:** flagrante fora do art. 302; busca pessoal sem fundada suspeita (art. 244) [buscar: fundada suspeita]; domicílio sem mandado [buscar: ingresso em domicílio]; reconhecimento fora do art. 226 [buscar: reconhecimento pessoal]; cadeia de custódia (arts. 158-A a 158-F). Prova: auto de prisão, câmera corporal, laudo.
- **Pena:** processo em curso não agrava a pena-base (Súmula 444 do STJ) nem afasta tráfico privilegiado (Tema 1139 do STJ); pena no mínimo não admite regime mais grave pela gravidade abstrata (Súmula 440 do STJ).
- **Defesa:** falta anula; deficiência, só com prejuízo (Súmula 523 do STF). Acesso ao inquérito: Súmula Vinculante 14.
- **HC:** instrução encerrada supera excesso de prazo (Súmula 52 do STJ); sentença prejudica HC de trancamento (Súmula 648 do STJ); liminar negada em tribunal superior (Súmula 691 do STF).
- **ANPP:** a confissão segue sendo requisito do art. 28-A, mas não precisa ter sido feita no inquérito: formaliza-se na assinatura do acordo, com defesa técnica (STJ, Tema 1303, BNP 13/08/2026). Processos em curso em 18/09/2024: o MP se manifesta motivadamente na primeira oportunidade, até o trânsito em julgado (STJ, Tema 1098; STF, HC 185.913). Investigação ou ação iniciada depois: cabe antes do recebimento da denúncia e no curso da ação. Só peça ANPP se o cliente decidir admitir o fato; com tese de negativa, em caráter subsidiário e com aviso.
- **Júri:** condenação executa na hora, qualquer pena (Tema 1068 do STF).
- **Execução:** falta grave interrompe a progressão (Súmula 534 do STJ) e exige PAD com defesa técnica (Súmula 533 do STJ) [buscar: audiência de justificação supre PAD]; sem vaga, sem regime mais grave (Súmula Vinculante 56).
- **Violência doméstica:** sem transação nem sursis processual (Súmula 536 do STJ).

## 5. Checklist de documentos

1. **Flagrante.** Cliente: documento, residência, trabalho, filhos, laudo médico. Escritório: auto de prisão, BNMP, antecedentes, pedido.
2. **Ação penal.** Cliente: denúncia, citação com data, testemunhas, mídias com origem. Escritório: autos e mídias, ficha, resposta.
3. **HC.** Cliente: decisão atacada. Escritório: prova documentada da ilegalidade, inicial.
4. **Execução.** Cliente: atestados de conduta, trabalho e estudo. Escritório: guia, cálculo do SEEU, faltas, pedido.
5. **Queixa.** Cliente: print com endereço e data ou ata notarial, data da ciência, testemunhas. Escritório: procuração especial, queixa.

## 6. Onde pesquisar

Legislação: planalto.gov.br · STF: jurisprudencia.stf.jus.br · STJ: scon.stj.jus.br · Intimações: comunica.pje.jus.br · Execução: seeu.pje.jus.br · Mandados: portalbnmp.cnj.jus.br · TJ, TRF e Turma Recursal: site do tribunal.

## 7. Como se escreve

- Nome por fase: investigado, acusado, autor do fato (JECrim), querelado, paciente (HC), sentenciado.
- A defesa escreve "a denúncia imputa", nunca "o crime do réu" nem "criminoso".
- "RÉU PRESO" no topo, e a peça abre pelo pedido de liberdade. Depoimento entre aspas, com o minuto da mídia.

## 8. Onde a IA mais erra

- **Dias úteis:** é corrido, até no JECrim. **Recesso** não suspende prazo de réu preso (art. 798-A, I).
- **Progressão (LEP art. 112) por data do fato.** Lei mais grave só vale pra fato posterior (CF art. 5º, XL): pergunte a data do fato e cite o inciso da redação aplicável. Janelas: fato até 22/01/2020 (redação anterior à Lei 13.964/2019, `[conferir]`); de 23/01/2020 a 24/03/2026 (Lei 13.964); de 25/03 a 07/05/2026 (Lei 15.358/2026, que subiu V a VIII para 70%, 75%, 80% e 85% e revogou o VI-A); desde 08/05/2026 (Lei 15.402/2026: caput 1/6; I 25% primário com violência ou grave ameaça; II 30% reincidente com violência ou grave ameaça; III 20% reincidente em outro crime; IX e X vetados; Planalto compilado, 20/10/2026). Roubo primário: inciso III para fato antigo, I para fato desde 08/05/2026. O caput de 1/6 (16,67%) é um pouco mais gravoso que os 16% do antigo inciso I, então não retroage para o fato de 2020 a 2026 (`[conferir]`). O inciso IV ainda aparece no compilado; sua sobrevivência é `[conferir]`. A Lei 15.402 foi promulgada após derrubada de veto e é questionada no STF. Exame criminológico no §1º (Lei 14.843/2024); fato anterior a 11/04/2024 e Temas 1408, 1381 e 1319 do STF seguem em aberto.
- **Conta.** A IA não calcula pena, prescrição, progressão nem remição: lista pena, data-base, detração, remição, faltas e marcos (CP arts. 115 e 117) e diz que a conta é do advogado ou do SEEU.
- **Excesso de prazo:** o art. 5º, §4º, da Lei 15.358 vale só para os prazos do inquérito dos crimes da própria lei; não o estenda a todo excesso. O que vale para todo processo é a tese das ADIs 6.581 e 6.582 sobre o art. 316, p. ú. (o atraso na revisão não solta sozinho; `[conferir]`). **ANPP** não cabe onde cabe transação nem em violência doméstica (art. 28-A, §2º, I e IV). **Preventiva** ignora as Leis 15.272/2025 (arts. 310, §5º, e 312, §§3º e 4º), 15.358/2026 e 15.487/2026. **Fiança:** a Súmula 81 do STJ é anterior à Lei 12.403/2011; a vedação hoje é a dos arts. 323 e 324.
- **Prazo vencido:** apelação, queixa (decadência) e recurso ordinário em HC costumam chegar com prazo provavelmente vencido; liste como vencido no topo e diga o efeito (régua do `SKILL.md`).
- **Dado penal.** A LGPD não lista antecedente criminal como dado sensível (art. 5º, II), mas trate como se listasse: sigilo profissional e segredo (CPP art. 20; CP art. 234-B; ECA art. 143). Iniciais de cliente, vítima e testemunha; sem CPF, endereço, laudo ou facção. O que o cliente contou em sigilo entra como "versão do cliente", nunca como fato. Nada disso vai pro perfil do escritório.

## 9. Como as outras skills usam este módulo

- `ficha-do-caso`: preso ou solto e desde quando, data do fato, tipo penal com penas mínima e máxima, rito, fase, acordos cabíveis.
- `peca-a-partir-da-ficha`: estrutura da seção 3 dentro do modelo do escritório.
- `gestao-de-prazos-e-intimacoes`: art. 798 corrido, exceções do art. 798-A, prazo em horas; prazo provavelmente vencido vai no topo.
- `pesquisa-jurisprudencial`: STJ e STF; no JECrim, Turma Recursal.
- `analise-de-risco-e-prognostico`: autoria, materialidade, nulidades, antecedentes, pena em faixa, acordos.
- `documentos-procuracao-e-honorarios`: seção 5; poderes especiais pra queixa (art. 44), suspeição (art. 98) e falsidade (art. 146).
- `preparacao-de-audiencia`: custódia discute a prisão, não o mérito; o réu fala por último (art. 400) e pode calar.
- `triagem-de-lead-e-caso-novo`: preso ou solto, desde quando, prazo correndo, violência doméstica. O relato do crime não vem por WhatsApp.

*Módulo revisado em 20/10/2026 (v2.2) com CPP e LEP (Câmara e Planalto), Leis 15.358, 15.402, 15.438 e 15.487/2026, BNP/CNJ de 19/10/2026 e a conferência do pacote Penal do Pro. Lei, súmula e tema mudam: o que está `[conferir]` não foi aberto na fonte.*
