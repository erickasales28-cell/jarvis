---
name: fraude-pix-e-golpe
description: Use quando o advogado pedir ação contra banco por golpe do Pix, falsa central, falso funcionário, boleto falso, clonagem, invasão de conta, sequestro relâmpago, empréstimo feito por golpista, MED do Pix, "banco não devolveu o dinheiro". Complementa peca-a-partir-da-ficha com a responsabilidade do banco (Súmula 479, fortuito interno) e seus limites, o MED do BACEN e o que o STJ vem exigindo em 2026 (operação atípica, culpa exclusiva).
---

# Fraude, Pix e golpe

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da fraude bancária. A inicial de consumo genérica já existe no kit cível.

## Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: (a) o prazo para abrir o MED: a transação original tem que ter no máximo 80 dias na abertura da Recuperação de Valores (Guia do MED do BACEN, versão 4.4): se estiver perto ou vencido, é ALERTA DE PRAZO; (b) a prescrição da pretensão indenizatória por fato do serviço, 5 anos do conhecimento do dano e da autoria (CDC 27), contada da data do Pix. Das perguntas abaixo, leve ao plano as cinco que mais mudam a tese (quem apertou o botão, atipicidade, limite, MED, empréstimo); as demais viram `[DEFINIR]`.

## Antes do roteiro

Esta é a skill em que a ficha mais decide o resultado. Pergunte e registre:

- **Quem apertou o botão?** O próprio cliente, com senha ou biometria (engenharia social, falsa central, falso funcionário, venda falsa) ou o fraudador sem o cliente (invasão, clonagem, roubo do celular, coação)? A tese muda por inteiro.
- **Perfil da conta:** valores e horários habituais, limite do Pix, uso de dispositivo, destinatários anteriores. A operação foi **atípica** (valor, horário, destinatário novo, várias transferências seguidas, limite elevado na hora, novo aparelho)? Ao comparar, diga a base de cada razão: valor do Pix contra a média mensal de movimentação, contra o maior Pix anterior e o total contra a média. Não escreva "N vezes a média" sem a base.
- **Aumento de limite:** o limite foi elevado pelo cliente (e como: tela, canal, hora) ou sem ação dele? Regra do BACEN: o pedido de aumento de limite do Pix feito pelo cliente só tem efeito depois de um prazo mínimo de 24 horas, enquanto a redução é imediata (Resolução BCB 142/2021; o gov.br fala em 24 a 48 horas para o banco analisar o pedido por canal digital). Fontes: relatório de gestão do Pix 2023 (bcb.gov.br) e notícia do gov.br; o texto vigente da resolução não abriu: `[conferir norma do BACEN sobre aumento de limite do Pix]`. Se o limite subiu de R$ 1.000 a R$ 50.000 em minutos, à noite, esse é o defeito do serviço mais forte do caso: peça os logs do pedido e da efetivação.
- **O que o golpista sabia:** se citou dado do contrato, saldo, últimas compras ou número de protocolo do banco, isso indica vazamento ou falha de segurança. Registre literalmente o que foi dito.
- **O que o cliente fez depois:** hora em que percebeu, quando ligou para o banco, protocolo, quando abriu a contestação (MED) e qual resposta, BO, bloqueio de cartão e conta.
- **Houve empréstimo ou limite contratado pelo golpista no nome do cliente?** Vira pedido de inexistência do contrato (ver `consignado-nao-contratado`, Tema 1061 sobre assinatura impugnada).
- **Boleto falso:** quem emitiu o boleto, banco de destino, se os dados do pagador e do contrato vieram corretos.

## Estrutura

