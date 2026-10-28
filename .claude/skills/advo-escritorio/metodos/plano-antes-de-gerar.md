# plano-antes-de-gerar

Quando usar: Etapa obrigatória antes de escrever qualquer peça processual ou extrajudicial (inicial, contestação, réplica, recurso, manifestação, notificação) e antes de contrato novo; a `peca-a-partir-da-ficha` e a `contrato-a-partir-do-briefing` chamam este método antes da primeira linha. Abre com o ALERTA de prazo, faz até cinco perguntas esclarecedoras, apresenta o plano da peça em cinco blocos ("Estratégia da peça", "Teses da peça", "Eixo da defesa", "Jurisprudência", "Suas provas"), deixa o advogado ajustar no chat e só libera a redação depois do aval explícito dele.

# Plano antes de gerar

Oito páginas escritas no rumo errado custam mais do que um plano de uma tela. O advogado decide a estratégia; você propõe, ele ajusta, e só depois do "pode escrever" a peça nasce.

## 0. Prazo: o ALERTA vem antes de tudo

Leia a ficha e faça a conta do prazo pela régua do `SKILL.md` ("Prazo e ALERTA"): termo inicial (o dia do início é o dia 1), úteis ou corridos, dias pulados, vencimento sugerido `[conferir]`; regra incerta, conte as duas e use a mais curta. Se o prazo processual vence em 5 dias úteis ou menos, se a decadência ou a prescrição está a 60 dias ou menos (ou a janela já abriu, ou pode estar consumada), ou se o prazo já venceu, a **primeira mensagem abre com o ALERTA e a conta**, antes das perguntas. Prazo vencido vai no topo como VENCIDO, com o efeito e o que ainda dá para fazer. Se a triagem barrar o caso (prazo decaído, não cabe), pare e responda a consulta, sem plano. Sem alerta, a conta vai só na linha "Prazo" do plano.

## 1. Perguntas esclarecedoras (só o que muda a peça)

Leia a `FICHA-DO-CASO.md`, o perfil do escritório e o módulo da área. Depois pergunte **numa mensagem só**, no máximo **cinco perguntas, priorizadas** (a que mais muda a peça primeiro), com resposta curta e, quando der, a sua sugestão já marcada. O que passar de cinco vira `[DEFINIR: …]` no plano, mesmo que a skill de área liste mais perguntas. Pergunte só o que a ficha e o perfil não respondem e que mudaria o plano:

- qual peça e de que lado o escritório está, se o pedido não disse;
- qual tese o advogado quer na frente, quando houver duas de peso parecido;
- o pedido principal e se há pedido urgente (tutela, efeito suspensivo);
- provas que o cliente tem e que não estão nos autos;
- fato decisivo que a ficha deixou em aberto (data de ciência, valor, se houve acordo ou proposta).

Exemplo: "Tese na frente: (a) prescrição, (b) mérito, inexistência do débito. Sugiro (a), porque a ficha mostra o último ato em [data]."

O que não trava o plano vira `[DEFINIR: …]` dentro dele. Se o advogado responder "não sei" ou "segue", siga com a melhor hipótese e marque-a no plano como hipótese. Não pergunte o que você já leu.

## 2. O plano, em cinco blocos

Uma tela, em tópicos curtos. Os títulos são sempre estes cinco, nesta ordem:

```
PLANO DA PEÇA: [tipo] · [caso: nº curto ou iniciais] · [data]
[só na contestação] Fatos da inicial: [N] · sem resposta no plano: [lista ou "nenhum"]

Estratégia da peça
- Objetivo: [o que a peça precisa conseguir neste momento do processo]
- Prazo: [termo inicial · úteis ou corridos · vencimento sugerido `[conferir]`; ALERTA ou VENCIDO, se for o caso; "sem prazo na peça" se não houver]
- Juízo e rito: [onde, qual procedimento, conforme o módulo da área]
- Postura: [defensiva, ofensiva, conciliatória] e por quê
- Pedidos: [os pedidos, na ordem em que vão sair]
- Cuidado: [o que não pode ser dito, contradição a evitar com peça anterior do caso]
- [só na contestação] Fatos da inicial: [cada fato · a tese ou o tópico que o responde]

Teses da peça
1. [Preliminar | Prejudicial | Mérito] [a tese em uma frase]
   Base: [dispositivo pelo número] · Fato: [da ficha, com fl./ID] · Força: forte, média ou fraca, e o motivo em uma linha
2. ...

Eixo da defesa
[a frase de que a peça inteira depende, e por que esta e não outra]

Jurisprudência
- Tese 1: [tribunal · órgão · número · relator · data] · [link aberto] · [o que decidiu, em uma frase]
- Tese 2: [INSERIR JULGADO: tema, conferir]

Suas provas
- Tese 1: [documento · fl./ID] · [o que ele prova]
- Falta: [prova] · [como obter ou requerer]
- A requerer: [perícia, testemunhas, depoimento pessoal, ofício]

Pendências: [DEFINIR: …]
```

