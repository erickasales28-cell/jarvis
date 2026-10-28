---
name: anulatoria-de-debito-fiscal
description: Use quando o advogado pedir ação anulatória de débito fiscal, anular lançamento, anular CDA ou inscrição em dívida ativa, ação declaratória de inexistência de débito tributário, depósito judicial para suspender a exigibilidade, tutela contra cobrança fiscal, ou a relação da anulatória com a execução fiscal. Complementa peca-a-partir-da-ficha com o art. 38 da LEF, o depósito integral (Súmula 112 do STJ e Súmula Vinculante 28), a renúncia à via administrativa e a reunião com a execução.
---

# Ação anulatória de débito fiscal

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Plano com até 5 perguntas. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-tributario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da anulatória de lançamento ou de CDA, seu depósito e sua convivência com a execução.

## Antes do roteiro

Pergunte e registre antes de redigir:
- **Fase do débito:** só lançado (auto ou notificação), inscrito em dívida ativa (CDA), já em execução fiscal. Muda a via: com execução ajuizada, a defesa natural são embargos (skill `embargos-a-execucao-fiscal`) e a anulatória vira ação conexa.
- **Há processo administrativo pendente?** A ação judicial pelo contribuinte importa **renúncia ao poder de recorrer na esfera administrativa** e desistência do recurso (LEF, art. 38, parágrafo único; CTN 208-E, LC 236/2026; a impugnação deve declarar a matéria judicializada, Decreto 70.235, art. 16, V). A medida judicial não suspende o processo fiscal, só os atos executórios (art. 62). Diga ao advogado e peça decisão registrada na ficha antes de ajuizar.
- **O cliente quer e pode depositar?** Depósito **integral e em dinheiro** (Súmula 112 do STJ; CTN 151, II; federal, em DARF, Lei 9.703/1998, art. 1º). O art. 38 da LEF fala em depósito preparatório, mas depósito prévio como requisito de ação não é exigível (Súmula Vinculante 28 do STF): é opção do contribuinte, para suspender a exigibilidade. Depósito integral anterior à execução impede o auto, a inscrição e o ajuizamento, e a execução proposta deve ser extinta (Tema 271 do STJ). A conta do valor integral é do contador ou do órgão (principal, multa, juros e encargos); a skill não calcula.
- **Prazo:** não há prazo no CTN para anular lançamento. Aplica-se o Decreto 20.910/1932, art. 1º: cinco anos "contados da data do ato ou fato do qual se originarem"; as Turmas do STJ contam da notificação do lançamento, sem tema repetitivo (`[INSERIR JULGADO: prazo da anulatória, Decreto 20.910]`), e não estendem à anulatória as causas de suspensão e interrupção da LEF. **Conta sugerida (sugestão a conferir, nunca data certa):** cinco anos da notificação do lançamento (ou da ciência do ato que se ataca, se outro), marcada como "provável". **Conta e ALERTA vão na PRIMEIRA mensagem, antes das perguntas**, e se repetem na linha "Prazo: [conta] · [ALERTA ou nenhum]" do plano (em "Estratégia da peça") e no topo do resumo. **ALERTA** se o prazo provável vencer em 5 dias úteis ou menos ou já tiver passado. Decadência ou prescrição do próprio crédito é tese da autora (CTN 156, V), com conta própria (skill `excecao-de-pre-executividade`).
- **Competência:** federal, Justiça Federal; estadual e municipal, vara da Fazenda. Até 60 salários mínimos, no Juizado Especial Federal cabe a anulação de lançamento fiscal e a competência é absoluta onde ele existe (Lei 10.259, art. 3º, caput, §1º, III e §3º). Mandado de segurança e execução fiscal ficam fora. **Débito estadual ou municipal:** até 60 salários mínimos, a causa tende a ser do Juizado Especial da Fazenda Pública, de competência absoluta onde instalado (Lei 12.153/2009, art. 2º, caput e §4º; a anulatória tributária não consta das exclusões `[conferir se o Juizado existe na comarca]`; só autora pessoa física, ME ou EPP, art. 5º, I). Ficam fora: mandado de segurança, execução fiscal, ações difusas e coletivas, improbidade, desapropriação e causas sobre imóveis dos entes (art. 2º, §1º). Pergunte o valor da causa e o porte da autora antes de escolher o juízo.
- **Documentos:** o lançamento, a CDA, o processo administrativo, as provas do fato (guias, notas, contratos), perícia se houver, comprovante do depósito.

