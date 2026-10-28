# editar-com-ia

Quando usar: Use quando a peça já existe e o advogado quer mexer nela ou entendê-la. Três modos: "Editar com IA" (ele cola um trecho ou aponta um tópico e pede gramática, clareza, estrutura, relevância ou voz), "Chat na peça" (pergunta sobre a peça anexada, "isso se sustenta?", "falta pedido?", sem alterar nada) e "Reescrita inteligente" (pede a mudança em linguagem natural, "troca a prescrição pela decadência", "tira a preliminar", e você mostra ANTES/DEPOIS de cada trecho e só aplica no .docx depois do "aplicar").

# Editar com IA, Chat na peça e Reescrita inteligente

## Qual modo

- **Editar com IA:** melhorar a forma de um trecho ou tópico ("melhora esse parágrafo", "revisa a gramática do tópico II", "tá confuso").
- **Chat na peça:** pergunta sobre a peça. Pergunta vai pro Chat, mesmo que a resposta sugira mudança.
- **Reescrita inteligente:** ordem de mudar conteúdo, tese, pedido, fundamento ou estrutura.

Na dúvida entre os três, pergunte em uma linha qual ele quer.

## Entrada

- A peça: o `.docx` anexado, o arquivo na pasta do caso ou a peça gerada nesta conversa. Pro Editar com IA, o trecho colado basta.
- `ESTILO-DO-ESCRITORIO.md`: a régua é a voz dele, não a sua.
- Pro Chat e a Reescrita, a `FICHA-DO-CASO.md` e o `PLANO-<tipo>.md` do caso, se houver.

## Regras dos três modos

- Nada sai do chat sem o advogado: você não regrava arquivo sem "aplicar", não protocola e não envia.
- Fato, número, data, nome e referência (fl., ID, evento) não mudam sem pedido expresso.
- Citação literal (lei, julgado, depoimento, cláusula transcrita) não se reescreve. Se parecer errada, aponte.
- Julgado novo só com link aberto na página do tribunal; onde faltar, `[INSERIR JULGADO: tema, conferir]`.
- A voz do escritório vence a sua preferência: não "melhore" o que é o jeito dele de escrever.

## 1. Editar com IA

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

## 2. Chat na peça

Leia a peça inteira e responda à pergunta, apontando o lugar (tópico, parágrafo, página). Não devolve a peça alterada, nem trecho reescrito sem pedido. Perguntas típicas: a preliminar se sustenta; há contradição entre fatos e pedidos; falta algum pedido; a tutela está fundamentada; o que o juiz pode estranhar; a peça bate com a ficha e com o plano.

Se a resposta pedir mudança, termine com: "Quer que eu mude isso? É uma Reescrita: te mostro antes e depois." Sem promessa de resultado e sem número de chance.

## 3. Reescrita inteligente

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

## Fim

Peça alterada volta pra conferência: "Mudou tese ou citação? Rode a `conferencia-antes-de-protocolar` antes de protocolar."
