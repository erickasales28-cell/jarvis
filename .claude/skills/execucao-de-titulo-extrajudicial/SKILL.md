---
name: execucao-de-titulo-extrajudicial
description: Use quando o advogado pedir execução de título extrajudicial, executar cheque, duplicata, nota promissória, contrato com duas testemunhas, aluguel, condomínio ou confissão de dívida, pedir penhora, bloqueio de contas, pesquisa de bens, ou discutir o que é impenhorável. Complementa peca-a-partir-da-ficha com os requisitos do CPC 798, os títulos do 784, a citação de 3 dias do 829, a pesquisa de bens e as impenhorabilidades do 833.
---

# Execução de título extrajudicial

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da execução de título extrajudicial, do lado do exequente e na resposta à alegação de impenhorabilidade.

## Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: antes de ajuizar, mostre a conta da prescrição do título (prazos em `cobranca-e-monitoria`: cheque, duplicata, aluguel, contrato) com a data-limite sugerida e abra com ALERTA DE PRESCRIÇÃO se estiver consumada ou perto. Na defesa do executado contra a alegação de impenhorabilidade, o prazo do 854, § 3º é de 5 dias: conte-o. Das perguntas abaixo, leve ao plano as cinco que mais pesam (o documento é título, legitimidade de quem executa, fiador e benefício de ordem, bens, demonstrativo).

## Antes do roteiro

- **O documento é título?** CPC 784: letra de câmbio, nota promissória, duplicata, debênture e cheque (I); documento público assinado pelo devedor (II); particular assinado pelo devedor e por 2 testemunhas (III); transação referendada por MP, Defensoria, Advocacia Pública, advogados ou conciliador credenciado (IV); contrato com garantia real ou caução (V); seguro de vida (VI); foro e laudêmio (VII); aluguel e encargos documentados (VIII); CDA (IX); cotas de condomínio documentadas (X); emolumentos de serventia (XI); contragarantia de seguro-garantia (XI-A, Lei 14.711/2023); o que mais a lei disser (XII). Título eletrônico: qualquer assinatura eletrônica prevista em lei, **dispensadas as testemunhas** quando a integridade for conferida por provedor de assinatura (§4º, Lei 14.620/2023). Confissão de dívida é título (Súmula 300); cédula de crédito bancário também, com a planilha do art. 28, §2º, da Lei 10.931 (Tema 576); contrato de abertura de crédito com extrato, não (Súmula 233). Sem título, veja `cobranca-e-monitoria`.
- **Certeza, liquidez e exigibilidade** (783 e 786): cálculo aritmético simples não tira a liquidez. Se o credor ainda tem de cumprir contraprestação, prove-a na inicial (787); se há condição ou termo, prove que ocorreram (798, I, c e d). Sem isso a execução é nula (803).
- **Prescrição do título** (CC 206; Lei 7.357, art. 59; Lei 5.474, art. 18): mostre a conta antes de ajuizar; a skill `cobranca-e-monitoria` traz os prazos.
- **Legitimidade ativa:** em aluguel, pergunte se quem executa é o locador ou a imobiliária que só administra o imóvel do proprietário; sem poderes ou cessão, a legitimidade é do proprietário (ou da imobiliária com mandato expresso).
- **Fiador:** pergunte se renunciou ao benefício de ordem. Se não, ele pode exigir que primeiro se executem os bens do devedor na mesma comarca (CPC 794, caput e §§ 1º e 3º). Pergunte se o contrato foi aditado: o fiador não responde por aditamento a que não anuiu (Súmula 214 do STJ).
- **Locação:** se o locatário ainda ocupa o imóvel, pergunte se o cliente quer também o despejo (ação própria, que pode ser cumulada ou separada) `[conferir Lei 8.245/1991]`.
- **Perguntas:** nome completo e CPF/CNPJ de cada executado (798, II, b); avalistas e fiadores (779); bens conhecidos, com matrícula ou placa (798, II, c); garantia real (a penhora recai sobre o bem dado em garantia, 835, §3º); foro de eleição ou domicílio (781); se há mais de um título do mesmo negócio (Súmula 27, e cumulação do 780).
- **Cálculo (798, I, b, e par. único):** demonstrativo atualizado até a propositura, com índice de correção, taxa de juros, termo inicial e final de cada um, periodicidade da capitalização e descontos obrigatórios. A skill monta as colunas e não calcula.

## Estrutura (CPC 798)

1. Endereçamento e qualificação (CPF/CNPJ de ambas as partes).
2. Título e demonstrativo atualizado (798, I, a e b); prova de condição, termo e contraprestação (c e d).
3. Indicação da espécie de execução, se houver mais de uma (II, a), e dos bens penhoráveis (II, c).
4. Pedidos: citação para **pagar em 3 dias** (829); fixação de honorários de 10%, reduzidos à metade se o pagamento vier em 3 dias, e que podem chegar a 20% se rejeitados os embargos (827, caput e §§1º e 2º); penhora e avaliação se não houver pagamento (829, §1º), sobre os bens que o credor indicar (§2º); arresto se o oficial não achar o devedor, convertido em penhora depois da citação (830).
5. Certidão de admissão da execução para averbar em registros de bens (828). O credor comunica as averbações em 10 dias e cancela o excesso depois de penhora suficiente, sob pena de responder por perdas e danos; alienação posterior à averbação presume fraude.
6. Inclusão do executado em cadastro de inadimplentes (782, §3º), cancelada no pagamento, na garantia ou na extinção.

