# Módulo 03 · Estratégia, análise de caso e audiência · 12 prompts

A ordem que rende: triagem (01), ficha (02) e linha do tempo (03); daí em diante, o que a fase do processo pedir.
Estes prompts são de uso interno: o que sai serve para você decidir, não para mandar ao cliente sem ler.
Uma conversa por caso. Faça primeiro a ficha (prompt 02) e cole a ficha nos outros, em vez dos autos inteiros.
Troque nomes por iniciais e não suba processo em segredo de justiça para uma conta individual.
O Claude pergunta o que faltar numa mensagem só; o que ele não souber fica marcado, não inventado.
Prazo que ele indicar vem com a conta à mostra: quem confere e lança na agenda é você.
Antes do primeiro prompt: no Claude, abra Configurações › Privacidade e desligue a opção que usa as suas conversas pra melhorar o modelo. Nas contas Free, Para o e Max, com ela ligada, a conversa pode treinar o modelo e fica guardada por até cinco anos. Sem isso desligado, nenhum documento de cliente sobe.

---

## 01. Triagem de caso novo: vale a pena pegar?

**Quando usar:** alguém trouxe um problema e você precisa decidir, antes de assinar contrato de honorários, se o caso tem caminho.

**Tenha em mãos:** o relato do cliente (texto, áudio transcrito ou mensagens), os documentos que ele já mandou e o que ele espera conseguir.

**Prompt (copie e cole no Claude):**

> Você é advogado sênior e vai fazer a triagem de um caso novo para eu decidir se aceito. Área: [qual]. Quem me procurou: [iniciais]. Relato: [cole o que ele contou ou mandou]. Documentos que ele já tem: [lista]. O que ele quer: [resultado esperado].
>
> Antes de analisar, pergunte numa mensagem só o que faltar: a data do fato principal e a data em que o cliente soube dele; contra quem seria a ação e se essa pessoa ou empresa tem como pagar; se já houve processo, acordo ou reclamação sobre o mesmo fato; se o cliente pode pagar custas ou vai pedir gratuidade.
>
> Analise nesta ordem: prescrição e decadência, com a conta à mostra e o dispositivo [conferir]; legitimidade e contra quem; juízo e rito possíveis (juizado ou vara comum); o que precisa ser provado e o que os documentos já provam; o que falta pedir ao cliente; custo de entrar (custas, perícia, sucumbência se perder, tempo); urgência que pediria tutela; conflito de interesse que eu deva checar. Feche com um sinal: seguir, seguir com condição (diga qual) ou não seguir, e o motivo em duas linhas. Não use porcentagem de chance e não escreva nada que soe como promessa ao cliente.
>
> Formato: quadro de uma página, em tópicos curtos, e no fim a lista de documentos para pedir ao cliente.
>
> Regras fixas: se o caso envolver contrato de consumo, leia as cláusulas discutidas contra o art. 51 do CDC; dado pessoal de cliente, testemunha ou terceiro aparece só por iniciais (LGPD e sigilo); dado que falta vira [DEFINIR: o quê]; julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; nunca escreva que algo "está de acordo com a lei"; nada de "data venia", "ab initio", "in casu"; não invente fato, data nem documento.

**Depois do resultado:** refaça você mesmo a conta da prescrição: é o item que mata o caso e o que mais sai errado quando a data do fato é ambígua. Faça a checagem de conflito no seu cadastro. A decisão de aceitar é sua.

**Com o Advoclaude instalado:** "vale a pena atender esse caso? [cole o relato]"

---

## 02. Ficha do caso a partir dos autos

**Quando usar:** você pegou um processo (novo ou herdado) e quer resumi-lo uma vez, para não ler nem colar os autos inteiros a cada tarefa.

**Tenha em mãos:** o PDF dos autos ou as peças principais e o que o cliente contou fora do processo.

**Prompt (copie e cole no Claude):**

