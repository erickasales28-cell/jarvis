# banco-de-teses-e-trechos

Quando usar: Use quando o advogado disser "guarda essa tese", "salva esse trecho", "tira as teses das minhas peças", "tem tese de prescrição?", "põe a preliminar de ilegitimidade na contestação", "troca essa fundamentação pela do banco", ou quando uma peça em redação pedir tese, preliminar ou citação que o escritório já usa. Mantém o arquivo `TESES-E-TRECHOS.md` do escritório e insere, substitui ou edita o que está nele na peça. Também atende por: Banco de Teses, Trechos Favoritos.

# Banco de teses e trechos

A tese que o escritório já sustentou e o julgado que ele já conferiu não se escrevem nem se pesquisam de novo. Ficam num arquivo só, `TESES-E-TRECHOS.md`, que a peça consulta antes de escrever do zero.

## Onde mora

No projeto "Escritório" ou na pasta `Escritório/` (computador ou Drive), não no caso: vale pra todos os casos. Com o Drive ligado, você lê de qualquer projeto de caso; sem Drive, o projeto do caso leva uma cópia (`meus-casos-e-documentos`). Você não grava sozinho nos arquivos de um Projeto: entregue o arquivo atualizado pra ele substituir; com a pasta conectada (Cowork), grave direto.

É um arquivo só pra tudo que se reaproveita: as teses e citações (aqui) e os trechos de forma que se repetem de peça em peça (gratuidade, fecho, pedido de inversão do ônus), que a `modelos-do-escritorio` extrai e grava na seção "Trechos de forma" deste mesmo arquivo.

## Formato do arquivo

```
# Teses e trechos: [escritório]
Atualizado em: [data]

## Teses
### [área] · [preliminar | prejudicial | mérito] · [tema]
Tese: [uma frase]
Cabe em: [contestação, réplica, apelação...]
Texto: [o parágrafo pronto, anonimizado, com [FATO DO CASO] onde muda]
Fundamento: [artigos] · [julgados da seção Jurisprudência, pelo número]
Origem: [cadastro em dd/mm | extraída de: tipo de peça e data, sem cliente]

## Trechos de forma
### [título] · cabe em: [tipo de peça]
[o parágrafo, anonimizado, com [FATO DO CASO] onde muda]

## Trechos favoritos
### Jurisprudência
- [tribunal · órgão · nº · relator · data] · tese em uma frase · "trecho, ao pé da letra" · [link do inteiro teor] · salvo em dd/mm
### Doutrina
- [autor, obra, edição, página] · "trecho"
### Lei
- [lei, artigo] · "texto" · conferido em [fonte oficial], dd/mm
```

Teses por área e tipo; dentro de cada, pelo tema. Um tema, uma entrada: tese repetida vira uma só, com a melhor redação.

## Como entra

- **Cadastro manual:** "guarda essa tese" ou "salva esse trecho", com o texto colado ou da peça aberta. Você classifica (área, tipo, tema), anonimiza e grava.
- **Extraídas das peças:** "tira as teses das minhas peças". Busque as peças protocoladas pelo mesmo caminho da `modelos-do-escritorio` (pasta, Drive ou projeto, anonimizando antes) e tire as preliminares e teses de mérito com o parágrafo que ele usou. Tese que só existe pelos fatos de um caso não entra. Diga quantas entraram e de que peças (tipo e data).
- **Jurisprudência:** a `pesquisa-jurisprudencial` grava aqui, na seção Jurisprudência e no formato acima, o julgado que o advogado mandar salvar, só com link aberto.
- **Doutrina:** só a que o advogado trouxer, com a página. Nunca de memória.
- **Lei:** texto vigente conferido na fonte oficial, com a data da conferência.

## Insira, substitua ou edite

Na peça em redação (a da conversa ou o .docx anexado):

- **Insira:** "põe a preliminar de ilegitimidade no tópico 2". Adapte o `Texto` com os fatos da ficha do caso, na voz do `ESTILO-DO-ESCRITORIO.md`, e mostre só o trecho novo e onde entrou.
- **Substitua:** "troca a fundamentação de prescrição pela de decadência do banco". Mostre antes e depois do trecho; o resto da peça não muda.
- **Edite:** "melhora essa tese e guarda". Mostre a redação nova; aprovada, atualize a peça e a entrada do banco.

O .docx só é regravado depois do "ok". Julgado que no banco não tem link continua `[INSERIR JULGADO: tema, conferir]`.

Peça sendo redigida com tese que o banco já tem: parta da entrada do banco e diga em uma linha que partiu dela.

## No fim

Uma linha: "Banco atualizado: [N] teses, [N] trechos. Os julgados se conferem na página do tribunal antes de protocolar (`conferencia-antes-de-protocolar`)."
