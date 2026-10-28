---
name: divorcio-e-dissolucao-consensual
description: Use quando o advogado pedir divórcio consensual, dissolução consensual de união estável, minuta de escritura de divórcio, petição de homologação de acordo, "dá pra fazer no cartório?" ou "divórcio em cartório com filho menor". Complementa peca-a-partir-da-ficha com o teste cartório ou juízo (CPC 733, Res. CNJ 35/2007 com a 571/2024, Código Nacional de Normas), o conteúdo da escritura e da petição e o imposto da partilha.
---

# Divórcio e dissolução consensual

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em `metodos/peca-a-partir-da-ficha.md`), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-familia-e-sucessoes` (mesma pasta). Se a skill `advo-escritorio` não estiver instalada, avise e não redija. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do consensual.

## Antes do roteiro

Faça o teste cartório ou juízo, nesta ordem, e mostre o resultado ao advogado:
1. **Consenso total?** Se faltar ponto, é litigioso (skill `divorcio-litigioso`).
2. **Nascituro ou filho incapaz?** O CPC 733 só prevê a escritura sem eles. A Res. CNJ 35/2007, art. 34, §2º, na redação da Res. 571/2024, admite o divórcio em cartório com filho menor ou incapaz se guarda, visitação e alimentos já foram resolvidos em juízo. Para a união estável, o Código Nacional de Normas (Prov. CNJ 149/2023), art. 537, §6º, na redação do Prov. 202/2025, diz o mesmo e exige que a resolução judicial conste no título. Sem essa decisão prévia: petição judicial (CPC 731). A norma diz "visitação"; na peça escreva "convivência".
   - **Via mista (resposta prática a "dá pra fazer escritura?"):** o casal que só quer o cartório para o divórcio e a partilha pode (1) pedir em juízo a homologação só de guarda, convivência e alimentos do filho (petição consensual, CPC 731, III e IV, com o MP intimado por haver interesse de incapaz, CPC 721 e 178, II), e (2) depois lavrar a escritura de divórcio e partilha, mencionando a decisão homologatória. Ofereça ao advogado as duas vias (tudo em juízo, ou mista) com o que cada uma custa em tempo, e deixe a escolha dele. A escritura só sai depois da decisão; não a minute como se já coubesse.
3. **Gravidez:** as partes declaram na escritura se há gestação (Res. 35, art. 34, §1º).
4. **Advogado ou defensor** assistindo as partes (CPC 733, §2º); a escritura independe de homologação e é título hábil para registro e levantamento (§1º).
5. **Tabelião:** livre escolha, sem as regras de competência do CPC (Res. 35, art. 1º, redação da 571).
6. **Companheiro incapaz:** o CNN veda representação de companheiros por curador ou tutor sem autorização judicial (art. 537, §7º). Vai ao juízo.

Perguntas que mudam o ato: data e regime do casamento ou da união, pacto; filhos e gravidez; cada bem (matrícula, financiamento, veículo, quotas, previdência, contas); dívidas; quem fica no imóvel; alimentos entre eles; nome; animal de estimação.

**Imposto:** partilha que dá a um mais que a meação é doação (ITCMD estadual [conferir lei do estado]); venda entre eles é ITBI municipal. Pergunte o valor de cada bem e avise que o cálculo é do advogado.

## Estrutura

- **Escritura (minuta):** qualificação; certidão de casamento atualizada ou dados da união; declaração sobre filhos e gravidez; menção à decisão judicial prévia, quando houver filho incapaz; divórcio ou dissolução; nome; alimentos entre as partes; partilha bem a bem, com valor, quitação mútua e dívidas; assistência do advogado; efeitos de averbação (CC 10, I) e de registro imobiliário.
- **Petição judicial (CPC 731, I a IV):** partilha dos bens comuns; pensão entre os cônjuges; guarda dos filhos incapazes e convivência; valor da contribuição para criá-los e educá-los. Sem acordo de partilha, ela fica para depois (par. único). União estável: CPC 732.
- **União estável:** datas de início e fim e regime (CC 1.725). Os títulos são sentença, escritura ou termo declaratório de dissolução, este com advogado (CNN, art. 537, §3º). Registro no Livro E da última residência dos companheiros (Lei 6.015, art. 94-A, incluído pela Lei 14.382/2022; CNN, art. 539); não exige registro prévio da união (art. 544); união de pessoa casada só se registra se separada ou declarada por sentença (Lei 6.015, art. 94-A, §1º; CNN, art. 545).

## Teses e pedidos que costumam caber

- **Plano de convivência** completo no acordo com filhos (skill `guarda-e-convivencia`): na petição judicial consensual o MP é intimado (CPC 721 e 178, II); na escritura com filho incapaz, a decisão judicial prévia já passou por ele.
- **Alimentos entre os cônjuges:** o direito não se renuncia (CC 1.707). Redija "não pretende alimentos neste momento" e avise do risco de pedido futuro. O STJ tem entendimento sobre renúncia no divórcio: busque.
- **Partilha desigual por vontade das partes:** declare a natureza (doação, dação em pagamento) para o fisco.
- **Animal de estimação:** Lei 15.392/2026, se a ficha trouxer.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "renúncia a alimentos no divórcio consensual" e "partilha desigual e doação" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não prometer cartório com filho incapaz ou nascituro sem a decisão judicial prévia de guarda, visitação e alimentos.
- Não usar "separação judicial" (STF, Tema 1053).
- Não fixar valor de pensão, meação ou imposto: liste o que entra.
- Não esquecer a averbação no registro civil e o registro dos imóveis: a escritura sozinha não os faz.
- Divórcio unilateral em cartório não é lei: é projeto.

*Referências conferidas em 20/10/2026 (Planalto, Câmara dos Deputados, CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
