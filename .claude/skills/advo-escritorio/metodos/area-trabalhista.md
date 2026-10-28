# area-trabalhista

Quando usar: Use quando o perfil do escritório disser que ele atua em direito do trabalho e a tarefa for ficha, peça, prazo, pesquisa, risco, checklist de documentos ou audiência dessa área. É o módulo da área: rito, prazos, peças, teses, fontes e armadilhas que as outras skills do Advoclaude leem antes de trabalhar.

# Área trabalhista

Vale pro lado do reclamante e pro da reclamada. `[conferir]` e `[buscar]` marcam o que ninguém confirmou: quem confere na fonte é o advogado. Com o pacote Trabalhista do Pro instalado, a skill da peça (`reclamacao-trabalhista`, `contestacao-trabalhista`, `rescisao-indireta`, `acordo-extrajudicial`, `embargos-de-declaracao-trabalhista`, `recurso-ordinario`, `contrarrazoes-ao-recurso-ordinario`, `impugnacao-de-calculos-e-embargos-a-execucao`, `agravo-de-peticao`, `roteiro-de-audiencia-trabalhista`) aprofunda e prevalece onde divergir; no trabalhista o roteiro de audiência vale no lugar do método genérico.

## 1. Onde a área corre

- **Justiça do Trabalho, no PJe-JT:** Vara do Trabalho → TRT da região → TST. STF só com matéria constitucional.
- **Foro:** onde o empregado presta serviço, mesmo contratado em outro lugar (CLT art. 651).
- **Rito, pelo valor da causa no ajuizamento:**
  - Alçada: até 2 salários mínimos, sem recurso salvo matéria constitucional (Lei 5.584/1970, art. 2º, §§3º e 4º).
  - Sumaríssimo: até 40 salários mínimos (art. 852-A), nunca contra administração direta, autarquia ou fundação. Pedido líquido, sem citação por edital (art. 852-B), até 2 testemunhas (art. 852-H, §2º), revista restrita (art. 896, §9º).
  - Ordinário: acima disso ou contra ente público. Até 3 testemunhas (art. 821). Pedido também com valor (art. 840, §1º).
- **Pejotização:** STF, Tema 1389, afetado e sem tese (BNP/CNJ, 15/10/2026). A suspensão nacional de abril/2025 teria sido anulada em 18/06/2026, e os processos voltam a tramitar até o 2º grau (só fonte secundária): `[conferir andamento]`. Alerta de vínculo: CLT arts. 2º, 3º e 9º.

## 2. Prazos que mais aparecem

Dias úteis, sem o dia do começo e com o do vencimento (CLT art. 775). Suspensão de 20/12 a 20/1 (art. 775-A). Sentença proferida em audiência intima ali mesmo (art. 852; o módulo antigo citava o 834, não aberto: `[conferir]`): o prazo não espera o DJEN.

| Ato | Prazo | Base | Contagem | Observação |
|---|---|---|---|---|
| Defesa e reconvenção | até a audiência | art. 847, par. único | não é prazo em dias | o juízo pode fixar outro |
| Exceção de incompetência territorial | 5 dias da notificação | art. 800 | úteis | antes da audiência |
| Recurso ordinário e contrarrazões | 8 dias | art. 895, I; art. 900; Lei 5.584/1970, art. 6º | úteis | custas e depósito no prazo (art. 789, §1º) |
| Revista, agravo de instrumento, agravo de petição | 8 dias | arts. 896 e 897; Lei 5.584, art. 6º | úteis | |
| Embargos de declaração | 5 dias; vista de 5 dias se houver efeito modificativo | art. 897-A | úteis | interrompem os outros recursos, salvo se intempestivos ou sem representação (§3º): mostre a conta do recurso seguinte junto |
| Impugnação à conta | 8 dias, comum | art. 879, §2º | úteis | quem cala, preclui |
| Embargos à execução | 5 dias da garantia | art. 884 | úteis | ente público: [conferir prazo e artigo] |
| Prescrição | 5 anos, até 2 do fim do contrato | art. 11 | corridos | intercorrente: 2 anos (art. 11-A) |

