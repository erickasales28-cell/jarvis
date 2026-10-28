# Módulo 01 · Peças processuais · 34 prompts

Inicial, resposta e os incidentes que aparecem entre a petição e a sentença: 34 prompts, da inicial ao recurso, em 10 áreas.
Abra uma conversa nova no Claude para cada peça: assim ela não carrega o caso anterior.
Copie o prompt inteiro, troque o que está entre colchetes e mande junto o material do "Tenha em mãos".
O Claude pergunta o que faltar numa mensagem só; o que você ainda não souber, ele marca como [DEFINIR].
Antes de colar peça ou documento do cliente, troque nome, CPF e endereço por iniciais e apague o que a peça não precisa (dado de saúde, antecedente, dado de criança, número de conta): o sigilo é seu (Lei 8.906/94, art. 34, VII) e, pela LGPD, você responde por esses dados. Processo em segredo de justiça (família, por exemplo) só entra pseudonimizado. A Recomendação 001/2024 do Conselho Federal da OAB pede ainda que você informe ao cliente que usa IA no caso.
Nada sai pronto para protocolar: a conferência do "Depois do resultado" é sua, e a peça sai assinada por você.
Antes do primeiro prompt: no Claude, abra Configurações › Privacidade e desligue a opção que usa as suas conversas pra melhorar o modelo. Nas contas Free, Para o e Max, com ela ligada, a conversa pode treinar o modelo e fica guardada por até cinco anos. Sem isso desligado, nenhum documento de cliente sobe.

---

## 01. Petição inicial cível de indenização (dano material e moral)

**Quando usar:** o cliente sofreu um prejuízo e quer ser indenizado por dano material, moral, ou os dois.

**Tenha em mãos:** os documentos que provam o fato e o prejuízo (nota fiscal, orçamento, foto, print, boletim), os dados das partes e o valor que o cliente já gastou ou perdeu.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [AUTOR], em [COMARCA/VARA], e vai redigir a petição inicial de uma ação de indenização por dano [MATERIAL / MORAL / MATERIAL E MORAL]. Réu: [RÉU]. Fato que causou o dano: [RESUMO EM ATÉ 5 LINHAS]. Prejuízo material: [VALOR, COM O DOCUMENTO QUE COMPROVA]. Pedido de dano moral: [SIM/NÃO E POR QUÊ].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: se há notificação ou tentativa de resolver antes de processar; se o réu é fornecedor (relação de consumo) ou particular; os documentos que provam o fato e o valor; se há testemunha; e se o autor já sofreu algo parecido antes, que pode reduzir o dano moral alegado.
>
> Tarefa: redija a petição inicial pelos arts. 319 e 320 do CPC. Estrutura: I – Endereçamento e qualificação das partes · II – Dos fatos, narrados em ordem cronológica, cada um com o documento que o prova entre parênteses · III – Do dano material, com o cálculo discriminado item a item · IV – Do dano moral, mostrando a repercussão do fato na vida do autor, não só o valor que ele quer (se a relação for de consumo, aponte a responsabilidade objetiva do fornecedor (art. 12 do CDC para defeito do produto, art. 14 para defeito do serviço); fora do consumo, aponte o nexo causal e a culpa pelo art. 186 do CC e o dever de indenizar do art. 927; fora do consumo, aponte o nexo causal e a culpa pelo art. 186 do CC) · V – Do direito, artigo antes do argumento · VI – Dos pedidos em alíneas, com valor líquido para o material e valor sugerido com [CONFERIR FAIXA NA JURISPRUDÊNCIA DO TRIBUNAL] para o moral · VII – Do valor da causa · VIII – Dos requerimentos finais (provas, citação, gratuidade se for o caso).
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão escreva [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo aparece com a conta à mostra e quem lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente fato, documento nem valor; dados pessoais por iniciais.

**Depois do resultado:** confira cada fato contra o documento citado entre parênteses. Veja se o valor do dano moral está dentro do que o tribunal da sua comarca costuma fixar para fato parecido, não um número solto. Confirme o valor da causa (material + moral, quando houver os dois).

**Com o Advoclaude instalado:** "inicial de indenização para o cliente [iniciais], contra [réu]: [o que aconteceu]" (anexe os documentos).

---

## 02. Petição inicial de consumidor (cobrança indevida, negativação)

**Quando usar:** o cliente foi cobrado por algo que não deve, teve o nome negativado indevidamente, ou as duas coisas.

**Tenha em mãos:** o extrato ou print da negativação (SPC/Serasa), o comprovante de pagamento ou de que a dívida não existe, e o histórico de contato com a empresa (protocolo, e-mail, print de chat).

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [AUTOR], consumidor, em [COMARCA/VARA], e vai redigir a petição inicial contra [RÉU: FORNECEDOR]. Fato: [COBRANÇA INDEVIDA / NEGATIVAÇÃO INDEVIDA / AS DUAS]. O que já tentou resolver: [PROTOCOLO, E-MAIL, LIGAÇÃO, COM DATA]. Negativação: [ÓRGÃO, DATA DE INCLUSÃO, VALOR APONTADO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: se o autor já pagou a dívida cobrada e tem o comprovante; se há outra negativação legítima no nome do autor (isso muda o pedido de dano moral, pela Súmula 385 do STJ); se já pediu a exclusão à própria empresa; se quer pedido de urgência para retirar o nome do cadastro antes da sentença; e o print atual do SPC/Serasa, com data.
>
> Tarefa: redija pelo CDC. Estrutura: I – Endereçamento e qualificação · II – Dos fatos, com a origem da cobrança, as tentativas de resolver e a data da negativação, cada um com o documento entre parênteses · III – Da inversão do ônus da prova (art. 6º, VIII, do CDC) e da responsabilidade objetiva do fornecedor (art. 14) · IV – Do dano moral pela negativação indevida, indicando se há ou não outra negativação legítima no nome do autor · V – Da tutela de urgência para exclusão do nome do cadastro, se pedida, com os requisitos do art. 300 do CPC · VI – Dos pedidos em alíneas: declaração de inexistência do débito, exclusão definitiva, dano moral, com valor sugerido [CONFERIR FAIXA NA JURISPRUDÊNCIA DO TRIBUNAL] · VII – Valor da causa · VIII – Requerimentos finais, incluindo gratuidade se for o caso.
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo com a conta à mostra, quem lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente fato, documento nem valor; dados pessoais por iniciais.

**Depois do resultado:** confira o print da negativação contra o que está narrado nos fatos (data, valor, órgão). Veja se existe outra negativação legítima no nome do cliente: se existir, ajuste o pedido de dano moral antes de protocolar. Confirme se a tutela de urgência tem os documentos que provam a urgência (print atual, não antigo).

**Com o Advoclaude instalado:** "inicial de consumidor para o cliente [iniciais], negativação indevida de [valor] por [réu]" (anexe o print e os comprovantes).

---

## 03. Contestação cível

**Quando usar:** chegou a citação e você vai responder.

**Tenha em mãos:** a inicial, o que o cliente informou, o seu modelo de contestação.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [parte que representamos], em [comarca/vara], e vai redigir a contestação da ação em anexo. Antes de escrever, pergunte numa mensagem só o que faltar: data da citação, provas que a ré tem, se houve audiência de conciliação, proposta de acordo, documentos que vão juntos.
>
> Estrutura: I – Tempestividade (art. 335 do CPC, com a conta do prazo à mostra) · II – Síntese da demanda · III – Preliminares (art. 337) · IV – Mérito, um tópico por fato alegado, respondendo cada um (art. 341) · V – Pedidos em alíneas, principal e subsidiário.
>
> Regras: títulos em caixa alta com numeral romano e parágrafos numerados, como no meu modelo; tese de cada tópico em negrito na primeira frase; artigo antes do argumento; julgado só com link aberto no site do tribunal, senão escreva [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; nada de "data venia", "ab initio", "in casu"; não invente fato nem documento.

**Depois do resultado:** confira cada fato da inicial contra a resposta, os documentos citados e a conta do prazo.

**Com o Advoclaude instalado:** "faz a contestação do caso Silva", com o processo anexado. Só isso.

---

## 04. Réplica (impugnação à contestação)

**Quando usar:** a parte contrária apresentou contestação e você, como autor, precisa se manifestar sobre ela.

**Tenha em mãos:** a petição inicial, a contestação inteira (com os documentos que a instruem) e a intimação com a data em que foi disponibilizada.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) do autor [AUTOR], em [COMARCA/VARA], e vai redigir a réplica à contestação em anexo. Processo [NÚMERO]. Preliminares levantadas pela ré: [RESUMO, OU "VER ANEXO"]. Documentos novos juntados pela ré: [SIM/NÃO, QUAIS].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data de disponibilização da intimação para saber se o prazo (em regra 15 dias, art. 350 do CPC) está correndo; se a ré juntou documento novo, porque isso abre prazo específico do art. 437, § 1º, para o autor se manifestar sobre ele; se há fato novo que a ré trouxe e que o autor nunca tinha mencionado; e se o autor quer especificar provas nesta mesma petição.
>
> Tarefa: redija pelo art. 350 do CPC. Estrutura: I – Tempestividade, com a conta do prazo à mostra · II – Das preliminares arguidas pela ré, rebatendo uma a uma, na mesma ordem em que a contestação as apresentou · III – Dos documentos novos, se houver, com a manifestação específica sobre cada um (art. 437, § 1º) · IV – Do mérito, retomando cada fato que a ré impugnou e reafirmando a versão do autor com a prova que a sustenta · V – Da especificação de provas, se pedida nesta peça · VI – Pedido para que a ação prossiga e seja julgada procedente.
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo com a conta à mostra, quem lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente fato nem documento.

**Depois do resultado:** confira se toda preliminar da contestação tem resposta na réplica; preliminar não impugnada pode ser aceita por silêncio. Veja se o documento novo da ré realmente mudou algo na versão do autor. Confirme o prazo contado a partir da intimação, não da data da contestação.

**Com o Advoclaude instalado:** "faz a réplica do processo [número]" (anexe a inicial e a contestação).

---

## 05. Reconvenção

**Quando usar:** o réu, além de se defender, tem um pedido próprio contra o autor que nasce do mesmo fato ou da mesma relação jurídica discutida na ação.

**Tenha em mãos:** a petição inicial, o fato ou relação jurídica de onde nasce o pedido do réu, os documentos que provam esse pedido e o valor que se busca.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) do réu [RÉU], em [COMARCA/VARA], e vai redigir a reconvenção dentro da contestação da ação em anexo. Processo [NÚMERO]. Pedido do réu contra o autor: [RESUMO EM ATÉ 5 LINHAS]. Relação com a ação principal: [MESMO FATO / MESMO CONTRATO / MESMA RELAÇÃO JURÍDICA].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: se o pedido do réu tem conexão com a ação principal ou com o fundamento da defesa, exigida pelo art. 343 do CPC; o valor do pedido reconvencional, para compor o valor da causa da reconvenção; os documentos que provam o que o réu alega; e se o autor-reconvindo tem capacidade postulatória própria no processo (procurador constituído).
>
> Tarefa: redija pelo art. 343 do CPC, como peça apresentada junto com a contestação. Estrutura: I – Da conexão entre o pedido reconvencional e a ação principal ou a defesa, demonstrando o vínculo exigido em lei · II – Dos fatos que fundamentam o pedido do réu-reconvinte, cada um com o documento entre parênteses · III – Do direito, artigo antes do argumento · IV – Do valor da causa da reconvenção, com o cálculo discriminado · V – Dos pedidos em alíneas, separados dos pedidos da contestação.
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, como capítulo próprio dentro da contestação, sob o título DA RECONVENÇÃO, com pedidos e valor da causa separados dos da contestação (art. 343 do CPC), pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo com a conta à mostra, quem lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente fato nem documento.

**Depois do resultado:** confira se a conexão com a ação principal está demonstrada com clareza; reconvenção sem conexão é extinta sem julgar o mérito. Veja se o valor da causa da reconvenção foi calculado separado do valor da ação principal. Confirme que a reconvenção foi protocolada junto com a contestação, no mesmo prazo.

**Com o Advoclaude instalado:** "faz a reconvenção do processo [número], o réu quer [o pedido]" (anexe a inicial).

---

## 06. Contestação trabalhista

**Quando usar:** a empresa foi citada numa reclamação trabalhista e precisa apresentar defesa.

**Tenha em mãos:** a petição inicial trabalhista, o contrato de trabalho e os registros do empregado (ponto, recibos, TRCT), e a versão da empresa sobre cada pedido.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) da empresa [RÉ], em [VARA DO TRABALHO], e vai redigir a defesa (contestação) à reclamação trabalhista em anexo. Reclamante: [INICIAIS]. Função e período: [CARGO, DATA DE ADMISSÃO E DE SAÍDA, SE HOUVER]. Pedidos da inicial: [RESUMO OU "VER ANEXO"].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data da audiência designada na notificação; se há registro de ponto e de que tipo (manual, mecânico, eletrônico, ou isenção por cargo de confiança); se os recibos de pagamento e o TRCT estão completos; se houve acordo de compensação de horas ou banco de horas por escrito; se a empresa quer arguir prescrição, total ou parcial; e se há testemunha para cada fato controvertido.
>
> Tarefa: redija pela CLT. Estrutura: I – Tempestividade (defesa apresentada em audiência ou, pelo PJe, até a audiência designada: art. 847, caput e parágrafo único, da CLT; não há prazo em dias para contar) · II – Preliminares (incompetência, ilegitimidade, inépcia, se houver) · III – Prejudicial de mérito: prescrição (art. 11 da CLT), se aplicável, com a conta do prazo à mostra · IV – Mérito, pedido por pedido da inicial, cada um com a defesa específica e o documento que a sustenta (ponto, recibo, norma coletiva): nunca responda em bloco; impugne verba a verba · V – Dos pedidos em alíneas, pela total improcedência ou, subsidiariamente, pela redução dos valores.
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo com a conta à mostra, quem lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente fato, documento nem valor.

