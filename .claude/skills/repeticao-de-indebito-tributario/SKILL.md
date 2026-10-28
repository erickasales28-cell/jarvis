---
name: repeticao-de-indebito-tributario
description: Use quando o advogado pedir repetição de indébito, restituição de tributo pago a maior ou indevidamente, ação de repetição, pedido de restituição ou compensação de tributo, recuperar imposto pago, tributo indireto e prova de repasse. Complementa peca-a-partir-da-ficha com o prazo de 5 anos do CTN 168 contado pagamento a pagamento, o CTN 166, a escolha entre restituição e compensação e os acessórios (Súmulas 162, 188 e 523 do STJ).
---

# Repetição de indébito tributário

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Plano com até 5 perguntas. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-tributario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da ação de repetição de indébito e da escolha da via.

## Antes do roteiro

Pergunte e registre antes de redigir:
- **O tributo e o ente:** federal, estadual ou municipal; fato gerador e período; por que o pagamento foi indevido (inconstitucionalidade, erro de cálculo, pagamento em duplicidade, decisão reformada: CTN 165, I a III).
- **Tributo direto ou indireto.** No indireto, a restituição exige prova de que o contribuinte assumiu o encargo ou autorização de quem o suportou (CTN 166). O contribuinte de direito é quem demanda (Tema 114 do STJ); o contribuinte de fato, em regra, não tem legitimidade (Tema 173); a exceção do Tema 537 é estreita: consumidor de energia elétrica contra o ICMS sobre demanda contratada e não utilizada. No tributo direto não se exige prova de não repasse (Tema 232). Pergunte se o preço repassou o tributo.
- **Prazo: 5 anos**, extinção do crédito pelo pagamento (CTN 168, I; Tema 229 do STJ), ou da decisão que reformou a condenação (II). Para tributo sujeito a homologação, o prazo de 5 anos do pagamento antecipado vale para ações ajuizadas depois de 09/06/2005 (Tema 4 do STF). Contagem **pagamento a pagamento**. O pedido administrativo não interrompe a prescrição (Súmula 625 do STJ). Os §§2º e 3º do art. 168 (LC 236/2026) tratam de outra coisa: a habilitação administrativa do indébito reconhecido em juízo, em 5 anos da certificação do trânsito; não alcançam o pedido anterior à ação, e a Súmula 625 segue valendo (leitura desta revisão, sem precedente pós-LC: use o conector). **Conta sugerida (sugestão a conferir, nunca data certa):** liste cada guia com a data de pagamento; marque a que tem 5 anos ou menos até a data do ajuizamento provável; escreva "provável". **Conta e ALERTA vão na PRIMEIRA mensagem, antes das perguntas**, e se repetem na linha "Prazo: [conta] · [ALERTA ou nenhum]" do plano (em "Estratégia da peça") e no topo do resumo. **ALERTA** se alguma guia completar 5 anos em até 5 dias úteis, ou se parte dos pagamentos já puder estar prescrita (diga quais).
- **Documentos do cliente:** guias (DARF, DAE, DAM) e comprovantes, declarações do período (DCTF, DIRPF, EFD), notas, a decisão ou ato que prova a ilegalidade, e, se indireto, prova do não repasse ou autorização. Escritório: planilha por guia para o contador (sem somar).

## Estrutura

1. **Escolha da via**, em uma tela para o advogado:
   - *Administrativa (federal):* pedido de restituição ou declaração de compensação (Lei 9.430, art. 74); não homologada, cabe manifestação de inconformidade em **30 dias corridos** (art. 74, §§7º e 9º; a LC 227/2026 não alterou o art. 74, e a RFB confirmou o prazo corrido, com a suspensão de 20/12 a 20/01 do Decreto 70.235, art. 5º-A). Por cautela conte também 20 dias úteis e, se vencer antes, mire nessa data. O recurso contra a decisão da manifestação (§10) segue 20 dias úteis. Compensação com crédito de decisão não transitada é tida por não declarada (art. 74, §12, II, "d"; alíneas "g" e "h" pela Lei 15.265/2025).
   - *Administrativa (estadual ou municipal):* pedido na Sefaz ou na prefeitura, com rito, prazo e órgão da lei do ente `[conferir lei local]`. A Lei 9.430, art. 74, e a Lei 15.265/2025 valem **só para tributo federal**. Sem lei local na ficha, peça apenas a declaração do direito ao indébito e não prometa compensação nem rito administrativo. Pergunte se há pedido pendente e desde quando (interesse de agir; CTN 169 se houve negativa).
   - *Judicial:* ação de repetição na Justiça Federal ou na vara da Fazenda; ou mandado de segurança só para declarar o direito de compensar (skill `mandado-de-seguranca-tributario`).
   - *Restituição ou compensação:* o contribuinte pode optar por precatório ou compensação do indébito certificado em sentença declaratória transitada (Súmula 461 do STJ); a compensação só depois do trânsito (CTN 170-A). Estado e município: compensação só se a lei local a prevê `[conferir lei do ente]`.
