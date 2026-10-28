---
name: investigacao-de-paternidade
description: Use quando o advogado pedir ação de investigação de paternidade (com alimentos, petição de herança ou post mortem), negatória de paternidade, reconhecimento de paternidade ou maternidade socioafetiva, multiparentalidade, exame de DNA, ou contestação de investigatória. Complementa peca-a-partir-da-ficha com a Lei 8.560/92, a Súmula 301, o caminho extrajudicial do Provimento CNJ 149/2023 e o que cumular.
---

# Investigação de paternidade e filiação socioafetiva

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em `metodos/peca-a-partir-da-ficha.md`), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-familia-e-sucessoes` (mesma pasta). Se a skill `advo-escritorio` não estiver instalada, avise e não redija. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da filiação.

## Antes do roteiro

- **Qual é o pedido?** (a) paternidade biológica contra suposto pai vivo; (b) post mortem contra herdeiros; (c) socioafetiva, em vida ou póstuma; (d) negatória ou anulação de registro; (e) reconhecimento voluntário. Cada um tem rito e polo passivo próprios.
- **Extrajudicial primeiro:** reconhecimento voluntário perante o oficial (CNN, Prov. 149/2023, arts. 501 e 502) e socioafetivo no cartório de registro civil (arts. 505 a 511). Regras do socioafetivo: reconhecido com mais de 12 anos; pretendente maior de 18 anos e pelo menos 16 anos mais velho; irmãos e ascendentes não reconhecem; anuências colhidas pessoalmente; **parecer do MP**; não gera mais de dois pais ou duas mães, e só um ascendente socioafetivo por linha; irrevogável, só se desfaz em juízo por vício de vontade, fraude ou simulação; processo judicial pendente sobre a filiação impede a via extrajudicial; dúvida ou suspeita vai ao juiz. Artigos conferidos no CNN em 20/10/2026 (505, §§1º a 4º; 507, §9º; 509 a 511); o CNN muda com frequência: reabra antes de orientar.
- **Foro:** vara de família; cumulada com alimentos, o foro do alimentando (Súmula 1 do STJ). Segredo (CPC 189, II). DNA e dado de criança são sensíveis: iniciais, laudo só nos autos sigilosos.
- **Perguntas que mudam a peça:** a criança está registrada? Há pai registral? A mãe era casada ou em união (presunção, CC 1.597)? O suposto pai vive, recusou exame, mudou de endereço? Há prova do relacionamento? Há convivência socioafetiva e desde quando? Há herança em jogo (prazo)? Quem paga o exame?

## Estrutura

1. Qualificação; legitimidade: o filho, enquanto viver, ou seus herdeiros se morrer menor ou incapaz (CC 1.606); o MP, na averiguação oficiosa (Lei 8.560, art. 2º). Post mortem: herdeiros e espólio no polo passivo.
2. Fatos: o relacionamento, a época da concepção, a tentativa de acordo, a recusa.
3. Direito: igualdade dos filhos (CC 1.596); reconhecimento irrevogável (CC 1.609 e 1.610; Lei 8.560, art. 1º); todos os meios legais e moralmente legítimos de prova, e a recusa ao DNA gera presunção apreciada em conjunto com as demais provas (Lei 8.560, art. 2º-A; Súmula 301 do STJ). Investigado morto ou sem paradeiro: exame de DNA em parentes consanguíneos, a expensas do autor (art. 2º-A, §2º, incluído pela Lei 14.138/2021; a presunção pela recusa é o §1º).
4. Pedidos: reconhecimento, retificação do registro com nome do pai e dos avós, alimentos na sentença (Lei 8.560, art. 7º), provisórios, perícia genética e quem a custeia, efeitos sucessórios.

## Teses e pedidos que costumam caber

- **Alimentos** desde a citação (Súmula 277 do STJ); provisórios com indícios (skill `alimentos`).
- **Recusa ao DNA:** presunção relativa; peça também prova testemunhal e documental. Não afirme paternidade provada só pela recusa.
- **Socioafetiva e biológica convivem:** a socioafetividade, registrada ou não, não impede o vínculo biológico concomitante, com os efeitos próprios (STF, Tema 622). Se o cliente quer só um, pergunte antes qual: a multiparentalidade traz herança de ambos.
- **Imprescritibilidade:** a investigação não prescreve, a petição de herança sim (Súmula 149 do STF); o prazo da petição de herança conta-se da abertura da sucessão e não se impede, suspende nem interrompe pela ação de filiação (STJ, Tema 1200, acórdão publicado com RE pendente no STF); o prazo em si é o geral do CC: busque e leve ao advogado.
- **Coisa julgada anterior sem DNA:** STF, Tema 392: cabe repropor a investigatória julgada improcedente por falta de prova quando a parte não podia pagar o DNA e o Estado não o custeou, e a coisa julgada se relativiza se o vínculo genético não foi apurado por falta de DNA. Pergunte se houve ação antiga.
- **Negatória:** a ação do marido é imprescritível (CC 1.601); o menor reconhecido impugna em 4 anos da maioridade (CC 1.614). Registro por "adoção à brasileira" e arrependimento é tema de jurisprudência: busque.
- **Menor sem pai registrado:** o oficial remete à averiguação oficiosa (Lei 8.560, art. 2º); o suposto pai tem 30 dias, depois o MP pode propor a ação.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "recusa ao exame de DNA", "multiparentalidade e socioafetividade" e "petição de herança e prazo prescricional" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 1, 277 e 301 e Tema 1200 do STJ e Temas 392 e 622 do STF podem entrar pelo número.

## Não fazer

- Não pedir "legitimação" nem usar "filho ilegítimo": CC 1.596 proíbe designação discriminatória.
- Não omitir os herdeiros do suposto pai falecido do polo passivo.
- Não aceitar reconhecimento de filho maior sem o consentimento dele (CC 1.614; Lei 8.560, art. 4º).
- Não usar a via extrajudicial com processo judicial de filiação em curso.
- Não anexar laudo de DNA a conta individual do chat.

*Referências conferidas em 20/10/2026 (Planalto, Câmara dos Deputados, STJ, CNJ, BNP/CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