> Você é advogado e vai transformar os autos anexos (nomes trocados por iniciais; CPF, endereço, laudos e dados de saúde tarjados; processo em segredo de justiça não entra) numa ficha do caso de no máximo duas páginas, para eu usar daqui em diante no lugar do processo inteiro. Processo: [número]. Meu cliente é [autor, réu ou terceiro]. Fase atual: [qual].
>
> Antes de montar, pergunte numa mensagem só o que faltar: se os autos estão completos ou são só uma parte; se há algo que o cliente me contou e não está nos autos (vai em bloco separado, como "informado pelo cliente"); qual a próxima providência que tenho em vista.
>
> Monte nesta ordem: identificação (número, juízo, rito, valor da causa, partes por iniciais, advogados); pedidos do autor, um por linha; causa de pedir em cinco linhas; defesa, preliminares primeiro; decisões já proferidas, com data e folha; provas produzidas e pendentes; pontos controvertidos, se o juiz já fixou; prazos em aberto com a conta à mostra; o que falta nos autos; próxima providência. Toda afirmação leva a folha ou o ID do documento entre parênteses. O que não estiver nos autos não entra como fato. Onde a leitura for incerta (folha ilegível, documento citado e não juntado), escreva [conferir fl. X].
>
> Formato: títulos curtos, frases curtas, sem transcrever trechos longos.
>
> Regras fixas: se o caso envolver contrato de consumo, leia as cláusulas discutidas contra o art. 51 do CDC; dado pessoal de cliente, testemunha ou terceiro aparece só por iniciais (LGPD e sigilo); dado que falta vira [DEFINIR: o quê]; julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; nunca escreva que algo "está de acordo com a lei"; nada de "data venia", "ab initio", "in casu"; não invente fato, data nem documento.

**Depois do resultado:** confira as folhas de três ou quatro itens por amostragem; se uma estiver errada, revise todas. Confira os prazos na sua agenda, não na ficha. Atualize a ficha a cada movimento relevante do processo.

**Com o Advoclaude instalado:** "lê esse processo do cliente [iniciais]" (com o PDF anexado)

---

## 03. Linha do tempo dos fatos, com a folha de cada um

**Quando usar:** o caso tem muitas datas e você precisa enxergar a ordem dos fatos para a peça, a prescrição ou a audiência.

**Tenha em mãos:** os autos ou os documentos do cliente (contratos, e-mails, mensagens, notas) e as datas que ele informou de memória.

**Prompt (copie e cole no Claude):**

> Você é advogado e vai montar a linha do tempo do caso a partir dos documentos anexos. Processo: [número ou "ainda não ajuizado"]. Meu cliente é [parte]. Para que vou usar: [inicial, contestação, prescrição, audiência, recurso].
>
> Antes de montar, pergunte numa mensagem só o que faltar: se devo incluir os atos do processo ou só os fatos da vida; quais datas o cliente informou de memória e ainda não têm documento; se há algum fato que eu já considero o marco da prescrição ou de um prazo.
>
> Monte a tabela Data | Fato | Quem | Fonte, em ordem cronológica, com a fonte sempre indicada (folha, ID, evento, nome do arquivo ou "relato do cliente"). Marque cada linha como fato da vida ou ato do processo. Data incerta vira "aprox." com a razão; data que falta vira [DEFINIR: data de quê]. Depois da tabela, liste: contradições de data entre os documentos ou entre as versões das partes; lacunas que a outra parte pode explorar; datas que contam prazo, com o prazo que corre de cada uma e o dispositivo [conferir]. Não deduza uma data a partir de outra sem dizer que deduziu.
>
> Formato: tabela primeiro, listas depois, nada de narrativa corrida.
>
> Regras fixas: se o caso envolver contrato de consumo, leia as cláusulas discutidas contra o art. 51 do CDC; dado pessoal de cliente, testemunha ou terceiro aparece só por iniciais (LGPD e sigilo); dado que falta vira [DEFINIR: o quê]; julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; nunca escreva que algo "está de acordo com a lei"; nada de "data venia", "ab initio", "in casu"; não invente fato, data nem documento.

