---
name: recurso-ordinario
description: Use quando o advogado pedir recurso ordinário trabalhista, RO contra sentença da Vara do Trabalho, recurso da reclamada ou do reclamante ao TRT, depósito recursal, custas do recurso ou recurso adesivo. Complementa peca-a-partir-da-ficha com o prazo, o preparo (custas e depósito, valores e isenções), o ataque capítulo a capítulo e a gratuidade na leitura atual.
---

# Recurso ordinário (CLT, art. 895)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-trabalhista`. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do RO. A sentença entra inteira, com a ata e os embargos, se houve.

## Prazo, prescrição e plano
Mostre a conta sugerida (termo inicial, regra de contagem, úteis ou corridos com a base legal, dias pulados, resultado provável), marcada `[conferir: calendário do TRT]` e nunca como data certa. Na PRIMEIRA mensagem, antes das perguntas, abra com **ALERTA DE PRAZO** se o prazo vence em 5 dias úteis ou menos, e com **ALERTA DE PRESCRIÇÃO** se faltam 60 dias ou menos ou a janela já abriu; prazo que JÁ venceu vai no topo, como **VENCIDO**. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (publicação × disponibilização; úteis × corridos): conte os dois cenários e use o mais curto, com `[conferir]`. Sem a data de hoje, pergunte. O plano ganha a linha "Prazo"; no máximo 5 perguntas, priorizadas, o resto vira `[DEFINIR]`. Onde esta skill divergir do módulo `area-trabalhista`, vale esta skill; avise o advogado.

Aqui o prazo é de 8 dias úteis (art. 895; art. 775; suspensão de 20/12 a 20/1, art. 775-A), contados do dia útil seguinte à intimação, e o preparo vence no mesmo dia (custas, art. 789, §1º; depósito, Súmula 245): mostre o último dia provável do recurso e do pagamento. Dois cenários: A, a data da ficha é a publicação; B, é a disponibilização. Vale o mais curto. Houve embargos de declaração: os tempestivos interrompem, os intempestivos não (art. 897-A, §3º); conte os dois.

## Antes do roteiro
- **Prazo:** 8 dias úteis (art. 895, caput; art. 775), com suspensão de 20/12 a 20/1 (art. 775-A). Sentença dada em audiência com as partes intimadas: conta dali (art. 852). Embargos de declaração tempestivos interrompem (art. 897-A, §3º). A conta vai no bloco acima. Ente público: prazo em dobro (DL 779/1969, art. 1º, III).
- **Perguntas:** qual lado, a data da intimação, o valor da condenação (ou o arbitrado), se já houve depósito na fase de conhecimento, a data do ajuizamento da ação, se o cliente tem gratuidade, se a reclamada é microempresa, EPP, MEI, doméstica, sem fins lucrativos, em recuperação judicial ou ente público.
- **Efeito:** devolutivo, com execução provisória até a penhora (art. 899, caput).

## Preparo (a deserção custa o recurso inteiro)
- **Custas:** 2% sobre o valor da condenação ou do acordo, mínimo R$ 10,64 e máximo de 4 vezes o teto do RGPS (art. 789, caput, I). Pagas pelo vencido, **pagas e comprovadas dentro do prazo recursal** (§1º). Condenação ilíquida: o juízo arbitra o valor (§2º).
- **Depósito recursal (só da reclamada):** vale o valor vigente **na data da interposição**, não o de hoje. Desde 01/08/2026, R$ 14.411,57 no RO (Ato SEGJUD.GP 381/2026); recurso interposto entre 01/08/2025 e 31/07/2026 usa o Ato SEGJUD.GP 391/2025, R$ 13.813,83 no RO (valor por notícia do TRT-3, ato não aberto); muda todo 1º de agosto: `[conferir vigente]`. Se a condenação for menor, o depósito é do valor dela; atingido o valor da condenação, não se exige novo depósito (art. 899, §1º; Súmula 128, I, do TST). Valor indeterminado: o das custas arbitradas (§2º). O depósito é feito em conta vinculada ao juízo (§4º). Pode ser substituído por fiança bancária ou seguro garantia judicial (§11). A Súmula 426 do TST (guia GFIP) foi cancelada em 2025: não cite. Prazo do depósito: feito e comprovado no prazo do recurso (Súmula 245 do TST). Litisconsortes: o depósito de uma reclamada aproveita às demais, salvo se a que depositou pediu exclusão (Súmula 128, III).
- **Insuficiência:** recolhimento a menor (custas ou depósito) não deserta de imediato: a OJ 140 da SBDI-1 (redação de 2017) manda abrir 5 dias pra complementar e comprovar (CPC, art. 1.007, §2º). O que não se salva é a falta total do recolhimento ou a comprovação fora do prazo do recurso (Súmula 245). Mesmo assim, confira a guia e o recibo: centavos a menos custam um incidente e, se o prazo aberto passar em branco, o recurso.
- **Quem é isento ou paga menos:**
  - beneficiário da justiça gratuita, entidade filantrópica e empresa em recuperação judicial: sem depósito (art. 899, §10);
  - entidade sem fins lucrativos, empregador doméstico, MEI, ME e EPP: depósito pela metade (§9º);
  - União, Estados, DF, Municípios e suas autarquias e fundações que não exploram atividade econômica, e o MPT: isentos de custas, mas reembolsam o vencedor (art. 790-A); sem depósito e custas ao final (DL 779/1969, art. 1º, IV e VI);
  - pessoa jurídica pede gratuidade só com prova cabal (Súmula 463, II, do TST).
