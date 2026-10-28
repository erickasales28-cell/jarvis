# area-previdenciario

Quando usar: Use quando o perfil do escritório disser que ele atua em Direito Previdenciário e a tarefa for ficha, peça, prazo, pesquisa, risco, checklist de documentos ou audiência dessa área. É o módulo da área: rito, prazos, peças, teses, fontes e armadilhas que as outras skills do Advoclaude leem antes de trabalhar.

# Área: previdenciário (RGPS e BPC)

Leia antes de qualquer caso contra o INSS. Regra de vara e regra de juizado ficam separadas: no JEF mudam o prazo do INSS, o recurso e o reexame. Com o pacote Previdenciário do Pro instalado, a skill da peça (`requerimento-administrativo-inss`, `recurso-ao-crps`, `inicial-beneficio-por-incapacidade`, `inicial-bpc-loas`, `inicial-aposentadoria`, `pensao-por-morte`, `salario-maternidade`, `revisao-de-beneficio`, `quesitos-para-pericia`, `impugnacao-ao-laudo-pericial`) aprofunda e prevalece onde divergir.

## 1. Onde a área corre

- **Administrativo primeiro.** Requerimento no Meu INSS; recurso ordinário à Junta de Recursos do CRPS (Decreto 3.048/1999, art. 305). Sem requerimento não há interesse de agir (STF, Tema 350), salvo revisão, restabelecimento ou manutenção de benefício, ou entendimento notório contrário do INSS. O requerimento precisa ser apto. Tema 1124 do STJ (acórdão de 06/11/2025): pedido sem documentação mínima ("indeferimento forçado") não gera interesse de agir; pedido apto mas insuficiente obriga o INSS a intimar para complementar, e, se não o fez, o interesse existe; levar a juízo os mesmos fatos e provas do processo administrativo mantém o interesse, e prova nova exige novo requerimento; a DIB é a da DER ou, com prova só judicial, a da citação (texto no BNP/CNJ, 19/10/2026). Novo pedido do mesmo benefício depende do art. 576-A da IN 128/2022 (IN 208/2026), lido só em fonte secundária: `[conferir]`.
- **JEF** (Lei 10.259/2001): até 60 salários mínimos, somando vencidas e 12 vincendas (art. 3º, §2º); competência absoluta onde houver JEF (art. 3º, §3º). Pode renunciar ao excedente (STJ, Tema 1030). Recurso à Turma Recursal; uniformização na TRU e na TNU.
- **Vara federal** (CPC): acima de 60 SM sem renúncia, e mandado de segurança, que não cabe no JEF (Lei 10.259, art. 3º, §1º, I). Apelação ao TRF.
- **Competência delegada** (CF, art. 109, §3º; Lei 5.010/1966, art. 15, III, redação da Lei 13.876/2019): vara estadual só se a comarca do domicílio fica a mais de 70 km de município sede de vara federal. Recurso ao TRF (CF, art. 109, §4º).
- **Acidente do trabalho:** Justiça Estadual (CF, art. 109, I).
- **Sistemas:** PJe no TRF1, TRF3 e TRF5; eproc no TRF2, TRF4 e TRF6; na delegada, o do TJ (vários migram para o eproc).
- **Escolha:** domicílio, natureza (acidentária ou não) e valor da causa calculado pelo advogado.

## 2. Prazos que mais aparecem

