---
name: pedido-pela-lai
description: Use quando o advogado pedir pedido de acesso à informação, requerimento pela LAI, "pedir cópia do processo/contrato/PAD ao órgão", recurso de negativa de acesso, ou resposta a pedido de sigilo. Complementa peca-a-partir-da-ficha com a Lei 12.527/2011 (prazo de 20 dias mais 10, recurso em 10 dias, informação pessoal e sigilo) numa peça curta.
---

# Pedido de acesso à informação (LAI)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga também o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`. Não existe módulo `area-administrativo` no Kit. É peça simples: o plano é de uma tela, até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se a triagem barrar o caso (ex.: o cliente é parte em processo e a via certa é a vista dos autos; ou o pedido é de dado pessoal de terceiro sem interesse público), pare e responda a consulta, sem plano.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

**ALERTA na primeira mensagem**, antes de qualquer pergunta ou plano (régua única): prazo processual ou contratual que vence em 5 dias úteis ou menos; decadência e prescrição a 60 dias ou menos, ou janela já aberta; prazo que já venceu vai no topo como VENCIDO. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (úteis × corridos, lei do ente): conte os dois cenários, use o mais curto e marque `[conferir]`. O plano ganha a linha "Prazo".

## Antes do roteiro

- **Qual ente e canal?** Cada ente tem canal e regulamento: federal (Decreto 7.724/2012, que fala em "sistema eletrônico específico" mantido pela CGU, art. 11-A: é a plataforma Fala.BR, falabr.cgu.gov.br, que uniu o e-SIC e o e-Ouv em 2019 e que parte dos estados e municípios também adotou `[conferir se o ente aderiu]`), estados e municípios têm lei ou decreto próprio, com base no art. 45 da Lei 12.527 `[conferir norma do ente e o prazo local]`. Peça o canal oficial ao cliente.
- **Quem pede e para quê?** Qualquer interessado pode pedir; o órgão não pode exigir os motivos (art. 10, §3º). Por isso a peça NÃO explica o motivo, salvo se o motivo for o que afasta o sigilo (art. 21: direitos fundamentais; art. 31, §3º: dado pessoal sem consentimento por ordem judicial, III, defesa de direitos humanos, IV, ou interesse público e geral preponderante, V; §4º: a restrição não serve pra barrar apuração de irregularidade do próprio titular). Informe-se: o cliente quer a informação para um PAD, concurso, licitação, ação? Isso orienta o pedido, não aparece nele.
- **Prazo (conta sugerida a conferir):** resposta em até 20 dias, prorrogáveis por 10 com justificativa (art. 11, §§1º e 2º). A lei não diz úteis; trate como dias corridos, com a Lei 9.784, art. 66, §2º, de apoio federal `[conferir norma do ente]`. Recurso: 10 dias da ciência da resposta ou da negativa, e a autoridade superior decide em 5 dias (art. 15). No Executivo federal, depois de ao menos uma autoridade superior ter decidido, cabe recurso à CGU, que decide em 5 dias (art. 16, caput e §1º; no Decreto 7.724, arts. 21 a 23: 10 dias pra cada recurso, 5 pra decidir, e reclamação por omissão de resposta, art. 22), e da CGU à Comissão Mista de Reavaliação de Informações (art. 16, §3º). Abra o resumo com **ALERTA** se o recurso vence em 5 dias úteis ou menos, ou se o prazo da resposta venceu e o cliente precisa recorrer.
- **Ficha mínima:** órgão e ente, informação ou documento específico (número do processo, período, tipo de documento), formato desejado (cópia digital), data do pedido e protocolo anterior, resposta e data, justificativa do órgão.

## Estrutura (até uma página)

1. Destinatário (órgão, serviço de informação ao cidadão); identificação do requerente com o mínimo exigido (art. 10).
2. Fundamento: Lei 12.527/2011 e a norma do ente.
3. O pedido, específico e numerado: o que, de quando a quando, em que formato. Peça cópia digital (art. 11, §5º) ou certidão/extrato se parte estiver protegida (art. 7º, §2º). Fórmula: "caso haja parte sigilosa, que seja fornecida a parte restante com a tarja da protegida".
4. Pedido subsidiário: se o órgão não tiver a informação, que indique quem a tem ou encaminhe (art. 11, §1º, I a III).
5. Fecho: ciência do prazo do art. 11 e do direito ao inteiro teor da negativa (art. 14).

Se for **recurso**: peça separada, com resposta recebida, razões (a negativa é motivada? cita o dispositivo? classificou o sigilo com grau e prazo?), e pedido de reforma. **Resposta a pedido de sigilo** (se o cliente é o ente): fundamentar a classificação (art. 24: ultrassecreta 25 anos, secreta 15, reservada 5; critério menos restritivo), ou a restrição de informação pessoal (art. 31).

## Teses e pedidos que costumam caber

- **Gratuidade:** a busca e o fornecimento são gratuitos; só se cobra o custo de reprodução (art. 12, §1º), e quem não pode pagar sem prejuízo do próprio sustento é isento por declaração (§2º).
- **Negativa sem fundamento** gera responsabilização (art. 7º, §4º; art. 32) e é nula se genérica.
- **Informação pessoal** fica restrita por até 100 anos a agentes autorizados e ao titular (art. 31, §1º). Não peça PAD de terceiro sem avisar o cliente do risco de negativa; dado do próprio cliente é seu direito.
- **Direitos fundamentais:** informação necessária à tutela judicial ou administrativa de direitos fundamentais não pode ser negada (art. 21).
- **Via judicial:** se a negativa persiste, o caminho é o mandado de segurança ou a ação de obrigação de fazer; é outra peça (veja `mandado-de-seguranca`).
- Não há julgado a buscar para um pedido simples; só se o advogado pedir tese de recurso, aí vale o bloco abaixo.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir, só quando houver tese de recurso ou negativa: `buscar_precedentes` no tema "Lei de Acesso à Informação negativa de acesso informação pessoal" (súmula e precedente qualificado primeiro) e `buscar_em_todos`. Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não justificar o pedido além do necessário: o motivo pode virar pretexto para negar.
- Não pedir "todos os documentos": no federal, não se atende pedido genérico, desproporcional ou desarrazoado, nem o que exija análise, interpretação ou consolidação de dados fora da competência do órgão (Decreto 7.724/2012, art. 13); estado e município têm regra própria `[conferir]`.
- Não deixar o prazo de recurso (10 dias) passar sem protocolo.
- Não pedir dado pessoal de terceiro sem fundamento no art. 31.
- Não usar a LAI para obter prova que a vista do processo já garante.

*Referências conferidas em 21/10/2026 (Planalto via proxy de leitura: Lei 12.527, arts. 7º, 10, 11, 12, 14, 15, 16, 21, 24, 31 e 45, e arts. 8º-A e 8º-B da Lei 15.141/2025, que tratam de divulgação proativa de remuneração, não do pedido; Decreto 7.724, arts. 11-A, 13 e 21 a 23; Fala.BR por tutoriais oficiais de órgãos federais, 2025-2026). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
