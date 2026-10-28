---
name: defesa-em-pad
description: Use quando o advogado pedir defesa em PAD, processo administrativo disciplinar, sindicância, defesa escrita, resposta à indiciação, alegações finais, recurso ou pedido de revisão de penalidade de servidor, prescrição disciplinar, ou "meu cliente foi indiciado". Complementa peca-a-partir-da-ficha com a Lei 8.112 (arts. 143 a 182) como base federal, os prazos de cada fase, a prescrição do art. 142 com a Súmula 635 STJ e a Súmula Vinculante 5.
---

# Defesa em PAD e sindicância

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga também o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`. Não existe módulo `area-administrativo` no Kit: `area-civel-consumidor-e-imobiliario` serve só de base para o CPC; o rito é o desta skill. Quando o escritório tiver modelo de defesa, a estrutura dele manda. Plano com até 5 perguntas, priorizadas.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

**ALERTA na primeira mensagem**, antes de qualquer pergunta ou plano (régua única): prazo processual ou contratual que vence em 5 dias úteis ou menos; decadência e prescrição a 60 dias ou menos, ou janela já aberta; prazo que já venceu vai no topo como VENCIDO. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (úteis × corridos, lei do ente): conte os dois cenários, use o mais curto e marque `[conferir]`. O plano ganha a linha "Prazo".

## Antes do roteiro

- **Qual estatuto?** A Lei 8.112/1990 vale para servidor civil da União. Estado e município têm estatuto próprio, com prazos e penas diferentes: `[conferir lei do ente]`. A Súmula 633 STJ diz que a Lei 9.784, "especialmente" o prazo decadencial do art. 54, pode ser aplicada de forma subsidiária a estado e município sem norma local e específica; pra prazo, rito ou nulidade do PAD estadual ou municipal, não a cite como se resolvesse a questão: `[INSERIR JULGADO: aplicação subsidiária da Lei 9.784 ao PAD estadual/municipal, conferir]`. Peça a cópia do estatuto e a portaria; não aplique a 8.112 por analogia sem avisar.
- **Qual fase?** Sindicância (art. 145: arquivamento, advertência ou suspensão até 30 dias, ou abertura de PAD; prazo de 30 dias, prorrogável por igual período) ou PAD (obrigatório para suspensão acima de 30 dias, demissão, cassação, destituição, art. 146). Fase decide a peça: acompanhamento do inquérito, defesa escrita após indiciação, alegações contra o relatório, recurso, revisão.
- **Prazos da 8.112 (conta sugerida a conferir):** defesa escrita 10 dias a partir da citação, com vista do processo na repartição (art. 161, §1º); 20 dias comuns se houver 2 ou mais indiciados (§2º); prorrogação pelo dobro para diligências indispensáveis (§3º); citação por edital: 15 dias da última publicação (art. 163); recurso ou reconsideração 30 dias (art. 108). Prazos da comissão e da autoridade: PAD em 60 dias da publicação da portaria, prorrogáveis por igual prazo (art. 152); julgamento em 20 dias do recebimento do processo (art. 167); os 140 dias da Súmula 635 são a soma desses três. Os prazos da lei são em dias corridos, e o vencimento em dia sem expediente passa ao primeiro dia útil (art. 238, texto lido em 20/10/2026; `[conferir]` se o estatuto do ente diz outra coisa). Mostre termo inicial, contagem e resultado provável como SUGESTÃO, nunca como data certa. Abra o resumo com **ALERTA** se a defesa vence em 5 dias úteis ou menos.
- **Prescrição (art. 142):** 5 anos (demissão, cassação, destituição), 2 anos (suspensão), 180 dias (advertência); infração também crime segue a lei penal (§2º). Pela lei, a abertura de sindicância ou a instauração do PAD interrompe a prescrição até a decisão final (§3º) e o prazo recomeça depois (§4º); a Súmula 635 STJ fixa como se conta: o prazo inicia quando a autoridade competente para abrir o procedimento toma conhecimento do fato, interrompe-se com o primeiro ato de instauração válido e volta a correr por inteiro após 140 dias. Monte a linha do tempo (fato, ciência da autoridade, portaria, +140 dias) e marque ALERTA se a prescrição pode ter se consumado.
- **Ficha mínima:** portaria de instauração e data; comissão (3 servidores estáveis, art. 149); fatos imputados e dispositivos; afastamento preventivo (até 60 dias, prorrogável por igual prazo, art. 147); provas já produzidas; testemunhas; se há processo penal ou improbidade em paralelo.

## Estrutura (defesa escrita)

1. Qualificação, indicação do PAD e tempestividade.
2. Preliminares: prescrição (art. 142 e Súmula 635); nulidades (impedimento na comissão, art. 149, §2º: cônjuge, companheiro ou parente do acusado até o 3º grau; suspeição por amizade íntima ou inimizade notória, Lei 9.784, arts. 18 a 21, subsidiária no federal; indiciação genérica, art. 161; cerceamento: indeferimento de prova sem motivação, art. 156, §1º; ausência de vista; falta de intimação).
3. Mérito: fato por fato, com prova e quesitos; ausência de dolo ou culpa; tipicidade (art. 117 e 132 conferidos ao caso); proporcionalidade (art. 128: natureza, gravidade, danos, circunstâncias, antecedentes).
4. Provas: o que se requer (testemunhas, perícia, juntada), com pertinência.
5. Pedidos: arquivamento, absolvição ou pena menor, nulidade com nova comissão se for o caso (art. 169).

## Teses e pedidos que costumam caber

- **Advogado não é obrigatório:** Súmula Vinculante 5 (falta de defesa técnica não ofende a Constituição); a Súmula 343 STJ, que exigia advogado, está cancelada. Não use. A defesa técnica continua um direito do servidor.
- **Excesso de prazo** do PAD só anula com prejuízo à defesa (Súmula 592 STJ); julgamento fora do prazo não anula (art. 169, §1º).
- **Prova emprestada** exige autorização do juízo e contraditório (Súmula 591 STJ). **Denúncia anônima** serve se houver investigação ou sindicância prévia, motivada (Súmula 611 STJ).
- **Portaria** não precisa expor os fatos em detalhe (Súmula 641 STJ), mas a **indiciação** precisa. Mudar a capitulação, por si só, não anula (Súmula 672 STJ).
- **Demissão** nas hipóteses do art. 132: a autoridade não tem discricionariedade para outra pena (Súmula 650 STJ); por improbidade, pode demitir sem condenação judicial (Súmula 651 STJ). Dosimetria só se discute fora do art. 132.
- **Absolvição criminal** afasta a responsabilidade só se nega o fato ou a autoria (art. 126); as instâncias são independentes (art. 125).
- **Improbidade em paralelo:** a Lei 14.230/2021 exige dolo na ação de improbidade (Lei 8.429, art. 1º, §§1º a 3º; STF, Tema 1199, que também declarou irretroativo o novo regime de prescrição do art. 23), a perda da função por sentença só vale com o trânsito (art. 20) e a absolvição criminal colegiada pelos mesmos fatos barra a ação de improbidade (art. 21, §4º). Nada disso revogou o art. 132, IV, da 8.112, e a Súmula 651 STJ segue vigente no BNP: use o dolo e a independência das instâncias como argumento de defesa, e deixe `[INSERIR JULGADO: demissão por improbidade após a Lei 14.230, conferir]`. Se o dolo exigido é específico, o STJ ainda julga (Tema 1397, em julgamento em 2026).
- **Controle judicial** é de regularidade e legalidade, sem rever o mérito, salvo ilegalidade flagrante, teratologia ou desproporção manifesta (Súmula 665 STJ). Peça o PAD como vício de procedimento, não como "injustiça da pena".
- **Revisão:** a qualquer tempo, com fato novo ou circunstância que mostre inocência ou pena inadequada; o ônus é do requerente e a revisão não agrava (arts. 174 a 182).
- **Revel:** a revelia é declarada por termo e reabre o prazo de defesa (art. 164, §1º), com defensor dativo ocupante de cargo efetivo superior ou de mesmo nível, ou de escolaridade igual ou superior à do indiciado (§2º). Pergunte se o cliente foi citado de verdade.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "processo administrativo disciplinar nulidade cerceamento de defesa", "prescrição Lei 8.112 art. 142" e "proporcionalidade da pena disciplinar" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não alegar nulidade por "falta de advogado" nem citar a Súmula 343 STJ.
- Não confessar fato na defesa sem decisão do cliente e do advogado.
- Não deixar a prescrição para o fim sem a linha do tempo.
- Não misturar defesa do PAD com medida judicial: se cabe MS ou ação, é outra peça.
- Dado de saúde, de terceiro e de processo disciplinar sigiloso: iniciais, nada no perfil do escritório.

*Referências conferidas em 21/10/2026 (Planalto via proxy de leitura: Lei 8.112, arts. 142 a 169 e 238, sem alteração em 2024-2026; Lei 8.429, arts. 1º, 12, 17-D, 20, 21 e 23; em 20/10/2026: Lei 8.112, arts. 104 a 132 e 174 a 182, Lei 9.784; súmulas e temas no BNP/CNJ coletado em 19/10/2026). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
