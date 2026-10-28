---
name: acordo-extrajudicial
description: Use quando o advogado pedir acordo extrajudicial trabalhista, homologação de acordo na Justiça do Trabalho, petição conjunta de acordo, art. 855-B da CLT, quitação de verbas com homologação, ou minuta de acordo de rescisão pra homologar. Complementa peca-a-partir-da-ficha com os requisitos dos arts. 855-B a 855-E, as cláusulas que o juízo olha, prescrição, multa do art. 477 e a quitação limitada.
---

# Acordo extrajudicial (CLT, arts. 855-B a 855-E)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-trabalhista`. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do processo de homologação: duas partes, dois advogados, uma petição.

## Prazo, prescrição e plano
Mostre a conta sugerida (termo inicial, regra de contagem, úteis ou corridos com a base legal, dias pulados, resultado provável), marcada `[conferir: calendário do TRT]` e nunca como data certa. Na PRIMEIRA mensagem, antes das perguntas, abra com **ALERTA DE PRAZO** se o prazo vence em 5 dias úteis ou menos, e com **ALERTA DE PRESCRIÇÃO** se faltam 60 dias ou menos ou a janela já abriu; prazo que JÁ venceu vai no topo, como **VENCIDO**. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (publicação × disponibilização; úteis × corridos): conte os dois cenários e use o mais curto, com `[conferir]`. Sem a data de hoje, pergunte. O plano ganha a linha "Prazo"; no máximo 5 perguntas, priorizadas, o resto vira `[DEFINIR]`. Onde esta skill divergir do módulo `area-trabalhista`, vale esta skill; avise o advogado.

Aqui o prazo que pesa é o do art. 477, §6º (10 dias do término do contrato). É prazo de direito material, não processual: conta em dias corridos, excluído o dia da notificação da dispensa e incluído o do vencimento (OJ 162 da SBDI-1, que aplica o art. 132 do CC; texto por acórdão do TST), e, se o 10º dia cai em sábado, domingo ou feriado, o TST prorroga pro dia útil seguinte (CC, art. 132, §1º, nos mesmos acórdãos). Não conte em dias úteis: o art. 775 só rege os prazos do Título X. Mostre a conta com `[conferir: calendário]`. Se a data já passou, vai no topo como VENCIDO, com a multa do §8º já configurada: a petição não a afasta (art. 855-C). Conte também, se o escritório é do trabalhador, o seguro-desemprego (abaixo).

## Antes do roteiro
- **Lado e quem assina:** pergunte se o escritório representa a empresa ou o trabalhador. **Cada parte tem advogado próprio; advogado comum é vedado** (art. 855-B, §1º). O trabalhador pode ser assistido pelo advogado do sindicato (§2º). Petição conjunta, assinada pelas partes e pelos dois advogados (caput).
- **Competência:** a Vara do Trabalho decide a homologação (art. 652, f); foro pelo art. 651 `[conferir regra do foro no TRT]`.
- **O que o juiz faz:** em 15 dias da distribuição, analisa, pode designar audiência e profere sentença (art. 855-D). Homologar é faculdade do juiz, e a recusa não se ataca por mandado de segurança (Súmula 418 do TST, na redação pós-CPC/2015: homologar é faculdade do juiz, sem direito líquido e certo). Escreva pra convencê-lo, não pra obrigá-lo.
- **Prescrição:** a petição suspende a prescrição só quanto aos direitos nela especificados, e volta a correr no dia útil seguinte ao trânsito em julgado da decisão que negar a homologação (art. 855-E). Daí a regra: **liste cada direito objeto do acordo.**
- **Multa de rescisão:** o acordo não afasta o prazo de 10 dias do art. 477, §6º, nem a multa do §8º (art. 855-C). Pergunte a data de saída e se as verbas foram pagas. Se a ficha mostra rescisórias não pagas além dos 10 dias, trate como já vencido (topo da primeira mensagem) e, do lado da empresa, sugira pagá-las já, fora do acordo, pra não aumentar a multa.
- **Lado do trabalhador:** o texto de risco desta skill é da empresa; se o escritório é do trabalhador, exija o pagamento das rescisórias fora do acordo, recuse quitação geral, confira que ele recebe TRCT e guias e conte o seguro-desemprego: requerimento do 7º ao 120º dia da dispensa. Esse prazo é da Resolução CODEFAT 957/2022 (que substituiu a 467/2005), não da Lei 7.998/1990, que só fixa o termo inicial; o STJ, no Tema 1136 (repetitivo, vigente no BNP/CNJ), considerou legal o prazo máximo fixado em ato infralegal. Texto da resolução não aberto: `[conferir]`. Se o acordo corre contra essa data, ALERTA DE PRAZO.
- **Documentos e dados:** CTPS, contrato, TRCT (se houver), holerites, comprovante de pagamento, dados bancários, valores e datas combinados, advogados de cada lado com OAB, procuração com poderes especiais pra transigir e dar quitação (`[conferir CPC, art. 105]`).

