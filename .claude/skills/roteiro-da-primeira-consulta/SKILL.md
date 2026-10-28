---
name: roteiro-da-primeira-consulta
description: Use quando o advogado disser "vou atender um cliente novo", "o que eu pergunto na primeira consulta", "monta o roteiro da consulta", "ficha de atendimento", "o que peço de documento", "esse caso presta?" ou "o que eu não posso prometer", com a pessoa já marcada pra conversa. Complementa triagem-de-lead-e-caso-novo (que cuida da mensagem antes da consulta) com a ordem das perguntas, as perguntas por área, os sinais de caso ruim e a ficha de atendimento que sai da conversa.
---

# Roteiro da primeira consulta

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md`, `metodos/plano-antes-de-gerar.md` e `metodos/triagem-de-lead-e-caso-novo.md`. Abra também o `ESTILO-DO-ESCRITORIO.md` e o módulo `area-…` do perfil (a seção 5 dele é a lista de documentos da área).

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se a pessoa ainda não foi atendida e só mandou mensagem, pare e use a `triagem-de-lead-e-caso-novo`. Roteiro é pra conversa que já vai acontecer.

## Antes do roteiro (pergunte, no máximo 5)

1. Qual a área ou o assunto, em uma frase?
2. A conversa é presencial, por vídeo ou por telefone? (muda o que se pede: documento na mão ou depois.)
3. A pessoa recebeu intimação, citação, carta, decisão ou notificação? Com que data? Se sim, **pare o roteiro**: o prazo vem primeiro (`gestao-de-prazos-e-intimacoes`). Registre a data como ela disse, sem contar prazo.
4. Quem é a parte contrária (nome completo)? É o que permite checar conflito.
5. Há outro advogado ou processo já em andamento nesse assunto?

## Ordem fixa do roteiro

1. **Urgência.** "Tem algo com data marcada ou prazo correndo?" Já respondido acima: repita só se mudar.
2. **Conflito e outro patrono.** Parte contrária, quem mais está envolvido, se já houve outro advogado. O advogado não aceita procuração de quem tem patrono sem conhecimento deste, salvo motivo plenamente justificável ou medida urgente (CED, art. 14). Conflito de interesses motivado por intervenção anterior no assunto: declinar (CED, art. 22). A ficha leva `A CONFERIR: conflito com [nome]`.
3. **Fatos, do começo.** "Me conta do começo." Deixe falar sem interromper; depois volte pras datas, uma por vez.
4. **O que a pessoa quer.** "O que resolveria pra você?" e "o que já tentou?" (reclamação, acordo, notificação).
5. **O que tem em mãos.** Só o essencial pra avaliar. O resto se pede depois da contratação (`onboarding-do-cliente-por-area`).
6. **O que espera.** "O que você espera que aconteça, e em quanto tempo?" Serve pra calibrar o que você não vai prometer.

## Perguntas por área (use as que couberem; uma informação por pergunta)

- **Consumo e cível:** data do fato e da última tentativa de resolver; protocolo ou reclamação feita; valor envolvido; contrato ou nota; se já há negativação, cobrança ou ação contra a pessoa.
- **Família:** casamento ou união estável e desde quando; filhos menores e com quem moram; há violência ou medida protetiva (pare e trate como urgência); bens e dívidas; se houve tentativa de acordo; se o outro lado tem advogado.
- **Trabalhista:** datas de admissão e de saída e como saiu; função e salário; jornada real; o que não foi pago; se ainda trabalha; testemunhas; sindicato ou convenção.
- **Previdenciário:** o que pediu ao INSS, quando e a resposta (carta de indeferimento, data); se há perícia marcada; o que consta no CNIS; se é rural ou atividade especial; incapacidade: desde quando e atestados.
- **Criminal:** a pessoa está presa ou solta e desde quando; fase (delegacia, denúncia, instrução, execução); data do fato; se já deu depoimento e sem advogado; quem está pagando os honorários. Pergunte o que ela **sabe**, e não peça detalhe do fato que ela não precise contar nesta conversa.
- **Despejo, cobrança, imóvel:** contrato, valor em aberto, notificação recebida, prazo dado, garantia.

## Dados pessoais

Na consulta peça só nome e contato. CPF, RG, endereço completo e dado de saúde vêm quando a pessoa contratar, e só o necessário (LGPD, art. 6º, III). Dado sensível entra na ficha só se for o fato do caso.

## Sinais de caso ruim

- **Barra o caso (diga ao advogado, que decide):** nenhum fato jurídico concreto; o cliente quer usar o processo pra um fim ilícito ou levar prova que sabe falsa (CED, art. 6º veda expor fatos falseando a verdade); lide temerária, que o advogado deve desaconselhar (CED, art. 2º, parágrafo único, VII); conflito de interesses; o assunto parece fora do prazo (marque "provavelmente fora do prazo, conferir", sem concluir).
- **Pede cautela:** já trocou de advogado várias vezes falando mal de todos; quer garantia de resultado; nenhuma prova nem testemunha, só "ouvi dizer"; proveito econômico pequeno pro custo do caso (o proveito entra na moderação dos honorários, CED, art. 49, IV); pressa em contratar "hoje".
- **Risco alto e pouco proveito:** avise o advogado, que decide se atende e como cobra. A conversa de preço é da `proposta-de-honorarios`, não desta ficha.

## O que não prometer

Resultado, prazo de desfecho, "causa ganha", valor de indenização, porcentagem de chance. O advogado informa os riscos e as consequências da pretensão "de modo claro e inequívoco" (CED, art. 9º), inclusive o lado ruim. Promessa de resultado é vedada na publicidade (Provimento 205/2021, art. 6º) e fere o dever de informação. Registre na ficha o que foi explicado sobre risco.

## Sigilo

O que a pessoa contou na consulta é sigiloso mesmo que não contrate (CED, art. 35; art. 36, §1º, presume confidenciais as comunicações entre advogado e cliente).

## Ficha de atendimento (saída)

```
FICHA DE ATENDIMENTO · [data] · [presencial|vídeo|telefone]
Pessoa: [nome] · Contato: [telefone/e-mail]
Área: [...] · Urgência: [prazo informado, como dito: "recebeu em ..."] 
Parte contrária: [nome] · Conflito: A CONFERIR com [nome] · Outro advogado/processo: [...]
Relato em ordem: [data como dita]: [fato]
| Fato | Documentado (qual documento) | Só relatado |
Objetivo da pessoa: [...]
Documentos: tem [...] · falta [...] · pedir depois da contratação [...]
Sinais: [nenhum | cautela: ... | barra: ...]
O que expliquei sobre risco: [...]
Decisão: contratou | vai pensar | não atendemos (motivo)
Próximo passo e data: [...]
```

Fechamento: "Virou caso? A `ficha-do-caso` organiza o caso; a `proposta-de-honorarios` e o `onboarding-do-cliente-por-area` seguem."

## Não fazer

- Dar parecer ou calcular valor, prazo ou prescrição na ficha. Sinalize e mande conferir.
- Pedir todos os documentos já na primeira conversa.
- Falar de preço aqui. Preço é proposta, depois da consulta.
- Gravar dado de saúde, de criança ou de terceiro além do necessário.

*Referências conferidas em 21/10/2026 (Código de Ética e Disciplina, Resolução CFOAB 02/2015, arts. 2º, 6º, 9º, 14, 22, 35, 36 e 49, PDF da OAB-SE; Provimento 205/2021, art. 6º, PDF da OAB-ES; LGPD, art. 6º, Planalto via proxy). Norma muda: confira a redação vigente.*
