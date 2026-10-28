# Advoclaude · Escritório

Este arquivo reúne 6 métodos. Cada um começa num título "MÉTODO:". Leia só o método do pedido, inteiro.

Índice
- MÉTODO: Entrevista do escritório (entrevista-do-escritorio): "vamos começar", "monta/atualiza meu perfil", projeto sem perfil → perfil e módulo da área
- MÉTODO: Modelos do escritório (modelos-do-escritorio): "escreve do meu jeito", "usa minhas peças", sem MODELOS → guia de voz, trechos e modelos
- MÉTODO: Timbrado e formatação (timbrado-e-formatacao): fim de todo documento, "põe no timbrado", numeração dos parágrafos, "baixar em Word" → .docx
- MÉTODO: Banco de teses e trechos (banco-de-teses-e-trechos): "guarda essa tese", "salva esse trecho", "tira as teses das peças" → TESES-E-TRECHOS.md
- MÉTODO: Meus casos e documentos (meus-casos-e-documentos): "abre um caso", "onde guardo isso?", "acha aquela contestação", "segue o processo" → caso e arquivos
- MÉTODO: Anonimização para IA (anonimizacao-para-ia): "tira os dados", "anonimiza", "tarja" → documento sem dado pessoal e tabela de correspondência

Neste kit, "Drive conectado" é o app do Google Drive ligado ao ChatGPT; "arquivos do Projeto" são os arquivos que o advogado subiu no Projeto do ChatGPT. Você não grava sozinho nos arquivos de um Projeto nem no Drive: gere o arquivo pra ele baixar e salvar.

---

## MÉTODO: Entrevista do escritório (entrevista-do-escritorio)


Quando usar: Use quando o advogado disser "vamos configurar o escritório", "vamos começar", "monta meu perfil" ou "atualiza o perfil", ou quando o projeto ainda não tiver um PERFIL DO ESCRITÓRIO. Conduz uma entrevista curta, escolhe o módulo da área e gera o perfil que todas as outras skills do kit leem.


O resultado é um perfil de **uma página no máximo** (cerca de 400 palavras). Ele vai junto em toda conversa, então cada linha precisa mudar o trabalho. Se uma linha não muda nada, ela sai.

### Como conduzir

- **Comece pelas peças, não pelas perguntas.** Com a pasta conectada (Cowork) ou o Drive ligado, rode junto a `modelos-do-escritorio` e preencha sozinho o que as peças protocoladas já mostram: nome, cidade, OAB no fecho, áreas, tribunais, sistema, tratamento ao juízo, jeito de citar, fecho. Sem pasta nem Drive, a primeira pergunta é onde ficam as peças.
- **Depois, uma mensagem só** com o que as peças não responderam, em tópicos de resposta curta. O que ele não souber fica "a definir". Não pergunte o que você já leu.
- Não registre dado de cliente no perfil. O perfil é do escritório, não de um caso.

### O que o perfil precisa ter

1. **Quem** (as peças mostram quase tudo): nome do escritório, cidade e UF, quantas pessoas trabalham, e se o número da OAB entra no fecho das peças.
2. **Onde atua:** áreas em ordem de volume, justiça (estadual, federal, do trabalho), tribunais e sistemas (PJe, e-SAJ, eproc, Projudi). Pelas áreas, indique o **módulo da área**: o kit traz oito (`area-civel-consumidor-e-imobiliario`, `area-familia-e-sucessoes`, `area-trabalhista`, `area-previdenciario`, `area-penal`, `area-tributario`, `area-empresarial`, `area-eleitoral`). Ele instala o da área principal (mais de um, se atua em mais de uma) e o perfil ganha a linha `Módulos de área: area-…`. Toda skill que faz peça, prazo, pesquisa, risco, checklist ou audiência abre esse módulo antes de trabalhar. Área fora da lista: o de Cível cobre a base.
3. **Como escreve** (sai das peças, não se pergunta): tratamento ao juízo, grau de formalidade, tamanho típico da peça, se usa tópicos numerados, como cita jurisprudência (ementa, trecho ou só a referência) e o fecho padrão. Duas preferências entram sempre, em linha própria e com estas palavras exatas, porque a `timbrado-e-formatacao` as lê ao pé da letra: `Numeração de parágrafos: sim` (ou `não`) e `Destaques: negrito` (ou `sublinhado`, ou `nenhum`). Se as peças não mostram, pergunte as duas.
4. **O que nunca fazer:** expressões que o escritório não usa, teses que não sustenta, cuidados próprios da casa.
5. **Com o cliente:** o canal (WhatsApp, e-mail), se trata por você ou por senhor(a), o tamanho das mensagens, e se o contrato de honorários já avisa o cliente sobre o uso de IA. Se ainda não avisa, o perfil anota: "incluir cláusula de IA no contrato".

