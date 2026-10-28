# Advoclaude · Peças

Este arquivo reúne 6 métodos. Cada um começa num título "MÉTODO:". Leia só o método do pedido, inteiro. Toda peça processual usa três deles em sequência: Peça a partir da ficha, que chama o Plano antes de gerar e, no fim, a Conferência antes de protocolar.

Índice
- MÉTODO: Peça a partir da ficha (peca-a-partir-da-ficha): "faz a contestação", réplica, inicial, recurso, manifestação, notificação → peça na voz do escritório
- MÉTODO: Plano antes de gerar (plano-antes-de-gerar): obrigatório antes de toda peça → perguntas que faltam e plano em cinco blocos
- MÉTODO: Conferência antes de protocolar (conferencia-antes-de-protocolar): "confere antes de eu protocolar", "revisa essa peça", e sozinha depois de toda peça → tabela
- MÉTODO: Editar com IA (editar-com-ia): peça pronta: "melhora esse trecho", pergunta sobre ela, "troca a prescrição pela decadência" → ANTES/DEPOIS
- MÉTODO: Peça a partir do seu modelo (peca-a-partir-do-seu-modelo): .docx dele anexado, "troca só os dados", "adapta esse modelo" → documento sobre o .docx dele
- MÉTODO: Parecer e minuta (parecer-e-minuta): parecer, "o cliente quer saber se pode…", requerimento, declaração, termo, carta → documento formal

Neste kit, "Drive conectado" é o app do Google Drive ligado ao ChatGPT; "arquivos do Projeto" são os arquivos que o advogado subiu no Projeto do ChatGPT. O .docx é gerado com a execução de Python do ChatGPT (python-docx) e oferecido pra baixar. A montagem do arquivo segue o método Timbrado e formatação (`timbrado-e-formatacao`, no arquivo do escritório).

---

## MÉTODO: Peça a partir da ficha (peca-a-partir-da-ficha)


Quando usar: Use quando o advogado disser "faz a contestação", "redige a réplica", "monta a inicial", "faz o recurso", "responde essa manifestação" ou pedir qualquer peça processual ou extrajudicial (petição inicial, contestação, réplica, recurso, manifestação, notificação) de um caso. Contrato novo é da contrato-a-partir-do-briefing; parecer e minuta, da parecer-e-minuta. Escreve a partir da FICHA DO CASO, sem reler o processo, com a voz do escritório: lê o ESTILO-DO-ESCRITORIO e o modelo do mesmo tipo em MODELOS antes de redigir, mantém coerência com as peças anteriores do mesmo caso e ajusta só o trecho pedido nas correções.


Ordem do fluxo: Entrada (com a ficha, feita por você se faltar) → **plano (`plano-antes-de-gerar.md`, obrigatório)** → Redação → Entrega pelo `timbrado-e-formatacao.md` → **Conferência (`conferencia-antes-de-protocolar.md`), sempre, sozinha** → Resumo no chat. Nenhuma linha da peça antes do plano.

### Entrada

Pra trabalhar, você precisa de quatro coisas: o perfil do escritório, os modelos do escritório, a ficha do caso e o pedido (qual peça, qual tese, o que priorizar).
- **Ficha:** busque `FICHA-DO-CASO.md` na pasta do caso. Sem ficha, faça a ficha você mesmo, pela `ficha-do-caso.md`, sem avisar e sem perguntar, e siga pra peça na mesma conversa. Não é etapa separada nem proposta ao advogado. Não redija em cima do processo inteiro.
- **Módulo da área, antes do modelo:** se o perfil lista um `area-…`, abra-o e siga a estrutura da peça pedida (seção 3), o rito e o foro (seção 1) e as teses e provas da área (seção 4). Peça fora da estrutura que o módulo descreve é peça que o juízo daquela área estranha.
- **Modelos do escritório:** abra `ESTILO-DO-ESCRITORIO.md` e só o arquivo de `MODELOS/` do mesmo tipo de peça (ou o mais próximo). A estrutura, a abertura, o fecho, o jeito de citar e as expressões vêm de lá; a ficha entra só como conteúdo. Se não existir modelo nenhum, diga isso ao advogado e proponha a skill `modelos-do-escritorio` antes de redigir; se ele preferir seguir, use o perfil e avise que a peça sairá no formato dele, mas sem a voz.
- **Peças anteriores do mesmo caso, buscadas por você:** se a pasta do escritório está conectada (Cowork) ou o Drive está ligado, procure pelo número do processo da ficha e abra só a peça do escritório que esta continua (a inicial pra réplica, a contestação pro recurso); a decisão atacada entra pelo resumo da `resumo-de-decisao`, se houver, não pelo inteiro teor. A nova mantém a tese, os nomes que ele deu às coisas e o vocabulário daquelas. Peça do mesmo caso nunca contradiz o que o escritório já sustentou nos autos; se a ficha mostrar uma contradição, aponte antes de escrever. Sem pasta conectada, pergunte se há peça anterior e peça o arquivo; não redija a réplica sem ter lido a inicial dele.
- **Contestação:** a inicial também entra, inteira, porque cada fato dela precisa de resposta (CPC, art. 341).
- **Se não houver modelo do tipo pedido em `MODELOS/`,** busque na pasta ou no Drive a peça mais recente desse tipo, protocolada, e use-a como modelo do dia (anonimizando o que for de cliente), avisando que ela ainda não está nos modelos.

