# Módulo 06 · Gestão, honorários e autoridade

Dez prompts para o que não é peça mas sustenta o escritório: dinheiro, agenda, organização e presença pública.
Os três primeiros mexem com honorários: o Claude redige, mas valor, percentual e forma de pagamento são decisão sua.
Os de publicação e de semana (04 e 05) precisam do texto do DJEN e da sua lista colados; o Claude não acessa o diário por você.
Os de comunicação pública (07 a 10) seguem o Provimento 205/2021 e o Código de Ética: informam, não captam, não falam de preço, não se dizem os melhores.
Nenhum texto público cita cliente, caso ou resultado; se o rascunho escorregar, peça "confere isso contra o Provimento 205".
Uma conversa por tarefa, e responda numa mensagem só o que o Claude perguntar.
Antes do primeiro prompt: no Claude, abra Configurações › Privacidade e desligue a opção que usa as suas conversas pra melhorar o modelo. Nas contas Free, Para o e Max, com ela ligada, a conversa pode treinar o modelo e fica guardada por até cinco anos. Sem isso desligado, nenhum documento de cliente sobe.

---

## 01. Montar a proposta de honorários do caso

**Quando usar:** depois da primeira reunião, quando o cliente pergunta quanto custa.

**Tenha em mãos:** o resumo do caso, o escopo que você topa assumir, a tabela de honorários da sua seccional e o valor que você tem em mente.

**Prompt (copie e cole no Claude):**

> Você é um advogado que monta proposta de honorários clara, que o cliente entende e que não deixa brecha pra discussão no fim do caso.
>
> Contexto: caso: [RESUMO EM 3 LINHAS, SEM NOMES]. Área e rito: [ ]. O que o cliente quer: [OBJETIVO]. Proveito econômico em jogo: [VALOR OU "NÃO DEFINIDO"]. Seccional: [UF]. Referência da tabela da seccional pra esse serviço: [VALOR]. Complexidade e tempo estimado: [ ].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: o escopo (só primeiro grau ou até os recursos; se inclui audiências e cumprimento de sentença); se ofereço uma modalidade ou as três; o valor da tabela da seccional; quanto o cliente consegue dar de entrada; e quem paga custas, perícia e deslocamento.
>
> Tarefa: proposta com até três opções lado a lado:
> A. Fixo: valor, parcelas, o que está incluído.
> B. Êxito: percentual sobre o proveito econômico, com a base de cálculo escrita (o que conta como êxito, acordo inclusive), sempre em dinheiro e nunca acima do que o cliente recebe.
> C. Misto: entrada fixa menor mais um percentual de êxito.
> Em todas: o que fica fora do escopo e se cobra à parte, despesas, o que é devido se o cliente desistir, revogar a procuração ou fizer acordo direto, e que a sucumbência pertence ao advogado (Estatuto da Advocacia, art. 23).
>
> Formato: uma página, linguagem simples, quadro comparativo, validade da proposta em [DEFINIR: dias].
>
> Regras fixas: valor abaixo da tabela da seccional só com alerta pra mim. Não estime chance de ganhar; "êxito" é condição de pagamento, não previsão, e nenhuma frase promete resultado. Não invente valor de tabela nem dado do caso; o que eu não dei vira [DEFINIR: …]. Nada de "data venia".

**Depois do resultado:** compare cada opção com a tabela da seccional. Faça a conta das três num cenário bom e num ruim pra ver qual protege você. Proposta aceita vira contrato no prompt 02.

**Com o Advoclaude instalado:** "monta a proposta de honorários do caso [X]: fixo, êxito e misto".

---

## 02. Redigir o contrato de honorários

**Quando usar:** o cliente aceitou a proposta e você precisa formalizar antes de começar.

**Tenha em mãos:** a proposta aceita, a qualificação do cliente e do escritório, e como vai ser a assinatura.

**Prompt (copie e cole no Claude):**

