# parecer-e-minuta

Quando usar: Use quando o advogado pedir parecer jurídico ou resposta formal a uma consulta ("o cliente quer saber se pode…"), ou minuta de documento simples: requerimento administrativo, declaração, termo (acordo, quitação, ciência, compromisso), e-mail ou carta formal. Escreve na voz do escritório, lendo o ESTILO-DO-ESCRITORIO e o modelo em MODELOS antes, com julgado só na marca [INSERIR JULGADO]. Petição, recurso e notificação de um caso vão pela peca-a-partir-da-ficha; contrato, pela contrato-a-partir-do-briefing.

# Parecer e minuta

## Quando cabe

- **Parecer:** consulta de cliente ou de colega que pede resposta fundamentada, antes ou fora do processo.
- **Minuta:** documento curto que não é peça processual: requerimento a órgão público, declaração, termo, e-mail ou carta formal.
- Peça num processo ou notificação: use a peca-a-partir-da-ficha. Contrato: contrato-a-partir-do-briefing. Procuração, contrato de honorários e declaração de hipossuficiência de caso novo: use a documentos-procuracao-e-honorarios.

## O que entra

- **Voz, antes de tudo:** perfil do escritório (instruções do projeto), `ESTILO-DO-ESCRITORIO.md` e o modelo mais próximo em `MODELOS/` (`parecer.md`, `requerimento.md`, `email-formal.md`). Sem modelo do tipo, busque na pasta conectada ou no Drive o documento mais recente desse tipo e use como modelo do dia, anonimizando o que for de cliente e avisando. Sem nenhum, diga que sai no formato do perfil, sem a voz.
- **Parecer:** a consulta nas palavras de quem pergunta, os fatos informados e os documentos. Se a consulta nasce de um processo com ficha, use a `FICHA-DO-CASO.md` da pasta do caso.
- **Minuta:** quem assina, pra quem vai, o que precisa dizer.

## Regras

- **Roteiro antes do parecer:** as questões como vai formulá-las e a conclusão provisória, em até 8 linhas, e espere o ok. Minuta de uma página vai direto, e roda bem no modelo leve.
- **Fatos, só os informados.** O parecer parte deles e não os apura: "conforme informado pelo consulente". Fato que muda a conclusão e não veio vira pergunta, não suposição.
- **Uma questão, uma resposta.** Cada questão tem resposta objetiva na conclusão: sim, não, ou depende de quê.
- **Lei pelo número,** só com certeza do dispositivo; na dúvida, `[conferir artigo]`. Doutrina, só a que o advogado forneceu.
- **Jurisprudência:** a fornecida pelo advogado ou a da pesquisa-jurisprudencial, com link. Fora isso, `[INSERIR JULGADO: tema, conferir]`. Nunca de memória.
- **Sem promessa:** o parecer diz o que a norma e os fatos sustentam e onde está o risco. Não garante resultado.
- **Campos pessoais na minuta** (CPF, RG, endereço, dados bancários) ficam `[CPF]`, `[ENDEREÇO]`, mesmo que o dado esteja na conversa. O advogado preenche fora da IA.
- **Correção só no trecho,** dizendo onde ele entra.

## Formato fixo

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

## Entrega em Word

O parecer ou a minuta vai **no arquivo .docx pra baixar e editar**, gerado com a ferramenta de criação de arquivos e montado pelo `timbrado-e-formatacao.md` (timbrado, ou `.docx` de modelo do mesmo tipo, ou documento limpo). Não cole o documento no chat. No chat vai um resumo de até 8 linhas: o que fez, de onde tirou os fatos, o que ficou `[DEFINIR]` ou `[INSERIR JULGADO]`. Se o ambiente não gerar .docx, diga em uma linha como ligar (Settings › Capabilities) e aí, sim, entregue o documento inteiro no chat, em texto limpo, **sem marcação markdown** (sem `**`, sem `#`, sem `>`), pronto pra colar no Word.

## No fim

Diga ao advogado: "Antes de enviar ou protocolar, rode a conferência: ela lista cada citação e cada [INSERIR JULGADO] pra você checar na fonte. Os campos entre colchetes são seus, e quem assina é você."
