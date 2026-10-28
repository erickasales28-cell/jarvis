# Advoclaude · Caso

Este arquivo reúne 4 métodos. Cada um começa num título "MÉTODO:". Leia só o método do pedido, inteiro.

Índice
- MÉTODO: Ficha do caso (ficha-do-caso): "lê isso", processo ou documento do caso, caso sem ficha, documento novo → FICHA-DO-CASO de 2 páginas
- MÉTODO: Cronologia processual (cronologia-processual): "linha do tempo", "a ordem dos fatos", histórico do processo → cronologia com referência
- MÉTODO: Resumo de decisão (resumo-de-decisao): "saiu a sentença", "o que o juiz decidiu", "resume o acórdão", "dá pra recorrer?" → resumo executivo
- MÉTODO: Áudio vira registro (audio-vira-registro): áudio ou transcrição do cliente, "organiza esse áudio" → relato por pessoa, fato e pedido

Neste kit, "Drive conectado" é o app do Google Drive ligado ao ChatGPT; "arquivos do Projeto" são os arquivos que o advogado subiu no Projeto do ChatGPT. Você não grava sozinho nos arquivos de um Projeto nem no Drive: gere o arquivo pra ele baixar e salvar.

---

## MÉTODO: Ficha do caso (ficha-do-caso)


Também atende por: Revisar e resumir documentos (o resumo com riscos e fraquezas sai nas seções 9 e 10 da ficha).

Quando usar: Use quando o advogado enviar processo, petição, decisão, contrato ou documentos de um caso e pedir resumo, análise ou "lê isso", e sempre que for começar trabalho num caso que ainda não tem ficha. Gera a ficha do caso, de até duas páginas, que substitui o documento inteiro nas próximas conversas. Use também pra atualizar a ficha quando chegar documento novo.

## Ficha do caso

O documento inteiro é lido **uma vez**, e a partir daí o trabalho usa só a ficha. É isso que poupa o limite: nas próximas conversas vão duas páginas, não trezentas.

### De onde vem o processo

Se a pasta do escritório está conectada (Cowork) ou o Drive está ligado, você mesmo abre o processo: pelo número ou pelo nome do cliente (pergunte só se ele não disse), localize a pasta do caso e leia os arquivos de lá, do mais antigo pro mais novo. Só peça o PDF na conversa quando não houver pasta conectada.

### Módulo da área

Se o perfil do escritório lista um módulo de área (`area-…`), abra-o antes de montar a ficha: a seção 9 dele diz que campos a mais a ficha desta área leva (no previdenciário, o requerimento administrativo e o CNIS; no penal, a situação prisional; no trabalhista, o rito e o valor da causa) e que dado sensível é típico dela.

### Regras

- **Só entra o que está no documento.** Cada fato leva a referência de onde está (página, ID ou evento). Se não achou, escreva "não consta". Não complete com suposição.
- **Documento que você não leu não é fonte.** Se o cliente ou o advogado só descreveu um documento (no e-mail, na nota, no áudio) e você não o abriu, o fato entra com "segundo o cliente" e o documento entra como `[JUNTAR: <o que o cliente disse que o doc. prova>]`, nunca como "doc. N". Na lista "Documentos lidos" do topo vai só o que você abriu.
- **Copie exatamente** datas, valores, nomes e números de processo.
- **Segredo de justiça:** se o documento indicar sigilo, avise antes de resumir: "este processo corre em segredo de justiça; confirme que esta conta é o lugar certo". Na ficha, as pessoas entram por iniciais e o topo leva "SEGREDO DE JUSTIÇA".
- **Dados pessoais, só o necessário:**
  - O nome das partes entra, salvo quando a ficha traz dado de saúde, orientação sexual, religião, origem racial ou dado de criança. Nesses casos, as pessoas entram por iniciais e o topo leva "DADO SENSÍVEL".
  - CPF, RG, endereço, telefone, e-mail e dados bancários não entram: escreva "consta nos autos, fl. X".
  - Dado de saúde entra só na conclusão que decide o caso ("laudo conclui incapacidade total desde 03/2024"), sem CID, sem histórico e sem nome de médico.
  - Testemunha entra por iniciais.
- **Prazo:** registre só o que o documento traz: a data e o meio da intimação (DJEN, Domicílio Judicial Eletrônico, intimação pessoal ou publicação), o prazo em dias e o rito (cível, trabalhista, penal, juizado ou administrativo). **Não calcule vencimento:** quem conta é o advogado, pelo rito e pelo calendário do tribunal.

### Formato fixo