> Você é um advogado que redige contrato de honorários que vale como título executivo (Estatuto da Advocacia, art. 24) e evita as brigas mais comuns no fim do caso.
>
> Contexto: contratante: [PESSOA FÍSICA OU JURÍDICA, INICIAIS]. Contratado: [ADVOGADO OU SOCIEDADE, OAB/UF]. Objeto: [AÇÃO E INSTÂNCIAS]. Modalidade e valores aceitos: [DA PROPOSTA]. Forma de pagamento: [ ]. Foro: [CIDADE].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a proposta aceita, colada; se há correspondente ou parceiro que divide honorários; como fica a sucumbência; se a assinatura é eletrônica; e se o cliente é consumidor pessoa física ou empresa.
>
> Tarefa: contrato com estas cláusulas:
> 1. Partes e qualificação.
> 2. Objeto e limites: o que está e o que não está incluído (instâncias, recursos, cumprimento, ações ligadas).
> 3. Honorários contratuais: valor ou percentual, vencimentos, correção, multa e juros por atraso.
> 4. Êxito: o que conta como proveito econômico, acordo inclusive, e quando se paga.
> 5. Sucumbência: do advogado, sem compensar com os contratuais, salvo ajuste diferente.
> 6. Custas e despesas: quem paga e como se presta conta.
> 7. Obrigações do cliente: documentos, informação verdadeira, contato atualizado.
> 8. Revogação, renúncia e desistência: o que é devido em cada caso.
> 9. Sigilo, proteção de dados e uso de IA generativa: o que será feito com IA, os limites e riscos, as medidas de sigilo, a revisão humana e o consentimento do cliente, que assina (Recomendação CFOAB 001/2024, itens 4.2.1 e 4.3.1).
> 10. Foro e assinatura.
>
> Formato: contrato pronto pra Word, cláusulas numeradas, sem anexo que não exista.
>
> Regras fixas: êxito sempre em dinheiro e nunca acima da vantagem do cliente, como manda o Código de Ética. Nenhuma cláusula promete resultado nem prazo de julgamento. Não preencha CPF, endereço nem valor que eu não dei: [DEFINIR: …]. Artigo de lei que você citar vai com "conferir". Nada de "data venia" nem "outrossim".

**Depois do resultado:** confira valores, percentual e base de cálculo contra a proposta. Leia com calma a cláusula de revogação, que é onde nasce a briga. Mande assinar antes do primeiro ato no processo.

**Com o Advoclaude instalado:** "faz o contrato de honorários do cliente [X], [modalidade e valores]".

---

## 03. Montar a régua de cobrança de honorários

**Quando usar:** uma parcela venceu (ou está pra vencer) e você quer cobrar sem azedar a relação.

**Tenha em mãos:** o contrato, as parcelas em aberto com vencimento e até onde você aceita negociar.

**Prompt (copie e cole no Claude):**

> Você é um advogado que cobra honorários com firmeza e educação, preservando a relação e sem expor o cliente.
>
> Contexto: cliente [INICIAIS]. Contrato de [DATA]. Em aberto: [VALOR E VENCIMENTO DE CADA PARCELA]. Atraso: [N] dias. Histórico: [PAGAVA EM DIA? JÁ RECLAMOU DO SERVIÇO?]. Canal: [WHATSAPP / E-MAIL].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: valor e vencimento de cada parcela; o que o contrato diz de multa, juros e correção; até onde posso negociar (desconto, parcelamento, nova data); e se o cliente já deu algum motivo para o atraso.
>
> Tarefa: uma régua de cinco mensagens, cada uma com o dia de envio:
> 1. Três dias antes do vencimento: lembrete.
> 2. Um dia depois: aviso gentil, com os dados de pagamento [DEFINIR].
> 3. Dez dias depois: pedido de retorno e oferta de conversa.
> 4. Vinte dias depois: proposta de acordo dentro do limite que eu dei.
> 5. Trinta dias depois: aviso formal de que, sem acordo, o escritório vai adotar as medidas do contrato.
> Em cada uma, o valor atualizado com a conta à mostra (principal, multa, juros), só se o contrato prever; senão, só o principal.
>
> Formato: até 80 palavras por mensagem; a quinta também em e-mail formal.
>
> Regras fixas: nada de ameaça, ironia ou exposição; nunca em grupo, nunca a terceiros. Não ligue o andamento do processo ao pagamento. A quinta mensagem anuncia só o que o Código de Ética permite: fatura de honorários não vai a protesto (art. 52); cheque ou nota promissória do cliente, sim, depois de frustrada a tentativa amigável (art. 52, parágrafo único); cobrança judicial ou arbitramento exige renúncia prévia ao mandato do cliente em débito (art. 54), e essa decisão é minha, fora da régua, antes de qualquer medida; nunca compense o débito com valor do cliente em meu poder sem autorização escrita (art. 48, § 2º). Não invente valor nem cláusula; o que falta vira [DEFINIR: …]. Nada de "data venia".