**Depois do resultado:** confira no documento original as datas que contam prazo, não na tabela. Leia a lista de contradições: é dali que saem as perguntas da audiência. O que está como "relato do cliente" precisa de prova antes de virar fato na peça.

**Com o Advoclaude instalado:** "faz a linha do tempo do caso [X], com a folha de cada evento"

---

## 04. Teses da parte adversária e como rebater

**Quando usar:** chegou a contestação, a inicial ou o recurso da outra parte e você precisa saber onde ela é forte, onde é fraca e o que responder.

**Tenha em mãos:** a peça da outra parte, a sua peça anterior no processo e os documentos do cliente ainda não juntados.

**Prompt (copie e cole no Claude):**

> Você é advogado e vai mapear as teses da parte contrária e como rebatê-las. Processo: [número]. Meu cliente é [parte]. Peça da outra parte: [contestação, inicial ou recurso, anexa]. Meu próximo passo: [réplica, contrarrazões, audiência, memoriais].
>
> Antes de analisar, pergunte numa mensagem só o que faltar: a nossa peça anterior, para eu não contradizer o que já sustentei; os documentos que o cliente tem e ainda não foram juntados; se o juiz já decidiu algum ponto (tutela, saneamento).
>
> Liste cada tese da outra parte na ordem em que o juiz vai enfrentá-las: preliminares, prejudiciais (prescrição, decadência), mérito, pedidos subsidiários. Para cada uma: o que ela diz, em uma linha e com a folha; a força dela (forte, média, fraca) e por quê, sem desmerecer o que é bom; onde ela é fraca (fato sem prova, documento que contradiz, lei mal aplicada, pedido que não decorre da causa de pedir); como rebater, com o fato, o documento e o dispositivo [conferir]. Depois, liste as teses que a outra parte ainda não usou e pode usar, e as que dependem de prova que só se faz em audiência ou perícia. Se uma tese da outra parte for boa, diga com franqueza.
>
> Formato: uma tabela por grupo de teses e uma lista final de providências.
>
> Regras fixas: se o caso envolver contrato de consumo, leia as cláusulas discutidas contra o art. 51 do CDC; dado pessoal de cliente, testemunha ou terceiro aparece só por iniciais (LGPD e sigilo); dado que falta vira [DEFINIR: o quê]; julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; nunca escreva que algo "está de acordo com a lei"; nada de "data venia", "ab initio", "in casu"; não invente fato, data nem documento.

**Depois do resultado:** confira as folhas das teses e releia a peça adversária nos pontos marcados como fracos. Veja se o rebate não contradiz o que você já sustentou no processo. Julgado marcado precisa ser buscado e aberto antes de entrar na peça.

**Com o Advoclaude instalado:** "quais as teses da contestação do caso [X] e como eu rebato?"

---

## 05. Análise de risco em três cenários, sem porcentagem

**Quando usar:** você precisa decidir (ou explicar ao cliente) se vale seguir, recorrer, fazer acordo ou provisionar, com base no que o processo mostra.

**Tenha em mãos:** a ficha do caso, os pedidos e valores em discussão, as provas produzidas e as decisões já tomadas.

**Prompt (copie e cole no Claude):**

