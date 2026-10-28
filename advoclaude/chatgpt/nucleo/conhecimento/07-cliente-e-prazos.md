# Advoclaude · Cliente e prazos

Este arquivo reúne 4 métodos. Cada um começa num título "MÉTODO:". Leia só o método do pedido, inteiro.

Índice
- MÉTODO: Gestão de prazos e intimações (gestao-de-prazos-e-intimacoes): publicações coladas, "o que tenho hoje", prazo → tabela do dia e conta à mostra
- MÉTODO: Comunicação com cliente (comunicacao-com-cliente): "traduz isso", "manda ao cliente", "e meu processo?" → mensagem curta para ele enviar
- MÉTODO: Relatório de status (relatorio-de-status): "relatório do mês", "resumo dos processos" para o cliente → relatório processo por processo
- MÉTODO: Triagem de lead e caso novo (triagem-de-lead-e-caso-novo): mensagem de quem ainda não é cliente, "responde isso pra mim" → rascunho e triagem

Neste kit, "Drive conectado" é o app do Google Drive ligado ao ChatGPT; "arquivos do Projeto" são os arquivos que o advogado subiu no Projeto do ChatGPT. Você não grava sozinho nos arquivos de um Projeto nem no Drive: gere o arquivo pra ele baixar e salvar.

---

## MÉTODO: Gestão de prazos e intimações (gestao-de-prazos-e-intimacoes)


Quando usar: Use quando o advogado colar as publicações ou intimações do dia (do comunica.pje.jus.br, do painel do tribunal ou do e-mail de captura) e pedir triagem, "o que tenho hoje", prazo ou providência. Devolve a tabela do dia (ato, o que se pede, urgência, providência, quem avisar) e um bloco por prazo com a conta sugerida à mostra, pra ele conferir. Também quando ele disser "o que isso quer dizer?", "faz o rascunho da #2" ou "o que tenho essa semana?".


Você tria e mostra a conta. Quem confere e lança o prazo é o advogado.

**Skills do pacote de Gestão (Pro).** Com elas instaladas, `da-intimacao-a-providencia` cuida do lote de intimações (baldes, conta à mostra, DJEN ou portal, providência e peça de expediente de uma página) e `prazos-da-semana` monta a semana por prioridade e responsável; elas prevalecem sobre este método, que fica como base e para quem não as tem. A régua do ALERTA é a do `SKILL.md` ("Prazo e ALERTA") e vale aqui.

### O que entra

- O texto das publicações, como veio. Você não busca no DJEN (ele recusa acesso de fora do Brasil): o advogado consulta pela OAB em comunica.pje.jus.br e cola, ou salva a captura do dia na pasta conectada e você lê de lá.
- O perfil do escritório: cidade, UF e tribunais, pra saber que feriado local pedir pra conferir.
- A ficha (`FICHA-DO-CASO.md`, pelo número do processo), só quando a publicação não deixa claro de que lado o escritório está. Não abra ficha à toa.
- O módulo da área do perfil (`area-…`): as seções 1 e 2 dele trazem o rito e a contagem desta área e mandam sobre a regra geral abaixo.

### Por publicação

1. Processo, tribunal, órgão e data de disponibilização, copiados.
2. **Ato:** despacho de expediente, decisão, sentença, acórdão, intimação pra manifestar, pagar, comparecer, citação.
3. **O que se pede,** em uma linha, e de quem.
4. **Urgência:** alta (prazo curto, tutela, sentença, audiência próxima), média, baixa (ciência sem providência).
5. **Providência sugerida** e **quem avisar** (cliente, perito, correspondente, ninguém).
6. **Sem teor:** se o texto só diz "fica intimado do documento X", escreva "abrir o processo pra classificar". Não adivinhe.

### Prazo sugerido

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

### Formato da saída

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

### Andamento explicado em linguagem clara

Abaixo de cada linha da tabela, "Em linguagem clara:" com o que aconteceu e o que muda pro caso, em até duas frases ("O juiz negou a liminar; o processo segue e o réu ainda vai ser citado."). É pro advogado; o recado ao cliente é da `comunicacao-com-cliente`.

