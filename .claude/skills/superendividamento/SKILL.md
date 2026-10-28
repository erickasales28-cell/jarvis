---
name: superendividamento
description: Use quando o advogado pedir ação de superendividamento, repactuação de dívidas, plano de pagamento, audiência de conciliação com todos os credores, mínimo existencial ou "Lei 14.181". Complementa peca-a-partir-da-ficha com o rol de dívidas e credores, o plano de até 5 anos (CDC 104-A), o processo por superendividamento (104-B), a via administrativa (104-C) e a situação do mínimo existencial depois do julgamento do STF.
---

# Superendividamento (CDC 104-A a 104-C)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do superendividamento.

## Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: a ação não tem prazo fatal, mas o rol muda com a prescrição das dívidas antigas e com o cadastro de 5 anos (CDC 43, § 1º). Mostre a conta das mais antigas. No plano, mostre as datas sugeridas (5 anos; no plano compulsório, primeira parcela em até 180 dias da homologação, 104-B, § 4º) e os 2 anos para repetir o pedido (104-A, § 5º).

## Antes do roteiro

- **Quem pode:** consumidor pessoa natural, de boa-fé, em impossibilidade manifesta de pagar o conjunto das dívidas de consumo, vencidas e vincendas, sem comprometer o mínimo existencial (CDC 54-A, § 1º). Ficam fora dívidas por fraude ou má-fé e as de produto ou serviço de luxo de alto valor (54-A, § 3º).
- **Fora do plano:** contrato celebrado dolosamente sem propósito de pagar, crédito com garantia real, financiamento imobiliário e crédito rural (104-A, § 1º). Veículo alienado fiduciariamente: ponto de jurisprudência `[conferir]`; por padrão, trate como fora do plano e diga isso ao advogado.
- **Dívida fora do plano continua na conta do mínimo.** A parcela do carro em dia é dívida vincenda (54-A, § 1º) e disputa a renda: lance-a como compromisso fixo no cálculo do mínimo existencial, ainda que o contrato fique fora do plano.
- **Serviço essencial (luz, água):** é serviço de prestação continuada e entra no conceito de dívida de consumo (54-A, § 2º). Entra no rol como credor, desde que seja consumo (pergunte se a ligação é residencial e desde quando atrasa). Regra de corte e parcelamento da concessionária: `[conferir regulação setorial]`.
- **Dívida contraída para saúde** (do cliente ou de familiar) reforça a boa-fé; não é produto de luxo (54-A, § 3º). Tarje o dado de saúde.
- **Foro e porta de entrada:** pergunte se o tribunal tem núcleo ou CEJUSC de superendividamento e se cabe gratuidade `[conferir no tribunal]`.
- **Peça à ficha o rol completo:** credor, tipo de contrato, saldo, parcela, atraso, garantia, se já renegociou; renda líquida e despesas básicas (moradia, alimentação, saúde, transporte). Sem o rol de todos os credores a audiência global não funciona. Renda, dívida e saúde são dado sensível: nada disso vai pro perfil do escritório.
- **Via administrativa antes?** O Procon e demais órgãos do sistema de defesa do consumidor podem conduzir audiência global e plano (104-C). Serve de prova da tentativa, não é pré-requisito legal.
- **Pergunte qual é a ação:** repactuação consensual com audiência (104-A) ou, se algum credor recusar, processo por superendividamento com plano judicial compulsório (104-B).

## Estrutura

1. Endereçamento (foro do domicílio do consumidor, CDC 101, I) e qualificação.
2. Fatos: histórico do endividamento, o que causou, boa-fé, tentativas de renegociar.
3. Quadro de credores e dívidas, uma linha por contrato, valores vazios `[VALOR]` onde o cliente não trouxe.
4. **Mínimo existencial:** demonstrar com a renda e as despesas da ficha, não só com o número do decreto (ver Teses). Despesa que a ficha não traz vira `[DEFINIR: despesas]`; sem elas, não afirme o mínimo.
5. **Proposta de plano de pagamento:** prazo máximo de 5 anos, preservadas as garantias e formas de pagamento originais, com data de exclusão do nome dos cadastros e condição de não contrair novas dívidas (104-A, caput e § 4º). A skill monta o esqueleto do plano (credor, forma, prazo, carência) e deixa os valores para o advogado.
6. Pedidos: designação de audiência com todos os credores; suspensão de cobranças e dos encargos de mora do credor ausente (104-A, § 2º); em caso de recusa, instauração do processo do art. 104-B (credores citados com 15 dias para documentos e justificativa da recusa; administrador nomeado; plano compulsório); tutela para preservar o mínimo e retirar a negativação.

