# Advoclaude Pro: núcleo `advo-escritorio` v2.2 (20/10/2026)

Só vai no Advoclaude Pro. O Kit de R$ 27 continua na v2.1 e não foi tocado. Base desta versão: a cópia da v2.1 em `pecas/pacote-pro/advo-escritorio/`. O `name` do SKILL.md continua `advo-escritorio`.

Fontes: relatórios de conferência (`.tmp/conferencia/*.md`), revisões (`.tmp/revisao/*.md`) e testes (`.tmp/testes/*.md`) de 19 e 20/10/2026; BNP/CNJ coletado em 19/10/2026 (`brutos/bnp/`); BRIEF-SKILLS.md §3 e §4. Releitura direta em 20/10/2026 pelo autor desta versão: CC art. 108 e CPP art. 38 (Câmara e Planalto, via WebFetch), LEP art. 112 e Lei 15.402/2026 (Planalto, via r.jina.ai), Lei 15.438/2026 (Planalto), EC 103 art. 23 e art. 26 §2º (Planalto), Lei 9.784 arts. 54 a 69 (Planalto), Lei 14.133 arts. 164, 165, 168 e 183 (Planalto), Lei 11.419 arts. 4º e 5º (Planalto), CPC arts. 183, 224 e 231 (Planalto), mais Grep no BNP (STF RG, STF SUM, STF SV, STJ SUM, STJ RR, TST IRR). O resto vem dos relatórios de conferência, com a fonte e a marca (conferido ou `[conferir]`) que eles deram.

## 1. SKILL.md (roteador)

| Mudança | Fonte |
|---|---|
| Nova seção "Pacotes de área do Pro": 11 pacotes, 93 skills, cada uma com slug e uma linha. Regra: pedido que bate com skill de área instalada usa a skill, que prevalece sobre o módulo e sobre o método genérico, com aviso de divergência em uma linha | BRIEF §2; testes de roteamento (bancario-e-civel-2 §2, administrativo-e-gestao §1, penal §0, imobiliario-e-empresarial §3) |
| Desempate entre skills vizinhas (embargos, monitória, mandado de segurança, negativação, busca e apreensão, lote de intimações × semana, tutela) | testes: colisões B6, B7, C2, C8, MS administrativo × concurso × tributário, da-intimacao × prazos-da-semana |
| Módulo `area-administrativo-e-fazenda` entra na lista de módulos; `area-civel-consumidor-e-imobiliario` passa a dizer "inclui bancário" | relatório administrativo-e-servidor ("não existe módulo area-administrativo") |
| Nova seção "Prazo e ALERTA: a régua única de todos os métodos": conta à mostra com dia do início = dia 1; ALERTA a 5 dias úteis ou menos para prazo processual ou contratual, a 60 dias ou menos (ou janela aberta) para decadência e prescrição; prazo vencido no topo; vencimento em dia não útil com prorrogação e dia útil anterior; contagem incerta = os dois cenários, o mais curto; ALERTA e conta na primeira mensagem, antes das perguntas; linha "Prazo" no plano; consulta barrada na triagem não gera plano | BRIEF §3 (régua única de 20/10); testes imobiliário (D1), bancário/cível 2 (item 1), administrativo e gestão (D1) |
| Regras 5, 6 e novo item 8: súmula e tema conferidos na skill ou no módulo entram pelo número; "valor, pena e benefício não se calculam, prazo se mostra"; ordem de precedência skill de área, módulo, método | testes bancário/cível 2 (item 2), imobiliário (D3) |
| Description do frontmatter lista as áreas e diz que a skill de área prevalece. `name` inalterado | pedido |

## 2. Módulos de área (cada um ganhou no topo a linha de precedência das skills do pacote e no fim a data de conferência: 20/10/2026)

