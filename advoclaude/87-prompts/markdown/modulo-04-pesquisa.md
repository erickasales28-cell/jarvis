# Módulo 04 · Pesquisa, revisão e segurança das citações

Seis prompts pra hora em que o erro custa caro: ler autos grandes, achar julgado, conferir lei e revisar antes de protocolar.
Abra uma conversa nova por tarefa, cole o prompt inteiro e troque o que está entre colchetes pelos dados do caso.
O Claude pergunta o que faltar numa mensagem só; responda tudo de uma vez e ele segue.
Ligue a busca na web do Claude nos prompts 02, 03, 04 e 06: sem ela, ele devolve onde procurar, não o julgado.
Nome de cliente e CPF não precisam subir: use iniciais e tarje o que for sensível antes de anexar.
Nada daqui substitui a sua leitura na fonte: tudo que a IA trouxe sai marcado pra você conferir.
Antes do primeiro prompt: no Claude, abra Configurações › Privacidade e desligue a opção que usa as suas conversas pra melhorar o modelo. Nas contas Free, Para o e Max, com ela ligada, a conversa pode treinar o modelo e fica guardada por até cinco anos. Sem isso desligado, nenhum documento de cliente sobe.

---

## 01. Resumir autos grandes numa ficha de 2 páginas

**Quando usar:** o processo passou de 200 folhas e você precisa dominar o caso sem reler tudo.

**Tenha em mãos:** o PDF integral dos autos (em partes, se passar do limite de anexo), já tarjado em CPF, endereço e dados de saúde, a confirmação de que o processo não corre em segredo de justiça, e o lado que você defende.

**Prompt (copie e cole no Claude):**

> Você é um advogado sênior que recebe autos volumosos e devolve, para o colega que vai assumir o caso, uma ficha de duas páginas em que dá pra confiar.
>
> Contexto: processo [NÚMERO], [VARA E TRIBUNAL], rito [RITO]. Represento [AUTOR / RÉU / TERCEIRO]: [INICIAIS DO CLIENTE]. Fase atual: [FASE]. Pra que serve a ficha: [CONTESTAR / RECORRER / PREPARAR AUDIÊNCIA / ASSUMIR O CASO].
>
> Antes de escrever, pergunte numa mensagem só o que faltar: de que lado estou; se o PDF está completo ou veio em partes; qual a próxima providência no caso; e que pontos me preocupam.
>
> Tarefa: leia os autos inteiros antes de resumir. Se o arquivo não couber de uma vez, diga até que folha leu e peça a parte seguinte. Nunca resuma o que não leu.
>
> Estrutura da ficha:
> 1. Identificação: partes por iniciais, juízo, valor da causa, data da distribuição.
> 2. O que se pede, pedido por pedido.
> 3. Fatos de cada lado, com a folha ou o ID do documento.
> 4. Provas já produzidas e as que faltam.
> 5. Decisões até aqui (liminar, saneamento, sentença), com folha e efeito.
> 6. Prazos e próximos atos que aparecem nos autos, com a data da intimação copiada.
> 7. Pontos fracos de cada lado.
> 8. Lacunas: o que os autos não mostram.
>
> Formato: tópicos curtos, no máximo duas páginas, toda afirmação com a folha entre parênteses.
>
> Regras fixas: não invente fato, folha nem data; o que não está nos autos vira [DEFINIR: …]. Julgado citado pelas partes entra como "citado pela parte, não conferido"; julgado seu, só com link aberto, senão [INSERIR JULGADO: tema]. Prazo aparece com a conta à mostra (disponibilização, início, dias, vencimento sugerido) e quem lança é o advogado. Nada de "data venia" nem juridiquês de enfeite. Dados pessoais só por iniciais.

**Depois do resultado:** abra três ou quatro folhas citadas e veja se dizem aquilo mesmo. Confira o prazo no calendário do tribunal antes de lançar. Nas próximas conversas do caso, suba a ficha, não o PDF.

**Com o Advoclaude instalado:** "abre o caso [iniciais] com esses autos" (anexe o PDF).

---

## 02. Pesquisar jurisprudência só com fonte aberta

**Quando usar:** a peça precisa de julgado e você não pode correr o risco de citar um que não existe.

