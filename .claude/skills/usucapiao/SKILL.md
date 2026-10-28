---
name: usucapiao
description: Use quando o advogado pedir usucapião, ação de usucapião, usucapião extrajudicial no cartório, ata notarial de posse, "regularizar imóvel que o cliente mora há anos", escolher a modalidade (extraordinária, ordinária, especial urbana, rural, familiar, coletiva) ou decidir entre a via judicial e o registro de imóveis. Complementa peca-a-partir-da-ficha com os requisitos de cada modalidade (CC 1.238 a 1.244, CF 183, Estatuto da Cidade), a via extrajudicial da Lei 6.015, art. 216-A, e do Provimento CNJ 149/2023, e a regra de citação do CPC 246, §3º.
---

# Usucapião (judicial e extrajudicial)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. O plano tem até 5 perguntas, priorizadas (data de início da posse, natureza e tamanho do imóvel, título e boa-fé, titular registral e confrontantes, oposição ou ação pendente). Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Esta skill acrescenta a escolha da modalidade e da via. Inicial judicial segue o plano em cinco blocos. O requerimento ao cartório não é peça processual: plano de uma tela, até 5 perguntas, sem Eixo nem Jurisprudência quando não houver tese. Se a triagem barrar o caso (bem público, prazo não completado), pare e responda a consulta, sem plano.

## Antes do roteiro

- **Modalidade (diga qual e por quê):**
  - extraordinária (CC 1.238): 15 anos, sem título nem boa-fé; **10 anos** se há moradia habitual ou obras ou serviços produtivos;
  - ordinária (CC 1.242): 10 anos com justo título e boa-fé; **5 anos** se o imóvel foi adquirido onerosamente com registro depois cancelado e há moradia ou investimento de interesse social e econômico;
  - especial urbana (CF 183; CC 1.240): até 250 m², 5 anos, moradia, sem outro imóvel urbano ou rural, uma vez só;
  - especial rural (CC 1.239): até 50 ha, 5 anos, produtiva pelo trabalho próprio ou da família, com moradia, sem outro imóvel;
  - familiar (CC 1.240-A): 2 anos, até 250 m², posse direta e exclusiva, imóvel dividido com ex-cônjuge ou ex-companheiro que abandonou o lar, sem outro imóvel;
  - coletiva (Estatuto da Cidade, art. 10): núcleo informal com mais de 5 anos, área total dividida pelos possuidores abaixo de 250 m² cada, sem outro imóvel.
  Se o imóvel cabe em mais de uma, apresente a que exige menos prova e a alternativa subsidiária.
- **Soma de posses:** CC 1.243 permite somar as dos antecessores se contínuas e pacíficas; na ordinária, também com justo título e boa-fé. Causas que suspendem ou interrompem a prescrição valem para a usucapião (CC 1.244).
- **Bem público não se usucapia** (CF 183, §3º; Súmula 340 do STF). Pergunte quem é o titular na matrícula ou se há dúvida sobre a natureza do terreno.
- **Possessória pendente entre as partes (CPC 557):** na pendência de ação possessória é vedado ao autor e ao réu propor ação de reconhecimento do domínio, salvo contra terceira pessoa. A usucapião reconhece domínio, então a cautela é real; se o 557 alcança a usucapião contra quem move a possessória é `[conferir jurisprudência]`. Caminho seguro: alegar a usucapião na defesa da possessória (Súmula 237 do STF) e avaliar a ação autônoma contra os demais e quanto ao que a possessória não alcança. Pergunte qual é o objeto da possessória (faixa ou lote inteiro) e quem são as partes.
- **Perguntas à ficha:** data de início da posse e prova (contas, IPTU, fotos datadas, testemunhas); como a posse começou (recibo, cessão, ocupação); tamanho; se há matrícula, de quem e com quais ônus; confrontantes (vivos? herdeiros?); o cliente tem outro imóvel; **houve oposição, quando e de que tipo, e se ocorreu antes ou depois de completado o prazo** `[conferir se oposição tardia afasta]`.
- **Conta sugerida do prazo (a conferir):** termo inicial na data da posse mansa e animus domini (o CC 1.244 só manda aplicar à usucapião as causas que suspendem ou interrompem a prescrição); resultado provável "completo" ou "falta X". A skill não crava a data em que o prazo se completou. Se a ficha mostra que o prazo pode não ter completado, abra o resumo com ALERTA. **Régua do ALERTA (a mesma em todas as skills):** (a) prazo processual ou contratual que vence em 5 dias úteis ou menos (emenda, resposta a exigência do cartório); (b) decadência ou prescrição que se consuma em 60 dias ou menos, ou cuja janela já abriu; (c) prazo que já venceu: liste no topo como VENCIDO, com o efeito. Vencimento em dia não útil: prorrogação legal que couber `[conferir]` e o dia útil anterior para planejar. ALERTA e conta na primeira mensagem, antes das perguntas, e o plano ganha a linha "Prazo".

