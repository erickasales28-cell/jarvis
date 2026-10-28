# gestao-de-prazos-e-intimacoes

Quando usar: Use quando o advogado colar as publicações ou intimações do dia (do comunica.pje.jus.br, do painel do tribunal ou do e-mail de captura) e pedir triagem, "o que tenho hoje", prazo ou providência. Devolve a tabela do dia (ato, o que se pede, urgência, providência, quem avisar) e um bloco por prazo com a conta sugerida à mostra, pra ele conferir. Também quando ele disser "o que isso quer dizer?", "faz o rascunho da #2" ou "o que tenho essa semana?".

# Gestão de prazos e intimações

Você tria e mostra a conta. Quem confere e lança o prazo é o advogado.

**Skills do pacote de Gestão (Pro).** Com elas instaladas, `da-intimacao-a-providencia` cuida do lote de intimações (baldes, conta à mostra, DJEN ou portal, providência e peça de expediente de uma página) e `prazos-da-semana` monta a semana por prioridade e responsável; elas prevalecem sobre este método, que fica como base e para quem não as tem. A régua do ALERTA é a do `SKILL.md` ("Prazo e ALERTA") e vale aqui.

## O que entra

- O texto das publicações, como veio. Você não busca no DJEN (ele recusa acesso de fora do Brasil): o advogado consulta pela OAB em comunica.pje.jus.br e cola, ou salva a captura do dia na pasta conectada e você lê de lá.
- O perfil do escritório: cidade, UF e tribunais, pra saber que feriado local pedir pra conferir.
- A ficha (`FICHA-DO-CASO.md`, pelo número do processo), só quando a publicação não deixa claro de que lado o escritório está. Não abra ficha à toa.
- O módulo da área do perfil (`area-…`): as seções 1 e 2 dele trazem o rito e a contagem desta área e mandam sobre a regra geral abaixo.

## Por publicação

1. Processo, tribunal, órgão e data de disponibilização, copiados.
2. **Ato:** despacho de expediente, decisão, sentença, acórdão, intimação pra manifestar, pagar, comparecer, citação.
3. **O que se pede,** em uma linha, e de quem.
4. **Urgência:** alta (prazo curto, tutela, sentença, audiência próxima), média, baixa (ciência sem providência).
5. **Providência sugerida** e **quem avisar** (cliente, perito, correspondente, ninguém).
6. **Sem teor:** se o texto só diz "fica intimado do documento X", escreva "abrir o processo pra classificar". Não adivinhe.

## Prazo sugerido

- **O dia do início é o dia 1.** A publicação não conta. Exemplo: disponibilizado na sexta, publicado na segunda, início na terça (dia 1): 5 dias úteis vencem na segunda seguinte, e não na terça. Quem lê "início, depois N dias" como dia 0 marca o vencimento um dia depois do real e perde o prazo.
- **DJEN:** disponibilização → publicação no primeiro dia útil seguinte (Lei 11.419, art. 4º, §3º; CPC art. 224, §2º) → início no primeiro dia útil seguinte à publicação (Lei 11.419, art. 4º, §4º; CPC art. 224, §3º).
- **Intimação pessoal (Fazenda, Ministério Público, Defensoria):** o prazo conta da intimação pessoal, e não do DJEN; a data da publicação serve só de referência de segurança (CPC arts. 180, 183 e 186). Se você não vê a intimação pessoal, diga e mostre a conta pelo DJEN como hipótese.
- **Portal e Domicílio Judicial Eletrônico:** não há data única, calcule **dois cenários** e alerte pelo mais curto. (A) Consulta ao teor: a intimação vale no dia da consulta, ou no primeiro dia útil seguinte se a consulta foi em dia não útil (Lei 11.419, art. 5º, §§1º e 2º), e o prazo começa no dia útil seguinte à consulta (CPC art. 231, V). (B) Sem consulta: a intimação vale no último dia dos 10 dias corridos do envio (Lei 11.419, art. 5º, §3º) e o prazo começa no dia útil seguinte (art. 231, V). Peça a data do envio e a da consulta.
- **Dias:** os que a publicação fixar. Sem prazo fixado, o da lei, só com o artigo certo; senão `[conferir prazo e artigo]`. Sem prazo na lei nem do juiz: 5 dias (CPC art. 218, §3º).
- **Rito:** dias úteis no cível (CPC art. 219), no trabalho (CLT art. 775) e no juizado cível (Lei 9.099/1995, art. 12-A); corridos no penal, inclusive no juizado criminal. No administrativo, **pelo diploma do rito**: Lei 9.784 (art. 66, §2º) e Lei 8.112 (art. 238) em dias corridos; Lei 14.133 (art. 183) em dias úteis. O módulo da área do perfil manda sobre esta regra.
- **Dobro, quando o caso indicar:** Fazenda Pública (CPC art. 183), Ministério Público (art. 180), Defensoria (art. 186), litisconsortes com advogados de escritórios diferentes em autos físicos (art. 229, não em autos eletrônicos). **Não dobra** quando a lei dá prazo próprio (art. 183, §2º; art. 186, §4º), nos juizados (Lei 10.259, art. 9º; Lei 12.153, art. 7º) nem nas informações do mandado de segurança. Escritório contratado pelo ente, sem procuradoria própria: não conte dobra nem intimação pessoal e marque `[conferir jurisprudência]`.
- **Sentença e interlocutória:** mostre as duas contas, o recurso (apelação ou agravo, 15 dias úteis, CPC arts. 1.003, §5º, e 1.015) e os embargos de declaração (5 dias úteis, art. 1.023), que interrompem o prazo do recurso (art. 1.026); alerte pela mais curta. Trabalhista: o ED interrompe, salvo se intempestivo (CLT art. 897-A, §3º).
- Pule sábado, domingo e feriado nacional (1/1, 21/4, 1/5, 7/9, 12/10, 2/11, 15/11, 20/11, 25/12). Carnaval, Semana Santa, Corpus Christi, datas do Judiciário, feriado local e o recesso de 20/12 a 20/1 (CPC art. 220) viram aviso, não conta. Ponto facultativo local (ex.: Dia do Servidor, 28/10) entra como aviso.
- Com execução de código ligada, conte com código.

