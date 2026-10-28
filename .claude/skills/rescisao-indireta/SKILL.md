---
name: rescisao-indireta
description: Use quando o advogado pedir rescisão indireta, despedida indireta, justa causa do empregador, art. 483 da CLT, ação por falta grave da empresa, salário atrasado ou FGTS sem depósito com pedido de rescisão. Complementa peca-a-partir-da-ficha com a alínea certa do art. 483, imediatidade, o que fazer com o emprego enquanto a ação corre, os efeitos financeiros e os pedidos que costumam faltar.
---

# Rescisão indireta (CLT, art. 483)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-trabalhista`. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da rescisão indireta: a petição é uma reclamação trabalhista (use também `reclamacao-trabalhista` pra rito, valor, gratuidade e honorários). As duas listas de perguntas somam muito: priorize as 5 que mudam a peça (se ainda trabalha, alínea, datas das faltas, provas, data de ajuizamento e renda) e deixe o resto como `[DEFINIR]`.

## Prazo, prescrição e plano
Mostre a conta sugerida (termo inicial, regra de contagem, úteis ou corridos com a base legal, dias pulados, resultado provável), marcada `[conferir: calendário do TRT]` e nunca como data certa. Na PRIMEIRA mensagem, antes das perguntas, abra com **ALERTA DE PRAZO** se o prazo vence em 5 dias úteis ou menos, e com **ALERTA DE PRESCRIÇÃO** se faltam 60 dias ou menos ou a janela já abriu; prazo que JÁ venceu vai no topo, como **VENCIDO**. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (publicação × disponibilização; úteis × corridos): conte os dois cenários e use o mais curto, com `[conferir]`. Sem a data de hoje, pergunte. O plano ganha a linha "Prazo"; no máximo 5 perguntas, priorizadas, o resto vira `[DEFINIR]`. Onde esta skill divergir do módulo `area-trabalhista`, vale esta skill; avise o advogado.

Aqui o alerta é de prescrição. Contrato vivo: só a quinquenal corre (parcela anterior a 5 anos do ajuizamento já está prescrita; diga a data mais antiga alcançada, e em salário atrasado cada mês é uma parcela); a bienal só começa na saída. Se ele já saiu ou foi afastado, conte 2 anos do fim do contrato. Se parou de ir ao trabalho, o risco de abandono (art. 482, i) entra no plano como item de prazo.

## Antes do roteiro: a pergunta que decide tudo
- **O cliente ainda trabalha?** Nas faltas das alíneas "d" (descumprimento do contrato, como salário atrasado e FGTS não depositado) e "g" (redução de tarefa que afeta o salário), ele pode continuar no serviço até a decisão (art. 483, §3º). Nas demais (a, b, c, e, f), o que pesa é a imediatidade: quem fica trabalhando por meses depois da falta enfrenta a tese do perdão tácito. Se ele já parou de ir, pergunte desde quando e se avisou por escrito: ausência sem aviso alimenta a justa causa por abandono (art. 482, i). A Súmula 32 do TST (reafirmada no Tema 226 do TST, IRR, vigente no BNP/CNJ) presume o abandono de quem não volta em 30 dias após a cessação do benefício previdenciário sem justificar; à ausência comum ela só vale por analogia, e a justa causa exige prova da intenção de não voltar (acórdãos do TST).
- **Qual alínea?** Classifique cada fato numa alínea do art. 483 (a a g) antes de redigir; se o fato não cabe em nenhuma, diga isso ao advogado.
- **Datas:** cada falta com data, o último fato (o que "estourou") e o dia do afastamento. Prescrição (art. 11, caput): a quinquenal corre durante o contrato; só a bienal conta do fim dele. Se ele ainda é empregado, a bienal não começou.
- **Provas que o cliente tem:** holerites, extrato do FGTS, mensagens, e-mails, atestados, CAT, testemunhas, notificação enviada à empresa. Documento só descrito: `[JUNTAR: ...]`.
- **Dado sensível:** assédio, doença, gravidez: por iniciais.

