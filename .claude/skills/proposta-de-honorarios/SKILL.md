---
name: proposta-de-honorarios
description: Use quando o advogado pedir "faz a proposta de honorários", "como cobro esse caso", "fixo ou êxito?", "monta a proposta pro WhatsApp", "proposta formal pro cliente", "quanto é a tabela da OAB", "posso cobrar só no êxito?" depois de já ter atendido a pessoa. Complementa documentos-procuracao-e-honorarios (que gera o contrato com [DEFINIR]) com a escolha do modelo de cobrança, os limites éticos da quota litis, a referência à tabela da seccional e duas versões da proposta: curta e formal.
---

# Proposta de honorários

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md`, `metodos/plano-antes-de-gerar.md` e `metodos/documentos-procuracao-e-honorarios.md`. Abra o `ESTILO-DO-ESCRITORIO.md` e, se existir, o modelo de proposta em `MODELOS/`.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se a pessoa ainda não foi atendida (veio só uma mensagem de contato), pare: preço não se discute no chat com quem ainda não é cliente (Provimento 205/2021, art. 3º, I; veja `triagem-de-lead-e-caso-novo`). Proposta é depois da consulta, a pedido ou por decisão do advogado, individual.

## Antes da proposta (pergunte, no máximo 5)

1. Qual o objeto e até onde vai o patrocínio: só a fase inicial, até a sentença, recursos, execução? O contrato diz se abrange todos os atos ou se limita a um grau de jurisdição (CED, art. 48, §1º).
2. Quanto a pessoa pode pagar e como (à vista, parcelas, só no fim)? A condição econômica do cliente e o proveito esperado entram na moderação (CED, art. 49, IV).
3. Qual o valor que o advogado quer propor? Se não souber, a skill ajuda a montar o modelo, nunca escolhe o número.
4. Qual o piso da tabela de honorários da seccional da OAB do advogado, pro serviço? O advogado deve observar o valor mínimo da tabela do Conselho Seccional, inclusive nas diligências, sob pena de aviltamento (CED, art. 48, §6º). A skill não traz número de tabela: cada seccional tem a sua. `[conferir a tabela vigente da seccional]`.
5. Quem paga custas, perícia, deslocamento e diligências? Na falta de disposição, presumem-se devidos pelo cliente (CED, art. 48, §3º).

## Modelos de cobrança (apresente 2 ou 3 que servem ao caso, com prós e contras)

- **Fixo:** valor fechado, à vista ou parcelado, com data. Simples; o risco do tempo é do advogado.
- **Por ato ou por fase:** um valor por etapa (inicial, instrução, cada recurso, execução). Combina com criminal e com causa de duração incerta. Sem estipulação, o Estatuto divide em um terço no início, um terço até a sentença de primeiro grau e o restante ao final (Lei 8.906/1994, art. 22, §3º).
- **Êxito (quota litis):** percentual sobre o proveito. Limites do CED, art. 50: os honorários têm de ser **representados por pecúnia** e, somados aos de sucumbência, **não podem superar as vantagens que o cliente obtiver**. Participação em bem do cliente só em caráter excepcional, quando ele não tiver condições pecuniárias, e em instrumento contratual (§1º). Pode incidir sobre prestações vencidas e vincendas, com moderação e razoabilidade (§2º).
- **Misto:** fixo menor na entrada + êxito. O mais comum quando o cliente tem alguma renda e o caso tem proveito.
- **Mensal (partido):** valor por mês pra assessoria ou carteira de processos, com escopo escrito e regra pra o que passa do escopo.
- **Por hora:** só consultivo, com relatório de horas.

Em todo modelo diga na proposta: o que **é** êxito (acordo conta? valor bruto ou líquido?), sobre **qual base** incide, se a sucumbência soma ou se compensa, e o que acontece se o cliente fizer acordo sem o advogado.

## Regras que valem em qualquer modelo

- Os honorários de sucumbência pertencem ao advogado (Lei 8.906, art. 23; CPC, art. 85, §14). Diga se ficam além do contratado, se abatem do êxito, ou como ficam. Sem clareza, vira briga.
- É vedada a diminuição dos honorários contratados em razão de solução extrajudicial do litígio (CED, art. 48, §5º). Acordo não derruba o contrato.
- Honorários em valor aviltante são vedados (CED, art. 2º, parágrafo único, VIII, f).
- O advogado promove, de preferência de forma destacada, a execução dos honorários (CED, art. 48, §7º). Juntar o contrato antes de expedido o mandado de levantamento ou precatório permite o pagamento direto ao advogado, por dedução do que o cliente receberia, salvo prova de que ele já pagou (Lei 8.906, art. 22, §4º). Ponha na proposta que o contrato será juntado.
- Pro bono é gratuidade eventual e voluntária pra quem não tem recursos (CED, art. 30, §§1º e 2º) e não serve de instrumento de publicidade (§3º). Não ofereça "sem custo" como atrativo.

## Publicidade: a proposta não é anúncio

Proposta vai pra uma pessoa, depois da consulta. Nunca em post, story, grupo de WhatsApp ou lista de transmissão. É vedada referência a valores de honorários, forma de pagamento, gratuidade ou desconto como forma de captação (Provimento 205/2021, art. 3º, I), e expressões persuasivas (art. 3º, IV). Sem "desconto só hoje", sem comparar com outro advogado, sem "só paga se ganhar" como chamada.

## Saída

```
PROPOSTA · VERSÃO CURTA (WhatsApp, até 8 linhas)
[tratamento do escritório]. Como conversamos, a proposta pra [objeto] é: [modelo: valores e datas]. Custas e despesas: [quem paga]. [Se houver êxito: percentual sobre ___ ; sucumbência: ___]. Vale até [data]. Qualquer dúvida, me diga antes de assinar.