> Você é advogado sênior e vai fazer a análise de risco do caso, para uso interno, em três cenários e sem porcentagem. Processo: [número ou ficha]. Meu cliente é [parte]. Fase: [qual]. Rito: [comum, Fazenda Pública, juizado ou trabalhista]. Pergunta que preciso responder: [seguir, recorrer, fazer acordo, provisionar].
>
> Antes de analisar, pergunte numa mensagem só o que faltar: o valor em discussão e os pedidos; as provas já produzidas e as pendentes; as decisões já tomadas no processo; se o cliente é empresa que precisa classificar o risco no balanço; quanto custa seguir até o fim (honorários, perícia, tempo).
>
> Monte três cenários: favorável, intermediário e desfavorável. Para cada um: o que precisa acontecer para ele se confirmar (qual prova, qual entendimento do juiz); o resultado em dinheiro e em obrigação, com a conta à mostra (principal, correção, juros, honorários de sucumbência conforme o rito: no procedimento comum, 10% a 20% (art. 85, § 2º, do CPC); contra a Fazenda Pública, as faixas do art. 85, § 3º; no trabalho, 5% a 15% (art. 791-A da CLT); no juizado, só se houver recurso, 10% a 20% (art. 55 da Lei 9.099/1995); tudo marcado [conferir], custas); quanto tempo leva. Depois: os três pontos que mais mexem no resultado; o que dá para fazer agora para fortalecer o cenário favorável; o que faria a análise mudar. Chance só em palavras (provável, possível, remota), com o critério explicado; para empresa, é a mesma classificação que o contador usa. Não prometa resultado.
>
> Formato: quadro dos três cenários lado a lado, depois tópicos.
>
> Regras fixas: se o caso envolver contrato de consumo, leia as cláusulas discutidas contra o art. 51 do CDC; dado pessoal de cliente, testemunha ou terceiro aparece só por iniciais (LGPD e sigilo); dado que falta vira [DEFINIR: o quê]; julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; nunca escreva que algo "está de acordo com a lei"; nada de "data venia", "ab initio", "in casu"; não invente fato, data nem documento.

**Depois do resultado:** confira as premissas de cada cenário: análise de risco errada quase sempre começa num fato tomado como provado que não está. Refaça as contas com o índice e os juros que o seu tribunal aplica. Nada daqui vai ao cliente sem a sua leitura.

**Com o Advoclaude instalado:** "quais as chances no caso [X]? vale seguir ou fazer acordo?"

---

## 06. Estratégia de acordo: quando, quanto e como propor

**Quando usar:** o cliente topa negociar e você quer chegar à mesa com momento, faixa de valor e roteiro definidos.

**Tenha em mãos:** a ficha do caso, a análise de risco (prompt 05), o limite que o cliente autorizou e as propostas já trocadas.

**Prompt (copie e cole no Claude):**

> Você é advogado negociador e vai montar a estratégia de acordo do caso. Processo: [número ou ficha]. Meu cliente é [parte]. Limite que ele aceita: [valor ou condição]. Fase: [qual]. Postura da outra parte até agora: [resumo].
>
> Antes de montar, pergunte numa mensagem só o que faltar: o que o cliente valoriza além do dinheiro (prazo, sigilo, retratação, manter a relação); se já houve proposta e de quanto; quanto custa seguir até a sentença e até o recurso.
>
> Responda em três blocos. Quando: o melhor momento processual e por quê (antes da contestação, na audiência, depois da perícia, depois da sentença). Quanto: a faixa, do valor de abertura ao limite, com a conta que a sustenta (risco, custo de seguir, tempo, honorários) e os pontos que dá para ceder sem custo. Como: quem propõe primeiro, por escrito ou na audiência, frase de abertura, resposta às três objeções mais prováveis. Feche com o que o termo precisa ter: valor, forma e datas, multa por atraso, quitação limitada ao objeto da ação, custas e honorários, obrigação de fazer com prazo e, quando o cliente for o réu, a ressalva de que o acordo não reconhece culpa. Se o caso for trabalhista ou de família, marque [conferir] no que o termo exige a mais. Não prometa que a outra parte vai aceitar.
>
> Formato: tópicos curtos e uma minuta de proposta de no máximo dez linhas.
>
> Regras fixas: se o caso envolver contrato de consumo, leia as cláusulas discutidas contra o art. 51 do CDC; dado pessoal de cliente, testemunha ou terceiro aparece só por iniciais (LGPD e sigilo); dado que falta vira [DEFINIR: o quê]; julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; nunca escreva que algo "está de acordo com a lei"; nada de "data venia", "ab initio", "in casu"; não invente fato, data nem documento.