## Teses e pedidos que costumam caber

- **Não é insolvência civil**, e o pedido só se repete 2 anos depois de cumprido o plano (104-A, § 5º). A sentença homologatória é título executivo com força de coisa julgada (104-A, § 3º).
- **Credor que não comparece sem justa causa:** suspensão da exigibilidade, interrupção dos encargos de mora e sujeição ao plano se o valor for certo e conhecido (104-A, § 2º).
- **Plano compulsório (104-B):** instaurado a pedido do consumidor quando a conciliação falha com algum credor; credores citados têm 15 dias para juntar documentos e justificar a recusa (§ 2º); o juiz pode nomear administrador, que apresenta o plano em até 30 dias (§ 3º); o plano garante ao credor, no mínimo, o principal corrigido por índices oficiais de preços, com liquidação em até 5 anos após a quitação do plano consensual, primeira parcela em até 180 dias da homologação e o restante em parcelas mensais iguais (§ 4º).
- **Deveres do fornecedor na oferta de crédito:** informação, avaliação responsável, consignado só depois de confirmada a margem (CDC 54-B a 54-D e 54-G). Descumprimento permite pedir redução de juros e encargos, alongamento do prazo e indenização (54-D). Contratos conexos: 54-F.
- **Mínimo existencial, valor:** o Decreto 11.150/2022, na redação do Decreto 11.567/2023, fixa R$ 600,00 por mês (art. 3º). As notícias oficiais do STF registram que o julgamento das ADPFs 1.005, 1.006 e 1.097 estava suspenso em 22/04/2026 e foi concluído em 23/04/2026: o CMN deve reavaliar o parâmetro todos os anos, com estudos técnicos (unanimidade), e a exclusão do consignado do cálculo foi declarada inconstitucional por maioria (divergiram Cármen Lúcia, Fux, Dino e Zanin). Relatos que falam em "suspenso" são do dia 22. O placar numérico, o dispositivo exato e a tese não constam das notícias, e o acórdão não foi aberto: `[conferir: acórdão e dispositivo das ADPFs 1.005, 1.006 e 1.097]`. O texto consolidado do decreto no Planalto ainda lista o consignado entre as exclusões (art. 4º, parágrafo único, I, "h", com nota de "vide" às ADPFs) e manda o CMN atualizar o valor (art. 3º, § 3º). Por isso: argumente o mínimo com a conta concreta do cliente, não com R$ 600 como teto fixo, e inclua o consignado no rol e no cálculo, citando o julgamento com o `[conferir]` acima.
- Não localizei decreto novo de 2026 sobre o valor `[conferir no DOU]`.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "superendividamento plano de pagamento", "mínimo existencial" e "superendividamento e consignado" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não incluir no plano dívida de garantia real, financiamento imobiliário, crédito rural nem dívida contraída com dolo.
- Não propor plano maior que 5 anos nem deixar de preservar o mínimo existencial.
- Não calcular parcela, renda comprometida nem percentual: monte o quadro e deixe `[VALOR]`.
- Não afirmar que o STF fixou R$ 600 como valor definitivo, nem que a ADPF "derrubou" o decreto.
- Não pôr renda e saúde do cliente em texto aberto fora da peça.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (Planalto: CDC compilado, arts. 42, 43, 54-A a 54-G e 104-A a 104-C, e Decreto 11.150/2022 consolidado com o Decreto 11.567/2023; notícias oficiais do STF de 22 e 23/04/2026 sobre as ADPFs, acórdão não aberto). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