## Estrutura
1. Endereçamento à Vara (art. 652, f) e qualificação das duas partes e dos dois advogados. Rito: processo de jurisdição voluntária, homologação de acordo extrajudicial.
2. **Exposição:** vínculo (função, salário, admissão, saída, modalidade) e a controvérsia que o acordo previne ou encerra, em poucas linhas. Se o contrato terminou por acordo do art. 484-A (aviso e multa do FGTS pela metade, saque de até 80%, sem seguro-desemprego), diga.
3. **Cláusulas:**
   - objeto: **cada parcela e cada direito especificado**, com valor e natureza (indenizatória ou remuneratória), não "quitação geral";
   - valor total e forma: à vista ou parcelas, datas, conta de depósito, vencimento antecipado e multa pelo descumprimento (como no acordo judicial do art. 846, §2º, por analogia);
   - **quitação limitada** ao objeto discriminado e ao que a petição declara;
   - contribuição previdenciária e imposto de renda: parcelas, responsabilidade de cada parte e intimação da União quando houver parcela indenizatória (art. 832, §§3º e 4º);
   - **custas:** se nada se convencionar, dividem-se por igual (art. 789, §3º); diga quem paga;
   - honorários de cada advogado a cargo de quem o contratou, e se o trabalhador fica sem desconto;
   - declaração de que as partes entendem os termos, sem coação, e liberdade de vontade do trabalhador.
4. Pedidos: homologação, extinção com resolução do mérito quanto aos direitos especificados, expedição de alvará se o pagamento for judicial, intimação da União.
5. Local, data e assinaturas.

## O que o juízo estranha (e o que fazer)
- **Quitação geral do contrato:** pode ser recusada por abarcar direitos que a petição não discrimina. Mantenha a quitação no objeto.
- **Valor muito abaixo do devido sem justificativa:** diga o motivo (incerteza de prova, risco da demanda) em uma frase.
- **Advogado comum ou "assistência" de fachada:** o juiz designa audiência.
- **Acordo só pra a empresa se livrar de multa do art. 477:** não afasta (art. 855-C).
- **Lide simulada:** não use o procedimento pra quitar direitos que não estão em discussão real. Se a ficha parecer isso, avise o advogado.

## Julgado
Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "homologação de acordo extrajudicial, art. 855-B da CLT, quitação" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou `buscar_tst`). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer
- Não pôr o mesmo advogado nos dois lados, nem sugerir isso.
- Não redigir "dar plena e geral quitação do extinto contrato" sem a limitação ao objeto.
- Não esquecer a data de pagamento das rescisórias.
- Não calcular os valores: use `[valor: acordado entre as partes]`.

*Referências conferidas em 19/10/2026 e revisadas em 20 e 21/10/2026 (CLT no Planalto pelo proxy; Súmula 418 e OJ 162 por acórdãos e notícias do TST; Tema 1136 do STJ no BNP/CNJ; Resolução CODEFAT 957/2022 por fonte secundária). Lei, súmula e tese mudam: por isso existe a conferência antes de protocolar.*
