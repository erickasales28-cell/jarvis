# Advoclaude · Módulos de área (2 de 3): previdenciário, penal

Este arquivo reúne 2 módulos de área. Cada um começa num título "MÉTODO:". Abra só o da área que o perfil do escritório lista em "Módulos de área", antes de peça, prazo, pesquisa, risco, checklist ou audiência. Cada módulo é ponto de partida, não verdade final: prazo, artigo e súmula quem confere é o advogado.

Índice
- MÉTODO: Área previdenciário (area-previdenciario): RGPS e BPC, INSS, JEF, CRPS
- MÉTODO: Área penal (area-penal): criminal, execução penal, juizado criminal

Os outros módulos estão em `08-areas-civel-familia-trabalhista.md` e `10-areas-tributario-empresarial-eleitoral-administrativo.md`.

---

## MÉTODO: Área previdenciário (area-previdenciario)


Quando usar: Use quando o perfil do escritório disser que ele atua em Direito Previdenciário e a tarefa for ficha, peça, prazo, pesquisa, risco, checklist de documentos ou audiência dessa área. É o módulo da área: rito, prazos, peças, teses, fontes e armadilhas que as outras skills do Advoclaude leem antes de trabalhar.


Leia antes de qualquer caso contra o INSS. Regra de vara e regra de juizado ficam separadas: no JEF mudam o prazo do INSS, o recurso e o reexame. Com o pacote Previdenciário do Pro instalado, a skill da peça (`requerimento-administrativo-inss`, `recurso-ao-crps`, `inicial-beneficio-por-incapacidade`, `inicial-bpc-loas`, `inicial-aposentadoria`, `pensao-por-morte`, `salario-maternidade`, `revisao-de-beneficio`, `quesitos-para-pericia`, `impugnacao-ao-laudo-pericial`) aprofunda e prevalece onde divergir.

### 1. Onde a área corre

- **Administrativo primeiro.** Requerimento no Meu INSS; recurso ordinário à Junta de Recursos do CRPS (Decreto 3.048/1999, art. 305). Sem requerimento não há interesse de agir (STF, Tema 350), salvo revisão, restabelecimento ou manutenção de benefício, ou entendimento notório contrário do INSS. O requerimento precisa ser apto. Tema 1124 do STJ (acórdão de 06/11/2025): pedido sem documentação mínima ("indeferimento forçado") não gera interesse de agir; pedido apto mas insuficiente obriga o INSS a intimar para complementar, e, se não o fez, o interesse existe; levar a juízo os mesmos fatos e provas do processo administrativo mantém o interesse, e prova nova exige novo requerimento; a DIB é a da DER ou, com prova só judicial, a da citação (texto no BNP/CNJ, 19/10/2026). Novo pedido do mesmo benefício depende do art. 576-A da IN 128/2022 (IN 208/2026), lido só em fonte secundária: `[conferir]`.
- **JEF** (Lei 10.259/2001): até 60 salários mínimos, somando vencidas e 12 vincendas (art. 3º, §2º); competência absoluta onde houver JEF (art. 3º, §3º). Pode renunciar ao excedente (STJ, Tema 1030). Recurso à Turma Recursal; uniformização na TRU e na TNU.
- **Vara federal** (CPC): acima de 60 SM sem renúncia, e mandado de segurança, que não cabe no JEF (Lei 10.259, art. 3º, §1º, I). Apelação ao TRF.
- **Competência delegada** (CF, art. 109, §3º; Lei 5.010/1966, art. 15, III, redação da Lei 13.876/2019): vara estadual só se a comarca do domicílio fica a mais de 70 km de município sede de vara federal. Recurso ao TRF (CF, art. 109, §4º).
- **Acidente do trabalho:** Justiça Estadual (CF, art. 109, I).
- **Sistemas:** PJe no TRF1, TRF3 e TRF5; eproc no TRF2, TRF4 e TRF6; na delegada, o do TJ (vários migram para o eproc).
- **Escolha:** domicílio, natureza (acidentária ou não) e valor da causa calculado pelo advogado.