**area-penal**
- Queixa e representação: 12 meses na violência doméstica contra a mulher (CPP 38 §2º, CP 103 p. ú., Lei 11.340 art. 16-A); sem regra de transição na lei, fato anterior a 19/06/2026 conta pelo prazo menor `[conferir]`. Fonte: Lei 15.438/2026, Planalto, lida em 20/10/2026.
- LEP 112 por data do fato, com as quatro janelas (até 22/01/2020; 23/01/2020 a 24/03/2026; 25/03 a 07/05/2026; desde 08/05/2026), caput de 1/6 e incisos I a III da Lei 15.402/2026, VI-A revogado, IX e X vetados, exame criminológico (Lei 14.843/2024), Temas 1408, 1381 e 1319 do STF em aberto. Fonte: LEP e Lei 15.402 (Planalto, 20/10/2026); conferência e teste penal. `[conferir]`: redação anterior a 2020, sobrevivência do inciso IV, ADIs contra a Lei 15.402.
- "Excesso de prazo não solta sozinho" deixa de ser regra geral: o art. 5º §4º da Lei 15.358 vale só para os prazos do inquérito dos crimes da própria lei; a tese das ADIs 6.581 e 6.582 vai no CPP 316 p. ú. (`[conferir]`).
- Preventiva: 310 §§2º, 5º, 7º a 13 e 310-A, 313 V e VI (Leis 15.358 e 15.487/2026), Súmula 676 do STJ; Súmula 81 do STJ como regra de fiança saiu (anterior à Lei 12.403/2011). Fonte: relatórios penal (conferência e revisão), BNP.
- Prazos: Súmula 310 do STF com o texto do BNP (antes `[conferir]`); linhas novas para apelação do ofendido (598, 15 dias), embargos infringentes (609 p. ú., 10 dias), RESE do ANPP (581 XXV) e recurso ordinário em HC (Lei 8.038 art. 30, 5 dias); Súmula 699 retirada do agravo em execução (a 700 fica).
- ANPP: Tema 1303 (confissão pode ser formalizada na assinatura) e Tema 1098 (marco de 18/09/2024), no lugar do HC 185.913 sozinho. Texto lido no BNP em 20/10/2026.
- Juiz das garantias cessa com o oferecimento da denúncia (fonte secundária, `[conferir]`); HC contra Turma Recursal vai ao TJ/TRF e a Súmula 690 do STF, ainda "vigente" no BNP, não se cita (`[conferir]`); injúria racial é a Lei 7.716 art. 2º-A (Lei 14.532/2023); prazo vencido listado no topo.

**area-previdenciario**
- Tema 1066 do STF: cancelado no BNP (vigente=0); o parâmetro de prazo é o acordo do RE 1.171.152 (05/02/2021), vigência atual `[conferir]`.
- Tema 1124 do STJ com o texto novo (indeferimento forçado, dever de intimar, DIB); IN 128 art. 576-A (IN 208/2026) só em fonte secundária `[conferir]`.
- Pensão por morte pela EC 103 art. 23 (50% mais 10 por dependente, sem reversão, regras do §2º; texto lido no Planalto); o art. 75 da Lei 8.213 ainda mostra 100%; duração por idade com a tabela vigente (portaria só em fonte secundária, `[conferir]`); Lei 15.108/2025 (menor sob guarda).
- BPC: Decreto 12.534/2025, STF Tema 27 (texto no BNP), §3º-A com a ressalva do §14, CadÚnico e biometria (§§12 a 12-B), Leis 15.077/2024 e 14.973/2024.
- Recurso ao CRPS: 30 dias contínuos (RICRPS arts. 61 e 62, Portaria MPS 2.393/2023), embargos em 10 dias, renúncia por ação idêntica (Decreto 3.048 art. 307); prorrogação do auxílio resolvida (art. 60 §§8º e 9º); MS fora do JEF resolvido (Lei 10.259 art. 3º §1º, I); Atestmed pelos §§11-F a 11-I do art. 60 (Lei 15.265/2025); art. 73-A (Lei 15.415/2026); ADI 2.110 e 2.111; Temas 555, 1090, 1209 e 1467; ADI 6096 e Decreto 3.048 art. 347; Tema 1105 do STJ sem confirmação `[conferir]`. Fonte: conferência previdenciário (19/10) e BNP.

**area-trabalhista**
- Gratuidade pela **data do ajuizamento**: ADC 80 (STF, 03/09/2026, ata de 16/09/2026) × Tema 21 do TST (vigente no BNP, 17/07/2026); acórdão e alcance temporal `[conferir]`. Súmula 463 I superada pela ADC 80, II mantida.
- Súmulas canceladas pela Res. TST 225/2025 com a lista (lida no PDF oficial em 19/10); honorários (ADI 5766 e IN 41/2018, Súmula 219 cancelada); correção e juros pós-ADC 58 e Lei 14.905/2024 (SBDI-1, fonte secundária); Tema 278 do TST (BNP); ED com a regra do 897-A §3º; DL 779/1969 (ente público); depósito recursal pelo valor da data da interposição (Ato SEGJUD.GP 381/2026); CPC 105 conferido (antes `[conferir]`).
- Sentença em audiência: art. 852, não o 834 (o 834 não foi aberto, `[conferir]`); pejotização: Tema 1389 afetado sem tese, andamento `[conferir]`.