**Depois do resultado:** confira se cada pedido da inicial tem resposta específica na defesa; pedido não impugnado pode ser tido como verdadeiro. Veja se os documentos citados (ponto, recibo, norma coletiva) realmente foram juntados nos autos. Confirme a conta da prescrição pela data de ajuizamento, não pela data da dispensa.

**Com o Advoclaude instalado:** "faz a defesa da reclamação trabalhista de [iniciais do reclamante]" (anexe a inicial e os documentos do empregado).

---

## 07. Reclamação trabalhista (inicial)

**Quando usar:** o cliente trabalhou para alguém e tem direitos que não foram pagos ou foram pagos a menos.

**Tenha em mãos:** a carteira de trabalho ou contrato, os recibos de pagamento que o cliente tem, o TRCT (se já saiu da empresa) e a lista do que ele acha que não foi pago.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) do reclamante [AUTOR], em [VARA DO TRABALHO], e vai redigir a petição inicial trabalhista contra [RECLAMADA]. Função e período: [CARGO, ADMISSÃO E SAÍDA, SE HOUVER]. Verbas que o cliente acha que não recebeu ou recebeu a menos: [LISTA EM TÓPICOS]. Salário: [VALOR OU FORMA DE CÁLCULO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: se o contrato ainda está em vigor ou já terminou, e como (pedido, dispensa sem justa causa, justa causa, acordo); se o cliente tem recibos, ponto ou testemunha para cada verba pedida; se há horas extras habituais e como eram feitas (manual, cartão, app); se já passaram mais de 2 anos do fim do contrato (prescrição total, art. 7º, XXIX, da CF) ou se há verba de mais de 5 anos atrás (prescrição parcial); e se o cliente quer gratuidade de justiça.
>
> Tarefa: redija pela CLT. Estrutura: I – Qualificação das partes · II – Dos fatos: função, período, jornada e o que motivou o fim do contrato, cada fato com o documento ou a justificativa de prova testemunhal entre parênteses · III – Do direito, verba por verba pedida, artigo antes do argumento, com o cálculo estimado de cada uma (aviso prévio, férias, 13º, FGTS com multa, horas extras com reflexos, etc.) · IV – Da prescrição, se algum período pedido se aproximar do limite, apontando [CONFERIR DATA EXATA] · V – Dos pedidos em alíneas, com valor líquido estimado para cada verba e valor total da causa · VI – Dos requerimentos finais (gratuidade, se for o caso; produção de prova).
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo e prescrição com a conta à mostra, quem lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente fato, documento nem valor; dados pessoais por iniciais.

**Depois do resultado:** confira o cálculo de cada verba contra os recibos e a carteira de trabalho. Veja se algum pedido está prescrito (mais de 2 anos do fim do contrato ou mais de 5 anos da verba) e ajuste antes de protocolar. Confirme o valor da causa como a soma líquida dos pedidos.

**Com o Advoclaude instalado:** "inicial trabalhista para o cliente [iniciais], contra [empresa]: [verbas que faltam]" (anexe carteira e recibos).

---

## 08. Inicial previdenciária (benefício negado pelo INSS)

**Quando usar:** o cliente teve um benefício negado, cessado ou concedido com valor menor do que devido pelo INSS, e já esgotou ou não precisa esgotar a via administrativa.

**Tenha em mãos:** a carta de indeferimento ou de cessação do INSS (com o número do protocolo/NB), o CNIS, os documentos médicos (se for benefício por incapacidade) e o histórico de contribuições ou de trabalho.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) do autor [AUTOR], em [VARA FEDERAL / JUIZADO ESPECIAL FEDERAL], e vai redigir a petição inicial contra o INSS para [CONCESSÃO / RESTABELECIMENTO / REVISÃO] do benefício [TIPO: AUXÍLIO POR INCAPACIDADE TEMPORÁRIA (AUXÍLIO-DOENÇA), APOSENTADORIA POR INCAPACIDADE PERMANENTE (INVALIDEZ), POR IDADE, POR TEMPO DE CONTRIBUIÇÃO (SÓ DIREITO ADQUIRIDO ATÉ 13/11/2019 OU REGRA DE TRANSIÇÃO DA EC 103/2019), PENSÃO POR MORTE, BPC/LOAS, OUTRO]. Protocolo/NB: [NÚMERO]. Motivo do indeferimento, segundo a carta do INSS: [RESUMO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data do requerimento administrativo e da carta de indeferimento, para a conta do prazo decadencial, se houver; o CNIS completo, com todos os vínculos e contribuições; se é caso de incapacidade, os documentos médicos e se já fez perícia do INSS; a renda da família, se for BPC/LOAS; e se o autor quer pedido de tutela de urgência para o benefício começar antes da sentença.
>
> Tarefa: redija pela Lei 8.213/1991 e, para requerimento posterior a 13/11/2019, pelas regras da EC 103/2019 (ou pela Lei 8.742/1993, se BPC/LOAS). Estrutura: I – Qualificação das partes · II – Do requerimento administrativo e do indeferimento, com data e motivo apontado pelo INSS, documento entre parênteses · III – Do direito ao benefício, mostrando o preenchimento de cada requisito legal (carência, qualidade de segurado, incapacidade, idade, tempo de contribuição ou renda familiar, conforme o tipo) rebatendo especificamente o motivo do indeferimento · IV – Da tutela de urgência, se pedida, com os requisitos do art. 300 do CPC · V – Dos pedidos em alíneas: concessão ou restabelecimento do benefício desde a data [DER / CESSAÇÃO, CONFORME O CASO], pagamento dos valores atrasados, implantação · VI – Do valor da causa · VII – Requerimentos finais (perícia judicial, gratuidade).
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal (inclusive tema de repetitivo do STJ ou do TNU, se houver), senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo com a conta à mostra, quem lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente fato, documento nem data do CNIS.

**Depois do resultado:** confira cada vínculo do CNIS citado na peça contra o documento original. Veja se o motivo do indeferimento está rebatido de forma específica, não genérica. Confirme a data de início pedida para o benefício (DER, data da cessação ou data do requerimento).

**Com o Advoclaude instalado:** "inicial previdenciária para o cliente [iniciais], o INSS negou [benefício]: [motivo da negativa]" (anexe a carta do INSS e o CNIS).

---

## 09. Divórcio (consensual ou litigioso)

**Quando usar:** o casal quer se divorciar, de comum acordo ou não, com ou sem filhos e bens a partilhar.

**Tenha em mãos:** a certidão de casamento, os dados dos filhos (se houver), a lista de bens e dívidas do casal e o que já foi acertado sobre guarda, pensão e partilha.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [CLIENTE], em [COMARCA/VARA DE FAMÍLIA], e vai redigir a petição de divórcio [CONSENSUAL / LITIGIOSO]. Regime de bens: [COMUNHÃO PARCIAL / TOTAL / SEPARAÇÃO / PARTICIPAÇÃO FINAL]. Filhos: [SIM/NÃO, IDADE DE CADA UM]. Bens e dívidas: [LISTA RESUMIDA]. O que já está acertado: [GUARDA, PENSÃO, PARTILHA, USO DO SOBRENOME].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: se o divórcio é consensual (os dois concordam com tudo) ou litigioso (há ponto de discordância, e qual); se há filho menor ou incapaz, o que muda o rito e exige manifestação do Ministério Público; a proposta de guarda (compartilhada ou unilateral) e de convivência; o valor de pensão alimentícia proposto, com a base de cálculo; a lista completa de bens e dívidas, com valor de cada um, para a partilha; e se alguém quer manter o sobrenome do outro.
>
> Tarefa: redija pela Lei 13.105/2015 (CPC, arts. 731 a 733, se consensual) ou como ação litigiosa. Estrutura: I – Qualificação das partes e dos filhos, se houver · II – Do casamento e do regime de bens, com a certidão entre parênteses · III – Da guarda e convivência, propondo o arranjo e o calendário, se consensual, ou fundamentando o pedido, se litigioso · IV – Dos alimentos, com a base de cálculo discriminada (necessidade do filho, possibilidade de quem paga) · V – Da partilha de bens, com lista e valor de cada bem e dívida, e a proposta de divisão · VI – Do nome, se houver pedido de manutenção ou retomada do sobrenome · VII – Dos pedidos em alíneas · VIII – Requerimentos finais (gratuidade, se for o caso; manifestação do Ministério Público, se houver incapaz).
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo com a conta à mostra, quem lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente fato, bem nem valor; dados pessoais, inclusive dos filhos, por iniciais.

**Depois do resultado:** confira a lista de bens e dívidas contra os documentos (matrícula, extrato, contrato de financiamento). Veja se a base de cálculo dos alimentos está explicada, não só o valor final. Confirme se, havendo filho menor, a peça está redigida para o rito que exige a manifestação do Ministério Público.

**Com o Advoclaude instalado:** "divórcio [consensual/litigioso] do cliente [iniciais], filhos: [idades], bens: [lista]".

---

## 10. Ação de alimentos

**Quando usar:** o cliente (ou o filho dele) precisa que alguém pague ou revise uma pensão alimentícia.

**Tenha em mãos:** a certidão de nascimento ou o documento que prova o vínculo, a renda ou o padrão de vida de quem vai pagar (quando souber), e os gastos do alimentando.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [AUTOR: REPRESENTANDO O ALIMENTANDO, SE MENOR], em [COMARCA/VARA DE FAMÍLIA], e vai redigir a ação de alimentos [INICIAL / REVISIONAL / EXONERATÓRIA] contra [RÉU]. Vínculo: [FILHO, EX-CÔNJUGE, OUTRO]. Gastos mensais do alimentando: [LISTA COM VALORES]. Renda ou padrão de vida do réu, se souber: [RESUMO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a renda do réu, ainda que estimada pelo padrão de vida (carro, viagens, imóveis), já que nem sempre há holerite; se já existe pensão fixada e se o pedido é para aumentar, reduzir ou cessar; se o autor quer pedido de alimentos provisórios, a serem fixados antes da sentença; os documentos dos gastos do alimentando (escola, plano de saúde, remédio); e se há outro filho do réu que também recebe pensão, o que entra na conta da possibilidade dele.
>
> Tarefa: redija pela Lei 5.478/1968 e pelo CC (arts. 1.694 a 1.710). Estrutura: I – Qualificação das partes e do vínculo com o réu, documento entre parênteses · II – Da necessidade do alimentando, com os gastos discriminados item a item e o documento de cada um · III – Da possibilidade do réu, pela renda comprovada ou pelo padrão de vida demonstrado por indícios (se não houver holerite) · IV – Do binômio necessidade-possibilidade e do percentual ou valor pedido · V – Dos alimentos provisórios, se pedidos, com os requisitos para a fixação imediata · VI – Dos pedidos em alíneas · VII – Requerimentos finais (gratuidade, se for o caso).
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo com a conta à mostra, quem lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente renda, fato nem valor; dados pessoais do alimentando por iniciais.

**Depois do resultado:** confira se cada gasto do alimentando tem documento ou justificativa de prova. Veja se a estimativa da renda do réu, quando não há holerite, está apoiada em indícios concretos (imóvel, veículo, rede social), não em suposição. Confirme o percentual pedido contra o padrão da sua comarca para casos parecidos.

**Com o Advoclaude instalado:** "ação de alimentos para o cliente [iniciais], contra [réu], gastos: [lista]".

---

## 11. Ação de despejo por falta de pagamento

**Quando usar:** o locador quer retomar o imóvel porque o locatário está inadimplente com o aluguel.

**Tenha em mãos:** o contrato de locação, o demonstrativo dos aluguéis em atraso (mês a mês, com valor e data de vencimento) e a notificação extrajudicial de cobrança, se já enviada.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) do locador [AUTOR], em [COMARCA/VARA], e vai redigir a ação de despejo por falta de pagamento contra o locatário [RÉU]. Imóvel: [ENDEREÇO]. Contrato: [DATA E PRAZO]. Aluguéis em atraso: [LISTA MÊS A MÊS COM VALOR]. Fiador ou garantia: [SIM/NÃO, QUEM].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: se há fiador e se ele será incluído na ação; se o autor quer cumular o despejo com a cobrança dos aluguéis atrasados, o que é permitido no mesmo processo (art. 62 da Lei 8.245/1991); se já houve notificação de cobrança antes da ação; se o autor quer pedir liminar de desocupação em 15 dias, que no despejo por falta de pagamento cabe quando o contrato está sem garantia ou a garantia se extinguiu, e exige caução de três meses de aluguel (art. 59, § 1º, IX, da Lei 8.245/1991); e os encargos (condomínio, IPTU) que também estão em aberto.
>
> Tarefa: redija pela Lei 8.245/1991. Estrutura: I – Qualificação das partes e do imóvel, com o contrato entre parênteses · II – Dos fatos: locação, vencimento dos aluguéis e inadimplência, mês a mês, com o valor de cada parcela em atraso · III – Do pedido de liminar de desocupação, se cabível, pelo art. 59, § 1º, IX, com a oferta da caução de três aluguéis exigida pelo § 1º · IV – Do pedido cumulado de cobrança dos aluguéis e encargos em atraso, com o cálculo discriminado (valor, multa contratual, juros e correção) · V – Dos pedidos em alíneas: decretação do despejo, concessão de prazo para desocupação voluntária (art. 63), cobrança dos valores · VI – Do valor da causa · VII – Requerimentos finais.
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo e conta de juros/multa à mostra, quem lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente valor nem data de vencimento.

**Depois do resultado:** confira o demonstrativo de aluguéis em atraso contra o contrato e os comprovantes de não pagamento. Veja se o fundamento da liminar pedida corresponde de fato à hipótese legal (garantia ou falta dela, prazo da notificação). Confirme o valor da causa: no despejo é doze meses de aluguel (art. 58, III, da Lei 8.245/1991). Lembre que o locatário pode purgar a mora em 15 dias da citação (art. 62, II) e elidir a liminar pelo depósito do art. 59, § 3º; o cálculo discriminado do débito na inicial é obrigatório (art. 62, I).

**Com o Advoclaude instalado:** "despejo por falta de pagamento, locador [iniciais], locatário deve [valor] desde [mês]" (anexe o contrato).

---

## 12. Execução de título extrajudicial

**Quando usar:** o cliente tem um documento que a lei já considera prova da dívida (cheque, nota promissória, contrato com assinatura e testemunhas, instrumento particular de dívida) e quer cobrar diretamente, sem discutir o débito antes.

**Tenha em mãos:** o título original (ou cópia legível), a planilha de cálculo do débito atualizado e os dados do executado.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) do exequente [AUTOR], em [COMARCA/VARA], e vai redigir a petição de execução de título extrajudicial contra [EXECUTADO]. Título: [CHEQUE / NOTA PROMISSÓRIA / CONTRATO ASSINADO COM 2 TESTEMUNHAS / OUTRO, COM O ART. 784 DO CPC QUE SE APLICA]. Valor original: [VALOR E DATA]. Vencimento: [DATA].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: se o título preenche os requisitos de certeza, liquidez e exigibilidade (se for contrato particular em papel, se tem assinatura do devedor e de duas testemunhas, art. 784, III; se for contrato assinado eletronicamente com integridade conferida por provedor de assinatura, as testemunhas são dispensadas, art. 784, § 4º, incluído pela Lei 14.620/2023); o índice de correção e a taxa de juros aplicável, se não estiverem escritos no título; se há garantia real ou fiador vinculado ao título; e se o exequente já tem algum bem do executado em mente para indicar à penhora.
>
> Tarefa: redija pelo art. 798 e seguintes do CPC. Estrutura: I – Qualificação das partes · II – Do título executivo, identificando o dispositivo do art. 784 que o torna exequível, com o documento entre parênteses · III – Da memória de cálculo, discriminando valor original, juros, multa e correção monetária até a data do ajuizamento, com o índice usado em cada etapa · IV – Do pedido de citação para pagamento em 3 dias (art. 829) sob pena de penhora · V – Dos pedidos em alíneas: citação, penhora e avaliação de bens em caso de não pagamento, honorários de 10% (reduzíveis à metade em caso de pagamento integral no prazo, art. 827, § 1º) · VI – Do valor da causa (o valor atualizado do débito) · VII – Requerimentos finais, incluindo pedido de consulta a sistemas de localização de bens, se necessário.
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, com a planilha de cálculo em anexo, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; juros e correção com o índice explicitado, quem confere e lança a conta final é o advogado; nada de "data venia", "ab initio", "in casu"; não invente valor, data nem índice.