### 2. Prazos que mais aparecem

| Ato | Prazo | Base | Dias | Observação |
|---|---|---|---|---|
| Recurso ao CRPS e contrarrazões | 30 dias | Decreto 3.048, art. 305, §1º; RICRPS, arts. 61 e 62 | contínuos (corridos); a versão original contava em úteis, e a Portaria MPS 2.393/2023 mudou | da ciência da decisão; embargos em 10 dias (RICRPS, art. 75); ação judicial com mesmo objeto = renúncia ao recurso (Decreto 3.048, art. 307) |
| Prorrogação do auxílio por incapacidade | antes da DCB | Lei 8.213, art. 60, §§8º e 9º | | sem DCB fixada, cessa em 120 dias |
| Pensão com início no óbito | 90 dias; 180 para filho menor de 16 | Lei 8.213, art. 74, I | corridos | depois, início na DER (inc. II) |
| Revisão do ato de concessão | 10 anos | Lei 8.213, art. 103 | corridos | indeferimento e cessação sem decadência (STF, ADI 6096) |
| Parcelas vencidas | 5 anos | art. 103, parágrafo único | corridos | não corre contra menor, incapaz, ausente |
| Recurso inominado e contrarrazões | 10 dias | Lei 9.099/1995, art. 42 | úteis | INSS sem dobro (Lei 10.259, art. 9º) |
| Embargos de declaração no JEF | 5 dias | Lei 9.099, art. 49 | úteis | |
| Uniformização à TNU e contrarrazões | 15 dias | RITNU (Res. CJF 586/2019), art. 12 | úteis | agravo da inadmissão: 15 dias (art. 14, §2º) |
| Apelação e contrarrazões | 15 dias | CPC, art. 1.003, §5º | úteis | INSS em dobro (art. 183) |
| RPV no JEF | 60 dias da requisição | Lei 10.259, art. 17 | `[conferir]` | teto de 60 SM (§1º) |
| Análise do INSS (Atestmed e documental) | 30 dias | Lei 8.213, art. 73-A (Lei 15.415/2026, salário-maternidade, com concessão provisória) e art. 60, §§11-F a 11-I (Lei 15.265/2025, incapacidade) | | portarias de 2026 ampliaram o Atestmed (fonte secundária, `[conferir]`) |

Contagem: JEF em dias úteis (Lei 9.099, art. 12-A), sem reexame necessário (Lei 10.259, art. 13); vara e delegada pelo CPC (art. 219).

### 3. Peças mais comuns (esqueleto)

1. **Requerimento administrativo:** espécie certa, documentos completos, benefício mais vantajoso, reafirmação da DER.
2. **Recurso ao CRPS:** tempestividade, cada motivo do indeferimento, prova nova, pedido de nova perícia.
3. **Inicial por incapacidade:** o que o art. 129-A da Lei 8.213 exige (doença e limitações, atividade, falhas da perícia do INSS, ação anterior) e os documentos dele (indeferimento ou cessação, acidente, documentação médica). Quesitos, tutela, DII, DIB, DCB.
4. **Inicial de aposentadoria:** regra pretendida e subsidiárias (EC 103/2019, arts. 15 a 21), períodos controvertidos um a um, reafirmação da DER (STJ, Tema 995).
5. **Inicial de BPC:** 65 anos ou deficiência (Lei 8.742/1993, art. 20), grupo familiar (§3º-A), CadÚnico, biometria, perícia médica e avaliação social.
6. **Inicial de pensão por morte:** qualidade de segurado no óbito (Lei 8.213, art. 15), dependência (art. 16), início (art. 74), duração (art. 77), cotas (EC 103, art. 23).
7. **Manifestação sobre o laudo:** omissão, contradição, quesito sem resposta; esclarecimento ou nova perícia.
8. **Recurso inominado:** tempestividade, gratuidade, pedido a pedido, questão de direito posta para a uniformização.
9. **Pedido de uniformização:** só direito material, paradigma de outra região ou entendimento dominante do STJ ou da TNU, cotejo analítico, cópia do paradigma (RITNU, art. 14, V).
10. **Apelação:** capítulos atacados, DIB, correção, honorários.
11. **Mandado de segurança por demora:** omissão além dos prazos do acordo homologado no RE 1.171.152 (05/02/2021). O Tema 1066 do STF consta **cancelado** no BNP/CNJ (19/10/2026): não o cite como tese vigente. Prazos por benefício e vigência atual do acordo: `[conferir]`; a Lei 15.415/2026 (art. 73-A) fixa 30 dias para o salário-maternidade.

