# modelos-do-escritorio

Quando usar: Use quando o advogado disser "escreve do meu jeito", "usa minhas peças como base", "monta meus modelos", apontar a pasta ou o Drive onde guarda as peças, ou quando o projeto ainda não tiver a pasta MODELOS. Busca sozinha as peças do escritório na pasta conectada (Cowork), no Google Drive ou nos arquivos do projeto, tira delas o guia de estilo, os trechos de forma (no `TESES-E-TRECHOS.md`) e um modelo anonimizado por tipo de peça, que a skill de peça usa como base. Use também pra atualizar os modelos quando houver peça nova protocolada.

# Modelos do escritório

A peça boa sai com a cara de quem assina. O perfil diz como o escritório escreve em tópicos; os modelos mostram. Esta skill transforma de 3 a 5 peças reais do advogado em três coisas que toda peça nova lê antes de nascer: o **guia de estilo**, os **trechos de forma** e um **modelo por tipo de peça**.

## Onde estão as peças: você busca, o advogado não cola

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

## Antes de ler: anonimizar

Antes de extrair qualquer coisa, tarje o que identifica gente: nome das partes e de terceiros viram iniciais, CPF, RG, endereço, telefone, e-mail, conta e número de processo viram `[...]`. Nome do advogado, do escritório e OAB ficam, porque são dele. Se a peça trouxer dado de saúde, orientação, religião, origem racial ou criança, avise o advogado e tarje também o trecho. O modelo guardado nunca leva dado de cliente.

## O que extrair

### 1. `ESTILO-DO-ESCRITORIO.md` (até 2 páginas)

Só o que se repete em duas ou mais peças. O que aparece numa só é caso, não estilo.

```
# Estilo do escritório: [nome]
Fonte: [tipos das peças lidas, sem nomes] · atualizado em [data]

## Estrutura que ele usa
- [ordem dos tópicos por tipo de peça; numeração; títulos que usa, ao pé da letra]
## Como abre e como fecha
- [as primeiras linhas típicas de cada tipo; o fecho, ao pé da letra]
## Como argumenta
- [a sequência: fato → norma → jurisprudência → conclusão? ou outra; onde põe a tese principal; quanto de fato antes do direito]
## Como cita
- [lei: só o número, ou transcreve? jurisprudência: ementa curta, trecho, só referência? formato exato de uma citação dele]
## Frases e conectivos dele
- [10 a 20 expressões que ele usa de verdade, ao pé da letra: "cumpre esclarecer", "não prospera", "de rigor", o que for]
## O que ele nunca faz
- [o que não aparece em nenhuma peça: latim, adjetivo contra a parte, pedido genérico]
## Tamanho
- [páginas e número de tópicos por tipo]
```

### 2. Trechos de forma, no `TESES-E-TRECHOS.md`

Parágrafos que se repetem de peça em peça e podem ser reaproveitados com ajuste mínimo, já anonimizados, cada um com um título e o tipo de peça onde cabe: preliminares que ele sempre argui, o pedido de gratuidade, a fundamentação do dano moral, a impugnação de documento, o pedido de inversão do ônus, o fecho. De 5 a 15 trechos. Nada de tese que dependa do caso. Vão na seção "Trechos de forma" do `TESES-E-TRECHOS.md` (o arquivo único do escritório pra tudo que se reaproveita, formato na `banco-de-teses-e-trechos`); se o arquivo não existir, crie-o com esse formato.

### 3. `MODELOS/<tipo-da-peca>.md`

Uma peça inteira e anonimizada por tipo (`inicial-consumo.md`, `contestacao.md`, `apelacao.md`...), com os trechos que mudam por caso marcados assim: `[FATOS DO CASO]`, `[PEDIDO PRINCIPAL]`, `[JULGADO]`. Se vierem duas peças do mesmo tipo, escolha a mais completa e diga qual escolheu. O modelo é esqueleto e voz; o conteúdo vem sempre da ficha do caso.

## Onde guardar

- **Claude:** os três vão nos **arquivos do projeto** "Escritório". Como estão anonimizados, podem ficar lá; ficha de caso e processo ficam no Projeto do CASO (um por caso, ver `meus-casos-e-documentos.md`), nunca no projeto "Escritório".
- **ChatGPT:** vão em **Conhecimento** do GPT do escritório, com o compartilhamento em "Somente eu". Peça e ficha de caso continuam fora do Conhecimento.
- Nas instruções (perfil), acrescente a linha: `Antes de qualquer peça, leia ESTILO-DO-ESCRITORIO.md e o modelo do mesmo tipo em MODELOS/.`

## Manter vivo

O advogado só precisa continuar salvando as peças protocoladas na mesma pasta. Quando ele disser "atualiza os modelos" (ou uma vez por mês, se ele pedir na rotina), busque o que entrou na pasta desde a data do `ESTILO-DO-ESCRITORIO.md`, confira se muda algo no estilo, acrescente trecho novo aos trechos de forma do `TESES-E-TRECHOS.md` e, se for de um tipo que ainda não tinha modelo, crie o modelo. Modelo que ele desaprovou sai. O estilo é dele, e a última palavra sobre o que entra é dele.

## O que não fazer

- Não inventar traço de estilo que não esteja nas peças. Se as peças não mostram como ele cita jurisprudência, escreva "a definir" e pergunte.
- Não guardar peça com nome de cliente, nem de processo sigiloso.
- Não "melhorar" o estilo do advogado. O trabalho é copiar o jeito dele, inclusive o que uma IA acharia estranho.

## No fim

Diga: "Modelos prontos. A próxima peça sai pela `peca-a-partir-da-ficha`; caso novo começa pela `ficha-do-caso`."