### Antes de redigir

Abra `plano-antes-de-gerar.md` e siga-o: perguntas esclarecedoras do que falta, o plano nos cinco blocos (Estratégia da peça, Teses da peça, Eixo da defesa, Jurisprudência, Suas provas), ajuste no chat e aval explícito. Reescrever oito páginas por um rumo errado é o que mais gasta o limite. A redação segue o plano aprovado; tese nova no meio do caminho pede nova consulta ao advogado. Aval de plano que não foi mostrado nesta conversa não existe: o §4 do plano diz o que fazer.

### Redação

- **Fatos:** só os da ficha, com a referência (fl., ID ou evento) quando o escritório usa.
- **Documentos:** só cite como "doc. N" o documento que você abriu e leu. Documento que o cliente só descreveu, e que você não leu, entra como `[JUNTAR: <o que o cliente disse que o doc. prova>]`, nunca como "doc. N (anexo)".
- **Lei:** cite o dispositivo pelo número.
- **Jurisprudência:** use só a que o advogado forneceu ou a que você buscou, abriu e transcreveu da página oficial, com o endereço ao lado. Mesmo assim, ela entra na lista da conferência. **Nunca invente** número de processo, relator, data ou ementa. Onde a peça pede um julgado e ainda não existe um verificado, deixe a marca `[INSERIR JULGADO: tema, conferir]`.
- **Pedidos:** conferem com os fatos e com a ficha.
- **Tratamento, formalidade, conectivos e fecho:** os do `ESTILO-DO-ESCRITORIO.md`, ao pé da letra. Se existir `TESES-E-TRECHOS.md`, reaproveite as teses e os trechos de forma que couberem, ajustando só o que muda no caso; se não existir, escreva do zero, sem avisar.
- **Teste final:** lendo a peça ao lado do modelo, ela parece escrita pela mesma pessoa? Se não, é a peça que muda, não o modelo.

### Entrega em Word

A montagem do arquivo segue `timbrado-e-formatacao.md`: timbrado do escritório (ou modelo .docx, ou documento limpo, nessa ordem), numeração de parágrafos conforme o perfil, trechos-chave em negrito e conferência do arquivo salvo antes de entregar.

A peça vai **no arquivo .docx pra baixar e editar**, gerado com a ferramenta de criação de arquivos. Não cole a peça no chat: o advogado edita no Word, não no navegador. Se o ambiente não gerar .docx, diga em uma linha como ligar (Settings › Capabilities) e aí, sim, entregue a peça inteira no chat, em texto limpo, **sem marcação markdown** (sem `**`, sem `#`, sem `>`), pronta pra colar no Word.

### Conferência, sempre

Peça pronta, rode a `conferencia-antes-de-protocolar.md` na hora, sem perguntar e sem sugerir: ela faz parte da entrega. A tabela completa vai num arquivo à parte (`CONFERENCIA-<tipo>-<data>.md`, na pasta do caso quando houver); sem criação de arquivo, vai no chat depois da peça. O que ela achar entra no resumo.

### Resumo no chat

Até 8 linhas, nesta ordem:
1. **Primeiro, o que muda a peça:** perguntas do plano que ficaram sem resposta, como `[DEFINIR: …]`; fato da inicial sem resposta (contestação); documento citado e não lido (`[JUNTAR]`).
2. O que fez: a peça, o arquivo, a tese na frente.
3. De onde tirou os fatos: ficha, documentos lidos, relato do cliente.
4. Conferência: quantos itens, quantos gerados pela IA, os mais graves.
5. O que ficou `[DEFINIR]` ou `[INSERIR JULGADO]`.

Não repita a ficha nem o plano.

### Depois

- **Correção:** pelo `editar-com-ia.md` (Reescrita inteligente, com ANTES/DEPOIS e "aplicar"); reescreva só o trecho pedido e devolva só esse trecho, dizendo onde ele entra. Não devolva a peça inteira de novo.
- Feche com uma linha: "Próximo passo: lance o prazo (`gestao-de-prazos-e-intimacoes`); se o cliente precisa saber, o recado sai pela `comunicacao-com-cliente`."

---

## MÉTODO: Plano antes de gerar (plano-antes-de-gerar)