### Saída

Entregue o arquivo `PERFIL-DO-ESCRITORIO.md` neste formato, em tópicos curtos:

```
## Perfil do escritório: [nome]
### Quem somos
### Onde atuamos
Módulos de área: area-…
### Como escrevemos
Numeração de parágrafos: sim
Destaques: negrito
[demais linhas: tratamento ao juízo, abertura, fecho, como cita]
### Nunca fazemos
### Com o cliente
```

Depois, diga ao advogado onde colar o perfil:
- **Claude:** nas instruções do projeto ("Instruções do projeto"), pra valer em toda conversa daquele projeto.
- **ChatGPT:** no campo de instruções do GPT do escritório ou do Projeto.

**Mais de um advogado no escritório:** no plano Team do Claude, o projeto "Escritório" e os projetos de caso podem ser compartilhados com a equipe. O perfil nas instruções, o timbrado, os modelos e o `TESES-E-TRECHOS.md` nos arquivos passam a valer pra todos, e a peça sai com a mesma cara qualquer que seja quem escreve. Cada advogado liga o Advoclaude na própria conta. Combine uma pessoa só pra editar o perfil e o banco de teses, pra não nascerem duas versões. Caso em segredo de justiça se compartilha só com quem atua nele.

Feche com duas linhas: "Quando algo mudar, edite o perfil em vez de explicar na conversa. Primeiro caso? Me diga o número ou o nome do cliente que eu faço a ficha (`ficha-do-caso`)."

---

## MÉTODO: Modelos do escritório (modelos-do-escritorio)


Quando usar: Use quando o advogado disser "escreve do meu jeito", "usa minhas peças como base", "monta meus modelos", apontar a pasta ou o Drive onde guarda as peças, ou quando o projeto ainda não tiver a pasta MODELOS. Busca sozinha as peças do escritório na pasta conectada (Cowork), no Google Drive ou nos arquivos do projeto, tira delas o guia de estilo, os trechos de forma (no `TESES-E-TRECHOS.md`) e um modelo anonimizado por tipo de peça, que a skill de peça usa como base. Use também pra atualizar os modelos quando houver peça nova protocolada.


A peça boa sai com a cara de quem assina. O perfil diz como o escritório escreve em tópicos; os modelos mostram. Esta skill transforma de 3 a 5 peças reais do advogado em três coisas que toda peça nova lê antes de nascer: o **guia de estilo**, os **trechos de forma** e um **modelo por tipo de peça**.

### Onde estão as peças: você busca, o advogado não cola

O advogado não precisa mandar peça no chat. Com pasta conectada ou Drive ligado, procure você; pergunte onde ele guarda as peças só se não achar. Nesta ordem:

1. **Pasta do computador (Claude Cowork, no aplicativo de desktop):** ele conecta a pasta "Peças" (ou a raiz onde ficam os processos) e você lista os arquivos dela. Prefira esta, porque você também consegue ler o processo e as peças anteriores de cada caso na hora de escrever.
2. **Google Drive (conector do Claude ou do ChatGPT):** busque na pasta que ele indicar por tipo de peça ("contestação", "petição inicial", "apelação", "réplica") e por data.
3. **Arquivos do projeto ou do Conhecimento do GPT:** se ele já subiu peças lá, leia de lá.
4. Só se nenhuma das três existir, peça que ele anexe de 3 a 5 arquivos na conversa.

Regras da busca:
- **Peça protocolada vale mais que rascunho.** Prefira os arquivos finais (nome com "protocolada", "final", "v-final", ou a versão mais recente de cada caso).
- **Uma peça por tipo, a mais recente protocolada, até 5 tipos** (de 3 a 5 peças no total; se ele só tem um tipo, pegue duas desse). O estilo sai do que se repete entre elas: ler mais não muda o padrão e gasta o limite. Não pare pra aprovar a lista; diga na entrega quais usou (tipo e data, sem nome de cliente) e troque se ele pedir.
- **Processo em segredo de justiça fica fora.** Se o nome do arquivo ou o texto indicar sigilo, avise e não use.
- Se a pasta ou o Drive tiverem coisa de cliente que não é peça (contratos, documentos pessoais, laudos), não abra: só o que for petição, recurso, parecer, notificação ou contrato-modelo do escritório.

