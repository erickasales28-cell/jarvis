---
name: contrarrazoes-ao-recurso-ordinario
description: Use quando o advogado pedir contrarrazões ao recurso ordinário, contrarrazões trabalhistas, resposta ao RO da reclamada ou do reclamante, ou quiser atacar a deserção, a intempestividade ou o recurso genérico da parte contrária. Complementa peca-a-partir-da-ficha com as preliminares de admissibilidade que costumam salvar a sentença, a defesa capítulo a capítulo e a decisão entre contrarrazões e recurso adesivo.
---

# Contrarrazões ao recurso ordinário (CLT, arts. 895 e 900)

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-trabalhista`. Quando o escritório tiver modelo deste tipo de peça, a estrutura dele manda, e a lista abaixo vira conferência do que não pode faltar. Esta skill acrescenta o que é próprio das contrarrazões. Peça o recurso da outra parte e a sentença: sem o recurso aberto, não há como responder capítulo a capítulo.

## Prazo, prescrição e plano
Mostre a conta sugerida (termo inicial, regra de contagem, úteis ou corridos com a base legal, dias pulados, resultado provável), marcada `[conferir: calendário do TRT]` e nunca como data certa. Na PRIMEIRA mensagem, antes das perguntas, abra com **ALERTA DE PRAZO** se o prazo vence em 5 dias úteis ou menos, e com **ALERTA DE PRESCRIÇÃO** se faltam 60 dias ou menos ou a janela já abriu; prazo que JÁ venceu vai no topo, como **VENCIDO**. Vencimento em dia não útil: mostre a prorrogação legal e, pra planejar, o dia útil anterior. Contagem incerta (publicação × disponibilização; úteis × corridos): conte os dois cenários e use o mais curto, com `[conferir]`. Sem a data de hoje, pergunte. O plano ganha a linha "Prazo"; no máximo 5 perguntas, priorizadas, o resto vira `[DEFINIR]`. Onde esta skill divergir do módulo `area-trabalhista`, vale esta skill; avise o advogado.

Aqui a data decisiva é a da **notificação da recorrida** para as contrarrazões (8 dias úteis, art. 900; art. 775), que a ficha quase nunca traz: pergunte-a primeiro. Sem ela, abra com ALERTA CONDICIONAL: o prazo pode estar correndo desde o dia útil seguinte ao protocolo do RO; use esse cenário como o mais curto e peça a data. Com a data, dois cenários (publicação × disponibilização), vale o mais curto. O recurso adesivo, se o cliente também quer recorrer, tem o mesmo prazo (Súmula 283).

## Antes do roteiro
- **Prazo:** igual ao do recorrente, 8 dias úteis, contados da notificação do recorrido (art. 900; art. 775). Suspensão de 20/12 a 20/1 (art. 775-A). A conta vai no bloco acima. O prazo em dobro é privilégio do ente público pra recorrer (DL 779/1969, art. 1º, III); as contrarrazões do particular contra ele seguem os 8 dias.
- **Pergunte:** a data da notificação para as contrarrazões, a data em que o RO foi interposto (define o depósito exigido), qual lado, o que a sentença deu a cada parte, se o cliente também quer recorrer, o que o recorrente atacou e o que deixou sem ataque.
- **Decisão que o advogado tem de tomar antes:** só contrarrazões ou também **recurso adesivo**. O adesivo cabe no prazo de 8 dias contra o RO (Súmula 283 do TST) e serve pra quem venceu em parte e quer reformar o que perdeu; o preparo é próprio. Mostre isso na entrada, antes de redigir.

## Estrutura
1. Endereçamento ao juízo de origem (ou ao relator) e síntese do recurso e da sentença.
2. **Preliminares de não conhecimento**, só as que a conferência dos autos sustentar:
   - **intempestividade:** conte o prazo do recurso com o art. 775-A e com a interrupção por embargos (art. 897-A, §3º); embargos intempestivos não interrompem;
   - **deserção:** custas não pagas ou não comprovadas dentro do prazo (art. 789, §1º) e depósito ausente ou comprovado fora do prazo (Súmula 245) não se salvam. Depósito a menor (compare com o valor vigente **na data da interposição do RO**, não o de hoje: R$ 14.411,57 se interposto desde 01/08/2026, Ato SEGJUD.GP 381/2026; R$ 13.813,83 se interposto entre 01/08/2025 e 31/07/2026, Ato SEGJUD.GP 391/2025, valor por notícia do TRT-3; ou o da condenação, se menor) abre 5 dias pra complementar (OJ 140 da SBDI-1; CPC, art. 1.007, §2º): aponte a diferença, mas conte que o relator vai abrir prazo. Confira se a recorrente é isenta ou paga metade (art. 899, §§9º e 10; art. 790-A; DL 779/1969, art. 1º, IV) e se pessoa jurídica pediu gratuidade sem prova cabal (Súmula 463, II, do TST);
   - **irregularidade de representação:** procuração, substabelecimento sem poderes, falta de assinatura (`[conferir Súmula 383 do TST]`);
   - **razões inteiramente dissociadas da sentença** (Súmula 422, III, do TST: no RO, só isso leva ao não conhecimento; a mera repetição da contestação não basta se ela dialoga com o que a sentença decidiu);
   - **inovação recursal:** tese ou documento novo sem justificativa `[conferir Súmula 8 do TST]`.
3. **Mérito, um tópico por capítulo recorrido**, na ordem das razões do recorrente: o fundamento da sentença, a prova dos autos (ata, depoimentos, documentos, laudo), a resposta ao argumento do recurso. Defenda também o que o recorrente deixou **sem ataque**: capítulo não impugnado transita.
4. **Matéria que a sentença não analisou e que sustenta o capítulo vencedor:** peça que o TRT a aprecie mesmo sem ter sido renovada aqui (Súmula 393 do TST).
5. Pontos acessórios: honorários do art. 791-A (a majoração em grau recursal é discutida: `[conferir]`), multa do art. 793-C, gratuidade da parte contrária (ADC 80: presunção até R$ 5.000,00 e prova acima, só pra processos ajuizados a partir de 16/09/2026, publicação da ata; detalhe em `reclamacao-trabalhista`; `[conferir no acórdão]`). Pergunte a data do ajuizamento: antes de 16/09/2026 vale o regime anterior (Tema 21 do TST, Súmula 463, I).
6. Pedido: não conhecimento e, no mérito, desprovimento, mantendo a sentença; pedido de condenação em litigância de má-fé se a ficha trouxer.

## Julgado
Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema de cada capítulo defendido e em "deserção e requisitos de admissibilidade do recurso ordinário" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou `buscar_tst`). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer
- Não repetir a inicial ou a contestação: responda o recurso.
- Não alegar deserção sem ter conferido guia, valor do ato vigente na data da interposição e isenção (a acusação errada desgasta o escritório).
- Não esquecer o recurso adesivo quando o cliente também perdeu algo.
- Não afirmar que o recorrente "nada impugnou" sem confrontar as razões com a sentença capítulo a capítulo.

*Referências conferidas em 19/10/2026 e revisadas em 20 e 21/10/2026 (Tema 21 do TST no BNP/CNJ; CLT e DL 779 no Planalto pelo proxy; Ato SEGJUD.GP 381/2026 no juslaboris e por notícias dos TRTs 6 e 12; Ato 391/2025 por notícia do TRT-3; OJ 140, Súmulas 245, 283, 393 e 422 por acórdãos e notícias do TST; ADC 80 pelo Informativo STF 1228, data da ata pelo boletim do TRT-11). Lei, súmula e tese mudam: por isso existe a conferência antes de protocolar.*