2. Na petição: endereçamento; qualificação; fatos e pagamentos, em quadro por guia; tributo e causa da ilegalidade; **tempestividade por guia**; prova do CTN 166 se indireto.
3. Pedidos: declaração do indébito; restituição ou direito de compensar; atualização e juros; tutela de urgência só com perigo concreto; honorários.

## Teses e pedidos que costumam caber

- **Correção monetária** desde o pagamento indevido (Súmula 162 do STJ). **Juros** de mora a partir do trânsito em julgado (Súmula 188; CTN 167, parágrafo único). O indébito é atualizado pelos mesmos índices dos créditos da respectiva Fazenda (CTN 165-A, LC 236/2026) `[conferir direito intertemporal]`. Federal: a Selic faz as vezes de juros e correção, sem cumulação (Tema 75 do STJ). Tributos estaduais: Selic quando a lei local a prevê `[conferir lei local]`, vedada cumulação (Súmula 523). Sem Selic na lei, juros de 1% ao mês do CTN 161, §1º, e não os do art. 1º-F da Lei 9.494 (Tema 295; o Tema 905 exclui a relação tributária do art. 1º-F). Peça "os índices legais", sem fixar taxa.
- **Selic recebida em repetição:** é inconstitucional a incidência de IRPJ e CSLL (Tema 962 do STF; o momento da disponibilidade em crédito ilíquido está afetado, Tema 1362 do STJ); PIS e Cofins **incidem** sobre ela (Tema 1237 do STJ). Avise o cliente do reflexo. Ressarcimento de crédito escritural de tributo não cumulativo: correção só depois de 360 dias do pedido (Tema 1003 do STJ; Lei 11.457, art. 24).
- **Legitimidade passiva:** a entidade que recebe a contribuição de terceiros só não integra o polo passivo se for mera destinatária (Súmula 666 do STJ); locatário não repete IPTU (Súmula 614); Estados respondem por IRRF de seus servidores (Súmula 447).
- **Recusa administrativa de restituição:** a ação para anulá-la prescreve em 2 anos (CTN 169).
- **Reforma tributária:** a repetição de PIS, Cofins, ICMS e ISS pagos antes de 2027 segue as regras acima. Restituição de CBS e IBS tem regra própria na LC 214/2025 e na LC 227/2026, ainda não aplicável a pagamentos antigos; a skill não ensina o que não está vigente para o caso.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "repetição de indébito prazo prescricional CTN 168", "tributo indireto art. 166 CTN" e "correção monetária e juros na repetição de indébito" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 162, 188, 447, 461, 523, 614, 625 e 666 e Temas 75, 114, 173, 229, 232, 295, 537, 1003 e 1237 do STJ, e Temas 4 e 962 do STF, podem entrar pelo número.

## Não fazer

- Não contar o prazo de uma vez só para todos os pagamentos.
- Não pedir restituição de tributo indireto sem a prova do CTN 166.
- Não usar compensação antes do trânsito em julgado nem MS para o passado.
- Não calcular o indébito, a correção nem a Selic: monte o quadro por guia e deixe o cálculo para o contador.
- Não escrever o prazo como certo: é conta sugerida.

*Referências conferidas em 21/10/2026 (CTN com a LC 236/2026, Lei 9.430 art. 74 e LC 214 no Planalto via proxy; Perguntas e Respostas da RFB sobre prazos da LC 227; súmulas e Temas 75, 114, 173, 229, 232, 295, 537, 905, 1003, 1237 e 1362 do STJ e 4 e 962 do STF no Banco Nacional de Precedentes do CNJ de 19/10/2026). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