Quando usar: Etapa obrigatória antes de escrever qualquer peça processual ou extrajudicial (inicial, contestação, réplica, recurso, manifestação, notificação) e antes de contrato novo; a `peca-a-partir-da-ficha` e a `contrato-a-partir-do-briefing` chamam este método antes da primeira linha. Abre com o ALERTA de prazo, faz até cinco perguntas esclarecedoras, apresenta o plano da peça em cinco blocos ("Estratégia da peça", "Teses da peça", "Eixo da defesa", "Jurisprudência", "Suas provas"), deixa o advogado ajustar no chat e só libera a redação depois do aval explícito dele.


Oito páginas escritas no rumo errado custam mais do que um plano de uma tela. O advogado decide a estratégia; você propõe, ele ajusta, e só depois do "pode escrever" a peça nasce.

### 0. Prazo: o ALERTA vem antes de tudo

Leia a ficha e faça a conta do prazo pela régua do `SKILL.md` ("Prazo e ALERTA"): termo inicial (o dia do início é o dia 1), úteis ou corridos, dias pulados, vencimento sugerido `[conferir]`; regra incerta, conte as duas e use a mais curta. Se o prazo processual vence em 5 dias úteis ou menos, se a decadência ou a prescrição está a 60 dias ou menos (ou a janela já abriu, ou pode estar consumada), ou se o prazo já venceu, a **primeira mensagem abre com o ALERTA e a conta**, antes das perguntas. Prazo vencido vai no topo como VENCIDO, com o efeito e o que ainda dá para fazer. Se a triagem barrar o caso (prazo decaído, não cabe), pare e responda a consulta, sem plano. Sem alerta, a conta vai só na linha "Prazo" do plano.

### 1. Perguntas esclarecedoras (só o que muda a peça)

Leia a `FICHA-DO-CASO.md`, o perfil do escritório e o módulo da área. Depois pergunte **numa mensagem só**, no máximo **cinco perguntas, priorizadas** (a que mais muda a peça primeiro), com resposta curta e, quando der, a sua sugestão já marcada. O que passar de cinco vira `[DEFINIR: …]` no plano, mesmo que a skill de área liste mais perguntas. Pergunte só o que a ficha e o perfil não respondem e que mudaria o plano:

- qual peça e de que lado o escritório está, se o pedido não disse;
- qual tese o advogado quer na frente, quando houver duas de peso parecido;
- o pedido principal e se há pedido urgente (tutela, efeito suspensivo);
- provas que o cliente tem e que não estão nos autos;
- fato decisivo que a ficha deixou em aberto (data de ciência, valor, se houve acordo ou proposta).

Exemplo: "Tese na frente: (a) prescrição, (b) mérito, inexistência do débito. Sugiro (a), porque a ficha mostra o último ato em [data]."

O que não trava o plano vira `[DEFINIR: …]` dentro dele. Se o advogado responder "não sei" ou "segue", siga com a melhor hipótese e marque-a no plano como hipótese. Não pergunte o que você já leu.

### 2. O plano, em cinco blocos

Uma tela, em tópicos curtos. Os títulos são sempre estes cinco, nesta ordem:

```
PLANO DA PEÇA: [tipo] · [caso: nº curto ou iniciais] · [data]
[só na contestação] Fatos da inicial: [N] · sem resposta no plano: [lista ou "nenhum"]

Estratégia da peça
- Objetivo: [o que a peça precisa conseguir neste momento do processo]
- Prazo: [termo inicial · úteis ou corridos · vencimento sugerido `[conferir]`; ALERTA ou VENCIDO, se for o caso; "sem prazo na peça" se não houver]
- Juízo e rito: [onde, qual procedimento, conforme o módulo da área]
- Postura: [defensiva, ofensiva, conciliatória] e por quê
- Pedidos: [os pedidos, na ordem em que vão sair]
- Cuidado: [o que não pode ser dito, contradição a evitar com peça anterior do caso]
- [só na contestação] Fatos da inicial: [cada fato · a tese ou o tópico que o responde]

Teses da peça
1. [Preliminar | Prejudicial | Mérito] [a tese em uma frase]
   Base: [dispositivo pelo número] · Fato: [da ficha, com fl./ID] · Força: forte, média ou fraca, e o motivo em uma linha
2. ...

Eixo da defesa
[a frase de que a peça inteira depende, e por que esta e não outra]

Jurisprudência
- Tese 1: [tribunal · órgão · número · relator · data] · [link aberto] · [o que decidiu, em uma frase]
- Tese 2: [INSERIR JULGADO: tema, conferir]

Suas provas
- Tese 1: [documento · fl./ID] · [o que ele prova]
- Falta: [prova] · [como obter ou requerer]
- A requerer: [perícia, testemunhas, depoimento pessoal, ofício]

Pendências: [DEFINIR: …]
```

Regras dos blocos:

