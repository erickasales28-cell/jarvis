---
name: embargos-a-execucao
description: Use quando o advogado pedir embargos à execução (de título extrajudicial: "citaram o cliente numa execução", "embargar a execução"), defesa do executado em execução de título extrajudicial, excesso de execução, efeito suspensivo dos embargos, parcelamento do art. 916, ou resposta do exequente aos embargos. Não é embargos de declaração (`embargos-de-declaracao`), embargos à monitória (`cobranca-e-monitoria`; de cartão, `contestacao-de-cobranca-de-cartao`) nem impugnação ao cumprimento de sentença (`cumprimento-de-sentenca`, do Kit). Complementa peca-a-partir-da-ficha com o prazo de 15 dias do CPC 915, as matérias do 917, a memória de cálculo obrigatória do excesso (917, §3º) e o efeito suspensivo do 919.
---

# Embargos à execução

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio dos embargos à execução de título extrajudicial; contra cumprimento de sentença o instrumento é a impugnação (CPC 525), outra peça.

## Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: conte 15 dias úteis (CPC 915) a partir do dia seguinte à juntada do comprovante de citação, dia a dia, com os feriados do período (inclusive o de 02/11, quando cair no intervalo) e o último dia provável. Mostre também os prazos que correm em separado: 5 dias do 854, § 3º, da intimação do bloqueio (impenhorabilidade e excesso, por simples petição) e 15 dias do 917, § 1º, para impugnar a penhora ou a avaliação. Das perguntas abaixo, leve ao plano as cinco que mais pesam (defender ou parcelar, datas da citação e do bloqueio, natureza da conta, cálculo do cliente, garantia para o efeito suspensivo).

## Antes do roteiro

- **Prazo: 15 dias úteis** (CPC 915), contados na forma do art. 231, isto é, da juntada aos autos do comprovante da citação, e não da penhora. Vários executados: o prazo de cada um corre da juntada do seu comprovante; cônjuges e companheiros, da última (§1º). O art. 229 (prazo em dobro) **não** se aplica (§3º). Execução por carta: §2º. Conta à mostra no bloco acima, a partir da ficha.
- **Bloqueio por penhora online (854):** o executado tem 5 dias da intimação da indisponibilidade para provar impenhorabilidade ou excesso (854, §3º), prazo diferente dos embargos. Pergunte a data do bloqueio, se a conta é de pessoa física ou do MEI e se há salário ou poupança. A conversão em penhora não reabre o prazo dos embargos.
- **Não exige garantia** do juízo (914). Distribuição por dependência, em autos apartados, instruída com as cópias relevantes, que o advogado autentica (914, §1º).
- **Alternativa de pagamento (916):** dentro do prazo, reconhecendo o crédito e depositando 30% do débito mais custas e honorários, o executado pede pagar o restante em até 6 parcelas mensais, com correção e 1% ao mês de juros. Ele **renuncia aos embargos** (§6º); indeferido o pedido, o depósito vira penhora (§4º); atraso vence as parcelas e soma multa de 10% (§5º). Não vale no cumprimento de sentença (§7º). Pergunte ao cliente se prefere defender ou parcelar.
- **O que pedir ao cliente:** título e contrato, demonstrativo do exequente, comprovantes de pagamento, extratos, correspondência, documentos que provem a nulidade ou o excesso, e o **cálculo que o próprio cliente ou o contador fez**. Sem número e sem memória, não há embargo de excesso.
- **Cédula de crédito bancário:** o título tem requisitos próprios, entre eles a planilha ou os extratos que demonstram o saldo (Lei 10.931/2004, art. 28: título executivo com liquidez pela soma indicada ou pela planilha e extratos; o §2º exige cálculo claro e preciso, discriminando utilizações, amortizações e encargos; Tema 576 do STJ confirma a executividade); falta de requisito ou de planilha vai para inexequibilidade (917, I).
- **Cliente consumidor?** Se o executado é MEI ou empresa pequena, pergunte para que usou o crédito: o CDC só entra se ele for destinatário final ou se houver vulnerabilidade comprovada. Cláusulas abusivas (CDC 51, IV); juros acima de 12% ao ano, por si, não indicam abusividade (Súmula 382 do STJ); capitalização inferior à anual permitida no SFN se pactuada (Súmula 539); atenção a contrato de abertura de crédito usado como título (Súmula 233).

