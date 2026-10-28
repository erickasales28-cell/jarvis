---
name: prazos-da-semana
description: Use quando o advogado pedir "monta a semana", "planilha de prazos da semana", "o que vence essa semana e quem faz", "distribui os prazos entre a equipe", "o que eu entrego até sexta" ou colar as pendências e publicações da semana pra organizar por prioridade e responsável. Complementa gestao-de-prazos-e-intimacoes (tria o dia e faz a conta de um prazo) e da-intimacao-a-providencia (tria o lote e redige o expediente): esta é a visão da SEMANA, com responsável, data interna de entrega e carga por pessoa.
---

# Prazos da semana

Antes, use a skill `advo-escritorio` e leia nela `metodos/gestao-de-prazos-e-intimacoes.md` e `metodos/peca-a-partir-da-ficha.md`. Abra o perfil do escritório (cidade, UF, tribunais, equipe) e o `PENDENCIAS.md` dos casos.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se faltar o perfil da equipe ou a lista de pendências, pare e peça. Não invente responsável.

## Qual skill usar

- **Uma publicação ou o lote do dia, com conta e peça:** `da-intimacao-a-providencia` ou `gestao-de-prazos-e-intimacoes`.
- **A semana inteira, quem faz o quê e até quando:** esta skill.
- Publicação **crua** colada aqui: faça antes a triagem e a conta pelo método `gestao-de-prazos-e-intimacoes` (ou `da-intimacao-a-providencia`), e só então monte a semana.

## Primeira mensagem: ALERTA e conta, antes de tudo

Com pendências em mãos, a **primeira mensagem** abre com o ALERTA (prazo provável em 5 dias úteis ou menos) e a conta de cada linha, **antes de qualquer pergunta ou plano**. O plano ganha a linha "Prazo" (o que vence primeiro e a data sugerida). Falta equipe, margem ou agenda? Monte a semana com `[definir]` e `[conferir]` e pergunte depois.

**Regra de contagem incerta** (úteis × corridos, transição de lei, feriado local): conte **os dois cenários**, **priorize pelo mais curto** e marque `[conferir]`; o ALERTA usa a data mais curta.

## Antes (pergunte, no máximo 5)

1. Qual a semana (segunda a sexta, com datas)?
2. Quem está na equipe e quem pega que tipo de tarefa (titular, associado, estagiário, correspondente)?
3. Que audiências, perícias e compromissos já estão na agenda dessa semana?
4. O escritório tem margem interna de entrega (por exemplo, dois dias úteis antes do vencimento)? Sem resposta, use dois dias úteis e diga que usou.
5. Há feriado local, suspensão do tribunal ou recesso na semana?

## Como montar

1. Reúna as pendências (`PENDENCIAS.md`, triagens e o que o advogado colou). Cada uma precisa de processo, ato, providência e o **vencimento sugerido com a conta**. Pendência sem conta: devolva "sem conta, rode a triagem".
2. **Mostre a conta em cada linha**, em uma linha só: `disponibilização dd/mm → publicação dd/mm → início dd/mm → N dias [úteis|corridos] → vence dd/mm (sugerido)`. Base: publicação no primeiro dia útil seguinte à disponibilização (Lei 11.419/2006, art. 4º, §3º; CPC, art. 224, §2º); início no primeiro dia útil seguinte à publicação (Lei 11.419, art. 4º, §4º; CPC, art. 224, §3º); dias úteis (CPC, art. 219); suspensão de 20/12 a 20/01 (CPC, art. 220). **O dia do início conta como dia 1**; a publicação não conta (CPC, art. 224, caput). Ex.: disponibilização na sexta, publicação na segunda, início na terça = dia 1; 5 dias úteis = terça a segunda, vence na segunda seguinte (sugerido). **Dobra** (Fazenda, art. 183; Defensoria, art. 186) conta da intimação pessoal e **não vale** quando a lei fixa prazo próprio ao ente (art. 183, §2º; art. 186, §4º), nos juizados especiais (Lei 10.259, art. 9º; Lei 12.153, art. 7º) nem pra escritório contratado pelo ente sem procuradoria própria (`[conferir jurisprudência]`); litisconsortes de escritórios diferentes (art. 229) só em autos físicos (§2º). Penal é corrido: o módulo da área manda. **Meio:** pra advogado, quando a lei não exige intimação pessoal, o prazo conta do DJEN, e a comunicação concomitante pelo painel do sistema é só informativa (Res. CNJ 455/2022, art. 11, §3º, na redação da Res. 569/2024); Domicílio Judicial Eletrônico, intimação pessoal ou intimação só pelo portal: conta à parte pela `da-intimacao-a-providencia`. Nunca escreva a data como certa: é **sugestão a conferir** (feriado local, suspensão do tribunal, rito, dobro).
3. **Prioridade:**
   - **P1:** vence hoje, amanhã ou em até 5 dias úteis; tutela; réu preso; sentença.
   - **P2:** vence nesta semana (sem ser P1).
   - **P3:** vence depois desta semana, com data.
   - **P4:** sem prazo ou só providência.
