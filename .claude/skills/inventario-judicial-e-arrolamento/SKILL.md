---
name: inventario-judicial-e-arrolamento
description: Use quando o advogado pedir inventário judicial (abertura em juízo, petição de inventário e partilha, primeiras declarações, plano de partilha, sobrepartilha) ou arrolamento (sumário do 659, por valor do 664), e a causa for judicial porque há litígio, testamento sem autorização para escritura, incapaz fora das hipóteses da Res. CNJ 35 com a 571/2024, ou opção do escritório pelo juízo. Se o pedido não diz cartório ou juízo, rode antes o teste de cabimento da skill inventario-extrajudicial. Complementa peca-a-partir-da-ficha com a escolha do rito, o roteiro próprio do arrolamento do 664 e 665, os prazos do CPC 611 a 627, quem herda (inclusive por representação) e o ITCMD.
---

# Inventário judicial e arrolamento

Siga as regras de `peca-a-partir-da-ficha` (método da skill `advo-escritorio`, em `metodos/peca-a-partir-da-ficha.md`), inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-familia-e-sucessoes` (mesma pasta). Se a skill `advo-escritorio` não estiver instalada, avise e não redija. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio do inventário judicial.

## Antes do roteiro

- **Judicial ou cartório?** Cartório exige consenso, capazes e advogado (CPC 610, §§1º e 2º), mas a Res. CNJ 35/2007, nas redações da Res. 571/2024, admite também herdeiro incapaz e testamento em condições: skill `inventario-extrajudicial`. Judicial: litígio, testamento sem autorização para escritura, incapaz fora das hipóteses da Res. 35, ou opção do escritório. Registre na ficha o motivo de ser judicial; se a ficha não traz, pergunte.
- **Foro:** último domicílio do falecido (CPC 48); sem domicílio certo, situação dos bens imóveis (par. único).
- **Prazos:** instaurar em 2 meses da abertura da sucessão e concluir em 12 meses (CPC 611); prorrogáveis. Multa por atraso é de lei estadual [conferir]. O CC 1.796 fala em 30 dias e é anterior ao CPC: peça à ficha a data do óbito e deixe a contagem ao advogado.
- **Escolha do rito:** (a) **inventário** comum (CPC 610 e seguintes), com avaliação, citações e cálculo; (b) **arrolamento sumário** (CPC 659 a 663): partilha amigável entre capazes, qualquer valor, sem avaliação; (c) **arrolamento por valor** (CPC 664): bens até 1.000 salários-mínimos, mesmo com incapaz se todas as partes e o MP concordam (art. 665). O teto se afere pelo valor dos bens do espólio (art. 664, caput); o salário-mínimo de referência (óbito ou ajuizamento) varia por tribunal: confirme.
- **Ficha mínima:** certidão de óbito; herdeiros e meeiro, com certidões e regime de bens; união estável, se houver; **testamento** (consulta no CENSEC); bens (matrícula, extratos, veículos, quotas, previdência privada, dívidas); herdeiro incapaz ou nascituro; renúncias e cessões; bens fora do Brasil; quem será inventariante.

## Estrutura

1. Petição de abertura: óbito, último domicílio, herdeiros, bens a inventariar, indicação de inventariante pela ordem do CPC 617. O dever de requerer é de quem está na posse e administração do espólio (art. 615, caput), instruindo com a certidão de óbito (par. único); têm legitimidade concorrente cônjuge ou companheiro, herdeiro, legatário, testamenteiro, cessionário, credor, MP com incapaz e Fazenda (art. 616). Procuração com poderes especiais.
**Inventário comum** (itens 2 a 4):
2. Compromisso em 5 dias da intimação (CPC 617, par. único). **Primeiras declarações em 20 dias** do compromisso (art. 620): óbito, herdeiros, bens, dívidas, regime. Lista bem a bem, sem valor de cabeça.
3. Citação do cônjuge ou companheiro, herdeiros e legatários; intimação da Fazenda, do MP se houver incapaz ou ausente, do testamenteiro (art. 626). Vista de 15 dias sobre as primeiras declarações (art. 627).
4. Avaliação, últimas declarações, cálculo e imposto, plano de partilha (arts. 647 a 654), formal de partilha (art. 655).

**Arrolamento sumário** (659): petição conjunta com nomeação do inventariante, títulos dos herdeiros, bens e valores atribuídos (art. 660), sem avaliação (art. 661). Só entre capazes.

**Arrolamento por valor (664 e 665)**, roteiro próprio. Não imponha a ele os arts. 620, 626 e 627:
- Sem termo de compromisso: o inventariante nomeado apresenta, com as declarações, o valor atribuído aos bens e o plano de partilha (art. 664, caput). Sem valor ou plano na ficha, `[DEFINIR]`.
- Impugnada a estimativa (parte ou MP), o juiz nomeia avaliador (laudo em 10 dias) e delibera em audiência (§§1º e 2º); termo único (§3º).
- Com incapaz: concordância de todas as partes e do MP (art. 665). Peça a intimação do MP e um plano que ele possa aceitar.
- Tributos: o juiz só julga a partilha com a prova de quitação dos tributos dos bens e das rendas do espólio (§5º); taxa judiciária e imposto de transmissão: o §4º remete literalmente ao art. 672 (cumulação de inventários), remissão defeituosa do texto legal; a regra aplicável é a do art. 662 (taxa pelo valor atribuído pelos herdeiros, imposto lançado administrativamente).
- Testamento: o texto do 664 não o veda; registro e cumprimento (CPC 735 a 737) antes ou junto. A aceitação do arrolamento com testamento varia por juízo: busque no tribunal e leve ao advogado.

## Teses e pedidos que costumam caber

- **Quem herda:** companheiro herda como cônjuge (CC 1.829; STF, Tema 809). Cônjuge concorre com descendentes, exceto em comunhão universal, separação obrigatória e comunhão parcial sem bens particulares (CC 1.829, I). Direito real de habitação do cônjuge (CC 1.831) e do companheiro (Lei 9.278/1996, art. 7º, par. único). Meação sai antes da herança.
- **Arrolamento e imposto:** a homologação da partilha não depende do ITCMD pago antes, mas o espólio prova os tributos sobre seus bens e rendas (STJ, Tema 1074); o fisco lança o imposto depois (CPC 659, §2º; 662, §2º).
- **ITCMD é estadual:** alíquota, prazo e multa pela lei do estado, sempre [conferir lei do estado]. Normas gerais da LC 227/2026 (em vigor desde a publicação, 13/01/2026, art. 182; a cobrança depende da lei do estado e da anterioridade): base de cálculo é o valor de mercado, com dedução de dívidas do falecido conforme a lei do ente (art. 152); alíquota da abertura da sucessão (Súmula 112 do STF; art. 156, §1º, I), progressiva por quinhão e por faixas (EC 132/2023; art. 156, §2º); contribuinte é o sucessor (art. 157); imóvel no exterior e bens móveis, arts. 158 e 159. Isenção não se discute no arrolamento sumário (STJ, Tema 391). VGBL e PGBL: sem ITCMD no repasse ao beneficiário (STF, Tema 1214); se entram na partilha é ponto de jurisprudência: busque.
- **Testamento:** o herdeiro necessário tem a legítima (CC 1.846).
- **Representação (neto):** se o filho morreu antes do autor da herança, os filhos dele herdam por estirpe o que o pai herdaria (CC 1.851, 1.852 e 1.854), em partes iguais (art. 1.855). Peça a certidão de óbito do pré-morto e liste os herdeiros por estirpe.
- **Herdeiro incapaz:** MP intervém. Pergunte quem o representa (pais, tutor, curador); representante coerdeiro é conflito, com curador especial (CPC 72, I; CC 1.692): leve ao advogado.
- **Reserva do CPC 650 é só do nascituro.** Neto vivo, mesmo menor, não entra em reserva: é herdeiro por representação, com quinhão próprio, sob MP.
- **Renúncia:** por instrumento público ou termo judicial (CC 1.806). **Cessão de direitos:** escritura pública (CC 1.793); cessão de bem singular é ineficaz sem autorização do juiz (§3º). Venda de bem do espólio antes da partilha exige autorização (CPC 619).
- **Sobrepartilha:** bens sonegados ou descobertos depois (CPC 669 e 670). Sonegação só se alega após a descrição dos bens (CPC 621).
- **Alvará de pequeno valor:** Lei 6.858/1980 dispensa inventário (CPC 666).

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` nos temas "direito real de habitação do companheiro", "colação e doação em vida" e "inventário com herdeiro incapaz" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o tribunal da causa: `buscar_tjsp`, `buscar_jurisprudencia` pro STJ). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. Temas 391 e 1074 do STJ, Tema 1214 e Súmula 112 do STF podem entrar pelo número.

## Não fazer

- Não aplicar o CC 1.790 (STF, Tema 809).
- Não calcular quinhão, meação nem ITCMD: liste o que entra.
- Não mandar o inventário ao juizado especial (Lei 9.099, art. 3º, §2º).
- Não usar arrolamento sumário com herdeiro incapaz: nesse caso, art. 665 e anuência do MP.
- Não omitir bem, dívida ou testamento da lista: o herdeiro que sonega perde o direito sobre o bem (CC 1.992), o inventariante sonegador é removido (CC 1.993) e a pena se impõe em ação própria (CC 1.994).

*Referências conferidas em 20/10/2026 (Planalto, Câmara dos Deputados, STJ, BNP/CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
