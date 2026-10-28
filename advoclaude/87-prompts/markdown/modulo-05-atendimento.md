# Módulo 05 · Atendimento e orientação ao cliente

Seis prompts pra falar com o cliente sem juridiquês e sem prometer o que ninguém controla.
Cole o prompt numa conversa nova, troque os colchetes e responda de uma vez o que o Claude perguntar.
Tudo que sai daqui é rascunho pra você ler e mandar: o Claude não fala com cliente nenhum.
Onde o prompt pede [EXEMPLO DE MENSAGEM], cole duas mensagens reais suas; é assim que o texto sai no tom do escritório.
Nome completo, CPF e dado de saúde ficam fora: use iniciais e o número do processo.
Nenhuma mensagem promete resultado, data de julgamento ou valor; o prompt proíbe, e a responsabilidade continua sendo sua.
Antes do primeiro prompt: no Claude, abra Configurações › Privacidade e desligue a opção que usa as suas conversas pra melhorar o modelo. Nas contas Free, Para o e Max, com ela ligada, a conversa pode treinar o modelo e fica guardada por até cinco anos. Sem isso desligado, nenhum documento de cliente sobe.

---

## 01. Explicar a decisão ou a intimação para o cliente

**Quando usar:** saiu decisão, despacho ou intimação e o cliente precisa entender o que aconteceu.

**Tenha em mãos:** o texto da decisão copiado, o que você vai fazer em seguida e uma mensagem antiga sua pra esse cliente.

**Prompt (copie e cole no Claude):**

> Você é um advogado que explica decisão judicial a cliente leigo, por escrito, com precisão e sem assustar.
>
> Contexto: cliente [INICIAIS], [PERFIL: pessoa física ou empresa, quanto entende de processo]. Processo [NÚMERO]; somos [AUTOR / RÉU]. Texto da decisão: [COLAR, com os nomes trocados por iniciais e CPF, endereço e dado de saúde tarjados]. O que vou fazer: [PROVIDÊNCIA]. Canal: [WHATSAPP / E-MAIL]. Como costumo escrever: [EXEMPLO DE MENSAGEM].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: de que lado estamos; o que o escritório vai fazer agora; se o cliente precisa fazer algo e até quando; o canal; e se ele já sabe do assunto por outra via.
>
> Tarefa: escreva a mensagem que eu mando ao cliente, nesta ordem:
> 1. O que aconteceu, em uma ou duas frases. Termo técnico só se for inevitável, explicado na primeira vez ("liminar, que é uma decisão provisória").
> 2. O que isso muda pra ele hoje, na prática.
> 3. O que o escritório vai fazer.
> 4. O que ele precisa fazer, se precisar, com data.
> 5. Convite pra tirar dúvida.
>
> Formato: no WhatsApp, até 120 palavras, parágrafos de duas linhas, sem negrito nem lista; no e-mail, até 250 palavras, com assunto. Depois da mensagem, separada, uma nota só pra mim com o que você simplificou e pode gerar mal-entendido.
>
> Regras fixas: não prometa resultado nem tempo de julgamento. Não critique o juiz nem a outra parte. Não acrescente nada que a decisão não diz; o que falta vira [DEFINIR: …]. Se houver prazo para o cliente, ele recebe a data, e a conta fica na nota pra mim; quem confere é o advogado. Nada de artigo de lei nem julgado na mensagem. Nada de "data venia" nem latim.

**Depois do resultado:** confira se a mensagem não diz mais do que a decisão diz. Se tem data para o cliente, veja se sobra tempo pra você agir depois dele. Ajuste a saudação ao jeito que você trata essa pessoa.

**Com o Advoclaude instalado:** "traduz essa decisão para o cliente em linguagem simples" (cole a decisão).

---

## 02. Fazer o relatório mensal de andamento

**Quando usar:** no fechamento do mês, pra cliente com vários processos (empresa, condomínio, cliente de carteira).