**Depois do resultado:** confirme o limite com o cliente por escrito antes da negociação, não durante. Veja se a quitação da minuta não alcança mais do que a ação. Refaça a conta da faixa com os números do processo.

**Com o Advoclaude instalado:** "monta a estratégia de acordo do caso [X]: o cliente aceita a partir de [valor]"

---

## 07. Roteiro de audiência de conciliação

**Quando usar:** a audiência de conciliação está marcada e você quer chegar com proposta, limites e conferência do termo prontos.

**Tenha em mãos:** a ficha do caso, o limite de acordo autorizado pelo cliente e a intimação com data, hora e forma da audiência.

**Prompt (copie e cole no Claude):**

> Você é advogado e vai preparar o roteiro da audiência de conciliação. Processo: [número ou ficha]. Rito: [procedimento comum, art. 334 do CPC, ou juizado especial]. Meu cliente é [parte]. Limite de acordo autorizado: [valor e condições]. Data e forma: [presencial ou por vídeo].
>
> Antes de montar, pergunte numa mensagem só o que faltar: quem vai comparecer (o cliente, preposto com carta, representante com poder de transigir); se já houve proposta antes; o que o cliente não aceita de jeito nenhum; se a outra parte tem advogado.
>
> Monte: o que o cliente e eu precisamos ter em mãos; a consequência da ausência (no art. 334, multa de até 2%; no juizado, extinção se o autor faltar e revelia se o réu faltar, arts. 20 e 51, I, da Lei 9.099/1995); abertura em três frases, sem reconhecer culpa; faixa de proposta e ordem das concessões; respostas às objeções prováveis; frases que o cliente não deve dizer; a lista que se confere no termo antes de assinar (valor, forma, datas, multa, quitação, custas, honorários). Se não houver acordo, diga o que corre a partir daí (no procedimento comum, o prazo de contestação, art. 335, I, do CPC). Não prometa acordo ao cliente.
>
> Formato: uma página, em tópicos, para ler no celular dez minutos antes.
>
> Regras fixas: se o caso envolver contrato de consumo, leia as cláusulas discutidas contra o art. 51 do CDC; dado pessoal de cliente, testemunha ou terceiro aparece só por iniciais (LGPD e sigilo); dado que falta vira [DEFINIR: o quê]; julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; nunca escreva que algo "está de acordo com a lei"; nada de "data venia", "ab initio", "in casu"; não invente fato, data nem documento.

**Depois do resultado:** confira os poderes de quem vai comparecer: preposto sem carta ou procuração sem poder de transigir derruba o acordo na hora. Leia o termo inteiro antes de o cliente assinar. Lance na agenda o prazo que abre se não houver acordo.

**Com o Advoclaude instalado:** "tenho audiência de conciliação amanhã no caso [X], limite de [valor]: prepara"

---

## 08. Roteiro de audiência de instrução

**Quando usar:** a instrução está marcada e você quer a audiência organizada ponto controvertido por ponto controvertido, com testemunhas, contradita e razões finais.

**Tenha em mãos:** a ficha do caso, a decisão de saneamento, o rol de testemunhas das duas partes e o laudo, se houver perícia.

**Prompt (copie e cole no Claude):**