### 4. Teses, pedidos e provas recorrentes

- **Incapacidade** (Lei 8.213, arts. 42, 59, 86): decidem a perícia, o laudo com data de início e a qualidade de segurado e carência na DII (arts. 15, 25, I, e 26, II). Cálculo da aposentadoria por incapacidade permanente pós-reforma é constitucional (STF, Tema 1300). Condições pessoais: `[buscar: súmula TNU]`.
- **Especial:** PPP e LTCAT; ruído pelo NEN (STJ, Tema 1083); conversão em comum só até a EC 103 (art. 25, §2º). EPI eficaz: STF Tema 555 e STJ Tema 1090 (09/04/2025, EPI no PPP). Vigilante não é especial depois da EC 103: STF Tema 1209 (acórdão de 18/02/2026; embargos `[conferir]`). Contribuição abaixo do mínimo e qualidade de segurado: STF Tema 1467, afetado.
- **Rural:** prova material com testemunhas; tempo anterior ao documento mais antigo (STJ, Tema 638); híbrida (STJ, Tema 1007).
- **União estável na pensão:** prova material dos 24 meses antes do óbito (art. 16, §5º); para a duração pela tabela de idade, prova de 2 anos de união (§6º e art. 77, §2º, V, c).
- **Pensão por morte:** a cota da EC 103, art. 23, é de 50% mais 10 pontos por dependente, até 100%; a cota que acaba não se reverte aos demais (§1º), e o dependente inválido ou com deficiência grave tem regra própria (§2º). O art. 75 da Lei 8.213 ainda mostra 100% no texto: a IA erra aqui. Duração por idade (art. 77): a lei compilada traz 44 anos, o INSS aplica a tabela com vitalícia a partir de 45 para óbito desde 01/01/2021 (portaria ministerial; número e data só em fonte secundária, `[conferir]`). Menor sob guarda: Lei 8.213, art. 16, §2º (Lei 15.108/2025). Detalhe na skill `pensao-por-morte`.
- **Salário-maternidade:** a carência de 10 meses da contribuinte individual, facultativa e especial é inconstitucional (STF, ADI 2.110 e 2.111, 21/03/2024; INSS e CRPS já a afastam, Enunciado 19 do CRPS). Prazo do INSS: art. 73-A (Lei 15.415/2026). Internação: Lei 15.222/2025.
- **BPC:** renda per capita abaixo de 1/4 do salário mínimo presume a miserabilidade, mas não é o único meio de prova (STJ, Tema 185); o art. 20, §3º, como requisito obrigatório é inconstitucional (STF, Tema 27); renda de quem vive sob o mesmo teto, sem dedução fora da lei (art. 20, §3º-A, Lei 15.077/2024, com a ressalva do §14). O Decreto 12.534/2025 (25/06/2025) revogou a exclusão de transferências de renda do cálculo. CadÚnico e biometria: art. 20, §§12 a 12-B. Detalhe na skill `inicial-bpc-loas`.
- **Revisão da vida toda:** superada (STF, Tema 1102 e ADIs 2.110 e 2.111; sessão virtual dos embargos encerrada em 25/11/2025). Decadência: o art. 103 compilado e o Decreto 3.048, art. 347, ainda trazem "indeferimento, cancelamento ou cessação", que a ADI 6096 declarou inconstitucional: sem decadência na revisão de indeferimento (Tema 313: 10 anos para revisar a concessão).
- **Tutela revogada:** devolve, com desconto de até 30% (STJ, Tema 692).
- **Honorários:** Súmula 111 do STJ (texto no BNP). O Tema 1105 do STJ não foi conferido: `[conferir]`.

