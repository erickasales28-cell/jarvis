# analise-de-risco-e-prognostico

Quando usar: Use quando o advogado pedir análise de risco, prognóstico, estratégia, "quais as chances" ou "vale a pena entrar, recorrer ou fazer acordo" num caso. Parte da FICHA DO CASO e devolve forças e fraquezas de cada tese, provas que faltam, três cenários sem porcentagem e sem promessa, e uma recomendação de estratégia. É documento interno de apoio à decisão do advogado: nunca vai pro cliente como está.

# Análise de risco e prognóstico

Este é o "Elaborar estratégias": estratégia jurídica e exploração de teses de um caso. Ele alimenta o plano da peça: quando o advogado pedir a peça depois, as teses fortes da seção 1 viram o eixo, as razoáveis entram como subsidiárias, as frágeis só entram se ele decidir, as provas que faltam (seção 3) viram pendências do plano e a recomendação (seção 6) diz o rumo. O plano cita esta análise pela data em vez de refazê-la.

Serve pra o advogado decidir com a informação arrumada. Não decide por ele e não é texto de cliente.

## Quando cabe

Antes de ajuizar, contestar, recorrer ou fechar acordo; quando chega prova ou decisão nova; quando o cliente pergunta "quais as chances".

## O que entra

- **Ficha do caso** (`FICHA-DO-CASO.md` na pasta do caso). Sem ela, faça a ficha pela `ficha-do-caso`, sem avisar e sem etapa separada, e siga. Resumo de decisão e cronologia, se estiverem na pasta, entram junto.
- **O objetivo do cliente,** nas palavras do advogado (receber rápido, não pagar nada, manter o contrato). Se ele não disse, não pare: use o que os pedidos da ficha indicam e escreva na linha "Objetivo" que foi assumido. A recomendação muda com ele, então ele corrige ali.
- **Custo e tempo:** só o que o advogado informar (custas, perícia, honorários, o tempo que ele vê na vara). Sem isso, a seção sai "não informado". Não estime.
- **Jurisprudência:** só a que o advogado forneceu ou a que veio da pesquisa-jurisprudencial, com link. "O tribunal entende que" de memória não entra; onde fizer falta, `[INSERIR JULGADO: tema, conferir]`.
- **Perfil do escritório** (instruções do projeto), inclusive as teses que o escritório não sustenta.
- **Módulo da área** (`area-…` do perfil): a seção 9 diz o que pesa no prognóstico desta área, e a 4 traz as teses e provas que costumam decidir.

## Regras

- **Sem porcentagem, nota ou "chance alta".** Número dá aparência de cálculo onde não houve cálculo. Cada tese recebe **forte, razoável ou frágil**, com o porquê em uma linha e a referência na ficha.
- **Os dois lados passam pela mesma régua:** as teses da parte contrária também são avaliadas.
- **Ônus da prova:** pra cada fato que decide, quem precisa provar (CPC, art. 373, ou a regra própria do rito, com `[conferir artigo]` quando houver dúvida).
- **Provas que faltam:** qual prova, pra qual tese, como obter (documento com o cliente, ofício, perícia, testemunha). Se a fase ainda permite produzir, é pergunta pro advogado, não cálculo seu.
- **Cenários melhor, provável e pior:** o resultado de cada um, o que precisa acontecer pra chegar nele e o que o cliente ganha ou perde, incluindo sucumbência (CPC, art. 85) quando houver risco de pagar honorários ao outro lado. "Provável" é o que a ficha sustenta hoje, não o que se deseja.
- **Nenhuma linha promete resultado,** nem a recomendação.
- **Recomendação:** um caminho, a razão e o que faria mudar de ideia. Se houver alternativa próxima (acordo, desistir de um pedido, produzir prova antes), aponte.
- **O topo leva** `USO INTERNO: NÃO ENVIAR AO CLIENTE`.

## Formato fixo

```
# Risco e prognóstico: [apelido do caso]
USO INTERNO: NÃO ENVIAR AO CLIENTE · Base: ficha de [data] · Feita em: [data]
Objetivo do cliente: [como informado | assumido pela ficha: ...]

1. Teses
   | Tese | De quem | Força | Por quê | Ref. |
2. Fatos que decidem e quem tem o ônus de provar
3. Provas que faltam
   | Prova | Pra qual tese | Como obter |
4. Cenários
   Melhor: [resultado] · depende de: [...]
   Provável: [resultado] · depende de: [...]
   Pior: [resultado, com sucumbência] · depende de: [...]
5. Custo e tempo: [como informado, ou "não informado"]
6. Recomendação: [caminho] · porque [...] · reavaliar se [...]
7. A conferir: julgados marcados, fatos em dúvida
```

## No fim

Diga ao advogado: "Isto é apoio à sua decisão e fica no escritório. O que contar ao cliente é escolha sua; se quiser, escrevo a mensagem a partir do que você decidir, sem cenário graduado e sem promessa, pela comunicacao-com-cliente. Se ficou julgado marcado, rode a pesquisa-jurisprudencial antes de decidir."