4. **ALERTA no topo** (régua única): prazo processual ou contratual que vence em **5 dias úteis ou menos**; decadência ou prescrição a 60 dias ou menos, ou janela já aberta; conta que não fecha (data de disponibilização faltando, meio diferente do DJEN). Prazo que **já venceu** vai no topo como VENCIDO. Vencimento em dia sem expediente: mostre a prorrogação legal e, pra planejar, o dia útil anterior. O alerta lista processo, ato e vencimento sugerido. Prazo curto escondido na tabela é o erro que esta skill existe pra evitar.
5. **Data interna de entrega** = vencimento sugerido menos a margem. Se a margem cair antes de hoje, marque "já dentro da margem" e suba pra P1.
6. **Responsável:** só quem o advogado indicou ou o perfil define. Sem indicação: `[definir]`. Aviso de carga quando uma pessoa tiver mais de três entregas P1 ou P2 no mesmo dia ou tiver audiência no dia de uma entrega.
7. **Conflito de agenda:** audiência ou perícia no mesmo dia da data interna vira linha de aviso. Audiência na semana: lembre de **avisar o cliente** (data, hora, local, comparecimento).

## Saída

```
ALERTA: [processo] · [ato] · vence (sugerido) dd/mm, em N dias úteis [só se houver]

SEMANA DE dd/mm A dd/mm
| Prio | Processo | Ato / providência | Responsável | Entrega interna | Vence (sugerido) | Conta | Skill que abre |
(ordem: prioridade, depois data)

POR PESSOA
[nome]: [N entregas · dias mais carregados]

FICA PRA SEXTA
Abertos: ... · Entra na segunda: ... · Sem prazo: ...

CONFIRA
Feriado local, suspensão do tribunal, rito e dobro são do advogado. Confira cada prazo no calendário do tribunal antes de lançar na agenda.
```

Com planilha ou execução de código ligada, entregue também .xlsx ou .csv com as mesmas colunas, e um .ics só depois de o advogado conferir as datas.

## Não fazer

- Cravar vencimento como certo. Nem "vence dia X": sempre "vence (sugerido) dia X".
- Atribuir tarefa a alguém por palpite.
- Esconder prazo curto fora do ALERTA.
- Misturar prazo de outro rito: o módulo `area-…` manda (trabalhista em dias úteis pela CLT; penal corrido).
- Incluir CPF, endereço ou dado de saúde na planilha. Use apelido do caso e número do processo.

*Referências conferidas em 21/10/2026 (CPC, arts. 183, 186, 219, 220, 224 e 229, Lei 11.419/2006, art. 4º, Lei 10.259, art. 9º, e Lei 12.153, art. 7º, pelo Planalto via proxy; Resolução CNJ 569/2024, texto oficial em atos.cnj.jus.br, que dá a redação do art. 11, §3º, da Resolução 455/2022; dobra de escritório contratado pelo ente: sem precedente confirmado). Feriado local, suspensão e prática do tribunal são do advogado.*