| Ato | Prazo | Base | Dias | Observação |
|---|---|---|---|---|
| Recurso ao CRPS e contrarrazões | 30 dias | Decreto 3.048, art. 305, §1º; RICRPS, arts. 61 e 62 | contínuos (corridos); a versão original contava em úteis, e a Portaria MPS 2.393/2023 mudou | da ciência da decisão; embargos em 10 dias (RICRPS, art. 75); ação judicial com mesmo objeto = renúncia ao recurso (Decreto 3.048, art. 307) |
| Prorrogação do auxílio por incapacidade | antes da DCB | Lei 8.213, art. 60, §§8º e 9º | | sem DCB fixada, cessa em 120 dias |
| Pensão com início no óbito | 90 dias; 180 para filho menor de 16 | Lei 8.213, art. 74, I | corridos | depois, início na DER (inc. II) |
| Revisão do ato de concessão | 10 anos | Lei 8.213, art. 103 | corridos | indeferimento e cessação sem decadência (STF, ADI 6096) |
| Parcelas vencidas | 5 anos | art. 103, parágrafo único | corridos | não corre contra menor, incapaz, ausente |
| Recurso inominado e contrarrazões | 10 dias | Lei 9.099/1995, art. 42 | úteis | INSS sem dobro (Lei 10.259, art. 9º) |
| Embargos de declaração no JEF | 5 dias | Lei 9.099, art. 49 | úteis | |
| Uniformização à TNU e contrarrazões | 15 dias | RITNU (Res. CJF 586/2019), art. 12 | úteis | agravo da inadmissão: 15 dias (art. 14, §2º) |
| Apelação e contrarrazões | 15 dias | CPC, art. 1.003, §5º | úteis | INSS em dobro (art. 183) |
| RPV no JEF | 60 dias da requisição | Lei 10.259, art. 17 | `[conferir]` | teto de 60 SM (§1º) |
| Análise do INSS (Atestmed e documental) | 30 dias | Lei 8.213, art. 73-A (Lei 15.415/2026, salário-maternidade, com concessão provisória) e art. 60, §§11-F a 11-I (Lei 15.265/2025, incapacidade) | | portarias de 2026 ampliaram o Atestmed (fonte secundária, `[conferir]`) |

Contagem: JEF em dias úteis (Lei 9.099, art. 12-A), sem reexame necessário (Lei 10.259, art. 13); vara e delegada pelo CPC (art. 219).

## 3. Peças mais comuns (esqueleto)

1. **Requerimento administrativo:** espécie certa, documentos completos, benefício mais vantajoso, reafirmação da DER.
2. **Recurso ao CRPS:** tempestividade, cada motivo do indeferimento, prova nova, pedido de nova perícia.
3. **Inicial por incapacidade:** o que o art. 129-A da Lei 8.213 exige (doença e limitações, atividade, falhas da perícia do INSS, ação anterior) e os documentos dele (indeferimento ou cessação, acidente, documentação médica). Quesitos, tutela, DII, DIB, DCB.
4. **Inicial de aposentadoria:** regra pretendida e subsidiárias (EC 103/2019, arts. 15 a 21), períodos controvertidos um a um, reafirmação da DER (STJ, Tema 995).
5. **Inicial de BPC:** 65 anos ou deficiência (Lei 8.742/1993, art. 20), grupo familiar (§3º-A), CadÚnico, biometria, perícia médica e avaliação social.
6. **Inicial de pensão por morte:** qualidade de segurado no óbito (Lei 8.213, art. 15), dependência (art. 16), início (art. 74), duração (art. 77), cotas (EC 103, art. 23).
7. **Manifestação sobre o laudo:** omissão, contradição, quesito sem resposta; esclarecimento ou nova perícia.
8. **Recurso inominado:** tempestividade, gratuidade, pedido a pedido, questão de direito posta para a uniformização.
9. **Pedido de uniformização:** só direito material, paradigma de outra região ou entendimento dominante do STJ ou da TNU, cotejo analítico, cópia do paradigma (RITNU, art. 14, V).
10. **Apelação:** capítulos atacados, DIB, correção, honorários.
11. **Mandado de segurança por demora:** omissão além dos prazos do acordo homologado no RE 1.171.152 (05/02/2021). O Tema 1066 do STF consta **cancelado** no BNP/CNJ (19/10/2026): não o cite como tese vigente. Prazos por benefício e vigência atual do acordo: `[conferir]`; a Lei 15.415/2026 (art. 73-A) fixa 30 dias para o salário-maternidade.

## 4. Teses, pedidos e provas recorrentes