- **Gratuidade (art. 790, §§3º e 4º, e ADC 80). Pergunte a data do ajuizamento da ação; sem ela, não escolha o regime.** Ajuizada a partir de 16/09/2026 (publicação da ata): ADC 80, presunção relativa até R$ 5.000,00 de renda e prova acima disso, e a Súmula 463, I, caiu (detalhe em `reclamacao-trabalhista`; `[conferir no acórdão]`). Ajuizada antes: regime anterior, Tema 21 do TST (`vigente=1` no BNP/CNJ), em que até 40% do teto concede de ofício e, acima, a declaração basta. Se a sentença negou ou revogou a gratuidade do cliente, ataque em preliminar e peça prazo pro recolhimento caso o relator indefira (`[conferir CPC, art. 99, §7º]`). **Cliente é a empresa e quer atacar a gratuidade do autor** (e os honorários de sucumbência, ADI 5766, `[conferir alcance]`): tópico próprio, com a prova da renda, pelo regime que a data indicar; veja se a impugnação já foi feita na defesa (`[conferir CPC, art. 100]`).

## Estrutura
1. **Interposição** ao juízo de origem, com pedido de remessa ao TRT, prova do preparo e, se for o caso, gratuidade.
2. **Razões:**
   - síntese da sentença e tempestividade, com a data da ficha;
   - nulidades e preliminares (cerceamento de defesa, negativa de prestação jurisdicional, nulidade por decisão modificativa sem vista, OJ 142 da SBDI-1);
   - **um tópico por capítulo** que a parte quer reformar, com o trecho da sentença, a prova dos autos e a razão da reforma. Ataque cada fundamento: no RO a exigência de impugnação específica é mitigada, mas razões inteiramente dissociadas da sentença não são conhecidas (Súmula 422, III, do TST);
   - pontos acessórios: honorários do art. 791-A (percentual, base e, se a sentença impôs sucumbência recíproca sobre pedido só parcialmente procedente, o Tema 242 do TST, IRR), multa do art. 793-C, honorários periciais, juros e correção, compensação;
   - **matéria da inicial ou da defesa que a sentença não apreciou:** peça que o TRT a aprecie (Súmula 393 do TST, efeito devolutivo em profundidade);
   - pedido de reforma com **o que muda** em cada capítulo.
3. **Recurso adesivo:** a parte que também sucumbiu pode aderir no prazo das contrarrazões (Súmula 283 do TST), com preparo próprio.
4. **Prequestionamento:** se há chance de revista, marque o trecho e o dispositivo (art. 896, §1º-A, I).

## Julgado
Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema do capítulo recorrido e no de "deserção, depósito recursal e custas" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou `buscar_tst`, `buscar_trt` se houver). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer
- Não reproduzir a contestação ou a inicial como razões.
- Não protocolar sem mostrar ao advogado o quadro do preparo (custas, depósito, isenção) e o prazo.
- Não pedir o que não foi pedido na inicial, nem trazer fato novo sem justificar `[conferir Súmula 8 do TST]`.
- Não calcular custas ou depósito além do que o ato oficial traz: `[valor: guia emitida pelo escritório]`.

*Referências conferidas em 19/10/2026 e revisadas em 20 e 21/10/2026 (Temas 21 e 242 do TST no BNP/CNJ; CLT e DL 779 no Planalto pelo proxy; Ato SEGJUD.GP 381/2026 no juslaboris e por notícias dos TRTs 6 e 12; Ato 391/2025 por notícia do TRT-3; Resolução 225/2025 no PDF oficial do juslaboris; OJ 140 e Súmulas 128, 245 e 422 por acórdãos e notícias do TST; ADC 80 pelo Informativo STF 1228 lido pelo proxy, acórdão não aberto, data da ata pelo boletim do TRT-11). Lei, súmula e tese mudam: por isso existe a conferência antes de protocolar.*
