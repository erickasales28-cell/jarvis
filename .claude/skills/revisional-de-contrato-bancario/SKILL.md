---
name: revisional-de-contrato-bancario
description: Use quando o advogado pedir ação revisional de contrato bancário, "revisar o financiamento", "juros abusivos", capitalização, tarifas (TAC, TEC, registro, seguro), comissão de permanência, repetição de indébito em empréstimo, financiamento de veículo, CCB ou cheque especial. Não é para negativação ou score (`negativacao-e-score`) nem para a defesa em busca e apreensão (`defesa-na-busca-e-apreensao`). Complementa peca-a-partir-da-ficha com a discriminação das cláusulas e do valor incontroverso (CPC 330, §§ 2º e 3º), a taxa média do BACEN como parâmetro e o quadro de súmulas e temas por tipo de encargo.
---

# Revisional de contrato bancário

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da revisional. A inicial de consumo genérica já existe no kit cível: aqui só o que é bancário.

## Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: a prescrição da repetição (candidatos: CC 206, § 3º, IV; CDC 27; CC 205), contada de cada parcela paga. Mostre a conta por candidato e deixe a escolha com o advogado. Com alienação fiduciária e parcela em atraso, o prazo que pesa é o da busca e apreensão: ver `defesa-na-busca-e-apreensao`.

## Antes do roteiro

- **Tem o contrato?** Sem o instrumento, a peça pede exibição e usa a taxa média (Súmula 530; Temas 233 e 234). Pergunte data da contratação, tipo (CCB, financiamento, empréstimo pessoal, cheque especial), valor financiado, nº e valor das parcelas, quantas já foram pagas e se há mora.
- **A data decide encargo a encargo:** capitalização mensal (contratos de 31/03/2000 em diante, Súmula 539); TAC e TEC (válidas só até 30/04/2008, Súmula 565, Temas 618 e 619); ressarcimento de correspondente bancário e pré-gravame (abusivos a partir de 25/02/2011, Temas 958 e 972).
- **Parcelas em dia ou em atraso?** Isto muda a tutela e a mora (ver Teses).
- **Renegociação anterior** não impede a discussão do contrato original (Súmula 286).
- **Prescrição da repetição:** ponto controvertido (CC 205, CC 206, § 3º, IV, CDC 27). Mostre a conta pelos três candidatos. A orientação do STJ para repetição de indébito contratual é o prazo decenal do CC 205, sem tema repetitivo no BNP: `[INSERIR JULGADO: prescrição decenal da repetição de indébito em contrato bancário, conferir]`.
- **Seguro prestamista e tarifas acessórias:** pergunte se o seguro foi imposto pelo banco (sem opção de recusar) ou era opcional. Sem a imposição na ficha, o Tema 972 é hipótese, não fato.
- **Vara ou JEC e valor da causa:** pergunte o proveito econômico (CPC 292, II) e se a perícia contábil indica a vara; sem isso, `[DEFINIR: valor da causa]`.

## Estrutura

1. Endereçamento, qualificação, foro (domicílio do consumidor, CDC 101, I).
2. Fatos: contrato, data, taxa contratada e taxa cobrada, parcelas pagas.
3. **Obrigações contratuais controvertidas, cláusula por cláusula**, e o **valor incontroverso**, que continua sendo pago no tempo e modo contratados (CPC 330, §§ 2º e 3º). Sem isso, inépcia. Quantificar o incontroverso é do advogado: deixe `[VALOR: incontroverso, conforme planilha]`.
4. Direito: CDC aplicável a banco (Súmula 297); abusividade só com demonstração concreta (CDC 51, § 1º; Tema 27); pedido expresso de cada cláusula, porque o juiz não conhece de ofício (Súmula 381).
5. Pedidos: declaração de nulidade ou revisão de cada cláusula; recálculo; repetição do indébito; tutela; perícia contábil; exibição do contrato; inversão do ônus (CDC 6º, VIII).
6. Valor da causa e documentos.

## Teses e pedidos que costumam caber

