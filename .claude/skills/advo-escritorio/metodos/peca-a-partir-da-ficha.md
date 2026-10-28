# peca-a-partir-da-ficha

Quando usar: Use quando o advogado disser "faz a contestação", "redige a réplica", "monta a inicial", "faz o recurso", "responde essa manifestação" ou pedir qualquer peça processual ou extrajudicial (petição inicial, contestação, réplica, recurso, manifestação, notificação) de um caso. Contrato novo é da contrato-a-partir-do-briefing; parecer e minuta, da parecer-e-minuta. Escreve a partir da FICHA DO CASO, sem reler o processo, com a voz do escritório: lê o ESTILO-DO-ESCRITORIO e o modelo do mesmo tipo em MODELOS antes de redigir, mantém coerência com as peças anteriores do mesmo caso e ajusta só o trecho pedido nas correções.

# Peça a partir da ficha

Ordem do fluxo: Entrada (com a ficha, feita por você se faltar) → **plano (`plano-antes-de-gerar.md`, obrigatório)** → Redação → Entrega pelo `timbrado-e-formatacao.md` → **Conferência (`conferencia-antes-de-protocolar.md`), sempre, sozinha** → Resumo no chat. Nenhuma linha da peça antes do plano.

## Entrada

Pra trabalhar, você precisa de quatro coisas: o perfil do escritório, os modelos do escritório, a ficha do caso e o pedido (qual peça, qual tese, o que priorizar).
- **Ficha:** busque `FICHA-DO-CASO.md` na pasta do caso. Sem ficha, faça a ficha você mesmo, pela `ficha-do-caso.md`, sem avisar e sem perguntar, e siga pra peça na mesma conversa. Não é etapa separada nem proposta ao advogado. Não redija em cima do processo inteiro.
- **Módulo da área, antes do modelo:** se o perfil lista um `area-…`, abra-o e siga a estrutura da peça pedida (seção 3), o rito e o foro (seção 1) e as teses e provas da área (seção 4). Peça fora da estrutura que o módulo descreve é peça que o juízo daquela área estranha.
- **Modelos do escritório:** abra `ESTILO-DO-ESCRITORIO.md` e só o arquivo de `MODELOS/` do mesmo tipo de peça (ou o mais próximo). A estrutura, a abertura, o fecho, o jeito de citar e as expressões vêm de lá; a ficha entra só como conteúdo. Se não existir modelo nenhum, diga isso ao advogado e proponha a skill `modelos-do-escritorio` antes de redigir; se ele preferir seguir, use o perfil e avise que a peça sairá no formato dele, mas sem a voz.
- **Peças anteriores do mesmo caso, buscadas por você:** se a pasta do escritório está conectada (Cowork) ou o Drive está ligado, procure pelo número do processo da ficha e abra só a peça do escritório que esta continua (a inicial pra réplica, a contestação pro recurso); a decisão atacada entra pelo resumo da `resumo-de-decisao`, se houver, não pelo inteiro teor. A nova mantém a tese, os nomes que ele deu às coisas e o vocabulário daquelas. Peça do mesmo caso nunca contradiz o que o escritório já sustentou nos autos; se a ficha mostrar uma contradição, aponte antes de escrever. Sem pasta conectada, pergunte se há peça anterior e peça o arquivo; não redija a réplica sem ter lido a inicial dele.
- **Contestação:** a inicial também entra, inteira, porque cada fato dela precisa de resposta (CPC, art. 341).
- **Se não houver modelo do tipo pedido em `MODELOS/`,** busque na pasta ou no Drive a peça mais recente desse tipo, protocolada, e use-a como modelo do dia (anonimizando o que for de cliente), avisando que ela ainda não está nos modelos.

## Antes de redigir