### 5. Checklist de documentos

- **Incapacidade.** Cliente: documentos pessoais, CTPS, CNIS, laudos, exames, atestados com data, CAT se acidente, carta do INSS. Escritório: linha do tempo médica, quesitos.
- **Aposentadoria urbana.** Cliente: CTPS, carnês, CNIS, contracheques. Escritório: quadro de períodos com pendências do CNIS e regras a testar.
- **Especial ou rural.** Cliente: PPP, LTCAT; ou documentos rurais próprios e da família, nomes de testemunhas. Escritório: autodeclaração rural, rol.
- **BPC.** Cliente: documentos e renda de todos da casa, CadÚnico atualizado, laudos, comprovante de residência. Escritório: quadro do grupo familiar.
- **Pensão por morte.** Cliente: certidão de óbito, documentos do falecido, prova do casamento ou da união, certidões dos filhos. Escritório: quadro de dependentes e da prova por data.

### 6. Onde pesquisar

- Meu INSS: meu.inss.gov.br (requerimento, CNIS, processo administrativo)
- STJ, repetitivos: processo.stj.jus.br/repetitivos
- STF, repercussão geral: portal.stf.jus.br `[conferir]`
- TNU: cjf.jus.br, Corregedoria da Justiça Federal, Turma Nacional de Uniformização (temas representativos e regimento)
- TRFs: trf1.jus.br, trf2.jus.br, web.trf3.jus.br, trf4.jus.br, trf5.jus.br, portal.trf6.jus.br `[conferir]`
- Legislação: planalto.gov.br `[conferir]`
- Intimações: comunica.pje.jus.br

### 7. Como se escreve nesta área

- Nomes pós-reforma: auxílio por incapacidade temporária, aposentadoria por incapacidade permanente. Cite espécie e NB.
- Vocabulário: DER, DIB, DII, DCB, RMI, carência, qualidade de segurado, período de graça.
- O JEF lê rápido: peça curta, pedido certo (espécie, DIB, DCB, tutela), períodos em tabela, documento pelo evento.
- Fato médico vem do laudo, com data. Não escreva diagnóstico que o laudo não traz.

### 8. Onde a IA mais erra

- Regra de vara no JEF: dobro do INSS, reexame, recurso de interlocutória (Lei 10.259, arts. 5º, 9º, 13).
- Acidentário na Justiça Federal; delegada sem conferir os 70 km.
- Regra superada: vida toda, conversão de especial depois de 13/11/2019, decadência no indeferimento, Tema 1066 do STF (cancelado).
- Transição da EC 103 muda a cada ano (arts. 15 e 16): diga a regra e o ano, e o advogado confere.
- Cota da pensão: 100% do art. 75 da Lei 8.213 não vale; vale a EC 103, art. 23.
- **Cálculo:** tempo de contribuição, pedágio, RMI, atrasados, renda per capita e valor da causa são do advogado ou do sistema de cálculo. A IA lista o que entra.
- Atestmed: a regra de 30 dias está nos §§11-F a 11-I do art. 60 (Lei 15.265/2025), com exceção por ato do Executivo; confira a portaria vigente `[conferir]`.
- Dado sensível: CID, laudo, criança, renda da família. Iniciais na ficha, laudo anonimizado, nada disso no perfil.

### 9. Como as outras skills usam este módulo