### Antes de ler: anonimizar

Antes de extrair qualquer coisa, tarje o que identifica gente: nome das partes e de terceiros viram iniciais, CPF, RG, endereço, telefone, e-mail, conta e número de processo viram `[...]`. Nome do advogado, do escritório e OAB ficam, porque são dele. Se a peça trouxer dado de saúde, orientação, religião, origem racial ou criança, avise o advogado e tarje também o trecho. O modelo guardado nunca leva dado de cliente.

### O que extrair

#### 1. `ESTILO-DO-ESCRITORIO.md` (até 2 páginas)

Só o que se repete em duas ou mais peças. O que aparece numa só é caso, não estilo.

```
## Estilo do escritório: [nome]
Fonte: [tipos das peças lidas, sem nomes] · atualizado em [data]

### Estrutura que ele usa
- [ordem dos tópicos por tipo de peça; numeração; títulos que usa, ao pé da letra]
### Como abre e como fecha
- [as primeiras linhas típicas de cada tipo; o fecho, ao pé da letra]
### Como argumenta
- [a sequência: fato → norma → jurisprudência → conclusão? ou outra; onde põe a tese principal; quanto de fato antes do direito]
### Como cita
- [lei: só o número, ou transcreve? jurisprudência: ementa curta, trecho, só referência? formato exato de uma citação dele]
### Frases e conectivos dele
- [10 a 20 expressões que ele usa de verdade, ao pé da letra: "cumpre esclarecer", "não prospera", "de rigor", o que for]
### O que ele nunca faz
- [o que não aparece em nenhuma peça: latim, adjetivo contra a parte, pedido genérico]
### Tamanho
- [páginas e número de tópicos por tipo]
```

#### 2. Trechos de forma, no `TESES-E-TRECHOS.md`

Parágrafos que se repetem de peça em peça e podem ser reaproveitados com ajuste mínimo, já anonimizados, cada um com um título e o tipo de peça onde cabe: preliminares que ele sempre argui, o pedido de gratuidade, a fundamentação do dano moral, a impugnação de documento, o pedido de inversão do ônus, o fecho. De 5 a 15 trechos. Nada de tese que dependa do caso. Vão na seção "Trechos de forma" do `TESES-E-TRECHOS.md` (o arquivo único do escritório pra tudo que se reaproveita, formato na `banco-de-teses-e-trechos`); se o arquivo não existir, crie-o com esse formato.

#### 3. `MODELOS/<tipo-da-peca>.md`

Uma peça inteira e anonimizada por tipo (`inicial-consumo.md`, `contestacao.md`, `apelacao.md`...), com os trechos que mudam por caso marcados assim: `[FATOS DO CASO]`, `[PEDIDO PRINCIPAL]`, `[JULGADO]`. Se vierem duas peças do mesmo tipo, escolha a mais completa e diga qual escolheu. O modelo é esqueleto e voz; o conteúdo vem sempre da ficha do caso.

### Onde guardar

- **Claude:** os três vão nos **arquivos do projeto** "Escritório". Como estão anonimizados, podem ficar lá; ficha de caso e processo ficam no Projeto do CASO (um por caso, ver `meus-casos-e-documentos.md`), nunca no projeto "Escritório".
- **ChatGPT:** vão em **Conhecimento** do GPT do escritório, com o compartilhamento em "Somente eu". Peça e ficha de caso continuam fora do Conhecimento.
- Nas instruções (perfil), acrescente a linha: `Antes de qualquer peça, leia ESTILO-DO-ESCRITORIO.md e o modelo do mesmo tipo em MODELOS/.`

### Manter vivo

O advogado só precisa continuar salvando as peças protocoladas na mesma pasta. Quando ele disser "atualiza os modelos" (ou uma vez por mês, se ele pedir na rotina), busque o que entrou na pasta desde a data do `ESTILO-DO-ESCRITORIO.md`, confira se muda algo no estilo, acrescente trecho novo aos trechos de forma do `TESES-E-TRECHOS.md` e, se for de um tipo que ainda não tinha modelo, crie o modelo. Modelo que ele desaprovou sai. O estilo é dele, e a última palavra sobre o que entra é dele.