## Estrutura

1. Endereçamento ao juízo da execução, por dependência. Tempestividade, com a data da juntada do comprovante da citação.
2. Síntese da execução e do título.
3. **Matérias (CPC 917):** I inexequibilidade do título ou inexigibilidade da obrigação; II penhora incorreta ou avaliação errônea; III excesso de execução ou cumulação indevida; IV retenção por benfeitorias (entrega de coisa); V incompetência absoluta ou relativa; VI qualquer matéria de defesa do processo de conhecimento (pagamento, prescrição, compensação, nulidade de cláusula, ilegitimidade).
4. **Excesso de execução (917, §2º):** o exequente pede mais do que o título; a penhora recai sobre bem diverso; a execução se processa de modo diferente do título; exige o devedor cumprir sem cumprir o credor a sua obrigação; ou o credor não prova a condição ou o termo.
5. **Memória de cálculo (917, §3º):** quem alega que o credor pede mais do que o título tem de **declarar na petição o valor que entende correto, com demonstrativo discriminado e atualizado**. Sem isso, os embargos são rejeitados liminarmente se o excesso for o único fundamento, e, havendo outros, são processados sem exame do excesso (§4º). Monte a tabela com as colunas (principal, índice, juros, multa, período, pagamentos) e deixe os valores para o advogado ou o contador.
6. Pedido de **efeito suspensivo** (919, §1º), em tópico próprio: probabilidade do direito e risco de dano, com a execução já garantida por penhora, depósito ou caução suficientes. O 919, §1º, positivou os três requisitos que o Tema 526 do STJ já exigia sob o CPC/73 (garantia, relevância da fundamentação e dano grave). Ele pode ser parcial (§3º) e é revisável (§2º); não impede substituição, reforço ou redução da penhora (§5º).
7. Pedidos: acolhimento, extinção da execução ou redução ao valor correto; condenação em honorários; produção de provas.

## Teses e pedidos que costumam caber

- **Vício de penhora ou avaliação:** pode ser impugnado por simples petição em 15 dias da ciência do ato (917, §1º), sem embargos.
- **Impenhorabilidade:** poupança até 40 salários mínimos não é matéria de ordem pública e se alega no primeiro momento ou nos embargos, sob pena de preclusão (Tema 1235 do STJ); bem de família e salário: veja `execucao-de-titulo-extrajudicial`.
- **Prescrição, pagamento e nulidade da citação** (803, II e III): arguíveis nos embargos. Matéria de ordem pública sem dilação probatória pode ser levada por simples petição (exceção de pré-executividade: construção jurisprudencial, sem súmula na execução civil; a 393 do STJ é de execução fiscal) `[buscar pelo conector]`.
- **Exequente:** rejeição liminar por intempestividade, inépcia ou propósito protelatório (918), resposta em 15 dias (920, I), requerimento de honorários majorados até 20% se rejeitados (827, §2º), multa por ato atentatório (774, par. único; 918, par. único).
- **Efeito dos embargos:** não suspendem a execução (919, caput). A apelação contra a sentença de improcedência não suspende a execução, que é definitiva (Súmula 317). Decisão sobre o efeito suspensivo é agravável (1.015, X).

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "embargos à execução excesso de execução art. 917", "efeito suspensivo dos embargos art. 919" e "impenhorabilidade" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 233, 317, 382 e 539 e Temas 526, 576 e 1235 do STJ podem entrar pelo número.

## Não fazer

- Não alegar excesso sem o valor correto e a memória detalhada e atualizada: é o erro que faz o juiz rejeitar a tese de plano.
- Não contar o prazo da penhora, nem em dobro.
- Não pedir efeito suspensivo sem garantia do juízo e sem fato de dano concreto.
- Não usar embargos para discutir só vício de penhora (917, §1º) nem confundir com impugnação de cumprimento.
- Não somar valores nem calcular o excesso: liste o que entra.
- Não deixar a impenhorabilidade da poupança para depois: preclui se não alegada no primeiro momento ou nos embargos (Tema 1235).

*Referências conferidas e revisadas em 20/10/2026 (Planalto via proxy: CPC 229, 231, 525, 803, 827, 854, 914 a 920 e 1.015, Lei 10.931/2004, art. 28; Banco Nacional de Precedentes do CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