**Depois do resultado:** confira a memória de cálculo linha por linha, com o índice de correção que você de fato usa no escritório. Veja se o título realmente preenche o requisito legal apontado (testemunhas, assinatura, data). Confirme o valor da causa contra a planilha anexada.

**Com o Advoclaude instalado:** "execução do título [tipo] contra [réu], valor de [valor] vencido em [data]" (anexe o título).

---

## 13. Ação monitória

**Quando usar:** o cliente tem prova escrita da dívida, mas o documento não é, por si só, título executivo (ex.: contrato em papel sem testemunha, e-mail de confissão de dívida, cheque prescrito como título, nota fiscal não paga; contrato eletrônico com assinatura conferida por provedor é título executivo pelo art. 784, § 4º, do CPC e vai pela execução, não pela monitória).

**Tenha em mãos:** o documento que prova a dívida (mesmo sem força executiva), o histórico de cobrança, se houver, e o cálculo do valor devido.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) do autor [AUTOR], em [COMARCA/VARA], e vai redigir a ação monitória contra [RÉU], com base em prova escrita sem força de título executivo. Documento: [TIPO: CONTRATO SEM TESTEMUNHA, E-MAIL, CHEQUE PRESCRITO, NOTA FISCAL, OUTRO]. Valor: [VALOR E DATA DE ORIGEM]. Histórico de cobrança: [RESUMO, SE HOUVER].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: se o documento tem assinatura do réu ou outro elemento que comprove a origem da dívida; se já houve cobrança extrajudicial ou reconhecimento do débito pelo réu, mesmo informal (mensagem, e-mail); o índice de correção e a taxa de juros que o autor pretende aplicar; e se há risco de o réu opor embargos monitórios com defesa de mérito (o que é comum e não impede o ajuizamento).
>
> Tarefa: redija pelo art. 700 e seguintes do CPC. Estrutura: I – Qualificação das partes · II – Da prova escrita da dívida, descrevendo por que ela comprova a obrigação, documento entre parênteses, mesmo sem ser título executivo · III – Da memória de cálculo, com valor original, juros e correção até a data do ajuizamento, índice explicitado · IV – Do pedido de expedição de mandado de pagamento, com prazo de 15 dias para o réu pagar, embargar ou ficar inerte (o que converte o mandado em título executivo, art. 701, § 2º) · V – Dos pedidos em alíneas · VI – Do valor da causa · VII – Requerimentos finais.
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, com a memória de cálculo em anexo, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; juros e correção com índice explicitado, quem confere e lança a conta é o advogado; nada de "data venia", "ab initio", "in casu"; não invente documento, data nem valor.

**Depois do resultado:** confira se o documento anexado de fato demonstra a origem e o valor da dívida, sem lacuna que o réu possa explorar nos embargos. Veja a memória de cálculo contra o índice usado. Confirme que o pedido está formulado para o mandado de pagamento, não para citação comum.

**Com o Advoclaude instalado:** "ação monitória contra [réu], dívida de [valor] comprovada por [documento]" (anexe o documento).

---

## 14. Mandado de segurança

**Quando usar:** o cliente tem direito líquido e certo violado ou ameaçado por ato de autoridade pública (ou de agente de pessoa jurídica no exercício de função pública), e precisa de prova documental pré-constituída, sem necessidade de produzir prova em audiência.

**Tenha em mãos:** o ato que viola o direito (decisão, portaria, despacho, indeferimento), com data, e os documentos que comprovam o direito alegado, todos já em mãos no momento do protocolo.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) do impetrante [AUTOR], em [TRIBUNAL/VARA COMPETENTE], e vai redigir o mandado de segurança contra o ato de [AUTORIDADE COATORA, COM CARGO E ÓRGÃO]. Ato impugnado: [DESCRIÇÃO, DATA, DOCUMENTO QUE O REGISTRA]. Direito alegado: [RESUMO EM ATÉ 5 LINHAS]. Urgência: [SIM/NÃO E POR QUÊ].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data exata em que o impetrante tomou ciência do ato, para a conta do prazo decadencial de 120 dias (art. 23 da Lei 12.016/2009); o nome e o cargo exatos da autoridade coatora e o órgão a que pertence, para o endereçamento correto; se toda a prova do direito já está documentada, porque o mandado de segurança não admite dilação probatória; se há pedido de liminar e os fatos que demonstram a urgência; e se o ato atinge terceiros que deveriam ser comunicados.
>
> Tarefa: redija pela Lei 12.016/2009. Estrutura: I – Qualificação do impetrante e da autoridade coatora · II – Da tempestividade, com a conta dos 120 dias à mostra desde a ciência do ato · III – Do ato impugnado e do direito líquido e certo, demonstrando que a prova é só documental, cada afirmação com o documento entre parênteses · IV – Da liminar, se pedida, com os requisitos de relevância do fundamento e risco de dano irreversível (art. 7º, III) · V – Do direito, artigo antes do argumento · VI – Dos pedidos em alíneas: concessão da segurança, confirmação da liminar, notificação da autoridade · VII – Do valor da causa · VIII – Requerimentos finais.
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo decadencial com a conta à mostra, quem confere e lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente fato, documento nem data de ciência do ato.

**Depois do resultado:** confira a data de ciência do ato contra o documento que a comprova; os 120 dias correm da ciência, não da prática do ato. Veja se toda prova citada já está anexada: não há produção de prova depois. Confirme nome e cargo exatos da autoridade coatora, porque endereçamento errado pode levar à extinção.