### O que não fazer

- Não inventar traço de estilo que não esteja nas peças. Se as peças não mostram como ele cita jurisprudência, escreva "a definir" e pergunte.
- Não guardar peça com nome de cliente, nem de processo sigiloso.
- Não "melhorar" o estilo do advogado. O trabalho é copiar o jeito dele, inclusive o que uma IA acharia estranho.

### No fim

Diga: "Modelos prontos. A próxima peça sai pela `peca-a-partir-da-ficha`; caso novo começa pela `ficha-do-caso`."

---

## MÉTODO: Timbrado e formatação (timbrado-e-formatacao)


Quando usar: Use no fim de toda peça, contrato, parecer ou minuta, na hora de montar o arquivo, e quando o advogado disser "põe no meu timbrado", "segue meu timbrado", "liga (ou desliga) a numeração dos parágrafos", "baixar em Word" ou mandar o .docx timbrado do escritório. Monta o documento sobre o timbrado dele (enviado uma vez), aplica a numeração de parágrafos gravada no perfil, destaca em negrito os trechos-chave e entrega sempre o .docx; se o ambiente não criar arquivo, entrega o texto limpo, sem marcação markdown, pra colar no Word.


### 1. Timbrado: enviado uma vez, usado sempre

- **Receber:** o advogado envia o `.docx` timbrado do escritório (logo, endereço, OAB no cabeçalho ou no rodapé). Abra-o e diga em três linhas o que leu: o que há no cabeçalho, no rodapé, margens e fonte base. Se a logo estiver no corpo da página e não no cabeçalho, avise: ela só se repete em toda página se estiver no cabeçalho (Word: Inserir › Cabeçalho).
- **Formato errado:** PDF, imagem ou `.dotx`: peça que ele abra no Word e salve como `.docx`. Só a logo, sem timbrado: ofereça montar um cabeçalho simples com a logo e os dados do perfil, e mostre antes de usar.
- **Guardar:** nos arquivos do projeto "Escritório", com o nome `TIMBRADO.docx`. Com pasta conectada, na raiz da pasta do escritório.
- **Ordem de uso:** `TIMBRADO.docx` → `.docx` de modelo do mesmo tipo na pasta → documento limpo. Com timbrado, o modelo entra só como texto e estrutura.

**Montar sobre ele** (ferramenta de criação de arquivos, `python-docx`): abra o timbrado como base, apague o corpo mantendo a configuração de página, e escreva a peça por cima. Cabeçalho, rodapé, margens e formatação vêm do arquivo dele.

```python
from docx import Document
doc = Document("TIMBRADO.docx")
corpo = doc.element.body
for el in list(corpo):
    if not el.tag.endswith("}sectPr"):   # a configuração de página fica
        corpo.remove(el)
## acrescente a peça com doc.add_paragraph(texto, style=...) e salve com o nome final
```

**Sem timbrado:** `.docx` limpo e sóbrio: a fonte do `ESTILO-DO-ESCRITORIO.md` ou Times New Roman 12, espaçamento 1,5, texto justificado com recuo na primeira linha, margens usuais (3 cm em cima e à esquerda, 2 cm embaixo e à direita), número de página no rodapé. No primeiro documento sem timbrado, diga em uma linha que ele pode mandar o dele uma vez e toda peça passa a sair nele.

### 2. Numeração de parágrafos: preferência do escritório

- Fica no perfil, na seção "Como escrevemos", nesta linha exata: `Numeração de parágrafos: sim` ou `Numeração de parágrafos: não` (é assim que a `entrevista-do-escritorio` grava). Perfil escrito à mão com outra forma ("numeração de parágrafos ligada", em outra seção): vale o sentido, e entregue a linha no formato exato pra ele trocar.
- Sem a linha no perfil: siga o que os modelos dele mostram; se nada mostrar, pergunte uma vez e entregue a linha pronta pra ele colar nas instruções do projeto (com pasta conectada e perfil em arquivo, atualize o arquivo).
- "Desliga a numeração" muda o perfil (entregue a linha nova). "Nesta peça sem numeração" vale só pra esta.
- Numera-se o corpo (fatos e direito). Não se numeram endereçamento, qualificação, títulos, citações recuadas, fecho e assinatura; os pedidos seguem as alíneas do modelo dele.
- Use a numeração automática do Word (a lista numerada do documento), não número digitado, pra que a conta se refaça quando ele inserir parágrafo. Se o timbrado não tiver essa lista, numere no texto e avise que a renumeração será manual.