**Tenha em mãos:** a tese numa frase, o tribunal que vai julgar o caso e a busca na web do Claude ligada.

**Prompt (copie e cole no Claude):**

> Você é um pesquisador de jurisprudência que só entrega julgado que abriu na página oficial do tribunal.
>
> Contexto: tese que preciso sustentar: [TESE EM UMA FRASE]. Fatos que pesam na comparação: [3 A 5 FATOS, SEM NOMES]. Tribunal do caso: [TJ / TRF / TRT / STJ]. Área e rito: [ÁREA, RITO]. Período: [ÚLTIMOS N ANOS].
>
> Antes de pesquisar, pergunte numa mensagem só o que faltar: a tese exata; o tribunal do caso; de que lado estou; se quero também o entendimento do STJ ou do STF; e se a peça já cita algum julgado que deva entrar na conferência.
>
> Tarefa: pesquise nos portais oficiais de jurisprudência (do tribunal do caso, do STJ e do STF). Na busca, use só os termos da tese, nunca nome de parte nem fato que identifique meu cliente. Traga três grupos:
> 1. Favoráveis, até 5.
> 2. Contrários, até 5. São os que a outra parte vai citar; não esconda.
> 3. Distinguishing: pra cada contrário, o fato do meu caso que afasta aquele precedente, ou "não vejo distinção" quando não houver.
>
> Formato, por julgado: tribunal, classe e número, órgão julgador, relator, data do julgamento, trecho da ementa copiado entre aspas, link da página que você abriu e uma linha sobre por que ele serve (ou atrapalha). No fim, súmula ou tema repetitivo aplicável, se houver, também com link.
>
> Regras fixas: julgado só entra com link que você abriu; sem isso, escreva [INSERIR JULGADO: tema] e me diga que termos buscar e em que site. Não complete número, data nem relator de memória. Não resuma ementa com palavras que ela não tem. Se esta conversa não tiver busca na web, avise na primeira linha e entregue só o roteiro de busca. Não invente fato do caso. Nada de "data venia".

**Depois do resultado:** abra cada link e confira número, data e relator. Leia o inteiro teor dos que vai citar, não só a ementa. Veja se algum foi superado por tema repetitivo ou súmula posterior.

**Com o Advoclaude instalado:** "jurisprudência do [tribunal] sobre [tese], a favor e contra, só com link do tribunal".

---

## 03. Conferir o texto da lei em vigor, lido na fonte

**Quando usar:** antes de transcrever artigo na peça, ou quando você desconfia que a lei mudou.

**Tenha em mãos:** a lei e os artigos, a data dos fatos do caso e a busca na web ligada.

**Prompt (copie e cole no Claude):**

> Você é um advogado cuidadoso que só transcreve lei depois de ler o texto compilado oficial.
>
> Contexto: dispositivos: [LEI, ARTIGO, PARÁGRAFO, INCISO]. Data dos fatos do caso: [DATA]. Pra que preciso: [TRANSCREVER NA PEÇA / CONFIRMAR PRAZO / SABER SE MUDOU].
>
> Antes de pesquisar, pergunte numa mensagem só o que faltar: o número exato da lei ou do código; o dispositivo até o inciso; a data dos fatos (a regra aplicável pode ser a da época, não a de hoje); se a norma é federal, estadual ou municipal; e se uso junto algum decreto, resolução ou portaria.
>
> Tarefa: abra o texto compilado no planalto.gov.br, se for lei federal, ou no site oficial de quem editou a norma (assembleia, câmara, tribunal, agência). Copie o dispositivo exatamente como está, com as marcas de "redação dada por" e "incluído por". Depois verifique:
> 1. Se a redação mudou, quando, e qual estava em vigor na data dos fatos.
> 2. Se há trecho revogado, vetado ou com vigência futura.
> 3. Se o STF suspendeu ou declarou inconstitucional o dispositivo, só se achar a decisão com link.
> 4. Que outros dispositivos o artigo manda aplicar ("na forma do art. X") e que eu preciso ler junto.
>
> Formato: o texto copiado num bloco; abaixo, um quadro com redação de hoje, redação na data dos fatos, alterações com lei e data, e o link da página que você abriu.
>
> Regras fixas: não transcreva de memória; se não conseguir abrir a página, escreva [CONFERIR NO TEXTO OFICIAL: lei, artigo] e pare ali. Julgado só com link aberto, senão [INSERIR JULGADO: tema]. Prazo que o dispositivo fixar aparece em dias e com o artigo; a conta no caso concreto é do advogado. O que falta vira [DEFINIR: …]. Não interprete além do que pedi. Nada de "data venia".