**area-tributario**
- LC 227/2026 (impugnação em 20 dias úteis; ciência anterior a 14/01/2026 sem regra de transição, conte os dois cenários) e LC 236/2026 (CTN 138, 142, 150, 151 VII a X, 161, 165-A, 168 §§2º e 3º, 174 §1º, 201, 208-A a 208-J, 211-B). Fonte: conferência tributário, Câmara e Planalto, 20/10/2026.
- Embargos à execução fiscal com os três termos do art. 16 e Tema 131 do STJ (úteis na LEF `[conferir]`); anulatória do débito (Decreto 20.910); ciência do art. 23 §2º do Decreto 70.235; LEF art. 38 e Decreto art. 16 §4º (antes `[conferir]`); STF Temas 314, 390 e 1184 (BNP); Súmula 212 do STJ cancelada e ADI 4296; Edital PGFN 6/2026; execução fiscal extrajudicial sem lei achada.

**area-familia-e-sucessoes**
- Leis de 2024 a 2026: 14.994/2024, 15.240/2025, 15.384/2026, 15.392/2026, 15.479/2026 (CPC 529-A, vigência um ano depois de 30/07/2026), Provimento CN-CNJ 202/2025 e artigos do Provimento 149/2023; LC 227/2026 no ITCMD (arts. 156, 158, 159); Súmulas 377 do STF e 655 do STJ, Tema 622 do STF; alienação parental (Lei 14.340/2022, PL 2.812/2022 não é lei); Tema 1074 completo; conflitos CC 1.796 × CPC 611, Lei 5.478 art. 23 × CC 206 §2º e prisão de 60 dias × CPC (`[conferir]`).

**area-civel-consumidor-e-imobiliario**
- Purga (15 dias da citação, 24 meses, termo inicial `[conferir]`), liminar do inciso IX sem garantia, Lei 8.245 art. 39, desocupação (art. 63 §1º e art. 64), renovatória (janela aberta = ALERTA), prescrições por tipo de dívida; Temas 1464 a 1466 (distrato, afetados, sem percentual), 949 e 886 (condomínio); agravo pelo Tema 988; ED no JEC (arts. 48 a 50); embargos à execução (CPC 915 e 854 §3º); plano de saúde (Lei 14.454, ADI 7265, Temas 1316 e 1365); voo (Temas 210, 1240 e 1417, Res. ANAC 813/2026); Tema 929 com a situação real do BNP (21/09/2026, tese não publicada); Tema 26 (juros bancários); falsa central sem número de julgado. Fonte: conferências imobiliário, cível 2 e bancário.

**area-empresarial**
- Suspensão de 180 dias do deferimento do **processamento**; 90 dias de haveres a partir da liquidação (CC 1.031 §2º), CPC 604 a 609; 1.085 completo; CC 1.057 (cessão a estranho); 3/4 só de instalação (1.074) e CC 1.061; Lei 8.934 art. 36 e CC 1.075 §2º; CC 389 p. ú. não é reajuste; EIRELI/980-A `[conferir Lei 14.382/2022]`; PL 170/2025 no lugar do "PL 3/2024"; agravo na RJ (189 §1º, Tema 1022) com os dois cenários. Fonte: conferência empresarial e teste imobiliário-empresarial. Prazos de plano (53), objeção (55) e contestação de falência (98) marcados `[conferir]` por não terem sido reabertos.

## 3. Módulo novo

**area-administrativo-e-fazenda** (mesmo formato dos outros): onde corre, prazos (Lei 9.784 e Lei 8.112 corridos; Lei 14.133 úteis; LAI; MS de 120 dias), peças, teses, armadilhas. Fonte: conferência administrativo-e-servidor (20/10), teste administrativo-e-gestao, BNP, e releitura de Lei 9.784 e Lei 14.133 em 20/10/2026. Tratamentos explícitos: Súmula 633 do STJ só para o prazo decadencial e aplicação subsidiária a estado e município; Súmula 343 do STJ cancelada; Súmula 333 não vale para concurso; dobro da Fazenda só da intimação pessoal, com exceções; escritório contratado pelo ente (`[conferir jurisprudência]`); plano B de licitação sem intenção de recorrer.