**Com o Advoclaude instalado:** "mandado de segurança para o cliente [iniciais], contra o ato de [autoridade]: [o que aconteceu]" (anexe o ato e os documentos).

---

## 15. Pedido de tutela de urgência

**Quando usar:** o cliente precisa de uma decisão rápida, antes do fim do processo, porque esperar a sentença pode causar dano ou tornar o resultado inútil: pode ser pedido junto com a inicial ou em petição incidental num processo já em curso.

**Tenha em mãos:** os documentos que provam a probabilidade do direito e os que mostram o risco concreto de esperar (prazo que está vencendo, bem se deteriorando, saúde em risco, nome negativado).

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [AUTOR], em [COMARCA/VARA], e vai redigir o pedido de tutela de urgência [ANTECIPADA / CAUTELAR], [NA PETIÇÃO INICIAL / EM PETIÇÃO INCIDENTAL NO PROCESSO Nº [NÚMERO]]. O que se pede de urgência: [RESUMO EM ATÉ 3 LINHAS]. Risco de esperar a decisão final: [RESUMO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: os documentos que provam a probabilidade do direito (contrato, laudo, print, protocolo); o fato concreto que mostra o perigo de dano ou o risco ao resultado útil do processo, com data; se o pedido é satisfativo (antecipa o próprio resultado final) ou cautelar (só protege o processo até a decisão); se há risco de irreversibilidade para a outra parte, que o juiz vai pesar contra o pedido; e se o autor pode prestar caução, caso o juiz exija.
>
> Tarefa: redija pelo art. 300 e seguintes do CPC. Estrutura: I – Da probabilidade do direito, com os documentos que a comprovam, entre parênteses · II – Do perigo de dano ou do risco ao resultado útil do processo, narrando o fato concreto e por que não pode esperar a decisão final · III – Da reversibilidade da medida pedida, mostrando que ela pode ser desfeita sem prejuízo maior à outra parte, se o pedido final não for confirmado · IV – Do pedido específico, descrito de forma que o juiz consiga executar sem margem de dúvida (o que fazer, até quando, sob que penalidade em caso de descumprimento) · V – Requerimento de intimação imediata e de multa diária em caso de descumprimento, se cabível.
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para protocolo isolado (se incidental) ou dentro da inicial, no Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo e data dos fatos com a conta à mostra, quem lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente fato, documento nem data.

**Depois do resultado:** confira se o pedido está escrito de um jeito que o juiz consegue executar sem reinterpretar o que você quis dizer. Veja se o risco de esperar está amparado em fato concreto e recente, não em afirmação genérica de urgência. Confirme se os documentos da probabilidade do direito já estão todos anexados.

**Com o Advoclaude instalado:** "pedido de tutela de urgência para o cliente [iniciais]: [o que precisa com urgência e por quê]" (anexe os documentos).

---

## 16. Embargos à execução

**Quando usar:** o cliente foi executado (cobrado por título extrajudicial) e quer se defender dentro do próprio processo de execução.

**Tenha em mãos:** o título que fundamenta a execução, a petição de execução com a memória de cálculo, a intimação da citação com a data, e as provas de que a dívida não existe, já foi paga ou está com valor errado.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) do executado [EXECUTADO], em [COMARCA/VARA], e vai redigir os embargos à execução no processo [NÚMERO]. Título executado: [TIPO]. Valor cobrado: [VALOR]. Defesa do executado: [PAGAMENTO JÁ FEITO / DÍVIDA INEXISTENTE / EXCESSO DE EXECUÇÃO / NULIDADE DO TÍTULO / OUTRA].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data da citação ou da intimação para a conta do prazo de 15 dias (art. 915 do CPC); se há garantia do juízo (penhora, caução ou depósito), porque os embargos independem de garantia, mas isso pode importar para efeito suspensivo; os documentos que provam a defesa (comprovante de pagamento, recibo, perícia do valor correto); e se o executado quer pedir efeito suspensivo à execução, com os requisitos do art. 919, § 1º: os da tutela provisória (probabilidade do direito e perigo de dano) e a execução já garantida por penhora, depósito ou caução suficientes; sem garantia não há efeito suspensivo.
>
> Tarefa: redija pelo art. 914 e seguintes do CPC. Estrutura: I – Tempestividade, com a conta do prazo à mostra a partir do termo do art. 231 do CPC (juntada do AR ou do mandado, conforme a forma da citação; art. 915) · II – Síntese da execução, com o título, o valor cobrado e a memória de cálculo apresentada pelo exequente · III – Das matérias de defesa, cada uma com o fundamento legal e a prova que a sustenta: nulidade ou inexigibilidade do título, pagamento ou outra causa extintiva, excesso de execução com o cálculo correto discriminado, ou qualquer defesa cabível no processo (art. 917) · IV – Do pedido de efeito suspensivo, se pedido, com os requisitos do art. 919, § 1º · V – Dos pedidos em alíneas: acolhimento dos embargos, extinção ou redução da execução ao valor correto · VI – Requerimentos finais (provas, se necessário).
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo e conta de valor com a conta à mostra, quem confere e lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente fato, documento nem valor.

**Depois do resultado:** confira a memória de cálculo do exequente contra a sua própria conta, item por item, se a defesa for de excesso de execução. Veja se o prazo de 15 dias foi contado da citação certa (pessoal, por edital, por hora certa). Confirme se o pedido de efeito suspensivo tem os três requisitos do art. 919, § 1º: probabilidade do direito, perigo de dano e garantia do juízo.

**Com o Advoclaude instalado:** "embargos à execução do processo [número], o cliente [iniciais] diz que [a defesa]" (anexe a execução e a memória de cálculo do exequente).

---

## 17. Impugnação ao cumprimento de sentença

**Quando usar:** o cliente é cobrado dentro do cumprimento de sentença (fase de execução de uma sentença já transitada em julgado ou de título judicial) e quer impugnar o valor ou a própria cobrança.

**Tenha em mãos:** a sentença ou o acórdão que está sendo executado, a petição de cumprimento com a memória de cálculo do credor, a intimação da fase de cumprimento com a data, e os documentos de eventual pagamento já feito.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) do executado [EXECUTADO], em [COMARCA/VARA], e vai redigir a impugnação ao cumprimento de sentença no processo [NÚMERO]. Decisão executada: [SENTENÇA/ACÓRDÃO, DATA DO TRÂNSITO EM JULGADO]. Valor cobrado pelo credor: [VALOR]. Defesa do executado: [EXCESSO DE EXECUÇÃO / PAGAMENTO JÁ FEITO / PENHORA EXCESSIVA / ILEGITIMIDADE / OUTRA, LIMITADA AO ART. 525, § 1º].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data da intimação para pagar voluntariamente (art. 523) e a data em que esses 15 dias úteis terminaram, porque o prazo de 15 dias úteis da impugnação só começa depois, sem nova intimação (art. 525, caput); se o executado já pagou parte do valor e tem comprovante; a memória de cálculo apresentada pelo credor, para comparar item por item; se há excesso de multa do art. 523, § 1º, aplicada antes do prazo correto; e se o executado quer pedir efeito suspensivo, com os requisitos do art. 525, § 6º: garantia do juízo (penhora, caução ou depósito suficientes), relevância dos fundamentos e risco de grave dano de difícil ou incerta reparação.
>
> Tarefa: redija pelo art. 525 do CPC, lembrando que a impugnação só pode tratar das matérias do § 1º desse artigo (não é nova contestação sobre o mérito já decidido). Estrutura: I – Tempestividade, com a conta do prazo à mostra: 15 dias úteis para pagar (art. 523) e, vencidos, mais 15 dias úteis para impugnar, sem nova intimação (art. 525) · II – Síntese do cumprimento de sentença e da memória de cálculo do credor · III – Das matérias de defesa, cada uma enquadrada expressamente num dos incisos do art. 525, § 1º (falta ou nulidade da citação, se for o caso; ilegitimidade; inexigibilidade ou inexequibilidade do título; excesso de execução, com o cálculo correto discriminado; cumulação indevida de execuções (inciso V); penhora incorreta ou avaliação errônea (IV); incompetência do juízo da execução (VI); qualquer causa impeditiva, modificativa ou extintiva superveniente à sentença) · IV – Do pedido de efeito suspensivo, se pedido, com os dois requisitos do § 6º · V – Dos pedidos em alíneas · VI – Requerimentos finais.
>
> Formato: títulos em caixa alta com numeral romano, parágrafos numerados, pronta para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal, senão [INSERIR JULGADO: tema]; dado que falta vira [DEFINIR: …]; prazo e conta de valor com a conta à mostra, quem confere e lança é o advogado; nada de "data venia", "ab initio", "in casu"; não invente fato, documento nem valor; não reabra discussão de mérito já coberta pela coisa julgada.

**Depois do resultado:** confira se cada matéria alegada está mesmo dentro do rol do art. 525, § 1º; impugnação que discute o mérito já julgado é rejeitada de plano. Veja a memória de cálculo do credor linha por linha contra a sua, se a defesa for de excesso. Confirme a data do trânsito em julgado e a data da intimação para a conta do prazo.

**Com o Advoclaude instalado:** "impugnação ao cumprimento de sentença do processo [número], o cliente [iniciais] diz que [a defesa]" (anexe a sentença e a memória de cálculo do credor).

---

## 18. Apelação

**Quando usar:** a sentença saiu contra o cliente, total ou parcialmente, e cabe apelar.

