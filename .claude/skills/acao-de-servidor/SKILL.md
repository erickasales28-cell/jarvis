---
name: acao-de-servidor
description: Use quando o advogado pedir ação de servidor público contra o ente, cobrança de vantagem, adicional, gratificação, progressão ou promoção, desvio de função, diferenças salariais, reenquadramento, "ação ordinária contra o estado/município/União" por verba de servidor, ou prescrição de verba de servidor. Complementa peca-a-partir-da-ficha com a prescrição quinquenal (Decreto 20.910 e Súmula 85 STJ), o desvio de função (Súmula 378 STJ), a escolha entre vara da Fazenda e juizado (60 salários mínimos) e o que o Judiciário não pode fazer (Súmula Vinculante 37).
---

# Ação de servidor contra a Fazenda

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga também o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`. Não existe módulo `area-administrativo` no Kit: `area-civel-consumidor-e-imobiliario` serve só de base de CPC; o resto é desta skill. Plano com até 5 perguntas, priorizadas.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

**ALERTA na primeira mensagem**, antes de qualquer pergunta ou plano (régua única): prazo processual ou contratual que vence em 5 dias úteis ou menos; decadência e prescrição a 60 dias ou menos, ou janela já aberta; prazo que já venceu vai no topo como VENCIDO. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (úteis × corridos, lei do ente): conte os dois cenários, use o mais curto e marque `[conferir]`. O plano ganha a linha "Prazo".

## Antes do roteiro

- **Regime e foro:** estatutário municipal ou estadual: Justiça comum estadual (Súmulas 137 e 218 STJ); federal: Justiça Federal (Súmula 173 STJ). Celetista admitido sem concurso antes de 1988: Justiça do Trabalho (STF, Tema 853) `[conferir pelo vínculo]`. A Lei 8.112 só vale pra servidor civil da União: regime, vantagem e plano de cargos do estadual ou municipal estão no estatuto e na lei local `[conferir lei do ente]`; não aplique a 8.112 por analogia sem avisar. Peça a lei da vantagem, a ficha financeira e o contracheque.
- **Prescrição, a conta mais importante.** Fazenda: 5 anos contra todos os entes (Decreto 20.910, art. 1º; STJ, Tema 553 para indenização; STF, Tema 1189: vale também para o temporário com contrato nulo, não o prazo bienal trabalhista). Vantagem de trato sucessivo sem negativa do direito: prescrevem só as parcelas anteriores ao quinquênio da propositura (Súmula 85 STJ). O fundo de direito só prescreve se houve negativa EXPRESSA, em ato normativo de efeito concreto ou ato administrativo formalizado com ciência ao servidor; a simples inércia em implantar não dispara o prazo (STJ, Tema 1410). Reconhecimento administrativo do direito não é renúncia tácita à prescrição e não paga retroativo além do quinquênio sem lei (STJ, Tema 1109). Requerimento administrativo suspende enquanto a Administração estuda (art. 4º); a prescrição só se interrompe uma vez e volta pela metade (arts. 8º e 9º). Reclamação sem prazo em lei: 1 ano (art. 6º). Mostre a linha do tempo como SUGESTÃO A CONFERIR e abra o resumo com **ALERTA** se parte das parcelas já pode estar prescrita ou se a prescrição do fundo de direito se consuma em 60 dias ou menos.
- **Vara da Fazenda ou juizado?** Até 60 salários mínimos o juizado é absoluto onde instalado: Lei 12.153/2009 (Estados, DF e Municípios) e Lei 10.259/2001 (União, autarquias e fundações federais), arts. 2º e 3º respectivamente. Para o teto, a soma de 12 parcelas vincendas com as vencidas não pode passar o limite (Lei 12.153, art. 2º, §2º; Lei 10.259, art. 3º, §2º). Ficam fora do juizado: MS, improbidade e impugnação de demissão de servidor civil ou de sanção disciplinar de militar (Lei 12.153, art. 2º, §1º; Lei 10.259, art. 3º, §1º), e no federal também a anulação de ato administrativo federal, salvo previdenciário e fiscal. Pergunte o valor total e o salário mínimo do ano ao advogado: a skill não calcula. `[conferir o teto local de pequeno valor]`.
- **Rito contra a Fazenda:** prazo em dobro para o ente (CPC 183), salvo prazo próprio em lei (§2º); remessa necessária da sentença contrária (CPC 496), dispensada abaixo de 1.000, 500 ou 100 salários mínimos conforme o ente (§3º) ou quando a sentença segue súmula ou repetitivo (§4º). No juizado da Fazenda não há prazo diferenciado nem reexame necessário (Lei 12.153, arts. 7º e 11), e o pagamento até o teto local sai por requisição em 60 dias (art. 13).
- **Ficha mínima:** cargo, data de posse, lei da vantagem, o que o ente pagou ou negou, requerimento administrativo e resposta, datas dos pagamentos, enquadramento atual.

## Estrutura

1. Endereçamento (vara da Fazenda Pública ou juizado); partes (o ente, ou a autarquia, que paga). Tutela de urgência só com base: a Lei 9.494/1997, art. 1º, estende à tutela contra a Fazenda as vedações da Lei 8.437/1992, art. 1º, §3º (não esgotar o objeto) e da Lei 5.021/1966, art. 1º, §4º (sem liminar para pagar vencimentos); a vedação gêmea do MS caiu no STF em 2021, estas seguem no texto `[conferir como o tribunal da causa as aplica]`.
2. Fatos: vínculo, norma da vantagem, requisito cumprido, negativa.
3. Direito: a lei do ente que cria a vantagem; teses abaixo.
4. Prescrição: pedir parcelas dentro do quinquênio e o reconhecimento do direito.
5. Pedidos: declaração do direito; pagamento das parcelas vencidas e vincendas; implantação em folha; honorários. **Correção e juros (liste, não calcule):** até 08/12/2021, IPCA-E e juros da poupança para servidor (STJ, Tema 905; STF, Tema 810); de 09/12/2021, Selic uma só vez (EC 113, art. 3º, redação original; STF, Tema 1419); a EC 136/2025 reescreveu o art. 3º: no requisitório federal, da expedição ao pagamento, IPCA mais juros simples de 2% ao ano, limitado à Selic (§1º), sem juros de mora no prazo do art. 100, §5º (§3º); para Estados e Municípios, ADCT, art. 97, §§16 e 16-A, desde 1º/08/2025. O índice da fase anterior ao requisitório depois da EC 136 está em julgamento (STF, Tema 1484, afetado): peça pelo índice que o tribunal da causa aplica e marque `[conferir]`.

## Teses e pedidos que costumam caber

- **Desvio de função:** reconhecido, o servidor tem direito às diferenças salariais (Súmula 378 STJ; Tema 14 do STJ no BNP). O pedido é de diferenças, não de provimento no cargo (Súmula Vinculante 43). Prove as funções exercidas, o período e a diferença com o cargo paradigma.
- **Isonomia ou equiparação por sentença:** o Judiciário não aumenta vencimento por isonomia (Súmula Vinculante 37; Súmula 339 STF). A tese é de aplicação da lei existente, não de equiparação.
- **Regime jurídico:** não há direito adquirido a regime nem à forma de composição da remuneração, preservada a irredutibilidade (STF, Tema 24). Se o ente mudou a regra, o pedido é sobre a vantagem já incorporada.
- **Salário mínimo:** não serve de indexador de vantagem (Súmula Vinculante 4); o cálculo de gratificações não incide sobre o abono para atingir o mínimo (SV 15).
- **Licença-prêmio não gozada convertida em pecúnia:** prescrição quinquenal contada da aposentadoria (STJ, Tema 516). Férias não gozadas de ex-servidor: termo inicial em julgamento (STJ, Tema 1395, afetado) `[conferir andamento]`.
- **Execução:** sentença que implique reclassificação, equiparação, aumento ou extensão de vantagens a servidores só se executa após o trânsito em julgado (Lei 9.494, art. 2º-B). Se o pedido é anular punição, o juizado não serve e a peça é outra (MS ou ação anulatória).

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "desvio de função servidor diferenças", "prescrição quinquenal servidor Súmula 85" e o da vantagem em disputa (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não calcular diferença, juros ou correção: liste termo inicial, índice e período.
- Não pedir equiparação com outro cargo "por isonomia".
- Não ajuizar no juizado quando há pedido de anulação de punição ou valor acima do teto sem renúncia ao excedente `[conferir renúncia]`.
- Não afirmar a prescrição de fundo de direito sem ler o ato de negativa (Tema 1410), nem confiar em lei do ente sem tê-la lido.
- Não pedir "Selic" ou "IPCA-E" como índice único: a regra mudou em 12/2021 e em 09/2025.

*Referências conferidas em 21/10/2026 (Planalto via proxy de leitura: EC 113, art. 3º, na redação da EC 136/2025, e ADCT, art. 97, §§16 e 16-A; Lei 12.153, arts. 2º, 3º, 7º, 11 e 13; CPC, arts. 183, 219 e 496; em 20/10/2026: Decreto 20.910, Lei 10.259, Lei 9.494, Lei 8.437, Lei 5.021; súmulas e temas no BNP/CNJ coletado em 19/10/2026, inclusive Temas 1109, 1189, 1395, 1410, 1419 e 1484). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