```
## Ficha do caso: [apelido curto]
Atualizada em: [data] · Documentos lidos: [lista] · Descritos e não lidos: [lista ou "nenhum"]

1. Identificação: nº do processo, juízo, classe, fase, valor da causa
2. Partes e advogados (marque quem o escritório representa)
3. Pedidos
4. Linha do tempo: uma linha por fato, com a referência
5. Tese de cada lado (2 a 4 linhas cada)
6. Provas: o que tem, onde está, o que falta ([JUNTAR] no que só foi descrito)
7. Decisões até aqui: data, o que decidiu, referência
8. Prazos: data e meio da intimação, prazo em dias, rito
9. Pontos de atenção: contradições, riscos, documento faltando
10. A conferir: o que ficou em dúvida na leitura (página ilegível, data que não bate)
```

**Limite de duas páginas** (cerca de 900 palavras). Se o caso não couber, aperte o resumo. Não estenda a ficha.

### Sem burocracia

A ficha é trabalho seu, não do advogado. Ele não precisa saber que ela existe: pediu "lê o processo" ou "faz a contestação", você lê, grava a ficha (na pasta do caso, se houver; senão como arquivo `.md` pra ele salvar no projeto com um clique) e segue pro que ele pediu, na mesma conversa. Nunca peça pra ele "montar a ficha primeiro" como etapa separada; nunca explique o mecanismo, a não ser que ele pergunte.

### Depois de entregar

Com a pasta conectada (Cowork), grave a ficha como `FICHA-DO-CASO.md` na pasta do caso: é lá que as outras skills do kit vão buscá-la.

**Quando a ficha foi passo de outro pedido** (a peça, o risco, a audiência), nada desta seção vai pro chat: grave e siga pro pedido. **Quando a ficha foi o pedido** ("lê isso", "resume o processo"), sem a pasta, diga: "Salve esta ficha como arquivo do caso e, nas próximas conversas, anexe a ficha em vez do processo." E feche com uma linha: "Próximo passo: a peça (`peca-a-partir-da-ficha`), a cronologia, a análise de risco ou o prazo."

**Atualização:** quando chegar documento novo, leia só ele e devolva a ficha atualizada, com a data nova. Não releia o processo inteiro.

---

## MÉTODO: Cronologia processual (cronologia-processual)


Quando usar: Use quando o advogado pedir linha do tempo, cronologia, "a ordem dos fatos" ou o histórico de um processo, ou quando uma peça depender dos fatos em ordem. Monta a cronologia a partir da FICHA DO CASO ou dos autos, uma linha por evento datado com a referência (fl., ID ou evento), marca o que pesa, aponta lacuna e data que não bate, e entrega em tabela e, quando é pra peça, em texto corrido pronto pra colar, na voz do escritório.


A ficha do caso traz uma linha do tempo curta. Esta é a completa: todo evento datado, em ordem, com a página onde está, pra achar o buraco antes que o outro lado ache.

### Quando cabe

Antes de inicial, contestação, réplica, recurso ou memoriais em que a narrativa depende da ordem dos fatos; em processo longo; quando o escritório assumiu o caso no meio.

### O que entra

- **Fonte:** o padrão é a ficha (`FICHA-DO-CASO.md` na pasta do caso). Os autos só quando ele pedir a completa: com a pasta conectada (Cowork) ou o Drive ligado, abra você mesmo os arquivos do caso, do mais antigo pro mais novo, e leia o que tem data e fato (petições, decisões, certidões, documentos), sem reler anexo repetido. Sem pasta, peça o PDF. Se a leitura mudar algo na ficha, diga.
- **Fato de fora do processo** (contrato, e-mail, conversa) entra se o advogado mandar, com a origem: "doc. do cliente, não juntado".
- **Voz:** perfil do escritório (instruções do projeto) e, pro texto corrido, `ESTILO-DO-ESCRITORIO.md` e o modelo do tipo de peça em `MODELOS/`: como ele chama as partes e como cita fl. ou ID.

### Regras

- **Uma linha, um evento, uma data,** copiada como está. Data aproximada vai marcada `~` ("~ início de 2023") e nunca vira dia inventado.
- **Toda linha com referência.** Sem referência, a linha não entra na tabela: vai pra "A conferir".
- **Data do fato não é data da juntada.** Registre a do fato e cite onde o documento foi juntado.
- **Marcas:** `[DECISÃO]` decisão, sentença ou acórdão · `[INTIMAÇÃO]` citação ou intimação, com o meio · `[PROVA]` documento, perícia ou depoimento que sustenta uma tese · `[CONTROVERSO]` fato ou data que o outro lado nega · `[MARCO]` fato que pode abrir ou fechar prazo de direito material (prescrição, decadência, vencimento). A marca é só sinal: quem conclui é o advogado.
- **Lacuna:** o que devia existir entre dois eventos e não aparece. Citação sem comprovante juntado, decisão sem intimação registrada, documento mencionado e não juntado, meses sem movimento.
- **Datas que não batem:** a mesma data diferente em dois documentos, evento que vem antes daquilo de que depende, data da peça contrária diferente da do documento. Cada uma vira linha em "A conferir", com as duas referências.
- **Prazo:** data e meio da intimação e prazo em dias, como o documento traz. Não calcule vencimento nem prescrição.
- **Dados pessoais:** as regras da ficha (iniciais em dado sensível e em segredo de justiça; sem CPF, endereço ou dados bancários).

