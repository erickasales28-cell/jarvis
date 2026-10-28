---
name: acao-de-despejo
description: Use quando o advogado pedir ação de despejo, despejo por falta de pagamento, despejo cumulado com cobrança de aluguéis, retomada do imóvel, denúncia vazia, fim do prazo da locação, "pedir liminar de desocupação" ou retomada para uso próprio, pelo lado do locador. Complementa peca-a-partir-da-ficha com a escolha da hipótese legal (Lei 8.245, arts. 9º, 46, 47 e 57), o teste da liminar do art. 59, §1º (com a caução) e a cumulação com cobrança do art. 62.
---

# Ação de despejo (lado do locador)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. O plano tem até 5 perguntas, priorizadas (hipótese do despejo, garantia vigente, débito mês a mês, quem ocupa, purga anterior). Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-civel-consumidor-e-imobiliario` (mesma pasta). Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do despejo, do lado de quem pede. A defesa do locatário e a purga da mora são da skill `contestacao-de-despejo-e-purga-da-mora`.

## Antes do roteiro

- **Qual é a hipótese?** Sem ela não há peça. A ação de despejo é o único caminho para retomar (art. 5º), e o fundamento define prova e liminar:
  - falta de pagamento (art. 9º, III; art. 62);
  - infração contratual ou legal (art. 9º, II);
  - mútuo acordo descumprido (art. 9º, I);
  - reparos urgentes determinados pelo Poder Público (art. 9º, IV): exige prova da propriedade ou do compromisso registrado (art. 60);
  - contrato escrito de **30 meses ou mais** que acabou: resolve-se sem notificação (art. 46); se o locatário ficou mais de 30 dias sem oposição, prorrogou-se por prazo indeterminado e a denúncia dá 30 dias (art. 46, §§1º e 2º);
  - contrato **abaixo de 30 meses**: prorroga-se sozinho e só se retoma nas hipóteses do art. 47: fim do contrato de trabalho, uso próprio ou de ascendente/descendente sem imóvel, demolição ou obra que aumente a área em 20% (50% para hotel ou pensão), ou locação ininterrupta acima de 5 anos. Uso próprio e obra exigem do retomante prova de propriedade ou promessa irrevogável com imissão na posse e título registrado na matrícula (§2º); em certos casos a necessidade é provada em juízo (§1º);
  - não residencial: prazo determinado cessa no fim (art. 56); prazo indeterminado, denúncia por escrito com 30 dias (art. 57).
- **Imóvel vendido?** O adquirente denuncia em 90 dias do registro, com 90 dias para desocupar, salvo contrato por prazo determinado com cláusula de vigência averbada na matrícula (art. 8º).
- **Perguntas à ficha:** data e prazo do contrato e aditamentos; aluguéis e encargos em aberto, mês a mês; **qual garantia do art. 37 existe hoje** (fiador, caução, seguro-fiança, cotas de fundo) ou se foi exonerada. Salvo disposição contratual em contrário, a garantia se estende até a efetiva devolução do imóvel, ainda que a locação se prorrogue por prazo indeterminado (art. 39): contrato prorrogado sem prazo não extingue a fiança por si só, e é isso que decide a liminar do inciso IX. Pergunte se o contrato afasta o art. 39, se houve aditamento sem anuência do fiador (Súmula 214) ou **pedido de exoneração**: na locação prorrogada sem prazo, o fiador notifica o locador e segue obrigado por 120 dias (Lei 8.245, art. 40, X, regra especial; o CC 835 fala em 60 dias e é o que a Súmula 656 cita), e o inciso IX do art. 59, §1º, alcança a garantia extinta ou com exoneração pedida, "independentemente de motivo"; quem ocupa (sublocatário?); se o locador é o proprietário (matrícula); notificações enviadas; se o locatário já purgou a mora em ação anterior.

## Prazo e prescrição (conta sugerida, a conferir)

Mostre a conta, nunca a data como certa. **Régua do ALERTA (a mesma em todas as skills):** (a) prazo processual ou contratual que vence em 5 dias úteis ou menos; (b) decadência ou prescrição que se consuma em 60 dias ou menos, ou cuja janela já abriu; (c) prazo que já venceu: liste no topo como VENCIDO, com o efeito. Vencimento em sábado, domingo ou feriado: mostre a prorrogação legal que couber `[conferir]` e, para planejar, o dia útil anterior. O ALERTA e a conta vão na primeira mensagem, antes das perguntas, e o plano ganha a linha "Prazo".
- **Cobrança de aluguéis cumulada:** 3 anos (CC 206, §3º, I), do vencimento de cada aluguel até o ajuizamento, em dias corridos. Sugira ao advogado separar as parcelas que passam disso. Resultado provável: as mais antigas podem estar prescritas (VENCIDO no topo); ALERTA também para a parcela que prescreve em 60 dias ou menos.
- **Liminar dos incisos III e VIII do §1º:** ação em até 30 dias do termo (corridos, a conferir); passou disso, sem liminar.
- **Retomada do imóvel vendido:** 90 dias do registro (art. 8º, §2º); passado, presume-se aceita a locação.
- **Denúncia:** o prazo de 30 dias para desocupar corre da notificação ou da sentença, não da inicial.