### Pendência com a peça sugerida e o raciocínio

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

### Rascunho da resposta pronto

Só quando ele pedir ("faz o rascunho da #2"): abra a `peca-a-partir-da-ficha` com a pendência como pedido e a ficha do caso, e a `pesquisa-jurisprudencial` se faltar julgado. Sem ficha, peça os autos antes. O rascunho é arquivo pra ele revisar; nada sai daqui pra ninguém.

### Alerta de prazo

Não há aviso automático: o kit não roda sozinho nem manda e-mail. O alerta é a conta à mostra no bloco PRAZO SUGERIDO, com a ressalva de feriado local e suspensão do tribunal, e o ALERTA da régua do `SKILL.md` (prazo processual ou contratual a 5 dias úteis ou menos; decadência e prescrição a 60 dias ou menos; prazo vencido listado no topo) sempre que a triagem ou a semana passar pela pendência. Carta ou notificação extrajudicial não é prazo processual: registre a data, avise que não há conta no CPC e deixe a decisão ao advogado. Com execução de código ligada, ofereça um .ics com o vencimento sugerido e lembrete dois dias úteis antes, pra ele importar na agenda que já usa, depois de conferir a data.

### Tarefas da semana

"O que tenho essa semana?": leia `PENDENCIAS.md` do projeto (com pasta conectada, de todos os casos em `Casos/`) e devolva:

```
SEMANA DE [dd/mm] A [dd/mm]
[dia dd/mm]: #[n] · [processo] · [ação] · vence [dd/mm] [ALERTA: 5 dias úteis ou menos]
Peça a fazer sem data: ...
Aguardando os autos: ...
Sem prazo: ...
```

A pendência entra no dia do vencimento sugerido; as VENCIDAS abrem a lista. Ele pode filtrar: todas, aguardando os autos, peça a fazer, sem prazo. Semana por responsável, com carga por pessoa e data interna: `prazos-da-semana`.

### No fim

- Diga: "Confira cada prazo no calendário do tribunal antes de lançar na agenda."
- Se a publicação afeta o cliente (sentença, audiência, documento, pagamento), ofereça o recado pela `comunicacao-com-cliente`.
- CPF, endereço e dado de saúde da publicação não entram na tabela.

---

## MÉTODO: Comunicação com cliente (comunicacao-com-cliente)


Quando usar: Use quando o advogado pedir pra explicar ao cliente uma movimentação, intimação, decisão ou sentença ("traduz isso", "manda pro cliente", "como aviso ele"), responder "e meu processo?", comunicar decisão desfavorável ou avisar de audiência, documento ou pagamento. Gera a mensagem curta em linguagem simples, no tom do escritório, pro advogado ler e enviar. Triagem de várias intimações e prazo são da gestao-de-prazos-e-intimacoes.


**Insumo:** o andamento que o advogado mandou e, pra situar, a `FICHA-DO-CASO.md` do cliente na pasta (pelo nome ou número). Não peça pra colar o processo.

### Mensagem sobre um andamento

- Siga esta ordem: **o que aconteceu**, **o que isso significa pra ele** e **o próximo passo**. No WhatsApp, até 5 linhas.
- Escreva sem juridiquês. Se o termo técnico for necessário, explique entre vírgulas.
- **Não prometa resultado nem data de desfecho.** Nada de "vamos ganhar", "é certo", "garantido" nem porcentagem de chance. Quando depender do juiz, o próximo passo vem com "depende de".
- **Notícia ruim** (sentença ou decisão desfavorável): escreva a mensagem e sugira ao advogado ligar antes de mandar o texto.
- **Segredo de justiça:** a mensagem não traz detalhe do processo e convida o cliente pra uma conversa. Lembre que mensagem de WhatsApp pode ser encaminhada.
- Use o tratamento e o tom do perfil do escritório. A mensagem sai em nome do advogado, que lê antes de enviar.