- `ficha-do-caso`: NB, espécie, DER, DIB, DII, DCB, qualidade de segurado, carência, pendências do CNIS, fase administrativa.
- `peca-a-partir-da-ficha`: seção 3; art. 129-A na inicial por incapacidade.
- `gestao-de-prazos-e-intimacoes`: seção 2; JEF em úteis e sem dobro.
- `pesquisa-jurisprudencial`: STF, STJ, TNU e o TRF da região.
- `analise-de-risco-e-prognostico`: laudo, prova material, Tema 1124, devolução de tutela.
- `documentos-procuracao-e-honorarios`: seção 5; poderes para requerer no INSS, renunciar ao excedente e receber.
- `preparacao-de-audiencia`: JEF, até 3 testemunhas (Lei 9.099, art. 34); rural e união estável se decidem ali.
- `triagem-de-lead-e-caso-novo`: pediu no INSS? Tem a carta? Contribuiu até quando? Tem laudo com data? Mora perto de vara federal?

*Módulo revisado em 20/10/2026 (v2.2) com Lei 8.213, EC 103, Lei 8.742, Decreto 3.048 e RICRPS (Planalto e gov.br), Leis 15.108/2025, 15.265/2025 e 15.415/2026, BNP/CNJ de 19/10/2026 e a conferência do pacote Previdenciário do Pro. INs do INSS de 2026, portarias do Atestmed, tabela de duração da pensão (número da portaria) e Súmulas da TNU (CJF não abriu) ficaram `[conferir]`.*

---

## MÉTODO: Área penal (area-penal)


Quando usar: Use quando o perfil do escritório disser que ele atua em direito penal (criminal, execução penal, juizado criminal) e a tarefa for ficha, peça, prazo, pesquisa, risco, checklist de documentos ou audiência dessa área. É o módulo da área: rito, prazos, peças, teses, fontes e armadilhas que as outras skills do Advoclaude leem antes de trabalhar.


Aqui o prazo corre em dias corridos, e a custódia, em horas. A data do fato decide a lei que vale. Este módulo é o mapa de rito e prazo; com o pacote Penal do Pro instalado, a skill da peça (`resposta-a-acusacao`, `habeas-corpus`, `liberdade-provisoria-e-revogacao-da-preventiva`, `alegacoes-finais-memoriais`, `apelacao-criminal`, `acordo-de-nao-persecucao-penal`, `queixa-crime`, `defesa-no-juizado-especial-criminal`, `agravo-em-execucao-e-progressao`) aprofunda e prevalece onde divergir.

### 1. Onde a área corre

- **Estadual:** varas criminais, júri, violência doméstica, execução, JECrim e Turma Recursal. **Federal:** CF art. 109, IV a VI e IX (contravenção nunca). **Eleitoral:** Código Eleitoral, arts. 355 a 364. **STJ** (5ª e 6ª Turmas) em lei federal; **STF** em Constituição.
- **Sistemas:** PJe, eproc, e-SAJ ou Projudi, conforme o tribunal. Execução no SEEU. Mandados no BNMP.
- **Ritos (CPP art. 394):** ordinário (pena máxima de 4 anos ou mais), sumário (menos de 4), sumaríssimo (Lei 9.099/1995, art. 61: até 2 anos e contravenção), júri (arts. 406 a 497). Especiais: drogas (Lei 11.343/2006, arts. 54 a 59), funcionais (arts. 513 a 518), honra (arts. 519 a 523), violência doméstica (Lei 11.340/2006).
- **Como se escolhe:** a pena máxima decide rito e JECrim. Violência doméstica contra a mulher nunca vai ao JECrim (Lei 11.340, art. 41). Réu não achado ou caso complexo sai do JECrim (Lei 9.099, arts. 66, p. ú., e 77, §2º). Doloso contra a vida vai ao júri, salvo, na conexão, homicídio por membro de facção ou milícia (CPP art. 78, I, Lei 15.358/2026) [conferir posição do STF].
- **Juiz das garantias** (arts. 3º-B a 3º-F): fora do júri, da violência doméstica, do JECrim e da competência originária. Confira a comarca. A competência dele cessa com o **oferecimento** da denúncia, e não com o recebimento como diz o texto do art. 3º-C (interpretação conforme do STF nas ADIs do Pacote Anticrime, 2023; fonte secundária, `[conferir]`).

### 2. Prazos que mais aparecem

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