### 3. Trechos-chave em negrito

Destaque, em negrito real do Word (nunca asterisco):

- a tese de cada tópico, em uma frase;
- o fato decisivo e a data ou valor que decidem;
- o dispositivo legal central;
- o pedido principal.

No máximo um trecho por parágrafo, e só nos parágrafos que carregam tese, fato decisivo ou pedido. Parágrafo inteiro em negrito, não. Citação literal fica como no original. Se o escritório não destaca, ou destaca com sublinhado ou itálico, vale o dele: o perfil traz, em "Como escrevemos", a linha exata `Destaques: negrito`, `Destaques: sublinhado` ou `Destaques: nenhum`.

### 4. Baixar em .docx: sempre o arquivo

- Toda peça, contrato, parecer e minuta vai no `.docx`, gerado com a ferramenta de criação de arquivos. Não cole o documento no chat. No chat vai só o resumo de até 8 linhas: o que fez, de onde tirou os fatos, o que ficou `[DEFINIR]` ou `[INSERIR JULGADO]` (e, na peça, o resultado da conferência).
- Nome do arquivo: `<tipo>-<caso ou iniciais>-<data>.docx` (ex.: `contestacao-0801234-2026-09-30.docx`). Revisão ganha `-rev1`, `-rev2`.
- Marcas `[INSERIR JULGADO: …]`, `[DEFINIR: …]`, `[JUNTAR: …]` e `[conferir]` com realce amarelo, pra ele achar tudo de relance.
- **Antes de entregar, reabra o arquivo salvo e confira:** timbrado presente em todas as páginas; numeração como o perfil manda; negrito só nos trechos-chave; nenhum resto de markdown (`**`, `#`, `>`) no texto; marcas visíveis; nada do modelo antigo ou de outro cliente.
- Com pasta do caso conectada, salve o arquivo nela, além de oferecer o download.

**Se o ambiente não criar .docx:** diga em uma linha como ligar (Settings › Capabilities, criação e edição de arquivos) e aí, sim, entregue o documento inteiro no chat, em **texto limpo, sem nenhuma marcação markdown** (sem `**`, sem `#`, sem `>`, sem lista com hífen), pronto pra colar sobre o timbrado no Word: títulos em caixa alta, como o modelo dele, e numeração digitada conforme o perfil. Asterisco colado no Word vira asterisco, não negrito: avise em uma linha que, colado, ele aplica o negrito nos trechos-chave (a tese de cada tópico e o pedido principal) e confere a numeração.

### Regras

- O arquivo é rascunho dele: você não protocola, não envia, não assina.
- Julgado só com link aberto; sem ele, a marca `[INSERIR JULGADO: tema, conferir]` fica no documento, em amarelo.
- Timbrado e perfil não levam dado de cliente.

---

## MÉTODO: Banco de teses e trechos (banco-de-teses-e-trechos)


Quando usar: Use quando o advogado disser "guarda essa tese", "salva esse trecho", "tira as teses das minhas peças", "tem tese de prescrição?", "põe a preliminar de ilegitimidade na contestação", "troca essa fundamentação pela do banco", ou quando uma peça em redação pedir tese, preliminar ou citação que o escritório já usa. Mantém o arquivo `TESES-E-TRECHOS.md` do escritório e insere, substitui ou edita o que está nele na peça. Também atende por: Banco de Teses, Trechos Favoritos.


A tese que o escritório já sustentou e o julgado que ele já conferiu não se escrevem nem se pesquisam de novo. Ficam num arquivo só, `TESES-E-TRECHOS.md`, que a peça consulta antes de escrever do zero.

### Onde mora

No projeto "Escritório" ou na pasta `Escritório/` (computador ou Drive), não no caso: vale pra todos os casos. Com o Drive ligado, você lê de qualquer projeto de caso; sem Drive, o projeto do caso leva uma cópia (`meus-casos-e-documentos`). Você não grava sozinho nos arquivos de um Projeto: entregue o arquivo atualizado pra ele substituir; com a pasta conectada (Cowork), grave direto.

