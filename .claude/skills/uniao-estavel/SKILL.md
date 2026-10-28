---
name: uniao-estavel
description: Use quando o advogado pedir ação de reconhecimento de união estável, reconhecimento e dissolução, união estável post mortem, "reconhecer a união pra entrar no inventário", partilha de bens da união ou escritura de união. Complementa peca-a-partir-da-ficha com os requisitos do CC 1.723, as datas que decidem a partilha, o regime, a união paralela e o caminho post mortem.
---

# União estável

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em `metodos/peca-a-partir-da-ficha.md`), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-familia-e-sucessoes` (mesma pasta). Se a skill `advo-escritorio` não estiver instalada, avise e não redija. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da união estável.

## Antes do roteiro

- **Vivo ou falecido?** Vivo: ação de reconhecimento e dissolução (ou só uma), contra o ex-companheiro. Post mortem: contra todos os herdeiros e, se houver inventário, o espólio (o inventariante o representa, CPC 618). Pergunte se há inventário aberto: o pedido de habilitação segue junto.
- **Foro:** CPC 53, I, as mesmas alíneas do divórcio; post mortem, pesa o foro do inventário (CPC 48). Segredo de justiça (CPC 189, II).
- **Datas:** início e fim da convivência decidem a partilha. Peça à ficha o primeiro endereço comum, a data da separação e as aquisições de cada bem.
- **Regime:** sem contrato escrito, comunhão parcial (CC 1.725). Há contrato, escritura ou pacto? Septuagenário: separação obrigatória pode ser afastada por escritura (STF, Tema 1236) e, quando mantida, comunicam-se os bens do esforço comum (Súmula 655 do STJ).
- **Impedimentos:** casado só constitui união se separado de fato ou judicialmente (CC 1.723, §1º). União paralela a casamento ou a outra união não se reconhece (STF, Tema 529): pergunte antes se o autor era casado.
- **Prova:** o ônus é de quem alega convivência pública, contínua e duradoura com objetivo de constituir família (CC 1.723). Peça: comprovantes de endereço, conta conjunta, dependência em plano de saúde e no IR, contrato de aluguel, filhos, fotos e viagens, convites, mensagens, testemunhas. Documento citado e não lido vira `[JUNTAR: ...]`.

## Estrutura

1. Qualificação; foro e segredo; legitimidade (post mortem: herdeiros no polo passivo).
2. Fatos em linha do tempo: conhecimento, convivência, objetivo de família, bens, filhos, fim.
3. Direito: CC 1.723 a 1.725; a união entre pessoas do mesmo sexo se reconhece igual (CC 1.723, com a interpretação conforme dada pelo STF em 2011; Res. CNJ 175/2013; Código Nacional de Normas, art. 537, caput).
4. Pedidos: reconhecer a união no período X a Y; dissolver; regime; partilha dos bens adquiridos onerosamente no período ou reserva; guarda e alimentos (skills `guarda-e-convivencia`, `alimentos`); alimentos ao companheiro, se couber (CC 1.694); registro no Livro E (Lei 6.015, art. 94-A; CNN, art. 539); provas; valor da causa.

## Teses e pedidos que costumam caber

- **Post mortem, efeito sucessório:** o companheiro herda como o cônjuge (CC 1.829; STF, Tema 809), além da meação. Peça a habilitação no inventário. O direito real de habitação do companheiro sobre o imóvel da residência da família tem lei própria e vigente: Lei 9.278/1996, art. 7º, par. único (enquanto viver ou não constituir nova união ou casamento); o CC 1.831 é a regra do cônjuge. Para o alcance (único imóvel residencial, concorrência com herdeiros), busque: `[INSERIR JULGADO: habitação do companheiro, conferir]`.
- **Caminho sem processo:** vivos, escritura pública de reconhecimento ou termo declaratório perante o oficial (CNN, arts. 537, §3º, e 538). Falecido, no inventário em cartório, a união vale se os demais herdeiros a reconhecem, ou se o companheiro é o único sucessor e já a tem declarada em juízo, escritura ou termo registrado (Res. CNJ 35/2007, art. 18, na redação da Res. 571/2024).
- **Dissolução em cartório** com filho incapaz: só com guarda, convivência e alimentos já resolvidos em juízo (CNN, art. 537, §6º; skill `divorcio-e-dissolucao-consensual`).
- **Pensão por morte do INSS** é outro foro e rito, fora desta peça: avise o advogado.
- **Prescrição** do pedido de partilha e do reconhecimento post mortem: não afirme prazo, leve ao advogado.

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "reconhecimento de união estável post mortem", "marco inicial e final da união" e "direito real de habitação do companheiro" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Temas 529, 809 e 1236 do STF e Súmula 655 do STJ podem entrar pelo número.

## Não fazer

- Não aplicar o CC 1.790: o STF o afastou (Tema 809).
- Não confundir com concubinato (CC 1.727) nem tratar união paralela como regra.
- Não afirmar data de início sem prova na ficha: marque `[DEFINIR: início da convivência]`.
- Não calcular meação nem quinhão.
- Não dizer que a união se prova só por testemunha: junte documento.

*Referências conferidas em 20/10/2026 (Câmara dos Deputados, Planalto, STJ, CNJ, BNP/CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
