# relatorio-de-status

Quando usar: Use quando o advogado pedir o relatório do mês, relatório de status, "resumo dos processos" pro cliente (empresa ou pessoa), ou colar os andamentos de um período pra prestar contas. Gera relatório em texto de advogado, de 1 a 2 páginas, processo por processo: o que aconteceu, situação, próximo passo, risco e o que se precisa do cliente, sem promessa de resultado.

# Relatório de status

Prestação de contas periódica (mensal, quinzenal) ou de um caso só, pra cliente empresa ou pessoa. Recado curto de um andamento é a `comunicacao-com-cliente`.

## O que entra

- O cliente e o período (sem período dito, o mês anterior).
- Os andamentos do período: a lista colada do sistema, as triagens do mês (`gestao-de-prazos-e-intimacoes`) ou as fichas dos casos. Com a pasta conectada ou o Drive ligado, busque as fichas pelo nome do cliente.
- O perfil do escritório (tratamento, canal com o cliente), `ESTILO-DO-ESCRITORIO.md` e, se existir, o modelo de relatório em `MODELOS/`. Se o escritório já mandou relatório pra esse cliente, busque o último e mantenha a ordem e os nomes dos casos.

## Regras

- **Texto de advogado, não tabela crua.** Um parágrafo curto por processo. Tabela só como quadro-resumo no topo, com mais de cinco processos.
- **Só o que está nos andamentos e nas fichas.** Processo parado entra com "sem movimentação no período"; não some.
- **Sem promessa:** nada de "vamos ganhar", "é certo", porcentagem de chance ou data de desfecho. O que depende do juiz vem com "depende de".
- **Risco** em palavra que o cliente entende (baixo, moderado, relevante), com uma frase de motivo. Se o cliente empresa já recebe a classificação provável, possível, remota, use a dele.
- **O que precisamos de você:** documento, custas, decisão sobre acordo, presença em audiência, com a data como consta.
- **Prazo** entra como consta. Não calcule vencimento.
- **Dados pessoais:** número do processo e partes, sim; CPF, endereço e dado de saúde, não. Processo em segredo de justiça entra por iniciais, sem detalhe, com convite pra conversar.
- **Notícia ruim no período:** escreva e sugira ao advogado ligar antes de mandar.

## Formato da saída

```
RELATÓRIO DE ACOMPANHAMENTO
Cliente: [nome] · Período: [dd/mm a dd/mm] · Emitido em: [data]

Resumo do período
[3 a 5 linhas: o que mudou de importante e o que precisamos do cliente]

[Quadro-resumo, só com mais de cinco processos]
| Processo | Situação | Próximo passo | Risco |

1. [Apelido do caso] · nº [processo] · [juízo]
O que aconteceu: …
Situação: …
Próximo passo: …
Risco: [baixo | moderado | relevante], [motivo]
O que precisamos de você: [ou "nada neste momento"]

[um bloco por processo]

[fecho do escritório: local, data, advogado e OAB]
```

**Até duas páginas** (cerca de 900 palavras). Com muitos processos, encurte os que não andaram.

## No fim

Diga ao advogado: "Leia antes de enviar: o relatório sai em seu nome. Se houver notícia ruim, ligue antes de mandar o texto. O que o cliente precisa mandar vira lista e cobrança pela `documentos-procuracao-e-honorarios`."