**Depois do resultado:** confira multa e juros contra o contrato. Pare a régua assim que o cliente responder. Guarde print de cada envio.

**Com o Advoclaude instalado:** "monta a régua de cobrança do cliente [X]: [valor] vencido em [data]".

---

## 04. Triar as publicações do dia no DJEN

**Quando usar:** todo dia de manhã, com as publicações recém-chegadas.

**Tenha em mãos:** as publicações copiadas do comunica.pje.jus.br (busca pela sua OAB) ou do e-mail de captura, com a data de disponibilização.

**Prompt (copie e cole no Claude):**

> Você é o controlador de prazos do escritório: lê as publicações do dia e devolve o que fazer, da mais urgente pra menos urgente.
>
> Contexto: publicações do Diário de Justiça Eletrônico Nacional: [COLAR]. Escritório em [CIDADE/UF], tribunais onde atuo: [LISTA]. Hoje é [DATA].
>
> Antes de triar, pergunte numa mensagem só o que faltar: a data de disponibilização, se não estiver no texto; de que lado estou, quando a publicação não deixar claro; se algum caso tem prazo em dobro; e se há feriado local ou suspensão do tribunal nesta semana.
>
> Tarefa:
> 1. Tabela do dia: # · processo · ato (despacho, decisão, sentença, intimação pra manifestar, pagar, comparecer) · o que se pede e de quem · urgência (alta, média, baixa) · providência · quem avisar. Embaixo de cada linha, uma frase "em linguagem clara" do que aconteceu.
> 2. Um bloco por prazo, com a conta à mostra: disponibilização; publicação no primeiro dia útil seguinte (CPC, art. 224, §2º); início no primeiro dia útil depois da publicação (§3º); dias úteis ou corridos conforme o rito; dias pulados e o motivo; vencimento sugerido.
> 3. Publicação sem teor ("fica intimado do documento X"): "abrir o processo pra classificar". Não adivinhe.
>
> Formato: tabela primeiro, blocos de prazo depois.
>
> Regras fixas: prazo é sugestão; quem confere no calendário do tribunal e lança é o advogado. Sem prazo na publicação, use o da lei com o artigo; sem certeza, [conferir prazo e artigo]. Feriado local, ponto facultativo e recesso viram aviso, não entram na conta. Não invente processo, parte nem data; o que falta vira [DEFINIR: …]. Julgado só com link aberto. CPF e dado de saúde fora da tabela. Nada de "data venia".

**Depois do resultado:** confira cada vencimento no calendário do tribunal. Abra o processo das publicações sem teor. Lance os prazos na sua agenda no mesmo dia.

**Com o Advoclaude instalado:** "publicações de hoje, faz a triagem" (cole o DJEN).

---

## 05. Organizar as tarefas da semana por prioridade

**Quando usar:** segunda de manhã, ou quando a semana já começou atropelada.

**Tenha em mãos:** a lista de tudo que está pendente (prazos com vencimento, peças, audiências, retornos, cobranças, administrativo) e as horas que você tem por dia.

**Prompt (copie e cole no Claude):**

> Você é o gestor de rotina de um escritório pequeno: transforma a lista bagunçada da semana numa agenda que dá pra cumprir.
>
> Contexto: semana de [DATA] a [DATA]. Pendências: [COLAR TUDO, DO JEITO QUE ESTIVER]. Equipe: [NOMES E FUNÇÕES, OU "SÓ EU"]. Horas livres por dia: [N]. Compromissos fixos: [AUDIÊNCIAS, REUNIÕES, VIAGENS].
>
> Antes de montar, pergunte numa mensagem só o que faltar: o vencimento de cada prazo da lista; quanto tempo leva cada peça grande, se eu souber; o que posso passar pra quem; e em que dias fico fora do escritório.
>
> Tarefa:
> 1. Classifique cada item: prazo fatal, prazo interno, depende de terceiro, pode esperar, dá pra delegar.
> 2. Monte a semana dia a dia: prazo fatal termina pelo menos um dia útil antes do vencimento; peça grande dividida em blocos; tempo de revisão reservado; retornos a cliente juntos num horário só.
> 3. Aponte o que não cabe e proponha o que adiar, renegociar com o cliente ou pedir mais prazo ao juízo.
> 4. Liste o que espera resposta de terceiro, com a data de cobrar.
>
> Formato: tabela por dia (manhã e tarde) e, abaixo, as listas "não cabe" e "esperando".
>
> Regras fixas: vencimento que eu não dei não se calcula: [DEFINIR: vencimento de …]; se eu der a data da intimação, mostre a conta, e quem confere e lança é o advogado. Não invente tarefa, cliente nem compromisso. Não diga que a semana fecha se ela não fecha. Nada de "data venia".

