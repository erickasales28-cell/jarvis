# area-administrativo-e-fazenda

Quando usar: Use quando o perfil do escritório disser que ele atua em direito administrativo, servidor público ou contra a Fazenda Pública (mandado de segurança, processo disciplinar, recurso administrativo, licitação, concurso, acesso à informação) e a tarefa for ficha, peça, prazo, pesquisa, risco, checklist de documentos ou audiência dessa área. É o módulo da área: rito, prazos, peças, teses, fontes e armadilhas que as outras skills do Advoclaude leem antes de trabalhar.

# Área administrativa e Fazenda Pública

Aqui cada lei tem a sua contagem: Lei 9.784 e Lei 8.112 em dias **corridos**; Lei 14.133 em dias **úteis**. Não aplique a regra de uma à outra. Estatuto de servidor, rito de recurso e lei de acesso à informação de estado e município são da **lei do ente**: avise e marque `[conferir lei do ente]`. Com o pacote Administrativo e Servidor do Pro instalado, a skill da peça (`mandado-de-seguranca`, `defesa-em-pad`, `recurso-administrativo`, `acao-de-servidor`, `impugnacao-de-edital-e-concurso`, `impugnacao-e-recurso-em-licitacao`, `pedido-pela-lai`) aprofunda e prevalece onde divergir.

## 1. Onde a área corre

- **Administrativo:** órgão ou autoridade do ente. Federal: Lei 9.784/1999 (processo administrativo), Lei 8.112/1990 (servidor civil da União), Lei 14.133/2021 (licitações), Lei 12.527/2011 (LAI). Estado e município: lei própria; a Lei 9.784 só se aplica de forma subsidiária e, segundo a Súmula 633 do STJ, "especialmente" quanto ao prazo decadencial, se faltar norma local e específica (BNP/CNJ, 19/10/2026). Não cite a 633 como regra geral de aplicação da Lei 9.784: para o resto, `[INSERIR JULGADO: aplicação subsidiária da Lei 9.784 a estado ou município]`.
- **Judicial contra a Fazenda:** Justiça Federal para a União (JEF até 60 salários mínimos, Lei 10.259, art. 3º) e Justiça Estadual para estado e município (vara da Fazenda Pública; Juizado da Fazenda até 60 salários mínimos, Lei 12.153/2009). Servidor municipal estatutário: Justiça Comum Estadual (Súmula 137 do STJ). Servidor federal: Justiça Federal.
- **Fora do juizado:** mandado de segurança, improbidade e, na Lei 12.153, demissão e sanção disciplinar (art. 2º, §1º); na Lei 10.259, mandado de segurança, anulação de ato federal (salvo previdenciário e fiscal) e demissão (art. 3º, §1º). O valor soma vencidas e 12 vincendas; a competência do juizado é absoluta onde ele existe.
- **Mandado de segurança (Lei 12.016/2009):** prova só documental, direito líquido e certo, autoridade coatora (art. 6º, §3º). A ADI 4296 (STF, 2021) declarou inconstitucionais o art. 7º, §2º (vedação de liminar) e o art. 22, §2º; o art. 7º, III (caução), o art. 23 (120 dias) e o art. 25 (sem honorários) seguem. As vedações de liminar que restam vêm das Leis 8.437/1992 (art. 1º) e 9.494/1997 (art. 1º); a Lei 5.021/1966 (pagamento de vencimentos) fica `[conferir]`.
- **Sistemas:** PJe, eproc, e-SAJ ou Projudi conforme o tribunal; licitação em plataforma eletrônica e PNCP; LAI no sistema do ente (`[conferir portal]`).
- **Concurso:** o edital é a lei da banca; a nova lei geral dos concursos (Lei 14.965/2024) só vigora a partir de 1º/1/2028 e não vale para concurso autorizado antes. Cotas raciais em concurso federal: Lei 15.142/2025 (30%; em vigor desde 04/06/2025), que revogou a Lei 12.990/2014; edital anterior segue a antiga.

## 2. Prazos que mais aparecem