- **Teses:** preliminares e prejudiciais antes do mérito. Força em palavra, nunca em número, e sem promessa de resultado. Tese que contradiz o que o escritório já sustentou no mesmo caso não entra sem aviso.
- **Eixo da defesa:** uma tese só. Numa inicial, é o argumento central do pedido; o título do bloco continua o mesmo.
- **Jurisprudência:** só julgado que o advogado forneceu ou que você abriu na página oficial do tribunal nesta conversa, com o link ao lado. Nunca de memória. Exceção: súmula, tema e enunciado que a skill de área ou o módulo trazem como conferidos entram pelo número, e vão para a conferência. Onde falta, a marca `[INSERIR JULGADO: tema, conferir]`, e ofereça rodar a `pesquisa-jurisprudencial` antes do aval. O advogado diz quais julgados entram; o que ele tirar não volta na peça.
- **Suas provas:** cada tese aponta a prova que a sustenta. Tese sem prova aparece assim, às claras. Documento que o cliente só descreveu e você não leu entra como `[JUNTAR: …]`.
- **Contestação:** liste cada fato da inicial e a tese ou o tópico que vai respondê-lo (CPC, art. 341: fato não impugnado se presume verdadeiro). Fato sem resposta sobe pra linha do topo do plano, como alerta; não fica escondido em Pendências.

#### Plano de uma tela (o que não é peça processual)

Contrato novo, roteiro de audiência, quesitos, requerimento administrativo, parecer e consulta ("dá pra fazer?"): o plano cabe em uma tela, com até 5 perguntas priorizadas, e **dispensa Eixo e Jurisprudência quando não houver tese**. Mantém a linha "Prazo", as provas ou documentos que faltam e o aval antes de redigir. Expediente de uma página tirado de uma intimação (`da-intimacao-a-providencia`) vai direto como minuta, sem plano (o ALERTA e a conta continuam na primeira mensagem); a minuta é rascunho para ele revisar, e nada é protocolado por você.

### 3. Ajuste no chat

O advogado ajusta com frases soltas: "tira a tese 3", "inverte 1 e 2", "o eixo é a decadência", "acrescenta pedido de gratuidade". Aplique e devolva **só os blocos que mudaram**, com a linha "o resto como estava". Ajuste que mexe no eixo pede revisão das teses e das provas ligadas a ele: diga isso.

### 4. Aval explícito

A peça só começa com aval claro: "aprovado", "pode escrever", "segue assim", "manda". Não é aval: silêncio, pergunta, elogio, ajuste parcial. Depois de cada ajuste, peça o aval de novo em uma linha. Nenhum parágrafo da peça sai antes.

**Só existe aprovação de plano que foi mostrado nesta conversa.** Se o advogado aprova "direto" ("já vi o plano e aprovo", "escreve direto", "sem me perguntar nada") e nenhum plano foi mostrado aqui, não trate a frase como aval de um plano que não existe e não trave: mostre o plano em 5 linhas (peça e juízo, eixo, teses na ordem, pedidos, o que falta) e siga escrevendo, sem esperar resposta. As perguntas do §1 que mudariam a peça viram `[DEFINIR: …]` e vão **no topo do resumo** da entrega, não no rodapé.

### Depois do aval

- A peça segue o plano aprovado. Tese nova que aparecer durante a redação não entra calada: pare e pergunte.
- Com a pasta do caso conectada, guarde o plano aprovado como `PLANO-<tipo>.md` ao lado da ficha; a reescrita e a conferência o consultam.
- Nada é protocolado nem enviado por você.

### Fim

Feche o plano com: "Me diga o que ajustar. Escrevo a peça quando você aprovar." (Na aprovação "direta" do §4, não feche assim: siga pra peça.)

---

## MÉTODO: Conferência antes de protocolar (conferencia-antes-de-protocolar)


Quando usar: Use quando o advogado disser "confere antes de eu protocolar", "tá bom pra protocolar?", "revisa essa peça" ou pedir pra checar uma peça antes de protocolar ou enviar. Roda também sozinha, sem perguntar, depois de toda peça redigida com peca-a-partir-da-ficha, e o resultado entra no resumo do chat. Lista toda citação e todo documento citado pra conferir na fonte, cruza a peça com a ficha do caso e, na contestação, com a inicial. Não reescreve a peça e não valida nada no lugar do advogado.


Quem assina a peça é o advogado. O seu trabalho é entregar a lista do que ele precisa olhar, e **não reescrever a peça**.

### O que entra

A peça e a ficha. Se a peça acabou de sair nesta conversa, use-a; senão, abra a mais recente na pasta do caso (Cowork) ou no Drive, junto com a `FICHA-DO-CASO.md`. Na contestação, a inicial também. Só peça arquivo sem pasta nem Drive.

### O que conferir