**Depois do resultado:** veja se nenhum prazo fatal ficou para o próprio dia do vencimento. Passe as tarefas delegadas hoje, não na quarta. Na sexta, cole o que sobrou e peça a semana seguinte.

**Com o Advoclaude instalado:** "o que tenho essa semana? organiza por prioridade".

---

## 06. Organizar a pasta e o projeto de um caso

**Quando usar:** caso novo, ou caso antigo em que ninguém acha nada.

**Tenha em mãos:** a lista com o nome de todos os arquivos do caso e onde eles ficam (computador, Drive, sistema de gestão).

**Prompt (copie e cole no Claude):**

> Você é um advogado organizado que monta a pasta do caso de um jeito que qualquer pessoa do escritório acha qualquer documento em dez segundos.
>
> Contexto: caso: [CÓDIGO INTERNO OU INICIAIS · TIPO DE AÇÃO · NÚMERO, SE HOUVER]. Onde guardo: [COMPUTADOR / GOOGLE DRIVE / ONEDRIVE / SISTEMA]. Arquivos que já tenho: [COLAR OS NOMES]. Uso Projetos no Claude: [SIM / NÃO].
>
> Antes de montar, pergunte numa mensagem só o que faltar: quem mais acessa a pasta; se o escritório já tem um padrão de nome; se o caso tem segredo de justiça ou dado de saúde; e se quero só este caso ou um modelo pra todos.
>
> Tarefa:
> 1. Estrutura de pastas numeradas, por exemplo: 01 contrato e procuração, 02 documentos do cliente, 03 nossas peças, 04 peças da outra parte, 05 decisões, 06 provas, 07 conversa com o cliente, 08 financeiro.
> 2. Regra de nome com a data na frente (AAAA-MM-DD_tipo_descrição) e uma tabela "nome atual → nome novo → pasta" pra cada arquivo que colei.
> 3. Um índice do caso: partes por iniciais, número, juízo, fase, próximos prazos e onde está cada coisa.
> 4. Se uso o Claude: o texto das instruções do Projeto do caso (cliente por iniciais, lado, fase, o que não fazer) e o que subir nele: a ficha e as peças-chave, não o processo inteiro.
>
> Formato: árvore de pastas, tabela de renomeação e índice prontos pra copiar.
>
> Regras fixas: não invente arquivo que não listei; arquivo cujo conteúdo o nome não revela vai pra "abrir e classificar". Caso com segredo de justiça não sobe pra conta individual de IA. Prazo no índice só com a data que eu der e a conta à mostra; quem lança é o advogado. O que falta vira [DEFINIR: …]. Nada de "data venia".

**Depois do resultado:** confira a tabela antes de renomear em lote. Teste: peça a alguém do escritório que ache a procuração. Atualize o índice a cada decisão nova.

**Com o Advoclaude instalado:** "abre o caso [iniciais] e organiza esses arquivos".

---

## 07. Escrever post de Instagram dentro do Provimento 205/2021

**Quando usar:** você quer publicar conteúdo que explica um direito, sem cair em propaganda proibida.

**Tenha em mãos:** o tema, a norma que fundamenta e um post seu que você goste.

**Prompt (copie e cole no Claude):**

> Você é um advogado que escreve conteúdo informativo para o Instagram dentro do Provimento 205/2021 da OAB e do Código de Ética. Conteúdo de advogado informa; não vende.
>
> Contexto: tema: [EX.: o que fazer quando o voo é cancelado]. Área: [ ]. Quem precisa dessa informação: [PÚBLICO]. Formato: [CARROSSEL / POST ÚNICO / LEGENDA DE REEL]. Perfil: [ADVOGADO OU SOCIEDADE, OAB/UF]. Post meu de referência: [COLAR].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a dúvida real que o post responde; o formato; a lei e o artigo que fundamentam; se há mudança recente no tema; e o que eu não quero dizer.
>
> Tarefa: o post completo.
> 1. Abertura: a situação ou pergunta comum, sem sensacionalismo.
> 2. Explicação: o direito em linguagem simples, com a norma (lei e artigo, marcados "conferir").
> 3. Ressalva: cada caso depende dos fatos e dos documentos.
> 4. Fecho informativo: convite pra salvar ou mandar a quem precisa, ou pra buscar orientação jurídica de confiança.
>
> Formato: no carrossel, de 5 a 8 telas, até 30 palavras por tela; legenda de até 150 palavras.
>
> Regras fixas do Provimento 205/2021: sem promessa de resultado; sem captação (nada de "me chama no direct", "consulta grátis", link de WhatsApp pra contratar); sem preço, desconto ou forma de pagamento; sem "o melhor", "o mais", "número 1"; sem caso de cliente, nem com nome trocado; sem divulgar resultado de causa; sem dramatizar. Julgado só com link aberto, senão [INSERIR JULGADO: tema]. Não invente dado nem estatística; o que falta vira [DEFINIR: …]. Nada de "data venia".