| Ato | Prazo | Base | Dias | Observação |
|---|---|---|---|---|
| Mandado de segurança | 120 dias | Lei 12.016, art. 23 | corridos, decadencial | da ciência do ato; pedido de reconsideração não interrompe (Súmula 430 do STF) |
| Informações da autoridade | 10 dias | Lei 12.016, art. 7º, I | | não há prazo dobrado da Fazenda aqui |
| Recurso administrativo (Lei 9.784) | 10 dias | art. 59 | corridos | da ciência; reconsideração em 5 dias (art. 56, §1º); decisão em 30 dias, prorrogável por igual período (art. 59, §1º); prazo do ente pode ser outro |
| Efeito suspensivo | só com justo receio | Lei 9.784, art. 61 | | autoridade recorrida ou a superior, de ofício ou a pedido |
| Decadência da anulação de ato favorável | 5 anos | Lei 9.784, art. 54 | | salvo má-fé; Súmula 633 do STJ para estado e município |
| Pedido ou recurso do servidor federal | 30 dias | Lei 8.112, arts. 104 a 108 | corridos | prescrição do direito de requerer: 5 anos (demissão, cassação de aposentadoria e créditos de relação de trabalho), 120 dias nos demais casos, salvo prazo de lei (art. 110) |
| Sindicância / PAD | 30+30 / 60+60 dias | Lei 8.112, arts. 145 e 152 | corridos | afastamento preventivo 60+60 (art. 147); julgamento em 20 dias (art. 167) |
| Defesa no PAD | 10 dias | Lei 8.112, art. 161 | corridos | 20 se houver mais de um acusado; dobro para diligências; citação por edital: 15 dias (art. 163) |
| Prescrição disciplinar | 5 / 2 / 180 dias | Lei 8.112, art. 142 | | demissão e afins / suspensão / advertência; se o fato é crime, vale a lei penal (§2º); Súmula 635 do STJ: conta do conhecimento pela autoridade, interrompe com a instauração e volta por inteiro depois de 140 dias |
| Contagem na Lei 8.112 e 9.784 | | arts. 238 e 66 | corridos | exclui o dia do começo, inclui o do vencimento; vencimento em dia sem expediente passa ao seguinte |
| Impugnação ao edital (licitação) | até 3 dias úteis antes da abertura | Lei 14.133, art. 164 | úteis | qualquer pessoa; resposta em até 3 dias úteis |
| Recurso e reconsideração (licitação) | 3 dias úteis | Lei 14.133, art. 165 | úteis | **intenção de recorrer imediata**, na sessão: sem ela, preclusão (§1º, I); autoridade decide em até 10 dias úteis (§2º); recurso suspende o ato (art. 168) |
| Contagem na Lei 14.133 | | art. 183 | úteis | exclui o dia do começo, inclui o do vencimento; dia útil só com expediente; início no primeiro dia útil depois da divulgação |
| ME e EPP em licitação | 5 dias úteis, prorrogáveis | LC 123, arts. 42 a 44 e 48 | úteis | regularidade fiscal só na assinatura; empate ficto 10% e 5%; exclusiva até R$ 80.000 e cota de 25% |
| Pedido pela LAI | 20 dias + 10 | Lei 12.527, art. 11 | | recurso em 10 dias, decisão em 5 (art. 15); CGU na esfera federal (art. 16) |
| Ação de servidor | 5 anos | Decreto 20.910/1932, art. 1º | | trato sucessivo: só as prestações anteriores ao quinquênio (Súmula 85 do STJ); interrupção uma só vez, recomeça pela metade (arts. 8º e 9º) |
| Juizado da Fazenda / JEF | 10 dias (recurso inominado) | Leis 12.153 e 10.259 | úteis | nenhuma das leis dá prazo diferenciado à Fazenda (arts. 7º e 9º) |

**Dobro da Fazenda (CPC art. 183).** Conta da **intimação pessoal**, não do DJEN, e não vale quando a lei dá prazo próprio (§2º), nem nos juizados nem no MS (informações em 10 dias). Escritório contratado pelo ente, sem procuradoria: não conte dobra nem intimação pessoal por padrão, e marque `[conferir jurisprudência]` (nenhum precedente do STJ achado). Execução de sentença de servidor contra a Fazenda só depois do trânsito (Lei 9.494, art. 2º-B); EC 113/2021 sobre juros e correção: `[conferir]`.

## 3. As peças mais comuns

