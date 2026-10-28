---
name: agravo-de-peticao
description: Use quando o advogado pedir agravo de petição, recurso contra decisão na execução trabalhista, recurso da sentença dos embargos à execução ou da impugnação à conta, ou quiser delimitar matéria e valores impugnados. Complementa peca-a-partir-da-ficha com o cabimento, a delimitação justificada do art. 897, §1º, o que se pode discutir na execução, preparo e o caminho até a revista.
---

# Agravo de petição (CLT, art. 897, a)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-trabalhista`. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do agravo de petição. A decisão agravada entra inteira, com os embargos ou a impugnação que ela julgou.

## Prazo, prescrição e plano
Mostre a conta sugerida (termo inicial, regra de contagem, úteis ou corridos com a base legal, dias pulados, resultado provável), marcada `[conferir: calendário do TRT]` e nunca como data certa. Na PRIMEIRA mensagem, antes das perguntas, abra com **ALERTA DE PRAZO** se o prazo vence em 5 dias úteis ou menos, e com **ALERTA DE PRESCRIÇÃO** se faltam 60 dias ou menos ou a janela já abriu; prazo que JÁ venceu vai no topo, como **VENCIDO**. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (publicação × disponibilização; úteis × corridos): conte os dois cenários e use o mais curto, com `[conferir]`. Sem a data de hoje, pergunte. O plano ganha a linha "Prazo"; no máximo 5 perguntas, priorizadas, o resto vira `[DEFINIR]`. Onde esta skill divergir do módulo `area-trabalhista`, vale esta skill; avise o advogado.

Aqui o prazo é de 8 dias úteis (art. 897; art. 775; suspensão de 20/12 a 20/1, art. 775-A) da intimação da decisão agravada, e o quadro de delimitação do §1º tem de estar pronto dentro dele: mostre o último dia provável, em dois cenários (publicação × disponibilização), vale o mais curto, e trate o quadro como parte do prazo, não como acabamento. Embargos de declaração tempestivos interrompem; os intempestivos não (art. 897-A, §3º).

## Antes do roteiro
- **Prazo:** 8 dias úteis (art. 897, caput; art. 775), com suspensão de 20/12 a 20/1 (art. 775-A). Embargos de declaração tempestivos interrompem (art. 897-A, §3º). A conta vai no bloco acima.
- **Cabimento:** decisões do juiz na execução. Decisão **interlocutória** não tem recurso imediato: só se aprecia no recurso da decisão definitiva (art. 893, §1º). O TST reafirmou em 2025 que a rejeição de exceção de pré-executividade, quando interlocutória, é irrecorrível de imediato (Tema 144 do TST, IRR): a matéria volta nos embargos. Acolhida a exceção com extinção da execução, aí cabe o agravo. Exceção legal: a decisão do incidente de desconsideração da personalidade jurídica na execução cabe agravo de petição, sem garantia do juízo (art. 855-A, §1º).
- **Julgamento:** se a decisão é de juiz de 1ª instância, julga uma Turma do TRT (art. 897, §3º).
- **Pergunte:** qual decisão, o que ela decidiu em cada ponto, o valor incontroverso, quem agrava (executado, exequente ou União), se o juízo está garantido, se há contribuição previdenciária no meio e a data do ajuizamento da ação (gratuidade que pese em custas ou honorários: antes de 16/09/2026, regime anterior, Tema 21 do TST e Súmula 463, I; depois, ADC 80, detalhe em `reclamacao-trabalhista`).

## O requisito que reprova o agravo: delimitação (art. 897, §1º)
O agravo só é recebido se o agravante **delimitar, justificadamente, as matérias e os valores impugnados**. A parte remanescente é executada de imediato. Por isso a peça começa com um quadro:

| Matéria | Valor impugnado | Valor incontroverso | Onde a decisão a tratou |
|---|---|---|---|

- Sem quadro, sem valor ou sem justificativa: não conhecimento.
- Valor impugnado: `[valor: cálculo do escritório]`; a skill lista a conta alternativa, não calcula.
- Contribuição previdenciária isolada: agravo com autos apartados (art. 897, §8º). Se a União recorre só disso, é o caso dela.

## O que se pode discutir (e o que já passou)
- Em execução, a defesa do executado cabe nos embargos: cumprimento, quitação, prescrição e inexigibilidade do título (art. 884, §§1º e 5º). **Matéria não levada aos embargos ou à impugnação é inovação**: o agravo a reabre só se for de ordem pública.
- Coisa julgada: a liquidação não inova a sentença (art. 879, §1º).
- Prescrição intercorrente: 2 anos (art. 11-A); a Súmula 114 do TST foi cancelada em 2025.
- Penhora e garantia: ordem do art. 835 do CPC (art. 882); impenhorabilidade `[conferir CPC, art. 833]`.
- Correção e juros: o que a sentença fixou e o que o TRT aplica (ADC 58 e Lei 14.905/2024: veja `impugnacao-de-calculos-e-embargos-a-execucao`).

## Preparo
- **Custas da execução:** a cargo do executado, pagas ao final (art. 789-A, IV: agravo de petição R$ 44,26). Exequente não paga adiantado.
- **Depósito recursal:** garantido o juízo, não se exige novo depósito pra recorrer na execução (Súmula 128, II, do TST; se o débito subiu, complemente a garantia). Se o juízo não está garantido, avise o advogado do risco e do valor do ato vigente na data da interposição (R$ 14.411,57 no RO desde 01/08/2026, Ato SEGJUD.GP 381/2026; `[conferir o aplicável ao agravo]`).
- Ente público: DL 779/1969, art. 1º, III, IV e VI (prazo em dobro, sem depósito, custas ao final).

## Estrutura
1. Interposição ao juízo da execução. 2. **Quadro de delimitação.** 3. Tempestividade e preparo. 4. Tópicos por matéria: a decisão transcrita, o fundamento atacado, a conta alternativa. 5. Prequestionamento: **revista em execução só cabe por ofensa direta à Constituição** (art. 896, §2º; `[conferir Súmula 266 do TST]`); se for o caminho, ponha o dispositivo constitucional já aqui e nos embargos de declaração. 6. Pedido: provimento, o que muda, liberação do incontroverso.

## Julgado
Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema agravado (por exemplo "agravo de petição, delimitação de matérias e valores" ou "prescrição intercorrente trabalhista") (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou `buscar_tst`). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer
- Não agravar sem o quadro de matérias e valores.
- Não repetir os embargos: ataque a decisão que os julgou.
- Não trazer matéria nova, nem reabrir a sentença da fase de conhecimento.
- Não esquecer o incontroverso: o executado que não o paga arrisca penhora do que concorda dever.

*Referências conferidas em 19/10/2026 e revisadas em 20 e 21/10/2026 (CLT e DL 779 no Planalto pelo proxy; Resolução 225/2025 no PDF oficial do juslaboris; Ato SEGJUD.GP 381/2026 no juslaboris e por notícias dos TRTs 6 e 12; Tema 144 do TST no BNP/CNJ; Súmula 128 por acórdãos do TST). Lei, súmula e tese mudam: por isso existe a conferência antes de protocolar.*