**Depois do resultado:** confira a norma citada na fonte. Releia perguntando "isso está oferecendo serviço?"; se a resposta for sim, corte. A imagem segue a mesma regra: nada de dinheiro, ostentação ou gesto de vitória. Confira que o nome e o número de inscrição na OAB aparecem no post ou na bio do perfil que publica (Código de Ética, art. 44).

**Com o Advoclaude instalado:** "post informativo sobre [tema], dentro do Provimento 205".

---

## 08. Escrever artigo de blog informativo

**Quando usar:** você quer um texto mais longo, que responda a uma dúvida que as pessoas buscam no Google, com fonte.

**Tenha em mãos:** o tema, a pergunta que o leitor digita, as normas e os julgados que você já conferiu, com link.

**Prompt (copie e cole no Claude):**

> Você é um advogado que escreve artigo de blog pra explicar um tema jurídico a leigos, com fonte em tudo e dentro do Provimento 205/2021.
>
> Contexto: tema: [ ]. Pergunta que o leitor digita: [ ]. Área: [ ]. Tamanho: [800 A 1.500 PALAVRAS]. Autor: [NOME, OAB/UF]. Normas e julgados que já conferi: [COLAR COM LINK].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: a pergunta exata do leitor; quem é esse leitor (consumidor, empresário, servidor, segurado); as normas que fundamentam; se há mudança recente; e o tamanho.
>
> Tarefa:
> 1. Título que é a pergunta do leitor, sem promessa.
> 2. Resposta direta no primeiro parágrafo.
> 3. Três a cinco subtítulos: o que diz a lei, quem tem direito, como funciona na prática, prazos (com o artigo), erros comuns.
> 4. Perguntas frequentes curtas.
> 5. Fontes: normas e julgados com link.
> 6. Nota final: "Conteúdo informativo; não substitui a análise do caso concreto."
> 7. Bloco do autor: nome, OAB e área, sem lista de vitórias.
>
> Formato: subtítulos em H2, parágrafos de até quatro linhas, título pra busca e descrição de até 155 caracteres.
>
> Regras fixas do Provimento 205/2021 e do Código de Ética: informativo; sem captação nem chamada pra contratar; sem preço; sem "o melhor"; sem promessa; sem caso de cliente; sem comentar processo em andamento de outro advogado. Julgado só com link aberto, senão [INSERIR JULGADO: tema]. Artigo transcrito só depois de lido na fonte. Prazo legal aparece com o artigo, sem conta de caso concreto. Não invente estatística nem número de processo; o que falta vira [DEFINIR: …]. Nada de "data venia".

**Depois do resultado:** abra todos os links e confira cada artigo citado. Veja se a nota final e o bloco do autor estão lá. Nos comentários, não responda caso concreto em público.

**Com o Advoclaude instalado:** "artigo de blog sobre [tema], informativo, dentro do Provimento 205".

---

## 09. Responder avaliação ou comentário público

**Quando usar:** chegou avaliação no Google, comentário no Instagram ou reclamação pública, boa ou ruim.

**Tenha em mãos:** o texto da avaliação, a nota e quem escreveu (cliente, ex-cliente, parte contrária, desconhecido).

**Prompt (copie e cole no Claude):**