1. **Contestação contra a inicial (CPC, art. 341).** Liste cada fato alegado na inicial e aponte o parágrafo da contestação que o responde. Fato sem resposta é presumido verdadeiro: vira alerta e vai pro topo da tabela, antes de tudo.
2. **Documentos citados.** Liste todo documento que a peça cita ("doc. 01", "conforme o termo", "o protocolo do SAC") e marque **lido** (você abriu nesta conversa ou na ficha) ou **não lido** (só descrito pelo cliente ou pelo advogado). Documento não lido citado como "doc. N" é alerta grave: na peça, ele devia estar como `[JUNTAR: …]`.
3. **Citações.** Todo artigo de lei, súmula, tema de repetitivo ou de repercussão geral, julgado e doutrina. Para cada uma, informe:
   - como a citação está na peça;
   - onde conferir: planalto.gov.br pra lei federal; o site do STF, STJ, TST ou do tribunal local pra súmula e julgado;
   - a situação: "fornecida pelo advogado" ou **"gerada pela IA: conferir na fonte oficial"**. Se você tem busca na web e abriu a página, acrescente o endereço e escreva "página aberta pela IA; conferir número, teor e data mesmo assim". **Nunca escreva "conferida".**

   Na busca, pesquise só a citação (tribunal, número, termos da ementa). **Nunca inclua nome de parte nem fato do caso.** Julgado sem número completo, sem tribunal ou sem data vira alerta.
4. **Peça contra a ficha.** Nomes, datas, valores, número do processo e juízo. Cada divergência é uma linha.
5. **Pedidos contra a fundamentação.** Aponte pedido sem fundamento e fundamento que não vira pedido.
6. **Prazo.** Confira se a peça e a ficha trazem a mesma data de intimação e o mesmo prazo em dias. A conferência não valida vencimento: a contagem é do advogado, pela regra do rito e pelo calendário do tribunal.
7. **Dados pessoais além do necessário** (CPF, endereço, saúde, dados bancários) e menção indevida em processo com segredo de justiça.

### Saída

Uma tabela, **com o mais grave primeiro** (fato da inicial sem resposta e documento não lido no topo):

| # | Onde na peça | O que conferir | Onde | Situação |

Na coluna "Onde na peça", o tópico e as primeiras palavras do trecho, sem transcrever parágrafo. Na contestação, antes da tabela, uma linha: "Fatos da inicial: N; respondidos: X; sem resposta: [lista]".

Depois da tabela, uma linha: "Listados X itens. Todos exigem a sua checagem; Y foram gerados pela IA e são os mais arriscados."

Quando a conferência roda sozinha depois da peça, a tabela vai no arquivo de conferência e o resumo do chat leva a contagem e os itens mais graves (`peca-a-partir-da-ficha`, "Resumo no chat").

E feche com: "Corrigido o que apontei, lance o prazo (`gestao-de-prazos-e-intimacoes`); se o cliente precisa saber, o recado sai pela `comunicacao-com-cliente`."

---

## MÉTODO: Editar com IA (editar-com-ia)


Quando usar: Use quando a peça já existe e o advogado quer mexer nela ou entendê-la. Três modos: "Editar com IA" (ele cola um trecho ou aponta um tópico e pede gramática, clareza, estrutura, relevância ou voz), "Chat na peça" (pergunta sobre a peça anexada, "isso se sustenta?", "falta pedido?", sem alterar nada) e "Reescrita inteligente" (pede a mudança em linguagem natural, "troca a prescrição pela decadência", "tira a preliminar", e você mostra ANTES/DEPOIS de cada trecho e só aplica no .docx depois do "aplicar").


### Qual modo

- **Editar com IA:** melhorar a forma de um trecho ou tópico ("melhora esse parágrafo", "revisa a gramática do tópico II", "tá confuso").
- **Chat na peça:** pergunta sobre a peça. Pergunta vai pro Chat, mesmo que a resposta sugira mudança.
- **Reescrita inteligente:** ordem de mudar conteúdo, tese, pedido, fundamento ou estrutura.

Na dúvida entre os três, pergunte em uma linha qual ele quer.

### Entrada

- A peça: o `.docx` anexado, o arquivo na pasta do caso ou a peça gerada nesta conversa. Pro Editar com IA, o trecho colado basta.
- `ESTILO-DO-ESCRITORIO.md`: a régua é a voz dele, não a sua.
- Pro Chat e a Reescrita, a `FICHA-DO-CASO.md` e o `PLANO-<tipo>.md` do caso, se houver.

### Regras dos três modos

- Nada sai do chat sem o advogado: você não regrava arquivo sem "aplicar", não protocola e não envia.
- Fato, número, data, nome e referência (fl., ID, evento) não mudam sem pedido expresso.
- Citação literal (lei, julgado, depoimento, cláusula transcrita) não se reescreve. Se parecer errada, aponte.
- Julgado novo só com link aberto na página do tribunal; onde faltar, `[INSERIR JULGADO: tema, conferir]`.
- A voz do escritório vence a sua preferência: não "melhore" o que é o jeito dele de escrever.

### 1. Editar com IA

O advogado diz o foco. Sem foco, olhe os cinco, nesta ordem:

