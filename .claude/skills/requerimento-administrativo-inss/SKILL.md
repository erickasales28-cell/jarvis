---
name: requerimento-administrativo-inss
description: Use quando o advogado pedir para preparar o requerimento administrativo no INSS, o "pedido no Meu INSS", a lista de documentos para dar entrada em aposentadoria, pensão, auxílio por incapacidade, BPC ou salário-maternidade, ou para conferir o CNIS antes do pedido. Complementa peca-a-partir-da-ficha com o requerimento apto (Tema 1124/STJ), o roteiro de conferência do CNIS e a lista de documentos por benefício. Não calcula RMI nem tempo de contribuição.
---

# Requerimento administrativo no INSS

Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-previdenciario`. Quando o escritório tiver modelo de requerimento, a estrutura dele manda e a lista abaixo vira conferência. Esta skill acrescenta o que é próprio do pedido administrativo. A saída é um roteiro de protocolo no Meu INSS (campo a campo, anexos nomeados) mais, se o escritório usar, a petição de instrução em texto.

**Plano:** o roteiro de protocolo não é peça com tese. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se a triagem barrar o caso (prazo decaído, não cabe), pare e responda a consulta, sem plano. Pedido do tipo "o que conferir no CNIS" é resposta direta, sem aval prévio.

## Antes do roteiro

- **Por que o pedido tem que ser "apto".** STJ, Tema 1124 (julgado em 08/10/2025, acórdão publicado em 06/11/2025): o segurado deve apresentar requerimento com documentação mínima; pedido sem condições mínimas pode ser indeferido de imediato ("indeferimento forçado") e não gera interesse de agir; se o pedido é apto mas insuficiente, o INSS deve intimar para complementar. Em juízo só se levam os mesmos fatos e provas do processo administrativo; fato ou documento novo exige novo requerimento (STF, Tema 350). Consequência prática: tudo que o cliente tem entra no pedido, antes do protocolo. Prova que só aparece depois joga a DIB para a citação.
- **Novo pedido do mesmo benefício.** A IN PRES/INSS 208, de 19/05/2026 (DOU 20/05/2026), deu nova redação ao art. 576-A da IN 128/2022: novo requerimento da mesma espécie só depois da decisão do anterior e do prazo de 30 dias do recurso ordinário. A vedação não alcança pedido de revisão nem benefício por incapacidade, que seguem regras próprias (arts. 340 e 346 da IN 128); fontes secundárias divergem sobre se, na incapacidade, ainda há intervalo de 30 dias contado da DCB ou do indeferimento. Antes de orientar novo pedido, `[conferir: art. 576-A, parágrafo único, e arts. 340 e 346 no texto consolidado da IN 128 em portalin.inss.gov.br]`.
- **A IN 128/2022 muda toda hora.** Alterações: INs 188/2025, 203, 208 e 212/2026. Diga ao advogado para abrir o texto consolidado; não cite artigo da IN de memória.
- **Prazos de análise (referência, não regra de preclusão).** Acordo homologado pelo STF em 05/02/2021 no caso que originou o Tema 1066 (vigência inicial de 2 anos; o tema consta cancelado no BNP/CNJ, e a vigência atual do acordo não foi confirmada): salário-maternidade 30 dias; incapacidade 45; pensão, auxílio-reclusão e auxílio-acidente 60; aposentadorias e BPC 90; perícia e avaliação social 45 (90 onde há dificuldade de provimento). Salário-maternidade: Lei 8.213, art. 73-A (Lei 15.415/2026): 30 dias do requerimento, com concessão provisória automática se estourar. Vencido o prazo, há mandado de segurança ou ação por omissão (Tema 350, item I: prazo legal excedido).
- **Perguntas ao advogado que mudam o pedido:** qual espécie e por quê; DER desejada e se aceita reafirmar a DER (requisitos cumpridos depois do pedido); há benefício anterior (NB) ou pedido indeferido; procuração com poderes para requerer no INSS, cumprir exigência e receber ciência; e-mail e telefone cadastrados no Meu INSS (a ciência pelo sistema conta; no CRPS vale a consulta ao processo ou, com e-mail cadastrado, 5 dias após a emissão: Regimento de 2026, Portaria MPS 125/2026, art. 80, §1º).

## Estrutura do roteiro

1. **Espécie e fundamento.** Uma espécie principal. O INSS deve conceder o benefício mais vantajoso (Tema 350/STF, item III): pergunte se o cliente quer que o pedido diga isso expressamente e liste as regras alternativas a testar (EC 103/2019, arts. 15 a 21, e direito adquirido do art. 3º).
2. **Conferência do CNIS (o que o advogado costuma esquecer).**
   - Vínculos sem data de saída; remunerações faltando; competências com indicador de pendência (a lista de indicadores é do INSS: peça ao advogado o CNIS completo, não a tela resumida).
   - Contribuinte individual: recolhimento em atraso e valor abaixo do mínimo da categoria. Contribuição abaixo do mínimo e qualidade de segurado após a EC 103: STF, Tema 1467, repercussão geral reconhecida e suspensão nacional; marque como risco aberto, não como tese.
   - Dúvida sobre vínculo sem remuneração no CNIS: o INSS exige os documentos que serviram de base (Lei 8.213, art. 29-A, §5º). Prepare CTPS, contrato, holerites, FGTS, ficha de registro.
   - Segurado especial: cadastro do art. 38-A; a partir de 01/01/2023 a prova é pelo cadastro (art. 38-B, §1º), com o prazo prorrogado pelo art. 25, §1º, da EC 103 até o cadastro atingir 50% `[conferir: estado atual da cobertura do CNIS-SE]`; documentos do art. 106 complementam.
   - Período especial: PPP e LTCAT já com assinatura e responsável técnico; sem isso, o INSS não reconhece.
3. **Documentos por benefício** (lista da ficha, `[JUNTAR: ...]` onde o cliente só descreveu):
   - Incapacidade: documentos pessoais, CNIS e CTPS, laudos, exames e receitas com data e CID, atestado do médico assistente, CAT se acidente, histórico dos benefícios anteriores.
   - Aposentadoria: CTPS, carnês e guias, PPP/LTCAT, certidões de tempo, comprovantes de escolaridade/magistério se professor, documentos rurais em nome próprio e do grupo familiar.
   - Pensão: certidão de óbito, documentos do falecido, prova da qualidade de segurado dele, certidão de casamento ou prova da união (início de prova material de 24 meses antes do óbito, Lei 8.213, art. 16, §5º), certidões dos filhos, termo de guarda ou tutela.
   - BPC: documentos de todos os que moram na casa, CadÚnico atualizado (até 24 meses), biometria, laudos, comprovante de residência.
   - Salário-maternidade: certidão de nascimento ou termo de adoção/guarda, CNIS ou comprovante de atividade nos 12 meses (segurada especial), carta de dispensa se desempregada.
4. **Pós-protocolo:** número do protocolo na ficha, prazo de análise, exigência (responder dentro do prazo dado; o não cumprimento não é desistência tácita no CRPS, mas o INSS decide com o que tem), ciência da decisão e início dos 30 dias do recurso (skill `recurso-ao-crps`).

## Teses e pedidos que costumam caber

- Concessão da espécie, com DIB na DER; subsidiariamente na data em que os requisitos foram preenchidos (reafirmação).
- Reconhecimento de períodos controvertidos listados um a um, com a prova de cada.
- Análise do melhor benefício. Sem pedido de cálculo: o que entra no cálculo vai em lista, o número vem do sistema do advogado.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "requerimento administrativo apto e interesse de agir previdenciário" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o TRF da região). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: interesse de agir e requerimento apto, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não protocolar pedido genérico, "para ver o que o INSS diz": vira indeferimento forçado (Tema 1124).
- Não calcular RMI, tempo de contribuição, pedágio nem renda per capita.
- Não deixar documento fora do pedido para "guardar para o juiz".
- Não pedir benefício que o CNIS já mostra concedido ao mesmo cliente sem checar acumulação (Lei 8.213, art. 124).

*Referências conferidas em 19/10/2026 e revisadas em 20/10/2026 (Planalto, STJ, BNP/CNJ, gov.br/INSS, DOU). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
