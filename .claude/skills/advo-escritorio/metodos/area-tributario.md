# area-tributario

Quando usar: Use quando o perfil do escritório disser que ele atua em direito tributário e a tarefa for ficha, peça, prazo, pesquisa, risco, checklist de documentos ou audiência dessa área. É o módulo da área: rito, prazos, peças, teses, fontes e armadilhas que as outras skills do Advoclaude leem antes de trabalhar.

# Área: tributário

A LC 227/2026 (DOU 14/01/2026) mudou prazos do processo administrativo federal e a LC 236/2026 (4/9/2026) reescreveu partes do CTN: art. 151 com novos incisos (VII a X), 138 (multa de mora), 142 §§2º e 3º, 113-A (teto de multa), 150 §§5º e 6º, 161 §3º, 165-A, 168 §§2º e 3º, 174 §1º, 201 §2º e 208-A a 208-J (normas gerais do contencioso de estados e municípios, aplicáveis direto pelo 211-B). Entre dois prazos possíveis, conte o mais curto e avise. Com o pacote Tributário do Pro instalado, a skill da peça (`impugnacao-de-auto-de-infracao`, `mandado-de-seguranca-tributario`, `embargos-a-execucao-fiscal`, `excecao-de-pre-executividade`, `repeticao-de-indebito-tributario`, `anulatoria-de-debito-fiscal`, `transacao-e-parcelamento`) aprofunda e prevalece onde divergir.

## 1. Onde a área corre

- **Federal:** DRJ, CARF e CSRF (Decreto 70.235/1972), autos no e-CAC. A CBS segue esse rito.
- **Estadual e municipal:** lei do ente, sob as normas gerais do CTN (arts. 208-A a 208-J), com dois anos pra adaptação `[conferir]`. Município com mais de 100 mil habitantes deve ter segunda instância.
- **IBS:** processo no Comitê Gestor (LC 227/2026), em dias úteis `[conferir artigo]`.
- **Judicial:** federal na Justiça Federal; estadual e municipal na vara da Fazenda Pública; depois STJ e STF. PJe, eproc ou e-SAJ. Execução fiscal: Lei 6.830/1980 (LEF). MS: Lei 12.016/2009. Anulatória e repetição: CPC.
- **Como escolher.** Administrativo primeiro: suspende a exigibilidade sem garantia (CTN art. 151, III) e não tem sucumbência. Ação judicial sobre o mesmo ponto importa renúncia à instância administrativa (LEF art. 38, parágrafo único). MS se a prova é só documento e o ato tem menos de 120 dias; perícia pede ação ordinária. O JEF julga anulação de lançamento, não MS nem execução fiscal (Lei 10.259/2001, art. 3º, §1º, I e III).

## 2. Prazos que mais aparecem