1. **Mandado de segurança:** autoridade coatora e pessoa jurídica, ato e data da ciência (120 dias), prova pré-constituída, liminar (art. 7º, III) e a Lei 8.437.
2. **Defesa em PAD e sindicância:** nulidades de rito, tipificação, dosimetria (Lei 8.112, art. 128), prescrição, pedido de prova; defesa técnica não é obrigatória (Súmula Vinculante 5; a Súmula 343 do STJ está **cancelada**).
3. **Recurso administrativo:** tempestividade, cada motivo da decisão, efeito suspensivo (art. 61), pedido de reconsideração e subida à autoridade superior.
4. **Ação de servidor:** vantagem, diferença, desvio de função, licença-prêmio; prescrição quinquenal; vara da Fazenda ou juizado.
5. **Impugnação de edital e ações de concurso:** cláusula do edital ou ato da banca, MS ou ação ordinária, tutela, nomeação.
6. **Impugnação e recurso em licitação:** pedido ao pregoeiro ou à comissão (art. 164), intenção e razões (art. 165), contrarrazões.
7. **Pedido pela LAI:** peça curta, identificada, com o dado pedido.

## 4. Teses, pedidos e provas recorrentes

- **MS:** não cabe contra lei em tese (Súmula 266 do STF); não substitui ação de cobrança (269) e não gera efeitos patrimoniais pretéritos (271); controvérsia de direito não impede (625); sem honorários (Súmula 105 do STJ); encampação (Súmula 628 do STJ). Licitação de empresa pública ou sociedade de economia mista: Súmula 333 do STJ, que **não** vale para concurso.
- **PAD:** controle judicial só de legalidade e regularidade, salvo teratologia ou desproporção (Súmula 665 do STJ); excesso de prazo só anula com prejuízo (592); prova emprestada (591); denúncia anônima motivada (611); portaria sem exposição detalhada (641); mudança de capitulação sozinha não anula (672); nos casos do art. 132 da Lei 8.112 não há pena diversa de demissão (650); improbidade, demissão sem condenação judicial prévia (651). Absolvição criminal que nega fato ou autoria repercute (Lei 8.112, art. 126). Lei federal como base só vale para a União.
- **Servidor:** reconhecido o desvio de função, o servidor tem direito às diferenças salariais (Súmula 378 e Tema 14 do STJ, BNP/CNJ); não cabe aumentar vencimentos por isonomia (Súmula Vinculante 37 e Súmula 339 do STF); provimento sem concurso em outra carreira é inconstitucional (SV 43).
- **Concurso:** o Judiciário não substitui a banca, salvo ilegalidade ou inconstitucionalidade (STF, Tema 485); aprovado dentro das vagas tem direito à nomeação (Tema 161) e o fora das vagas só em preterição arbitrária (Tema 784), com causa de pedir na vigência do certame (Tema 683); sem segunda chamada no teste físico, salvo edital (Tema 335); limite de idade só se a função justificar (Súmula 683 do STF); psicotécnico só por lei (SV 44); diploma na posse (Súmula 266 do STJ); visão monocular concorre às vagas de deficiente (377 do STJ); surdez unilateral não (552).
- **Licitação:** sem intenção de recorrer na sessão, o recurso se perde (art. 165, §1º, I). Plano B: ver se o edital ou a plataforma abriu janela de intenção, pedir diligência ou saneamento (art. 64), pedir anulação de ofício (art. 71), provocar a autotutela (Súmulas 346 e 473 do STF) e, se for o caso, a cautelar do tribunal de contas (art. 171, §1º, `[conferir]`). Alterações de 2025 e 2026 na Lei 14.133 (Leis 15.266/2025, 15.210/2025 e 15.471/2026) não tocam os arts. 164 a 168.
- **LAI:** parte em processo seletivo pede vista e cópia do processo (CF, art. 5º, XXXIV); não use a LAI para o que a vista garante nem para reabrir prazo vencido de recurso do edital. Informação pessoal: 100 anos (art. 31); sigilo de 25, 15 ou 5 anos (art. 24).
- **Prova:** edital, ato impugnado com a data de ciência, processo administrativo, portaria, ata da sessão, protocolo do pedido, holerites e fichas funcionais.

## 5. Checklist de documentos

- **MS:** o ato, a prova da data da ciência, todos os documentos do direito, a indicação da autoridade. Escritório: a conta dos 120 dias.
- **PAD:** portaria, citação com data, indiciação, provas dos autos, ficha funcional. Escritório: quadro de nulidades e de prescrição.
- **Recurso administrativo:** decisão, data da ciência, autos do processo. Escritório: leitura da lei do ente.
- **Ação de servidor:** contracheques, ficha funcional, ordens de serviço, ato de nomeação, requerimento administrativo. Escritório: linha do tempo para a prescrição.
- **Concurso:** edital, inscrição, resultado, recursos já feitos, prova de aprovação. Escritório: cláusula atacada.
- **Licitação:** edital, proposta, ata, decisão, registro da intenção de recorrer. Escritório: conta dos prazos em dias úteis.