### 3. As peças mais comuns

1. **Relaxamento, liberdade ou revogação da preventiva:** prisão ilegal (CF art. 5º, LXV; CPP art. 310, I); liberdade e cautelares (arts. 321 e 319); falta de requisito (arts. 312 e 313, incluídos o V da Lei 15.358/2026 e o VI da Lei 15.487/2026), de contemporaneidade (art. 312, §2º), ou só gravidade abstrata (art. 312, §4º, Lei 15.272/2025); reincidente e afins: art. 310, §§2º e 5º; domiciliar (arts. 318 e 318-A). O juiz não converte flagrante em preventiva de ofício (Súmula 676 do STJ). Custódia: entrevista reservada (art. 310, §§7º a 13) e DNA (art. 310-A). Detalhe na skill de liberdade.
2. **Habeas corpus:** impetrante, paciente, autoridade coatora; tribunal pela autoridade; hipótese do CPP art. 648; prova pré-constituída; liminar. Concessão de ofício mesmo sem conhecer (art. 647-A, Lei 14.836/2024). Contra HC denegado por TJ/TRF cabe recurso ordinário em 5 dias, e HC substitutivo só pede concessão de ofício. HC contra Turma Recursal vai ao TJ/TRF (a Súmula 690 do STF consta vigente no BNP, mas o STF não a aplica desde 2007; não citar, `[conferir]`).
3. **Resposta à acusação** (arts. 396-A e 397): preliminares, absolvição sumária, documentos, testemunhas (8 no ordinário, art. 401; 5 no sumário, art. 532). Nas drogas, defesa prévia (Lei 11.343, art. 55) com desclassificação e tráfico privilegiado (art. 33, §4º).
4. **Memoriais:** preliminares; absolvição pelo inciso do art. 386; subsidiários: desclassificação, dosimetria (CP arts. 59 e 68), regime (art. 33), substituição (art. 44), sursis (art. 77), detração (CPP art. 387, §2º), recorrer solto (art. 387, §1º).
5. **Apelação:** interposição e razões; hipótese do art. 593; no júri, efeito devolutivo preso aos fundamentos da interposição (Súmula 713 do STF) e as quatro alíneas do inciso III. Apelação do réu conhece-se sem prisão (Súmula 347 do STJ).
6. **RESE:** hipótese do art. 581; retratação (art. 589). Na decisão sobre prisão (inciso V), pede-se efeito suspensivo ou ativo ao tribunal (art. 584, §4º).
7. **Execução (SEEU):** progressão (LEP art. 112, **pela redação do tempo do fato**: ver §8), livramento (CP art. 83), remição (LEP art. 126, §9º para o domiciliar), detração (CP art. 42), indulto [conferir decreto do ano], unificação (CP art. 75). Data-base, fração e prova. Agravo em 5 dias (Súmula 700 do STF; a Súmula 699 trata de agravo da Lei 8.038, não de execução).
8. **Queixa-crime:** CPP art. 41, procuração com poderes especiais (art. 44), em 6 meses, ou 12 na violência doméstica contra a mulher (Lei 15.438/2026). Injúria por raça, cor, etnia ou procedência nacional não é queixa: é a Lei 7.716, art. 2º-A, ação pública (Lei 14.532/2023). Calúnia, difamação e injúria pelo fato determinado (CP 138, 139, 140).
9. **Acordos:** transação (Lei 9.099, art. 76), sursis processual (art. 89), ANPP (CPP art. 28-A: sem violência ou grave ameaça, pena mínima abaixo de 4 anos, confissão; vedações do §2º; recusa do MP vai ao órgão superior, §14; recusa de homologar, RESE do art. 581, XXV). Violência doméstica contra a mulher fica de fora de todos.

### 4. Teses e provas recorrentes

