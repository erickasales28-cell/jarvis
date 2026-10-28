# peca-a-partir-do-seu-modelo

Quando usar: Use quando o advogado anexar um .docx dele (contrato ou peça já feitos) e pedir um documento novo a partir daquele: "usa esse contrato pro cliente novo", "troca só os dados", "adapta esse modelo", "transforma essa prestação de serviços em parceria". Três modos, com estes nomes: "Só preciso alterar valores, datas e informações específicas" · "Adaptar para uma nova contratação" · "Transformar em outro tipo de contrato". O documento sai sobre o próprio .docx dele, com um quadro de revisão pra ele aceitar ou ajustar antes de usar.

# Peça ou contrato a partir do seu modelo

Diferente da `modelos-do-escritorio`, que tira o jeito de escrever de várias peças, aqui é um arquivo só, que ele escolheu, virando o próximo documento. Contrato do zero é a `contrato-a-partir-do-briefing`; peça de um caso com fatos novos é a `peca-a-partir-da-ficha`, que pode usar este .docx como modelo do dia.

## Entrada

- O `.docx` anexado ou apontado na pasta. PDF escaneado ou imagem: peça o `.docx`; se não houver, avise que a formatação original se perde.
- O modo. Se o pedido não deixar claro, pergunte em uma linha, com as três opções ao pé da letra:
  1. Só preciso alterar valores, datas e informações específicas
  2. Adaptar para uma nova contratação
  3. Transformar em outro tipo de contrato
- Perfil do escritório e `ESTILO-DO-ESCRITORIO.md`, pra qualquer texto novo sair na voz dele.

Peça processual só usa o modo 1 (trocar partes, datas, valores). Se mudam fatos ou tese, é peça nova: `peca-a-partir-da-ficha`, com plano.

## Modo 1: Só preciso alterar valores, datas e informações específicas

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

## Modo 2: Adaptar para uma nova contratação

O mesmo tipo de contrato, contexto novo: outras partes, outro objeto, outras condições.

1. Tire do pedido o que mudou. Pergunte numa mensagem só o que faltar: lado do cliente, objeto, preço e pagamento, prazo, o que o cliente quer evitar, se há consumidor ou dado pessoal.
2. Mantenha estrutura, numeração, cláusulas gerais e a redação dele. Reescreva só as cláusulas que dependem do contexto novo; acrescente as que o contexto pede e retire as que não servem mais.
3. Relação de consumo: confira cada cláusula contra o art. 51 do CDC. Dado pessoal circulando: cláusula de proteção de dados. Os dois alertas vão no quadro.

## Modo 3: Transformar em outro tipo de contrato

1. Confirme o tipo de destino e o lado do cliente.
2. Aproveite do original a forma (timbre, fontes, numeração, qualificação, foro, notificações, confidencialidade) e a voz. O núcleo é reescrito com as cláusulas essenciais do tipo novo (lista na `contrato-a-partir-do-briefing`).
3. Cláusula do tipo antigo que não cabe no novo sai, e o quadro diz qual e por quê.
4. Aponte exigência de forma do tipo novo (escritura pública, registro, testemunhas pra título executivo) e artigo em dúvida com `[conferir artigo]`. Nunca escreva que o contrato "está de acordo com a lei".

## Montagem do arquivo

Gere o documento sobre o `.docx` dele, com a ferramenta de criação de arquivos, preservando timbrado, formatação e numeração (`timbrado-e-formatacao.md`). Marcas `[DEFINIR]` e `[conferir]` com realce amarelo. Nome: o tipo, o cliente em iniciais e a data, com `-revisar` no fim até ele aceitar. Nada de dado do cliente anterior guardado em `MODELOS/`.

O documento vai no arquivo; não cole o documento no chat. Se o ambiente não gerar .docx, diga em uma linha como ligar (Settings › Capabilities) e aí, sim, entregue o documento inteiro no chat, em texto limpo, **sem marcação markdown** (sem `**`, sem `#`, sem `>`), pronto pra colar no Word (a formatação original do .docx dele se perde: avise).

## Revisão antes de aceitar

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

## Fim

"É rascunho seu pra revisar. Quem assina e envia é você. Quer uma segunda leitura do contrato? Rode o `auditor-de-contratos` indicando o lado do seu cliente."