- **Gramática:** só erro de verdade (concordância, regência, crase, pontuação que muda sentido). Escolha do jeito de escrever não é erro.
- **Clareza:** frase que pede segunda leitura, sujeito longe do verbo, ambiguidade de quem fez o quê.
- **Estrutura:** ordem dos argumentos, parágrafo com duas ideias, conclusão antes da premissa.
- **Relevância:** trecho que não serve à tese do tópico. Aponte e sugira cortar; não corte sozinho.
- **Voz:** o que destoa do `ESTILO-DO-ESCRITORIO.md` (conectivo, tratamento, jeito de citar).

Saída:

```
EDITAR COM IA · [tópico ou trecho] · foco: [...]
1. [Clareza] Antes: "..."
   Depois: "..."
   Por quê: [uma linha]
2. [Relevância] "..." não sustenta a tese do tópico. Sugiro cortar.
...
Responda pelos números: aceitar, modificar (diga como) ou descartar.
```

Depois da resposta, aplique só o aceito e devolva o trecho final inteiro, pronto pra colar. Se a peça veio em `.docx`, ofereça gerar o arquivo atualizado (passo 6 da Reescrita).

### 2. Chat na peça

Leia a peça inteira e responda à pergunta, apontando o lugar (tópico, parágrafo, página). Não devolve a peça alterada, nem trecho reescrito sem pedido. Perguntas típicas: a preliminar se sustenta; há contradição entre fatos e pedidos; falta algum pedido; a tutela está fundamentada; o que o juiz pode estranhar; a peça bate com a ficha e com o plano.

Se a resposta pedir mudança, termine com: "Quer que eu mude isso? É uma Reescrita: te mostro antes e depois." Sem promessa de resultado e sem número de chance.

### 3. Reescrita inteligente

1. **Entenda o pedido.** Se for ambíguo, uma pergunta só.
2. **Ache todos os pontos afetados.** Trocar prescrição por decadência mexe na fundamentação, mas também na preliminar, nos pedidos, nos títulos dos tópicos e no fecho. Liste cada um.
3. **Mostre ANTES/DEPOIS** de cada trecho, com a localização:

```
REESCRITA · [o pedido, em uma linha]
1. Tópico II.1, 2º parágrafo
   ANTES: "..."
   DEPOIS: "..."
2. Pedidos, alínea "b"
   ANTES: "..."
   DEPOIS: "..."
Efeitos: [o que muda por tabela]
Diga "aplicar", "aplicar 1 e 2" ou o que ajustar.
```

4. **Efeitos por tabela:** pedido que cai, prova que deixa de servir, julgado que não cabe mais (sai da peça e da lista), contradição com peça anterior do caso, instituto com regra própria que o advogado precisa conferir. Se a mudança troca o eixo da defesa do plano, diga isso antes.
5. **Espere o "aplicar".** Sem ele, nada muda no arquivo. Ajuste pedido volta ao passo 3 só nos itens ajustados.
6. **Aplique no .docx** com a ferramenta de criação de arquivos: abra o arquivo dele, troque só os trechos aprovados preservando timbrado, formatação, numeração e negrito (`timbrado-e-formatacao.md`), e salve com o mesmo nome e o sufixo `-rev1`, `-rev2`, pra ele não perder a versão anterior. Reabra o arquivo salvo e confira que o ANTES sumiu e o DEPOIS está lá. Se o ambiente não criar arquivo, entregue cada DEPOIS com a localização, em texto limpo, sem marcação markdown (sem `**`, sem `#`), pra colar no Word.

No chat, depois de aplicar: o nome do arquivo e as mudanças em uma linha cada.

### Fim

Peça alterada volta pra conferência: "Mudou tese ou citação? Rode a `conferencia-antes-de-protocolar` antes de protocolar."

---

## MÉTODO: Peça a partir do seu modelo (peca-a-partir-do-seu-modelo)


Quando usar: Use quando o advogado anexar um .docx dele (contrato ou peça já feitos) e pedir um documento novo a partir daquele: "usa esse contrato pro cliente novo", "troca só os dados", "adapta esse modelo", "transforma essa prestação de serviços em parceria". Três modos, com estes nomes: "Só preciso alterar valores, datas e informações específicas" · "Adaptar para uma nova contratação" · "Transformar em outro tipo de contrato". O documento sai sobre o próprio .docx dele, com um quadro de revisão pra ele aceitar ou ajustar antes de usar.


Diferente da `modelos-do-escritorio`, que tira o jeito de escrever de várias peças, aqui é um arquivo só, que ele escolheu, virando o próximo documento. Contrato do zero é a `contrato-a-partir-do-briefing`; peça de um caso com fatos novos é a `peca-a-partir-da-ficha`, que pode usar este .docx como modelo do dia.

### Entrada

