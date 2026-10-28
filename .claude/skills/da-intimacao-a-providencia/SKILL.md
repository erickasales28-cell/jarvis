---
name: da-intimacao-a-providencia
description: Use quando o advogado colar intimações ou publicações (texto do DJEN no comunica.pje, painel do tribunal, e-mail do serviço de publicações) e disser "tria isso", "o que eu faço com essas intimações", "faz o ciente", "faz a juntada", "pede dilação de prazo", "pedido de prosseguimento", "substabelecimento". Complementa gestao-de-prazos-e-intimacoes, que tria o dia e mantém o PENDENCIAS.md, com cinco coisas: a triagem em baldes por urgência, a conta passo a passo pra ele conferir (DJEN ou portal), a providência com responsável e a skill que abre, e a peça de expediente de uma página pronta. A visão da semana inteira com responsável é a prazos-da-semana.
---

# Da intimação à providência

Antes, use a skill `advo-escritorio` e leia nela `metodos/gestao-de-prazos-e-intimacoes.md`, `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Abra o perfil do escritório (cidade, UF, tribunais, equipe), o `ESTILO-DO-ESCRITORIO.md` e o módulo `area-…` do caso.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual (o expediente de 1 página sai pela `peca-a-partir-da-ficha`, sem plano: pedido de expediente recebe a minuta direto, e o advogado a lê antes de protocolar). Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se o texto vier só com "fica intimado do documento X", não adivinhe: "abrir o processo pra classificar".

## Quando é esta e quando é a outra

- **Esta:** lote de intimações misturadas, e o advogado quer sair com a **providência** e, se for expediente, com a **peça pronta**.
- **`gestao-de-prazos-e-intimacoes` (Kit):** triagem do dia, `PENDENCIAS.md` e rascunho sob pedido.
- **`prazos-da-semana`:** a semana toda, com responsável, margem e carga por pessoa.

## Primeira mensagem: ALERTA e conta, antes de tudo

Se o advogado já colou intimações, a **primeira mensagem** traz o ALERTA (se houver) e a conta sugerida de cada uma, **antes de qualquer pergunta ou plano**. O plano ganha a linha "Prazo" (o que vence primeiro e a data sugerida). As perguntas abaixo vêm depois, só pro que a conta não resolveu. Falta dado (data de hoje, lado, meio)? Faça a conta com o que há, marque `[conferir: <o quê>]` e pergunte em seguida.

**Regra de contagem incerta** (úteis × corridos, transição de lei, feriado local, rito duvidoso): conte **os dois cenários**, mostre as duas datas, **use a mais curta pra priorizar** e marque `[conferir]`. O ALERTA usa a data mais curta.

## Antes (pergunte, no máximo 5)

1. Qual a data de hoje e o fuso de feriados: cidade, UF e tribunal?
2. De que lado o escritório está em cada processo? (Se a publicação não deixar claro.)
3. Por qual meio chegou cada uma: DJEN, portal do tribunal (PJe, eproc), Domicílio Judicial Eletrônico, e-mail? Já foi consultada no portal e quando?
4. Quem da equipe pega o quê?
5. Há processo em segredo de justiça no lote? (Iniciais, sem detalhe.)

## Por intimação

1. **Copie:** processo, tribunal, órgão, data de disponibilização, meio.
2. **Ato:** despacho de mero expediente (só ciência), decisão interlocutória, sentença, acórdão, intimação pra manifestar, juntar, pagar ou comparecer, audiência, citação.
3. **O que se pede, e de quem.** Se o prazo é da **parte contrária** (por exemplo, citação do réu), não é prazo do escritório: "acompanhar".
4. **Meio e regra** (veja abaixo).
5. **Conta sugerida**, em linhas.
6. **Balde.**
7. **Providência, responsável, skill que abre.**

## Baldes (cada intimação cai em um)

1. **Hoje ou amanhã** (inclui "consultar o portal hoje").
2. **Esta semana.**
3. **Mais adiante, com data.**
4. **Sem prazo** (providência sem data).
5. **Só ciência** (despacho de expediente, juntada de AR, ato sem providência).

Prazo longo não é prazo leve: sentença fica em "mais adiante" com a marca **FATAL** se for prazo de recurso.

## A conta (sempre sugestão a conferir)

Mostre cada passo, nesta ordem:
1. **Disponibilização:** dd/mm e dia da semana.
2. **Publicação:** o primeiro dia útil seguinte à disponibilização (Lei 11.419/2006, art. 4º, §3º; CPC, art. 224, §2º).
3. **Início:** o primeiro dia útil seguinte à publicação (Lei 11.419, art. 4º, §4º; CPC, art. 224, §3º). **O dia do início conta como dia 1**; a publicação não conta (CPC, art. 224, caput). Ex.: disponibilização na sexta, publicação na segunda, início na terça = dia 1; com 5 dias úteis, terça a segunda, vence na segunda seguinte (sugerido).
4. **Dias:** os da publicação, ou os da lei, com o artigo; sem prazo fixado por lei nem pelo juiz, cinco dias (CPC, art. 218, §3º); senão `[conferir prazo e artigo]`.
5. **Úteis ou corridos:** úteis nos prazos processuais do CPC (art. 219, caput e parágrafo único); trabalhista e penal seguem o módulo da área (penal é corrido).
6. **Dias pulados:** sábado, domingo, feriado nacional; recesso de 20/12 a 20/01 suspende o prazo (CPC, art. 220); feriado local, ponto facultativo e suspensão do tribunal viram **aviso**, não conta. Se o último dia cair em dia sem expediente ou com indisponibilidade do sistema, passa ao primeiro dia útil seguinte (art. 224, §1º). Em prazo de recurso, o feriado local tem de ser **comprovado na interposição**; se não for, o relator manda sanar (art. 1.003, §6º, na redação da Lei 14.939/2024): anote o documento que prova o feriado.
7. **Dobra, só se couber:** Fazenda Pública (art. 183) e Defensoria (art. 186) contam da **intimação pessoal**, não da publicação no DJEN; Ministério Público (art. 180) também. A intimação eletrônica pelo sistema ou pelo Domicílio vale como pessoal (Lei 11.419, art. 5º, §6º, e art. 9º, §1º): o prazo do ente nasce da ciência no sistema. **Não dobra:** (a) lei que fixa expressamente prazo próprio pro ente (art. 183, §2º) ou pra Defensoria (art. 186, §4º); (b) juizados especiais: sem prazo diferenciado (Lei 10.259, art. 9º; Lei 12.153, art. 7º); (c) escritório contratado pelo ente, sem procuradoria própria: a prerrogativa é da advocacia pública, então não conte dobra nem intimação pessoal e marque `[conferir jurisprudência]` (não achei precedente); (d) litisconsortes com advogados de escritórios diferentes têm dobro (art. 229), **mas não em autos eletrônicos** (§2º), e cessa se, havendo só dois réus, um deles contesta (§1º). Na dúvida, conte os dois cenários.
8. **Resultado provável:** "vence (sugerido) dd/mm". Nunca "vence dd/mm" sozinho.

**ALERTA no topo da resposta** (régua única): prazo processual ou contratual que vence em **5 dias úteis ou menos**; decadência ou prescrição a 60 dias ou menos, ou janela já aberta; conta que não fecha (disponibilização faltando, meio duvidoso). Prazo que **já venceu** vai no topo como VENCIDO. Vencimento em dia sem expediente: mostre a prorrogação legal e, pra planejar, o dia útil anterior. O alerta lista processo, ato e vencimento sugerido.

## DJEN, Domicílio ou só portal: o meio muda a conta

- **DJEN (publicação):** conta acima. Quando a lei não exige vista ou intimação pessoal, o prazo do advogado conta da publicação no DJEN, e intimação ou comunicação **concomitante por outro meio** (painel do PJe ou eproc, push, e-mail) tem **valor meramente informacional** (Res. CNJ 455/2022, art. 11, §3º, na redação da Res. 569/2024). O DJEN substituiu os diários dos tribunais; a contagem exclusiva por DJEN e Domicílio vale desde 16/05/2025 segundo comunicado do CNJ e atos de tribunais `[conferir a data de adesão do seu tribunal]`.
- **Domicílio Judicial Eletrônico:** é só pra citação eletrônica e pra comunicação que exija vista, ciência ou intimação **pessoal** (Res. 455, art. 18): parte, ente público, perito. Sem consulta em **dez dias corridos** do envio, considera-se realizada no fim desse prazo (Res. 455, art. 20, §4º; Lei 11.419, art. 5º, §3º); citação de pessoa jurídica de direito público segue a mesma regra dos dez dias corridos (art. 20, §3º-A), e, consultada no prazo, a resposta conta do quinto dia útil após a confirmação (CPC, art. 231, IX). Prazo do escritório raramente nasce aqui: é "meio diferente: conte à parte".
- **Intimação só pelo sistema, sem publicação no DJEN** (tribunal que intima o advogado pelo portal): considera-se feita no dia em que o intimado **consulta** o teor, com a consulta certificada nos autos (Lei 11.419, art. 5º, §1º); consulta em dia não útil vale no primeiro dia útil seguinte (§2º); sem consulta em dez dias corridos do envio, considera-se feita no fim desse prazo (§3º). O dia do começo é o dia útil seguinte à consulta ou ao fim dos dez dias (CPC, art. 231, V); como o art. 224, caput, exclui o dia do começo, há duas leituras sobre qual é o dia 1: conte as duas, priorize a mais curta e marque `[conferir a prática do tribunal]`. Antes de aplicar esta regra, confira se o mesmo ato saiu no DJEN: se saiu, vale o DJEN. Mande consultar e certificar hoje.
- **Mesmo ato por dois canais:** pro advogado o DJEN é o que conta e o outro canal é informativo (art. 11, §3º). Ainda assim mostre as duas contas e adote como **prazo de trabalho a mais curta**: o custo de errar é a preclusão, e a escolha fica com o advogado.

## Providência

Por intimação: o que fazer, quem (`[definir]` se não indicado), e a skill: sentença ou acórdão → recurso da área (`peca-a-partir-da-ficha`) ou embargos; decisão interlocutória → recurso cabível; manifestar sobre documento ou laudo → manifestação; audiência → **avisar o cliente** (data, hora, local, comparecimento pessoal e o que a ausência acarreta: ato atentatório, multa de até 2% da vantagem econômica ou do valor da causa, CPC, art. 334, §8º; na conciliação do art. 334, o réu manifesta desinteresse por petição com **10 dias de antecedência** da audiência, §5º, e a audiência só é dispensada se **ambas** as partes o fizerem, §4º, I) e abrir `preparacao-de-audiencia`; pagamento ou documento do cliente → `comunicacao-com-cliente`; expediente → peça abaixo.
## Expediente de uma página

Quando a providência é expediente, redija a peça: endereçamento e qualificação como no modelo do escritório; `[número do processo]`, `[id do documento]` e `[OAB]` em branco; 4 a 8 linhas; fecho padrão. Cinco tipos:

- **Ciente:** toma ciência da decisão ou do ato (id), e diz o que fará, se houver. Ciente **não suspende nem interrompe prazo**: se há prazo correndo, não protocole ciente no lugar da providência.
- **Juntada de documento:** identifica cada documento, diz pra que serve na causa, sem mérito novo. Cuide do tamanho do arquivo no sistema (PJe, limite por PDF `[conferir]`) e da fase: documento fora da fase pode ser recusado `[conferir]`.
- **Substabelecimento:** com ou sem reserva. Com reserva é ato pessoal do advogado da causa; sem reserva exige o prévio e inequívoco conhecimento do cliente (CED, art. 26, caput e §1º). Peça de juntada do instrumento e, se o escritório quiser, as intimações em nome do substabelecido `[conferir regra do tribunal]`. O substabelecido com reserva ajusta antes os honorários (CED, art. 26, §2º).
- **Dilação de prazo:** o juiz pode prorrogar prazos processuais, e a dilação só vale **antes de terminado o prazo regular** (CPC, art. 139, VI e parágrafo único). Peça com o motivo concreto e o número de dias que o advogado informar. Protocole cedo e continue preparando a peça: deferimento não é certo.
- **Prosseguimento ou impulso:** peça uma **providência concreta** (citação por [meio], penhora, ofício, designação de audiência), nunca "o que de direito".

## Saída

```
ALERTA: [processo · ato · vence (sugerido) dd/mm, em N dias úteis] (só se houver)