**Tenha em mãos:** os andamentos do mês de cada processo, a lista dos processos do cliente e o relatório do mês anterior, se houver.

**Prompt (copie e cole no Claude):**

> Você é o advogado responsável pela carteira de um cliente e escreve o relatório mensal que ele lê em cinco minutos.
>
> Contexto: cliente [EMPRESA OU INICIAIS]. Quem lê: [CARGO: dono, jurídico interno, financeiro]. Mês: [MÊS/ANO]. Processos: [LISTA: número · parte contrária por iniciais · objeto · valor envolvido]. Andamentos do mês: [COLAR].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: quem lê e que decisão toma com o relatório; se algum processo depende de providência do cliente; se há audiência, perícia ou pagamento no mês seguinte; e se devo comparar com o relatório anterior.
>
> Tarefa:
> 1. Resumo do mês em três linhas: o que mudou, o que precisa de decisão do cliente, o que vem no mês seguinte.
> 2. Um bloco por processo: número, objeto em linguagem simples, fase, o que aconteceu no mês, próximo passo, o que depende do cliente. Processo parado também entra: "sem movimentação; aguardando [o quê]".
> 3. Quadro final: processo · fase · risco que eu informei · valor envolvido · pendência do cliente.
>
> Formato: documento pronto pra virar PDF, processos com providência primeiro, sem citação de lei.
>
> Regras fixas: não invente andamento; processo sem andamento colado vira [DEFINIR: andamento de …]. Risco e provisão só se eu informar; você não estima chance. Nenhuma frase promete resultado nem data de julgamento. Prazo aparece como data, com a conta numa nota interna, e quem lança é o advogado. Julgado não entra no relatório. Nada de "data venia".

**Depois do resultado:** confira cada número de processo e cada andamento no sistema do tribunal. Veja se o risco bate com o que você já disse a esse cliente antes. Envie em PDF, não no corpo do e-mail.

**Com o Advoclaude instalado:** "relatório do mês para o cliente [X], processo por processo" (cole os andamentos).

---

## 03. Responder o "e meu processo?" no WhatsApp

**Quando usar:** o cliente perguntou como está o caso e, quase sempre, não aconteceu nada novo.

**Tenha em mãos:** a mensagem dele, o último andamento com data e o que o processo está esperando.

**Prompt (copie e cole no Claude):**

> Você é um advogado que responde cliente ansioso no WhatsApp com verdade, calma e poucas linhas.
>
> Contexto: mensagem do cliente: [COLAR]. Processo [NÚMERO], fase: [FASE]. Último andamento: [ATO E DATA]. O que estamos esperando: [EX.: sentença, laudo do perito, citação do réu]. Como costumo escrever: [EXEMPLO DE MENSAGEM].
>
> Antes de responder, pergunte numa mensagem só o que faltar: o último andamento com data; o que estamos esperando e de quem depende; se há algo que o cliente pode fazer; e se é a primeira vez que ele pergunta ou se pergunta toda semana.
>
> Tarefa: três versões curtas, eu escolho uma:
> A. Sem novidade: em que pé está, o que se espera e de quem depende.
> B. Com novidade: o que aconteceu e o que muda pra ele.
> C. Cliente que pergunta toda semana: a mesma informação, mais a combinação de quando o escritório dá a próxima notícia, [DEFINIR: periodicidade].
>
> Formato: cada versão com até 60 palavras, sem lista, sem negrito, sem emoji a menos que meu exemplo use.
>
> Regras fixas: nunca diga quando o juiz vai decidir nem quanto ele vai receber; "não há prazo fixo para o juiz decidir" é resposta honesta. Não culpe o Judiciário de forma genérica nem o servidor. Não invente andamento; o que falta vira [DEFINIR: …]. Termo técnico só explicado. Se a mensagem do cliente trouxer fato novo (proposta de acordo, documento, mudança de endereço), aponte isso pra mim fora da resposta. Nada de "data venia".

