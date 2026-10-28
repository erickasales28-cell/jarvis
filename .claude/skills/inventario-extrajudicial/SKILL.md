---
name: inventario-extrajudicial
description: Use quando o advogado pedir inventário em cartório, minuta de escritura de inventário e partilha, escritura de adjudicação, "inventário extrajudicial com herdeiro menor", "com testamento", "com união estável" ou checagem se cabe cartório. Se o pedido não diz cartório ou juízo, rode primeiro o teste de cabimento. Complementa peca-a-partir-da-ficha com o teste da Res. CNJ 35/2007 com a 571/2024, as condições para herdeiro incapaz e testamento, o conteúdo da escritura e o ITCMD estadual.
---

# Inventário extrajudicial

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em `metodos/peca-a-partir-da-ficha.md`), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-familia-e-sucessoes` (mesma pasta). Se a skill `advo-escritorio` não estiver instalada, avise e não redija. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do inventário em cartório.

## Antes do roteiro

Teste de cabimento, nesta ordem, e mostre o resultado:
1. **Consenso e advogado:** todos os interessados concordam e são assistidos por advogado ou defensor (CPC 610, §§1º e 2º). Litígio: judicial (skill `inventario-judicial-e-arrolamento`).
2. **Tabelião:** livre escolha, sem as regras de competência do CPC (Res. 35/2007, art. 1º, redação da Res. 571/2024).
3. **Herdeiro menor ou incapaz** (Res. 35, art. 12-A): possível se (a) o quinhão ou a meação são pagos em **parte ideal de cada bem** (sem partilha cômoda, sem bem a bem desigual) e (b) o MP manifesta-se favoravelmente, com a escritura enviada pelo tabelião. Nascituro: espera o registro de nascimento ou a prova de que não nasceu com vida. Impugnação do MP ou de terceiro leva ao juízo.
   - **Quem representa o incapaz?** Pergunte sempre: pais (poder familiar), tutor (se os pais morreram ou foram destituídos) ou curador. Peça o termo de tutela ou curatela e o documento do representante.
   - **Conflito de interesse:** se o representante é coerdeiro (o pai viúvo que herda com o filho, o irmão tutor), os interesses podem colidir na partilha e nas renúncias e cessões. Não decida: leve ao advogado. A via é o curador especial (CC 1.692; CPC 72, I). O art. 12-A não trata de representação nem de conflito: a eficácia da escritura depende do parecer favorável do MP (§3º), é vedado ato de disposição sobre bem do incapaz (§1º) e qualquer impugnação do MP ou de terceiro leva ao juízo (§4º). Representação irregular ou conflito não resolvido: juízo.
4. **Testamento** (art. 12-B): cabe se houver advogado para todos, autorização judicial em ação de abertura e cumprimento do testamento, e capacidade e concordância de todos. Se o testamento reconhece filho, a via extrajudicial fica vedada. Consulta ao CENSEC sempre, mesmo sem testamento aparente.
5. **Companheiro** (arts. 18 e 19): herda se a união é reconhecida pelos demais sucessores, ou se é o único sucessor e já a tem reconhecida em juízo, escritura ou termo declaratório registrados. Meação reconhecida em escritura com concordância dos herdeiros capazes e observado o art. 12-A se houver incapaz.
6. **Herdeiro único** (art. 26): escritura de inventário e adjudicação, respeitado o art. 12-A.
7. **Recusa:** o tabelião pode recusar por escrito havendo fundados indícios de fraude ou simulação ou dúvida sobre a vontade de herdeiro ou do inventariante (art. 32, §2º).

Texto consolidado da Res. 35 aberto em atos.cnj.jus.br (ato 179) em 20/10/2026; a Res. 35 e o CNN (Prov. 149/2023) mudam com frequência: reabra antes de lavrar.

## Estrutura da minuta

1. Qualificação do autor da herança (óbito, certidão, último domicílio) e de todos os herdeiros, meeiro, cessionários, advogado. **Representação do incapaz:** nome do herdeiro incapaz, quem o representa (pais, tutor ou curador, com o título), eventual curador especial, e a manifestação do MP.
2. Declaração sobre testamento, outros herdeiros, nascituro, dívidas e ações; menção à autorização judicial do testamento, se houver.
3. Regime de bens e união estável, com o título que a comprova.
4. Nomeação do inventariante.
5. Relação dos bens com descrição de matrícula, valor e origem; dívidas.
6. **ITCMD:** valor declarado, base, comprovação do lançamento ou recolhimento. Imposto estadual: alíquota, prazo, multa e forma pela lei do estado, sempre [conferir lei do estado]. Base de cálculo, alíquota da abertura da sucessão, progressividade por quinhão e competência: normas gerais da LC 227/2026, arts. 152 e 156 a 159, detalhadas na skill `inventario-judicial-e-arrolamento` (Súmula 112 do STF; EC 132/2023); VGBL e PGBL sem ITCMD no repasse ao beneficiário (STF, Tema 1214).
7. Partilha: quinhão de cada um; partes ideais se há incapaz; renúncias (CC 1.806) e cessões (CC 1.793, escritura pública), com a natureza fiscal declarada.
8. Reserva de sobrepartilha; poderes de procuração; assinaturas e advogado.

## Teses e pedidos que costumam caber

- **Venda de imóvel do espólio na própria escritura** sem alvará (Res. 35, art. 11-A, seis requisitos nos incisos I a VI), com despesas discriminadas, preço vinculado, garantia e prazo de pagamento de até um ano (§§1º a 3º). O bem vendido entra no acervo para emolumentos e imposto e não é partilhado.
- **Valor dos bens:** o inventariante declara (art. 32, caput); se a Fazenda discordar, o tabelião pode cobrar a diferença de emolumentos (§1º).
- **Sobrepartilha por escritura**, inclusive de inventário judicial encerrado e mesmo que o herdeiro, hoje capaz, fosse incapaz à época (art. 25).
- **Prazo do CPC 611** (2 meses e 12): multa fiscal é de lei estadual [conferir].
- **Roteiro de documentos:** certidão de óbito, documentos dos herdeiros, certidões de casamento, matrículas atualizadas, certidões negativas, extratos, DUT, quotas; lista para o cliente.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "inventário extrajudicial com testamento" e "inventário extrajudicial com herdeiro incapaz" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Tema 1074 do STJ, Tema 1214 e Súmula 112 do STF podem entrar pelo número.

## Não fazer

- Não negar o cartório só porque há menor ou testamento, nem aceitar sem as condições da Res. 571/2024.
- Não pôr bem a bem desigual com herdeiro incapaz.
- Não calcular ITCMD, emolumentos nem quinhão.
- Não omitir a consulta ao CENSEC.
- Não tratar a partilha desigual como neutra: avise do imposto de doação.

*Referências conferidas em 20/10/2026 (CNJ, Planalto, STF, STJ, BNP/CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