### Formato fixo

```
## Cronologia: [apelido do caso]
Fonte: [ficha de dd/mm/aaaa | autos até fl./ID X] · Montada em: [data]

| Data | Evento | Ref. | Marca |
|---|---|---|---|

### Lacunas
- [entre que eventos · o que falta · onde procurar]

### A conferir
- [fato ou data · ref. A x ref. B]

### Texto corrido (pra colar na peça)
[parágrafos em ordem, com o tratamento e o jeito de citar do escritório]
```

O texto corrido só sai quando a cronologia é pra uma peça; sem isso, a tabela basta. É narrativa: não adjetiva nem argumenta. A tese vem na peça, e o advogado corta o que não serve.

### No fim

Diga ao advogado: "Confira nos autos as linhas marcadas [MARCO] e [INTIMAÇÃO]: são elas que decidem prazo e prescrição, e a contagem é sua. Atualizo a linha do tempo da ficha? A peça sai pela `peca-a-partir-da-ficha` com esta cronologia."

---

## MÉTODO: Resumo de decisão (resumo-de-decisao)


Quando usar: Use quando o advogado colar ou apontar uma decisão, sentença ou acórdão, ou disser "saiu a sentença", "o que o juiz decidiu", "resume o acórdão", "dá pra recorrer?", ou pedir fichamento. Devolve o resumo executivo: dispositivo transcrito, fundamentos, o que foi acolhido e rejeitado pedido a pedido, ônus e prazos como constam, pontos atacáveis e o que muda pro cliente. Não calcula prazo e não decide se recorre.


A decisão é lida uma vez e vira uma página que responde três perguntas: o que foi decidido, por quê, e onde dá pra atacar.

### Quando cabe

Chegou decisão, sentença ou acórdão e o advogado precisa escolher o próximo passo; antes de recurso ou contrarrazões; pra atualizar o item 7 da ficha do caso.

### O que entra

- **A decisão inteira.** Com a pasta conectada (Cowork) ou o Drive ligado, abra você a mais recente na pasta do caso; só peça o arquivo sem pasta. No acórdão: ementa, voto do relator e voto divergente, se houver. Se só achou a ementa, diga que o resumo é da ementa e procure o inteiro teor.
- **A ficha do caso** (`FICHA-DO-CASO.md` na pasta do caso), se existir, pra conferir pedido por pedido.
- **Perfil do escritório** (instruções do projeto): o tom de cliente dele vale pra seção 8.

### Regras

- **Dispositivo ao pé da letra.** Transcreva; não resuma.
- **Pedido a pedido:** acolhido, rejeitado, acolhido em parte ou não apreciado. Pedido da ficha que a decisão não enfrentou é sinal de omissão.
- **Ônus como constam:** custas, honorários (percentual e base como escritos), multa, obrigação de fazer, tutela concedida, mantida ou revogada, gratuidade. O que a decisão não fixou fica "não consta". Não calcule valor.
- **Prazos:** só os que a decisão fixa ("cumprir em 15 dias") e a data e o meio da intimação, se vierem. Prazo de recurso não é calculado nem vira data: o advogado conta pelo rito e pelo calendário do tribunal.
- **Pontos atacáveis,** sempre com o trecho e a referência, em três grupos:
  1. vício de embargos: omissão, contradição, obscuridade ou erro material (CPC, art. 1.022);
  2. erro de julgamento: fundamento que contraria prova dos autos, a ficha ou a própria norma citada;
  3. erro de procedimento: prova indeferida, cerceamento de defesa, decisão fora ou além do pedido.
  Pode indicar o recurso que em tese cabe, marcado "a conferir". Se recorre, e com qual, é decisão do advogado.
- **Acórdão:** registre a votação (unânime ou por maioria) e resuma o voto vencido, que pode mudar o caminho.
- **Julgados e súmulas citados pela decisão:** liste como estão, sem conferir e sem completar dado que falta.
- **Dados pessoais:** as regras da ficha.

### Formato fixo

```
## Resumo: [decisão | sentença | acórdão] de [data] · [apelido do caso]
Ref.: [fl./ID] · Órgão: [juízo ou turma/câmara, relator] · Intimação: [data e meio, se consta]

1. Dispositivo (transcrito)
2. Pedido a pedido
   | Pedido | Resultado | Fundamento em uma linha | Ref. |
3. Fundamentos centrais (3 a 6 tópicos)
4. Ônus e obrigações (como constam)
5. Prazos fixados na decisão (como constam)
6. Pontos atacáveis
   | Grupo | Trecho | Por quê | Ref. |
7. Julgados e súmulas citados pela decisão (sem conferência)
8. O que muda pro cliente (até 3 linhas, sem juridiquês, sem prognóstico)
```