PROPOSTA · VERSÃO FORMAL (carta de 1 página)
Objeto e extensão do patrocínio · Honorários ajustados e forma de pagamento · Êxito (definição e base) · Sucumbência · Custas e despesas · Acordo, rescisão e substabelecimento · Validade da proposta · Local, data, advogado e OAB.

PARA O ADVOGADO
Piso da seccional: [conferir tabela vigente]. Limites do art. 50 do CED conferidos? Contrato a gerar por `contrato-de-honorarios-por-area`.
```

Valor e percentual saem como `[valor: definido pelo advogado]` e `[percentual: definido pelo advogado]` quando ele não informou. Não calcule o proveito do cliente.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "honorários contratuais, quota litis e destaque de honorários" (súmula e precedente qualificado primeiro) e `buscar_em_todos`. Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: honorários contratuais, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. (Súmula Vinculante 47 do STF, conferida no BNP/CNJ em 19/10/2026: honorários incluídos na condenação ou destacados do montante principal têm natureza alimentar e são pagos por precatório ou RPV.)

## Não fazer

- Inventar número de tabela da OAB ou dizer que "a tabela manda X%".
- Propor abaixo do piso da seccional sem avisar o advogado.
- Condicionar honorários a resultado em causa em que o advogado não possa ligar pagamento a êxito sem ferir a ética; em dúvida, `[conferir no Tribunal de Ética da seccional]`.
- Prometer resultado ou prazo na proposta.

*Referências conferidas em 21/10/2026 (CED, Resolução CFOAB 02/2015, arts. 2º, 30, 48, 49 e 50, PDF da OAB-SE; Lei 8.906/1994, arts. 22 e 23, texto consolidado da Câmara, já com a Lei 15.472/2026; CPC, art. 85, Planalto via proxy; Provimento 205/2021, art. 3º, PDF da OAB-ES; Súmula Vinculante 47, BNP/CNJ). Confira alterações posteriores do CED e a tabela da sua seccional.*