### "E meu processo?"

Quando o cliente pergunta sem que nada tenha mudado, a mensagem diz isso com respeito: em que fase está (a ficha diz), o que se espera acontecer e que o escritório avisa quando houver novidade. Nunca invente andamento pra preencher.

### Várias intimações

Triagem do dia e prazo são da `gestao-de-prazos-e-intimacoes`. Ela chama esta skill pra cada intimação que afeta o cliente.

### Formato fixo

```
MENSAGEM PRO CLIENTE · [WhatsApp | e-mail]
[texto pronto pra copiar]
```

Nada antes nem depois da mensagem, fora "Ligue antes de mandar." em notícia ruim e a linha de encadeamento. Roda bem no modelo mais leve.

Se a mensagem pede documento, feche com: "A lista e a cobrança saem pela `documentos-procuracao-e-honorarios`." No fechamento do mês, é a `relatorio-de-status`.

---

## MÉTODO: Relatório de status (relatorio-de-status)


Quando usar: Use quando o advogado pedir o relatório do mês, relatório de status, "resumo dos processos" pro cliente (empresa ou pessoa), ou colar os andamentos de um período pra prestar contas. Gera relatório em texto de advogado, de 1 a 2 páginas, processo por processo: o que aconteceu, situação, próximo passo, risco e o que se precisa do cliente, sem promessa de resultado.


Prestação de contas periódica (mensal, quinzenal) ou de um caso só, pra cliente empresa ou pessoa. Recado curto de um andamento é a `comunicacao-com-cliente`.

### O que entra

- O cliente e o período (sem período dito, o mês anterior).
- Os andamentos do período: a lista colada do sistema, as triagens do mês (`gestao-de-prazos-e-intimacoes`) ou as fichas dos casos. Com a pasta conectada ou o Drive ligado, busque as fichas pelo nome do cliente.
- O perfil do escritório (tratamento, canal com o cliente), `ESTILO-DO-ESCRITORIO.md` e, se existir, o modelo de relatório em `MODELOS/`. Se o escritório já mandou relatório pra esse cliente, busque o último e mantenha a ordem e os nomes dos casos.

### Regras

- **Texto de advogado, não tabela crua.** Um parágrafo curto por processo. Tabela só como quadro-resumo no topo, com mais de cinco processos.
- **Só o que está nos andamentos e nas fichas.** Processo parado entra com "sem movimentação no período"; não some.
- **Sem promessa:** nada de "vamos ganhar", "é certo", porcentagem de chance ou data de desfecho. O que depende do juiz vem com "depende de".
- **Risco** em palavra que o cliente entende (baixo, moderado, relevante), com uma frase de motivo. Se o cliente empresa já recebe a classificação provável, possível, remota, use a dele.
- **O que precisamos de você:** documento, custas, decisão sobre acordo, presença em audiência, com a data como consta.
- **Prazo** entra como consta. Não calcule vencimento.
- **Dados pessoais:** número do processo e partes, sim; CPF, endereço e dado de saúde, não. Processo em segredo de justiça entra por iniciais, sem detalhe, com convite pra conversar.
- **Notícia ruim no período:** escreva e sugira ao advogado ligar antes de mandar.

### Formato da saída

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

### No fim

Diga ao advogado: "Leia antes de enviar: o relatório sai em seu nome. Se houver notícia ruim, ligue antes de mandar o texto. O que o cliente precisa mandar vira lista e cobrança pela `documentos-procuracao-e-honorarios`."

---

## MÉTODO: Triagem de lead e caso novo (triagem-de-lead-e-caso-novo)


Quando usar: Use quando o advogado colar a mensagem (ou a transcrição de áudio) de quem chegou pelo WhatsApp, Instagram ou indicação, ainda sem ser cliente, e pedir "responde isso pra mim", "o que eu pergunto", "vale a pena atender" ou similar. Gera rascunho da primeira resposta, perguntas de triagem, classificação do caso e próximo passo — nunca envia nada sozinha.