### No fim

Diga ao advogado: "O prazo do recurso é seu: conte a partir da intimação, pelo rito e pelo calendário do tribunal. Se for recorrer, a peça sai pela peca-a-partir-da-ficha com este resumo e a ficha; a mensagem ao cliente, pela comunicacao-com-cliente. Quer que eu atualize o item 7 da ficha?"

---

## MÉTODO: Áudio vira registro (audio-vira-registro)


Quando usar: Use quando o advogado anexar um áudio do cliente, da reunião ou da audiência, ou colar a transcrição de um áudio (relato de caso, atualização, dúvida) e disser "transcreve esse áudio", "organiza esse áudio", "o que o cliente falou?", "põe isso em ordem" ou pedir pra resumir ou virar anotação. Transforma fala solta em relato cronológico, separado por pessoa, fato e pedido, pronto para entrar na ficha do caso.


O cliente fala como fala: solto, fora de ordem, misturando fato com opinião. Esta skill organiza sem inventar nada além do que foi dito.

### Transcrição de áudio (primeira etapa)

Se o áudio veio anexado e abriu nesta conversa, transcreva antes de organizar:

- **Texto bruto:** sem resumo e sem corrigir o que foi dito. Linha nova a cada troca de quem fala, com "Pessoa 1:", "Pessoa 2:" na ordem em que aparecem. Se o advogado disser quem é quem, troque pelo papel ("Cliente:", "Advogado:").
- Trecho incompreensível (corte, ruído, fala sobreposta): "[trecho inaudível]" no lugar. Não complete por dedução.
- **Entregue a transcrição primeiro** (no chat se o áudio é curto; como arquivo `TRANSCRICAO-[data].md` se é reunião ou audiência) e em seguida o registro organizado abaixo. Se ele pediu só a transcrição ("transcreve esse áudio"), pare nela e ofereça o registro em uma linha.

Se o áudio não abriu (o Claude nem sempre aceita arquivo de áudio), diga em uma linha como transcrever no celular e colar: no WhatsApp, segurar o áudio e tocar em Transcrever; gravação de reunião, pelo gravador do celular com transcrição ou pelo Transcrever do Word na web. Transcrição já colada pelo advogado: trabalhe em cima dela.

### Regras

- **Fato e opinião não se misturam.** "Ele me xingou na frente de todo mundo" é fato relatado; "acho que ele fez isso porque tem raiva de mim" é opinião do cliente: vai só pra seção de opinião, não pro relato.
- **Datas e valores como o cliente disse**, nunca corrigidos ou calculados por você. Se disse "uns três meses atrás", registre assim, com a nota "(data aproximada, segundo o cliente)". Não converta para data do calendário.
- **Cada pessoa citada entra por papel** (ex.: "ex-marido", "gerente da loja", "colega de trabalho"), com o nome só se o cliente o deu claramente.
- **Dado pessoal só o necessário para o relato.** CPF, endereço completo, dado bancário do cliente ou de terceiro não entram no registro, salvo se forem o próprio fato relatado (ex.: número de conta usado num golpe).
- **Dado sensível** (saúde, orientação sexual, religião, raça, dado de criança): registre só o que for necessário para entender o pedido, sem detalhe desnecessário.
- **O que o cliente quer** é uma seção própria — não misture com o relato. Às vezes o cliente não diz claramente o que quer; nesse caso escreva "não ficou claro no áudio, perguntar".
- **O que falta perguntar** nasce das lacunas reais do relato (datas que faltam, documento mencionado mas não descrito, nome que não foi dito).

### Formato fixo

```
## Registro do relato — [cliente ou apelido do caso] — [data da transcrição]

### Relato em ordem cronológica
- [data/período, como o cliente disse]: [fato]
- ...

### Pessoas citadas
- [papel]: [nome, se dito] — [o que fez/disse, segundo o cliente]

### O que o cliente quer
[um ou dois pedidos objetivos]

### Documentos citados
- [documento] — [quem tem, se disse]

### O que falta perguntar
- ...

### Trechos de opinião (não são fato)
- "[frase]" — opinião do cliente sobre [assunto]
```

### Depois de entregar

Diga ao advogado: "Confira o registro contra o áudio antes de usar, principalmente datas aproximadas e trechos inaudíveis. Ele entra na ficha pela `ficha-do-caso`; os documentos citados viram lista pela `documentos-procuracao-e-honorarios`."

Roda bem no modelo leve.