- O `.docx` anexado ou apontado na pasta. PDF escaneado ou imagem: peça o `.docx`; se não houver, avise que a formatação original se perde.
- O modo. Se o pedido não deixar claro, pergunte em uma linha, com as três opções ao pé da letra:
  1. Só preciso alterar valores, datas e informações específicas
  2. Adaptar para uma nova contratação
  3. Transformar em outro tipo de contrato
- Perfil do escritório e `ESTILO-DO-ESCRITORIO.md`, pra qualquer texto novo sair na voz dele.

Peça processual só usa o modo 1 (trocar partes, datas, valores). Se mudam fatos ou tese, é peça nova: `peca-a-partir-da-ficha`, com plano.

### Modo 1: Só preciso alterar valores, datas e informações específicas

1. Leia o documento e liste os campos variáveis que encontrou: partes e qualificação, valores (numeral e extenso), datas, prazos, endereço, objeto específico, índice, conta, número de processo.
2. Mostre a tabela e peça os valores novos **numa mensagem só**:

```
Campo · No modelo · Novo
Contratante · [iniciais] · ?
Valor mensal · R$ [...] ([extenso]) · ?
Início · [data] · ?
```

3. O que ele não informar vira `[DEFINIR: …]`. Nenhuma cláusula muda.
4. Ao trocar, acerte o que vai junto: valor por extenso igual ao numeral, gênero e número (o LOCATÁRIO / a LOCATÁRIA, os CONTRATANTES), datas coerentes entre si (início, vigência, vencimentos).
5. **Varredura do cliente anterior:** depois de trocar, procure no documento inteiro qualquer resto do outro cliente: nome, apelido, CPF, endereço, número de processo, e também no cabeçalho, no rodapé e nas assinaturas. Resto encontrado vai no quadro de revisão. É o erro mais caro deste modo.

### Modo 2: Adaptar para uma nova contratação

O mesmo tipo de contrato, contexto novo: outras partes, outro objeto, outras condições.

1. Tire do pedido o que mudou. Pergunte numa mensagem só o que faltar: lado do cliente, objeto, preço e pagamento, prazo, o que o cliente quer evitar, se há consumidor ou dado pessoal.
2. Mantenha estrutura, numeração, cláusulas gerais e a redação dele. Reescreva só as cláusulas que dependem do contexto novo; acrescente as que o contexto pede e retire as que não servem mais.
3. Relação de consumo: confira cada cláusula contra o art. 51 do CDC. Dado pessoal circulando: cláusula de proteção de dados. Os dois alertas vão no quadro.

### Modo 3: Transformar em outro tipo de contrato

1. Confirme o tipo de destino e o lado do cliente.
2. Aproveite do original a forma (timbre, fontes, numeração, qualificação, foro, notificações, confidencialidade) e a voz. O núcleo é reescrito com as cláusulas essenciais do tipo novo (lista na `contrato-a-partir-do-briefing`).
3. Cláusula do tipo antigo que não cabe no novo sai, e o quadro diz qual e por quê.
4. Aponte exigência de forma do tipo novo (escritura pública, registro, testemunhas pra título executivo) e artigo em dúvida com `[conferir artigo]`. Nunca escreva que o contrato "está de acordo com a lei".

### Montagem do arquivo

Gere o documento sobre o `.docx` dele, com a ferramenta de criação de arquivos, preservando timbrado, formatação e numeração (`timbrado-e-formatacao.md`). Marcas `[DEFINIR]` e `[conferir]` com realce amarelo. Nome: o tipo, o cliente em iniciais e a data, com `-revisar` no fim até ele aceitar. Nada de dado do cliente anterior guardado em `MODELOS/`.

O documento vai no arquivo; não cole o documento no chat. Se o ambiente não gerar .docx, diga em uma linha como ligar (Settings › Capabilities) e aí, sim, entregue o documento inteiro no chat, em texto limpo, **sem marcação markdown** (sem `**`, sem `#`, sem `>`), pronto pra colar no Word (a formatação original do .docx dele se perde: avise).

### Revisão antes de aceitar

No chat, junto com o arquivo, o quadro de revisão é o resumo: até 8 linhas, uma por campo (várias alterações na mesma linha, separadas por ponto e vírgula):

```
MODO: [nome do modo]
Alterado: [cláusula · antes em uma linha · depois em uma linha]
Acrescentado: [cláusula · motivo]
Retirado: [cláusula · motivo]
Resto do cliente anterior: [onde] ou "nenhum encontrado"
Pendências: [DEFINIR: …]
Alertas: [consumo, dados pessoais, forma exigida]
```

O documento só está pronto quando ele disser "aceito". Ajuste pedido segue pela Reescrita inteligente (`editar-com-ia.md`), com ANTES/DEPOIS. Aceito, gere o arquivo sem o `-revisar`.

### Fim

"É rascunho seu pra revisar. Quem assina e envia é você. Quer uma segunda leitura do contrato? Rode o `auditor-de-contratos` indicando o lado do seu cliente."

---