> Você é advogado e vai preparar o roteiro da audiência de instrução e julgamento. Processo: [número ou ficha]. Rito: [comum, juizado ou trabalhista]. Meu cliente é [parte]. Testemunhas arroladas: [nossas e da outra parte, por iniciais]. Pontos controvertidos fixados: [cole a decisão de saneamento, se houver].
>
> Antes de montar, pergunte numa mensagem só o que faltar: se haverá depoimento pessoal e de quem; se o perito vai prestar esclarecimentos; quais documentos ainda não estão nos autos; se alguma testemunha da outra parte é parente, amiga íntima, inimiga ou interessada no resultado.
>
> Monte: a ordem dos atos (no procedimento comum, perito, depoimentos pessoais e testemunhas do autor e depois do réu, art. 361 do CPC); para cada ponto controvertido, quem precisa provar e com qual testemunha; o objetivo de cada depoimento em uma linha; a contradita, com o motivo e o momento certo, antes do compromisso (art. 457, § 1º); como pedir que pergunta indeferida conste da ata (art. 459, § 3º); o que fazer se uma testemunha nossa faltar; o esqueleto das razões finais orais, com os três fatos que precisam sair provados (art. 364). No juizado e no trabalho, ajuste ao rito e marque [conferir] o que mudar.
>
> Formato: roteiro em tópicos, na ordem em que a audiência acontece.
>
> Regras fixas: se o caso envolver contrato de consumo, leia as cláusulas discutidas contra o art. 51 do CDC; dado pessoal de cliente, testemunha ou terceiro aparece só por iniciais (LGPD e sigilo); dado que falta vira [DEFINIR: o quê]; julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; nunca escreva que algo "está de acordo com a lei"; nada de "data venia", "ab initio", "in casu"; não invente fato, data nem documento.

**Depois do resultado:** confira a ordem dos atos e o limite de testemunhas pelo rito do seu processo. Tenha a contradita pensada antes, com o motivo e a prova do motivo. Revise as razões finais na véspera, contra o que os documentos de fato provam.

**Com o Advoclaude instalado:** "tenho audiência de instrução amanhã no caso [X]: prepara"

---

## 09. Perguntas para testemunha (a nossa e a deles)

**Quando usar:** você vai ouvir testemunhas e quer perguntas que provem o seu ponto e enfraqueçam o da outra parte, sem induzir resposta.

**Tenha em mãos:** a ficha do caso, os pontos controvertidos, o que cada testemunha viu (segundo o cliente) e os documentos que confirmam ou contradizem cada uma.

**Prompt (copie e cole no Claude):**

> Você é advogado de audiência e vai preparar as perguntas para as testemunhas. Processo: [número ou ficha]. Meu cliente é [parte]. Testemunha nossa: [iniciais e o que ela viu, segundo o cliente]. Testemunha da outra parte: [iniciais e o que se espera que diga]. Pontos controvertidos: [lista].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a relação de cada testemunha com as partes; o que cada uma presenciou e o que só ouviu dizer; os documentos que confirmam ou contradizem o que elas vão falar; se alguma já falou do assunto em boletim, e-mail ou mensagem.
>
> Para a nossa: perguntas abertas, curtas, uma por vez, em ordem cronológica, começando por como ela sabe do fato (onde estava, o que viu, por que lembra) e depois o fato em si; nada que sugira a resposta, porque o juiz indefere (art. 459 do CPC) e a credibilidade cai. Para a da outra parte: perguntas fechadas e curtas, só sobre o que pode enfraquecê-la (de onde tirou a informação, distância, tempo, interesse, contradição com documento), sem nenhuma pergunta cuja resposta eu não saiba; e, se houver motivo, a contradita (art. 447). Para cada pergunta, uma linha com o objetivo. Marque as três perguntas que não podem faltar. Não escreva respostas para a testemunha decorar.
>
> Formato: duas listas numeradas, uma por testemunha.
>
> Regras fixas: se o caso envolver contrato de consumo, leia as cláusulas discutidas contra o art. 51 do CDC; dado pessoal de cliente, testemunha ou terceiro aparece só por iniciais (LGPD e sigilo); dado que falta vira [DEFINIR: o quê]; julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; nunca escreva que algo "está de acordo com a lei"; nada de "data venia", "ab initio", "in casu"; não invente fato, data nem documento.

**Depois do resultado:** leia cada pergunta para a sua testemunha: se ela sugere a resposta, reescreva. Corte das perguntas para a testemunha deles as que você não sabe o que vão trazer. Orientar a testemunha sobre o ato é permitido; dizer o que ela deve responder, não.

