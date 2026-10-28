---
name: revisao-de-beneficio
description: Use quando o advogado pedir revisão de aposentadoria, pensão ou auxílio já concedido, "revisão da vida toda", revisão do teto das ECs 20 e 41, recálculo da RMI, inclusão de tempo especial ou rural não reconhecido, ou perguntar se o prazo de decadência já venceu. Complementa peca-a-partir-da-ficha com a decadência do art. 103 da Lei 8.213 como ela está hoje, o que ainda cabe e o que caiu.
---

# Revisão de benefício

Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-previdenciario`. Quando o escritório tiver modelo, a estrutura dele manda e a lista abaixo vira conferência. Esta skill acrescenta a triagem de cabimento e a estrutura da revisão. Diferença da RMI é cálculo do advogado ou do sistema; a skill diz que parcelas entram.

**Plano:** a primeira saída é uma consulta ("dá pra fazer?"), não uma peça. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se a triagem barrar o caso (decadência consumada, assunto que caiu, não cabe), pare e responda a consulta (cabe ou não, por quê, o que ainda resta), sem plano e sem Estrutura. Mostre a conta de prazo como sugestão; a contagem final é do advogado.

## Antes do roteiro: a triagem em ordem

1. **Qual é o pedido?** Revisão do ato de concessão (RMI, tempo, carência), restabelecimento, ou indeferimento/cessação. Cada um tem tratamento de prazo diferente.
2. **Decadência (Lei 8.213, art. 103).**
   - O texto compilado do art. 103 diz 10 anos para revisar concessão, indeferimento, cancelamento ou cessação, contados do primeiro dia do mês seguinte ao do primeiro pagamento ou da ciência da decisão de indeferimento ou cessação. **O STF declarou inconstitucional o art. 24 da Lei 13.846/2019 no ponto em que reescreveu o art. 103 (ADI 6096, julgada em 13/10/2020; embargos rejeitados em 14/06/2021):** o prazo de decadência vale para a revisão da concessão, não para o indeferimento nem a cessação. O Decreto 3.048, art. 347, ainda traz o texto antigo: não o cite como se valesse.
   - STF, Tema 313: não há decadência para a concessão inicial; 10 anos para revisar benefícios concedidos, inclusive os anteriores à MP 1.523/1997, com a contagem começando em 01/08/1997.
   - STJ, Tema 975: o prazo de 10 anos atinge também a questão que o INSS não apreciou no ato de concessão.
   - Parcelas: prescrição de 5 anos antes do ajuizamento (art. 103, p.u.). Pergunte DIB, data do primeiro pagamento, data da ciência do indeferimento anterior, e se houve pedido administrativo de revisão.
3. **Pedido administrativo antes?** STF, Tema 350, item III: revisão, restabelecimento e manutenção podem ir direto a juízo, salvo se depender de fato novo, que o INSS ainda não viu (aí requerimento antes; a trava de novo pedido do art. 576-A da IN 128, redação da IN 208/2026, não alcança o pedido de revisão, que segue regra própria `[conferir: texto consolidado da IN 128]`).
4. **O assunto ainda existe?** Use o quadro abaixo.

## Quadro: cabe ou caiu

| Tema | Situação conferida |
|---|---|
| Revisão da vida toda | **Caiu.** STF, ADIs 2.110 e 2.111 (21/03/2024): a regra de transição do art. 3º da Lei 9.876 é obrigatória; STF, Tema 1102: tese substituída (o segurado não pode optar pela regra definitiva do art. 29, I e II, ainda que mais favorável), embargos julgados em sessão encerrada em 25/11/2025; sem devolução de valores recebidos por decisão até 05/04/2024 e sem cobrança de honorários e custas nas ações pendentes. O STJ, Tema 999, consta como acórdão publicado com recurso extraordinário pendente: não use. O BNP/CNJ mostra o Tema 1102 transitado em julgado e vigente (conferido em 19/10/2026). Não ajuíze. Se o cliente já tem ação, trate de custas e do cumprimento. |
| Teto das ECs 20/98 e 41/03 | **Cabe só se a DIB for anterior à emenda e a renda tiver sido limitada ao teto da época.** STF, Tema 76 (BNP/CNJ): a aplicação imediata do art. 14 da EC 20/1998 e do art. 5º da EC 41/2003 não ofende o ato jurídico perfeito quando se trata de benefícios "limitados a teto do regime geral estabelecido antes da vigência dessas normas". Pergunte a DIB e a carta de concessão: DIB até dezembro/1998 (EC 20) ou até dezembro/2003 (EC 41) com salário de benefício limitado ao teto. **DIB posterior à EC 41 (ex.: 2013): não cabe**, mesmo que a RMI tenha sido limitada ao teto, porque o benefício já nasceu sob o teto novo e não há diferença a recuperar por essas emendas. Se já houve ação civil pública, a prescrição interrompe na data do ajuizamento individual salvo pedido de suspensão (STJ, Tema 1005). Decadência: `[conferir: tratamento atual no STJ e na TNU]`. |
| Reconhecimento de tempo especial ou rural não computado | **Cabe**, dentro do prazo de 10 anos da concessão, como revisão do ato (Temas 313/STF e 975/STJ); prova e temas atuais em `inicial-aposentadoria` (Temas 1083, 1090 e 1209). |
| RMI com quadro mais favorável (direito adquirido) | **Cabe**: STF, Tema 334 (quadro mais favorável ao beneficiário, respeitadas decadência e prescrição). |
| Melhor benefício / opção | **Cabe** a opção pelo benefício mais vantajoso concedido no curso da ação (STJ, Tema 1018). |
| Desaposentação | **Vedada** (STF, Tema 503). |
| Pensão e benefícios anteriores à Lei 9.032/1995, novo coeficiente | **Não cabe** (STF, Tema 165). |
| Correção de salários anteriores à CF/1988 | **Não cabe** (STJ, Súm. 456). |
| Erro de CNIS, vínculo ou remuneração não considerada | **Cabe**, com prova do vínculo (art. 29-A, §5º). |
| Revisão do ato de aposentadoria por incapacidade pós-EC 103 | Cálculo constitucional (STF, Tema 1300); só discute DIB, tempo e média. |

Temas que não conferi (ex.: "buraco negro" e "buraco verde", revisão do art. 29, II): `[conferir: tema e prazo]` antes de aceitar o caso.

## Estrutura

1. Endereçamento (JEF ou vara; revisão com atrasados acima de 60 SM exige renúncia ou vara, Tema 1030/STJ), qualificação, valor da causa em lista.
2. **Fatos:** NB, DIB, data da concessão e do 1º pagamento, carta de concessão, memória de cálculo (peça ao INSS: cópia do processo administrativo).
3. **Tempestividade** como tópico próprio: base legal do prazo e a data conforme o item 2; por que não decaiu.
4. **Erro apontado:** qual período, salário de contribuição, índice ou regra, e a consequência na RMI; sem número final.
5. **Pedidos:** revisão da RMI desde a DIB, diferenças limitadas a 5 anos antes do ajuizamento, juros e correção segundo o título, honorários (Súm. 111/STJ), tutela dificilmente cabe (benefício já em pagamento).

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "<tese de revisão>" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou `buscar_jurisprudencia` pro STJ, o TRF da região e a TNU). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tese de revisão>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não ajuizar revisão da vida toda. Não prometer devolução ou êxito.
- Não contar decadência do indeferimento ou da cessação: só da concessão.
- Não tratar o texto compilado do art. 103 ou o art. 347 do Decreto como se ADI 6096 não existisse.
- Não calcular a diferença.
- Não dizer que a revisão do teto cabe só porque a RMI foi limitada ao teto: sem DIB anterior à EC 20 ou à EC 41, não cabe.
- Não montar plano nem peça para caso que a triagem barrou.

*Referências conferidas em 19/10/2026 e revisadas em 20/10/2026 (Planalto, STF, STJ, BNP/CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
