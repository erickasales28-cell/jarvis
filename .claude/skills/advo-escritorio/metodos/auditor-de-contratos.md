# auditor-de-contratos

Também atende por: Análise contratual com parecer (a matriz de risco com a redação sugerida é o parecer; pedido de parecer formal sai em .docx).

Quando usar: Use quando o advogado colar ou apontar na pasta um contrato pra revisar, auditar, "ver os riscos", comparar duas versões ou dizer se o cliente pode assinar. Entrega a matriz de risco por cláusula (alto, médio, baixo, com o motivo), cláusulas abusivas e faltantes, obrigações e prazos como constam, o que mudou entre versões, redação sugerida por cláusula e um resumo de duas linhas pro cliente.

# Auditor de contratos

Contrato pronto, do cliente ou da outra parte, antes de assinar ou negociar. Contrato do zero é o `contrato-a-partir-do-briefing`.

## O que entra

- **O contrato.** Com a pasta conectada (Cowork) ou o Drive ligado, abra de lá, buscando pelo nome do cliente ou da outra parte; só peça o arquivo na conversa sem pasta nem Drive. Duas versões? Leia as duas.
- **De que lado o cliente está.** Sem isso não há risco: a mesma multa protege um e ameaça o outro. Se o advogado não disse, veja pela pasta do cliente ou pela ficha; pergunte só se não der pra saber.
- O que o cliente quer do negócio, se o advogado souber, em uma linha.
- O perfil do escritório e, pra redação sugerida, `ESTILO-DO-ESCRITORIO.md` e o modelo do mesmo tipo em `MODELOS/`. O modelo também é régua pra achar o que falta.

## Regras

- **Cláusula por cláusula, pelo número, mas na matriz só entra a que tem risco.** Cláusula neutra fica de fora, e o topo diz quantas foram lidas. O risco é medido pro lado do cliente, com o motivo em uma linha. Alto: pode custar dinheiro relevante, prender o cliente no contrato ou ser nulo. Médio: desequilíbrio que dá pra negociar. Baixo: redação confusa ou incompleta.
- **Abusiva:** em relação de consumo, confira contra o art. 51 do CDC e contra o destaque que o art. 54, §4º exige na cláusula que limita direito. Fora do consumo, fale em desequilíbrio, não em abusividade.
- **Faltante:** o que esse tipo de contrato costuma ter e este não tem (rescisão, multa, reajuste, foro, garantia, limite de responsabilidade, proteção de dados quando circula dado pessoal).
- **Obrigações e prazos como constam:** copie o prazo ou a data ao pé da letra, com a cláusula. Não converta em data de vencimento.
- **Versões:** só o que mudou, e quem ganha com a mudança.
- **Redação sugerida:** texto pronto pra colar, só nas cláusulas de risco alto e médio, na voz do modelo do escritório.
- Artigo em dúvida: `[conferir artigo]`. Nunca escreva que o contrato "está conforme a lei": você não revisou a legislação vigente.
- CPF, endereço e conta bancária do contrato não se repetem na saída.

## Formato da saída

```
# Auditoria: [tipo de contrato] · cliente = [parte]
Lido em: [data] · Versões: [única | v1 e v2] · Cláusulas lidas: [N] · com risco: [X]

MATRIZ DE RISCO (mais grave primeiro)
| Cláusula | O que diz (até 10 palavras) | Risco | Por quê | Sugestão |

FALTANDO
- [cláusula ausente · por que importa]

OBRIGAÇÕES E PRAZOS COMO CONSTAM
| Quem | O quê | Prazo ou data (literal) | Cláusula |

O QUE MUDOU ENTRE VERSÕES (só com duas)
| Cláusula | Antes | Depois | Favorece |

REDAÇÃO SUGERIDA
Cláusula X: onde se lê "…", leia-se "…"

PRO CLIENTE (duas linhas)
[o que o contrato faz com ele e o que mudar antes de assinar]

A CONFERIR
- [artigos marcados, trecho ilegível, anexo citado e não enviado]
```

## No fim

Diga ao advogado: "A matriz mede o risco pro lado que você indicou. Confira os artigos marcados, e leia o resumo pro cliente antes de mandar: ele sai em seu nome. Pra virar mensagem de WhatsApp, é a `comunicacao-com-cliente`."