| Ato | Prazo | Base | Dias | Observação |
|---|---|---|---|---|
| Impugnação federal | 20 | Dec. 70.235, art. 15 (LC 227/2026) | úteis | eram 30 corridos até jan/2026; ciência anterior a 14/01/2026: nenhuma regra de transição achada, conte os dois e fique com o mais curto `[conferir]` |
| Recurso voluntário | 20 | art. 33 | úteis | |
| Recurso especial à CSRF | 15 | art. 37, §2º | corridos | CTN art. 208-D diz 20 úteis: conte 15 `[conferir]` |
| Recurso especial da CBS | 10 | art. 37, §5º | úteis | |
| Embargos e agravo no CARF | 5 | CTN art. 208-D, IV; RICARF (Portaria MF 1.398/2026, não aberta) | úteis | `[conferir artigo do RICARF]` |
| Manifestação de inconformidade | 30 | Lei 9.430/1996, art. 74, §§7º e 9º | corridos | o §11 manda aplicar o rito do Decreto 70.235 e a LC 227 pode ter mudado o prazo: conte 30 corridos e 20 úteis, o mais curto `[conferir]` |
| Recursos estaduais e municipais | 20 | CTN art. 208-D | úteis | lei local diferente: o mais curto |
| Pagar ou garantir a execução | 5 | LEF art. 8º | `[conferir]` | da citação |
| Embargos à execução fiscal | 30 | LEF art. 16 (I a III) | úteis na LEF: sem precedente achado, conte corridos e úteis e fique com o mais curto `[conferir]` | três termos: depósito (I), juntada da fiança (II) ou intimação da penhora (III); o mais antigo conta, por executado; STJ fixa a intimação efetiva da penhora (Tema 131) |
| Mandado de segurança | 120 | Lei 12.016, art. 23 | corridos | decadencial, da ciência do ato |
| Repetição de indébito | 5 anos | CTN art. 168 | | a LC 236 acrescentou os §§2º e 3º (habilitação do indébito); interação com a Súmula 625 do STJ em aberto `[conferir]` |
| Anulatória da restituição negada | 2 anos | CTN art. 169 | | |
| Anulatória do débito | 5 anos (analogia) | Decreto 20.910/1932, art. 1º | | aplicado pela jurisprudência; termo inicial `[conferir]` |
| Certidão negativa | `[conferir prazo e artigo]` | | | |

**Contagem.** No PAF federal a regra é dia corrido (Dec. 70.235, art. 5º): exclui o dia do início, inclui o do vencimento, em dia de expediente do órgão. Impugnação e recurso voluntário são exceção. Os prazos param de 20/12 a 20/1 (arts. 5º-A e 5º-B). Ciência (Dec. 70.235, art. 23, §2º): pessoal; postal e eletrônica 15 dias do recebimento ou da consulta, se anterior; edital 15 dias. No judicial, CPC, pela skill de prazos.

## 3. As peças mais comuns

1. **Impugnação:** tempestividade, nulidade do auto (fatos e enquadramento: CTN art. 208-B), decadência, mérito item por item, multa. Prova documental junto: preclui se não apresentada com a impugnação, salvo as exceções do art. 16, §4º, do Decreto 70.235; matéria não impugnada não volta; perícia com quesitos.
2. **Recurso voluntário:** ataca cada fundamento da DRJ; o não impugnado não volta.
3. **Recurso especial à CSRF:** divergência com acórdão de outra turma, cotejo analítico, sem reexame de prova.
4. **Manifestação de inconformidade:** despacho decisório, origem e valor do crédito.
5. **Mandado de segurança:** autoridade coatora e sua pessoa jurídica (art. 6º), data da ciência, prova pré-constituída, liminar (art. 7º, III).
6. **Anulatória ou declaratória:** vícios do lançamento, perícia, tutela ou depósito integral.
7. **Repetição de indébito:** pagamento, causa, prazo, tributo indireto (CTN art. 166), precatório ou compensação.
8. **Embargos à execução fiscal:** garantia (LEF art. 16, §1º), toda a defesa e até três testemunhas (§2º).
9. **Exceção de pré-executividade:** só matéria de ofício provada de plano (Súmula 393 STJ).
10. **Transação ou parcelamento:** modalidade, débitos, desistência de ações, capacidade de pagamento (Lei 13.988/2020; Lei 10.522/2002).

## 4. Teses, pedidos e provas recorrentes