É um arquivo só pra tudo que se reaproveita: as teses e citações (aqui) e os trechos de forma que se repetem de peça em peça (gratuidade, fecho, pedido de inversão do ônus), que a `modelos-do-escritorio` extrai e grava na seção "Trechos de forma" deste mesmo arquivo.

### Formato do arquivo

```
## Teses e trechos: [escritório]
Atualizado em: [data]

### Teses
#### [área] · [preliminar | prejudicial | mérito] · [tema]
Tese: [uma frase]
Cabe em: [contestação, réplica, apelação...]
Texto: [o parágrafo pronto, anonimizado, com [FATO DO CASO] onde muda]
Fundamento: [artigos] · [julgados da seção Jurisprudência, pelo número]
Origem: [cadastro em dd/mm | extraída de: tipo de peça e data, sem cliente]

### Trechos de forma
#### [título] · cabe em: [tipo de peça]
[o parágrafo, anonimizado, com [FATO DO CASO] onde muda]

### Trechos favoritos
#### Jurisprudência
- [tribunal · órgão · nº · relator · data] · tese em uma frase · "trecho, ao pé da letra" · [link do inteiro teor] · salvo em dd/mm
#### Doutrina
- [autor, obra, edição, página] · "trecho"
#### Lei
- [lei, artigo] · "texto" · conferido em [fonte oficial], dd/mm
```

Teses por área e tipo; dentro de cada, pelo tema. Um tema, uma entrada: tese repetida vira uma só, com a melhor redação.

### Como entra

- **Cadastro manual:** "guarda essa tese" ou "salva esse trecho", com o texto colado ou da peça aberta. Você classifica (área, tipo, tema), anonimiza e grava.
- **Extraídas das peças:** "tira as teses das minhas peças". Busque as peças protocoladas pelo mesmo caminho da `modelos-do-escritorio` (pasta, Drive ou projeto, anonimizando antes) e tire as preliminares e teses de mérito com o parágrafo que ele usou. Tese que só existe pelos fatos de um caso não entra. Diga quantas entraram e de que peças (tipo e data).
- **Jurisprudência:** a `pesquisa-jurisprudencial` grava aqui, na seção Jurisprudência e no formato acima, o julgado que o advogado mandar salvar, só com link aberto.
- **Doutrina:** só a que o advogado trouxer, com a página. Nunca de memória.
- **Lei:** texto vigente conferido na fonte oficial, com a data da conferência.

### Insira, substitua ou edite

Na peça em redação (a da conversa ou o .docx anexado):

- **Insira:** "põe a preliminar de ilegitimidade no tópico 2". Adapte o `Texto` com os fatos da ficha do caso, na voz do `ESTILO-DO-ESCRITORIO.md`, e mostre só o trecho novo e onde entrou.
- **Substitua:** "troca a fundamentação de prescrição pela de decadência do banco". Mostre antes e depois do trecho; o resto da peça não muda.
- **Edite:** "melhora essa tese e guarda". Mostre a redação nova; aprovada, atualize a peça e a entrada do banco.

O .docx só é regravado depois do "ok". Julgado que no banco não tem link continua `[INSERIR JULGADO: tema, conferir]`.

Peça sendo redigida com tese que o banco já tem: parta da entrada do banco e diga em uma linha que partiu dela.

### No fim

Uma linha: "Banco atualizado: [N] teses, [N] trechos. Os julgados se conferem na página do tribunal antes de protocolar (`conferencia-antes-de-protocolar`)."

---

## MÉTODO: Meus casos e documentos (meus-casos-e-documentos)


Quando usar: Use quando o advogado disser "abre um caso", "cria o caso do [cliente]", "onde eu guardo isso?", "acha aquela contestação de…", "cadê a procuração do [cliente]", "organiza meus documentos", ou anexar os autos ("segue o processo", "mandei os autos"). Monta o caso como um Projeto do Claude (ou uma pasta), diz onde cada arquivo mora, reencontra peça, tese e trecho, e lê os autos que ele anexar. Também atende por: Caso, Meus Casos, Meus Documentos, Enviar autos do processo.