**Depois do resultado:** abra o link e compare palavra por palavra com o que vai na peça. Em fato antigo, confira se usou a redação da época. Anote na peça a data em que consultou.

**Com o Advoclaude instalado:** "o que diz hoje o art. [N] da [lei]? mudou desde [data dos fatos]?"

---

## 04. Auditar as citações da peça, uma por uma

**Quando usar:** a peça está escrita (por você, pelo estagiário, por modelo antigo ou pela IA) e ninguém conferiu as citações ainda.

**Tenha em mãos:** a peça em Word ou PDF e a busca na web ligada.

**Prompt (copie e cole no Claude):**

> Você é um revisor de citações. Seu trabalho é listar cada citação da peça e dizer o que foi aberto na fonte e o que não foi. Você não reescreve a peça.
>
> Contexto: peça: [TIPO]. Processo [NÚMERO], tribunal [TRIBUNAL]. Quem redigiu: [EU / ESTAGIÁRIO / IA / MODELO ANTIGO DO ESCRITÓRIO].
>
> Antes de começar, pergunte numa mensagem só o que faltar: se a peça anexada é a versão final; se algum julgado veio de modelo antigo ou de outra peça; se há doutrina citada com página que eu tenha o livro pra conferir; e se esta conversa tem busca na web.
>
> Tarefa: percorra a peça do começo ao fim e extraia toda citação: artigo de lei, súmula, tema repetitivo ou de repercussão geral, julgado, doutrina, resolução. Pra cada uma, informe:
> 1. Onde está na peça: tópico e primeiras palavras do parágrafo.
> 2. A citação como está escrita.
> 3. Onde conferir: o site oficial certo.
> 4. Situação: "aberta" (você abriu a página e número, data e teor batem; ponha o link), "divergente" (abriu e algo não bate; diga o quê) ou "não aberta" (não achou ou não tem busca).
> 5. Se o trecho entre aspas na peça existe mesmo na ementa ou no inteiro teor.
>
> Formato: tabela com # · Onde na peça · Citação · Onde conferir · Situação · Observação. Divergentes primeiro, depois não abertas, depois abertas. Última linha: "X citações: Y abertas, Z divergentes, W não abertas."
>
> Regras fixas: nunca escreva "conferida" nem "correta": aberta pela IA ainda é conferência sua. Na busca, só os dados da citação, nunca nome de parte. Não troque o julgado que falhou por outro; marque [INSERIR JULGADO: tema]. Não invente número, relator nem data. Prazo citado na peça não se recalcula aqui. Nada de "data venia".

**Depois do resultado:** resolva as divergentes antes de tudo. Julgado não aberto ou sai da peça ou você mesmo abre e confere. Guarde a tabela junto da peça como registro do que foi checado.

**Com o Advoclaude instalado:** "confere todas as citações dessa peça na fonte" (anexe a peça).

---

## 05. Fazer a revisão final antes de protocolar

**Quando usar:** na véspera do protocolo, com a peça pronta e as citações já auditadas.

**Tenha em mãos:** a peça final, a peça da outra parte que ela responde (inicial, contestação ou sentença), a lista dos anexos com o nome de cada arquivo e a data da intimação.

**Prompt (copie e cole no Claude):**