- **Decadência:** sem declaração, art. 173, I (Súmula 555 STJ); declaração constitui o crédito (Súmula 436 STJ); a notificação do auto faz cessar a decadência (Súmula 622 STJ); dolo e fraude, art. 173, I (LC 236) `[conferir]`. Prova: declarações, guias, data da ciência.
- **Prescrição:** cinco anos da constituição definitiva (art. 174; Súmula 622 STJ); anterior à ação, de ofício (Súmula 409 STJ). Intercorrente: LEF art. 40, Súmula 314 STJ e Temas 566 a 571 STJ (só citação ou constrição efetivas interrompem). Novas causas de interrupção na LC 236, como o protesto da CDA `[conferir]`. Prova: cronologia dos autos.
- **Redirecionamento:** Súmula 435 STJ; Tema 981 STJ (responde quem administrava na dissolução irregular). Prova: Junta Comercial, certidão do oficial.
- **Suspensão:** depósito só integral e em dinheiro (Súmula 112 STJ); declarado e não pago, certidão recusada (Súmula 446 STJ); transação suspende (CTN art. 151, VIII).
- **Compensação:** MS declara o direito (Súmula 213 STJ), não convalida a feita (Súmula 460 STJ); pedido administrativo não interrompe a prescrição (Súmula 625 STJ) `[conferir após LC 236]`.
- **Denúncia espontânea:** a LC 236 pôs a multa de mora no art. 138 `[conferir]`; não vale pra declarado e pago com atraso (Súmula 360 STJ).
- **Multa:** teto no novo art. 113-A do CTN, com vetos `[conferir]`. No CARF, empate pelo voto de qualidade exclui a multa (Dec. 70.235, art. 25, §9º-A).
- **STF (BNP/CNJ, 19/10/2026):** depósito prévio em recurso administrativo é inconstitucional (Tema 314; Súmula Vinculante 21); art. 40 da LEF constitucional, 1 ano de suspensão e depois 5 de prescrição (Tema 390); execução fiscal de baixo valor pode ser extinta por falta de interesse, com conciliação e protesto antes (Tema 1184). Restituição administrativa após MS: `[buscar]`. Leia a modulação.
- **MS contra ato tributário:** o art. 7º, §2º, da Lei 12.016 (liminar para compensação) é inconstitucional (ADI 4296, 2021; fonte secundária); a Súmula 212 do STJ está **cancelada**; valem as Súmulas 213 e 460 do STJ e o CTN 170-A. Lei 9.430, art. 74 (PER/DCOMP, homologação em 5 anos, §12, g e h, da Lei 15.265/2025) só vale para tributo federal: estadual e municipal dependem da lei local `[conferir]`.

## 5. Checklist de documentos por ação

1. **Impugnação:** cliente traz auto, prova da ciência, declarações, guias, notas e contratos. Escritório: quadro item x prova, cronologia da decadência.
2. **Embargos ou exceção:** citação, CDA, contrato social, garantia. Escritório: autos e processo administrativo, cronologia da prescrição.
3. **Mandado de segurança:** o ato, a prova da ciência e todos os documentos do direito. Escritório: autoridade coatora, conta dos 120 dias.
4. **Repetição:** guias e declarações de cinco anos; se indireto, prova de que não repassou. Escritório: demonstrativo pro contador.
5. **Transação e certidão:** situação fiscal do e-CAC, extrato da dívida ativa, balanço. Escritório: mapa dos débitos por ente.

## 6. Onde pesquisar

- CARF: https://acordaos.economia.gov.br/solr/acordaos2/browse/ · súmulas: https://www.gov.br/carf/pt-br/jurisprudencia/sumulas-carf/sumulas-por-materia
- Receita (normas e consultas): https://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action
- STJ: https://processo.stj.jus.br/SCON/sumanot/ · https://processo.stj.jus.br/repetitivos/temas_repetitivos/
- STF: portal.stf.jus.br `[conferir endereço]` · TRF4: https://jurisprudencia.trf4.jus.br/pesquisa/pesquisa.php · demais tribunais `[conferir endereço]`
- Lei atualizada: https://www2.camara.leg.br/legin/
- PGFN, dívida ativa e transação: https://www.regularize.pgfn.gov.br/
- Certidão federal: https://servicos.receitafederal.gov.br/servico/certidoes/
- Estado e município: Sefaz, tribunal administrativo e lei local `[conferir por UF]`

## 7. Como se escreve nesta área