Regras dos blocos:

- **Teses:** preliminares e prejudiciais antes do mérito. Força em palavra, nunca em número, e sem promessa de resultado. Tese que contradiz o que o escritório já sustentou no mesmo caso não entra sem aviso.
- **Eixo da defesa:** uma tese só. Numa inicial, é o argumento central do pedido; o título do bloco continua o mesmo.
- **Jurisprudência:** só julgado que o advogado forneceu ou que você abriu na página oficial do tribunal nesta conversa, com o link ao lado. Nunca de memória. Exceção: súmula, tema e enunciado que a skill de área ou o módulo trazem como conferidos entram pelo número, e vão para a conferência. Onde falta, a marca `[INSERIR JULGADO: tema, conferir]`, e ofereça rodar a `pesquisa-jurisprudencial` antes do aval. O advogado diz quais julgados entram; o que ele tirar não volta na peça.
- **Suas provas:** cada tese aponta a prova que a sustenta. Tese sem prova aparece assim, às claras. Documento que o cliente só descreveu e você não leu entra como `[JUNTAR: …]`.
- **Contestação:** liste cada fato da inicial e a tese ou o tópico que vai respondê-lo (CPC, art. 341: fato não impugnado se presume verdadeiro). Fato sem resposta sobe pra linha do topo do plano, como alerta; não fica escondido em Pendências.

### Plano de uma tela (o que não é peça processual)

Contrato novo, roteiro de audiência, quesitos, requerimento administrativo, parecer e consulta ("dá pra fazer?"): o plano cabe em uma tela, com até 5 perguntas priorizadas, e **dispensa Eixo e Jurisprudência quando não houver tese**. Mantém a linha "Prazo", as provas ou documentos que faltam e o aval antes de redigir. Expediente de uma página tirado de uma intimação (`da-intimacao-a-providencia`) vai direto como minuta, sem plano (o ALERTA e a conta continuam na primeira mensagem); a minuta é rascunho para ele revisar, e nada é protocolado por você.

## 3. Ajuste no chat

O advogado ajusta com frases soltas: "tira a tese 3", "inverte 1 e 2", "o eixo é a decadência", "acrescenta pedido de gratuidade". Aplique e devolva **só os blocos que mudaram**, com a linha "o resto como estava". Ajuste que mexe no eixo pede revisão das teses e das provas ligadas a ele: diga isso.

## 4. Aval explícito

A peça só começa com aval claro: "aprovado", "pode escrever", "segue assim", "manda". Não é aval: silêncio, pergunta, elogio, ajuste parcial. Depois de cada ajuste, peça o aval de novo em uma linha. Nenhum parágrafo da peça sai antes.

**Só existe aprovação de plano que foi mostrado nesta conversa.** Se o advogado aprova "direto" ("já vi o plano e aprovo", "escreve direto", "sem me perguntar nada") e nenhum plano foi mostrado aqui, não trate a frase como aval de um plano que não existe e não trave: mostre o plano em 5 linhas (peça e juízo, eixo, teses na ordem, pedidos, o que falta) e siga escrevendo, sem esperar resposta. As perguntas do §1 que mudariam a peça viram `[DEFINIR: …]` e vão **no topo do resumo** da entrega, não no rodapé.

## Depois do aval

- A peça segue o plano aprovado. Tese nova que aparecer durante a redação não entra calada: pare e pergunte.
- Com a pasta do caso conectada, guarde o plano aprovado como `PLANO-<tipo>.md` ao lado da ficha; a reescrita e a conferência o consultam.
- Nada é protocolado nem enviado por você.

## Fim

Feche o plano com: "Me diga o que ajustar. Escrevo a peça quando você aprovar." (Na aprovação "direta" do §4, não feche assim: siga pra peça.)