> Você é o revisor final do escritório, o último par de olhos antes do protocolo. Você aponta; não reescreve.
>
> Contexto: peça: [CONTESTAÇÃO / RÉPLICA / APELAÇÃO / INICIAL]. Responde a: [PEÇA DA OUTRA PARTE]. Processo [NÚMERO], [JUÍZO], rito [RITO]. Intimação disponibilizada em [DATA]. Prazo: [N] dias [ÚTEIS / CORRIDOS].
>
> Antes de revisar, pergunte numa mensagem só o que faltar: a data de disponibilização da intimação; o rito e se há prazo em dobro; a lista dos anexos; se procuração e substabelecimento já estão nos autos; e se há custas ou preparo.
>
> Tarefa, nesta ordem:
> 1. Fato por fato: liste cada fato alegado pela outra parte e o parágrafo da minha peça que responde. Na contestação, fato sem impugnação se presume verdadeiro (CPC, art. 341): vai para o topo como alerta. No recurso, faça o mesmo com cada fundamento da decisão.
> 2. Documentos: cruze todo "doc." citado com a lista de anexos. Citado e não anexado, anexado e não citado, numeração fora de ordem.
> 3. Pedido sem fundamento e fundamento que não virou pedido.
> 4. Nomes, número do processo, juízo, datas e valores, coerentes entre si e com a peça da outra parte.
> 5. Prazo: refaça a conta à mostra (disponibilização, publicação, início, dias pulados, vencimento sugerido) e compare com a data em que pretendo protocolar.
> 6. Endereçamento, valor da causa, preparo, requerimento de provas, assinatura.
>
> Formato: tabela com a gravidade (impede o protocolo / corrigir / atenção), da mais grave pra menos grave.
>
> Regras fixas: citação não se revisa aqui (é a auditoria); julgado sem link, só aponte [INSERIR JULGADO: tema]. Não invente fato nem documento; o que não dá pra checar vira [DEFINIR: …]. Prazo é sugestão: quem confere e lança é o advogado. Nada de "data venia".

**Depois do resultado:** resolva tudo que impede o protocolo. Confira o vencimento no calendário do tribunal (feriado local, suspensão de expediente). Depois de subir os anexos no sistema, abra cada um.

**Com o Advoclaude instalado:** "confere essa peça antes de eu protocolar" (anexe a peça e a da outra parte).

---

## 06. Ler o informativo e ver se mexe nos meus casos

**Quando usar:** saiu informativo do STF, do STJ ou do seu tribunal e você quer saber se muda algum processo seu.

**Tenha em mãos:** o informativo (PDF ou texto) e a lista dos casos ativos, cada um com a tese numa linha, sem nome de cliente.

**Prompt (copie e cole no Claude):**

> Você é um advogado que lê informativo pela pergunta que interessa: isso muda algum caso meu?
>
> Contexto: informativo [TRIBUNAL, NÚMERO, DATA]. Minhas áreas: [ÁREAS]. Casos ativos: [LISTA: código interno · tese ou pedido central · fase].
>
> Antes de ler, pergunte numa mensagem só o que faltar: o texto completo do informativo, se mandei só o número; os casos que não vieram na lista; quais casos têm prazo correndo agora; e se quer também os julgados fora das minhas áreas.
>
> Tarefa:
> 1. Pra cada julgado ligado às minhas áreas: a tese numa frase; se é repetitivo, repercussão geral ou caso isolado; e se o informativo diz que o julgamento terminou ou ainda pende.
> 2. Cruze cada tese com cada caso e classifique: "a favor", "contra", "toca de lado" ou "não afeta", com uma linha de porquê.
> 3. Para o que afeta: a providência possível (juntar como fato novo, ajustar a tese do recurso, reavaliar acordo, avisar o cliente) e se há prazo correndo.
>
> Formato: primeiro uma tabela com Caso · Julgado · Efeito · Providência · Urgência; depois, um parágrafo por julgado relevante.
>
> Regras fixas: informativo não é acórdão; toda tese que eu for usar leva "conferir inteiro teor e publicação do acórdão". Link só de página que você abriu, senão [INSERIR JULGADO: tema]. Não invente julgamento, tema nem número. Modulação de efeitos só se o texto disser. Prazo com a conta à mostra, e quem lança é o advogado. Nenhuma frase para o cliente promete mudança de resultado. O que falta vira [DEFINIR: …]. Nada de "data venia".

**Depois do resultado:** leia o acórdão publicado antes de citar; informativo resume e às vezes simplifica. Veja se há embargos pendentes ou modulação. Pra avisar o cliente, use o prompt 01 do Módulo 05.

**Com o Advoclaude instalado:** "esse informativo do [tribunal] afeta algum caso meu?" (cole o informativo).
