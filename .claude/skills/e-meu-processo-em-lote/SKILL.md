---
name: e-meu-processo-em-lote
description: Use quando o advogado disser "responde o e meu processo de todo mundo", "atualiza os clientes dessa lista", "manda a posição pros meus clientes", "faz a rodada de mensagens da semana", "tenho 8 clientes pedindo andamento" ou colar vários andamentos ou fichas de uma vez. Complementa comunicacao-com-cliente (que escreve uma mensagem) com o lote: uma mensagem por cliente, na ordem certa, no tom de cada um, sem juridiquês e sem promessa, com os casos de notícia ruim separados pra ligação.
---

# E meu processo? em lote

Antes, use a skill `advo-escritorio` e leia nela `metodos/comunicacao-com-cliente.md`, `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Abra o `ESTILO-DO-ESCRITORIO.md` (tratamento e tom) e, pra cada cliente, a `FICHA-DO-CASO.md`.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se não vier andamento nem ficha de um cliente, não escreva mensagem pra ele: liste "sem insumo" e siga com os outros. Nunca invente andamento pra preencher.

## Antes (pergunte, no máximo 5)

1. A lista: cliente (ou apelido do caso), canal (WhatsApp ou e-mail) e o andamento ou a ficha de cada um.
2. Alguma mensagem é sobre **notícia ruim** (sentença ou decisão desfavorável, extinção, perda de prazo)? Essas ficam fora do lote de texto: o advogado liga antes.
3. Tom por cliente, quando fugir do padrão do escritório: idoso, empresa, ansioso, quem já reclamou do silêncio, quem entende de direito.
4. Há segredo de justiça, processo de família ou criminal no lote? Esses vão sem detalhe.
5. O advogado quer fixar uma data de próxima atualização por cliente? (Só ele fixa.)

## Ordem de saída

1. **Ligar antes** (notícia ruim): uma linha por cliente com o motivo e, se o advogado pedir, a mensagem pra mandar **depois** da ligação.
2. **Cliente tem que fazer algo** (documento, pagamento, audiência, assinatura), com a data como consta.
3. **Houve andamento.**
4. **Sem novidade.**

## Regras da mensagem (até 5 linhas no WhatsApp)

- Ordem: o que aconteceu, o que significa pra ele, o próximo passo. Sem juridiquês; termo técnico necessário vem explicado entre vírgulas.
- **Sem promessa:** nada de "vamos ganhar", "é certo", "garantido", porcentagem de chance nem data de desfecho. O que depende do juiz vem com "depende do juízo".
- **Sem novidade** não é mensagem vazia: diz a data da **última movimentação**, em que fase o processo está, por que essa fase costuma levar tempo (uma frase), e quando o escritório vai olhar de novo, **na data que o advogado fixou** (nunca uma data que o juiz decide). Sem data fixada pelo advogado, escreva "avisamos assim que houver novidade".
- **Cliente que pergunta pela terceira vez:** ofereça uma janela fixa (por exemplo, atualização por mensagem uma vez por mês, no dia que o advogado escolher), em vez de responder cada pergunta de novo. Marque `[ideia: janela fixa]` no quadro-resumo.
- Cada mensagem fala **só** do cliente dela. Nunca cite outro cliente, outro caso nem dado de terceiro (sigilo, CED, arts. 35 e 36).
- Dado pessoal: sem CPF, endereço, dado de saúde ou de criança. Use o apelido do caso; número do processo só se o cliente já usa.
- **Segredo de justiça, família, criminal:** a mensagem não traz detalhe e convida pra conversa; mensagem de WhatsApp pode ser encaminhada.
- O tom segue o escritório; a mensagem sai em nome do advogado, que lê antes.

## Envio

Cada mensagem vai **individual**, na conversa do próprio cliente. Não use lista de transmissão nem grupo com vários clientes. Comunicação a cliente é permitida quando não tiver caráter mercantilista nem for oferta de serviço (Provimento 205/2021, Anexo Único, "Correspondências e comunicados"). A IA redige; quem envia é o advogado. O chatbot não substitui a pessoalidade do serviço (mesmo Anexo, "Chatbot"), e a Recomendação 001/2024 do CFOAB, item 4.3, diz que a comunicação com o cliente não pode ser feita só a partir de conteúdo gerado por IA, resguardado o direito de falar com um ser humano; se o escritório usa assistente automático no atendimento, ele informa que é uma máquina e não faz ato privativo da advocacia (item 2.4). Se o escritório usa IA no caso, o cliente deve ter assinado o aviso (`aviso-de-uso-de-ia-ao-cliente`).

## Saída

```
RODADA DE [data] · [N] clientes
| # | Cliente (apelido) | Tipo | Canal | Observação |
(Tipo: LIGAR ANTES | AÇÃO DO CLIENTE | ANDAMENTO | SEM NOVIDADE | SEM INSUMO)

MENSAGEM #1 · [cliente] · [WhatsApp|e-mail]
[texto pronto pra copiar]

MENSAGEM #2 ...
```

Nada antes nem depois dos blocos, fora o quadro-resumo e "Ligue antes de mandar: #n". Fechamento: se a mensagem pede documento, "A lista e a cobrança saem pela `documentos-procuracao-e-honorarios`"; se o caso exigiu prazo, `gestao-de-prazos-e-intimacoes`.

## Não fazer

- Misturar clientes numa mesma mensagem ou resposta.
- Prometer data pro juiz.
- Mandar notícia ruim só por texto.
- Escrever mensagem "tudo certo" quando o insumo não diz.
- Usar o mesmo texto pra todos: cada um recebe o seu, no seu tom.

*Referências conferidas em 21/10/2026 (CED, arts. 35 e 36, PDF da OAB-SE; Provimento 205/2021, Anexo Único, "Chatbot" e "Correspondências e comunicados", PDF da OAB-ES; Recomendação CFOAB 001/2024, itens 2.4 e 4.3, PDF do acórdão de 11/11/2024 publicado pelo Migalhas).*