**Com o Advoclaude instalado:** "o que eu pergunto pra testemunha [iniciais] no caso [X]?"

---

## 10. Preparação do cliente para o depoimento pessoal

**Quando usar:** o cliente (ou o preposto da empresa) vai depor e precisa entender o ato e onde mora o risco de confissão.

**Tenha em mãos:** a ficha do caso, o que o cliente já declarou por escrito no processo e os pontos em que a versão dele é frágil.

**Prompt (copie e cole no Claude):**

> Você é advogado e vai preparar o meu cliente para o depoimento pessoal. Processo: [número ou ficha]. Quem depõe: [o cliente pessoa física ou o preposto da empresa]. Tipo de audiência: [cível, juizado ou trabalhista]. Data e forma: [presencial ou por vídeo].
>
> Antes de montar, pergunte numa mensagem só o que faltar: o que o cliente já declarou por escrito no processo (inicial, contestação, documento assinado); os pontos em que a versão dele é frágil ou mudou com o tempo; se ele já depôs antes; se for preposto, o que ele sabe dos fatos por conta própria.
>
> Entregue duas partes. A minha, interna: os temas que o juiz e o advogado da outra parte devem perguntar; onde há risco de confissão (art. 389 do CPC) e por quê; onde a fala dele pode contradizer o que já está escrito; o que acontece se ele faltar ou se recusar a responder (art. 385, § 1º). A do cliente, em linguagem simples, falando com ele: o que é o depoimento; ouvir a pergunta inteira e responder só ela; dizer "não sei" ou "não lembro" quando for verdade; não adivinhar data nem número; não discutir com a outra parte; o que levar; como se portar no vídeo. Nunca sugira o conteúdo da resposta: oriente o ato, não a versão. Não prometa resultado.
>
> Formato: a parte do cliente cabe numa tela de celular.
>
> Regras fixas: se o caso envolver contrato de consumo, leia as cláusulas discutidas contra o art. 51 do CDC; dado pessoal de cliente, testemunha ou terceiro aparece só por iniciais (LGPD e sigilo); dado que falta vira [DEFINIR: o quê]; julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; nunca escreva que algo "está de acordo com a lei"; nada de "data venia", "ab initio", "in casu"; não invente fato, data nem documento.

**Depois do resultado:** repasse os pontos de risco de confissão com o cliente numa conversa, não só pelo texto. Leia a parte do cliente antes de mandar: ela sai em seu nome. Se for preposto, confirme que ele conhece os fatos.

**Com o Advoclaude instalado:** "prepara o cliente [iniciais] para o depoimento pessoal no caso [X]"

---

## 11. Checklist do que levar para a audiência

**Quando usar:** na véspera de qualquer audiência, presencial ou por vídeo, para ninguém chegar sem o documento que faz falta.

**Tenha em mãos:** a intimação, a ficha do caso e a lista de quem vai comparecer (cliente, preposto, testemunhas).

**Prompt (copie e cole no Claude):**