- Vocabulário: lançamento, crédito tributário, sujeito passivo, fato gerador, constituição definitiva, exigibilidade suspensa, CDA. Tributo, multa e juros sempre separados.
- Fora do lugar: "cobrança abusiva" sem artigo, tom de consumidor, acusar o auditor.
- Acórdão do CARF pelo número copiado da página; súmula com o tribunal.
- O julgador administrativo é técnico: quer quadro item por item e prova junto. Inconstitucionalidade de lei vai pro juiz `[buscar: súmula do CARF]`.

## 8. Onde a IA mais erra

- **Regra velha:** impugnação federal em 30 dias corridos (hoje 20 úteis); CTN anterior à LC 236.
- **Competência:** tributo municipal na Justiça Federal, autoridade coatora errada, MS no JEF.
- **Cálculo:** a IA não calcula tributo, multa, Selic, indébito nem crédito de CBS e IBS. Lista o que entra (base, alíquota, período, pagamentos) e o cálculo é do contador ou do sistema oficial.
- **Reforma:** em 2026, CBS de 0,9% e IBS de 0,1% são teste; quem cumpre as obrigações acessórias não recolhe, e o valor abate PIS e Cofins (LC 214/2025, arts. 343, 346 e 348). Autuação por obrigação acessória em 2026 dá 60 dias pra regularizar `[conferir]`. 2027: CBS plena, fim de PIS e Cofins. 2029 a 2032: ICMS e ISS caem, IBS sobe. 2033: fim de ICMS e ISS `[conferir artigos da EC 132/2023 no ADCT]`. Vale a fase da data do fato gerador.
- **Transação:** edital tem prazo de adesão; use o vigente (Edital PGFN 6/2026, prorrogado pelo 10/2026: capacidade de pagamento com adesão até 29/01/2027, pequeno valor até 29/07/2027, páginas da PGFN lidas em 20/10/2026; demais editais e portarias de 2026 só por busca, `[conferir]`). Lei 13.988/2020 com as alterações das Leis 14.689/2023, 14.973/2024 e 15.103/2025. Execução fiscal extrajudicial: nenhuma lei localizada; o CTN 174, §1º, IX, remete a lei específica.
- **Dado sensível:** sigilo fiscal (IR, extrato), saúde (isenção por doença grave), dado penal (representação fiscal). Iniciais, documento tarjado, laudo fora, nada no perfil.

## 9. Como as outras skills usam este módulo

- `ficha-do-caso`: tributo, ente, período, auto ou CDA, data da ciência, fase, principal, multa e juros copiados, exigibilidade, garantia.
- `peca-a-partir-da-ficha`: esqueletos da seção 3.
- `gestao-de-prazos-e-intimacoes`: seção 2; administrativo fora do CPC, pausa de 20/12 a 20/1, prazo local pelo mais curto.
- `pesquisa-jurisprudencial`: CARF e CSRF; STJ repetitivos, STF repercussão geral, TRF da região.
- `analise-de-risco-e-prognostico`: prova documental, decadência e prescrição, precedente e modulação, garantia, sucumbência.
- `documentos-procuracao-e-honorarios`: seção 5; poderes pra desistir, renunciar, confessar e transigir, receber e dar quitação.
- `preparacao-de-audiencia`: rara; sustentação oral no CARF, perícia contábil nos embargos.
- `triagem-de-lead-e-caso-novo`: tributo e ente; auto ou citação, e quando; bloqueio; parcelamento anterior; certidão pra quê.

*Módulo revisado em 20/10/2026 (v2.2) com o Decreto 70.235, o CTN e a LEF (Câmara e Planalto), as LCs 227 e 236/2026, as Leis 14.689/2023 e 15.265/2025, o BNP/CNJ de 19/10/2026 e a conferência do pacote Tributário do Pro. Ficaram `[conferir]`: transição da LC 227 para ciência anterior a 14/01/2026, prazo dos embargos em dias úteis, LC 214/2025 (arts. 343, 346 e 348), RICARF e editais da PGFN além do 6/2026.*