- **Prisão e prova:** flagrante fora do art. 302; busca pessoal sem fundada suspeita (art. 244) [buscar: fundada suspeita]; domicílio sem mandado [buscar: ingresso em domicílio]; reconhecimento fora do art. 226 [buscar: reconhecimento pessoal]; cadeia de custódia (arts. 158-A a 158-F). Prova: auto de prisão, câmera corporal, laudo.
- **Pena:** processo em curso não agrava a pena-base (Súmula 444 do STJ) nem afasta tráfico privilegiado (Tema 1139 do STJ); pena no mínimo não admite regime mais grave pela gravidade abstrata (Súmula 440 do STJ).
- **Defesa:** falta anula; deficiência, só com prejuízo (Súmula 523 do STF). Acesso ao inquérito: Súmula Vinculante 14.
- **HC:** instrução encerrada supera excesso de prazo (Súmula 52 do STJ); sentença prejudica HC de trancamento (Súmula 648 do STJ); liminar negada em tribunal superior (Súmula 691 do STF).
- **ANPP:** a confissão segue sendo requisito do art. 28-A, mas não precisa ter sido feita no inquérito: formaliza-se na assinatura do acordo, com defesa técnica (STJ, Tema 1303, BNP 13/08/2026). Processos em curso em 18/09/2024: o MP se manifesta motivadamente na primeira oportunidade, até o trânsito em julgado (STJ, Tema 1098; STF, HC 185.913). Investigação ou ação iniciada depois: cabe antes do recebimento da denúncia e no curso da ação. Só peça ANPP se o cliente decidir admitir o fato; com tese de negativa, em caráter subsidiário e com aviso.
- **Júri:** condenação executa na hora, qualquer pena (Tema 1068 do STF).
- **Execução:** falta grave interrompe a progressão (Súmula 534 do STJ) e exige PAD com defesa técnica (Súmula 533 do STJ) [buscar: audiência de justificação supre PAD]; sem vaga, sem regime mais grave (Súmula Vinculante 56).
- **Violência doméstica:** sem transação nem sursis processual (Súmula 536 do STJ).

### 5. Checklist de documentos

1. **Flagrante.** Cliente: documento, residência, trabalho, filhos, laudo médico. Escritório: auto de prisão, BNMP, antecedentes, pedido.
2. **Ação penal.** Cliente: denúncia, citação com data, testemunhas, mídias com origem. Escritório: autos e mídias, ficha, resposta.
3. **HC.** Cliente: decisão atacada. Escritório: prova documentada da ilegalidade, inicial.
4. **Execução.** Cliente: atestados de conduta, trabalho e estudo. Escritório: guia, cálculo do SEEU, faltas, pedido.
5. **Queixa.** Cliente: print com endereço e data ou ata notarial, data da ciência, testemunhas. Escritório: procuração especial, queixa.

### 6. Onde pesquisar

Legislação: planalto.gov.br · STF: jurisprudencia.stf.jus.br · STJ: scon.stj.jus.br · Intimações: comunica.pje.jus.br · Execução: seeu.pje.jus.br · Mandados: portalbnmp.cnj.jus.br · TJ, TRF e Turma Recursal: site do tribunal.

### 7. Como se escreve

- Nome por fase: investigado, acusado, autor do fato (JECrim), querelado, paciente (HC), sentenciado.
- A defesa escreve "a denúncia imputa", nunca "o crime do réu" nem "criminoso".
- "RÉU PRESO" no topo, e a peça abre pelo pedido de liberdade. Depoimento entre aspas, com o minuto da mídia.

### 8. Onde a IA mais erra

