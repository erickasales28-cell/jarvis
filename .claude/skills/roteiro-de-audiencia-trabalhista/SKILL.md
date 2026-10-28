---
name: roteiro-de-audiencia-trabalhista
description: Use quando o advogado pedir roteiro de audiência trabalhista, preparação de audiência una, inicial ou de instrução, perguntas para testemunha, perguntas para depoimento pessoal, preparação do preposto, contradita, proposta de acordo em audiência ou razões finais orais. Não é peça: é pacote de preparação com o ônus da prova por pedido, as perguntas por tema e o que fazer em cada incidente. Para audiência trabalhista (Vara do Trabalho) é esta skill, não o método genérico `preparacao-de-audiencia` do Kit (cível, Juizado, conciliação); onde as duas divergirem, vale esta. Complementa preparacao-de-audiencia com as regras da CLT.
---

# Roteiro de audiência trabalhista

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md`, `metodos/plano-antes-de-gerar.md` e `metodos/preparacao-de-audiencia.md`. **Quando é esta skill e quando é o método do Kit:** audiência trabalhista (una, inicial ou de instrução) é esta skill, que usa o `preparacao-de-audiencia` como base (ficha, orientação ao cliente e à testemunha); conciliação e instrução cível ou de Juizado são só o método do Kit. **Onde esta skill e o método do Kit divergirem, vale esta skill**; avise o advogado. Abra antes o `ESTILO-DO-ESCRITORIO.md` e o módulo `area-trabalhista`. Esta skill não gera peça pra protocolo: gera o **pacote de preparação** (em .docx, quando o ambiente gerar arquivo). Pergunte antes: o lado (reclamante ou reclamada), o rito (sumaríssimo ou ordinário), se a audiência é una, inicial ou de instrução, se é presencial ou telepresencial (`[conferir regras do TRT]`), os pedidos da inicial e as defesas da contestação (peça os dois arquivos; a ficha basta se já traz o pedido e a defesa de cada um).

## Prazo, prescrição e plano
Mostre a conta sugerida (termo inicial, regra de contagem, úteis ou corridos com a base legal, dias pulados, resultado provável), marcada `[conferir: calendário do TRT]` e nunca como data certa. Na PRIMEIRA mensagem, antes das perguntas, abra com **ALERTA DE PRAZO** se o prazo vence em 5 dias úteis ou menos, e com **ALERTA DE PRESCRIÇÃO** se faltam 60 dias ou menos ou a janela já abriu; prazo que JÁ venceu vai no topo, como **VENCIDO**. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (publicação × disponibilização; úteis × corridos): conte os dois cenários e use o mais curto, com `[conferir]`. Sem a data de hoje, pergunte. O plano ganha a linha "Prazo"; no máximo 5 perguntas, priorizadas, o resto vira `[DEFINIR]`. Onde esta skill divergir do módulo `area-trabalhista`, vale esta skill; avise o advogado.

Aqui o prazo é a data da audiência. Conte os dias úteis de hoje até ela e mostre as providências em D-5 (úteis): rol e convite das testemunhas, documentos a juntar no PJe, procuração e carta de preposição, teste do link se for telepresencial, faixa de acordo autorizada. ALERTA DE PRAZO se faltam 5 úteis ou menos; despacho com juntada prévia de defesa ou documentos é o prazo mais curto. Depois da audiência, conte os embargos (5 úteis) e o RO (8 úteis) da ciência, que pode ser a própria audiência (art. 852).

**Plano de uma tela** (a skill não é peça): até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se a triagem barrar o caso (audiência já realizada, prazo decaído), pare e responda a consulta, sem plano.

**Formato fixo do Kit → itens do pacote** (entregue no formato do pacote, com os títulos do Kit nos itens correspondentes): Pontos controvertidos e "O que cada lado precisa provar" = item 1; roteiro das testemunhas do cliente e depoimento pessoal da parte contrária = item 4; contradita = item 5; "O que levar" e orientação ao cliente e à testemunha = item 6; riscos = coluna "risco" do item 1 e itens 2 e 7. Os itens 3, 7 a 10 não existem no Kit e entram.

## O pacote (nesta ordem)
1. **Quadro de ônus da prova, um pedido por linha:** pedido | quem prova (art. 818, I e II) | prova que o cliente tem | prova que falta | risco. **Ônus do término:** a empresa que **nega a prestação de serviço e a dispensa** carrega o ônus (Súmula 212 e Tema 278 do TST); a que admite o vínculo e alega pedido de demissão ou justa causa o carrega pelo art. 818, II (a Súmula 212 vale só por analogia). Sem os pedidos e a defesa de cada um (inicial e contestação, ou a ficha que os traga), não monte o quadro.
2. **Regras que mudam a conduta na sala:**
   - Presença e ausência (art. 844): reclamante ausente, arquivamento e custas, mesmo com gratuidade, salvo motivo justificável provado em 15 dias (§2º), condição pra nova ação (§3º). Reclamada ausente, revelia e confissão, mas com advogado presente a contestação e os documentos entram (§5º); revelia afastada nas hipóteses do §4º.
   - Preposto: conhece os fatos e obriga a empresa (art. 843, §1º); não precisa ser empregado (§3º). A Súmula 377 foi cancelada (2025).
   - Procuração pode ser registrada em ata (art. 791, §3º).
   - Conciliação: proposta no início (art. 846) e **renovada depois das razões finais** (art. 850).
   - Defesa: 20 minutos orais ou escrita no PJe até a audiência (art. 847).
   - Interrogatório das partes, depois testemunhas e perito (art. 848).
   - Testemunhas: até 3 por parte (art. 821); no sumaríssimo, 2 (art. 852-H, §2º). Comparecem sem intimação (art. 825); no sumaríssimo, só se intima quem foi convidado e faltou (art. 852-H, §3º). Qualificação e compromisso (art. 828); parente até o 3º grau, amigo íntimo ou inimigo depõe como informante (art. 829).
   - Sumaríssimo: audiência única (art. 852-C); o juiz limita provas excessivas (art. 852-D); documentos novos a parte contrária responde na hora (art. 852-H, §1º); ata resumida, então **peça o registro do fato essencial** (art. 852-F).
   - Razões finais: 10 minutos (art. 850). Sentença na própria audiência: o prazo recursal começa ali (art. 852).
   - **Nulidade e cerceamento:** argua na primeira oportunidade de falar, em audiência (art. 795), com protesto na ata e indicação do prejuízo (art. 794). Sem protesto, o tribunal não conhece.
   - Ônus: o juízo pode redistribuí-lo por decisão fundamentada, antes da instrução, e adia a audiência a pedido (art. 818, §§1º a 3º). Peça na hora se for o caso.
3. **Súmulas que decidem a audiência:** Súmula 338, I e III (cartão de ponto: não juntado sem justificativa presume a jornada da inicial; uniforme não vale); Súmula 212 e Tema 278 do TST (término do contrato: só quando o empregador nega a prestação e a dispensa; a distinção está no item 1); Súmula 74 (confissão da parte intimada pessoalmente pra depor que falta; prova pré-constituída pode se contrapor); Súmula 357 (testemunha que litiga contra o mesmo empregador não é, só por isso, suspeita; troca de favores exige prova).
4. **Perguntas por pedido (pra testemunha e pro depoimento pessoal).** Pergunta aberta, uma por vez, ligada a fato do pedido; nenhuma cuja resposta o advogado não conhece. Modelo por tema, a ser ajustado à ficha:
   - **Jornada e horas extras:** onde trabalhava junto da testemunha, período, horário de entrada e saída, quem marcava o ponto, se o ponto refletia o horário real, se havia trabalho depois da marcação, em quantos dias por semana, quem determinava.
   - **Intervalo:** onde almoçava, quanto tempo levava, se saía do posto, se era chamado no intervalo.
   - **Vínculo:** quem dava ordens, quem fixava horário e local, se podia mandar substituto, como era pago, se tinha exclusividade, uniforme, crachá, metas.
   - **Função e equiparação:** o que fazia por dia, com quem, sob quem; o paradigma, na mesma função e local.
   - **Adicionais:** o que manipulava, com que frequência, que EPI recebia e se usava, quem fiscalizava.
   - **Adicional noturno:** horário real de entrada e saída, quantas horas entre 22h e 5h, se recebia o adicional, se o contracheque trazia a hora noturna reduzida (art. 73, §1º), quem fixava o turno.
   - **Dano moral e assédio:** o fato, a data, quem presenciou, a reação, o ambiente. Dado sensível: iniciais.
   - **Rescisão indireta:** a falta, desde quando, a reclamação feita à empresa, a resposta, o impacto no salário.
   - **Justa causa e pedido de demissão (lado da reclamada):** quem iniciou, em que data, a prova da falta, a sanção anterior.
   - **Rescisórias:** o que recebeu na saída, quando, se assinou o TRCT.
5. **Contradita (testemunha da outra parte):** roteiro de perguntas de qualificação (parentesco, amizade íntima, inimizade, interesse) e o registro em ata. Lembre da Súmula 357.
6. **Preparo do cliente e do preposto:** como será o interrogatório, o que não afirmar sem saber, a documentação na mão, o horário e o local, o celular desligado.
7. **Proposta de acordo, com as faixas do lado do cliente** (autorizadas por escrito, `[valor: definido pelo escritório com o cliente]`): se o cliente **paga** (reclamada): abertura, alvo e teto (o máximo autorizado); se o cliente **recebe** (reclamante): abertura (o que pede), alvo e piso (o mínimo que aceita). Parcelamento, multa pelo descumprimento, natureza das parcelas e contribuição previdenciária (art. 832, §3º), custas (art. 789, §3º: por igual se nada se disser), quitação do que se discute. A skill não calcula.
8. **Razões finais em 10 minutos:** abertura com a tese, um bloco por pedido (fato provado, ônus, súmula ou tese vinculante, pedido), fecho.
9. **Depois da audiência:** conferir a ata (testemunhas, protestos, confissões, nomes), lançar o prazo recursal com a conta à mostra (embargos de declaração 5 dias úteis; recurso ordinário 8 dias úteis; a ciência é a da audiência quando a sentença sai ali), avisar o cliente.
10. **Se a audiência é telepresencial:** confirme no despacho o modo, o link e o horário `[conferir regras do TRT e do juízo]`. Base geral, texto não aberto: Res. CNJ 354/2020, na redação da Res. CNJ 481/2022 (telepresencial a pedido da parte, com o juiz decidindo a conveniência, `[conferir]`), e Res. CSJT 285/2021 (institui a plataforma de videoconferência pra audiências e sessões na Justiça do Trabalho; ementa conferida no juslaboris); norma do CSJT específica sobre testemunha vigente: não achei, `[conferir]`. Providências: testar o link com cliente e testemunha antes; documento oficial com foto à mão; testemunha sozinha no ambiente, sem consulta a papéis, celular ou mensagens, e sem ouvir os outros depoimentos (art. 824 da CLT: o juiz providencia pra que uma testemunha não ouça as demais); documentos que a parte quer mostrar já juntados no PJe; se a conexão cair, protesto e registro em ata (art. 795) e pedido de novo ato; videogravação (Res. CSJT 313/2021, procedimentos de videogravação de audiências; ementa conferida no juslaboris, texto não aberto).

## Julgado
Com o Advoclaude Jurisprudência ligado, busque antes de montar o quadro de ônus: `buscar_precedentes` no tema de cada pedido (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou `buscar_tst`). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr no roteiro. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer
- Não montar perguntas sem ter lido a inicial e a contestação.
- Não fazer pergunta que induz a resposta (o juiz indefere e a testemunha perde força).
- Não deixar de pedir protesto na ata quando uma prova for indeferida.
- Não aceitar acordo fora da faixa autorizada pelo cliente (teto, se ele paga; piso, se ele recebe).
- Não pôr número de processo, nome de testemunha ou dado de saúde no perfil do escritório.

*Referências conferidas em 19/10/2026 e revisadas em 20 e 21/10/2026 (CLT, inclusive arts. 73, 824 e 852, no Planalto pelo proxy; ementas das Res. CSJT 285/2021 e 313/2021 no juslaboris, texto não aberto; Res. CNJ 354/2020 e 481/2022 só por busca; Resolução 225/2025 no PDF oficial do juslaboris; Tema 278 do TST no BNP/CNJ; Súmulas 74, 212, 338 e 357 por acórdãos e notícias do TST). Lei, súmula e tese mudam: por isso existe a conferência antes de protocolar.*