- **Incapacidade** (Lei 8.213, arts. 42, 59, 86): decidem a perícia, o laudo com data de início e a qualidade de segurado e carência na DII (arts. 15, 25, I, e 26, II). Cálculo da aposentadoria por incapacidade permanente pós-reforma é constitucional (STF, Tema 1300). Condições pessoais: `[buscar: súmula TNU]`.
- **Especial:** PPP e LTCAT; ruído pelo NEN (STJ, Tema 1083); conversão em comum só até a EC 103 (art. 25, §2º). EPI eficaz: STF Tema 555 e STJ Tema 1090 (09/04/2025, EPI no PPP). Vigilante não é especial depois da EC 103: STF Tema 1209 (acórdão de 18/02/2026; embargos `[conferir]`). Contribuição abaixo do mínimo e qualidade de segurado: STF Tema 1467, afetado.
- **Rural:** prova material com testemunhas; tempo anterior ao documento mais antigo (STJ, Tema 638); híbrida (STJ, Tema 1007).
- **União estável na pensão:** prova material dos 24 meses antes do óbito (art. 16, §5º); para a duração pela tabela de idade, prova de 2 anos de união (§6º e art. 77, §2º, V, c).
- **Pensão por morte:** a cota da EC 103, art. 23, é de 50% mais 10 pontos por dependente, até 100%; a cota que acaba não se reverte aos demais (§1º), e o dependente inválido ou com deficiência grave tem regra própria (§2º). O art. 75 da Lei 8.213 ainda mostra 100% no texto: a IA erra aqui. Duração por idade (art. 77): a lei compilada traz 44 anos, o INSS aplica a tabela com vitalícia a partir de 45 para óbito desde 01/01/2021 (portaria ministerial; número e data só em fonte secundária, `[conferir]`). Menor sob guarda: Lei 8.213, art. 16, §2º (Lei 15.108/2025). Detalhe na skill `pensao-por-morte`.
- **Salário-maternidade:** a carência de 10 meses da contribuinte individual, facultativa e especial é inconstitucional (STF, ADI 2.110 e 2.111, 21/03/2024; INSS e CRPS já a afastam, Enunciado 19 do CRPS). Prazo do INSS: art. 73-A (Lei 15.415/2026). Internação: Lei 15.222/2025.
- **BPC:** renda per capita abaixo de 1/4 do salário mínimo presume a miserabilidade, mas não é o único meio de prova (STJ, Tema 185); o art. 20, §3º, como requisito obrigatório é inconstitucional (STF, Tema 27); renda de quem vive sob o mesmo teto, sem dedução fora da lei (art. 20, §3º-A, Lei 15.077/2024, com a ressalva do §14). O Decreto 12.534/2025 (25/06/2025) revogou a exclusão de transferências de renda do cálculo. CadÚnico e biometria: art. 20, §§12 a 12-B. Detalhe na skill `inicial-bpc-loas`.
- **Revisão da vida toda:** superada (STF, Tema 1102 e ADIs 2.110 e 2.111; sessão virtual dos embargos encerrada em 25/11/2025). Decadência: o art. 103 compilado e o Decreto 3.048, art. 347, ainda trazem "indeferimento, cancelamento ou cessação", que a ADI 6096 declarou inconstitucional: sem decadência na revisão de indeferimento (Tema 313: 10 anos para revisar a concessão).
- **Tutela revogada:** devolve, com desconto de até 30% (STJ, Tema 692).
- **Honorários:** Súmula 111 do STJ (texto no BNP). O Tema 1105 do STJ não foi conferido: `[conferir]`.

## 5. Checklist de documentos

- **Incapacidade.** Cliente: documentos pessoais, CTPS, CNIS, laudos, exames, atestados com data, CAT se acidente, carta do INSS. Escritório: linha do tempo médica, quesitos.
- **Aposentadoria urbana.** Cliente: CTPS, carnês, CNIS, contracheques. Escritório: quadro de períodos com pendências do CNIS e regras a testar.
- **Especial ou rural.** Cliente: PPP, LTCAT; ou documentos rurais próprios e da família, nomes de testemunhas. Escritório: autodeclaração rural, rol.
- **BPC.** Cliente: documentos e renda de todos da casa, CadÚnico atualizado, laudos, comprovante de residência. Escritório: quadro do grupo familiar.
- **Pensão por morte.** Cliente: certidão de óbito, documentos do falecido, prova do casamento ou da união, certidões dos filhos. Escritório: quadro de dependentes e da prova por data.

