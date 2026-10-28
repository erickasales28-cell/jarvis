---
name: contestacao-trabalhista
description: Use quando o advogado pedir contestação trabalhista, defesa da reclamada, defesa da empresa, contestação em reclamação trabalhista, preposto, carta de preposição ou impugnação de valores e pedidos. Complementa peca-a-partir-da-ficha com o momento da defesa, a revelia, o preposto, a impugnação pedido a pedido, os documentos que a empresa tem de juntar e as armadilhas de valor.
---

# Contestação trabalhista

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-trabalhista`. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio da defesa da reclamada. A inicial entra inteira: cada fato dela precisa de resposta.

## Prazo, prescrição e plano
Mostre a conta sugerida (termo inicial, regra de contagem, úteis ou corridos com a base legal, dias pulados, resultado provável), marcada `[conferir: calendário do TRT]` e nunca como data certa. Na PRIMEIRA mensagem, antes das perguntas, abra com **ALERTA DE PRAZO** se o prazo vence em 5 dias úteis ou menos, e com **ALERTA DE PRESCRIÇÃO** se faltam 60 dias ou menos ou a janela já abriu; prazo que JÁ venceu vai no topo, como **VENCIDO**. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (publicação × disponibilização; úteis × corridos): conte os dois cenários e use o mais curto, com `[conferir]`. Sem a data de hoje, pergunte. O plano ganha a linha "Prazo"; no máximo 5 perguntas, priorizadas, o resto vira `[DEFINIR]`. Onde esta skill divergir do módulo `area-trabalhista`, vale esta skill; avise o advogado.

Aqui o prazo é a audiência. Conte os dias úteis de hoje até ela e mostre a conta: ALERTA DE PRAZO se faltam 5 úteis ou menos. Dois cenários: A, a data de juntada fixada em despacho (se houver); B, a audiência. Vale o mais curto, com `[conferir despacho]`. Pergunte a data da notificação: a exceção de incompetência territorial vence em 5 dias dela (art. 800), contados em dias úteis porque o art. 775 rege os prazos do Título X da CLT, onde o art. 800 está; passada a audiência, está perdida.

## Antes do roteiro
- **Momento:** não há prazo em dias. A defesa é oral (20 minutos) ou escrita pelo PJe até a audiência (art. 847 e parágrafo único); muitos juízos fixam data de juntada no despacho, e o despacho vale. Pergunte data e hora da audiência, o rito, se há ordem de juntada prévia e a data da notificação (conta no bloco acima).
- **Revelia (art. 844):** a ausência da reclamada gera revelia e confissão quanto à matéria de fato, mas não se há litisconsórcio e outro réu contestou, se o direito é indisponível, se falta documento indispensável ou se os fatos são inverossímeis ou contrariados pela prova (§4º). Com o advogado presente, a contestação e os documentos são aceitos (§5º).
- **Preposto:** conhece os fatos e suas declarações obrigam a empresa (art. 843, §1º); não precisa ser empregado (§3º). A Súmula 377 do TST foi cancelada em 2025: não cite. Pergunte quem vai e se ele conhece os fatos; preposto que ignora os fatos é risco de confissão `[conferir jurisprudência do TRT]`. Procuração pode ser registrada em ata (art. 791, §3º).
- **Exceção de incompetência territorial (art. 800):** peça própria, em 5 dias da notificação e antes da audiência; suspende o processo e a audiência (§1º). Veja o foro (art. 651) antes de contestar.
- **Perguntas:** admissão e saída, função, salário, jornada contratada e real, ponto, como saiu (dispensa, pedido, justa causa), o que foi pago, TRCT e comprovante, grupo econômico, terceirização, convenção coletiva, ação anterior.
- **Documentos que a empresa tem de trazer:** contrato, ficha de registro, holerites, cartões de ponto (obrigatórios acima de 20 trabalhadores: art. 74, §2º), TRCT e comprovante de pagamento, extrato do FGTS, fichas de EPI, atestados, comunicação de dispensa, convenção coletiva, carta de preposição. Documento descrito e não lido vira `[JUNTAR: ...]`.

## Estrutura
1. Síntese da inicial, curta.
2. **Preliminares, só as que o caso sustenta:** pedido sem valor (extinção, art. 840, §3º), ilegitimidade, valor da causa ou rito, impugnação à gratuidade com prova (renda, patrimônio: ADC 80, presunção relativa até R$ 5.000,00, afastável por patrimônio ou renda familiar incompatíveis, e prova em concreto acima disso; só pra processos ajuizados a partir da publicação da ata, 16/09/2026 pelo boletim do TRT-11, `[conferir a data no STF]`; detalhe em `reclamacao-trabalhista`). Pergunte a data do ajuizamento: antes da ata vale o regime anterior (Tema 21 do TST, Súmula 463, I), em que a declaração basta até a prova em contrário.
3. **Prejudiciais:** prescrição quinquenal e bienal com as datas da ficha (art. 11).
4. **Mérito pedido a pedido**, na ordem da inicial, sem "nega-se tudo". Cada resposta separa o fato negado do fato impeditivo, modificativo ou extintivo que a reclamada prova (art. 818, II).
5. Impugnação dos documentos do autor e **impugnação de valores**.
6. Compensação ou dedução do que foi pago, em defesa (art. 767 da CLT: compensação e retenção só se arguem como matéria de defesa).
7. Pedidos: preliminares, improcedência, honorários (art. 791-A; sobre pedido julgado totalmente improcedente: Tema 242 do TST, IRR), provas, depoimento pessoal, até 3 testemunhas (art. 821; 2 no sumaríssimo, art. 852-H, §2º).

## Ônus (risco da reclamada, não é tese da defesa)
- **Término do contrato:** a Súmula 212 do TST e o Tema 278 (IRR, `vigente=1` no BNP/CNJ) põem o ônus no empregador quando ele **nega a prestação de serviço e a dispensa**. Não os escreva como argumento da defesa. Se a empresa admite o vínculo e alega pedido de demissão ou justa causa, o ônus é dela pelo art. 818, II (fato impeditivo ou extintivo), com a continuidade da relação como presunção favorável ao empregado; a Súmula 212 vale aí só por analogia. Avise o advogado e peça a prova (pedido de demissão assinado, comunicação, testemunha).

## Teses que costumam caber (só com prova na ficha)
- **Jornada:** cartões válidos e juntados. Sem ponto de quem devia ter, a Súmula 338, I, presume a jornada da inicial; cartão uniforme perde valor (III). Compensação e banco de horas (art. 59), cargo de gestão (art. 62, II), 12x36 (art. 59-A).
- **Intervalo:** só o suprimido, 50%, indenizatório (art. 71, §4º). Convenção ou acordo coletivo pode reduzi-lo, respeitado o mínimo de 30 minutos em jornada acima de 6 horas (art. 611-A, III, da CLT, texto conferido; STF, Tema 1046, vigente no BNP/CNJ): pergunte pela norma coletiva e junte-a.
- **Dano moral (metas, reunião):** o fato constitutivo é do autor (art. 818, I); dosagem pelos arts. 223-A a 223-G. Cobrança de meta dentro do poder diretivo não é ofensa por si, e o excesso exige prova `[conferir TRT]`. Pergunte à empresa a versão da reunião e quem estava.
- **Adicionais:** perícia obrigatória (art. 195, §2º); EPI e laudo.
- **Rescisórias:** pague e prove no prazo (art. 477, §6º); a parcela incontroversa não paga na audiência custa 50% a mais (art. 467). Pagamento no prazo, ainda que a menor, com diferenças só reconhecidas em juízo, não gera a multa do §8º (Tema 164 do TST, IRR).
- **Grupo econômico:** mera identidade de sócios não basta (art. 2º, §3º).
- **Valores da inicial como limite:** a defesa clássica é limitar a condenação aos valores indicados (art. 840, §1º), mas a IN 41/2018 do TST (art. 12, §2º) os trata como estimativa e as Turmas do TST seguem essa leitura, sem tese do Pleno até onde apurei: `[conferir o entendimento do TRT]` antes de apostar nela.
- **Má-fé do reclamante:** arts. 793-B e 793-C.

## Julgado
Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "contestação trabalhista, ônus da prova, jornada e confissão" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou `buscar_tst`). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer
- Não impugnar em bloco: o pedido sem resposta específica fica sujeito à presunção de veracidade.
- Não alegar fato que a ficha não traz nem juntar documento não lido.
- Não contar só com o advogado na audiência: ele faz a defesa entrar (art. 844, §5º), mas a ausência do preposto ainda expõe a empresa à confissão quanto aos fatos `[conferir leitura do TRT]`.
- Não esquecer a exceção territorial no prazo de 5 dias: depois da audiência, perdeu.
- Não calcular valor: liste o que entra e deixe `[valor: cálculo do escritório]`.

*Referências conferidas em 19/10/2026 e revisadas em 20 e 21/10/2026 (Temas 21, 164, 242 e 278 do TST e 1046 do STF no BNP/CNJ; CLT, inclusive arts. 611-A, III, 775, 800 e 844, no Planalto pelo proxy; Resolução 225/2025 no PDF oficial do juslaboris; IN 41 no site do TST; ADC 80 pelo Informativo STF 1228 lido pelo proxy, acórdão não aberto, data da ata pelo boletim do TRT-11). Lei, súmula e tese mudam: por isso existe a conferência antes de protocolar.*