## Estrutura

1. Foro da situação do imóvel, salvo eleição no contrato; valor da causa de 12 meses de aluguel, ou de três salários vigentes no ajuizamento se a retomada é do art. 47, II (art. 58, II e III). A skill não calcula.
2. Contrato, hipótese do art. 9º, 46, 47 ou 57 e prova do requisito (propriedade no art. 60, notificação, vencimento do prazo).
3. **Falta de pagamento (art. 62):** o despejo pode cumular com a cobrança. Locatário citado para a rescisão; **locatário e fiadores citados para a cobrança**; a inicial traz o **cálculo discriminado** (art. 62, I). Colunas: competência, vencimento, valor do aluguel, encargos, índice, juros, multa. Depois do pedido de cobrança, peça que os aluguéis vencidos até a sentença sejam depositados nas datas (art. 62, V) e que a execução da cobrança possa começar antes da desocupação (art. 62, VI).
4. **Liminar (art. 59, §1º):** sem ouvir o réu, desocupação em 15 dias, com **caução de 3 aluguéis**. Só cabe nas hipóteses do rol: acordo escrito com duas testemunhas e prazo mínimo de 6 meses (I); fim do contrato de trabalho com prova escrita (II); temporada, ação em até 30 dias do fim (III); morte do locatário sem sucessor, com ocupantes sem direito (IV); sublocatário que ficou (V); reparos urgentes do Poder Público (VI); prazo do art. 40, parágrafo único, vencido sem nova garantia (VII); não residencial, ação em até 30 dias do termo ou da notificação (VIII); **falta de pagamento sem nenhuma garantia do art. 37** (IX). Denúncia vazia comum (art. 47, V) **não** tem liminar. No inciso IX o locatário afasta a liminar depositando o total devido em 15 dias (§3º, com o art. 62, II). Pergunte se a caução pode ser prestada.
5. Sublocatários cientificados e assistentes (art. 59, §2º); citação por correio se o contrato autorizar (art. 58, IV).
6. Pedidos: citação; rescisão e despejo; cobrança com fiadores; liminar, se couber; custas e honorários. Desocupação voluntária em 30 dias, ou 15 se a ação passou de 4 meses entre a citação e a sentença ou se funda no art. 9º ou no art. 46, §2º (art. 63 e §1º). Execução provisória exige caução de 6 a 12 aluguéis, salvo ação do art. 9º (art. 64).

## Teses que costumam caber

- Fiador que não foi parte na ação de despejo não responde pela execução (Súmula 268 do STJ): cite-o já na inicial.
- Fiador não responde por aditamento a que não anuiu (Súmula 214); prorrogação automática da fiança é válida e a saída do fiador exige notificação (Súmula 656, que cita o CC 835; na locação, o art. 40, X, mantém o fiador obrigado por 120 dias).
- Penhora do bem de família do fiador de locação, residencial ou comercial: Súmula 549 do STJ, Tema 1091 do STJ, Tema 1127 do STF.
- Renúncia a indenização por benfeitorias e retenção é válida (Súmula 335).
- Prescrição dos aluguéis cobrados: 3 anos (CC 206, §3º, I).
- Ações de locação correm nas férias forenses (art. 58, I); a apelação tem efeito só devolutivo (art. 58, V).

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "despejo liminar art. 59 caução", "despejo por falta de pagamento cumulado com cobrança" e "denúncia vazia locação prazo inferior a 30 meses" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Súmulas 214, 268, 335, 549 e 656 e Temas 1091 do STJ e 1127 do STF podem entrar pelo número.

## Não fazer

- Não pedir liminar por falta de pagamento (inciso IX) quando há fiador, caução ou seguro-fiança vigente. Sem liminar, a ação segue pelo procedimento comum.
- Não cumular cobrança sem cálculo discriminado, nem esquecer de citar o fiador.
- Não pedir liminar em denúncia vazia (art. 46, §2º; art. 47, V) nem em retomada para uso próprio ou obra (art. 47, III e IV). O art. 47, I, remete ao art. 9º, e o 47, II, tem liminar própria (art. 59, §1º, II): não os trate como "sem liminar".
- Não calcular aluguel, multa, caução nem valor da causa. Prazo: só conta sugerida, nunca data certa.
- Não tratar a audiência do CPC 334 como certa ou dispensada: `[conferir a prática do juízo]`.

*Referências conferidas em 21/10/2026 (Lei 8.245 no Planalto via proxy, arts. 8º, 9º, 37 a 40, 46, 47, 58, 59, 62 a 64, sem lei alteradora posterior à Lei 12.744/2012; CC 835 na Câmara dos Deputados; Banco Nacional de Precedentes do CNJ, coleta de 19/10/2026). Revisão de lei em 21/10/2026: art. 40, X (120 dias do fiador), art. 47, I e II (têm liminar pelo art. 59, §1º), art. 58, III (três salários no 47, II). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