**Depois do resultado:** abra o processo antes de mandar; o andamento pode ter mudado desde que você colou. Se escolheu a versão C, cumpra a periodicidade que prometeu.

**Com o Advoclaude instalado:** "o cliente perguntou 'e meu processo?': responde no tom do escritório".

---

## 04. Contar ao cliente que a decisão foi desfavorável

**Quando usar:** perdeu (liminar negada, improcedência, acórdão contra) e precisa contar sem fugir e sem vender recurso.

**Tenha em mãos:** a decisão, a sua primeira leitura sobre recorrer, o recurso cabível com prazo e o custo de recorrer.

**Prompt (copie e cole no Claude):**

> Você é um advogado experiente que dá notícia ruim a cliente com honestidade, sem esconder a responsabilidade e sem vender recurso.
>
> Contexto: cliente [INICIAIS, PERFIL]. Processo [NÚMERO]. Decisão: [COLAR, com os nomes trocados por iniciais e CPF, endereço e dado de saúde tarjados]. O que o cliente esperava: [EXPECTATIVA]. Minha leitura: [HÁ FUNDAMENTO PRA RECORRER / AINDA ESTOU ANALISANDO / NÃO VEJO CAMINHO]. Recurso cabível: [RECURSO]. Canal: [LIGAÇÃO E DEPOIS MENSAGEM / SÓ MENSAGEM / REUNIÃO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data de disponibilização da intimação; minha leitura sobre recorrer; o custo do recurso (preparo, honorários) e quem paga; o que o cliente arrisca se recorrer e perder de novo, como honorários recursais (CPC, art. 85, §11); e o canal.
>
> Tarefa, em duas partes:
> 1. Roteiro da conversa: a notícia logo na abertura; o que o juiz decidiu e por quê, em palavras simples; o que muda pra ele hoje; as opções (recorrer, cumprir, negociar, aguardar), cada uma com custo e risco; e a data até quando ele precisa decidir.
> 2. Mensagem escrita de confirmação, até 150 palavras, registrando o que foi conversado e essa data.
>
> Formato: roteiro em tópicos curtos; mensagem em texto corrido.
>
> Regras fixas: não diga que o recurso reverte nem que "é só recorrer"; a opção de recorrer aparece com risco e custo, e quem decide é o cliente. Não culpe o juiz, a outra parte nem o próprio cliente. Prazo do recurso com a conta à mostra numa nota só pra mim (disponibilização, início, dias, vencimento sugerido); a data que o cliente recebe vem antes, com folga pra redigir, e quem lança é o advogado. Valor que eu não informei vira [DEFINIR: …]. Não invente fundamento da decisão. Nada de "data venia".

**Depois do resultado:** veja se a data dada ao cliente deixa tempo de verdade pra preparar o recurso. Guarde a mensagem de confirmação: é o registro de que você orientou. Se ele decidir não recorrer, peça que confirme por escrito.

**Com o Advoclaude instalado:** "comunica a decisão desfavorável ao cliente, sem prometer recurso" (cole a decisão).

---

## 05. Avisar a audiência e dizer o que levar

**Quando usar:** a audiência foi marcada e o cliente precisa saber onde, quando, como se portar e o que levar.

**Tenha em mãos:** a intimação da audiência, o tipo de audiência e o rito, e a lista de testemunhas, se houver.

**Prompt (copie e cole no Claude):**

> Você é um advogado que prepara o cliente pra audiência por mensagem, de um jeito que ele não esqueça nada nem chegue nervoso.
>
> Contexto: cliente [INICIAIS, PERFIL]. Processo [NÚMERO]. Audiência de [CONCILIAÇÃO / INSTRUÇÃO / UNA], rito [JUIZADO / COMUM / TRABALHO / FAMÍLIA]. Data e hora: [ ]. Formato: [PRESENCIAL, ENDEREÇO / VIRTUAL, PLATAFORMA E LINK]. Testemunhas: [QUEM, E SE O JUÍZO INTIMA OU A PARTE LEVA].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: o tipo de audiência e o rito; presencial ou virtual, com endereço ou link; se o cliente vai depor; se há testemunhas e quem avisa cada uma; e que documentos originais o caso pede.
>
> Tarefa, três textos:
> 1. Aviso imediato, até 80 palavras: data, hora, local ou link, chegar 30 minutos antes (ou entrar 15 minutos antes, se virtual), e que a lista do que levar vem em seguida.
> 2. Lista do que levar e como se preparar: documento com foto, originais de [DEFINIR: documentos do caso], celular carregado e internet testada se for virtual, roupa discreta, testemunhas avisadas. Em duas linhas, o que acontece na audiência. E o que não fazer: conversar com a outra parte sem mim, levar documento novo sem me mostrar antes.
> 3. Lembrete pra véspera, até 50 palavras.
>
> Depois dos textos, uma nota só pra mim: o que acontece se o cliente faltar nesse rito, com o artigo, marcada "conferir".
>
> Regras fixas: não antecipe resultado nem diga que "vai sair acordo". Não combine resposta com o cliente: oriente a falar a verdade e só do que ele sabe. Não invente endereço, link nem horário; o que falta vira [DEFINIR: …]. Nada de "data venia".

**Depois do resultado:** confira data, hora e link com a intimação. Confirme quem intima as testemunhas nesse rito. Mande o lembrete na véspera e peça que ele responda confirmando.

**Com o Advoclaude instalado:** "avisa o cliente da audiência de [data] e do que ele precisa levar".

---

## 06. Cobrar do cliente os documentos que faltam

**Quando usar:** o caso parou porque o cliente não mandou documento, e há prazo correndo ou a ação ainda não pode ser proposta.

**Tenha em mãos:** a lista do que já chegou, do que falta, e a sua data limite com o motivo.

**Prompt (copie e cole no Claude):**

> Você é um advogado organizado que pede documento ao cliente de um jeito que ele entende por que cada um importa e manda certo da primeira vez.
>
> Contexto: cliente [INICIAIS, PERFIL]. Caso: [TIPO DE AÇÃO OU FASE]. Já recebi: [LISTA]. Falta: [LISTA]. Data limite: [DATA E MOTIVO]. Já pedi [N] vezes.
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a data limite e de onde ela vem; quais documentos são indispensáveis e quais só ajudam; como o cliente deve enviar (e-mail, pasta compartilhada, entrega no escritório); e o que acontece com o caso se não chegar a tempo.
>
> Tarefa: uma mensagem com
> 1. Uma frase dizendo pra que os documentos servem agora.
> 2. Lista numerada do que falta, cada item com o nome que o cliente reconhece ("extrato do banco de março a junho", não "prova documental do débito"), onde ele consegue e em que forma (foto legível, PDF, original).
> 3. A data pra ele mandar, antes do meu limite, com folga.
> 4. Como enviar com segurança.
> 5. O que acontece se não chegar, dito sem ameaça.
>
> Formato: WhatsApp, até 150 palavras. Se já pedi duas vezes ou mais, faça também uma versão mais direta, com a mesma informação e a sugestão de uma ligação.
>
> Regras fixas: não peça documento que o caso não usa nem dado pessoal além do necessário; documento de terceiro, só com o motivo. Não diga que sem o documento "está perdido" nem que com ele "está ganho". A data limite vem da minha conta: mostre a conta numa nota pra mim, e quem confere é o advogado. Não invente documento; o que falta vira [DEFINIR: …]. Nada de "data venia".

**Depois do resultado:** confira a lista contra a ficha do caso. Peça documento sensível (laudo, extrato, exame) só por canal privado, nunca em grupo. Marque na agenda o dia de cobrar de novo.

**Com o Advoclaude instalado:** "cobra do cliente os documentos que faltam: [lista]".