- **Juros remuneratórios:** 12% ao ano ou a média não bastam sozinhos (Súmula 382; Tema 25). Cabe revisão se a abusividade ficar demonstrada frente à taxa média do BACEN da mesma modalidade e período (Tema 27). A skill lista o que entra na comparação (modalidade, data da contratação, taxa mensal e anual contratada) e manda o advogado buscar a série na página "Taxas de juros de operações de crédito" do BACEN (bcb.gov.br/estatisticas/txjuros, por modalidade e período). Não calcula.
- **Juros moratórios e taxa legal:** juros de mora em contrato bancário podem ser pactuados até 1% ao mês (Súmula 379; Tema 30). A taxa legal do CC 406 na redação da Lei 14.905/2024 (Selic menos IPCA, em vigor desde 30/08/2024) não alcança os juros remuneratórios de banco (Tema 26: CC 406 e 591 inaplicáveis ao mútuo bancário); o módulo da área a cita para a correção da condenação, não para o contrato.
- **Taxa não informada ou contrato não juntado:** taxa média, salvo se a cobrada for menor (Súmula 530; Temas 233, 234).
- **Capitalização:** válida se expressamente pactuada (Súmula 539); taxa anual maior que o duodécuplo da mensal basta (Súmula 541; Tema 247). Pedir só se faltar pactuação clara ou o contrato for anterior a 31/03/2000.
- **Comissão de permanência:** não cumula com juros, mora, multa nem correção (Súmulas 30, 294, 296, 472; Tema 52).
- **Tarifas:** TAC e TEC em contrato posterior a 30/04/2008 (Súmula 565); tarifa de cadastro é válida só no início da relação (Súmula 566; Tema 620); serviço de terceiro sem especificação, comissão de correspondente após 25/02/2011, registro de contrato e avaliação do bem sem serviço prestado (Tema 958); pré-gravame após 25/02/2011 e seguro imposto pelo banco (Tema 972). IOF financiado é válido (Tema 621).
- **Mora:** abusividade nos encargos da normalidade (juros e capitalização) descaracteriza a mora (Tema 28); abusividade de encargo acessório não descaracteriza (Tema 972, item 3); a revisional sozinha não impede a mora (Súmula 380; Tema 29).
- **Tutela contra negativação:** só com ação que questione o débito, aparência de bom direito em jurisprudência consolidada e depósito do incontroverso ou caução (Tema 31). O Tema 31 nasceu na revisional bancária: é aqui que ele se aplica sem ressalva.
- **Busca e apreensão:** em financiamento com alienação fiduciária e parcelas em atraso, o risco real é a busca e apreensão, não só a negativação. A revisional não afasta a mora (Súmula 380); a notificação (Súmula 72), a purga e os prazos estão em `defesa-na-busca-e-apreensao`.
- **Repetição:** não exige prova do erro em conta-corrente (Súmula 322). Simples ou em dobro: ver CDC 42, parágrafo único, e a skill `consignado-nao-contratado` sobre o Tema 929.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "revisão de juros remuneratórios abusivos", "capitalização de juros contrato bancário" e "tarifas bancárias abusivas" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas e temas acima, conferidos, podem entrar pelo número.

## Não fazer

- Não pedir limitação a 12% ao ano pela Lei de Usura: banco não se sujeita (Súmula 596 do STF; Tema 24 do STJ). A Súmula 283 do STJ é de administradora de cartão de crédito: não a use contra banco comum.
- Não pedir capitalização como ilegal em si.
- Não aplicar a taxa legal do CC 406 (Lei 14.905/2024) aos juros remuneratórios do contrato (Tema 26).
- Não omitir a discriminação das cláusulas nem o valor incontroverso (CPC 330, § 2º).
- Não calcular juros, saldo nem repetição: liste o que entra e deixe `[VALOR]`.
- Não afirmar que a revisional impede a negativação ou a busca e apreensão.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (BNP/CNJ coletado em 19/10/2026: Súmulas 30, 286, 294, 296, 297, 322, 379, 380, 381, 382, 472, 530, 539, 541, 565 e 566, Temas 24 a 31, 52, 233, 234, 246, 247, 618 a 621, 958 e 972 do STJ, Súmula 596 do STF; Planalto: CPC 330, §§ 2º e 3º, e Lei 14.905/2024). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
