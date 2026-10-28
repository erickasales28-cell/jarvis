---
name: transacao-e-parcelamento
description: Use quando o advogado pedir transação tributária, transação com a PGFN, parcelamento de dívida ativa, parcelamento ordinário, regularizar dívida no REGULARIZE, aderir a edital, ou perguntar se vale a pena parcelar ou transacionar. Complementa peca-a-partir-da-ficha com o roteiro de decisão (Lei 13.988/2020, editais vigentes da PGFN, Lei 10.522/2002), a lista do que a adesão custa em direitos e o aviso de prazo de adesão. Não calcula parcela nem desconto.
---

# Transação e parcelamento de dívida fiscal

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Plano com até 5 perguntas. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-tributario` (mesma pasta). Esta skill não é peça processual: é checklist e roteiro de decisão. **Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se a triagem barrar o caso (dívida fora da dívida ativa, prazo de adesão encerrado, edital que não alcança o débito), pare e responda a consulta, sem plano.** Consulta "vale a pena?": responda com o roteiro abaixo e as variáveis que o contador precisa, nunca com número de parcela, desconto ou economia.

## Triagem (as cinco perguntas, nesta ordem)

1. **Onde está o débito?** Dívida ativa da União (PGFN), contencioso administrativo na Receita (transação do art. 10-A da Lei 13.988), estadual ou municipal (lei do ente: `[conferir lei local]`; a Lei 13.988 é só federal).
2. **Data da inscrição, valor consolidado e quem deve:** o edital tem corte de data e teto. Sócios corresponsáveis aderem por opção própria.
3. **Há ação, embargos, impugnação ou recurso sobre o débito?** A adesão exige desistir e renunciar (abaixo).
4. **Há tese forte?** Prescrição, decadência, precedente favorável: aderir pode custar o direito (renúncia irretratável). Pesar antes.
5. **Capacidade de pagamento e fluxo:** o cliente sustenta as prestações e as demais obrigações correntes? Rescisão por 3 atrasos.

## Mapa das vias (conferido em 20/10/2026; o edital do dia manda)

- **Transação por adesão da PGFN (Edital 6/2026, prorrogado pelo Edital 10/2026, DOU 01/10/2026):** capacidade de pagamento (inscrições até 03/07/2026, total consolidado até R$ 45 milhões, classificação A a D no REGULARIZE; A e B só entrada facilitada de 6% em até 6 ou 12 parcelas; C e D também prazo de até 114 ou 133 meses e desconto de até 65% ou 70%; previdenciário em até 60 meses); difícil recuperação; seguro garantia ou carta fiança; pequeno valor (pessoa natural, MEI, ME e EPP; inscrições até 01/10/2025; até 60 salários mínimos por inscrição; à vista ou em até 55 meses, desconto de 50% a 30%). Parcela mínima de R$ 100 (R$ 25 para MEI). **Adesão até 29/01/2027, 19h de Brasília** (página da PGFN em 21/10/2026; fonte secundária indica 29/07/2027 só para pequeno valor `[conferir no edital]`). Tetos legais: Lei 13.988, art. 11, §§2º e 3º (65% e 120 meses; pessoa natural, ME e EPP, 70% e 145 meses; o principal não se reduz). Prejuízo fiscal e base negativa de CSLL não valem nesses editais. Outros editais ativos: Desenrola Rural (Edital 5/2026 e 8/2026), MEI (Edital 9/2026), FGTS e LC 110 (Edital 12/2026), IRRF de não residentes (Edital PGFN/RFB 4/2026) `[conferir cada um no gov.br/pgfn antes de indicar]`. Base infralegal: Portaria PGFN 6.757/2022 e alterações `[conferir texto vigente]`.
- **Transação individual** (proposta do devedor ou da PGFN, Lei 13.988, arts. 2º e 10) e **na relevante controvérsia** (arts. 16 a 22-A): exigem proposta e termo próprios.
- **Parcelamento ordinário (Lei 10.522, art. 10):** até 60 parcelas; pedido condiciona-se ao pagamento da primeira prestação (art. 11); o deferimento é confissão de dívida (art. 12); prestações acrescidas de Selic e 1% (art. 13); rescisão com 3 parcelas em atraso, ou 1 com as demais pagas (art. 14-B); vedações do art. 14. Mínimos: páginas da PGFN dizem R$ 100 (pessoa física) e R$ 500 (pessoa jurídica), e a Receita, para o parcelamento dela, R$ 200 para pessoa física desde 01/01/2025; sem garantia até R$ 15 milhões (Portaria ME 2.923/2022, que alterou a Portaria MF 520/2009) `[conferir no REGULARIZE: as fontes divergem]`. Recuperação judicial: até 120 prestações (art. 10-A). Não há desconto no parcelamento ordinário.
- **Execução fiscal extrajudicial:** o CTN 174, IX remete à "legislação específica"; não localizei lei vigente `[conferir]`.

## O que a adesão custa (avise sempre)

- **Desistir e renunciar:** a transação exige desistir de impugnações e recursos e renunciar a alegações de direito sobre o débito (Lei 13.988, art. 3º, IV e V); a aceitação é irretratável (§1º). Nos editais da PGFN, a cópia do pedido de desistência da ação judicial vai em até 60 dias da adesão, ou o acordo é cancelado. Procuração com poderes especiais para desistir, renunciar e transigir: confira.
- **Honorários na desistência:** desistir dos embargos para aderir a programa federal não gera nova condenação, porque o encargo do DL 1.025 já cobre a verba (Tema 400 do STJ; Tema 1317, com RE pendente); fora da hipótese da Lei 11.941, art. 6º, §1º, quem desiste de ação paga honorários (Tema 633). Confira o que o edital diz.
- **Suspensão:** o parcelamento suspende a exigibilidade depois da homologação, expressa ou tácita (CTN 151, VI; Tema 365 do STJ); a transação aceita também (CTN 151, VIII, texto da LC 236/2026: "a proposta de transação aceita pela administração"). A **proposta** não suspende (Lei 13.988, art. 12). Bloqueio de ativos: levantado se o parcelamento foi concedido antes da constrição; mantido se depois, salvo substituição excepcional por fiança ou seguro (Tema 1012 do STJ).
- **Confissão:** aspectos jurídicos podem ser discutidos depois; os de fato só com defeito do ato (Tema 375 do STJ). Pedido de parcelamento, ainda que indeferido, interrompe a prescrição (Súmula 653 do STJ). Denúncia espontânea não vale para o débito parcelado (Tema 101 do STJ, anterior à LC 236/2026, que deu ao CTN 138 a redação "inclusive em relação à multa de mora" `[conferir se subsiste]`).
- **Rescisão:** perda dos benefícios, cobrança do saldo e **impedimento de nova transação por 2 anos** (Lei 13.988, art. 4º, §4º; edital).
- **Corresponsáveis, garantias e bens:** os editais pedem inclusão de todas as inscrições elegíveis não garantidas, parceladas ou suspensas por decisão judicial; garantias existentes seguem regra própria do edital.

## Prazo e alerta

**Conta sugerida (sugestão a conferir, nunca data certa):** mostre o prazo de adesão do edital aplicável (data e hora de Brasília) e quantos dias úteis faltam de hoje até ele; separado, o prazo de 60 dias da adesão para provar a desistência judicial. **Conta e ALERTA vão na PRIMEIRA mensagem, antes das perguntas** (esta skill derroga o plano de cinco blocos só no tamanho: a linha "Prazo: [conta] · [ALERTA ou nenhum]" fica, no topo da tela do plano), e se repetem no topo do resumo. **ALERTA** se a adesão provável vencer em 5 dias úteis ou menos, se o débito foi inscrito depois do corte do edital, ou se a prescrição do crédito pode estar consumada (nesse caso a transação é a pior saída: veja a skill `excecao-de-pre-executividade`).

## Roteiro de decisão (devolva em uma tela)

1. Qual via alcança o débito, com o edital e o artigo.
2. Qual direito o cliente renuncia e se vale mais que o desconto.
3. Variáveis que o contador ou o REGULARIZE precisa: inscrições, valores consolidados, classificação, tipo de devedor, ações a desistir, entrada e parcelas oferecidas na simulação.
4. Passos e prazos: simulação no REGULARIZE, primeira prestação até o último dia útil do mês da adesão, desistências, acompanhamento.
5. Quando **não** aderir: tese forte, débito prescrito, caixa que não sustenta 3 atrasos.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de responder: `buscar_precedentes` nos temas "transação tributária Lei 13.988", "parcelamento fiscal confissão de dívida" e "desistência de ação para adesão a parcelamento honorários" (súmula e precedente qualificado primeiro) e `buscar_em_todos`. Cite só o que voltou com link, e passe cada citação em `verificar_citacao`. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmula 653 e Temas 101, 365, 375, 400, 633, 1012 e 1317 do STJ podem entrar pelo número.

## Não fazer

- Não calcular parcela, desconto, juros nem economia, nem dizer "compensa" sem a simulação oficial.
- Não usar edital encerrado nem prazo de memória: o edital vigente é o do dia.
- Não omitir a renúncia nem a desistência de ações.
- Não aplicar a Lei 13.988 a débito estadual ou municipal.
- Não prometer suspensão da exigibilidade pela mera proposta.

*Referências conferidas em 21/10/2026 (Lei 13.988, Lei 10.522 e CTN com a LC 236/2026 no Planalto via proxy; páginas do Edital 6/2026 no gov.br/pgfn; Portaria ME 2.923/2022 e mínimos do parcelamento por fontes secundárias; Súmula 653 e Temas 101, 365, 375, 400, 633, 1012 e 1317 do STJ no Banco Nacional de Precedentes do CNJ de 19/10/2026). Lei, súmula, edital e prazo de adesão mudam: por isso existe a conferência antes de aderir.*