1. Endereçamento (foro do domicílio do consumidor, CDC 101, I) e qualificação.
2. Fatos em linha do tempo com hora das operações e das comunicações ao banco.
3. Direito: CDC aplicável a banco (Súmula 297); responsabilidade objetiva por fortuito interno em fraudes de terceiros (Súmula 479; Tema 466; CDC 14). Ao banco cabe provar a culpa exclusiva do consumidor ou de terceiro (CDC 14, § 3º, II); fundamente a inversão (CDC 6º, VIII).
4. **O defeito do serviço, em concreto:** operação atípica não bloqueada; falha na autenticação; demora em bloquear após o aviso; falha no MED (não bloqueou os valores no banco recebedor, não abriu a recuperação de valores); vazamento de dados usados pelo golpista.
5. Pedidos: restituição dos valores (sem calcular; o valor da causa e a escolha entre JEC e vara ficam com o advogado, `[DEFINIR]`); declaração de inexistência de empréstimo; obrigação de fazer (rastreamento e bloqueio, ofício ao banco recebedor); dano moral, descrevendo o fato concreto; tutela de urgência quando ainda há valor a bloquear.

## Teses e pedidos que costumam caber

- **Não é automático.** A Terceira Turma do STJ, em julgado divulgado pelo próprio tribunal em 15/07/2026, afastou a indenização no golpe da falsa central: a Súmula 479 e o Tema 466 pressupõem fortuito interno, e a responsabilidade depende de falha concreta do serviço (movimentação fora do perfil não barrada, fragilidade de segurança); sem isso, a conduta do golpista somada à da vítima rompe o nexo causal. É julgado de Turma, não tese vinculante: traga o acórdão pelo conector, sem número de memória, e monte a peça pelo caso concreto, não pela súmula.
- **MED do Pix:** Regulamento do Pix (anexo à Resolução BCB 1/2020), capítulo XI, seção II, e art. 39-B (bloqueio cautelar), detalhado no Guia de implementação do MED do BACEN, versão 4.4. Pontos do guia: o pagador contesta no app do banco (autoatendimento obrigatório) ou no canal de atendimento; cobre golpes, fraudes e coerção, inclusive quando o cliente autorizou com senha ou biometria; a contestação abre a Recuperação de Valores (o "MED 2.0", em produção desde 11/05/2026), que rastreia e bloqueia recursos também nas contas seguintes da cadeia; bloqueio cautelar pelo banco recebedor de até 72 horas; a transação tem que ter no máximo 80 dias. As alterações da versão 4.4 (01/09/2026 e 26/10/2026) só ampliam o prazo de contestação de uma devolução e detalham a notificação de infração: nada muda para o consumidor. O MED não cobre desacordo comercial, compra em que o vendedor foi de boa-fé nem Pix enviado por engano, e a devolução depende de saldo na conta do recebedor. Use o MED como parâmetro do dever de agir rápido, não como garantia de devolução.
- **Prova da diligência:** protocolo e hora da contestação, extrato, BO, prints da conversa com o golpista, pedido de exibição dos logs de acesso e das câmeras de segurança de autenticação, e gravação do atendimento.
- **Culpa concorrente** pode reduzir a indenização (CC 945): trate na peça o comportamento do cliente com franqueza.
- **Cartão e compra não reconhecida:** a responsabilidade por fraude no cartão é infraconstitucional (STF, repercussão geral inexistente nos Temas 286 e 417); o caminho é o STJ.
- **Banco recebedor (conta de passagem):** responsabilidade possível, sem tese qualificada no BNP: `[INSERIR JULGADO: responsabilidade do banco recebedor em golpe do Pix, conferir]`. Peça ofício ao recebedor para identificar o titular.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "fortuito interno fraude bancária", "golpe do Pix responsabilidade do banco" e "operação atípica não bloqueada" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 297 e 479 e o Tema 466 podem entrar pelo número.

## Não fazer

- Não afirmar que a Súmula 479 torna o banco responsável em todo golpe.
- Não omitir que o cliente forneceu senha ou fez o Pix, se foi o caso: a peça fica frágil e a contestação do banco acerta nisso.
- Não prometer devolução pelo MED nem chamar o MED de chargeback.
- Não calcular valor devolvido nem juros.
- Não pedir dano moral presumido sem julgado conferido.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (BNP/CNJ coletado em 19/10/2026: Súmulas 297 e 479, Tema 466 do STJ, Temas 286 e 417 do STF; Guia de implementação do MED, BACEN, versão 4.4, com histórico de revisão; relatório de gestão do Pix 2023 e notícia do gov.br sobre limites; notícia oficial do STJ de 15/07/2026 sobre a falsa central, localizada por busca, acórdão não aberto). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