## 4. Métodos

| Método | Mudança | Fonte |
|---|---|---|
| `plano-antes-de-gerar` | Seção 0: ALERTA e conta antes das perguntas; até 5 perguntas, priorizadas, o resto vira `[DEFINIR]`; linha "Prazo" em "Estratégia da peça"; exceção de súmula e tema conferidos na seção Jurisprudência; "plano de uma tela" para contrato, roteiro, quesitos, requerimento, parecer e consulta, sem Eixo e Jurisprudência quando não há tese; expediente de uma página sem plano | BRIEF §3; testes imobiliário (D3), bancário/cível 2 (item 2), administrativo e gestão (D6, caso 11) |
| `gestao-de-prazos-e-intimacoes` | Dia do início = dia 1 com exemplo; intimação pessoal conta da intimação pessoal; portal e Domicílio em dois cenários (Lei 11.419 art. 5º, CPC 231 V); dobro com exceções (CPC 183 §2º, 186 §4º, Leis 10.259 art. 9º e 12.153 art. 7º, MS) e escritório contratado; administrativo pelo diploma do rito (a regra "corridos no administrativo" saiu); sentença com apelação e ED lado a lado; ALERTA da régua no lugar de "3 dias úteis"; aviso de audiência; remissão a `da-intimacao-a-providencia` e `prazos-da-semana` | Lei 11.419, CPC 183, 224 e 231 lidos em 20/10; testes administrativo-e-gestao (D1 a D6, D5) |
| `contrato-a-partir-do-briefing` | CC 108 corrigido ("trinta vezes o maior salário mínimo vigente no País", promessa pode ser particular, CC 1.417); "ausência de vínculo" saiu como cláusula padrão (natureza da relação, alerta de pejotização, triagem que barra, declaração das partes só se o advogado insistir); reajuste e CC 389 p. ú.; fluxo alinhado ao plano de uma tela e ao aval; remissão às skills de contrato do Pro | CC 108 lido na Câmara em 20/10; conferência imobiliário (item 9); teste imobiliário-empresarial (D3, D4) |
| `documentos-procuracao-e-honorarios` | Remissão a `contrato-de-honorarios-por-area`, `proposta-de-honorarios`, `aviso-de-uso-de-ia-ao-cliente` e `onboarding-do-cliente-por-area`; CED art. 48 §6º e art. 50; CPC 105 (poder especial para declaração de hipossuficiência); consentimento específico para dado sensível (LGPD art. 11, I) | conferência gestão-do-escritorio (itens 3 e D9); teste administrativo-e-gestao (caso 4) |

## 5. O que não mudou

`area-eleitoral` (nenhum relatório de conferência cobre a área; fica na v2.1) e os outros métodos (`peca-a-partir-da-ficha`, `conferencia-antes-de-protocolar`, `ficha-do-caso` e demais), que seguem a regra do SKILL.md sem edição própria. Versão ChatGPT do núcleo: não tocada.

## 6. Pendências que ficam `[conferir]` (não abriram na fonte)

ADC 80 (acórdão, tese e alcance no tempo) e ADI 5766 (alcance sobre o 791-A §4º); súmulas e OJs vigentes do TST (portal barra); ADIs contra a Lei 15.402 e sobrevivência do inciso IV do LEP 112; redação da LEP 112 para fato até 22/01/2020; aplicação no tempo da Lei 15.438; Súmula 690 do STF; juiz das garantias (cessação com o oferecimento); IN 128 art. 576-A, Atestmed 2026 e portaria da duração da pensão; Súmulas da TNU; transição da LC 227; prazo dos embargos em dias úteis na LEF; LC 214 arts. 343, 346 e 348; Tema 929 (tese não publicada); ADI 7265 (inteiro teor); Tema 1417 (alcance da suspensão); termo inicial da purga; Tema 1478; contagem do agravo na RJ; EC 113/2021, Lei 5.021/1966 e leis de estado e município no administrativo; ECA (prazos e dobro); prazo de 3 dias do CPC 528.