Abra `plano-antes-de-gerar.md` e siga-o: perguntas esclarecedoras do que falta, o plano nos cinco blocos (Estratégia da peça, Teses da peça, Eixo da defesa, Jurisprudência, Suas provas), ajuste no chat e aval explícito. Reescrever oito páginas por um rumo errado é o que mais gasta o limite. A redação segue o plano aprovado; tese nova no meio do caminho pede nova consulta ao advogado. Aval de plano que não foi mostrado nesta conversa não existe: o §4 do plano diz o que fazer.

## Redação

- **Fatos:** só os da ficha, com a referência (fl., ID ou evento) quando o escritório usa.
- **Documentos:** só cite como "doc. N" o documento que você abriu e leu. Documento que o cliente só descreveu, e que você não leu, entra como `[JUNTAR: <o que o cliente disse que o doc. prova>]`, nunca como "doc. N (anexo)".
- **Lei:** cite o dispositivo pelo número.
- **Jurisprudência:** use só a que o advogado forneceu ou a que você buscou, abriu e transcreveu da página oficial, com o endereço ao lado. Mesmo assim, ela entra na lista da conferência. **Nunca invente** número de processo, relator, data ou ementa. Onde a peça pede um julgado e ainda não existe um verificado, deixe a marca `[INSERIR JULGADO: tema, conferir]`.
- **Pedidos:** conferem com os fatos e com a ficha.
- **Tratamento, formalidade, conectivos e fecho:** os do `ESTILO-DO-ESCRITORIO.md`, ao pé da letra. Se existir `TESES-E-TRECHOS.md`, reaproveite as teses e os trechos de forma que couberem, ajustando só o que muda no caso; se não existir, escreva do zero, sem avisar.
- **Teste final:** lendo a peça ao lado do modelo, ela parece escrita pela mesma pessoa? Se não, é a peça que muda, não o modelo.

## Entrega em Word

A montagem do arquivo segue `timbrado-e-formatacao.md`: timbrado do escritório (ou modelo .docx, ou documento limpo, nessa ordem), numeração de parágrafos conforme o perfil, trechos-chave em negrito e conferência do arquivo salvo antes de entregar.

A peça vai **no arquivo .docx pra baixar e editar**, gerado com a ferramenta de criação de arquivos. Não cole a peça no chat: o advogado edita no Word, não no navegador. Se o ambiente não gerar .docx, diga em uma linha como ligar (Settings › Capabilities) e aí, sim, entregue a peça inteira no chat, em texto limpo, **sem marcação markdown** (sem `**`, sem `#`, sem `>`), pronta pra colar no Word.

## Conferência, sempre

Peça pronta, rode a `conferencia-antes-de-protocolar.md` na hora, sem perguntar e sem sugerir: ela faz parte da entrega. A tabela completa vai num arquivo à parte (`CONFERENCIA-<tipo>-<data>.md`, na pasta do caso quando houver); sem criação de arquivo, vai no chat depois da peça. O que ela achar entra no resumo.

## Resumo no chat

Até 8 linhas, nesta ordem:
1. **Primeiro, o que muda a peça:** perguntas do plano que ficaram sem resposta, como `[DEFINIR: …]`; fato da inicial sem resposta (contestação); documento citado e não lido (`[JUNTAR]`).
2. O que fez: a peça, o arquivo, a tese na frente.
3. De onde tirou os fatos: ficha, documentos lidos, relato do cliente.
4. Conferência: quantos itens, quantos gerados pela IA, os mais graves.
5. O que ficou `[DEFINIR]` ou `[INSERIR JULGADO]`.

Não repita a ficha nem o plano.

## Depois

- **Correção:** pelo `editar-com-ia.md` (Reescrita inteligente, com ANTES/DEPOIS e "aplicar"); reescreva só o trecho pedido e devolva só esse trecho, dizendo onde ele entra. Não devolva a peça inteira de novo.
- Feche com uma linha: "Próximo passo: lance o prazo (`gestao-de-prazos-e-intimacoes`); se o cliente precisa saber, o recado sai pela `comunicacao-com-cliente`."