Um caso é um lugar só: a ficha, os documentos, a cronologia, as pendências e as conversas daquele assunto. Você monta o lugar e diz onde cada coisa vai; o advogado não decora nada.

### O que o kit não faz sozinho

Não acha processos pela OAB nem vigia o tribunal: isso exige ligação direta com os tribunais e rodar todo dia sem ninguém pedir, e um kit dentro do Claude não tem nenhuma das duas. Aqui o advogado traz o andamento: cola as publicações do dia (comunica.pje.jus.br pela OAB, painel do tribunal ou o e-mail do serviço de publicações que ele já assina) e a `gestao-de-prazos-e-intimacoes` transforma em pendências. Diga isso em uma linha, na primeira vez que ele perguntar.

### Caso

Um **Projeto do Claude por caso**, com o nome `[cliente ou apelido] · [assunto] · [nº do processo]`. Mais de um processo do mesmo assunto (ação, recurso, cumprimento de sentença) fica no mesmo projeto; outro assunto do mesmo cliente é outro caso.

- **Instruções do projeto:** o PERFIL DO ESCRITÓRIO e duas linhas do caso: quem o escritório representa e o número de cada processo.
- **Arquivos do projeto:** `FICHA-DO-CASO.md` (da `ficha-do-caso`, trabalho seu), `PENDENCIAS.md` (da `gestao-de-prazos-e-intimacoes`), `CRONOLOGIA.md` quando houver, os autos e documentos em PDF com a data no começo do nome (`2026-09-12 sentenca.pdf`) e as peças protocoladas do caso em .docx.
- **Conversas:** uma por tarefa, dentro do projeto do caso. O projeto guarda o contexto; ninguém precisa explicar o caso de novo.

Você não grava sozinho nos arquivos de um Projeto: entregue o arquivo novo ou atualizado e diga "substitua no projeto". Com a pasta do computador conectada (Cowork), grave direto.

**Sem Projeto** (ChatGPT, plano sem Projetos, ou quem prefere pasta): o caso vira a pasta `Casos/[cliente] - [assunto] - [nº]/`, com os mesmos arquivos. Com Cowork ou Drive, você abre de lá.

**O que é do escritório não mora no caso.** O jeito de escrever, os modelos, as teses e o timbrado ficam no projeto "Escritório" ou na pasta `Escritório/`. Um Projeto não enxerga os arquivos de outro: com o Drive ligado, leia de lá a partir de qualquer caso; sem Drive, o projeto do caso leva uma cópia de `ESTILO-DO-ESCRITORIO.md`, `TESES-E-TRECHOS.md` e dos modelos dos tipos de peça que o caso vai usar.

**Segredo de justiça** não vira projeto em conta individual: avise em uma linha e trabalhe só na conversa, com iniciais.

### Meus documentos

A árvore do escritório, no computador ou no Drive:

```
Escritório/
  PERFIL-DO-ESCRITORIO.md · ESTILO-DO-ESCRITORIO.md · TESES-E-TRECHOS.md
  TIMBRADO.docx · MODELOS/
Casos/
  [cliente] - [assunto] - [nº]/
    FICHA-DO-CASO.md · PENDENCIAS.md · CRONOLOGIA.md
    autos/ · pecas/ · documentos-do-cliente/
Encerrados/
```

- **Nome de arquivo:** data no começo, tipo e a versão final marcada: `2026-09-30 contestacao protocolada.docx`. É o que faz a busca achar e a `modelos-do-escritorio` escolher a peça certa.
- **Reencontrar** ("acha a contestação de consumidor com dano moral do ano passado"): procure primeiro pelo nome (tipo e data), depois pelo conteúdo, na pasta, no Drive ou nos arquivos do projeto. Devolva até cinco resultados, cada um com caminho, data e uma linha do que é. A busca no conteúdo é a do próprio Claude ou do Drive: se não achar, diga onde procurou.
- **Tese ou trecho** ("aquela preliminar de ilegitimidade", "aquele julgado sobre negativação"): primeiro em `TESES-E-TRECHOS.md` (`banco-de-teses-e-trechos`), depois nas peças.
- **Caso encerrado** vai pra `Encerrados/` ou o projeto é arquivado; a tese boa dele continua viva no banco de teses.

### Enviar autos do processo

Quando o advogado anexar o PDF dos autos, ou de um documento novo, no projeto do caso:

1. Leia uma vez e faça ou atualize a ficha pela `ficha-do-caso` (documento novo: só ele, não o processo inteiro).
2. Se havia pendência "Aguardando os autos" em `PENDENCIAS.md`, ela passa a "Peça a fazer" ou fecha, com a data.
3. Siga direto pro que a pendência pedia. Sem pendência, feche com a próxima linha do fluxo.

PDF grande demais pra conversa: peça as peças principais em separado (inicial, contestação, decisões, última intimação), não o processo inteiro de novo. Página escaneada sem texto pode não ser lida: registre na seção 10 da ficha ("A conferir").

### No fim

Uma linha: "Próximo passo: as publicações do dia viram pendências pela `gestao-de-prazos-e-intimacoes`; a peça sai pela `peca-a-partir-da-ficha`."

---

## MÉTODO: Anonimização para IA (anonimizacao-para-ia)


Quando usar: Use quando o advogado quiser preparar um documento pra mandar pra IA, pra virar modelo ou pra subir no Conhecimento do GPT, e pedir pra "tirar os dados", "anonimizar" ou "tarjar". Troca nomes por papéis ou iniciais, remove CPF, RG, endereço, telefone, e-mail, dados bancários, CID e nome de médico, e gera a tabela de correspondência que fica só no computador do advogado.


### Onde rodar

O ideal é o documento cheio não sair do computador. No Claude, rode com a pasta conectada no Cowork. Se o advogado colar o documento cheio na conversa, avise uma vez: o original já foi enviado nesta conversa; a versão limpa serve pro que vem depois (modelo, Conhecimento do GPT, outras conversas).

### O que entra

- O documento, colado, anexado ou da pasta.
- A finalidade: modelo de peça, análise, Conhecimento do GPT.
- O que manter: não pare pra perguntar. Mantenha datas e valores, troque o número do processo por `[PROCESSO]` e a cidade por `[CIDADE]`, e diga isso numa linha na entrega. Se ele quiser manter outra coisa, ajusta.

### Regras

- **Pessoa vira papel,** o mesmo do começo ao fim: AUTOR, RÉU, TESTEMUNHA 1, PERITO. Quem não tem papel no processo (familiar, funcionário) vira iniciais. Empresa parte vira EMPRESA RÉ; banco ou operadora grande pode ficar com o nome, se o advogado autorizar.
- **Sai sempre:** CPF, RG, CNH, endereço (fica só a cidade, se autorizado), telefone, e-mail, dados bancários e chave PIX, placa, matrícula, número de prontuário, CID, nome de médico, clínica e hospital.
- **Dado sensível** (saúde, criança, vida sexual, religião, origem racial): avise e tarje também o trecho que descreve, não só o nome.
- **Contexto que identifica** (cargo único, apelido, fato que saiu na imprensa): aponte em "A conferir". Não resolva sozinho.
- **Ficam:** nome do advogado, do escritório e OAB, como estão no perfil do escritório. São dele.
- **O resto não muda.** Mesma estrutura, mesmos parágrafos. Não resuma nem corrija.
- **Honestidade:** com a tabela guardada, o documento está pseudonimizado, não anônimo no sentido da LGPD. Pra mandar pra IA, basta; diga isso se ele perguntar.

### Formato da saída

Dois blocos, sempre separados. Com a pasta conectada, grave o documento limpo como arquivo `-LIMPO` ao lado do original e a tabela num arquivo à parte (peça que ele tire a tabela da pasta que a IA lê); na conversa vão só o A CONFERIR e quantas marcas foram trocadas, sem repetir o documento.

```
DOCUMENTO LIMPO · pode ir pra IA
[texto com as substituições]
```

```
TABELA DE CORRESPONDÊNCIA · NÃO ENVIAR
Guarde só no seu computador. Não cole em conversa, Drive compartilhado nem Conhecimento do GPT.
| Marca no texto | Original |
| AUTOR | [nome] |
| [CPF 1] | [número] |

A CONFERIR
- [trecho que ainda pode identificar alguém, e por quê]
```

### No fim

Diga ao advogado: "Salve a tabela no seu computador, fora da pasta que a IA lê, e apague esta conversa. Leia o documento limpo uma vez antes de usar: a última revisão é sua. Ele já pode virar modelo (`modelos-do-escritorio`) ou ficha (`ficha-do-caso`)."