## 6. Onde pesquisar

- Planalto e Câmara (`www2.camara.leg.br/legin`): leis federais atualizadas. Para estado e município, o diário oficial do ente.
- STF e STJ: súmulas e temas pelo BNP/CNJ (pangeabnp.pdpj.jus.br); STJ repetitivos em processo.stj.jus.br/repetitivos.
- Licitação: PNCP (pncp.gov.br) e plataforma do órgão; TCU para jurisprudência de contas.
- Concurso: site da banca e do órgão; edital e retificações.
- Intimações: comunica.pje.jus.br (só abre do Brasil).

## 7. Como se escreve nesta área

- "Excelentíssimo Senhor Doutor Juiz de Direito da Vara da Fazenda Pública" (ou do Juizado da Fazenda). No MS: "impetrante", "impetrado" (a autoridade) e a pessoa jurídica a que se vincula; no PAD: "servidor processado" ou "acusado", nunca "réu".
- Cite o ato pelo número, a data e a autoridade; norma pelo artigo; súmula por número e tribunal.
- Pedido de liminar com urgência concreta (data da prova, da posse, da sessão), não adjetivo.

## 8. Onde a IA mais erra

- **Dia útil × corrido:** conta a Lei 9.784 e a Lei 8.112 em dias úteis, ou a Lei 14.133 em corridos. A de licitação é em dias úteis; a de recurso administrativo e PAD é em corridos. Dia do começo não conta: o dia seguinte é o dia 1.
- **Dobro da Fazenda** em juizado, em MS ou contado do DJEN.
- **Súmula 633 do STJ** como regra geral de aplicação da Lei 9.784; **Súmula 343 do STJ** (cancelada); Súmula 333 em concurso.
- **Liminar em MS:** tratar o art. 7º, §2º, da Lei 12.016 como vigente, ou esquecer a Lei 8.437.
- **Lei federal em servidor de estado ou município:** a Lei 8.112 é da União.
- **Prazo vencido:** MS com 120 dias fechados e recurso de licitação sem intenção na sessão; liste como vencido no topo e diga o efeito.
- **Cálculo:** diferença salarial, juros, correção e honorários não se calculam: a IA lista o que entra.
- **Dado sensível:** saúde, raça (heteroidentificação), servidor investigado e terceiros em iniciais; processo sigiloso não sobe para conta individual.

## 9. Como as outras skills usam este módulo

- `ficha-do-caso`: ente e esfera, ato impugnado e data da ciência, fase do processo, lei aplicável (federal ou do ente), regime do servidor, valor para o juizado.
- `peca-a-partir-da-ficha`: estrutura da seção 3, dentro do modelo do escritório; skill de área prevalece.
- `gestao-de-prazos-e-intimacoes`: Lei 9.784 e 8.112 corridas, Lei 14.133 úteis, CPC nos juizados e na Fazenda, dobra só da intimação pessoal.
- `pesquisa-jurisprudencial`: STF e STJ, tribunal de contas, TJ ou TRF da região, Turma Recursal.
- `analise-de-risco-e-prognostico`: prazo decadencial do MS, prescrição, prova do ato, limites do controle judicial (concurso e PAD).
- `documentos-procuracao-e-honorarios`: seção 5; sem honorários de sucumbência no MS.
- `preparacao-de-audiencia`: rara; sustentação oral e audiência no juizado.
- `triagem-de-lead-e-caso-novo`: ato e data da ciência, prazo correndo, esfera do ente, tipo de vínculo.

*Módulo novo da v2.2, de 20/10/2026, apoiado na conferência do pacote Administrativo e Servidor do Pro (Planalto e Câmara, Leis 9.784, 8.112, 12.016, 14.133, 12.527, 12.153, 10.259 e LC 123; BNP/CNJ de 19/10/2026) e relido nas Leis 9.784 e 14.133 (Planalto) na mesma data. Ficaram `[conferir]`: Lei 5.021/1966, Lei 8.112 art. 5º §2º, Lei 9.784 art. 50, termo inicial do MS contra edital, art. 171 §1º da Lei 14.133, EC 113/2021, leis de estado e município.*
