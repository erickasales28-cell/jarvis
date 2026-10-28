---
name: mandado-de-seguranca
description: Use quando o advogado pedir mandado de segurança, MS, "impetrar contra ato do secretário/diretor/banca", liminar em MS, informações da autoridade coatora, ou contestar/defender a autoridade. Complementa peca-a-partir-da-ficha com a Lei 12.016 (autoridade coatora, 120 dias, liminar do art. 7º e o que o STF derrubou) e as súmulas de MS contra ato administrativo.
---

# Mandado de segurança (ato administrativo)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga também o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`. Não existe módulo `area-administrativo` no Kit: use `area-civel-consumidor-e-imobiliario` só como base de CPC e prazos, e esta skill para o rito próprio. Quando o escritório tiver modelo de MS, a estrutura dele manda e a lista abaixo vira conferência. Plano com até 5 perguntas, priorizadas.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

**ALERTA na primeira mensagem**, antes de qualquer pergunta ou plano (régua única): prazo processual ou contratual que vence em 5 dias úteis ou menos; decadência e prescrição a 60 dias ou menos, ou janela já aberta; prazo que já venceu vai no topo como VENCIDO. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (úteis × corridos, lei do ente): conte os dois cenários, use o mais curto e marque `[conferir]`. O plano ganha a linha "Prazo".

**MS de candidato a concurso** (TAF, banca, heteroidentificação, segunda chamada): abra também `impugnacao-de-edital-e-concurso` (Tema 335 STF, Temas 784 e 683, Tema 485). Esta skill dá o rito do MS; aquela, o mérito do concurso.

## Antes do roteiro

- **Prazo (Lei 12.016, art. 23):** 120 dias da ciência do ato, prazo decadencial. Mostre a conta como SUGESTÃO A CONFERIR: termo inicial (ciência do ato, não a data do ato), 120 dias corridos, resultado provável. Pedido de reconsideração não interrompe (Súmula 430 STF). Cláusula de edital de concurso: o STJ conta da ciência do ato que a aplicou ao candidato (a eliminação), não da publicação do edital (informativo oficial do STJ, lido em 21/10/2026; traga o precedente pelo conector); falta de nomeação: do fim da validade do certame. Omissão continuada e ato de trato sucessivo renovam o termo: `[conferir jurisprudência do tribunal da causa]`. Abra o resumo com **ALERTA** se o fim provável é em 5 dias úteis ou menos, ou se já passou (nesse caso, ação ordinária).
- **Cabimento:** direito líquido e certo, ou seja, prova pré-constituída; sem dilação probatória (art. 1º). Não cabe: contra recurso administrativo com efeito suspensivo, contra decisão judicial com recurso suspensivo ou transitada (art. 5º); contra lei em tese (Súmula 266 STF); como substitutivo de cobrança (Súmula 269 STF).
- **Autoridade coatora (art. 6º, caput e §3º):** quem praticou o ato ou de quem emanou a ordem, e a pessoa jurídica a que se vincula. Ato por delegação: contra o delegado (Súmula 510 STF). Pergunte quem assinou o ato e peça a cópia. Erro de autoridade: Súmula 628 STJ (teoria da encampação, só com os 3 requisitos).
- **Competência:** pela sede funcional da autoridade e pela categoria dela. Ato de autoridade federal: Justiça Federal. MS não vai a JEF nem a Juizado da Fazenda (Lei 10.259, art. 3º, §1º, I; Lei 12.153, art. 2º, §1º, I). Ato em licitação de empresa pública ou sociedade de economia mista: Súmula 333 STJ (vale para licitação, não para concurso). `[conferir regimento do TJ para autoridade com foro especial]`.
- **Ficha mínima:** ato impugnado com data de ciência; quem assinou; documentos que provam o direito sem perícia; se houve recurso administrativo e se tem efeito suspensivo; urgência real (data de prova, posse, pagamento, sessão); litisconsortes necessários (aprovados, vencedor da licitação); valor para efeito de alçada.

## Estrutura