Sem o dobro do CPC art. 229 [buscar: OJ da SDI-1 sobre o art. 229]. Ente público (DL 779/1969, art. 1º): recurso em dobro, sem depósito recursal, custas ao final e remessa de ofício; prazo dos embargos à execução do ente e das contrarrazões contra ele (Lei 9.494/1997): `[conferir]`.

## 3. Peças e estrutura

1. **Reclamação:** juízo, qualificação, breve exposição dos fatos, pedido certo, determinado e com valor, data, assinatura (art. 840, §1º); sem valor, o pedido é extinto (§3º). Mais: rito, valor da causa, gratuidade, honorários (art. 791-A).
2. **Contestação:** preliminares, prescrição, impugnação pedido a pedido, fato impeditivo, modificativo ou extintivo (art. 818, II), incontroversa (art. 467), documentos.
3. **Exceção de incompetência territorial:** peça própria, anunciada como exceção, com o foro certo (art. 800).
4. **Embargos de declaração:** omissão, contradição ou manifesto equívoco em pressuposto extrínseco (art. 897-A); também prequestionam.
5. **Recurso ordinário:** tempestividade, preparo (custas e depósito, art. 899), ataque a cada fundamento da sentença.
6. **Recurso de revista:** hipótese do art. 896; trecho do acórdão que prequestiona, contrariedade explícita, ataque a todos os fundamentos (§1º-A); transcendência (art. 896-A); sem reexame de fato [buscar: súmula do TST sobre reexame de prova].
7. **Agravo de instrumento:** ataca cada fundamento do despacho denegatório; depósito de 50% do recurso trancado (art. 899, §7º).
8. **Execução:** impugnação à conta (art. 879, §2º, preclusão), embargos (art. 884), garantia (art. 882), agravo de petição com matérias e valores delimitados (art. 897, a, e §1º); desconsideração da personalidade pelo IDPJ (art. 855-A); revista em execução só por violação da CF (art. 896, §2º).
9. **Acordo extrajudicial:** petição conjunta, um advogado por parte (art. 855-B); não afasta a multa do art. 477 (855-C); suspende a prescrição (855-E).

## 4. Teses, pedidos e provas