> Você é advogado e vai montar o checklist do que levar ou ter aberto na audiência. Processo: [número ou ficha]. Tipo: [conciliação, instrução, una trabalhista ou juizado]. Forma: [presencial ou por vídeo]. Meu cliente é [pessoa física ou empresa].
>
> Antes de montar, pergunte numa mensagem só o que faltar: se a procuração e o substabelecimento estão nos autos; se a empresa vai mandar preposto e quem; quais documentos foram juntados em cópia e podem ser exigidos no original; se há testemunha que comparece levada pela parte, sem intimação; qual o limite de acordo autorizado.
>
> Separe o checklist por quem leva. Eu: carteira da OAB, procuração ou substabelecimento, ficha do caso, cópia das peças principais com as folhas marcadas, cálculo atualizado, limite de acordo autorizado por escrito, roteiro de perguntas. O cliente: documento com foto, originais do que foi juntado, comprovantes. O preposto: carta de preposição e o contrato social ou a procuração que mostra quem assinou a carta. As testemunhas: documento com foto. Para audiência por vídeo, acrescente: link testado na véspera, câmera e áudio, documento mostrado na câmera, local silencioso, testemunha sozinha e sem ouvir os depoimentos anteriores. Marque com [conferir] o que depende do rito ou do juízo.
>
> Formato: caixas de marcar, uma lista por pessoa.
>
> Regras fixas: se o caso envolver contrato de consumo, leia as cláusulas discutidas contra o art. 51 do CDC; dado pessoal de cliente, testemunha ou terceiro aparece só por iniciais (LGPD e sigilo); dado que falta vira [DEFINIR: o quê]; julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; nunca escreva que algo "está de acordo com a lei"; nada de "data venia", "ab initio", "in casu"; não invente fato, data nem documento.

**Depois do resultado:** confira o checklist contra a intimação: algumas varas pedem documento ou antecedência próprios. Mande ao cliente e ao preposto a parte deles com dois dias de folga. Teste o link com o cliente, não só você.

**Com o Advoclaude instalado:** "o que eu e o cliente precisamos levar pra audiência de [tipo] do caso [X]?"

---

## 12. Depois da audiência: o que pedir e quais prazos abrem

**Quando usar:** logo depois da audiência, com a ata na mão, para não perder prazo nem deixar de registrar o que aconteceu.

**Tenha em mãos:** a ata ou o termo da audiência, suas anotações do que não entrou na ata e a ficha do caso.

**Prompt (copie e cole no Claude):**

> Você é advogado e vai organizar o que fazer depois da audiência. Processo: [número ou ficha]. Tipo de audiência: [conciliação, instrução ou una]. Rito: [comum, juizado ou trabalhista]. Meu cliente é [parte]. Ata ou termo: [cole o texto]. O que aconteceu e não está na ata: [resumo].
>
> Antes de analisar, pergunte numa mensagem só o que faltar: a data em que a audiência terminou; se houve sentença em audiência; se pedi algo que foi indeferido; se o processo é eletrônico.
>
> Analise a ata: o que foi decidido, deferido ou indeferido, os protestos registrados e o que deixou de ser registrado e devia (pergunta indeferida, contradita, requerimento). Liste os prazos que abrem, cada um com o marco inicial, a conta em dias úteis à mostra, o dispositivo [conferir] e a providência: contestação depois de conciliação sem acordo (art. 335, I, do CPC); razões finais escritas (art. 364, § 2º); embargos de declaração e recurso, se houve sentença (no juizado, recurso em dez dias, art. 42 da Lei 9.099/1995); cumprimento do acordo homologado, com as datas de pagamento. Depois, o que pedir ao juízo (nova data para testemunha ausente, cópia da gravação, ofício) e o que atualizar na ficha do caso. Feche com três linhas para o cliente sobre o que aconteceu, sem prometer resultado.
>
> Formato: tabela de prazos primeiro, depois as listas.
>
> Regras fixas: se o caso envolver contrato de consumo, leia as cláusulas discutidas contra o art. 51 do CDC; dado pessoal de cliente, testemunha ou terceiro aparece só por iniciais (LGPD e sigilo); dado que falta vira [DEFINIR: o quê]; julgado só com link aberto na página do tribunal, senão [INSERIR JULGADO: tema]; nunca escreva que algo "está de acordo com a lei"; nada de "data venia", "ab initio", "in casu"; não invente fato, data nem documento.

**Depois do resultado:** lance cada prazo na sua agenda pelo marco que o seu tribunal adota, e não pela conta da tabela. Leia a ata contra a sua memória da audiência enquanto ela está fresca. Mande ao cliente as três linhas só depois de ler.

**Com o Advoclaude instalado:** "saiu a ata da audiência do caso [X]: o que eu faço agora e quais prazos abrem?"