- **Dias úteis:** é corrido, até no JECrim. **Recesso** não suspende prazo de réu preso (art. 798-A, I).
- **Progressão (LEP art. 112) por data do fato.** Lei mais grave só vale pra fato posterior (CF art. 5º, XL): pergunte a data do fato e cite o inciso da redação aplicável. Janelas: fato até 22/01/2020 (redação anterior à Lei 13.964/2019, `[conferir]`); de 23/01/2020 a 24/03/2026 (Lei 13.964); de 25/03 a 07/05/2026 (Lei 15.358/2026, que subiu V a VIII para 70%, 75%, 80% e 85% e revogou o VI-A); desde 08/05/2026 (Lei 15.402/2026: caput 1/6; I 25% primário com violência ou grave ameaça; II 30% reincidente com violência ou grave ameaça; III 20% reincidente em outro crime; IX e X vetados; Planalto compilado, 20/10/2026). Roubo primário: inciso III para fato antigo, I para fato desde 08/05/2026. O caput de 1/6 (16,67%) é um pouco mais gravoso que os 16% do antigo inciso I, então não retroage para o fato de 2020 a 2026 (`[conferir]`). O inciso IV ainda aparece no compilado; sua sobrevivência é `[conferir]`. A Lei 15.402 foi promulgada após derrubada de veto e é questionada no STF. Exame criminológico no §1º (Lei 14.843/2024); fato anterior a 11/04/2024 e Temas 1408, 1381 e 1319 do STF seguem em aberto.
- **Conta.** A IA não calcula pena, prescrição, progressão nem remição: lista pena, data-base, detração, remição, faltas e marcos (CP arts. 115 e 117) e diz que a conta é do advogado ou do SEEU.
- **Excesso de prazo:** o art. 5º, §4º, da Lei 15.358 vale só para os prazos do inquérito dos crimes da própria lei; não o estenda a todo excesso. O que vale para todo processo é a tese das ADIs 6.581 e 6.582 sobre o art. 316, p. ú. (o atraso na revisão não solta sozinho; `[conferir]`). **ANPP** não cabe onde cabe transação nem em violência doméstica (art. 28-A, §2º, I e IV). **Preventiva** ignora as Leis 15.272/2025 (arts. 310, §5º, e 312, §§3º e 4º), 15.358/2026 e 15.487/2026. **Fiança:** a Súmula 81 do STJ é anterior à Lei 12.403/2011; a vedação hoje é a dos arts. 323 e 324.
- **Prazo vencido:** apelação, queixa (decadência) e recurso ordinário em HC costumam chegar com prazo provavelmente vencido; liste como vencido no topo e diga o efeito (régua do `SKILL.md`).
- **Dado penal.** A LGPD não lista antecedente criminal como dado sensível (art. 5º, II), mas trate como se listasse: sigilo profissional e segredo (CPP art. 20; CP art. 234-B; ECA art. 143). Iniciais de cliente, vítima e testemunha; sem CPF, endereço, laudo ou facção. O que o cliente contou em sigilo entra como "versão do cliente", nunca como fato. Nada disso vai pro perfil do escritório.

### 9. Como as outras skills usam este módulo

- `ficha-do-caso`: preso ou solto e desde quando, data do fato, tipo penal com penas mínima e máxima, rito, fase, acordos cabíveis.
- `peca-a-partir-da-ficha`: estrutura da seção 3 dentro do modelo do escritório.
- `gestao-de-prazos-e-intimacoes`: art. 798 corrido, exceções do art. 798-A, prazo em horas; prazo provavelmente vencido vai no topo.
- `pesquisa-jurisprudencial`: STJ e STF; no JECrim, Turma Recursal.
- `analise-de-risco-e-prognostico`: autoria, materialidade, nulidades, antecedentes, pena em faixa, acordos.
- `documentos-procuracao-e-honorarios`: seção 5; poderes especiais pra queixa (art. 44), suspeição (art. 98) e falsidade (art. 146).
- `preparacao-de-audiencia`: custódia discute a prisão, não o mérito; o réu fala por último (art. 400) e pode calar.
- `triagem-de-lead-e-caso-novo`: preso ou solto, desde quando, prazo correndo, violência doméstica. O relato do crime não vem por WhatsApp.

*Módulo revisado em 20/10/2026 (v2.2) com CPP e LEP (Câmara e Planalto), Leis 15.358, 15.402, 15.438 e 15.487/2026, BNP/CNJ de 19/10/2026 e a conferência do pacote Penal do Pro. Lei, súmula e tema mudam: o que está `[conferir]` não foi aberto na fonte.*