## Estrutura

1. Endereçamento; autora; ente réu; valor da causa (o do débito, copiado). Se houver execução, prevenção e pedido de reunião (CPC 55, §2º, I; Súmula 235 do STJ: não se reúnem se um dos processos já foi julgado).
2. Fatos: lançamento ou inscrição, ciência, processo administrativo e desfecho, depósito.
3. Direito: vícios formais (CTN 142, 202 e 203; requisitos do auto no Decreto 70.235, art. 10, ou CTN 208-B), decadência e prescrição, pagamento, inexistência do fato gerador, ilegalidade ou inconstitucionalidade da exação, multa. A CDA tem presunção relativa de certeza e liquidez (CTN 204): o ônus de afastá-la é da autora, com prova.
4. **Tutela de urgência** (CPC 300; veja a skill `tutela-de-urgencia`, do pacote Cível e consumidor 2): liminar ou tutela provisória suspende a exigibilidade (CTN 151, V) e interrompe a multa de mora (CTN 161, §3º). Mera discussão judicial sem garantia idônea ou suspensão do art. 151 não impede o CADIN (Tema 264 do STJ). Garantia por seguro ou fiança: CTN 151, X (texto da LC 236/2026: suspende a exigibilidade a aceitação, pelo credor, de apólice de seguro garantia ou carta de fiança oferecidas em execução fiscal), e Tema 1385; o efeito sobre protesto e CADIN está afetado no STJ, sem tese (Tema 1263 `[conferir julgamento]`). Contra o Poder Público não cabe liminar que esgote, no todo ou em parte, o objeto da ação, nem a que a lei veda no mandado de segurança (Lei 8.437/1992, art. 1º, caput e §3º; extensão à tutela antecipada pela Lei 9.494/1997, art. 1º `[conferir texto]`).
5. Provas: documental, pericial contábil com quesitos, testemunhas se o fato exigir.
6. Pedidos: anulação (total ou parcial) do lançamento ou da CDA; declaração de inexistência da relação; suspensão da exigibilidade; levantamento do depósito se vencer, ou conversão em renda se perder; honorários.

## Teses e pedidos que costumam caber

- Anulatória ajuizada **depois** da execução não suspende a execução, que segue sem garantia ou depósito (CPC 784, §1º); por isso o pedido de tutela e o de reunião.
- Sanção política (interdição, apreensão, impedimento de atividade como cobrança) é ilegítima (Súmulas 70, 323 e 547 do STF).
- Parcelamento anterior: confissão de dívida não impede discussão dos aspectos jurídicos; os fáticos só caem por defeito do ato (Tema 375 do STJ).
- Multa: razoabilidade e tetos de 75%, 100% (fraude, sonegação ou conluio) e 150% (reincidência) no CTN 113-A, §1º (LC 236/2026); qualificada acima de 100% só com reincidência (Tema 863 do STF); multa isolada por obrigação acessória limitada pelo Tema 487 do STF. Estados e municípios têm 2 anos, de 04/09/2026, para adequar a dosimetria (CTN 211-A) `[conferir lei local]`.
- Reforma tributária: para fato gerador de CBS ou IBS (a partir de 2027, com teste em 2026, ADCT art. 125; LC 214, arts. 343, 346 e 348), o rito é o da LC 214/2025 e da LC 227/2026; não ensine mérito sem o artigo.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "ação anulatória de débito fiscal depósito integral", "suspensão da exigibilidade CTN 151" e "anulatória e execução fiscal conexão" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 112 e 235 e Temas 264, 271, 375 e 1385 do STJ, e Temas 487 e 863 do STF, podem entrar pelo número.

## Não fazer

- Não ajuizar sem avisar da renúncia à instância administrativa.
- Não chamar de depósito o que não é integral e em dinheiro, nem prometer suspensão sem ele ou sem liminar.
- Não afirmar que a anulatória suspende a execução.
- Não calcular o valor do depósito.
- Não cravar o prazo: é conta sugerida.

*Referências conferidas em 21/10/2026 (LEF, CTN com a LC 236/2026, Decreto 20.910, Lei 8.437, Lei 10.259, Lei 12.153 e LC 214 no Planalto via proxy; súmulas e Temas 264, 271, 375, 1263 e 1385 do STJ e 487 e 863 do STF no Banco Nacional de Precedentes do CNJ de 19/10/2026; prazo da anulatória por acórdãos de Turma do STJ em fontes secundárias). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