## Pesquisa de bens e penhora

- **Dinheiro primeiro:** a penhora em dinheiro é prioritária; só nas demais hipóteses o juiz altera a ordem do 835 conforme o caso (§1º; Súmula 417). Fiança bancária ou seguro-garantia de ao menos 30% acima do débito equivalem a dinheiro para substituir a penhora (§2º). Faturamento é o décimo da ordem; se é excepcional ou prioritário está afetado no Tema 1409, sem tese.
- **Bloqueio eletrônico (854):** sem ciência prévia do executado, limitado ao valor da execução; o juiz desfaz o excesso em 24 horas (§1º); o executado tem 5 dias, da intimação, para provar impenhorabilidade ou excesso (§3º); sem impugnação, converte-se em penhora e o valor vai para conta judicial em 24 horas (§5º). Pesquisa: Sisbajud (ativos financeiros), Renajud (veículos), Infojud (declarações) e CNIB (indisponibilidade de imóveis), mais o que o tribunal disponibilizar.
- **Informações de terceiros e deveres do devedor:** o juiz pode mandar terceiros indicados pelo credor fornecer documentos e dados (772, III). Não indicar bens quando intimado é ato atentatório à dignidade da justiça, com multa de até 20% do débito atualizado (774, V e par. único).
- **Fraude à execução:** depende de registro da penhora ou prova de má-fé do adquirente (Súmula 375 do STJ); a averbação do 828 é o caminho.
- **Execução parada (921, Lei 14.195/2021):** sem executado ou bens, suspensão por 1 ano com a prescrição suspensa (III e §1º), depois arquivamento (§2º), desarquivável se surgirem bens (§3º). A prescrição intercorrente corre da ciência da primeira tentativa frustrada de localizar devedor ou bens, suspensa uma só vez pelo ano do §1º (§4º); citação, intimação ou constrição efetiva a interrompem (§4º-A); o juiz a reconhece de ofício depois de ouvir as partes em 15 dias (§5º; 924, V). O prazo é o da pretensão do título (Súmula 150 do STF).

## Impenhorabilidades (CPC 833)

- Incisos: bens inalienáveis (I); móveis e utilidades domésticas comuns (II); vestuário (III); vencimentos, proventos, pensões e ganhos de autônomo (IV); ferramentas e livros da profissão (V); seguro de vida (VI); materiais de obra (VII); pequena propriedade rural (VIII); recursos públicos de educação, saúde e assistência (IX); poupança até 40 salários mínimos (X); fundo partidário (XI); recursos de incorporação (XII).
- **Exceções:** a impenhorabilidade não se opõe à dívida do próprio bem (§1º); IV e X não valem para pensão alimentícia e para o que passar de 50 salários mínimos mensais (§2º).
- **Mitigação do salário:** Tema 1230 do STJ (acórdão publicado): para dívida não alimentar, a regra do IV pode ser mitigada excepcionalmente se inviáveis outros meios e comprovado, pelo devedor, que a penhora não compromete a subsistência digna. O ônus da prova é dele. Poupança de até 40 salários: não é matéria de ordem pública e o executado a alega no primeiro momento ou nos embargos, sob pena de preclusão (Tema 1235). O Tema 1285 (40 salários em papel-moeda, conta ou fundo) está em julgamento. Pequena propriedade rural: o executado prova a exploração familiar (Tema 1234).
- **Bem de família (Lei 8.009, lida):** o único imóvel residencial da família, com os móveis quitados que o guarnecem (arts. 1º e 5º; se há vários, o de menor valor, salvo registro de outro). Exceções do art. 3º: financiamento do próprio imóvel (II), pensão alimentícia (III), IPTU e taxas do imóvel (IV), hipoteca dada pelo casal (V, lida com o Tema 1261: só se a dívida beneficiou a família), produto de crime (VI) e fiança locatícia (VII; Súmula 549; Temas 1091 do STJ e 1127 do STF). Vale para solteiro, separado e viúvo (Súmula 364) e para o imóvel alugado cuja renda sustenta a família (486). Quem, insolvente, compra imóvel mais caro para morar perde a proteção (art. 4º). Vaga de garagem com matrícula própria: Súmula 449, com o Tema 1330 afetado.
- **Sede do estabelecimento:** penhorável (Súmula 451; Tema 287).

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "penhora de salário art. 833 IV", "impenhorabilidade de poupança 40 salários" e "prescrição intercorrente execução" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 27, 214, 233, 300, 364, 375, 417, 449, 451, 486 e 549 e Temas 287, 576, 1091, 1230, 1234, 1235 e 1261 do STJ, Súmula 150 e Tema 1127 do STF, podem entrar pelo número.

## Não fazer

- Não executar contrato particular sem duas testemunhas nem contrato de abertura de crédito como se fosse título.
- Não pedir bloqueio sem demonstrativo atualizado e sem CPF/CNPJ.
- Não somar nem atualizar o débito de cabeça.
- Não esquecer de cancelar as averbações excedentes (828).
- Não pedir penhora de verba salarial sem enfrentar o IV e o Tema 1230.

*Referências conferidas e revisadas em 20/10/2026 (Planalto via proxy: CPC 772, 774, 782 a 787, 794, 798, 803, 827 a 830, 833, 835, 854, 921 e 924, Lei 8.009/1990, Lei 10.931, art. 28; Banco Nacional de Precedentes do CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