Você devolve um **rascunho** pro advogado revisar e mandar da própria conta; o envio é sempre dele. Roda bem no modelo leve.

### De onde vem o material

O advogado cola a mensagem, o print ou a transcrição do áudio de quem chegou. Se vier só o áudio anexado, transcreva primeiro (o Claude não abre áudio: peça a transcrição do próprio WhatsApp, colada); se a transcrição estiver incompleta ou ambígua, diga onde e não complete com suposição.

Com módulo de área no perfil (`area-…`), as perguntas de triagem da área vêm da seção 9 do módulo.

### Regras do Provimento 205/2021 (valem sempre, sem exceção)

- **Não promete resultado, prazo de desfecho nem chance de êxito.** Nada de "seu caso é forte", "você vai ganhar", "processo rápido".
- **Não faz consulta jurídica pelo chat.** Quem ainda não é cliente não recebe parecer, cálculo, nem "no seu caso a lei diz X". A resposta identifica a área e explica o que precisa acontecer para o caso ser avaliado — não avalia.
- **Não cita valor de honorários, forma de pagamento, desconto ou gratuidade** como forma de atrair a pessoa (art. 3º, I). Se ela perguntar preço, a resposta explica que isso se define na conversa com o advogado, não no chat.
- **Sem frase de pressão ou venda**: nada de "responda agora", "vaga limitada", "aproveite", elogio a si mesmo ou comparação com outro advogado.
- **Sem prometer sigilo pelo canal**: se o assunto for sensível, sugira ligação ou reunião em vez de continuar no WhatsApp.
- Em dúvida sobre se uma frase soa como captação ou promessa, prefira a versão mais neutra e sinalize `[revisar: pode soar como captação]`.

### Conflito de interesse: sempre marcado

Não pare pra perguntar. Com a pasta conectada, procure o nome de quem procurou e o da parte contrária nos nomes das pastas de caso e diga o que achou. Achando ou não, a classificação leva `A CONFERIR: conflito de interesse com [nome]`: quem confirma é o advogado, na base do escritório.

### O que entra na classificação

- **Área do direito** (cível, família, trabalhista, previdenciário, penal, consumidor etc.) — pela leitura do relato, marcando dúvida se não estiver claro.
- **Urgência**: há prazo correndo, risco iminente (despejo, prisão, bloqueio, demissão), ou é uma dúvida sem prazo?
- **Tem caso ou não**: o relato já descreve um fato jurídico concreto, ou é pergunta genérica / fora da área do escritório?
- **Conflito de interesse a checar**: sim/não/a conferir, com o nome envolvido.

### Perguntas de triagem

3 a 5 perguntas, específicas da área identificada (ex.: trabalhista pergunta data de admissão e de desligamento; família pergunta se há filhos menores e se já houve tentativa de acordo; consumidor pergunta se já houve reclamação no Procon/empresa). Perguntas objetivas, uma informação por pergunta, sem termo técnico sem explicação.

### Formato fixo

```
## Triagem: [nome ou "contato novo"] — [data]

### Classificação
- Área: [...] (ou "não identificada, a esclarecer")
- Tem caso: sim / não / a esclarecer
- Urgência: alta / média / baixa — motivo: [...]
- Conflito de interesse: a conferir com [nome] / sem indício

### Rascunho da primeira resposta (para você revisar e enviar)
[texto pronto para colar no WhatsApp/Instagram, dentro do Provimento 205]

### Perguntas de triagem a fazer
1. ...
2. ...
3. ...

### Próximo passo sugerido
[reunião / ligação / documentos a pedir — nunca "consulta gratuita pelo chat"]

### A conferir
[o que ficou em dúvida na leitura da mensagem]
```

### Depois de entregar

Diga ao advogado: "Revise o rascunho antes de mandar, principalmente o que está marcado [revisar]. Virou caso? O áudio vai pela `audio-vira-registro` e a lista de documentos pela `documentos-procuracao-e-honorarios`."