- **Rescisórias:** 10 dias do fim do contrato (art. 477, §6º), multa do §8º, 50% sobre a incontroversa não paga na audiência (art. 467). Decidem TRCT, comprovante e extrato do FGTS.
- **Justa causa e rescisão indireta:** arts. 482 e 483. A empresa prova falta, gravidade e imediatidade [buscar: súmula do TST sobre ônus da prova da dispensa].
- **Horas extras:** art. 59; ponto obrigatório acima de 20 trabalhadores (art. 74, §2º). Súmula 338 do TST: ponto não juntado sem justificativa presume a jornada da inicial (I); horário uniforme inverte o ônus (III). Decidem cartões e testemunha.
- **Intervalo:** só o tempo suprimido, mais 50%, indenizatório (art. 71, §4º), pros fatos desde 11/11/2017 [buscar: Tema 23 do TST (IRR), reforma nos contratos em curso].
- **Insalubridade e periculosidade:** perícia obrigatória (art. 195, §2º). Insalubridade 10, 20 ou 40% (art. 192) [conferir base: Súmula Vinculante 4]; periculosidade 30% do salário-base (art. 193, §1º). Decidem laudo, PPP e ficha de EPI.
- **Dano extrapatrimonial:** arts. 223-A a 223-G, faixas por salário no §1º [conferir: STF leu a tarifa como parâmetro, não teto]. Decidem testemunha, mensagem, CAT.
- **Vínculo:** arts. 2º e 3º. Decidem ordens, horário, pessoalidade, pagamento fixo. Aplicativo: [buscar: tema do STF sobre trabalho por plataforma].
- **Estabilidades:** gestante (ADCT art. 10, II, b) e acidentária (Lei 8.213/1991, art. 118) [buscar: súmulas do TST].
- **Norma coletiva:** arts. 611-A e 611-B [conferir: STF, Tema 1046].
- **Gratuidade: a data do ajuizamento decide.** O STF concluiu a ADC 80 em 03/09/2026 (fontes secundárias; acórdão e tese `[conferir]`): presunção relativa de hipossuficiência até R$ 5.000,00, prova acima disso, Súmula 463, I, do TST inconstitucional. O Tema 21 do TST (IRR: até 40% do teto do RGPS, concede de ofício; acima, declaração, contestável com prova) consta vigente no BNP/CNJ (17/07/2026) e rege a ação ajuizada **antes** de 16/09/2026 (ata do julgamento). Se a ADC 80 só alcança ações posteriores à ata, o acórdão não foi aberto: `[conferir no acórdão]`. Pergunte sempre a data do ajuizamento. Art. 790, §§3º e 4º, carrega a nota "Vide ADC 80". Pessoa jurídica: Súmula 463, II.
- **Honorários:** 5 a 15% (art. 791-A, só em ações ajuizadas depois de 11/11/2017, IN 41/2018). A ADI 5766 (STF, 20/10/2021) declarou inconstitucionais o 790-B (caput, em parte, e §4º) e o 791-A, §4º, e manteve o art. 844, §2º (custas do ausente); alcance exato sobre o 791-A, §4º: `[conferir]`. Sucumbência recíproca só se o pedido for totalmente improcedente (tese vinculante do TST; número do tema `[conferir]`). A Súmula 219 foi cancelada (Res. 225/2025).
- **Correção e juros:** ADC 58 do STF e Lei 14.905/2024. A SBDI-1 do TST (out/2024) aplica IPCA mais taxa legal (CC 406, §1º) a partir de 30/08/2024; antes, IPCA-E mais TRD e, após a citação, Selic. Fonte secundária; marco na impugnação (ajuizamento ou citação) `[conferir]`.
- **Ônus do término do contrato:** negados a prestação e o despedimento, é do empregador (TST, Tema 278 IRR, reafirma a Súmula 212; BNP 17/07/2026). Defesa que alega abandono ou pedido de demissão assume o ônus (art. 818, II).

## 5. Checklist por ação

Cliente traz · escritório produz.
- **Rescisórias:** CTPS digital, contrato, holerites, TRCT, extrato do FGTS, mensagens da dispensa · cálculo, convenção da categoria.
- **Horas extras:** ponto, escala, prints e login fora do horário, testemunhas · quadro da jornada alegada.
- **Insalubridade ou periculosidade:** o que fazia, onde, com quê, EPIs, PPP, fotos · quesitos, assistente técnico.
- **Dano moral ou doença:** relato por data, mensagens, CAT, atestados, benefício do INSS · cronologia, testemunhas, perícia.
- **Vínculo:** contrato de prestação, notas, Pix, crachá, ordens por mensagem · quadro dos requisitos do art. 3º.
- **Defesa:** registro, ponto, holerites, TRCT e comprovante, FGTS, fichas de EPI · carta de preposição.

## 6. Onde pesquisar

- jurisprudencia.tst.jus.br: jurisprudência do TST.
- www.tst.jus.br: súmulas, OJs, teses vinculantes (IRR), depósito recursal.
- pangeabnp.pdpj.jus.br: precedentes qualificados (CNJ).
- comunica.pje.jus.br: DJEN (só abre do Brasil).
- pje.trt<N>.jus.br e pje.tst.jus.br: consulta processual.
- www.trt<N>.jus.br: jurisprudência do TRT, feriados e suspensões.
- portal.stf.jus.br: repercussão geral.
- www.csjt.jus.br: PJe-Calc, cálculo gratuito da Justiça do Trabalho.
- Convenções coletivas (Mediador do MTE) e NRs: [conferir endereço].

## 7. Como se escreve