TRIAGEM DE [data] · [N] intimações
| # | Processo | Ato e de quem é o prazo | Balde | Vence (sugerido) | Conta (uma linha: disp. → pub. → início = dia 1 → N dias [úteis|corridos] [dobro: motivo]; pulados e avisos) | Providência · responsável · skill |
(uma linha por intimação, em ordem de urgência)

PEÇA #n · [tipo] (texto pronto), só dos expedientes que o advogado pediu ou que a providência exige

CONFIRA
Feriado local, suspensão do tribunal, rito e dobro são do advogado. Confira cada prazo no calendário do tribunal antes de lançar na agenda.
```

Saída enxuta: a primeira mensagem é o ALERTA e a tabela. A conta em passos (os oito itens acima) só pras intimações com prazo e quando houver dúvida ou o advogado pedir. Sem bloco de pendência por intimação: uma linha no fim ("lançar no `PENDENCIAS.md`?").

CPF, endereço e dado de saúde da publicação não entram na triagem.

## Não fazer

- Cravar data final como certa, ou esconder prazo curto fora do ALERTA.
- Aplicar a conta do DJEN a intimação pessoal ou por Domicílio; ou ignorar o DJEN porque o mesmo ato também apareceu no painel (pro advogado, o DJEN é o que conta).
- Dar prazo do escritório a ato cujo prazo é da parte contrária.
- Escrever "ciente" como se resolvesse o prazo.
- Escrever "requer o que de direito".

*Referências conferidas em 21/10/2026 (CPC, arts. 139, 180, 183, 186, 218, 219, 220, 224, 229, 231, 246, 270, 334 e 1.003, §6º, e Lei 11.419/2006, arts. 4º, 5º e 9º, pelo Planalto via proxy; Lei 10.259, art. 9º, e Lei 12.153, art. 7º, idem; Resolução CNJ 569/2024, texto oficial em atos.cnj.jus.br, que dá a redação dos arts. 11, §3º, 18 e 20 da Resolução 455/2022 (o consolidado da 455 não abriu); CED, art. 26, PDF da OAB-SE; data de 16/05/2025 por comunicado do CNJ e atos de tribunais, não pelo texto da norma; dobra de escritório contratado pelo ente: sem precedente confirmado). Lei, resolução e prática do tribunal mudam: por isso existe a conferência antes de protocolar.*
