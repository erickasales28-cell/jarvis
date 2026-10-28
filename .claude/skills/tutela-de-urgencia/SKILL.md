---
name: tutela-de-urgencia
description: Use quando o advogado pedir tutela de urgência, liminar, tutela antecipada, tutela cautelar, "pedir liminar", pedido antecedente ou incidental, "estabilizar a tutela" ou resposta a pedido de liminar, quando o pedido é a própria tutela (peça avulsa, antecedente, cautelar ou incidental em processo em curso). Se a tutela vai dentro do agravo (`agravo-de-instrumento`), da inicial de plano de saúde (`plano-de-saude`) ou de outra inicial, use a skill da peça e traga daqui só o capítulo da tutela. Complementa peca-a-partir-da-ficha com a escolha entre antecedente e incidental, os requisitos do CPC 300, a caução, o aditamento do 303 e a estabilização do 304.
---

# Tutela de urgência

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da tutela de urgência, no pedido e na resposta.

## Prazo, prescrição e plano

Prazo e prescrição com a conta à mostra: apresente a conta sugerida (termo inicial, regra de contagem, dias úteis ou corridos com a base legal, feriados considerados e resultado provável), marcada como sugestão a conferir `[conferir: calendário do tribunal]`, sem cravá-la como certa. Abra o resumo com **ALERTA DE PRAZO** se o prazo provável vence em 5 dias úteis ou menos, ou já venceu, e com **ALERTA DE PRESCRIÇÃO** se a prescrição pode estar consumada. Sem a data de hoje, pergunte. Plano com no máximo 5 perguntas, priorizadas; o que ficar sem resposta vira `[DEFINIR]`. Súmula e Tema listados nesta skill entram pelo número e vão na conferência.

Aqui: mostre a conta dos prazos do rito escolhido: aditamento em 15 dias (303, § 1º, I) a partir da intimação da concessão; pedido principal em 30 dias (308) a partir da efetivação da cautelar; para o réu, o agravo em 15 dias úteis contra a decisão que concedeu, que evita a estabilização. Se faltam 5 dias úteis ou menos para qualquer deles, ALERTA DE PRAZO. Das perguntas abaixo, leve ao plano as cinco que mais pesam (necessidade da antecedente, perigo com data, estabilização, documentos, caução).

## Antes do roteiro

Pergunte e registre antes de redigir:
- **A antecedente é necessária?** Se a ficha já permite uma inicial completa, a tutela incidental pedida na própria inicial (300) costuma bastar, sem o aditamento de 15 dias e sem o risco da estabilização. Use a antecedente (303) só quando a urgência impede reunir a inicial completa agora. Se o advogado já pediu a antecedente, pergunte o porquê antes de montá-la.
- **O que o cliente quer no fim:** se o pedido final importa (declarar um débito inexigível, indenização), a estabilização pode encerrar o processo sem decidir isso (ver Teses). Pergunte.
- **O perigo, com data:** o que acontece e quando (consulta marcada, vencimento, leilão, corte do serviço). Urgência sem data e sem fato é o motivo mais comum de indeferimento.
- **A probabilidade do direito:** quais documentos já provam o essencial sem dilação.
- **Natureza:** antecipada (satisfativa: entrega o bem da vida) ou cautelar (assegura o resultado útil: arresto, sequestro, arrolamento, protesto contra alienação, outra medida). CPC 294 a 301.
- **Momento:** incidental (já há processo ou será proposto junto com a inicial; sem custas pelo pedido, CPC 295) ou antecedente (urgência já na inicial, CPC 303 e 305).
- **Reversibilidade:** a antecipada não se concede com perigo de irreversibilidade dos efeitos (300, §3º). Se o pedido é irreversível, diga ao advogado e prepare a tese de que o dano da negativa é maior.
- **Caução:** o juiz pode exigir caução real ou fidejussória para ressarcir danos, dispensável para quem não pode oferecê-la (300, §1º). Pergunte se o cliente tem como prestar.
- **Quer liminar sem ouvir a parte contrária ou com justificação prévia** (300, §2º).

## Estrutura

**Incidental (pedido na inicial ou em petição no curso):** seção "Da tutela de urgência" com (a) fatos do perigo, (b) probabilidade do direito com os documentos, (c) reversibilidade e caução, (d) pedido preciso (o que o réu deve fazer, em quanto tempo, multa diária se for o caso: 537, fixável de ofício, com prazo razoável para cumprir, devida desde o descumprimento (§4º) e revisável se excessiva ou insuficiente (§1º)). Competência: o juízo da causa (299).

**Antecedente satisfativo (CPC 303):** inicial que se limita ao pedido de tutela, indicando o pedido de tutela final, a lide, o direito e o perigo. A declaração de que se pretende o benefício do caput, que permite a estabilização (303, §5º), é decisão do advogado depois de avisado do custo (ver Teses): não a ponha por padrão. Valor da causa considera o pedido final (303, §4º), então as custas iniciais seguem o valor da causa final. Concedida a tutela, o autor adita em 15 dias, ou prazo maior fixado, com argumentos, documentos e confirmação do pedido final, sem novas custas sobre o aditamento (§1º, I, e §3º): isso não torna a antecedente barata; sem aditamento, o processo é extinto sem mérito (§2º). O réu é citado para audiência de conciliação ou mediação (334) e o prazo de resposta corre depois (§1º, II e III). Se o juiz entender que não há elementos, manda emendar em 5 dias, sob pena de indeferimento (§6º).