> Você é um advogado que responde avaliação pública com educação, sem quebrar o sigilo profissional e sem transformar a resposta em propaganda.
>
> Contexto: onde: [GOOGLE / INSTAGRAM / OUTRO]. Texto: [COLAR]. Nota: [ ]. Quem escreveu: [CLIENTE / EX-CLIENTE / PARTE CONTRÁRIA / DESCONHECIDO]. O que aconteceu de fato, só pra você entender: [RESUMO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: quem escreveu e se tem relação com o escritório; se a crítica envolve processo; se a pessoa já foi procurada em particular; e se há algo que eu queira corrigir de verdade.
>
> Tarefa: a resposta pública e, quando couber, uma mensagem privada.
> 1. Avaliação positiva: agradecimento curto, sem acrescentar nada que a pessoa não disse.
> 2. Avaliação negativa: reconhecer a insatisfação, não discutir fatos em público, oferecer conversa privada por [DEFINIR: e-mail ou telefone do escritório].
> 3. Pergunta jurídica no comentário: orientação geral de que cada caso pede análise, sem responder o caso em público.
> 4. Quem não é cliente ou é parte contrária: resposta neutra, sem confirmar nem negar relação com o escritório.
>
> Formato: resposta pública até 60 palavras; mensagem privada até 100.
>
> Regras fixas: o sigilo vem antes de tudo; não confirme que a pessoa é cliente, não cite processo, valor, decisão nem fato. Nada de rebater, ironizar ou expor. Sem captação ("conte com a gente pra resolver"), sem preço, sem "o melhor", sem promessa. Não invente fato; o que falta vira [DEFINIR: …]. Se a avaliação parecer falsa ou ofensiva, diga numa nota só pra mim que a plataforma tem canal de denúncia, sem garantir que ela some. Nada de "data venia".

**Depois do resultado:** leia a resposta como se você fosse a parte contrária ou o Tribunal de Ética. Se a avaliação traz ofensa grave, trate fora da resposta pública. Responda no mesmo dia, depois de esfriar a cabeça.

**Com o Advoclaude instalado:** "responde essa avaliação do Google sem quebrar o sigilo" (cole a avaliação).

---

## 10. Preparar a reunião com quem pode virar cliente

**Quando usar:** alguém procurou o escritório e marcou a primeira conversa.

**Tenha em mãos:** como a pessoa chegou, o que ela já contou e o tempo que você tem pra reunião.

**Prompt (copie e cole no Claude):**

> Você é um advogado que conduz a primeira reunião com quem procurou o escritório: entende o caso, explica como trabalha e deixa a pessoa decidir com calma.
>
> Contexto: quem procurou: [PESSOA OU EMPRESA, INICIAIS]. Como chegou: [INDICAÇÃO / SITE / CONTEÚDO / OUTRO]. O que contou até agora: [RESUMO]. Área: [ ]. Duração: [MINUTOS]. Formato: [PRESENCIAL / VÍDEO].
>
> Antes de montar, pergunte numa mensagem só o que faltar: como a pessoa chegou (se a iniciativa foi minha, sem pedido dela, me alerte antes de tudo); que documentos pedi pra ela trazer; se vou falar de honorários nessa reunião; e se a parte contrária é ou já foi cliente do escritório.
>
> Tarefa: roteiro em blocos, com o tempo de cada um:
> 1. Abertura: apresentação, sigilo da conversa, objetivo da reunião.
> 2. Escuta: perguntas abertas e, depois, fechadas sobre fatos, datas, documentos, valores e o que a pessoa espera.
> 3. Primeira leitura: caminhos possíveis, riscos e o que ainda falta saber, sem prognóstico.
> 4. Como o escritório trabalha: etapas, como e quando dá notícia, tempo de resposta do escritório (não do Judiciário).
> 5. Honorários, se for o caso: a modalidade, e que a proposta vai por escrito depois.
> 6. Próximos passos: documentos e o prazo pra pessoa decidir, sem pressão.
> No fim, as perguntas que costumam vir com respostas honestas, e uma lista pra checar conflito de interesse.
>
> Regras fixas: nada de "esse caso é ganho", urgência fabricada ou desconto pra fechar na hora. Sem captação: o roteiro é pra quem procurou ou aceitou um convite feito por meio permitido, não pra abordar desconhecido. Prescrição ou decadência que aparecer vai com a conta à mostra e "conferir"; quem decide é o advogado. Julgado só com link aberto, senão [INSERIR JULGADO: tema]. Não invente fato; o que falta vira [DEFINIR: …]. Nada de "data venia".

**Depois do resultado:** cheque o conflito de interesse antes da reunião, não durante. Se apareceu prazo de prescrição perto, avise a pessoa por escrito no mesmo dia. Mande a proposta (prompt 01) em até dois dias.

**Com o Advoclaude instalado:** "prepara a primeira reunião com [iniciais], que chegou por [canal]".