## Escolha da via

- **Extrajudicial** (Lei 6.015, art. 216-A; Provimento CNJ 149/2023, Código Nacional de Normas, arts. 398 a 423): advogado obrigatório, pedido ao registro de imóveis da comarca, sem impugnação. Documentos: ata notarial do tempo de posse (I), planta e memorial com ART ou RRT, assinados pelos titulares e confrontantes (II), certidões negativas dos distribuidores (III), justo título ou documentos da posse (IV). Silêncio de titular e confrontante notificados vale como concordância em **15 dias** (§2º); entes públicos têm 15 dias e terceiros são cientificados por edital (§§3º e 4º). Unidade de condomínio edilício: basta notificar o síndico (§§11 e 12). Documentos faltando: justificação administrativa (§15). Em imóvel rural, o CNN exige CAR, CCIR e certificação do Incra (art. 416).
- **Judicial** quando: há **impugnação justificada** ou ação pendente sobre o imóvel (a certidão positiva trava o cartório); reserva da União, Estado ou Município; a rejeição no cartório não impede a ação (§9º). Titular ou confrontante **não encontrado** não trava a via do cartório: o registrador certifica e notifica por edital, duas publicações de 15 dias, e o silêncio vale como concordância (§13). Impugnação **justificada** manda os autos ao juízo da situação do imóvel, com emenda da inicial para o procedimento comum; impugnação **injustificada** não é admitida pelo registrador, e quem a fez pode suscitar dúvida (art. 198) (§10, redação da Lei 14.382/2022).
- Processo judicial em curso: o CNN admite suspendê-lo por 30 dias ou desistir dele para tentar o cartório, aproveitando as provas judiciais (art. 399, §§2º e 3º); o registro da usucapião não exige ITBI, por ser aquisição originária (art. 421). Texto lido em reprodução atualizada até o Provimento 218/2026 `[conferir no portal do CNJ]`.

## Estrutura da inicial judicial

1. Foro da situação do imóvel (CPC 47: ação fundada em direito real sobre imóvel; o §1º não permite optar pelo domicílio do réu quando o litígio é sobre propriedade); qualificação; modalidade e prazo.
2. Fatos da posse com datas; justo título e boa-fé, se for o caso; acessão (1.243).
3. Planta e memorial descritivo, matrícula ou certidão negativa de registro, certidões.
4. Citações: **confrontantes pessoalmente**, salvo unidade autônoma de condomínio (CPC 246, §3º); **edital** (CPC 259, I); titular registral. Fazendas e Ministério Público: `[conferir intimação]`.
5. Pedido: declaração de domínio, sentença como título para registro (CC 1.241, parágrafo único), mandado ao registro. Usucapião também se alega em defesa (Súmula 237 do STF; Estatuto, art. 13).

## Teses que costumam caber

- Módulo mínimo urbano ou lei local não impede a usucapião especial urbana (STF Tema 815) nem a extraordinária (STJ Tema 985); Tema 1025 do STJ cobre o Setor Tradicional de Planaltina/DF.
- A União no processo não afasta o foro da situação do imóvel (Súmula 11 do STJ).
- Citação pessoal do possuidor e do confinante certo (Súmulas 263 e 391 do STF, em convivência com o CPC 246, §3º).

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "usucapião extraordinária", "usucapião especial urbana" e "usucapião extrajudicial impugnação" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 11 do STJ e 237, 263, 340 e 391 do STF, Temas 985 e 1025 do STJ e 815 do STF podem entrar pelo número.

## Não fazer

- Não prometer o registro: o oficial decide, e a nota de exigência é frequente.
- Não pedir usucapião de bem público nem somar posse sem a cadeia comprovada.
- Não ajuizar a via do cartório sem advogado nem com certidão positiva de ação sobre o imóvel.
- Não escrever "posse há 15 anos" sem data e prova. Não cravar a data em que o prazo se completou.
- Não tratar a reforma do Código Civil (PL 4/2025) como lei.

*Referências conferidas em 21/10/2026 (CC na Câmara dos Deputados; Lei 6.015, art. 216-A, caput e §§2º, 9º, 10, 13 e 15, no Planalto via proxy; CPC 47, 246, 259 e 557 na Câmara e no Planalto via proxy; Provimento CNJ 149/2023, arts. 399, 401, 403, 404, 410, 416, 421 e 423, lidos em reprodução atualizada até o Provimento 218/2026, portal do CNJ com acesso negado: [conferir] em atos.cnj.jus.br; Banco Nacional de Precedentes do CNJ, coleta de 19/10/2026). Revisão de lei em 21/10/2026: §13 (não encontrado vai por edital) e §10 (impugnação justificada × injustificada). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