## 6. Onde pesquisar

- Meu INSS: meu.inss.gov.br (requerimento, CNIS, processo administrativo)
- STJ, repetitivos: processo.stj.jus.br/repetitivos
- STF, repercussão geral: portal.stf.jus.br `[conferir]`
- TNU: cjf.jus.br, Corregedoria da Justiça Federal, Turma Nacional de Uniformização (temas representativos e regimento)
- TRFs: trf1.jus.br, trf2.jus.br, web.trf3.jus.br, trf4.jus.br, trf5.jus.br, portal.trf6.jus.br `[conferir]`
- Legislação: planalto.gov.br `[conferir]`
- Intimações: comunica.pje.jus.br

## 7. Como se escreve nesta área

- Nomes pós-reforma: auxílio por incapacidade temporária, aposentadoria por incapacidade permanente. Cite espécie e NB.
- Vocabulário: DER, DIB, DII, DCB, RMI, carência, qualidade de segurado, período de graça.
- O JEF lê rápido: peça curta, pedido certo (espécie, DIB, DCB, tutela), períodos em tabela, documento pelo evento.
- Fato médico vem do laudo, com data. Não escreva diagnóstico que o laudo não traz.

## 8. Onde a IA mais erra

- Regra de vara no JEF: dobro do INSS, reexame, recurso de interlocutória (Lei 10.259, arts. 5º, 9º, 13).
- Acidentário na Justiça Federal; delegada sem conferir os 70 km.
- Regra superada: vida toda, conversão de especial depois de 13/11/2019, decadência no indeferimento, Tema 1066 do STF (cancelado).
- Transição da EC 103 muda a cada ano (arts. 15 e 16): diga a regra e o ano, e o advogado confere.
- Cota da pensão: 100% do art. 75 da Lei 8.213 não vale; vale a EC 103, art. 23.
- **Cálculo:** tempo de contribuição, pedágio, RMI, atrasados, renda per capita e valor da causa são do advogado ou do sistema de cálculo. A IA lista o que entra.
- Atestmed: a regra de 30 dias está nos §§11-F a 11-I do art. 60 (Lei 15.265/2025), com exceção por ato do Executivo; confira a portaria vigente `[conferir]`.
- Dado sensível: CID, laudo, criança, renda da família. Iniciais na ficha, laudo anonimizado, nada disso no perfil.

## 9. Como as outras skills usam este módulo

- `ficha-do-caso`: NB, espécie, DER, DIB, DII, DCB, qualidade de segurado, carência, pendências do CNIS, fase administrativa.
- `peca-a-partir-da-ficha`: seção 3; art. 129-A na inicial por incapacidade.
- `gestao-de-prazos-e-intimacoes`: seção 2; JEF em úteis e sem dobro.
- `pesquisa-jurisprudencial`: STF, STJ, TNU e o TRF da região.
- `analise-de-risco-e-prognostico`: laudo, prova material, Tema 1124, devolução de tutela.
- `documentos-procuracao-e-honorarios`: seção 5; poderes para requerer no INSS, renunciar ao excedente e receber.
- `preparacao-de-audiencia`: JEF, até 3 testemunhas (Lei 9.099, art. 34); rural e união estável se decidem ali.
- `triagem-de-lead-e-caso-novo`: pediu no INSS? Tem a carta? Contribuiu até quando? Tem laudo com data? Mora perto de vara federal?

*Módulo revisado em 20/10/2026 (v2.2) com Lei 8.213, EC 103, Lei 8.742, Decreto 3.048 e RICRPS (Planalto e gov.br), Leis 15.108/2025, 15.265/2025 e 15.415/2026, BNP/CNJ de 19/10/2026 e a conferência do pacote Previdenciário do Pro. INs do INSS de 2026, portarias do Atestmed, tabela de duração da pensão (número da portaria) e Súmulas da TNU (CJF não abriu) ficaram `[conferir]`.*