## Formato da saída

```
ALERTA: [prazo que vence em até 5 dias úteis, prescrição ou decadência a 60 dias ou menos, ou VENCIDO, com a conta] (só se houver; vem antes de tudo)

TRIAGEM DE [data] · [N] publicações, mais urgente primeiro
| # | Processo | Ato | O que se pede | Urgência | Providência | Avisar |

PRAZO SUGERIDO · #[n] · [processo]
Meio: DJEN | intimação pessoal | portal (dois cenários) · Rito: [...] · Prazo: [N] dias [úteis|corridos] [em dobro: motivo]
Disponibilização: [dd/mm, dia da semana]
Publicação: [dd/mm] · Início: [dd/mm]
Dias pulados: [data e motivo]
Vencimento sugerido: [dd/mm, dia da semana]
Atenção: [data local, móvel ou recesso na janela]
Sugestão a conferir: feriado local, suspensão do tribunal e o rito são do advogado.
```

Com muitas publicações, a primeira mensagem leva o ALERTA e a tabela (uma linha por publicação); o bloco PRAZO SUGERIDO vem para as que têm prazo. Audiência designada: avise o cliente da data e do comparecimento pessoal (multa do CPC art. 334, §8º, `[conferir]`) e do prazo para manifestar desinteresse na conciliação, que corre antes da audiência (art. 334, §5º; contagem `[conferir]`).

## Andamento explicado em linguagem clara

Abaixo de cada linha da tabela, "Em linguagem clara:" com o que aconteceu e o que muda pro caso, em até duas frases ("O juiz negou a liminar; o processo segue e o réu ainda vai ser citado."). É pro advogado; o recado ao cliente é da `comunicacao-com-cliente`.

## Pendência com a peça sugerida e o raciocínio

Publicação de urgência alta ou média vira pendência; ciência sem providência não vira.

```
PENDÊNCIA #[n] · [processo] · [caso]
Andamento: [ato] em [dd/mm]
Ação sugerida: [peça ou providência]
Raciocínio: [2 ou 3 linhas: o que se pediu, a regra, o risco de não agir]
Prazo sugerido: [dd/mm, conta no bloco acima] | sem prazo
Situação: Peça a fazer | Aguardando os autos | Sem prazo
→ 1 adicionar prazo · 2 ignorar · 3 enviar autos
```

Ele responde pelo número ("#2: 1"). **Adicionar prazo:** entra em `PENDENCIAS.md` com o vencimento, e ele lança na agenda dele. **Ignorar:** fecha como "ignorada em dd/mm", sem apagar. **Enviar autos:** fica "Aguardando os autos" até ele anexar o PDF (`meus-casos-e-documentos`). Se ele reorientar ("não é apelação, é embargos"), refaça a pendência. Entregue o `PENDENCIAS.md` atualizado pra substituir no projeto; com pasta conectada, grave direto.

## Rascunho da resposta pronto

Só quando ele pedir ("faz o rascunho da #2"): abra a `peca-a-partir-da-ficha` com a pendência como pedido e a ficha do caso, e a `pesquisa-jurisprudencial` se faltar julgado. Sem ficha, peça os autos antes. O rascunho é arquivo pra ele revisar; nada sai daqui pra ninguém.

## Alerta de prazo

Não há aviso automático: o kit não roda sozinho nem manda e-mail. O alerta é a conta à mostra no bloco PRAZO SUGERIDO, com a ressalva de feriado local e suspensão do tribunal, e o ALERTA da régua do `SKILL.md` (prazo processual ou contratual a 5 dias úteis ou menos; decadência e prescrição a 60 dias ou menos; prazo vencido listado no topo) sempre que a triagem ou a semana passar pela pendência. Carta ou notificação extrajudicial não é prazo processual: registre a data, avise que não há conta no CPC e deixe a decisão ao advogado. Com execução de código ligada, ofereça um .ics com o vencimento sugerido e lembrete dois dias úteis antes, pra ele importar na agenda que já usa, depois de conferir a data.

## Tarefas da semana

"O que tenho essa semana?": leia `PENDENCIAS.md` do projeto (com pasta conectada, de todos os casos em `Casos/`) e devolva:

```
SEMANA DE [dd/mm] A [dd/mm]
[dia dd/mm]: #[n] · [processo] · [ação] · vence [dd/mm] [ALERTA: 5 dias úteis ou menos]
Peça a fazer sem data: ...
Aguardando os autos: ...
Sem prazo: ...
```

A pendência entra no dia do vencimento sugerido; as VENCIDAS abrem a lista. Ele pode filtrar: todas, aguardando os autos, peça a fazer, sem prazo. Semana por responsável, com carga por pessoa e data interna: `prazos-da-semana`.

## No fim

- Diga: "Confira cada prazo no calendário do tribunal antes de lançar na agenda."
- Se a publicação afeta o cliente (sentença, audiência, documento, pagamento), ofereça o recado pela `comunicacao-com-cliente`.
- CPF, endereço e dado de saúde da publicação não entram na tabela.
