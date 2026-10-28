---
name: inicial-bpc-loas
description: Use quando o advogado pedir inicial de BPC, LOAS, benefício assistencial a pessoa com deficiência ou a idoso, ou ação contra indeferimento de BPC por renda ou por deficiência. Complementa peca-a-partir-da-ficha com o art. 20 da Lei 8.742 na redação atual (Leis 14.176/2021, 14.973/2024, 15.077/2024, 15.157/2025), o Decreto 12.534/2025 e a prova de miserabilidade e de impedimento de longo prazo. Não calcula renda per capita.
---

# Inicial de BPC/LOAS

Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-previdenciario`. Quando o escritório tiver modelo, a estrutura dele manda e a lista abaixo vira conferência. Esta skill acrescenta o que é próprio do BPC. Dado sensível (criança, CID, renda da casa): iniciais na ficha, laudo anonimizado.

## Antes do roteiro

- **Competência e rito:** JEF (Lei 10.259, art. 3º); o BPC vale um salário mínimo, então o teto de 60 SM raramente aperta, mas as vencidas somam. Comarca sem vara federal: Lei 5.010, art. 15, III (mais de 70 km).
- **Interesse de agir:** STF, Tema 350, e STJ, Tema 1124 (acórdão de 06/11/2025): requerimento apto antes. No BPC, requerimento apto exige CadÚnico atualizado e biometria (art. 20, §§12 a 12-B); sem isso o INSS arquiva ou indefere, e o juiz pode extinguir. Decreto 6.214/2007 (redação do Decreto 12.534/2025): sem regularização em 30 dias, o INSS considera desistência.
- **Ficha mínima:** idoso (65 anos ou mais, documento) ou deficiência (laudos, CID, barreiras); NB, DER, motivo do indeferimento (renda ou perícia?); todos que moram sob o mesmo teto, com parentesco, idade, renda e benefícios de cada um; despesas com saúde e cuidados; CadÚnico (data da última atualização); se há outro BPC ou benefício de um salário mínimo na casa.
- **Documentos do cliente:** CadÚnico, comprovante de residência, renda de cada morador (ou declaração de ausência), laudos e receitas, gastos mensais comprovados, fotos da moradia se o caso pedir.

## Estrutura

1. Endereçamento, qualificação do autor e, se incapaz, do representante; valor da causa em lista.
2. **Fatos:** DER, motivo do indeferimento, composição da família, rotina e limitações.
3. **Direito (Lei 8.742, art. 20, redação atual):**
   - caput: 65 anos ou deficiência, sem meios de se manter nem de ser mantido pela família;
   - §2º e §10: deficiência é o impedimento de longo prazo (efeitos por no mínimo 2 anos) que, com barreiras, limita a participação plena; §2º-A: avaliação obrigatória; art. 40-B: avaliação médica e social, com registro do CID e sigilo; avaliação biopsicossocial, por assistente social e perito médico (Decreto 6.214, art. 16);
   - §3º: renda per capita de até 1/4 do salário mínimo; o STF declarou inconstitucional o §3º como requisito obrigatório para a concessão (Tema 27/RG, conferido no BNP/CNJ em 19/10/2026) e o STJ firmou que 1/4 presume a miserabilidade mas não é a única prova (Tema 185); §11 admite outros elementos de prova; §11-A permite ao regulamento ampliar o limite até 1/2 SM, mas o Decreto 6.214, art. 4º, IV (redação do Decreto 12.534/2025), mantém 1/4: não há ampliação em vigor;
   - **§3º-A (Lei 15.077/2024):** renda familiar é a soma dos rendimentos dos membros que vivem sob o mesmo teto, "vedadas deduções não previstas em lei", ressalvado o §14; fora do cálculo: indenização por rompimento de barragem, estágio e aprendizagem (§9º) e benefício de até 1 SM de idoso ou pessoa com deficiência da família (§14; STJ, Tema 640, estende ao deficiente a regra do Estatuto do Idoso; STF, Tema 312, declarou inconstitucional por omissão parcial o art. 34, parágrafo único, do Estatuto);
   - §15: mais de um BPC na mesma família; art. 21: revisão a cada 2 anos; §5º do art. 21 (Lei 15.157/2025): dispensa de reavaliação se o impedimento é permanente, irreversível ou irrecuperável, salvo suspeita de fraude ou erro; §16 do art. 20: perícia de HIV com infectologista; art. 21-A: atividade remunerada suspende; art. 21-B: CadÚnico desatualizado há mais de 24 meses, com prazos de 45 ou 90 dias, bloqueio e suspensão.
   - Estrangeiro residente tem direito (STF, Tema 173).
4. **Decreto 12.534/2025 (25/06/2025):** revogou, no art. 4º, §2º, do Decreto 6.214, a exclusão de transferências de renda (Bolsa Família) do cômputo da renda do BPC; continuam fora do cálculo (art. 4º, §2º, VII a X) a indenização por rompimento de barragem, o BPC de outro membro, o benefício previdenciário de até 1 SM de idoso ou pessoa com deficiência e o auxílio-inclusão. É o ponto de controvérsia de 2025 e 2026: a tese do autor é que o regulamento não pode somar o que a lei não manda somar (art. 20, §3º-A), e há decisão de JEF afastando o decreto no caso concreto; não há decisão vinculante do STF nem PDL aprovado até onde conferi `[conferir: ADI, ADPF ou PDL sobre o Decreto 12.534]`. Se a renda per capita só estoura por causa do Bolsa Família, a tese vai no pedido principal.
5. **Pedidos:** concessão desde a DER; perícia médica e avaliação social com quesitos (skill `quesitos-para-pericia`); tutela quando houver risco concreto (CPC, art. 300); gratuidade.
6. Provas: CadÚnico, laudos, comprovantes de despesa, testemunhas sobre a composição da casa.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "BPC LOAS renda per capita e deficiência" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o TRF da região e a TNU). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. TNU, conferidas no CJF em 20/10/2026: Súm. 79 (a condição socioeconômica se prova por laudo de assistente social, auto de constatação de oficial de justiça ou, inviáveis esses, testemunhas) e Súm. 80 (após a Lei 12.470/2011, avaliação social por assistente social ou providência equivalente é necessária); a Súm. 48 ganhou nova redação em 2019 (Tema 173: impedimento de longo prazo, mínimo de 2 anos, avaliado no caso concreto) `[conferir: texto atual da Súm. 48]`. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: renda per capita e Bolsa Família no BPC, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não calcular renda per capita; liste cada renda e cada exclusão legal.
- Não tratar a súmula 11 da TNU como vigente (consta cancelada).
- Não tratar BPC como aposentadoria: é benefício assistencial de um salário mínimo, sem contribuição; não prometa pensão, 13º ou outros efeitos sem checar a norma.
- Não esquecer biometria e CadÚnico (art. 20, §§12 a 12-B).
- Não afirmar que a renda do parente que mora em outra casa entra: o cálculo é só do grupo sob o mesmo teto.

*Referências conferidas em 19/10/2026 e revisadas em 20/10/2026 (Planalto, STJ, BNP/CNJ, CJF para as súmulas da TNU). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