- "Excelentíssimo(a) Senhor(a) Juiz(a) do Trabalho da __ Vara do Trabalho de __". No TRT, desembargador relator; no TST, ministro relator.
- Reclamação trabalhista, reclamante, reclamada, notificação; no recurso, recorrente e recorrido. "Réu", "citação" e "Junta" soam fora do lugar.
- Pedidos em rol numerado, cada um com valor e amarrado a um fato. Na minuta: `[valor: cálculo do escritório]`.
- Cita-se "CLT, art. 59", "Súmula 338, I, do TST", "Tema 21 do TST (IRR)".

## 8. Onde a IA mais erra

- **Prazo do cível:** recurso é 8 dias, embargos 5, defesa até a audiência.
- **Revelia:** vem da ausência na audiência (art. 844); com o advogado presente, a defesa entra (§5º). Preposto não precisa ser empregado (art. 843, §3º).
- **Súmula superada:** a Resolução TST 225/2025 (lida no PDF oficial, 19/10/2026) cancelou 36 enunciados, entre eles as Súmulas 6 (itens), 90, 114 (prescrição intercorrente), 152, 219 (honorários), 228 (base do adicional de insalubridade), 268, 277, 294, 307, 311, 320, 329, 331-I, 366, 372-I, 375, 377, 423, 426 (guia de depósito), 429, 437, 439 (juros no dano moral), 444, 449, 450 e 452, e as OJs SBDI-I 14, 270, 355, 383 e 418. Súmula ou OJ de memória vira `[buscar]`: o texto oficial das vigentes não abre neste servidor (portal do TST barra).
- **Súmula 338 x lei:** a súmula diz mais de 10 empregados; o art. 74, §2º hoje diz mais de 20.
- **Depósito recursal:** muda todo 1º de agosto. Desde 1/8/2026: R$ 14.411,57 no ordinário e R$ 28.823,14 na revista, nos embargos e na rescisória (Ato SEGJUD.GP 381/2026, lido em 19/10/2026). Vale o valor da data da interposição; ato anterior a 01/08/2026: `[conferir]`.
- **Cálculo:** verba, reflexo, correção, custas, depósito: a IA lista o que entra; a conta é do escritório ou do PJe-Calc.
- **Dado sensível:** CID, atestado, gravidez, assédio, filiação sindical e dado de testemunha vão por iniciais, nunca pro perfil. Segredo de justiça: guia de sigilo do kit.

## 9. Como as outras skills usam este módulo

- `ficha-do-caso`: lado, rito, valor da causa, admissão, saída e modalidade, função, salário, jornada, convenção, prazo da prescrição.
- `peca-a-partir-da-ficha`: seções 3 e 7, dentro do modelo do escritório.
- `gestao-de-prazos-e-intimacoes`: dias úteis (art. 775), suspensão do art. 775-A, sentença em audiência (art. 834).
- `pesquisa-jurisprudencial`: TRT da região e TST, IRR antes de súmula, checar cancelamento.
- `analise-de-risco-e-prognostico`: ônus da prova (art. 818), prova de jornada, perícia, sucumbência, Tema 1389.
- `documentos-procuracao-e-honorarios`: seção 5; poderes pra transigir, receber, dar quitação e declarar hipossuficiência (poderes especiais, CPC art. 105, conferido no Planalto em 20/10/2026).
- `preparacao-de-audiencia`: conciliação no começo e no fim, preposto, até 3 testemunhas (2 no sumaríssimo).
- `triagem-de-lead-e-caso-novo`: data da saída, empresa, função, salário, jornada, como saiu, o que recebeu, carteira assinada, testemunhas, data do ajuizamento (gratuidade).

*Módulo revisado em 20/10/2026 (v2.2) com a CLT multivigente, o DL 779/1969, a Res. TST 225/2025 e o Ato SEGJUD.GP 381/2026 (fontes oficiais) e o BNP/CNJ de 19/10/2026. ADC 80, ADI 5766 e correção pós-ADC 58 vêm de fontes secundárias; Súmulas e OJs vigentes do TST não abriram: `[conferir]`.*