**Antecedente cautelar (CPC 305 a 310):** a inicial indica a lide, seu fundamento e a exposição sumária do direito e do perigo. Se o juiz entender que o pedido é satisfativo, adota o 303 (305, par. único). Réu: 5 dias para contestar e indicar provas (306). Revelia: fatos presumidos, decisão em 5 dias; contestado: procedimento comum (307). O pedido principal vem em **30 dias**, nos mesmos autos, sem novas custas (308), ou já junto com o pedido cautelar (§1º). A eficácia cessa se o principal não for deduzido no prazo, se a medida não for efetivada em 30 dias ou se o pedido principal for julgado improcedente ou extinto sem mérito (309); cessada, não se renova salvo sob novo fundamento (par. único). Indeferimento da tutela não impede o pedido principal, salvo se reconhecida decadência ou prescrição (310).

## Teses e pedidos que costumam caber

- **Custo da estabilização para o autor:** se o réu não recorre, o processo é extinto e a decisão provisória vira o resultado prático, mas o pedido final (por exemplo, declarar a fatura inexigível) fica sem sentença, e a estabilização não faz coisa julgada: o réu tem 2 anos para propor ação de revisão (304, §§ 2º, 5º e 6º). Quando o pedido final é o que interessa, prefira a tutela incidental na inicial completa, ou aditar e prosseguir sem declarar o benefício do §5º.
- **Probabilidade do direito em serviço essencial (energia, água):** CDC 22 (serviços essenciais devem ser contínuos) e a regulação setorial (ANEEL, no caso de energia) `[conferir norma e jurisprudência sobre corte por apuração unilateral de fraude e débito de recuperação de consumo]`. Narre a apuração unilateral sem contraditório, se houve, e o perigo concreto.
- **Estabilização (304):** a tutela antecipada concedida em caráter antecedente se torna estável se não houver recurso, e o processo é extinto. Qualquer parte pode, em até **2 anos** da ciência da decisão que extinguiu o processo, propor ação para rever, reformar ou invalidar (§§2º e 5º); a estabilização não faz coisa julgada (§6º). Para o réu, a defesa é recorrer no prazo. O STJ diverge sobre se a contestação, sem agravo, impede a estabilização (1ª Turma: só o agravo; 3ª e 4ª: a contestação basta). A Corte Especial começou a julgar embargos de divergência em 05/08/2026, o relator votou por não conhecer e houve pedido de vista `[conferir andamento no STJ]`. Na dúvida, o réu interpõe o agravo **e** contesta.
- **Responsabilidade do requerente (302):** indenização do prejuízo da efetivação da tutela se a sentença for desfavorável, se não providenciar a citação em 5 dias na liminar antecedente, se a eficácia cessar ou se acolhida prescrição ou decadência. Avise o cliente.
- **Tutela da evidência (311):** sem prova de perigo, quando há abuso do direito de defesa, prova documental com tese firmada em repetitivo ou súmula vinculante, depósito (reipersecutória) ou prova documental suficiente sem contraprova razoável. Os incisos II e III admitem decisão liminar.
- **Recurso:** agravo de instrumento contra decisão sobre tutela provisória (1.015, I); veja a skill `agravo-de-instrumento`.
- **Contra o Poder Público:** a Lei 9.494, art. 1º, estende à tutela antecipada as vedações da Lei 8.437, art. 1º: sem liminar onde o mandado de segurança não a admitiria, sem cautelar em 1º grau contra ato de autoridade com foro em tribunal (§1º) e sem liminar que esgote o objeto da ação (§3º); vantagem a servidor só se paga após o trânsito (Lei 9.494, art. 2º-B). O que sobrou das vedações de liminar da lei do mandado de segurança: `[conferir Lei 12.016, art. 7º, §2º, e a decisão do STF sobre ele]`.
- **No plano de saúde, passagem aérea e consumo:** a liminar costuma ser o pedido central; veja as skills da área.
- **Se o escritório defende o réu:** impugne a probabilidade com a documentação, mostre a ausência de data de perigo ou a irreversibilidade, e peça caução.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "tutela de urgência requisitos art. 300", "estabilização da tutela antecipada art. 304" e "tutela cautelar antecedente prazo de 30 dias" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não pedir tutela sem dizer o que, de concreto, acontece se esperar e quando.
- Não usar o 303 sem avisar que o aditamento em 15 dias é indispensável e que as custas iniciais seguem o valor da causa final.
- Não declarar o benefício do §5º (estabilização) por padrão, nem sem avisar que o pedido final pode ficar sem sentença.
- Não esquecer o prazo de 30 dias do pedido principal na cautelar antecedente, nem o valor da causa pelo pedido final na antecipada antecedente (303, §4º).
- Não misturar o regime da tutela antecedente com o do pedido incidental.
- Não dizer ao cliente que a tutela estabilizada é coisa julgada.

*Referências conferidas e revisadas depois do teste em 20/10/2026 (Planalto via proxy: CPC 295, 300 a 311 e 537, Lei 9.494, arts. 1º e 2º-B, Lei 8.437, art. 1º, CDC 22; Banco Nacional de Precedentes do CNJ; Migalhas de 05/08/2026 sobre a sessão da Corte Especial). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