**Tenha em mãos:** a sentença, a inicial e a contestação, as provas dos autos, a data da intimação.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [parte que representamos: autor/réu] e vai redigir a apelação contra a sentença em anexo, processo [NÚMERO], [VARA E COMARCA]. Sentença intimada em [DATA]. Pedido da inicial: [RESUMO]. O que a sentença decidiu contra o meu cliente: [RESUMO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data exata da intimação da sentença; se há sucumbência recíproca, para avaliar apelação adesiva da outra parte; se o cliente quer pedir efeito suspensivo; se há preparo a recolher ou gratuidade de justiça; e os pontos da sentença que mais incomodam o cliente, na ordem de importância dele.
>
> Tarefa: leia a sentença e a inicial/contestação inteiras antes de escrever. A apelação (CPC, art. 1.009) tem que trazer, pelo art. 1.010, a exposição do fato e do direito, as razões do pedido de reforma ou de nulidade, e o pedido de nova decisão. Ataque cada fundamento da sentença contrário ao cliente, um por um: o que não for impugnado transita em julgado naquela parte. Separe o que é nulidade processual do que é erro de julgamento.
>
> Estrutura:
> 1. Endereçamento e qualificação.
> 2. Tempestividade, com a conta do prazo à mostra (15 dias úteis, art. 1.003, § 5º, do CPC).
> 3. Síntese do processo: pedido, defesa, instrução, o que a sentença decidiu.
> 4. Preliminares de nulidade, se houver.
> 5. Razões de mérito, um tópico por fundamento da sentença que se ataca, com a tese em negrito na primeira frase de cada tópico.
> 6. Pedido de efeito suspensivo, se for o caso, com o motivo.
> 7. Pedidos: reforma ou anulação, e o resultado buscado no lugar.
>
> Formato: títulos em numeral romano, parágrafos numerados, pronto para o Word.
>
> Regras fixas: julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; prazo com a conta à mostra, e quem lança é o advogado; preparo e guia de custas viram [DEFINIR: valor e código]; dado que falta vira [DEFINIR: …]; não invente fato, documento nem trecho da sentença; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confira se todo fundamento da sentença contrário ao cliente foi impugnado: o que ficar de fora transita em julgado. Recolha o preparo e junte a guia antes de protocolar. Releia o prazo no calendário do tribunal.

**Com o Advoclaude instalado:** "faz a apelação da sentença do caso [iniciais]" (anexe a sentença).

---

## 19. Contrarrazões de apelação

**Quando usar:** a outra parte apelou e você tem prazo para responder, inclusive para avaliar apelação adesiva.

**Tenha em mãos:** a apelação recebida, a sentença, a inicial e a contestação.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [parte que representamos] e vai redigir as contrarrazões à apelação em anexo, processo [NÚMERO], [VARA E COMARCA]. Sentença: [RESUMO DO QUE FOI DECIDIDO A FAVOR DO MEU CLIENTE]. Apelante: [AUTOR/RÉU]. Teses da apelação: [RESUMO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data de intimação da apelação; se há sucumbência recíproca que justifique apelação adesiva do meu cliente (CPC, art. 997); se algum fundamento da sentença favorável ao cliente não foi atacado pelo apelante; e se o cliente quer levantar preliminar de não conhecimento do recurso.
>
> Tarefa: responda tese por tese da apelação, na mesma ordem em que aparecem. Para cada argumento do apelante, mostre por que a sentença está certa naquele ponto, com o fundamento da própria sentença e, se houver, prova dos autos. Verifique requisitos de admissibilidade (tempestividade, preparo, regularidade formal) e, se algum faltar, inclua preliminar de não conhecimento antes do mérito. Havendo sucumbência recíproca não impugnada, pergunte se o cliente quer apresentar apelação adesiva no mesmo prazo das contrarrazões (art. 1.010, § 1º, do CPC).
>
> Estrutura:
> 1. Endereçamento e qualificação.
> 2. Tempestividade das contrarrazões (15 dias úteis contados da intimação da apelação, art. 1.010, § 1º, do CPC).
> 3. Preliminares de não conhecimento do recurso da outra parte, se houver.
> 4. Síntese da apelação.
> 5. Contrarrazões de mérito, tese por tese, com a tese do apelante entre aspas no início de cada tópico e a resposta logo abaixo.
> 6. Pedido: não conhecimento ou desprovimento da apelação, manutenção da sentença.
>
> Formato: títulos em numeral romano, parágrafos numerados, pronto para o Word.
>
> Regras fixas: julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; prazo com a conta à mostra, e quem lança é o advogado; dado que falta vira [DEFINIR: …]; não invente fato, documento nem argumento que a apelação não trouxe; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confira se toda tese da apelação recebeu resposta: tese não enfrentada vira o ponto fraco. Veja se vale apresentar apelação adesiva no mesmo prazo. Confirme a data de intimação antes de contar o prazo.

**Com o Advoclaude instalado:** "faz as contrarrazões à apelação do caso [iniciais]" (anexe a apelação e a sentença).

---

## 20. Agravo de instrumento

**Quando usar:** saiu decisão interlocutória que se encaixa no rol de cabimento do agravo, e esperar a apelação causaria dano.

**Tenha em mãos:** a decisão agravada, a petição que a motivou, as peças obrigatórias (procuração, inicial, contestação, decisão, comprovante de intimação).

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [parte que representamos] e vai redigir um agravo de instrumento contra a decisão em anexo, processo [NÚMERO], [VARA E COMARCA]. Decisão agravada: [O QUE FOI DECIDIDO]. Data da intimação: [DATA]. Por que não pode esperar a apelação: [URGÊNCIA/RISCO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: em qual hipótese do art. 1.015 do CPC a decisão se encaixa, ou se o cabimento vem de norma específica; se há pedido de efeito suspensivo ou de antecipação da tutela recursal, e por quê; a lista das peças obrigatórias que já tenho (procuração, petição inicial, contestação, decisão agravada, certidão de intimação) e as que faltam; e se o agravo será por sistema eletrônico.
>
> Tarefa: confirme o cabimento pelo rol do art. 1.015 do CPC antes de escrever; se a hipótese for duvidosa, diga isso na primeira linha e não force o enquadramento. Monte as razões mostrando por que a decisão está errada; se o cabimento vier do Tema 988, amarre à urgência que impede esperar a apelação.
>
> Estrutura:
> 1. Endereçamento ao tribunal e qualificação.
> 2. Cabimento: a hipótese do art. 1.015 em que a decisão se encaixa, ou a norma específica.
> 3. Tempestividade, com a conta do prazo à mostra (15 dias úteis, art. 1.003, § 5º, do CPC).
> 4. Relação das peças obrigatórias (art. 1.017 do CPC) anexadas.
> 5. Síntese da decisão agravada.
> 6. Razões, com a tese em negrito na primeira frase de cada tópico.
> 7. Pedido de efeito suspensivo ou antecipação da tutela recursal, se for o caso, com o requisito de urgência explícito.
> 8. Pedido final: reforma ou anulação da decisão.
>
> Formato: títulos em numeral romano, parágrafos numerados, pronto para o Word.
>
> Regras fixas: julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; a mitigação da taxatividade do art. 1.015 vem do Tema Repetitivo 988 do STJ (REsp 1.696.396/MT e REsp 1.704.520/MT, Corte Especial, j. 05/12/2018, DJe 19/12/2018: o rol admite agravo quando houver urgência decorrente da inutilidade do julgamento da questão na apelação); use-o só nessa hipótese, com o link da página do tema no site do STJ, e demonstre a urgência concreta; nas hipóteses expressas do rol, urgência não é requisito; prazo com a conta à mostra, e quem lança é o advogado; peça que falta vira [DEFINIR: qual peça]; não invente fato nem documento; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confira se todas as peças obrigatórias estão anexadas no protocolo eletrônico. Releia o enquadramento no art. 1.015 antes de protocolar: é o que mais derruba o agravo por não conhecimento. Avise o cliente se o efeito suspensivo não é automático.

**Com o Advoclaude instalado:** "faz o agravo de instrumento contra a decisão do caso [iniciais]" (anexe a decisão).

---

## 21. Embargos de declaração

**Quando usar:** a decisão saiu com omissão, contradição, obscuridade ou erro material.

**Tenha em mãos:** a decisão embargada e o trecho exato do pedido ou argumento que ela não enfrentou.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [parte que representamos] e vai redigir embargos de declaração contra a decisão em anexo, processo [NÚMERO], [VARA/TRIBUNAL]. Tipo de vício: [OMISSÃO / CONTRADIÇÃO / OBSCURIDADE / ERRO MATERIAL]. O que a decisão não enfrentou ou errou: [RESUMO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: o trecho exato do pedido, da defesa ou do recurso que a decisão não enfrentou, colado na íntegra; se o cliente quer também efeito modificativo, e por quê; a data da intimação da decisão; e se há urgência que justifique pedido de efeito suspensivo ao recurso cabível.
>
> Tarefa: aponte o vício com precisão. Embargos não servem para rediscutir o que já foi decidido, só para declarar o que faltou, contradisse, ficou obscuro ou errou materialmente (CPC, art. 1.022). Se o vício for omissão, cite o trecho exato da petição ou do recurso que não foi enfrentado. Se for contradição, aponte as duas passagens que se contradizem. Se o cliente pedir efeito modificativo, diga isso na petição, explique por que a correção do vício muda o resultado, e avise que a outra parte terá direito ao contraditório antes do julgamento.
>
> Estrutura:
> 1. Endereçamento e qualificação.
> 2. Tempestividade, com a conta à mostra: 5 dias úteis no cível (art. 1.023 do CPC) e no Juizado (art. 49 da Lei 9.099/1995); 5 dias no trabalhista (art. 897-A da CLT); 2 dias no penal (arts. 382 e 619 do CPP).
> 3. O vício, com o trecho da decisão e o trecho da petição ou recurso que mostra a omissão, contradição, obscuridade ou erro.
> 4. Pedido de efeito modificativo, se houver, com a justificativa separada do pedido de mera integração.
> 5. Pedido final.
>
> Formato: direto, sem rodeio, pronto para o Word.
>
> Regras fixas: nunca escreva embargos como recurso de mérito disfarçado; se o pedido for mera irresignação sem vício real, avise isso em vez de forçar a petição; julgado só com link aberto, senão [INSERIR JULGADO: tema]; prazo com a conta à mostra, e quem lança é o advogado; dado que falta vira [DEFINIR: …]; não invente trecho da decisão; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confira se o trecho citado da decisão é exato, palavra por palavra. Lembre o cliente que os embargos interrompem o prazo do recurso cabível (CPC, art. 1.026), mas não o suspendem indefinidamente. Avalie o risco de multa por embargos protelatórios (art. 1.026, § 2º) antes de protocolar, se o vício for frágil.

**Com o Advoclaude instalado:** "faz os embargos de declaração contra essa decisão: [o vício]" (anexe a decisão).

---

## 22. Recurso ordinário trabalhista

**Quando usar:** a sentença trabalhista saiu contra o cliente, reclamante ou reclamada.

**Tenha em mãos:** a sentença, a reclamação trabalhista, a defesa, a ata de audiência.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) trabalhista de [reclamante/reclamada] e vai redigir o recurso ordinário contra a sentença em anexo, processo [NÚMERO], [VARA DO TRABALHO]. Pedidos da reclamação: [RESUMO]. O que a sentença decidiu contra o meu cliente: [RESUMO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data exata da publicação ou intimação da sentença; se a reclamada é microempresa, empresa de pequeno porte, MEI, empregador doméstico ou entidade sem fins lucrativos (depósito pela metade, art. 899, § 9º, da CLT), ou beneficiária da justiça gratuita, entidade filantrópica ou empresa em recuperação judicial (isenta, § 10); e se vai substituir o depósito por fiança bancária ou seguro garantia judicial (§ 11); o valor da condenação, para calcular o depósito recursal; se há embargos de declaração a opor antes do recurso ordinário; e os pontos da sentença que mais preocupam o cliente.
>
> Tarefa: leia a sentença e os pedidos inteiros antes de escrever. Ataque cada capítulo da sentença contrário ao cliente: capítulo não impugnado transita em julgado. Separe preliminares processuais de mérito de cada verba.
>
> Estrutura:
> 1. Endereçamento e qualificação.
> 2. Tempestividade, com a conta do prazo à mostra (8 dias úteis, arts. 775 e 895 da CLT).
> 3. Comprovante de depósito recursal e custas, se a reclamada for recorrente (art. 899 da CLT, valor pela tabela do TST vigente [CONFERIR]).
> 4. Síntese do processo e da sentença.
> 5. Razões, um tópico por verba ou matéria impugnada, com a tese em negrito na primeira frase.
> 6. Pedido: reforma da sentença, verba por verba.
>
> Formato: títulos em numeral romano, parágrafos numerados, pronto para o Word.
>
> Regras fixas: julgado só com link aberto no site do tribunal (TRT, TST), senão [INSERIR JULGADO: tema]; valor do depósito recursal e das custas vira [CONFERIR: tabela vigente do TST]; prazo com a conta à mostra, e quem lança é o advogado; dado que falta vira [DEFINIR: …]; não invente fato, documento nem valor; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confirme o valor do depósito recursal na tabela do TST vigente na data do recurso. Veja se toda verba contrária ao cliente foi impugnada. Junte a guia de custas e o comprovante de depósito antes de protocolar.

**Com o Advoclaude instalado:** "faz o recurso ordinário da sentença do caso [iniciais]" (anexe a sentença).

---

## 23. Recurso inominado (Juizado Especial)

**Quando usar:** a sentença do Juizado Especial (Cível, Federal ou da Fazenda Pública) saiu contra o cliente.

**Tenha em mãos:** a sentença, a inicial e a contestação, ou a ata de audiência, se o processo correu sem peças formais.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [parte que representamos] e vai redigir o recurso inominado contra a sentença em anexo, processo [NÚMERO], [JUIZADO ESPECIAL CÍVEL/FEDERAL/DA FAZENDA PÚBLICA]. Pedido da inicial: [RESUMO]. O que a sentença decidiu contra o meu cliente: [RESUMO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data de intimação da sentença; se há preparo a recolher e o valor, ou se o recorrente é beneficiário da gratuidade; se o recurso será julgado por Turma Recursal; e os pontos da sentença que mais preocupam o cliente.
>
> Tarefa: no rito do Juizado Especial o recurso é mais direto, sem preliminar de nulidade processual ampla (a Lei 9.099/95 orienta por informalidade): vá ao ponto, sem rodeio. Ataque cada fundamento da sentença contrário ao cliente.
>
> Estrutura:
> 1. Endereçamento à Turma Recursal e qualificação.
> 2. Tempestividade, com a conta do prazo à mostra (10 dias úteis, arts. 12-A e 42 da Lei 9.099/1995).
> 3. Comprovante de preparo (art. 42, § 1º, da Lei 9.099/1995) ou pedido de gratuidade.
> 4. Síntese do processo e da sentença.
> 5. Razões, tópico por tópico, com a tese em negrito na primeira frase.
> 6. Pedido: reforma da sentença.
>
> Formato: direto, sem formalismo excessivo, pronto para o Word.
>
> Regras fixas: julgado só com link aberto, de preferência da própria Turma Recursal ou do colegiado uniformizador, senão [INSERIR JULGADO: tema]; valor do preparo vira [CONFERIR: tabela do tribunal de origem]; prazo com a conta à mostra, e quem lança é o advogado; dado que falta vira [DEFINIR: …]; não invente fato, documento nem valor; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confirme o valor do preparo na tabela do tribunal de origem: recolha e comprove o preparo nas 48 horas seguintes à interposição, independentemente de intimação, sob pena de deserção (art. 42, § 1º, da Lei 9.099/1995); no Juizado não há complementação depois (Enunciado 80 do FONAJE); em JEF e Fazenda Pública, confira o valor na tabela do tribunal. Veja se o recurso ataca a sentença e não apenas repete a inicial.

**Com o Advoclaude instalado:** "faz o recurso inominado da sentença do caso [iniciais]" (anexe a sentença).

---

## 24. Recurso especial (admissibilidade e prequestionamento)

**Quando usar:** o acórdão de segunda instância contrariou lei federal ou divergiu de outro tribunal, e você precisa levar a questão ao STJ.

**Tenha em mãos:** o acórdão recorrido, os embargos de declaração já opostos (se houve), a petição em que a tese federal foi levantada antes.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [parte que representamos] e vai avaliar e redigir o recurso especial contra o acórdão em anexo, processo [NÚMERO], [TRIBUNAL DE ORIGEM]. Dispositivo de lei federal que entendo violado: [LEI, ARTIGO]. Divergência jurisprudencial, se houver: [RESUMO E TRIBUNAL DIVERGENTE].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: se o dispositivo federal apontado como violado foi debatido explicitamente no acórdão (prequestionamento) ou só na petição anterior; se já foram opostos embargos de declaração pedindo que o tribunal se pronunciasse sobre o ponto; se há acórdão de outro tribunal para demonstrar o dissídio, com link; e se o caso trata de matéria sujeita a recurso repetitivo.
>
> Tarefa: antes de redigir as razões, avalie a admissibilidade. Verifique se há prequestionamento: o dispositivo federal precisa ter sido debatido no acórdão: o STJ não conhece de recurso especial sobre questão que o tribunal de origem não decidiu, mesmo depois de embargos de declaração (Súmula 211/STJ: 'Inadmissível recurso especial quanto à questão que, a despeito da oposição de embargos declaratórios, não foi apreciada pelo Tribunal a quo.'). Se a tese nunca foi levada ao tribunal, diga isso na primeira linha e oriente embargos de declaração antes do recurso especial. Se os embargos já foram opostos e o tribunal seguiu omisso, o recurso especial precisa alegar expressamente violação do art. 1.022 do CPC, e a questão tem de constar dos embargos: só assim o art. 1.025 do CPC considera a matéria prequestionada. Fundamente pela alínea "a" do art. 105, III, da Constituição (violação de lei federal) e, se houver, pela alínea "c" (dissídio jurisprudencial), com a demonstração analítica da divergência exigida pelo art. 1.029, § 1º, do CPC.
>
> Estrutura:
> 1. Endereçamento ao STJ, por intermédio do tribunal de origem, e qualificação.
> 2. Tempestividade, com a conta do prazo à mostra (15 dias úteis, art. 1.003, § 5º, do CPC).
> 3. Cabimento: prequestionamento comprovado, com o trecho do acórdão que debateu a tese federal.
> 4. Dissídio jurisprudencial, se alegado, com cotejo analítico entre o acórdão recorrido e o paradigma.
> 5. Razões de mérito sobre a violação da lei federal.
> 6. Pedido de admissão e provimento do recurso.
>
> Formato: títulos em numeral romano, parágrafos numerados, pronto para o Word.
>
> Regras fixas: sem prequestionamento comprovado, não force a admissibilidade: avise e sugira embargos de declaração antes; julgado paradigma só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; súmula citada vira [CONFERIR: texto e número na página oficial do tribunal] antes de entrar na peça; prazo com a conta à mostra, e quem lança é o advogado; dado que falta vira [DEFINIR: …]; não invente trecho do acórdão; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confirme o prequestionamento linha por linha no acórdão antes de protocolar: é o motivo mais comum de recurso especial não conhecido. Confira o texto exato de toda súmula citada na página oficial do tribunal. Veja se o tema está em repercussão geral ou repetitivo com julgamento suspenso.

**Com o Advoclaude instalado:** "avalia se cabe recurso especial nesse acórdão e já prepara as razões" (anexe o acórdão).

---

## 25. Pedido de cumprimento de sentença

**Quando usar:** a sentença ou o acórdão já transitou em julgado e o devedor não pagou voluntariamente.

**Tenha em mãos:** a sentença ou acórdão com o valor ou critério de cálculo, a certidão de trânsito em julgado, a planilha de atualização.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) do exequente [INICIAIS] e vai redigir o requerimento de cumprimento de sentença no processo [NÚMERO], [VARA]. Título judicial: [SENTENÇA/ACÓRDÃO, DATA DO TRÂNSITO EM JULGADO]. Obrigação: [PAGAR QUANTIA / FAZER / NÃO FAZER / ENTREGAR COISA]. Valor principal: [VALOR], com [ÍNDICE DE CORREÇÃO E JUROS, SE DEFINIDOS NO TÍTULO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data exata do trânsito em julgado; o índice de correção e a taxa de juros que o título fixou, ou se ficou em aberto; se já houve algum pagamento parcial a abater; se o executado tem bens conhecidos para penhora, e quais; e se o pedido é de cumprimento provisório (recurso sem efeito suspensivo ainda pendente) ou definitivo.
>
> Tarefa: monte a planilha de cálculo com o índice e os juros exatamente como o título determinou: se o título não especificou, marque [DEFINIR: índice a aplicar] e não escolha por conta própria. Monte o requerimento para intimar o executado a pagar em 15 dias (CPC, art. 523), sob pena de multa de 10% e honorários de 10% (art. 523, § 1º), e, se o caso comportar, já requeira penhora e bloqueio de bens para o caso de o prazo se esgotar sem pagamento.
>
> Estrutura:
> 1. Endereçamento e qualificação.
> 2. Síntese do título executivo e do trânsito em julgado.
> 3. Planilha de cálculo atualizada (valor principal, índice, juros, período, total), com a data-base de cada atualização.
> 4. Requerimento de intimação do executado para pagar em 15 dias, com o alerta da multa e dos honorários do art. 523, § 1º.
> 5. Requerimento subsidiário de penhora on-line e de bens, para o caso de não pagamento.
> 6. Pedido final.
>
> Formato: planilha em tabela, petição em cláusulas numeradas, pronto para o Word.
>
> Regras fixas: cálculo com índice e juros só os que o título determinou; se o título ficou em silêncio, os legais supletivos são, desde 30/08/2024, o IPCA para a correção (art. 389, parágrafo único, do CC) e a taxa legal do art. 406 do CC (Selic deduzido o IPCA) para os juros, pela Lei 14.905/2024; para o período anterior, marque [DEFINIR: critério até 29/08/2024]; nunca escolha livremente; o que o título não definiu vira [DEFINIR: …]; julgado só com link aberto, senão [INSERIR JULGADO: tema]; prazo com a conta à mostra, e quem lança é o advogado; não invente valor, data nem documento; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confira a planilha de cálculo contra o título, linha por linha, antes de protocolar: é a peça que mais gera impugnação. Confirme se o trânsito em julgado já ocorreu (cumprimento definitivo) ou se ainda pende recurso (cumprimento provisório, com regras próprias). Veja se o executado tem bem conhecido para já indicar na penhora.

**Com o Advoclaude instalado:** "faz o cumprimento de sentença do caso [iniciais], valor de [X] atualizado até hoje".

---

## 26. Manifestação sobre laudo pericial

**Quando usar:** o perito judicial entregou o laudo e você tem prazo para se manifestar, concordando, impugnando ou pedindo esclarecimento.

**Tenha em mãos:** o laudo completo, os quesitos formulados pelas partes, o parecer técnico de assistente, se houver.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [parte que representamos] e vai redigir a manifestação sobre o laudo pericial no processo [NÚMERO], [VARA]. Objeto da perícia: [MATÉRIA: médica, contábil, de engenharia, grafotécnica]. Conclusão do laudo: [RESUMO]. Interessa ao meu cliente: [CONCORDAR / IMPUGNAR / PEDIR ESCLARECIMENTO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: os quesitos que o meu cliente formulou e se todos foram respondidos; se há parecer técnico de assistente que diverge do laudo, e em que ponto; se a conclusão do laudo favorece ou prejudica o cliente, e em que extensão; e se há contradição interna no laudo, entre a fundamentação e a conclusão, ou entre respostas a quesitos diferentes.
>
> Tarefa: leia o laudo inteiro, não só a conclusão. Verifique quesito por quesito se foi respondido e se a resposta é consistente com a fundamentação técnica. Se houver contradição, mostre o trecho exato. Se o laudo for favorável, destaque os pontos que sustentam a tese do cliente. Se for desfavorável e houver base técnica para impugnar, aponte falha de método, quesito não respondido ou conclusão que a fundamentação não sustenta: nunca ataque a conclusão do perito sem base técnica.
>
> Estrutura:
> 1. Endereçamento e qualificação.
> 2. Síntese do laudo e da conclusão.
> 3. Quesito por quesito: resposta do laudo e observação, quando houver.
> 4. Pontos de concordância, se houver.
> 5. Pontos de impugnação, com a falha técnica apontada e, se houver, o parecer do assistente que sustenta a crítica.
> 6. Pedido: homologação do laudo, esclarecimentos complementares (CPC, art. 477, § 2º) ou nova perícia (art. 480), conforme o caso.
>
> Formato: tabela de quesitos e tópicos de impugnação, pronto para o Word.
>
> Regras fixas: impugnação técnica só com fundamento técnico, nunca "o laudo está errado" sem apontar o quê; o prazo de manifestação é de 15 dias da intimação (art. 477, § 1º, do CPC), com a conta à mostra; dado que falta vira [DEFINIR: …]; julgado só com link aberto, senão [INSERIR JULGADO: tema]; não invente conclusão nem trecho do laudo; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confira cada citação do laudo contra o documento original, palavra por palavra. Se pedir nova perícia, avalie com o cliente o custo e o tempo que isso soma ao processo. Leve a manifestação ao assistente técnico antes de protocolar, se houver um acompanhando o caso.

**Com o Advoclaude instalado:** "o laudo pericial do caso [iniciais] chegou: ajuda a me manifestar" (anexe o laudo).

---

## 27. Memoriais (alegações finais)

**Quando usar:** a instrução processual terminou e o juiz autorizou ou determinou memoriais escritos em vez de alegações orais.

**Tenha em mãos:** toda a prova produzida (depoimentos, documentos, perícia), a inicial e a defesa.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [parte que representamos] e vai redigir os memoriais finais do processo [NÚMERO], [VARA], rito [CÍVEL/PENAL/TRABALHISTA]. Pedido da ação: [RESUMO]. Prova produzida na instrução: [RESUMO: testemunhas, documentos, perícia].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: o resumo de cada depoimento relevante, com o nome da testemunha por iniciais e o que disse; se houve perícia e qual a conclusão; se o prazo é comum ou sucessivo, e quantos dias cada parte tem; e os pontos que o cliente considera decisivos na prova produzida.
>
> Tarefa: amarre cada fato alegado na inicial ou na defesa à prova que o confirmou (ou não) na instrução: memorial não repete a inicial, fecha o caso com o que foi provado. Cite cada depoimento e documento pelo nome ou número nos autos, nunca de memória.
>
> Estrutura:
> 1. Endereçamento e qualificação.
> 2. Síntese do pedido e da defesa.
> 3. Síntese da instrução: o que cada prova mostrou, prova por prova.
> 4. Análise: cada fato controvertido confrontado com a prova que o decide.
> 5. Fundamentos jurídicos aplicáveis aos fatos provados.
> 6. Pedido final, coerente com o pedido original da ação ou da defesa.
>
> Formato: títulos em numeral romano, parágrafos numerados, pronto para o Word. No cível, estrutura pelo art. 364, § 2º, do CPC (razões finais escritas em prazos sucessivos de 15 dias úteis, primeiro o autor); no trabalhista, razões finais do art. 850 da CLT (orais, 10 minutos) ou memoriais no prazo que o juiz fixar; no processo penal, estrutura pelo art. 403, § 3º, do CPP (5 dias sucessivos), com pedido de absolvição ou condenação conforme a defesa.
>
> Regras fixas: todo fato alegado tem que estar amarrado à prova dos autos, com a folha ou o ID do documento; fato sem prova vira [DEFINIR: sem prova nos autos: avaliar manutenção do argumento]; julgado só com link aberto, senão [INSERIR JULGADO: tema]; prazo com a conta à mostra, e quem lança é o advogado; não invente depoimento nem documento; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confira cada citação de depoimento contra a ata de audiência ou a transcrição. Veja se o pedido final bate exatamente com o que foi pedido na inicial ou na defesa, sem ampliar nem reduzir sem avisar o cliente.

**Com o Advoclaude instalado:** "faz os memoriais do caso [iniciais] com a prova que já está nos autos".

---

## 28. Especificação de provas

**Quando usar:** o juiz abriu prazo, após a resposta ou o saneamento, para as partes dizerem que provas querem produzir e por quê.

**Tenha em mãos:** a inicial, a defesa, a decisão de saneamento, se já saiu, e os fatos que ainda precisam ser provados.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [parte que representamos] e vai redigir a especificação de provas do processo [NÚMERO], [VARA]. Fatos controvertidos: [LISTA, OU "AINDA NÃO DEFINIDOS PELO JUÍZO"]. Provas que pretendo produzir: [TESTEMUNHAL / PERICIAL / DOCUMENTAL / DEPOIMENTO PESSOAL].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: os fatos que a decisão de saneamento fixou como controvertidos, se já saiu; quantas testemunhas e quem são, por iniciais; se a perícia é a única forma de provar algum fato técnico; e se o cliente quer o depoimento pessoal da parte contrária.
>
> Tarefa: para cada prova requerida, diga o fato controvertido que ela vai provar: prova sem relação com fato controvertido o juiz indefere (CPC, art. 370). Não peça prova genérica "para provar o alegado"; amarre cada requerimento a um fato específico.
>
> Estrutura:
> 1. Endereçamento e qualificação.
> 2. Fatos controvertidos a provar, um por um (os fixados no saneamento, art. 357 do CPC, se houver, ou os que decorrem da inicial e da defesa).
> 3. Prova testemunhal: rol de testemunhas (nome, qualificação) e o fato que cada uma vai esclarecer.
> 4. Prova pericial, se requerida: a matéria técnica, os quesitos e a indicação de assistente técnico.
> 5. Depoimento pessoal da parte contrária, se requerido, e o fato que se busca esclarecer.
> 6. Prova documental complementar, se houver.
> 7. Pedido final.
>
> Formato: tabela Prova · Fato que prova · Observação, pronto para o Word.
>
> Regras fixas: toda prova amarrada a um fato controvertido específico, nunca genérico; dado que falta vira [DEFINIR: …]; julgado só com link aberto, senão [INSERIR JULGADO: tema]; prazo com a conta à mostra, e quem lança é o advogado; não invente fato nem testemunha; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confira se as testemunhas indicadas realmente presenciaram o fato que vão esclarecer: testemunha sem relação com o fato enfraquece o rol inteiro. Veja se os quesitos periciais cobrem o que falta provar. Confirme o prazo contra a decisão de saneamento.

**Com o Advoclaude instalado:** "monta a especificação de provas do caso [iniciais]: quero testemunhal e pericial".

---

## 29. Petições de rotina (juntada, andamento, pedido de prazo)

**Quando usar:** tarefa simples do dia a dia do processo: juntar documento, pedir vista, requerer prazo, informar endereço novo, cumprir determinação do juízo.

**Tenha em mãos:** o documento a juntar, se houver, e o despacho ou intimação que motiva a petição.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) de [parte que representamos] e vai redigir uma petição simples no processo [NÚMERO], [VARA]. Tipo: [JUNTADA DE DOCUMENTO / PEDIDO DE PRAZO / INFORMAÇÃO DE ENDEREÇO / CUMPRIMENTO DE DESPACHO / PEDIDO DE VISTA]. Motivo: [RESUMO EM UMA FRASE].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: o número e a data do despacho ou intimação a que a petição responde, se houver; o documento exato a juntar, se for o caso; quantos dias de prazo adicional e o motivo real, não genérico, para o pedido; e se há urgência que justifique destaque no assunto da petição.
>
> Tarefa: escreva o mínimo necessário para o cartório e o juízo entenderem o pedido sem esforço. Petição de rotina não precisa de fundamentação longa; precisa ser clara e direta no que pede.
>
> Estrutura: endereçamento; uma frase de contexto, o que o processo está aguardando ou o despacho a que se responde; o pedido, em uma frase direta; fundamento legal só se o pedido depender de prazo com base em lei (prorrogação por justo motivo, arts. 139, VI, e 223 do CPC); fechamento.
>
> Formato: meia página, sem numeral romano, pronto para o Word.
>
> Regras fixas: motivo do pedido de prazo tem que ser real e verificável (viagem, outro compromisso processual, volume de documentos), nunca genérico como "força maior" sem dizer qual; dado que falta vira [DEFINIR: …]; prazo com a conta à mostra, e quem lança é o advogado; não invente documento nem data; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confira se o documento a juntar está no formato que o sistema do tribunal aceita. Se pediu prazo, o prazo original continua correndo até o juiz decidir: a dilação só pode ser deferida antes de o prazo vencer (art. 139, parágrafo único, do CPC) e, vencido, o direito de praticar o ato se extingue sem declaração judicial (art. 223). Mantenha a data original no seu controle e só a troque quando o deferimento for publicado.

**Com o Advoclaude instalado:** "faz uma petição pra pedir mais 5 dias de prazo no caso [iniciais], motivo: [X]".

---

## 30. Ação de dissolução parcial de sociedade

**Quando usar:** um sócio quer sair, ser excluído ou apurar seus haveres sem fechar a empresa.

**Tenha em mãos:** o contrato social e suas alterações, o quadro societário atual, o motivo da saída ou exclusão, os documentos contábeis disponíveis.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) societário(a) de [sócio retirante/sócios remanescentes/sociedade] e vai redigir a ação de dissolução parcial de sociedade, com apuração de haveres, conforme os arts. 599 a 609 do CPC. Sociedade: [NOME, TIPO SOCIETÁRIO]. Sócios: [QUEM TEM QUANTO]. Motivo da dissolução parcial: [RETIRADA VOLUNTÁRIA / EXCLUSÃO POR JUSTA CAUSA / MORTE DE SÓCIO / QUEBRA DA AFFECTIO SOCIETATIS].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data-base pretendida para a apuração de haveres (a da retirada, exclusão, resolução ou óbito); se o contrato social prevê critério próprio de avaliação da quota; se já houve notificação de saída ou assembleia de exclusão; os documentos contábeis disponíveis (balanço, balancete); e se a sociedade continua operando durante o processo.
>
> Tarefa: identifique a causa da dissolução parcial no fato narrado (retirada imotivada em sociedade por prazo indeterminado, art. 1.029 do CC; exclusão por justa causa, arts. 1.030 ou 1.085; morte, art. 1.028) e peça a apuração de haveres pelo critério do contrato social, ou, na falta dele, pelo valor patrimonial apurado em balanço de determinação na data-base (art. 606 do CPC).
>
> Estrutura:
> 1. Endereçamento e qualificação de todas as partes e da sociedade.
> 2. Fatos: constituição da sociedade, quadro societário, o evento que gera a dissolução parcial.
> 3. Fundamento da dissolução parcial, o artigo que se aplica ao caso.
> 4. Pedido de reconhecimento da dissolução parcial, com a data-base.
> 5. Pedido de apuração de haveres, com o critério (contratual ou balanço de determinação) e requerimento de perícia contábil, se necessário.
> 6. Pedido de forma de pagamento, conforme o contrato social ou, na falta, nos moldes do art. 1.031, § 2º, do CC.
> 7. Valor da causa e pedidos finais.
>
> Formato: cláusulas numeradas, pronto para o Word.
>
> Regras fixas: o critério de apuração de haveres segue primeiro o contrato social; dado que falta vira [DEFINIR: …]; julgado só com link aberto, senão [INSERIR JULGADO: tema]; não invente valor de quota, data nem documento contábil; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confira o contrato social por inteiro antes de protocolar: cláusula de critério de apuração de haveres prevalece sobre a regra legal supletiva. Reúna os documentos contábeis mais recentes para instruir o pedido de perícia. Avalie com o cliente se cabe liminar de afastamento de sócio administrador, no caso de exclusão por justa causa.

**Com o Advoclaude instalado:** "faz a ação de dissolução parcial da sociedade [X], o cliente é o sócio que está saindo".

---

## 31. Inventário e arrolamento

**Quando usar:** faleceu uma pessoa e é preciso partilhar os bens entre os herdeiros, judicial ou extrajudicialmente.

**Tenha em mãos:** a certidão de óbito, a relação de bens e dívidas, a certidão de casamento ou união estável do falecido, os documentos dos herdeiros, o testamento, se houver.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) sucessório(a) de [herdeiro/inventariante/cônjuge supérstite] e vai redigir [a petição inicial de inventário judicial / o requerimento de arrolamento sumário / a minuta para escritura pública de inventário extrajudicial]. Falecido: [INICIAIS]. Data do óbito: [DATA]. Herdeiros: [QUEM, POR INICIAIS, E O GRAU DE PARENTESCO]. Bens: [RESUMO]. Testamento: [HÁ OU NÃO HÁ].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: se todos os herdeiros são maiores, capazes e concordam com a partilha, requisito do inventário extrajudicial (art. 610, § 1º, do CPC); se há testamento, e se já foi aberto; o regime de bens do casamento ou união estável do falecido; a relação completa de bens, dívidas e valores; e se algum herdeiro mora fora da comarca ou está em local incerto.
>
> Tarefa: se o caso reunir os requisitos do inventário extrajudicial (herdeiros capazes e concordes; com testamento, desde que aberto e registrado em juízo com autorização judicial expressa para a partilha extrajudicial; com herdeiro menor ou incapaz, desde que o quinhão dele seja pago em partes ideais sobre todos os bens e o Ministério Público se manifeste favoravelmente: Resolução CNJ 35/2007 com a redação da Resolução 571/2024), oriente a via do tabelionato e redija a minuta para a escritura; se faltar algum requisito, redija a petição inicial do inventário judicial, indicando se cabe arrolamento sumário quando os herdeiros são concordes com a partilha amigável (arts. 659 a 663 do CPC).
>
> Estrutura, para o inventário judicial:
> 1. Endereçamento e qualificação de todas as partes.
> 2. Fatos: óbito, data, herdeiros, regime de bens.
> 3. Indicação do inventariante proposto.
> 4. Relação preliminar de bens e dívidas.
> 5. Requerimento de abertura, nomeação do inventariante, citação dos demais herdeiros.
> 6. Pedido de prazo para as primeiras declarações.
>
> Para a minuta de escritura extrajudicial: qualificação completa de todas as partes; descrição do falecido, do óbito e do regime de bens; relação de bens com matrícula ou documento de cada um; partilha com o quinhão de cada herdeiro; declaração de inexistência de testamento e de que todos são capazes e concordes; recolhimento do imposto de transmissão como condição do ato.
>
> Formato: pronto para o Word (inventário judicial) ou para conferência do tabelião (minuta extrajudicial).
>
> Regras fixas: a via extrajudicial só se todos os requisitos legais estiverem confirmados: sem confirmação, trate como judicial e avise o motivo; prazo de abertura do inventário é de 2 meses do óbito (art. 611 do CPC), com a conta à mostra; dado que falta vira [DEFINIR: …]; julgado só com link aberto, senão [INSERIR JULGADO: tema]; não invente bem, valor nem documento; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confirme com o tabelião da sua praça os documentos exigidos para a escritura, porque variam por estado. Verifique o prazo de recolhimento do ITCMD na legislação estadual antes de protocolar. Se houver herdeiro menor, incapaz ou testamento, a escritura ainda é possível nas condições da Resolução CNJ 571/2024; confirme com o tabelião da sua praça antes de escolher a via.

**Com o Advoclaude instalado:** "abre o inventário do falecido [iniciais], herdeiros: [lista], bens: [resumo]".

---

## 32. Ação anulatória de débito fiscal

**Quando usar:** o cliente foi autuado ou tem uma certidão de dívida ativa que considera indevida e quer anular o débito, com ou sem execução fiscal em curso.

**Tenha em mãos:** o auto de infração ou a CDA, o processo administrativo fiscal, se houve, as provas de que o débito está errado.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) tributarista de [contribuinte] e vai redigir a ação anulatória de débito fiscal contra [UNIÃO / ESTADO / MUNICÍPIO]. Débito: [TRIBUTO, NÚMERO DO AUTO OU DA CDA, VALOR]. Motivo da nulidade: [ERRO NA BASE DE CÁLCULO / PRESCRIÇÃO / ISENÇÃO NÃO CONSIDERADA / VÍCIO FORMAL NO LANÇAMENTO]. Execução fiscal em curso: [SIM/NÃO, NÚMERO SE HOUVER].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: se o débito já foi discutido na esfera administrativa, e o resultado; se há execução fiscal ajuizada, e se o cliente quer garantir o juízo para suspender a exigibilidade (depósito do montante integral ou outra hipótese do art. 151 do CTN); as provas concretas do erro (documentos contábeis, guias pagas, decisão de isenção); e se o cliente precisa de certidão de regularidade fiscal no curto prazo.
>
> Tarefa: a ação anulatória, pela Lei 6.830/1980 (art. 38), pode ser proposta mesmo com execução fiscal em curso e sem depósito prévio (o depósito preparatório que o art. 38 menciona não é condição da ação: Súmula Vinculante 28 do STF), mas só suspende a exigibilidade do crédito com depósito do montante integral (art. 151, II, do CTN) ou outra hipótese do art. 151; sem isso, a execução segue, mas só suspende a exigibilidade do crédito com depósito do montante integral ou outra hipótese do art. 151 do CTN: sem isso, a execução segue. Avise essa diferença com clareza antes de montar a estratégia. Baseie a nulidade no vício concreto, formal, material ou prescricional, nunca em alegação genérica de "cobrança indevida".
>
> Estrutura:
> 1. Endereçamento e qualificação.
> 2. Fatos: o lançamento ou a inscrição em dívida ativa, com número e valor.
> 3. Do vício apontado, com a prova de cada afirmação.
> 4. Da prescrição, se for o caso, com a conta do prazo à mostra (em regra 5 anos, art. 174 do CTN, a partir da constituição definitiva do crédito).
> 5. Do pedido de suspensão da exigibilidade, se houver depósito ou outra garantia.
> 6. Pedidos: anulação do débito, extinção da execução fiscal, se houver, por conexão ou prejudicialidade, condenação em honorários.
>
> Formato: cláusulas numeradas, pronto para o Word.
>
> Regras fixas: nunca afirme que o depósito judicial é automático só pelo ajuizamento da anulatória: é preciso requerê-lo e efetivá-lo; dado que falta vira [DEFINIR: …]; julgado só com link aberto, senão [INSERIR JULGADO: tema]; prazo de prescrição com a conta à mostra, e quem confirma o termo inicial é o advogado; não invente valor, data nem documento fiscal; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confirme o termo inicial da prescrição contra a data de constituição definitiva do crédito no processo administrativo. Avalie com o cliente o custo do depósito judicial frente ao risco de seguir sem garantia. Verifique se a execução fiscal já tem penhora, o que muda a estratégia de garantia do juízo.

**Com o Advoclaude instalado:** "faz a anulatória do débito fiscal [número do auto ou CDA], motivo: [X]".

---

## 33. Resposta à acusação (penal)

**Quando usar:** o cliente foi denunciado em ação penal e o juiz determinou a resposta à acusação antes de decidir se recebe a denúncia ou absolve sumariamente.

**Tenha em mãos:** a denúncia completa, o inquérito policial, os documentos e testemunhas que a defesa quer apresentar.

**Prompt (copie e cole no Claude):**

> Você é advogado(a) criminal de [réu, iniciais] e vai redigir a resposta à acusação no processo [NÚMERO], [VARA CRIMINAL]. Denúncia: [RESUMO DA IMPUTAÇÃO E DO TIPO PENAL]. Tese de defesa: [NEGATIVA DE AUTORIA / EXCLUDENTE / ATIPICIDADE / NULIDADE PROCESSUAL].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data da citação; se há alguma nulidade no inquérito ou na denúncia a arguir preliminarmente; as provas que a defesa quer produzir e o rol de testemunhas, com o número que a lei permite para o rito; se o réu está preso ou solto; e os documentos que já estão nos autos e os que a defesa quer juntar agora.
>
> Tarefa: siga o conteúdo do art. 396-A do CPP: preliminares, exceções, tudo que interesse à defesa, documentos, especificação de provas e rol de testemunhas, com qualificação e, se necessário, endereço para intimação. Se o caso comportar absolvição sumária (art. 397 do CPP: atipicidade manifesta, excludente de ilicitude ou de culpabilidade evidente, extinção da punibilidade), peça-a expressamente antes do mérito aprofundado.
>
> Estrutura:
> 1. Endereçamento e qualificação.
> 2. Tempestividade.
> 3. Preliminares (nulidades do inquérito, da denúncia ou da citação, se houver).
> 4. Pedido de absolvição sumária, se cabível, com o fundamento específico do art. 397.
> 5. Defesa de mérito, ponto por ponto da imputação.
> 6. Especificação de provas e rol de testemunhas, número compatível com o rito.
> 7. Pedido final.
>
> Formato: cláusulas numeradas, pronto para o Word.
>
> Regras fixas: nunca peça absolvição sumária sem o fundamento específico do art. 397 encaixado no fato; julgado só com link aberto, senão [INSERIR JULGADO: tema]; prazo com a conta à mostra, e quem lança é o advogado; dado que falta vira [DEFINIR: …]; não invente fato, prova nem depoimento do inquérito; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confira o rol de testemunhas contra o limite do rito (comum ou sumário) antes de protocolar. Releia a denúncia e o inquérito mais uma vez em busca de nulidade que a correria da primeira leitura deixou passar. Converse com o réu sobre a tese de defesa antes de fechar o texto: ele vive o fato, você escreve a estratégia.

**Com o Advoclaude instalado:** "faz a resposta à acusação do caso [iniciais], tese: [X]" (anexe a denúncia).

---

## 34. Pedido de liberdade provisória ou relaxamento de prisão

**Quando usar:** o cliente foi preso em flagrante ou está preso preventivamente e há fundamento para soltura, com ou sem medida cautelar diversa.

**Tenha em mãos:** o auto de prisão em flagrante ou a decisão que decretou a preventiva, a ata da audiência de custódia, se houve, e a situação pessoal do cliente (trabalho, residência fixa, antecedentes).

**Prompt (copie e cole no Claude):**

> Você é advogado(a) criminal de [réu, iniciais], preso [EM FLAGRANTE / PREVENTIVAMENTE] desde [DATA], processo [NÚMERO], [VARA CRIMINAL]. Imputação: [RESUMO]. Fundamento da prisão, segundo a decisão: [GARANTIA DA ORDEM PÚBLICA / CONVENIÊNCIA DA INSTRUÇÃO / APLICAÇÃO DA LEI PENAL / OUTRO]. Pedido: [LIBERDADE PROVISÓRIA / RELAXAMENTO POR ILEGALIDADE / REVOGAÇÃO DA PREVENTIVA / SUBSTITUIÇÃO POR MEDIDA CAUTELAR].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: se a prisão foi comunicada e a audiência de custódia já ocorreu, com o resultado; se há vício na prisão (falta de nota de culpa, excesso de prazo, prisão sem flagrante válido) que justifique relaxamento em vez de liberdade provisória; a situação pessoal do cliente (endereço fixo, trabalho, antecedentes, vínculos familiares) para sustentar que a soltura não traz risco; e se o Ministério Público já se manifestou sobre a prisão.
>
> Tarefa: identifique primeiro se o caso é de relaxamento (prisão ilegal desde a origem, art. 5º, LXV, da Constituição, e art. 648 do CPP) ou de liberdade provisória/revogação da preventiva (prisão legal na origem, mas sem os requisitos do art. 312 do CPP, com as mudanças da Lei 15.272/2025 nesse artigo [conferir a redação na fonte], ou substituível por medida cautelar diversa do art. 319). Se a prisão vier de conversão do flagrante, rebata uma a uma as circunstâncias que o art. 310 do CPP, com a redação da Lei 15.272/2025, manda o juiz examinar. A audiência de custódia é hoje, em regra, por videoconferência, em até 24 horas, com entrevista prévia reservada com o defensor (Lei 15.358/2026). Rebata o fundamento concreto da decisão que mantém a prisão, ponto por ponto, com a situação pessoal do cliente como contraponto ao risco alegado.
>
> Estrutura:
> 1. Endereçamento e qualificação.
> 2. Síntese da prisão: data, tipo, fundamento da decisão.
> 3. Se for o caso, a ilegalidade que justifica o relaxamento, com o vício apontado.
> 4. Se for o caso, a ausência ou a superação dos requisitos do art. 312 do CPP, ponto por ponto.
> 5. Situação pessoal do cliente, com documentos de apoio (comprovante de endereço, de trabalho, certidão de antecedentes).
> 6. Pedido alternativo de medida cautelar diversa da prisão (art. 319 do CPP), se a soltura pura não for deferida.
> 7. Pedido final.
>
> Formato: direto, sem rodeio, pronto para peticionamento urgente.
>
> Regras fixas: nunca minimize a gravidade do fato para construir o pedido: argumente pela ausência dos requisitos legais da prisão, não pela leveza do crime; julgado só com link aberto, senão [INSERIR JULGADO: tema]; prazo e contagem de excesso de prazo com a conta à mostra; dado que falta vira [DEFINIR: …]; não invente fato, documento nem data; nada de "data venia" nem juridiquês de enfeite.

**Depois do resultado:** confirme a data exata da prisão e da audiência de custódia antes de protocolar: excesso de prazo se conta em dias corridos desde o fato gerador. Reúna os documentos de vínculo (endereço, trabalho, família) que sustentam a tese de que o cliente não foge nem atrapalha a instrução. Se o pedido for de urgência, avalie com o cliente a via do habeas corpus em paralelo, se a demora do juízo de origem for incompatível com a urgência do caso.

**Com o Advoclaude instalado:** "pede a liberdade provisória do caso [iniciais], preso desde [data], fundamento da prisão: [X]".