1. Endereçamento ao juízo da sede da autoridade; impetrante, autoridade coatora e pessoa jurídica (art. 6º). Inicial em conformidade com o CPC 319 no que couber.
2. Ato coator, data da ciência e tempestividade (art. 23).
3. Fatos e direito líquido e certo, com doc. N só dos documentos lidos; o que está em poder da repartição: pedido de exibição (art. 6º, §1º).
4. Liminar (art. 7º, III): fundamento relevante e ineficácia da medida ao final; a lei admite caução, depósito ou fiança, e o STF a considerou constitucional (faculdade do juiz) na mesma ação direta de 2021 que derrubou o §2º. Peça a liminar em tópico próprio, com o perigo concreto.
5. Pedidos: notificação da autoridade para informações em 10 dias (art. 7º, I); ciência ao órgão de representação da pessoa jurídica (II); citação de litisconsorte necessário (Súmula 631 STF); intimação do Ministério Público; concessão da segurança; sem honorários (art. 25; Súmulas 512 STF e 105 STJ), então não os peça.

## Teses e pedidos que costumam caber

- **Liminar:** a vedação do art. 7º, §2º (compensação, entrega de bens do exterior, reclassificação ou equiparação de servidor, aumento ou extensão de vantagem) foi declarada inconstitucional pelo STF em ação direta julgada em 9/6/2021, que também derrubou o art. 22, §2º (oitiva prévia no MS coletivo) e manteve a caução do art. 7º, III, o prazo do art. 23 e a vedação de honorários do art. 25. Traga a referência pelo conector; não escreva o número da ação de memória. Outras vedações seguem no texto da lei e a decisão de 2021 não as alcançou de forma expressa: Lei 8.437/1992, art. 1º (§3º: não esgotar o objeto; §5º: compensação tributária ou previdenciária), Lei 9.494/1997, art. 1º (estende essas regras à tutela antecipada), Lei 5.021/1966, art. 1º, §4º (sem liminar para pagamento de vencimentos) e o art. 7º, §5º da própria 12.016. Se o juízo as invocar: `[conferir como o tribunal da causa as aplica após 2021, pelo conector]`. Não cite o §2º como obstáculo vigente.
- **Servidor:** a segurança não produz efeitos patrimoniais pretéritos (Súmula 271 STF); o pagamento só alcança prestações posteriores ao ajuizamento (art. 14, §4º). O passado vai por ação própria ou via administrativa.
- **Controvérsia só de direito não impede o MS** (Súmula 625 STF). Lei que fixa prazo decadencial é constitucional (Súmula 632 STF).
- **Denegação sem mérito** não impede a ação própria (Súmula 304 STF; art. 6º, §6º: renovar no prazo).
- **Rito e recurso:** depois das informações (10 dias, art. 7º, I), o MP opina em 10 dias e a sentença deve sair em 30 (art. 12); apelação (art. 14), com reexame necessário na concessão (§1º); agravo de instrumento contra liminar (art. 7º, §1º). Prazos recursais pelo CPC, em dias úteis (CPC 219: só prazos processuais; o prazo do art. 23 é decadencial e corre em dias corridos).
- **Defesa da autoridade (se o cliente é o ente):** informações em 10 dias, ilegitimidade da autoridade, decadência, necessidade de prova, perda superveniente do objeto.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "mandado de segurança contra ato administrativo, prova pré-constituída e prazo decadencial" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não impetrar sem prova do ato e da ciência: a prova não se produz depois.
- Não apontar autoridade genérica ("o Estado", "a Prefeitura"): é a pessoa que praticou o ato.
- Não pedir honorários, nem cobrança de valores pretéritos.
- Não afirmar que a liminar "é vedada" pelo art. 7º, §2º.
- Não cravar data final do prazo: dar a conta sugerida e o alerta.

*Referências conferidas em 21/10/2026 (Planalto via proxy de leitura: Lei 12.016, arts. 5º, 6º, 7º, 12, 14, 22, 23 e 25; Lei 12.153, art. 2º; CPC, arts. 183 e 219; em 20/10/2026: Lei 8.437, Lei 9.494, Lei 5.021, Lei 10.259; súmulas no BNP/CNJ coletado em 19/10/2026; ADI 4296 por nota do Senado e notícias; termo inicial contra edital por informativo oficial do STJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
