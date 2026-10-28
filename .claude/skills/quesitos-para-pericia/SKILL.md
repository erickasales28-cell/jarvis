---
name: quesitos-para-pericia
description: Use quando o advogado pedir quesitos para perícia médica ou social em ação previdenciária ou de BPC, quesitos por doença ou por profissão, indicação de assistente técnico, ou "o juiz abriu prazo para quesitos". Complementa peca-a-partir-da-ficha com o prazo do art. 12, §2º, da Lei 10.259, o art. 465 do CPC, o art. 129-A da Lei 8.213 e quesitos que o perito consegue responder.
---

# Quesitos para perícia

Siga as regras de `peca-a-partir-da-ficha`, inclusive a de abrir antes o `ESTILO-DO-ESCRITORIO.md` e o modelo do escritório em `MODELOS/`, e o módulo `area-previdenciario`. Quando o escritório tiver modelo de quesitos, a estrutura dele manda e a lista abaixo vira conferência. Esta skill acrescenta o que é próprio dos quesitos. Dado de saúde: iniciais na ficha, laudo anonimizado.

**Plano:** quesitos não têm tese. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência. Se o prazo já passou ou o juízo não abriu prazo para quesitos, pare e responda a consulta (o que ainda se pode pedir), sem plano. Mostre a conta do prazo como sugestão; a contagem final é do advogado.

## Antes do roteiro

- **Prazo.** JEF: nas ações previdenciárias e de assistência social, as partes têm 10 dias, depois da intimação da designação do exame, para apresentar quesitos e indicar assistentes (Lei 10.259, art. 12, §2º); o JEF conta em dias úteis (Lei 9.099, art. 12-A). Vara federal ou estadual: 15 dias da intimação da nomeação do perito para arguir impedimento ou suspeição, indicar assistente técnico e apresentar quesitos (CPC, art. 465, §1º). O prazo certo é o do despacho; pergunte a data da intimação. A contagem é do advogado.
- **Perguntas ao advogado:** qual benefício; atividade habitual (o que faz, esforço, postura, tempo em pé); CID e especialidade do médico assistente; laudos e datas; se o INSS fez perícia e o que concluiu; idade e escolaridade; se é acidente (CAT); se é perícia social (BPC) e quem mora na casa.
- **Quem responde o quê.** O perito médico responde fato clínico e funcional, não direito. Pergunta jurídica ("tem direito ao benefício?", "está segurado?") o juiz indefere. Condições pessoais e sociais (idade, escolaridade, mercado) o juiz valora: peça os dados do perito sobre limitações funcionais e deixe a valoração para a peça.
- **Art. 129-A da Lei 8.213:** se o perito do juízo divergir do laudo do INSS, deve fundamentar tecnicamente a divergência quanto à incapacidade, à data de início e à relação com a atividade (§1º); se confirmar o INSS, o juiz pode julgar improcedente (§2º). Os quesitos têm de fechar essa porta: forçar a fundamentação em cada ponto.
- **Perito de especialidade:** se o quadro é ortopédico, psiquiátrico, oftalmológico, neurológico, cardiológico ou outro, requeira, ao apresentar os quesitos, perito da especialidade ou ao menos que ele diga se tem aptidão para avaliar. HIV/aids: perícia com ao menos um infectologista (Lei 8.213, art. 60, §16; Lei 8.742, art. 20, §16, Lei 15.157/2025).

## Estrutura

1. Endereçamento, referência ao processo, indicação do assistente técnico (nome, profissão, registro, contato), se houver, e declaração de que os quesitos seguem.
2. **Quesitos médicos (base):** numerados, curtos, uma pergunta cada.
   - Diagnóstico e CID; exames e documentos examinados pelo perito.
   - Data de início da doença (DID) e da incapacidade (DII), com o documento ou critério que a fixa; se a incapacidade é anterior ou posterior à filiação, e se houve agravamento ou progressão (Lei 8.213, arts. 42, §2º, e 59, §1º).
   - Incapacidade para a atividade habitual (descrita no quesito); para qualquer atividade; total ou parcial; temporária ou permanente; se há insuscetibilidade de reabilitação.
   - Limitações funcionais concretas (peso, postura, marcha, atenção, jornada) e se são compatíveis com a atividade descrita.
   - Prognóstico; tempo estimado de recuperação ou de reavaliação (para a DCB e o pedido de prorrogação, art. 60, §§8º e 9º); necessidade de tratamento e de reabilitação.
   - Necessidade de assistência permanente de outra pessoa (art. 45, acréscimo de 25%).
   - Relação com o trabalho (nexo, doença profissional ou do trabalho): define competência e isenção de carência (art. 26, II).
   - Se a doença consta da lista de isenção de carência; se houve melhora entre a cessação do INSS e a perícia.
   - Se discorda do laudo do INSS: em quê, tecnicamente (art. 129-A, §1º).
3. **Por doença ou por profissão:** acrescente 3 a 5 quesitos da matriz da função (rural: carga, sol, ferramenta, postura prolongada; motorista: jornada, atenção, medicação; construção: carga, altura, equilíbrio; vendedor: deambulação, ortostatismo; cuidador: transferência de pessoas). Psiquiátrico: sintomas, adesão, risco no trabalho, capacidade de gerir a si mesmo; dor crônica: escala e tratamento; oncológico: tratamento e sequelas.
4. **Perícia social (BPC):** quem mora sob o mesmo teto (nome, idade, parentesco, ocupação, renda, benefício de cada um); moradia (condições, bens, aluguel); despesas com saúde, medicamento, fralda, transporte, cuidador; barreiras e dependência de terceiros; CadÚnico (data de atualização); se algum membro recebe benefício de um salário mínimo de idoso ou de pessoa com deficiência (art. 20, §14), estágio ou aprendizagem (§9º) ou transferência de renda (e a que título); se há outro BPC na família (§15). Pergunte fatos, não peça cálculo da renda per capita.
5. **Assistente técnico:** pode indicar no mesmo prazo; o parecer dele vem depois do laudo (CPC, art. 477, §1º, 15 dias).

## Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "perícia médica previdenciária, quesitos e condições pessoais" (súmula e precedente qualificado primeiro) e `buscar_em_todos` (ou o TRF da região e a TNU). Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Quesitos não precisam de jurisprudência: se for citar, `[INSERIR JULGADO: <tema>, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

## Não fazer

- Não pedir ao perito conclusão jurídica ("faz jus", "qualidade de segurado") nem cálculo.
- Não inventar CID, data de exame ou conduta do cliente; só o que a ficha e os laudos trazem.
- Não repetir quesito do mesmo teor com palavras diferentes: o juiz corta.
- Não deixar passar o prazo por "esperar o laudo do assistente": os quesitos e a indicação são do prazo do despacho.
- Não esquecer de pedir os documentos médicos do cliente ao juízo, para o perito, quando o cliente não os tiver.

*Referências conferidas em 19/10/2026 (Planalto, BNP/CNJ). Lei, súmula e enunciado mudam: por isso existe a conferência antes de protocolar.*
