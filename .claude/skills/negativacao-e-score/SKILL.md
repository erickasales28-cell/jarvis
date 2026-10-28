---
name: negativacao-e-score
description: Use quando o advogado pedir ação por inscrição indevida no SPC, Serasa ou Boa Vista, negativação sem notificação, nome sujo por dívida paga ou que o cliente não deve, manutenção após o pagamento, dano moral por negativação, exclusão do nome, ou reclamação sobre score e cadastro positivo. Negativação e score vêm para esta skill, e não para a `inicial-de-consumo` do Kit, mesmo que o pedido seja declaratória de inexistência de débito mais indenização: a inicial de consumo fica para o consumo sem cadastro de crédito. Complementa peca-a-partir-da-ficha com a notificação prévia (Súmula 359), o filtro da Súmula 385, os prazos de exclusão e o limite do score (Tema 710).
---

# Negativação indevida e score

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da negativação e do score. A inicial de consumo genérica já existe no kit cível: aqui só o que é de cadastro de crédito.

## Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: (a) a inscrição só se mantém por 5 anos (CDC 43, § 1º; Súmula 323): mostre a data-limite de cada inscrição e, vencida, peça a exclusão; (b) a pretensão indenizatória por fato do serviço prescreve em 5 anos do conhecimento do dano e da autoria (CDC 27), contados da ciência da inscrição; (c) se o nome foi mantido após pagamento, conte os 5 dias úteis da Súmula 548 a partir do pagamento integral.

## Antes do roteiro

- **A primeira providência é o extrato de TODAS as inscrições do cliente**, em cada órgão. Se houver outra inscrição legítima e anterior, a Súmula 385 afasta o dano moral (resta o cancelamento). A ficha precisa dizer se existe outra e em que situação.
- Anote: quem inscreveu (credor), em qual órgão, data da inscrição, valor, contrato; se houve **notificação prévia** e como (carta ao endereço do cliente, em que data); se a dívida foi paga (data e comprovante) e quando o nome saiu; se a dívida é do cliente ou de golpe, homônimo, contrato fraudulento.
- **Cinco anos:** a inscrição só pode ser mantida por até 5 anos (CDC 43, § 1º; Súmula 323). Se a dívida prescreveu, os sistemas não podem fornecer dados que dificultem novo crédito (CDC 43, § 5º). Pergunte a data do vencimento original.
- **Score:** há recusa de crédito concreta? Quando, por quem, com o motivo informado? Sem recusa e sem dado excessivo ou sensível, a tese cai (ver Teses).
- **Quem é o réu:** o credor que inscreveu (sempre) e o órgão mantenedor (se a falha é de notificação ou de manutenção). Com mais de uma inscrição, o credor de cada uma é réu possível, inclusive o da inscrição antiga que o cliente diz ter pago e que foi mantida (Súmula 548). Nome de órgão e CNPJ na ficha.

## Estrutura

1. Endereçamento (foro do domicílio do consumidor, CDC 101, I; JEC se couber) e qualificação.
2. Fatos: dívida ou ausência dela, data da inscrição, descoberta, pedido administrativo de retirada, resposta.
3. Direito: CDC 43, §§ 2º e 3º; Súmula 359 (cabe ao órgão mantenedor notificar antes de inscrever); Súmula 404 (AR dispensável, basta a carta ao endereço); Súmula 548 (o credor exclui o registro em 5 dias úteis do pagamento integral); responsabilidade objetiva (CDC 14).
4. Tutela de urgência para excluir ou suspender a inscrição (CPC 300). Se o cliente reconhece parte da dívida e discute o restante (a hipótese em que o Tema 31 nasceu, a revisão de contrato), só se defere abstenção com os requisitos do Tema 31: ação que questiona o débito, aparência de bom direito em jurisprudência consolidada e depósito do incontroverso ou caução. **Se o cliente nega a dívida inteira** (fraude, contrato nunca firmado, dívida paga), não há incontroverso a depositar: não peça caução nem condicione a tutela ao Tema 31; fundamente no CPC 300 com a prova da inexistência (BO, comprovante de pagamento, impugnação da assinatura) e marque `[conferir: aplicação do Tema 31 à dívida inexistente]`.
5. Pedidos: declaração de inexistência do débito (se for o caso); exclusão; dano moral com o fato concreto; inversão do ônus; ofício ao órgão para informar as fontes dos dados (Lei 12.414/2011, art. 5º, IV; acesso, correção e informação sobre compartilhamento na LGPD, Lei 13.709/2018, art. 18, com resposta completa em até 15 dias, art. 19, II).