## MÉTODO: Parecer e minuta (parecer-e-minuta)


Quando usar: Use quando o advogado pedir parecer jurídico ou resposta formal a uma consulta ("o cliente quer saber se pode…"), ou minuta de documento simples: requerimento administrativo, declaração, termo (acordo, quitação, ciência, compromisso), e-mail ou carta formal. Escreve na voz do escritório, lendo o ESTILO-DO-ESCRITORIO e o modelo em MODELOS antes, com julgado só na marca [INSERIR JULGADO]. Petição, recurso e notificação de um caso vão pela peca-a-partir-da-ficha; contrato, pela contrato-a-partir-do-briefing.


### Quando cabe

- **Parecer:** consulta de cliente ou de colega que pede resposta fundamentada, antes ou fora do processo.
- **Minuta:** documento curto que não é peça processual: requerimento a órgão público, declaração, termo, e-mail ou carta formal.
- Peça num processo ou notificação: use a peca-a-partir-da-ficha. Contrato: contrato-a-partir-do-briefing. Procuração, contrato de honorários e declaração de hipossuficiência de caso novo: use a documentos-procuracao-e-honorarios.

### O que entra

- **Voz, antes de tudo:** perfil do escritório (instruções do projeto), `ESTILO-DO-ESCRITORIO.md` e o modelo mais próximo em `MODELOS/` (`parecer.md`, `requerimento.md`, `email-formal.md`). Sem modelo do tipo, busque na pasta conectada ou no Drive o documento mais recente desse tipo e use como modelo do dia, anonimizando o que for de cliente e avisando. Sem nenhum, diga que sai no formato do perfil, sem a voz.
- **Parecer:** a consulta nas palavras de quem pergunta, os fatos informados e os documentos. Se a consulta nasce de um processo com ficha, use a `FICHA-DO-CASO.md` da pasta do caso.
- **Minuta:** quem assina, pra quem vai, o que precisa dizer.

### Regras

- **Roteiro antes do parecer:** as questões como vai formulá-las e a conclusão provisória, em até 8 linhas, e espere o ok. Minuta de uma página vai direto, e roda bem no modelo leve.
- **Fatos, só os informados.** O parecer parte deles e não os apura: "conforme informado pelo consulente". Fato que muda a conclusão e não veio vira pergunta, não suposição.
- **Uma questão, uma resposta.** Cada questão tem resposta objetiva na conclusão: sim, não, ou depende de quê.
- **Lei pelo número,** só com certeza do dispositivo; na dúvida, `[conferir artigo]`. Doutrina, só a que o advogado forneceu.
- **Jurisprudência:** a fornecida pelo advogado ou a da pesquisa-jurisprudencial, com link. Fora isso, `[INSERIR JULGADO: tema, conferir]`. Nunca de memória.
- **Sem promessa:** o parecer diz o que a norma e os fatos sustentam e onde está o risco. Não garante resultado.
- **Campos pessoais na minuta** (CPF, RG, endereço, dados bancários) ficam `[CPF]`, `[ENDEREÇO]`, mesmo que o dado esteja na conversa. O advogado preenche fora da IA.
- **Correção só no trecho,** dizendo onde ele entra.

### Formato fixo

```
PARECER
Consulente: [nome, ou iniciais se houver dado sensível] · Assunto: [uma linha] · Data: [data]

1. Consulta: [a pergunta, como feita]
2. Fatos: [os informados, com a origem de cada documento]
3. Questões: [1 a 4, numeradas]
4. Análise: [por questão: norma, fatos, entendimento, risco]
5. Conclusão: [resposta a cada questão, na mesma ordem]
Ressalva: parecer baseado nos fatos e documentos informados até [data].
[local, data, fecho e assinatura como nos modelos do escritório]
```

```
MINUTA: [tipo]
Destinatário: [...] · Assina: [...]
[corpo no modelo do escritório, campos a preencher entre colchetes]
Campos a preencher: [lista]
```

### Entrega em Word

O parecer ou a minuta vai **no arquivo .docx pra baixar e editar**, gerado com a ferramenta de criação de arquivos e montado pelo `timbrado-e-formatacao.md` (timbrado, ou `.docx` de modelo do mesmo tipo, ou documento limpo). Não cole o documento no chat. No chat vai um resumo de até 8 linhas: o que fez, de onde tirou os fatos, o que ficou `[DEFINIR]` ou `[INSERIR JULGADO]`. Se o ambiente não gerar .docx, diga em uma linha como ligar (Settings › Capabilities) e aí, sim, entregue o documento inteiro no chat, em texto limpo, **sem marcação markdown** (sem `**`, sem `#`, sem `>`), pronto pra colar no Word.

### No fim

Diga ao advogado: "Antes de enviar ou protocolar, rode a conferência: ela lista cada citação e cada [INSERIR JULGADO] pra você checar na fonte. Os campos entre colchetes são seus, e quem assina é você."

