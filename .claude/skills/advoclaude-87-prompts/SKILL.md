---
name: advoclaude-87-prompts
description: Use quando o advogado pedir um dos 87 prompts do Advoclaude Kit pelo número ou pelo nome ("prompt 14", "roda o prompt de réplica", "me dá o prompt de contrato de honorários"), quiser ver a lista de prompts de um módulo (peças, contratos, estratégia, pesquisa, atendimento, gestão), ou pedir uma tarefa de escritório que nenhuma skill específica de peça cobre. Abre o módulo certo, mostra o "Tenha em mãos", pede o que falta e executa o prompt seguindo as regras fixas dele.
---

# Advoclaude: 87 prompts

Os 87 prompts do Advoclaude Kit, em seis módulos. Cada prompt traz: **Quando usar**, **Tenha em mãos**, o **Prompt**, o **Depois do resultado** e o atalho **Com o Advoclaude instalado**.

## Como usar esta skill

1. Ache o prompt pelo número ou pelo tema na lista abaixo e abra o arquivo do módulo em `modulos/`.
2. Se existir uma skill de peça específica para o mesmo pedido (por exemplo `replica`, `apelacao`, `contestacao-trabalhista`), prefira a skill; use o prompt quando não houver skill ou quando o advogado pedir o prompt pelo nome.
3. Antes de executar, diga ao advogado o que ele precisa ter em mãos (seção "Tenha em mãos") e pergunte numa mensagem só o que faltar, como o próprio prompt manda.
4. Execute o texto do prompt trocando os colchetes pelos dados do caso. Siga as **Regras fixas** do prompt: julgado só com link conferido, senão `[INSERIR JULGADO: tema]`; dado que falta vira `[DEFINIR: …]`; não inventar fato, documento nem valor; dados pessoais por iniciais.
5. Ao entregar, mostre a lista do "Depois do resultado" para o advogado conferir. Nada sai pronto para protocolar.

Se o advogado só quiser o texto do prompt para copiar, entregue o prompt inteiro, sem executar.

## Índice

### Módulo 01 · Peças processuais · 34 prompts — `modulos/modulo-01-pecas.md`

- 01. Petição inicial cível de indenização (dano material e moral)
- 02. Petição inicial de consumidor (cobrança indevida, negativação)
- 03. Contestação cível
- 04. Réplica (impugnação à contestação)
- 05. Reconvenção
- 06. Contestação trabalhista
- 07. Reclamação trabalhista (inicial)
- 08. Inicial previdenciária (benefício negado pelo INSS)
- 09. Divórcio (consensual ou litigioso)
- 10. Ação de alimentos
- 11. Ação de despejo por falta de pagamento
- 12. Execução de título extrajudicial
- 13. Ação monitória
- 14. Mandado de segurança
- 15. Pedido de tutela de urgência
- 16. Embargos à execução
- 17. Impugnação ao cumprimento de sentença
- 18. Apelação
- 19. Contrarrazões de apelação
- 20. Agravo de instrumento
- 21. Embargos de declaração
- 22. Recurso ordinário trabalhista
- 23. Recurso inominado (Juizado Especial)
- 24. Recurso especial (admissibilidade e prequestionamento)
- 25. Pedido de cumprimento de sentença
- 26. Manifestação sobre laudo pericial
- 27. Memoriais (alegações finais)
- 28. Especificação de provas
- 29. Petições de rotina (juntada, andamento, pedido de prazo)
- 30. Ação de dissolução parcial de sociedade
- 31. Inventário e arrolamento
- 32. Ação anulatória de débito fiscal
- 33. Resposta à acusação (penal)
- 34. Pedido de liberdade provisória ou relaxamento de prisão

### Módulo 02 · Contratos e documentos jurídicos · 19 prompts — `modulos/modulo-02-contratos.md`

- 01. Contrato de prestação de serviços entre empresas
- 02. Contrato de locação residencial
- 03. Contrato de locação comercial
- 04. Compromisso de compra e venda de imóvel
- 05. Contrato de mútuo (empréstimo de dinheiro)
- 06. Acordo de confidencialidade (NDA)
- 07. Contrato de parceria
- 08. Contrato de representação comercial
- 09. Contrato de prestação de serviços com consumidor
- 10. Revisão de contrato com semáforo de risco
- 11. Comparação de duas versões do contrato
- 12. Termo aditivo
- 13. Distrato
- 14. Notificação extrajudicial (cobrança, rescisão ou interpelação)
- 15. Parecer jurídico
- 16. Defesa administrativa (PROCON, multa, autuação)
- 17. Contrato social, alteração contratual ou ata de reunião de sócios
- 18. Acordo de sócios
- 19. Contrato de honorários advocatícios

### Módulo 03 · Estratégia, análise de caso e audiência · 12 prompts — `modulos/modulo-03-estrategia.md`

- 01. Triagem de caso novo: vale a pena pegar?
- 02. Ficha do caso a partir dos autos
- 03. Linha do tempo dos fatos, com a folha de cada um
- 04. Teses da parte adversária e como rebater
- 05. Análise de risco em três cenários, sem porcentagem
- 06. Estratégia de acordo: quando, quanto e como propor
- 07. Roteiro de audiência de conciliação
- 08. Roteiro de audiência de instrução
- 09. Perguntas para testemunha (a nossa e a deles)
- 10. Preparação do cliente para o depoimento pessoal
- 11. Checklist do que levar para a audiência
- 12. Depois da audiência: o que pedir e quais prazos abrem

### Módulo 04 · Pesquisa, revisão e segurança das citações — `modulos/modulo-04-pesquisa.md`

- 01. Resumir autos grandes numa ficha de 2 páginas
- 02. Pesquisar jurisprudência só com fonte aberta
- 03. Conferir o texto da lei em vigor, lido na fonte
- 04. Auditar as citações da peça, uma por uma
- 05. Fazer a revisão final antes de protocolar
- 06. Ler o informativo e ver se mexe nos meus casos

### Módulo 05 · Atendimento e orientação ao cliente — `modulos/modulo-05-atendimento.md`

- 01. Explicar a decisão ou a intimação para o cliente
- 02. Fazer o relatório mensal de andamento
- 03. Responder o "e meu processo?" no WhatsApp
- 04. Contar ao cliente que a decisão foi desfavorável
- 05. Avisar a audiência e dizer o que levar
- 06. Cobrar do cliente os documentos que faltam

### Módulo 06 · Gestão, honorários e autoridade — `modulos/modulo-06-gestao.md`

- 01. Montar a proposta de honorários do caso
- 02. Redigir o contrato de honorários
- 03. Montar a régua de cobrança de honorários
- 04. Triar as publicações do dia no DJEN
- 05. Organizar as tarefas da semana por prioridade
- 06. Organizar a pasta e o projeto de um caso
- 07. Escrever post de Instagram dentro do Provimento 205/2021
- 08. Escrever artigo de blog informativo
- 09. Responder avaliação ou comentário público
- 10. Preparar a reunião com quem pode virar cliente
