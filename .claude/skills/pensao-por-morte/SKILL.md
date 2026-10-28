---
name: pensao-por-morte
description: Use quando o advogado pedir a inicial de pensão por morte (o requerimento no INSS é da skill requerimento-administrativo-inss), reconhecimento de união estável para pensão, habilitação de dependente, rateio entre viúva e companheira, ex-cônjuge com alimentos, filho maior inválido, menor sob guarda, ou "quanto tempo dura a pensão". Complementa peca-a-partir-da-ficha com qualidade de dependente, duração por idade, cotas da EC 103 e as mudanças da Lei 15.108/2025.
---

# Pensão por morte

Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-previdenciario`. Quando o escritório tiver modelo, a estrutura dele manda e a lista abaixo vira conferência. Esta skill acrescenta o que é próprio da pensão por morte. Valor da cota e atrasados: do advogado.

**Plano:** a skill escreve a inicial. Pedido de requerimento administrativo no INSS: use `requerimento-administrativo-inss`, não esta estrutura. Pergunta só sobre duração ("quanto tempo dura") é consulta: plano de uma tela, até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese; se a triagem barrar o caso, pare e responda a consulta, sem plano.

## Antes do roteiro

- **Lei da data do óbito** (STJ, Súm. 340): fixe a data do óbito primeiro; óbito antes de 13/11/2019 segue a regra anterior à EC 103 nas cotas; antes de 2015 e de 2019, regras de duração e de união estável diferentes. A ficha tem a data do óbito e a DER.
- **Quando pedir (Lei 8.213, art. 74):** início no óbito se o requerimento vem em até 180 dias para filho menor de 16 anos e 90 dias para os demais dependentes (inc. I); depois, a pensão começa no requerimento (inc. II). Morte presumida por decisão judicial: inc. III. Prazo de decadência para o direito à pensão não existe (STF, Tema 313, I); o que corre é a prescrição das parcelas. Pergunte se o prazo de 90 ou 180 dias passou.
- **Qualidade de segurado do falecido** (art. 15; período de graça de 12 meses, 24 se mais de 120 contribuições, +12 se desempregado). Se ele a perdeu, mas já preenchia os requisitos de uma aposentadoria, a pensão é devida (STJ, Súm. 416). Carência: nenhuma (art. 26, I).
- **Dependentes (art. 16):** cônjuge, companheiro e filho não emancipado menor de 21 anos, inválido ou com deficiência grave (classe I, dependência presumida); pais (II); irmão nas mesmas condições do filho (III), com a prova da dependência (§4º). Enteado, menor sob tutela e **menor sob guarda judicial** equiparam-se a filho mediante declaração do segurado e desde que não tenham condições suficientes para o próprio sustento e educação (§2º, redação da **Lei 15.108/2025**, em vigor desde 14/03/2025): para óbito anterior a essa lei, o STJ já tinha o Tema 732 a favor do menor sob guarda, com base no ECA; use o dispositivo que valer pela data do óbito. Filho maior de 21 anos não inválido: não se restabelece (STJ, Tema 643).
- **União estável (art. 16, §§3º, 5º e 6º):** início de prova material contemporânea, não superior a 24 meses antes do óbito; prova exclusivamente testemunhal só em força maior ou caso fortuito. Para a duração acima de 4 meses, prova de 2 anos de união (§6º). Liste os documentos por data: conta conjunta, contrato, plano de saúde, endereço, filhos, escritura, seguro.
- **Concorrência:** ex-cônjuge com alimentos concorre em igualdade (art. 76, §2º); alimentos temporários, pensão pelo prazo remanescente (§3º); mulher que renunciou aos alimentos pode ter pensão se provar necessidade superveniente (STJ, Súm. 336). Habilitação provisória em ação de reconhecimento de dependência, sem pagamento até o trânsito (art. 74, §3º). Perda: condenação por homicídio doloso contra o segurado (art. 74, §1º); simulação ou fraude (§2º).

## Estrutura

1. Endereçamento, qualificação, NB do falecido e do requerimento, valor da causa em lista.
2. **Fatos:** óbito, relação (casamento, união, filiação), dependência, requerimento e indeferimento.
3. **Qualidade de segurado** do falecido, com CNIS.
4. **Dependência**, por cada autor, com a prova material por data.
5. **Duração e cotas (art. 77 e EC 103, art. 23):**
   - cônjuge ou companheiro: 4 meses se o segurado tinha menos de 18 contribuições ou a união menos de 2 anos, salvo óbito por acidente ou doença profissional (§2º, V, "b", e §2º-A); depois, a tabela por idade do cônjuge ou companheiro **na data do óbito** (§2º, V, "c"). **Óbito a partir de 01/01/2021 (tabela vigente, Portaria ME 424/2020, editada com base no §2º-B: as faixas podem subir com a expectativa de sobrevida, no mínimo a cada 3 anos):** menos de 22 anos, 3 anos; 22 a 27, 6 anos; 28 a 30, 10 anos; 31 a 41, 15 anos; 42 a 44, 20 anos; 45 ou mais, vitalícia. Óbito anterior a 2021, já sob a Lei 13.135/2015 `[conferir: data exata de início]`: tabela do texto original da lei (histórico): 3 anos (menos de 21), 6 (21 a 26), 10 (27 a 29), 15 (30 a 40), 20 (41 a 43), vitalícia (44 ou mais). Use a faixa pela data do óbito (Súm. 340) e pergunte a idade nessa data. Antes de citar a portaria, confira se alguma posterior mexeu nas faixas `[conferir: gov.br/inss, página de pensão por morte]`;
   - cônjuge inválido ou com deficiência: enquanto durar a condição (§2º, V, "a"); filho e irmão: até 21 anos, ou cessação da invalidez ou da deficiência (§2º, II a IV);
   - cota familiar de 50% mais 10 pontos por dependente, até 100% (EC 103, art. 23); a cota de quem perde a qualidade não reverte aos demais; fica preservado o valor de 100% da pensão quando os dependentes remanescentes forem 5 ou mais (§1º); dependente inválido ou com deficiência grave tem tratamento próprio (§2º). **O art. 75 da Lei 8.213 ainda mostra 100% no texto compilado do Planalto**: se o óbito é posterior à EC 103, o cálculo é o da EC. Não confunda.
   - acumulação com outros benefícios: EC 103, art. 24 (§2º, parcelas de 60%, 40%, 20% e 10%).
6. **Pedidos:** reconhecimento da dependência e da união; concessão desde o óbito (se em prazo) ou desde a DER; rateio; tutela quando houver urgência (alimentar, CPC art. 300); prova testemunhal e documental.

## O que mudou em 2025 e 2026

- Lei 15.108/2025 (menor sob guarda, art. 16, §2º).
- IN PRES/INSS 212/2026 (fontes secundárias: filho nascido após a morte do segurado teria pensão desde o nascimento, sem retroativo): `[conferir: texto oficial da IN 212 no DOU de 11/08/2026]` antes de citar.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "pensão por morte, união estável e dependência" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o TRF da região e a TNU). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: união estável sem início de prova material, conferir]`. TNU, Súm. 63 (nova redação aprovada em 18/09/2025, conferida no CJF): a dispensa de início de prova material da união estável vale só para óbito anterior à MP 871/2019; para óbito posterior, aplica-se o art. 16, §5º. Não cite a redação antiga. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não aplicar a tabela de duração por idade sem as 18 contribuições e os 2 anos de união.
- Não usar prova só testemunhal para a união estável.
- Não pedir pensão "vitalícia" sem checar a idade na data do óbito.
- Não calcular a cota nem os atrasados.
- Não esquecer outro dependente: rateio ignora quem o autor não citou, e a habilitação posterior reduz a cota.

*Referências conferidas em 19/10/2026 e revisadas em 20/10/2026 (Planalto, STJ, BNP/CNJ, CJF; tabela de duração pela notícia oficial do gov.br de 01/2021 sobre a Portaria ME 424/2020, cujo texto no DOU não foi aberto). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
