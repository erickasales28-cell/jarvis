---
name: cobranca-e-monitoria
description: Use quando o advogado pedir ação de cobrança, ação monitória, cobrar dívida sem título executivo, cheque prescrito, nota promissória prescrita, contrato sem testemunhas, "dá monitória?" (consulta), embargos monitórios de dívida que não é de cartão, ou "a dívida prescreveu?". Embargos monitórios de cartão de crédito são da `contestacao-de-cobranca-de-cartao`; embargos à execução, de declaração e impugnação ao cumprimento de sentença têm skill própria. Complementa peca-a-partir-da-ficha com a escolha entre execução, monitória e cobrança comum, o que é prova escrita (CPC 700), o mandado de 15 dias com honorários de 5% e a prescrição por tipo de dívida.
---

# Cobrança e monitória

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da cobrança e da monitória, de credor e devedor.

## Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: a pergunta "dá monitória?" é consulta. Responda com o parecer curto (teste do título, prescrição por documento, via recomendada) e não abra o plano de cinco blocos; o plano só vem se o advogado mandar redigir. A prescrição vai num quadro por documento: documento, data de emissão ou vencimento, prazo e base legal, data-limite sugerida, situação em relação a hoje. Mostre duas contas quando houver reconhecimento da dívida pelo devedor (e-mail, acordo, pagamento parcial): sem interrupção e com interrupção (CC 202, VI; uma só vez; o prazo recomeça da data do ato, CC 202, par. único). Se nos dois cenários a pretensão está prescrita, diga isso com ALERTA DE PRESCRIÇÃO e passe às saídas, sem esconder a conta.

## Antes do roteiro

- **Primeiro teste: a prova é título executivo?** Se for (CPC 784: cheque dentro do prazo, contrato assinado por duas testemunhas, contrato eletrônico com assinatura prevista em lei e integridade conferida por provedor, que dispensa testemunhas, §4º, escritura, confissão de dívida, aluguel documentado, cédula de crédito bancário com planilha, Lei 10.931, art. 28, e Tema 576), a via é a execução; veja `execucao-de-titulo-extrajudicial`. A monitória é para prova escrita **sem** eficácia de título. Conversão de execução em monitória depois da citação é inadmissível (Tema 320).
- **Qual prova escrita:** contrato sem testemunhas, extrato, faturas, e-mails e mensagens, cheque e nota promissória prescritos, duplicata sem requisitos, confissão sem testemunhas. A prova pode ser prova oral documentada, produzida antecipadamente (CPC 700, §1º, com o 381).
- **Prescrição, antes de tudo.** Mostre a conta da data da pretensão, documento por documento, e confira o prazo (abaixo): é sugestão a conferir, com a regra do bloco acima. Prescrito, a monitória não salva; avalie as saídas, como a ação causal do cheque (o negócio que ele pagou) e o locupletamento (Lei 7.357, art. 61: 2 anos contados da prescrição da execução, art. 59), cada uma com o seu prazo; a ação causal segue o prazo do negócio que o cheque pagou (art. 62).
- **Cálculo:** peça ao advogado a memória atualizada na data do ajuizamento: principal, índice, juros, multa e período. A skill lista as colunas e não calcula. Correção e juros legais: IPCA (CC 389, par. único) e taxa legal Selic menos IPCA (CC 406), desde a Lei 14.905/2024 (publicada em 01/07/2024, eficaz 60 dias depois, em 30/08/2024, salvo o §2º do 406, desde a publicação), salvo o que o contrato fixar.
- **Perguntas:** quem assina o contrato e quem é o devedor (avalista?); houve pagamento parcial; há cláusula de foro; relação de consumo (CDC 101, I); valor (JEC até 40 salários mínimos para cobrança comum; monitória no JEC é controvertida por ser procedimento especial `[conferir enunciado da Turma]`).

## Estrutura da monitória (CPC 700 a 702)

1. Inicial instruída com a prova escrita e: (I) a importância devida **com memória de cálculo**; ou (II) o valor atual da coisa reclamada; ou (III) o conteúdo patrimonial ou o proveito econômico perseguido (700, §2º). O valor da causa corresponde a essa quantia (§3º). Sem isso, a inicial é indeferida (§4º). Tema 474 do STJ: o demonstrativo de débito atualizado até o ajuizamento é exigido, e a falta pode ser suprida.
2. Pedidos: expedição do mandado de pagamento, entrega ou fazer. O réu tem **15 dias** para cumprir e paga **5%** de honorários sobre o valor da causa; cumprindo, fica isento de custas (701, caput e §1º).
3. Sem pagamento e sem embargos, constitui-se de pleno direito o título executivo judicial, e segue em cumprimento de sentença (701, §2º). Cabe parcelamento do 916 (701, §5º).
4. Citação por qualquer meio do procedimento comum (700, §7º); por edital cabe (Súmula 282 do STJ). Contra a Fazenda cabe monitória (700, §6º; Súmula 339).
5. Dúvida do juiz sobre a prova: pode mandar emendar para o procedimento comum (700, §5º).