## Teses e pedidos que costumam caber

- **Sem notificação prévia:** o órgão mantenedor tem legitimidade passiva e a falta de comunicação do art. 43, § 2º, enseja compensação por dano moral (Temas 37, 38 e 40; Súmula 359). O CCF do Banco do Brasil não tem esse dever (Súmula 572). Se a dívida existe e a inscrição é regular no mérito, a tese é só de forma: ponderar.
- **Inscrição indevida:** dano moral nos casos de dívida inexistente, paga ou fraudada. Presunção do dano ("in re ipsa") é entendimento a confirmar pelo conector: `[INSERIR JULGADO: dano moral in re ipsa por negativação indevida, conferir]`. O BNP não traz tese qualificada sobre isso.
- **Súmula 385:** havendo inscrição anterior legítima, sem dano moral. Se a outra inscrição também é indevida ou está sendo discutida, diga e busque julgado: `[INSERIR JULGADO: afastamento da Súmula 385 quando a inscrição anterior é discutida, conferir]`.
- **Pagamento e manutenção:** nome mantido além de 5 dias úteis do pagamento integral gera pedido de exclusão e indenização (Súmula 548).
- **Banco de dados de terceiros:** a venda de dados pessoais não sensíveis por gestor de cadastro sem comunicação ao titular, e o dano moral presumido nesse caso, são objeto do Tema 1404 (afetado). `[conferir situação e suspensão]`.
- **Score e cadastro positivo (Tema 710 e Súmula 550):** o score é prática lícita (Lei 12.414/2011, art. 5º, IV, e art. 7º, I), dispensa consentimento, mas o consumidor pode pedir esclarecimentos sobre as fontes e as informações pessoais valoradas. O abuso (dados excessivos ou sensíveis, art. 3º, § 3º, ou recusa de crédito baseada em dado incorreto ou desatualizado) gera responsabilidade objetiva e solidária do fornecedor do serviço, do banco de dados, da fonte e do consulente (art. 16), com dano moral. Score baixo sozinho não gera indenização. Desde a LC 166/2019 o cadastro positivo abre sem consentimento prévio, com comunicação ao cadastrado em até 30 dias (Lei 12.414, art. 4º, § 4º) e cancelamento gratuito a pedido (art. 5º, I).
- **Demora em baixar gravame de veículo não é dano presumido** (Tema 1078): não use por analogia na negativação.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "negativação indevida dano moral", "notificação prévia inscrição cadastro de inadimplentes" e "credit scoring" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 323, 359, 385, 404, 548, 550 e 572 e os Temas 31, 710 e 1404 podem entrar pelo número, com a situação indicada acima.

## Não fazer

- Não pedir dano moral sem ter visto o extrato de todas as inscrições (Súmula 385).
- Não pôr o dever de notificar no credor: é do órgão mantenedor (Súmula 359).
- Não pedir indenização só porque o score é baixo.
- Não pedir exclusão de inscrição de dívida que o cliente reconhece e não pagou: sem discutir o débito, o pedido não passa.
- Não exigir depósito ou caução (Tema 31) de quem nega a dívida inteira.
- Não afirmar presunção de dano sem julgado conferido.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (BNP/CNJ coletado em 19/10/2026: Súmulas 323, 359, 385, 404, 548, 550 e 572, Temas 31, 37, 38, 40, 710, 1078 e 1404, com o texto das teses; Planalto: CDC 43, LC 166/2019 e LGPD arts. 18 e 19; Lei 12.414/2011 pela tese do Tema 710 e pela LC 166). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