## Estrutura
1. Fatos por falta, na ordem do tempo, cada um com alínea, data, gravidade e prova.
2. **Imediatidade e gravidade**: um tópico dizendo por que a falta é grave o bastante pra quebrar a confiança e por que a reação veio no tempo (ou por que o descumprimento é continuado, como nas alíneas "d" e "g").
3. Pedido principal: reconhecimento da rescisão indireta, com a data (última falta, afastamento ou ajuizamento: escolha com o advogado e justifique; os TRTs divergem, `[conferir posição do TRT]`).
4. Efeitos, cada um com valor (`[valor: cálculo do escritório]`): saldo de salário, aviso prévio proporcional (30 dias mais 3 por ano de serviço, até 90: Lei 12.506/2011), 13º e férias proporcionais com 1/3, FGTS do contrato e multa de 40% (Lei 8.036/1990, art. 18, §1º), multa do art. 477, §8º (devida também quando a rescisão indireta é reconhecida em juízo: Tema 52 do TST, IRR), e 50% da incontroversa na audiência (art. 467).
5. **Pedidos que costumam faltar:** liberação do FGTS e das guias do seguro-desemprego (o art. 20, I, da Lei 8.036 inclui a despedida indireta; indenização substitutiva se as guias não saírem: Súmula 389, II, do TST); anotação da saída na CTPS; entrega do TRCT; pagamento dos salários atrasados e depósito do FGTS não recolhido (obrigação de fazer e de pagar, pedidos próprios, também no subsidiário); dano moral nos arts. 223-A a 223-G quando a falta atinge honra, saúde ou dignidade.
6. **Pedido subsidiário:** se o juízo não reconhecer a falta, pague ao menos as verbas devidas até o afastamento e o que não foi quitado. Sem ele, o cliente sai com nada.
7. **Tutela de urgência**, só se o cliente já parou de trabalhar e está sem renda (se ainda trabalha, não peça): pedir que o afastamento não seja tratado como abandono e, se for o caso, a liberação do FGTS, com o perigo da demora da ficha (`[conferir CPC, art. 300, aplicação subsidiária]`).

## Alertas por alínea (só o que a ficha trouxer)
- **Alínea d:** salário atrasado, FGTS sem depósito, horas extras sonegadas, desvio de função. A mora salarial contumaz do DL 368/1968 (art. 2º, §1º: três meses ou mais, sem motivo grave e relevante) reforça a gravidade, mas não é requisito do art. 483.
- **Alíneas b, e, f:** rigor excessivo, ofensa à honra, ofensa física: prova testemunhal, mensagens, boletim de ocorrência.
- **Alínea c:** perigo manifesto: laudo, NR, CAT.
- **Culpa recíproca:** se a empresa alega falta do empregado também, a culpa recíproca reduz a indenização pela metade (CLT, art. 484) e a multa do FGTS a 20% (Lei 8.036, art. 18, §2º).

## Julgado
Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "rescisão indireta, art. 483 da CLT, imediatidade e gravidade da falta" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou `buscar_tst`). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer
- Não pedir "rescisão indireta" sem dizer a alínea e a data de cada falta.
- Não deixar o cliente faltar ao trabalho sem comunicação formal enquanto a ação corre.
- Não tratar atraso isolado e já sanado como falta grave sem avaliar a imediatidade.
- Não esquecer o pedido subsidiário.
- Não calcular verbas: listar o que entra.

*Referências conferidas em 19/10/2026 e revisadas em 20 e 21/10/2026 (CLT, Lei 8.036, Lei 12.506 e DL 368 no Planalto pelo proxy; Temas 52 e 226 do TST reconferidos no BNP/CNJ em 21/10; Súmula 389 no site do TST; Súmula 32 por notícia e acórdãos do TST). Lei, súmula e tese mudam: por isso existe a conferência antes de protocolar.*
