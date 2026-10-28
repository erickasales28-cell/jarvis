# ficha-do-caso

Também atende por: Revisar e resumir documentos (o resumo com riscos e fraquezas sai nas seções 9 e 10 da ficha).

Quando usar: Use quando o advogado enviar processo, petição, decisão, contrato ou documentos de um caso e pedir resumo, análise ou "lê isso", e sempre que for começar trabalho num caso que ainda não tem ficha. Gera a ficha do caso, de até duas páginas, que substitui o documento inteiro nas próximas conversas. Use também pra atualizar a ficha quando chegar documento novo.

# Ficha do caso

O documento inteiro é lido **uma vez**, e a partir daí o trabalho usa só a ficha. É isso que poupa o limite: nas próximas conversas vão duas páginas, não trezentas.

## De onde vem o processo

Se a pasta do escritório está conectada (Cowork) ou o Drive está ligado, você mesmo abre o processo: pelo número ou pelo nome do cliente (pergunte só se ele não disse), localize a pasta do caso e leia os arquivos de lá, do mais antigo pro mais novo. Só peça o PDF na conversa quando não houver pasta conectada.

## Módulo da área

Se o perfil do escritório lista um módulo de área (`area-…`), abra-o antes de montar a ficha: a seção 9 dele diz que campos a mais a ficha desta área leva (no previdenciário, o requerimento administrativo e o CNIS; no penal, a situação prisional; no trabalhista, o rito e o valor da causa) e que dado sensível é típico dela.

## Regras

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

## Formato fixo

```
# Ficha do caso: [apelido curto]
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

## Sem burocracia

A ficha é trabalho seu, não do advogado. Ele não precisa saber que ela existe: pediu "lê o processo" ou "faz a contestação", você lê, grava a ficha (na pasta do caso, se houver; senão como arquivo `.md` pra ele salvar no projeto com um clique) e segue pro que ele pediu, na mesma conversa. Nunca peça pra ele "montar a ficha primeiro" como etapa separada; nunca explique o mecanismo, a não ser que ele pergunte.

## Depois de entregar

Com a pasta conectada (Cowork), grave a ficha como `FICHA-DO-CASO.md` na pasta do caso: é lá que as outras skills do kit vão buscá-la.

**Quando a ficha foi passo de outro pedido** (a peça, o risco, a audiência), nada desta seção vai pro chat: grave e siga pro pedido. **Quando a ficha foi o pedido** ("lê isso", "resume o processo"), sem a pasta, diga: "Salve esta ficha como arquivo do caso e, nas próximas conversas, anexe a ficha em vez do processo." E feche com uma linha: "Próximo passo: a peça (`peca-a-partir-da-ficha`), a cronologia, a análise de risco ou o prazo."

**Atualização:** quando chegar documento novo, leia só ele e devolva a ficha atualizada, com a data nova. Não releia o processo inteiro.
