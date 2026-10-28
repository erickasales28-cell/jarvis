---
name: embargos-de-declaracao-trabalhista
description: Use quando o advogado pedir embargos de declaração trabalhista, "embargar a sentença" ou "embargar o acórdão" de Vara do Trabalho ou TRT, ED na Justiça do Trabalho (CLT, art. 897-A), embargos para prequestionar, omissão, contradição, obscuridade ou erro material em decisão trabalhista, efeito modificativo, ou resposta a embargos da outra parte no processo trabalhista. Para sentença de vara cível ou Juizado (CPC, art. 1.022) NÃO use esta skill: o `embargos-de-declaracao` do pacote cível 2 é para a justiça comum. Complementa peca-a-partir-da-ficha com as hipóteses do art. 897-A, o prazo, a vista à parte contrária, a interrupção do prazo e o que a revista exige dos embargos.
---

# Embargos de declaração trabalhista (CLT, art. 897-A)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-trabalhista`. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio dos embargos na Justiça do Trabalho. A decisão embargada entra inteira (peça o arquivo): sem ela não há como apontar o vício.

## Prazo, prescrição e plano
Mostre a conta sugerida (termo inicial, regra de contagem, úteis ou corridos com a base legal, dias pulados, resultado provável), marcada `[conferir: calendário do TRT]` e nunca como data certa. Na PRIMEIRA mensagem, antes das perguntas, abra com **ALERTA DE PRAZO** se o prazo vence em 5 dias úteis ou menos, e com **ALERTA DE PRESCRIÇÃO** se faltam 60 dias ou menos ou a janela já abriu; prazo que JÁ venceu vai no topo, como **VENCIDO**. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (publicação × disponibilização; úteis × corridos): conte os dois cenários e use o mais curto, com `[conferir]`. Sem a data de hoje, pergunte. O plano ganha a linha "Prazo"; no máximo 5 perguntas, priorizadas, o resto vira `[DEFINIR]`. Onde esta skill divergir do módulo `area-trabalhista`, vale esta skill; avise o advogado.

Aqui o prazo é de 5 dias úteis (art. 897-A, caput; art. 775) e quase sempre dispara o ALERTA DE PRAZO. Conte dia a dia a partir do dia útil seguinte à ciência. Sentença em audiência com as partes presentes: a ciência é ali (art. 852; art. 834: publicação e notificação consideram-se feitas na própria audiência); se a parte faltou à audiência de leitura, `[conferir Súmula 197 do TST]`. Dois cenários: A, a data da ficha é a ciência ou a publicação; B, é a disponibilização. Vale o mais curto. **Mostre junto a conta do recurso seguinte** (RO ou agravo de petição, 8 dias úteis da mesma ciência): embargos intempestivos não interrompem (art. 897-A, §3º), então, se os ED já estão fora do prazo, o prazo do recurso pode ter vencido, e isso vai no topo como VENCIDO, com o aviso de que embargar não o salva.

## Antes do roteiro
- **Prazo:** 5 dias úteis da intimação (art. 897-A, caput; art. 775). A suspensão de 20/12 a 20/1 vale (art. 775-A). Sentença proferida em audiência com as partes intimadas: o prazo conta dali (art. 852). A conta vai no bloco acima.
- **Interrupção:** os embargos interrompem o prazo dos outros recursos, **salvo se intempestivos, com representação irregular ou sem assinatura** (art. 897-A, §3º). Embargos intempestivos não salvam o recurso ordinário: confira o prazo antes de embargar.
- **Quem julga:** na primeira audiência ou sessão seguinte (caput).
- **Pergunte:** a decisão (sentença ou acórdão), a data da intimação, qual ponto o cliente quer ver decidido e pra quê (corrigir, ou preparar revista). Se um dos pontos é a gratuidade, a data do ajuizamento: antes de 16/09/2026 vale o regime anterior (Tema 21 do TST, Súmula 463, I); depois, a ADC 80 (detalhe em `reclamacao-trabalhista`).

## Estrutura
1. Endereçamento ao juízo ou ao relator, indicação do processo e da decisão.
2. **Tempestividade**, com a data da intimação da ficha.
3. **Um tópico por vício.** Cada um traz: o trecho da decisão (transcrito), a hipótese do art. 897-A e o que falta:
   - **omissão:** a tese, o pedido ou a prova que foi alegado em tal peça/fl. e não foi apreciado, com a prova de que foi alegado;
   - **contradição:** dois trechos da própria decisão que se excluem, lado a lado;
   - **manifesto equívoco na análise de pressuposto extrínseco** (tempestividade, preparo, representação): o fato e o documento (por exemplo, feriado local: a Súmula 385 do TST exige a prova na interposição do recurso, e o relator pode abrir 5 dias pra sanar; feriado forense, o próprio juízo certifica);
   - **erro material:** pode ser corrigido de ofício ou a pedido (art. 897-A, §1º).
4. **Efeito modificativo, só se pedir de fato:** o art. 897-A, §2º, o admite só pra sanar o vício e depois de ouvir a parte contrária em 5 dias. Peça expressamente a **vista à parte contrária**; decisão que modifica sem ouvi-la é nula (OJ 142, I, da SBDI-1 do TST). Vale também pra sentença: o item II, que excluía os embargos contra sentença por causa do efeito devolutivo do RO, foi cancelado em 2016 (Res. 214/2016, fonte secundária); se a outra parte o citar, está desatualizada.
5. **Prequestionamento:** formule a pergunta objetiva por dispositivo ou tese (`[conferir Súmula 297 do TST e CPC, art. 1.025]`). A revista exige do recorrente indicar o trecho que prequestiona e, se alegar negativa de prestação jurisdicional, **transcrever os embargos e a decisão que os rejeitou** (art. 896, §1º-A, I e IV). Escreva os embargos pensando nesse quadro.
6. Pedido: sanar o vício, com efeito modificativo quando for o caso, ou pelo menos o prequestionamento.

## Quando valem a pena, quando não
- Valem: vício real e pontual; pedido não apreciado; erro de pressuposto extrínseco; preparar revista.
- Não valem: rediscutir mérito (o juízo rejeita e pode aplicar multa, `[conferir CPC, art. 1.026, §2º]`); ganhar prazo; pedir a mesma coisa que o recurso pediria.
- **Omissão que ninguém embargou preclui:** `[conferir Súmula 184 do TST]`. Se o cliente quer revista sobre o ponto, embargue.

## Julgado
Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "embargos de declaração, omissão, prequestionamento e vista à parte contrária" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou `buscar_tst`). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer
- Não repetir o recurso nem a tese vencida: aponte o que a decisão não disse.
- Não pedir efeito modificativo sem pedir a vista (o juízo anula ou rejeita).
- Não protocolar sem conferir o prazo: embargo intempestivo não interrompe.
- Obscuridade: o art. 897-A não a lista (omissão, contradição, manifesto equívoco em pressuposto extrínseco). Ela vem pelo CPC, art. 1.022, I, aplicado subsidiariamente `[conferir IN 39 do TST]`: pode usar, citando o CPC e avisando o advogado; não a atribua ao 897-A.

*Referências conferidas em 19/10/2026 e revisadas em 20 e 21/10/2026 (CLT, inclusive arts. 775, 834 e 852, no Planalto pelo proxy; OJ 142 da SBDI-1, com o cancelamento do item II, e Súmula 385 por acórdãos, notícias e doutrina; ADC 80 pelo Informativo STF 1228). Lei, súmula e tese mudam: por isso existe a conferência antes de protocolar.*