## Embargos monitórios (lado do devedor e resposta do credor)

- Nos mesmos autos, em 15 dias, **sem garantia** (702, caput). Qualquer matéria de defesa do procedimento comum (§1º). Excesso: indicar o valor tido por correto com memória atualizada; sem isso, rejeição liminar se for o único fundamento, ou processamento sem exame do excesso (§§2º e 3º).
- Os embargos suspendem a eficácia do mandado até a sentença (§4º). Autor responde em 15 dias (§5º). Cabe reconvenção, não a reconvenção da reconvenção (§6º). Embargos parciais: a parte incontroversa vira título (§7º). Rejeitados, segue como cumprimento (§8º); apelação (§9º). Multa de até 10% do valor da causa para quem litigar de má-fé, autor ou réu (§§10 e 11).

## Prescrição por tipo de dívida

- **Dívida líquida em instrumento público ou particular:** 5 anos (CC 206, §5º, I). **Cheque sem força executiva:** monitória em 5 anos a contar do dia seguinte à data de emissão (Súmula 503 e Tema 628). **Nota promissória:** 5 anos do dia seguinte ao vencimento (Súmula 504 e Tema 641). Cheque: execução em 6 meses do fim do prazo de apresentação (Lei 7.357, art. 59) e enriquecimento sem causa em 2 anos (art. 61).
- **Duplicata:** execução contra o sacado em 3 anos do vencimento (Lei 5.474, art. 18, I). Outros títulos de crédito: 3 anos do vencimento (CC 206, §3º, VIII). Aluguel: 3 anos (§3º, I). Enriquecimento sem causa: 3 anos (§3º, IV). Honorários de profissional liberal: 5 anos (§5º, II). Prescrição da pretensão de responsabilidade contratual (indenização por inadimplemento) é a geral de 10 anos (CC 205); a distinção entre cobrar valor líquido e pedir indenização é de jurisprudência `[buscar]`. Letra de câmbio e nota promissória: 3 anos do vencimento (CC 206, §3º, VIII; o art. 70 da Lei Uniforme, Decreto 57.663, não abriu `[conferir]`).
- Interrupção: despacho que ordena a citação (CC 202, I), retroagindo à propositura (CPC 240, §1º), e ato inequívoco, ainda que extrajudicial, de reconhecimento do direito pelo devedor (CC 202, VI); só uma vez, e o prazo recomeça da data do ato (CC 202, caput e par. único). Prescrição não corre entre cônjuges na constância do casamento (CC 197, I).

## Súmulas úteis

247 e 233 (contrato de abertura de crédito: com demonstrativo de débito serve à monitória; não é título executivo); 299 (cheque prescrito); 531 e Tema 564 (dispensa o negócio subjacente no cheque prescrito); 384 (saldo de alienação fiduciária); 300 (confissão de dívida é título); 292 (reconvenção; hoje 702, §6º).

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "ação monitória prova escrita", "prescrição da ação monitória" e "prescrição art. 206 §5º I" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. As Súmulas 233, 247, 282, 299, 339, 384, 503, 504 e 531 e os Temas 320, 474, 564, 628 e 641 do STJ podem entrar pelo número.

## Não fazer

- Não propor monitória com prova que já é título executivo sem explicar a escolha.
- Não omitir a memória de cálculo nem calcular a dívida de cabeça (o valor fica `[VALOR]`; a prescrição, ao contrário, tem a conta à mostra).
- Não deixar de checar a prescrição pelo tipo de documento nem de mostrar a conta.
- Não dizer ao devedor que os embargos precisam de garantia.

*Referências conferidas e revisadas em 20/10/2026 (Planalto via proxy: CPC 240, 700 a 702 e 784, CC 189, 197, 202, 205, 206, 389, 395 e 406, Lei 7.357, arts. 33, 47, 59, 61 e 62, Lei 5.474, arts. 15 e 18, Lei 10.931, art. 28, Lei 14.905/2024; Câmara dos Deputados; Banco Nacional de Precedentes do CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
