# Advoclaude Pro: Gestão do escritório

Métodos por peça. Cada seção complementa peca-a-partir-da-ficha (arquivos de conhecimento do Kit). Gerado dos SKILL.md em 21/10/2026.

---

## Gestão do escritório

### Aviso de uso de IA ao cliente (`aviso-de-uso-de-ia-ao-cliente`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha, o método plano-antes-de-gerar e o método anonimizacao-para-ia. Abra o `ESTILO-DO-ESCRITORIO.md` e a `FICHA-DO-CASO.md`.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se o advogado não usa IA no caso, pare: não há o que avisar. Entrega em .docx, como a `documentos-procuracao-e-honorarios`.

#### O que a Recomendação pede (item 4, conferido no PDF do acórdão do Conselho Pleno em 21/10/2026)

A Recomendação CFOAB 001/2024 (Conselho Pleno, 11/11/2024) é **recomendação, não norma**: orienta, e o advogado responde pelo que fizer. O item 4 diz:
- **4.1.1:** quem usar IA na prestação do serviço deve, **antes de começar a usar**, formalizar a intenção ao cliente.
- **4.2.1:** a formalização é por **documento escrito, em linguagem clara e acessível**, explicando cinco pontos: (I) o propósito do uso na defesa dos direitos do cliente; (II) os benefícios e as limitações da tecnologia aplicada ao caso; (III) os riscos, como a precisão das informações geradas e a exposição de dados; (IV) as medidas de segurança e confidencialidade; (V) a possibilidade de revisão humana dos resultados.
- **4.3:** a comunicação com o cliente não pode ser feita só a partir de conteúdo gerado por IA; o cliente pode pedir pra falar com um ser humano.
- **4.3.1:** consentimento **informado e explícito, por assinatura** do documento.
- **4.3.2:** se o cliente não consentir, o advogado respeita e informa as outras abordagens, tecnológicas ou manuais.
- **4.3.3:** o documento fica **arquivado até o fim da prestação de serviços**, acessível pra consulta e auditoria.
- **4.3.4:** vale em **qualquer fase** em que o advogado decida usar IA (peças, pesquisa, análise de documentos, outra atividade).

Base geral: o advogado informa o cliente de modo claro e inequívoco sobre riscos e consequências (CED, art. 9º); o contrato diz com clareza e precisão o objeto e a extensão do patrocínio (CED, art. 48, §1º); sigilo (CED, arts. 35 e 36); LGPD (art. 6º, finalidade e necessidade; art. 9º, informação clara; art. 11, dado sensível; art. 33, transferência internacional).

#### Antes (pergunte, no máximo 5)

1. Quais ferramentas o escritório usa (nome e plano: Claude, ChatGPT, outra) e pra quê (pesquisa, rascunho, organização de documentos, transcrição)?
2. O plano usado permite desligar o uso dos dados pra treinamento? O advogado já conferiu? (CFOAB 2.2: diligência na escolha do fornecedor.) Se não souber: `[conferir configuração da conta]`.
3. O provedor trata dados fora do Brasil? (LGPD, art. 33.) Se não souber: `[conferir política do provedor]`.
4. Que dados do cliente entram: só fatos anonimizados, ou documentos com nome, saúde, financeiro? (Dado sensível, como laudo com CID: aviso na versão B, com consentimento específico; sem dado sensível: versão A.)
5. Algum caso em segredo de justiça? Aí o aviso pergunta se o cliente quer IA mesmo assim, e a ferramenta só recebe o anonimizado.

#### O documento (modelo)

```
AVISO DE USO DE INTELIGÊNCIA ARTIFICIAL E CONSENTIMENTO
Cliente: [nome] · Caso: [apelido] · Advogado(a): [nome, OAB] · Data: [dd/mm/aaaa]

Antes de começar o trabalho, queremos explicar, em linguagem simples, como o escritório pode usar ferramentas de inteligência artificial (IA) no seu caso.

1. Para que usamos. [Ex.: organizar documentos, pesquisar, preparar rascunhos de textos.] O objetivo é trabalhar com mais rapidez e organização na defesa dos seus direitos.

2. O que a IA ajuda e o que ela não faz. Ajuda a ganhar tempo e a organizar informações. Não decide nada, não substitui o advogado e não dá a palavra final. Pode errar, inventar informação e deixar passar detalhes do seu caso.

3. Riscos. A IA pode dar respostas imprecisas. E o que é colocado em uma ferramenta pode ficar exposto se ela não for segura. [Se houver: algumas ferramentas guardam dados em servidores fora do Brasil.]

4. Como protegemos você. Usamos só o necessário; tiramos nomes e dados que identifiquem você sempre que possível; escolhemos ferramentas [com a opção de não usar seus dados para treinamento: conferido em ___]; não colocamos [CPF, endereço, dados de crianças] em ferramenta de IA. Seu sigilo continua protegido, como sempre.
   **Versão A (sem dado sensível):** acrescente "Também não colocamos dados de saúde nem outros dados sensíveis."
   **Versão B (o caso precisa de dado sensível: laudo, CID, exame, dado de saúde):** em vez da frase acima, escreva "Para o seu caso, podemos colocar [laudos e exames] na ferramenta, porque o trabalho depende deles. São dados sensíveis, e por isso pedimos a sua autorização específica, separada, logo abaixo. Mesmo assim, tiramos o seu nome e o que identificar você sempre que der."

5. Revisão pelo advogado. Tudo o que a IA produzir é lido, corrigido e aprovado por [nome do advogado], que continua responsável pelo seu caso. Nenhum recado seu será respondido só por IA. Se você preferir falar com uma pessoa, é só pedir.

Você decide. Se você não concordar, nós respeitamos e seguimos o trabalho por outros meios, sem uso de IA [descrever: pesquisa e redação manuais]. Isso não muda o nosso compromisso com o seu caso.

[ ] Li e entendi este aviso e AUTORIZO o uso de IA nos termos acima.
[ ] NÃO autorizo o uso de IA no meu caso.
[ ] Autorizo que ferramentas que guardam dados fora do Brasil sejam usadas, ciente disso. (só se aplicável)

Local e data · Assinatura do cliente · Assinatura do advogado

(Só na versão B, em campo à parte, com título em destaque:)
CONSENTIMENTO ESPECÍFICO PARA DADOS SENSÍVEIS
Autorizo o escritório a colocar em ferramenta de inteligência artificial os meus dados de saúde [laudos, exames, CID], somente para [finalidade: organizar e analisar os documentos do meu caso]. Sei que posso retirar esta autorização quando quiser.
[ ] Autorizo   [ ] Não autorizo      Assinatura do cliente (específica para este campo): ________  Data: ____
```

#### Regras

- **Antes de usar:** o aviso é assinado antes da primeira vez que a IA tocar o caso (4.1.1). Já usou? Diga ao advogado que a formalização é prévia e que, daqui pra frente, é preciso regularizar.
- **Linguagem clara:** frase curta, sem "LLM", "tokens", "modelo de linguagem". Troque por "ferramenta de inteligência artificial".
- **Os cinco pontos têm que estar todos.** Faltando um, o aviso não cumpre 4.2.1.
- **Específico do caso (4.2.1, II):** preencha pra que o escritório de fato usa. Aviso genérico não vale.
- **Recusa:** se o cliente marcar "não autorizo", não use IA no caso. Registre na ficha e diga quais meios alternativos serão usados (4.3.2). A recusa não muda honorários nem prazo de atendimento, salvo o que o advogado combinar por escrito.
- **Arquivo:** guarde o aviso assinado na pasta do caso (`documentos-do-cliente/` ou `autos/`), com a data no nome (`2026-10-20 aviso-ia assinado.pdf`), até o fim da prestação de serviços (4.3.3). Na `fechamento-do-caso`, ele sai com o caso.
- **Nova ferramenta ou nova finalidade:** atualize o aviso e colha nova assinatura (4.3.4).
- **Dado sensível (saúde, laudo com CID, biometria, dado de criança etc.):** o consentimento tem de ser **específico e destacado, para finalidades específicas** (LGPD, art. 11, I; por escrito, em cláusula destacada, art. 8º, §1º). Use a versão B e o campo de assinatura próprio: não vale o "autorizo" geral. Se o caso precisa do laudo, **não prometa** "não colocamos dados de saúde": a promessa seria falsa. Se o cliente recusar só o campo sensível, o laudo não vai à ferramenta, e o resto do aviso segue valendo. Pergunte ao advogado, na pergunta 4, qual versão cabe.
- **Segredo de justiça:** diga no aviso o que não vai pra ferramenta (só o anonimizado).
- **Assinatura digital** vale; o advogado escolhe o meio. Menor ou incapaz: assina o responsável.
- O contrato de honorários traz só uma cláusula que remete a este aviso (`contrato-de-honorarios-por-area`).

#### Saída

O aviso em .docx, com `[DEFINIR]` onde o advogado não informou a ferramenta, a finalidade ou a política do provedor. No chat, até 8 linhas: o que foi preenchido, o que ficou `[DEFINIR]` e `[conferir]`, e o lembrete de colher a assinatura **antes** do uso.

#### Não fazer

- Prometer que a ferramenta é "100% segura" ou que "nenhum dado sai do computador".
- Pôr dado do cliente no próprio aviso além do nome e do apelido do caso.
- Usar o aviso como cláusula escondida no meio do contrato: é documento separado, que o cliente lê e assina.
- Dizer que a Recomendação é obrigatória: é recomendação do Conselho Federal; a conformidade é do advogado, que responde pelo que fizer.

*Referências conferidas em 21/10/2026 (Recomendação CFOAB 001/2024, texto final anexo ao acórdão do Conselho Pleno de 11/11/2024 na Proposição 49.0000.2024.007325-9/COP, PDF publicado pelo Migalhas, itens 2.2, 2.4, 4.1.1, 4.2.1, 4.3 e 4.3.1 a 4.3.4, 5.1; CED, arts. 9º, 35, 36 e 48, PDF da OAB-SE; LGPD, arts. 6º, 8º, §1º, 9º, 11, I, e 33, Planalto via proxy). A Recomendação será revisada periodicamente (item 5.1): confira a versão vigente.*

### Cobrança de honorários atrasados (`cobranca-de-honorarios-atrasados`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha, o método plano-antes-de-gerar e o método documentos-procuracao-e-honorarios. Abra o `ESTILO-DO-ESCRITORIO.md` e o contrato de honorários do cliente.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Sem contrato nem registro do que foi combinado, pare e pergunte antes de escrever cobrança. Se o advogado quer cobrar pelo cliente que **deve documentos**, não é esta skill.

#### Antes (pergunte, no máximo 5)

1. O contrato: valor, parcelas, vencimentos, juros e multa previstos, assinado por quem e quando.
2. O que está em aberto, desde quando e o que já foi tentado (mensagens, ligações).
3. O processo ainda corre? Há prazo ou audiência pela frente? (Não se pressiona cliente deixando prazo cair.)
4. Há valor a levantar ou destacar nos autos que cubra os honorários?
5. O relacionamento: o advogado quer manter o cliente ou encerrar?

#### ALERTA de prescrição

A ação de cobrança de honorários prescreve em **cinco anos**, contados do vencimento do contrato, do trânsito em julgado da decisão que fixou os honorários, da conclusão do serviço extrajudicial, da desistência ou transação, ou da renúncia ou revogação do mandato (Lei 8.906/1994, art. 25, I a V). Mostre a conta sugerida: **termo inicial provável, regra, resultado provável**, marcada como sugestão a conferir. Abra a resposta com **ALERTA** se a prescrição pode estar consumada ou vence em até 5 dias úteis. A prestação de contas prescreve em cinco anos também (art. 25-A).

#### Régua de cobrança (ajuste os prazos ao contrato; o advogado decide cada passo)

1. **Lembrete (até 3 dias de atraso):** tom de quem presume esquecimento. Valor, data, forma de pagar. Não use a palavra "atraso" nem "inadimplência".
2. **Segunda mensagem (7 a 10 dias):** pergunta se houve problema e **oferece conversar** sobre nova data ou parcelamento, que vira aditivo por escrito. Desconto na dívida é decisão do advogado: a skill não oferece.
3. **Terceira mensagem (20 a 30 dias):** formal, por e-mail e WhatsApp. Cita a cláusula, o valor em aberto, um prazo curto e claro pra regularizar (ele diz quantos dias) e o que o contrato prevê depois. Sem ameaça fora do contrato.
4. **Notificação extrajudicial:** carta ou e-mail com comprovante de envio (cartório, se o advogado quiser): contrato, parcelas em aberto, prazo, e aviso de que, não havendo acordo, o escritório tomará as providências cabíveis, entre elas a renúncia ao mandato (abaixo) e a cobrança.

#### Regras éticas da cobrança

- **Sem constrangimento e sem expor o cliente:** nada de cobrança em grupo, rede social, status, mensagem a familiar, colega ou empregador, nem "lista de devedores". Dignidade e discrição são dever do advogado (CED, art. 2º, parágrafo único, I e II).
- **Sem pressionar com o processo:** não deixe o prazo cair nem suspenda ato urgente pra forçar o pagamento. Abandonar a causa sem justo motivo, ou antes de dez dias da comunicação da renúncia, é infração (Lei 8.906, art. 34, XI). Se for sair, renuncie: o advogado não deve deixar a causa ao desamparo (CED, art. 15) e continua representando o cliente nos dez dias seguintes (Lei 8.906, art. 5º, §3º), comprovando nos autos a comunicação (CPC, art. 112).
- **Renúncia antes de cobrar:** havendo necessidade de arbitramento ou cobrança judicial, o advogado deve renunciar previamente ao mandato recebido do cliente em débito (CED, art. 54). A renúncia não menciona o motivo (CED, art. 16).
- **Sigilo:** o que o cliente contou em confiança não é arma de cobrança. Na ação, só o necessário pra provar o crédito; a revelação cede por justa causa, como na defesa própria (CED, art. 37), e só no estritamente necessário.
- **Veículo de pagamento:** honorários podem ser recebidos por cartão de crédito mediante credenciamento (CED, art. 53). Compensar valores do cliente com os honorários só se o contrato autorizar ou houver autorização especial assinada (CED, art. 48, §2º).
- **Título de crédito:** o crédito de honorários **não autoriza** duplicata nem outro título mercantil; cabe fatura, se o cliente pedir, e ela **não** pode ser protestada. Cheque ou nota promissória emitidos pelo cliente podem ser protestados depois de frustrada a tentativa amigável (CED, art. 52 e parágrafo único).
- **Horário e frequência:** dias úteis, horário comercial, e só os passos da régua. Mensagem a mais é pressão.

#### Quando ajuizar

Ajuize quando: o contrato escrito está firmado (o contrato escrito que estipula honorários é título executivo, Lei 8.906, art. 24, caput, na redação da Lei 15.472/2026; o Estatuto não exige testemunhas, mas `[conferir a jurisprudência do tribunal sobre contrato sem duas testemunhas]`); a tentativa amigável está **documentada**; a renúncia foi feita; a prescrição está longe; o valor justifica custas e tempo. A execução pode correr nos próprios autos, se for o caso (art. 24, §1º). O crédito é de natureza alimentar (art. 22, §9º, incluído pela Lei 15.472/2026). Sem título executivo, caberá ação própria `[conferir via adequada e competência]`. A conta do débito (principal, juros e multa) é do advogado. A skill lista o que entra: juros e correção só se convencionados; sem convenção, a taxa legal e o IPCA (CC, arts. 406 e 389, parágrafo único, Lei 14.905/2024); a multa contratual não passa do valor da obrigação principal (CC, art. 412), e o juiz reduz a excessiva (art. 413).

#### Saída

```
ALERTA: [prescrição ou prazo, se houver]
DIAGNÓSTICO: contrato · em aberto · atraso · o que já foi tentado · prescrição (conta sugerida)
MENSAGEM 1 · [WhatsApp] ...
MENSAGEM 2 · [WhatsApp] ...
MENSAGEM 3 · [e-mail + WhatsApp] ...
NOTIFICAÇÃO EXTRAJUDICIAL (minuta, 1 página)
VIAS: renegociar (aditivo) · notificação · renúncia (CED, art. 54) · protesto de cheque/NP · execução ou ação · destaque nos autos
CONFERIR: [o que depende do advogado]
```

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "cobrança de honorários advocatícios contratuais, título executivo e protesto" (súmula e precedente qualificado primeiro) e `buscar_em_todos`. Cite só o que voltou com link, e passe cada citação em `verificar_citacao`. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: cobrança de honorários, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

#### Não fazer

- Ameaçar com o que o advogado não pode ou não vai fazer (denúncia, perda de prazo, exposição).
- Cobrar pelo cliente com mensagem coletiva.
- Oferecer desconto ou prazo novo por conta própria.
- Calcular o débito. Mostre o que entra e deixe o número pro advogado.

*Referências conferidas em 21/10/2026 (CED, arts. 2º, 12, 15, 16, 37, 48, 52, 53 e 54, PDF da OAB-SE; Lei 8.906, arts. 5º, 22, 24, 25, 25-A e 34, texto consolidado da Câmara, já com a Lei 15.472/2026 no art. 22, §9º, e no art. 24, caput; CPC, art. 112, e Código Civil, arts. 389, 406, 412 e 413, pelo Planalto via proxy).*

### Contrato de honorários por área (`contrato-de-honorarios-por-area`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha, o método plano-antes-de-gerar e o método documentos-procuracao-e-honorarios. Abra o `ESTILO-DO-ESCRITORIO.md`, o modelo de contrato do escritório em `MODELOS/` e o módulo `area-…`. Quando o escritório tiver modelo, a estrutura dele manda e esta lista vira conferência do que não pode faltar.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Sem proposta aceita (valores, modelo), não bloqueie: gere o contrato com `[DEFINIR: valor/percentual/forma]`, como o Kit, diga em uma linha o que falta e sugira a `proposta-de-honorarios` pra fechar esses pontos. Entrega em .docx, como a `documentos-procuracao-e-honorarios`.

#### Antes do contrato (pergunte, no máximo 5)

1. A área e o modelo de cobrança que o cliente aceitou (fixo, fase, êxito, misto).
2. Quem contrata: só o cliente, ou há terceiro pagador (pai, empresa)?
3. Até onde vai o patrocínio (graus, execução, recursos) e se o advogado pode transigir.
4. Quem adianta custas e despesas.
5. O escritório usa IA neste caso? (decide se entra a cláusula 5 abaixo.)

#### Cláusulas em todo contrato (CED, art. 48)

O contrato diz com clareza e precisão: **objeto, honorários ajustados, forma de pagamento, extensão do patrocínio** (todos os atos do processo ou um grau de jurisdição) e se o advogado pode dispor sobre a hipótese de transação ou acordo (art. 48, §1º). Mais:

- **Custas e despesas:** quem paga; se o advogado antecipar, pode reter o valor atualizado na prestação de contas, mediante comprovação (art. 48, §3º).
- **Compensação de créditos** do cliente com os honorários: só se o contrato autorizar ou houver autorização especial assinada (art. 48, §2º).
- **Piso:** o valor respeita o mínimo da tabela da seccional (art. 48, §6º) `[conferir tabela vigente]`.
- **Acordo não reduz honorários** (art. 48, §5º). Se o cliente fizer acordo com a parte contrária sem o advogado, isso não prejudica os honorários (Lei 8.906, art. 24, §4º).
- **Sucumbência:** pertence ao advogado (Lei 8.906, art. 23; CPC, art. 85, §14). Diga como se soma ou se abate do êxito, respeitado o limite do art. 50 do CED (êxito mais sucumbência não superam as vantagens do cliente).
- **Destaque (Lei 8.906, art. 22, §4º):** o escritório junta o contrato aos autos **antes** de expedido o mandado de levantamento ou o precatório, e o juiz determina o pagamento direto ao advogado, por dedução do valor do cliente, salvo prova de que este já pagou. Inclua cláusula de que o cliente autoriza a juntada. Em RPV ou precatório contra a Fazenda, o contrato precisa estar nos autos antes da requisição; a regra do tribunal vale `[conferir a resolução do CJF ou do TJ]`.
- **Atraso:** juros e correção só se convencionados; sem convenção, aplica-se a taxa legal e o IPCA (CC, arts. 406 e 389, parágrafo único, na redação da Lei 14.905/2024). Multa moratória não passa do valor da obrigação principal (CC, art. 412).

#### Cláusulas por área

**Família**
- Honorários por **ato ou fase**, com valor pro caso se passar de consensual a litigioso (diga o gatilho). Acordo não reduz (art. 48, §5º).
- Alimentos: prefira fixo + sucumbência. Percentual sobre pensão do filho exige cautela ética `[conferir Tribunal de Ética da seccional]`; o limite do art. 50, §2º, é moderação e razoabilidade.
- Partilha: participação em bens só excepcional e em instrumento (art. 50, §1º).
- Um só cliente por contrato. Cônjuges ou companheiros como contratantes dos dois lados é conflito: art. 20 do CED manda optar por um e renunciar aos demais.

**Trabalhista com êxito**
- Percentual sobre o **proveito econômico líquido recebido** pelo cliente; diga se deduz contribuição previdenciária, imposto de renda e custas. Em acordo parcelado, os honorários vencem proporcionais a cada parcela que o cliente receber.
- Sucumbência: pertence ao advogado e é distinta do contratado; diga se soma. Risco de condenação do cliente em honorários da parte contrária ou perícia: cláusula diz que é do cliente `[conferir CLT, art. 791-A, e o Pacote Trabalhista]`.
- Destaque pelo art. 22, §4º, antes do levantamento.

**Previdenciário com retroativo**
- Defina "atrasados": parcelas do DIB até a implantação. O percentual incide só sobre elas, ou também sobre um número de prestações vincendas (permitido, com moderação, CED art. 50, §2º). Diga qual. Percentual alto sobre atrasados é revisto por alguns tribunais `[conferir limite na tabela da seccional e na jurisprudência do TRF]`.
- Se a ação judicial só vier depois do administrativo, diga se o contrato cobre as duas fases.
- Destaque na RPV/precatório: contrato nos autos antes da requisição (art. 22, §4º). Dedução direta no pagamento administrativo pelo INSS: `[conferir a norma do INSS]`.
- Renda per capita, RMI e atrasados: a cláusula não traz número; o cálculo é do advogado.

**Criminal por fase**
- Um valor por fase: inquérito ou flagrante; resposta e instrução; alegações finais e sentença; apelação; tribunais superiores; execução penal. O contrato diz o grau de jurisdição que cobre (art. 48, §1º).
- Não ligue o pagamento a absolvição, liberdade ou pena `[conferir Tribunal de Ética da seccional]`; não prometa resultado.
- **Terceiro pagador:** o cliente é o acusado. O sigilo vale contra o pagador (CED, arts. 35 e 36): cláusula diz que o advogado não repassa informação do caso a quem paga sem autorização do cliente.
- Origem dos recursos: o contrato pede declaração do pagador de que são lícitos `[conferir normas sobre origem de honorários e prevenção à lavagem]`.
- Bloqueio universal do patrimônio do cliente: o Estatuto garante ao advogado a liberação de até 20% dos bens bloqueados pra honorários e reembolso de gastos, com a ressalva do caput pras causas de drogas; o pedido corre em autos apartados, sob sigilo, com o contrato (Lei 8.906, art. 24-A, caput e §1º, incluído pela Lei 14.365/2022). Guarde o contrato pra esse pedido.

#### 5. Cláusula de uso de inteligência artificial

Entra se o escritório usa IA no caso. A Recomendação 001/2024 do Conselho Federal da OAB (recomendação, não norma; item 4.1.1) pede formalização **escrita, antes do uso**, com os cinco pontos do item 4.2.1 e consentimento assinado (4.3.1). Isso é um **documento separado**: use a skill `aviso-de-uso-de-ia-ao-cliente` (modelo de aviso e consentimento). No contrato vai só esta cláusula de remissão:

> O escritório poderá usar ferramentas de inteligência artificial como apoio ao trabalho, nos termos do AVISO DE USO DE INTELIGÊNCIA ARTIFICIAL E CONSENTIMENTO, documento separado que o CLIENTE [assinou em __/__/____ | deve assinar antes do início do uso]. Todo material é revisado pelo advogado, que responde pelo trabalho. Sem a autorização do cliente, o escritório não usará IA no caso. A recusa não altera os honorários, salvo o que as partes ajustarem por escrito.

Não use a cláusula no lugar do aviso. Não entra desconto nem acréscimo de honorários por causa da IA, salvo decisão do advogado.

#### 6. Rescisão, renúncia, revogação e substabelecimento

- **Revogação pelo cliente:** não o desobriga dos honorários contratados, nem tira do advogado o direito à sucumbência proporcional ao serviço prestado (CED, art. 17). O distrato não é renúncia aos honorários proporcionais, inclusive de êxito posterior (Lei 8.906, art. 24, §§5º e 6º).
- **Renúncia pelo advogado:** sem mencionar o motivo (CED, art. 16); o advogado continua representando o mandante nos dez dias seguintes à notificação (Lei 8.906, art. 5º, §3º; CPC, art. 112, §1º), e deve comprovar nos autos que comunicou o cliente (CPC, art. 112, caput). A renúncia não exclui responsabilidade por danos (CED, art. 16, §1º).
- **Substabelecimento:** com reserva de poderes é ato pessoal do advogado da causa; sem reserva exige o prévio e inequívoco conhecimento do cliente; o substabelecido com reserva ajusta antes seus honorários (CED, art. 26). O substabelecido com reserva não cobra honorários sem a intervenção de quem substabeleceu, salvo contrato próprio com o cliente (Lei 8.906, art. 26). A sucumbência se reparte pela atuação de cada um (CED, art. 51, §1º).
- **Fim do mandato:** a conclusão ou desistência obriga a devolver bens, valores e documentos e a prestar contas (CED, art. 12), o que a `fechamento-do-caso` cumpre.

#### Saída

O contrato em .docx, cláusulas numeradas, `[DEFINIR: ...]` onde o advogado não informou valor, percentual, foro e prazos. Resumo de até 8 linhas no chat: modelo usado, o que ficou `[DEFINIR]`, o que ficou `[conferir]`. Dados pessoais só no documento.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "honorários contratuais, destaque e quota litis" (súmula e precedente qualificado primeiro) e `buscar_em_todos`. Cite só o que voltou com link, e passe cada citação em `verificar_citacao`. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: honorários contratuais, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes.

#### Não fazer

- Pôr número de tabela da OAB ou percentual "padrão" sem o advogado informar.
- Deixar a cláusula de IA como padrão sem o advogado confirmar que usa IA no caso.
- Cláusula de renúncia antecipada aos honorários de sucumbência: o direito é do advogado.
- Cobrar o cliente por honorários da parte contrária como se fossem do escritório.

*Referências conferidas em 21/10/2026 (CED, arts. 12, 16, 17, 20, 26, 35, 36, 48, 50 e 51, PDF da OAB-SE; Lei 8.906, arts. 5º, 22, 23, 24, 24-A e 26, texto consolidado da Câmara, que já traz a Lei 15.472/2026 no art. 22, §9º, e no art. 24, caput; CPC, arts. 85 e 112, e Código Civil, arts. 389, 406, 412 e 413, pelo Planalto via proxy; Recomendação CFOAB 001/2024, PDF do acórdão de 11/11/2024). Tabela da seccional, resolução do CJF e normas do INSS: `[conferir]`.*

### Da intimação à providência (`da-intimacao-a-providencia`)

Antes, leia nos arquivos de conhecimento do projeto o método gestao-de-prazos-e-intimacoes, o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Abra o perfil do escritório (cidade, UF, tribunais, equipe), o `ESTILO-DO-ESCRITORIO.md` e o módulo `area-…` do caso.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual (o expediente de 1 página sai pela `peca-a-partir-da-ficha`, sem plano: pedido de expediente recebe a minuta direto, e o advogado a lê antes de protocolar). Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se o texto vier só com "fica intimado do documento X", não adivinhe: "abrir o processo pra classificar".

#### Quando é esta e quando é a outra

- **Esta:** lote de intimações misturadas, e o advogado quer sair com a **providência** e, se for expediente, com a **peça pronta**.
- **`gestao-de-prazos-e-intimacoes` (Kit):** triagem do dia, `PENDENCIAS.md` e rascunho sob pedido.
- **`prazos-da-semana`:** a semana toda, com responsável, margem e carga por pessoa.

#### Primeira mensagem: ALERTA e conta, antes de tudo

Se o advogado já colou intimações, a **primeira mensagem** traz o ALERTA (se houver) e a conta sugerida de cada uma, **antes de qualquer pergunta ou plano**. O plano ganha a linha "Prazo" (o que vence primeiro e a data sugerida). As perguntas abaixo vêm depois, só pro que a conta não resolveu. Falta dado (data de hoje, lado, meio)? Faça a conta com o que há, marque `[conferir: <o quê>]` e pergunte em seguida.

**Regra de contagem incerta** (úteis × corridos, transição de lei, feriado local, rito duvidoso): conte **os dois cenários**, mostre as duas datas, **use a mais curta pra priorizar** e marque `[conferir]`. O ALERTA usa a data mais curta.

#### Antes (pergunte, no máximo 5)

1. Qual a data de hoje e o fuso de feriados: cidade, UF e tribunal?
2. De que lado o escritório está em cada processo? (Se a publicação não deixar claro.)
3. Por qual meio chegou cada uma: DJEN, portal do tribunal (PJe, eproc), Domicílio Judicial Eletrônico, e-mail? Já foi consultada no portal e quando?
4. Quem da equipe pega o quê?
5. Há processo em segredo de justiça no lote? (Iniciais, sem detalhe.)

#### Por intimação

1. **Copie:** processo, tribunal, órgão, data de disponibilização, meio.
2. **Ato:** despacho de mero expediente (só ciência), decisão interlocutória, sentença, acórdão, intimação pra manifestar, juntar, pagar ou comparecer, audiência, citação.
3. **O que se pede, e de quem.** Se o prazo é da **parte contrária** (por exemplo, citação do réu), não é prazo do escritório: "acompanhar".
4. **Meio e regra** (veja abaixo).
5. **Conta sugerida**, em linhas.
6. **Balde.**
7. **Providência, responsável, skill que abre.**

#### Baldes (cada intimação cai em um)

1. **Hoje ou amanhã** (inclui "consultar o portal hoje").
2. **Esta semana.**
3. **Mais adiante, com data.**
4. **Sem prazo** (providência sem data).
5. **Só ciência** (despacho de expediente, juntada de AR, ato sem providência).

Prazo longo não é prazo leve: sentença fica em "mais adiante" com a marca **FATAL** se for prazo de recurso.

#### A conta (sempre sugestão a conferir)

Mostre cada passo, nesta ordem:
1. **Disponibilização:** dd/mm e dia da semana.
2. **Publicação:** o primeiro dia útil seguinte à disponibilização (Lei 11.419/2006, art. 4º, §3º; CPC, art. 224, §2º).
3. **Início:** o primeiro dia útil seguinte à publicação (Lei 11.419, art. 4º, §4º; CPC, art. 224, §3º). **O dia do início conta como dia 1**; a publicação não conta (CPC, art. 224, caput). Ex.: disponibilização na sexta, publicação na segunda, início na terça = dia 1; com 5 dias úteis, terça a segunda, vence na segunda seguinte (sugerido).
4. **Dias:** os da publicação, ou os da lei, com o artigo; sem prazo fixado por lei nem pelo juiz, cinco dias (CPC, art. 218, §3º); senão `[conferir prazo e artigo]`.
5. **Úteis ou corridos:** úteis nos prazos processuais do CPC (art. 219, caput e parágrafo único); trabalhista e penal seguem o módulo da área (penal é corrido).
6. **Dias pulados:** sábado, domingo, feriado nacional; recesso de 20/12 a 20/01 suspende o prazo (CPC, art. 220); feriado local, ponto facultativo e suspensão do tribunal viram **aviso**, não conta. Se o último dia cair em dia sem expediente ou com indisponibilidade do sistema, passa ao primeiro dia útil seguinte (art. 224, §1º). Em prazo de recurso, o feriado local tem de ser **comprovado na interposição**; se não for, o relator manda sanar (art. 1.003, §6º, na redação da Lei 14.939/2024): anote o documento que prova o feriado.
7. **Dobra, só se couber:** Fazenda Pública (art. 183) e Defensoria (art. 186) contam da **intimação pessoal**, não da publicação no DJEN; Ministério Público (art. 180) também. A intimação eletrônica pelo sistema ou pelo Domicílio vale como pessoal (Lei 11.419, art. 5º, §6º, e art. 9º, §1º): o prazo do ente nasce da ciência no sistema. **Não dobra:** (a) lei que fixa expressamente prazo próprio pro ente (art. 183, §2º) ou pra Defensoria (art. 186, §4º); (b) juizados especiais: sem prazo diferenciado (Lei 10.259, art. 9º; Lei 12.153, art. 7º); (c) escritório contratado pelo ente, sem procuradoria própria: a prerrogativa é da advocacia pública, então não conte dobra nem intimação pessoal e marque `[conferir jurisprudência]` (não achei precedente); (d) litisconsortes com advogados de escritórios diferentes têm dobro (art. 229), **mas não em autos eletrônicos** (§2º), e cessa se, havendo só dois réus, um deles contesta (§1º). Na dúvida, conte os dois cenários.
8. **Resultado provável:** "vence (sugerido) dd/mm". Nunca "vence dd/mm" sozinho.

**ALERTA no topo da resposta** (régua única): prazo processual ou contratual que vence em **5 dias úteis ou menos**; decadência ou prescrição a 60 dias ou menos, ou janela já aberta; conta que não fecha (disponibilização faltando, meio duvidoso). Prazo que **já venceu** vai no topo como VENCIDO. Vencimento em dia sem expediente: mostre a prorrogação legal e, pra planejar, o dia útil anterior. O alerta lista processo, ato e vencimento sugerido.

#### DJEN, Domicílio ou só portal: o meio muda a conta

- **DJEN (publicação):** conta acima. Quando a lei não exige vista ou intimação pessoal, o prazo do advogado conta da publicação no DJEN, e intimação ou comunicação **concomitante por outro meio** (painel do PJe ou eproc, push, e-mail) tem **valor meramente informacional** (Res. CNJ 455/2022, art. 11, §3º, na redação da Res. 569/2024). O DJEN substituiu os diários dos tribunais; a contagem exclusiva por DJEN e Domicílio vale desde 16/05/2025 segundo comunicado do CNJ e atos de tribunais `[conferir a data de adesão do seu tribunal]`.
- **Domicílio Judicial Eletrônico:** é só pra citação eletrônica e pra comunicação que exija vista, ciência ou intimação **pessoal** (Res. 455, art. 18): parte, ente público, perito. Sem consulta em **dez dias corridos** do envio, considera-se realizada no fim desse prazo (Res. 455, art. 20, §4º; Lei 11.419, art. 5º, §3º); citação de pessoa jurídica de direito público segue a mesma regra dos dez dias corridos (art. 20, §3º-A), e, consultada no prazo, a resposta conta do quinto dia útil após a confirmação (CPC, art. 231, IX). Prazo do escritório raramente nasce aqui: é "meio diferente: conte à parte".
- **Intimação só pelo sistema, sem publicação no DJEN** (tribunal que intima o advogado pelo portal): considera-se feita no dia em que o intimado **consulta** o teor, com a consulta certificada nos autos (Lei 11.419, art. 5º, §1º); consulta em dia não útil vale no primeiro dia útil seguinte (§2º); sem consulta em dez dias corridos do envio, considera-se feita no fim desse prazo (§3º). O dia do começo é o dia útil seguinte à consulta ou ao fim dos dez dias (CPC, art. 231, V); como o art. 224, caput, exclui o dia do começo, há duas leituras sobre qual é o dia 1: conte as duas, priorize a mais curta e marque `[conferir a prática do tribunal]`. Antes de aplicar esta regra, confira se o mesmo ato saiu no DJEN: se saiu, vale o DJEN. Mande consultar e certificar hoje.
- **Mesmo ato por dois canais:** pro advogado o DJEN é o que conta e o outro canal é informativo (art. 11, §3º). Ainda assim mostre as duas contas e adote como **prazo de trabalho a mais curta**: o custo de errar é a preclusão, e a escolha fica com o advogado.

#### Providência

Por intimação: o que fazer, quem (`[definir]` se não indicado), e a skill: sentença ou acórdão → recurso da área (`peca-a-partir-da-ficha`) ou embargos; decisão interlocutória → recurso cabível; manifestar sobre documento ou laudo → manifestação; audiência → **avisar o cliente** (data, hora, local, comparecimento pessoal e o que a ausência acarreta: ato atentatório, multa de até 2% da vantagem econômica ou do valor da causa, CPC, art. 334, §8º; na conciliação do art. 334, o réu manifesta desinteresse por petição com **10 dias de antecedência** da audiência, §5º, e a audiência só é dispensada se **ambas** as partes o fizerem, §4º, I) e abrir `preparacao-de-audiencia`; pagamento ou documento do cliente → `comunicacao-com-cliente`; expediente → peça abaixo.
#### Expediente de uma página

Quando a providência é expediente, redija a peça: endereçamento e qualificação como no modelo do escritório; `[número do processo]`, `[id do documento]` e `[OAB]` em branco; 4 a 8 linhas; fecho padrão. Cinco tipos:

- **Ciente:** toma ciência da decisão ou do ato (id), e diz o que fará, se houver. Ciente **não suspende nem interrompe prazo**: se há prazo correndo, não protocole ciente no lugar da providência.
- **Juntada de documento:** identifica cada documento, diz pra que serve na causa, sem mérito novo. Cuide do tamanho do arquivo no sistema (PJe, limite por PDF `[conferir]`) e da fase: documento fora da fase pode ser recusado `[conferir]`.
- **Substabelecimento:** com ou sem reserva. Com reserva é ato pessoal do advogado da causa; sem reserva exige o prévio e inequívoco conhecimento do cliente (CED, art. 26, caput e §1º). Peça de juntada do instrumento e, se o escritório quiser, as intimações em nome do substabelecido `[conferir regra do tribunal]`. O substabelecido com reserva ajusta antes os honorários (CED, art. 26, §2º).
- **Dilação de prazo:** o juiz pode prorrogar prazos processuais, e a dilação só vale **antes de terminado o prazo regular** (CPC, art. 139, VI e parágrafo único). Peça com o motivo concreto e o número de dias que o advogado informar. Protocole cedo e continue preparando a peça: deferimento não é certo.
- **Prosseguimento ou impulso:** peça uma **providência concreta** (citação por [meio], penhora, ofício, designação de audiência), nunca "o que de direito".

#### Saída

```
ALERTA: [processo · ato · vence (sugerido) dd/mm, em N dias úteis] (só se houver)

TRIAGEM DE [data] · [N] intimações
| # | Processo | Ato e de quem é o prazo | Balde | Vence (sugerido) | Conta (uma linha: disp. → pub. → início = dia 1 → N dias [úteis|corridos] [dobro: motivo]; pulados e avisos) | Providência · responsável · skill |
(uma linha por intimação, em ordem de urgência)

PEÇA #n · [tipo] (texto pronto), só dos expedientes que o advogado pediu ou que a providência exige

CONFIRA
Feriado local, suspensão do tribunal, rito e dobro são do advogado. Confira cada prazo no calendário do tribunal antes de lançar na agenda.
```

Saída enxuta: a primeira mensagem é o ALERTA e a tabela. A conta em passos (os oito itens acima) só pras intimações com prazo e quando houver dúvida ou o advogado pedir. Sem bloco de pendência por intimação: uma linha no fim ("lançar no `PENDENCIAS.md`?").

CPF, endereço e dado de saúde da publicação não entram na triagem.

#### Não fazer

- Cravar data final como certa, ou esconder prazo curto fora do ALERTA.
- Aplicar a conta do DJEN a intimação pessoal ou por Domicílio; ou ignorar o DJEN porque o mesmo ato também apareceu no painel (pro advogado, o DJEN é o que conta).
- Dar prazo do escritório a ato cujo prazo é da parte contrária.
- Escrever "ciente" como se resolvesse o prazo.
- Escrever "requer o que de direito".

*Referências conferidas em 21/10/2026 (CPC, arts. 139, 180, 183, 186, 218, 219, 220, 224, 229, 231, 246, 270, 334 e 1.003, §6º, e Lei 11.419/2006, arts. 4º, 5º e 9º, pelo Planalto via proxy; Lei 10.259, art. 9º, e Lei 12.153, art. 7º, idem; Resolução CNJ 569/2024, texto oficial em atos.cnj.jus.br, que dá a redação dos arts. 11, §3º, 18 e 20 da Resolução 455/2022 (o consolidado da 455 não abriu); CED, art. 26, PDF da OAB-SE; data de 16/05/2025 por comunicado do CNJ e atos de tribunais, não pelo texto da norma; dobra de escritório contratado pelo ente: sem precedente confirmado). Lei, resolução e prática do tribunal mudam: por isso existe a conferência antes de protocolar.*

### E meu processo? em lote (`e-meu-processo-em-lote`)

Antes, leia nos arquivos de conhecimento do projeto o método comunicacao-com-cliente, o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Abra o `ESTILO-DO-ESCRITORIO.md` (tratamento e tom) e, pra cada cliente, a `FICHA-DO-CASO.md`.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se não vier andamento nem ficha de um cliente, não escreva mensagem pra ele: liste "sem insumo" e siga com os outros. Nunca invente andamento pra preencher.

#### Antes (pergunte, no máximo 5)

1. A lista: cliente (ou apelido do caso), canal (WhatsApp ou e-mail) e o andamento ou a ficha de cada um.
2. Alguma mensagem é sobre **notícia ruim** (sentença ou decisão desfavorável, extinção, perda de prazo)? Essas ficam fora do lote de texto: o advogado liga antes.
3. Tom por cliente, quando fugir do padrão do escritório: idoso, empresa, ansioso, quem já reclamou do silêncio, quem entende de direito.
4. Há segredo de justiça, processo de família ou criminal no lote? Esses vão sem detalhe.
5. O advogado quer fixar uma data de próxima atualização por cliente? (Só ele fixa.)

#### Ordem de saída

1. **Ligar antes** (notícia ruim): uma linha por cliente com o motivo e, se o advogado pedir, a mensagem pra mandar **depois** da ligação.
2. **Cliente tem que fazer algo** (documento, pagamento, audiência, assinatura), com a data como consta.
3. **Houve andamento.**
4. **Sem novidade.**

#### Regras da mensagem (até 5 linhas no WhatsApp)

- Ordem: o que aconteceu, o que significa pra ele, o próximo passo. Sem juridiquês; termo técnico necessário vem explicado entre vírgulas.
- **Sem promessa:** nada de "vamos ganhar", "é certo", "garantido", porcentagem de chance nem data de desfecho. O que depende do juiz vem com "depende do juízo".
- **Sem novidade** não é mensagem vazia: diz a data da **última movimentação**, em que fase o processo está, por que essa fase costuma levar tempo (uma frase), e quando o escritório vai olhar de novo, **na data que o advogado fixou** (nunca uma data que o juiz decide). Sem data fixada pelo advogado, escreva "avisamos assim que houver novidade".
- **Cliente que pergunta pela terceira vez:** ofereça uma janela fixa (por exemplo, atualização por mensagem uma vez por mês, no dia que o advogado escolher), em vez de responder cada pergunta de novo. Marque `[ideia: janela fixa]` no quadro-resumo.
- Cada mensagem fala **só** do cliente dela. Nunca cite outro cliente, outro caso nem dado de terceiro (sigilo, CED, arts. 35 e 36).
- Dado pessoal: sem CPF, endereço, dado de saúde ou de criança. Use o apelido do caso; número do processo só se o cliente já usa.
- **Segredo de justiça, família, criminal:** a mensagem não traz detalhe e convida pra conversa; mensagem de WhatsApp pode ser encaminhada.
- O tom segue o escritório; a mensagem sai em nome do advogado, que lê antes.

#### Envio

Cada mensagem vai **individual**, na conversa do próprio cliente. Não use lista de transmissão nem grupo com vários clientes. Comunicação a cliente é permitida quando não tiver caráter mercantilista nem for oferta de serviço (Provimento 205/2021, Anexo Único, "Correspondências e comunicados"). A IA redige; quem envia é o advogado. O chatbot não substitui a pessoalidade do serviço (mesmo Anexo, "Chatbot"), e a Recomendação 001/2024 do CFOAB, item 4.3, diz que a comunicação com o cliente não pode ser feita só a partir de conteúdo gerado por IA, resguardado o direito de falar com um ser humano; se o escritório usa assistente automático no atendimento, ele informa que é uma máquina e não faz ato privativo da advocacia (item 2.4). Se o escritório usa IA no caso, o cliente deve ter assinado o aviso (`aviso-de-uso-de-ia-ao-cliente`).

#### Saída

```
RODADA DE [data] · [N] clientes
| # | Cliente (apelido) | Tipo | Canal | Observação |
(Tipo: LIGAR ANTES | AÇÃO DO CLIENTE | ANDAMENTO | SEM NOVIDADE | SEM INSUMO)

MENSAGEM #1 · [cliente] · [WhatsApp|e-mail]
[texto pronto pra copiar]

MENSAGEM #2 ...
```

Nada antes nem depois dos blocos, fora o quadro-resumo e "Ligue antes de mandar: #n". Fechamento: se a mensagem pede documento, "A lista e a cobrança saem pela `documentos-procuracao-e-honorarios`"; se o caso exigiu prazo, `gestao-de-prazos-e-intimacoes`.

#### Não fazer

- Misturar clientes numa mesma mensagem ou resposta.
- Prometer data pro juiz.
- Mandar notícia ruim só por texto.
- Escrever mensagem "tudo certo" quando o insumo não diz.
- Usar o mesmo texto pra todos: cada um recebe o seu, no seu tom.

*Referências conferidas em 21/10/2026 (CED, arts. 35 e 36, PDF da OAB-SE; Provimento 205/2021, Anexo Único, "Chatbot" e "Correspondências e comunicados", PDF da OAB-ES; Recomendação CFOAB 001/2024, itens 2.4 e 4.3, PDF do acórdão de 11/11/2024 publicado pelo Migalhas).*

### Fechamento do caso (`fechamento-do-caso`)

Antes, leia nos arquivos de conhecimento do projeto o método meus-casos-e-documentos, o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Abra o `ESTILO-DO-ESCRITORIO.md`, a `FICHA-DO-CASO.md`, o `PENDENCIAS.md` e o contrato de honorários.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se ainda há prazo, cumprimento de sentença, levantamento ou honorário a destacar em aberto, a pendência bloqueia o **termo de encerramento**, não a prestação de contas: liste a pendência, **não feche o caso**, e entregue o quadro de contas e o repasse como primeira providência; o recibo de documentos e o termo saem como minuta, pra assinar quando fechar.

#### Antes (pergunte, no máximo 5)

1. Por que fecha: trânsito em julgado, acordo cumprido, desistência, revogação pelo cliente, renúncia do advogado?
2. Entrou dinheiro (alvará, levantamento, RPV, acordo) que passou pelo escritório ou pelo cliente? Quanto e quando, como consta?
3. Que documentos originais do cliente o escritório tem?
4. Os honorários estão quitados? O que falta e como estava no contrato?
5. Há obrigação futura (parcelas de acordo, cumprimento por terceiro, êxito que pode vir depois)?

#### ALERTA de dinheiro do cliente e de prazo

**Valor do cliente retido ou a levantar** (alvará levantado, depósito judicial, RPV, acordo pago ao escritório): abra com **ALERTA**, antes de qualquer pergunta, com o valor, a data de entrada e há quantos dias está no escritório. Dinheiro do cliente não fica no escritório à espera do fechamento: o repasse e a prestação de contas pormenorizada vêm primeiro (CED, art. 12), e recusar-se, sem justificativa, a prestar contas é infração (Lei 8.906, art. 34, XXI). Só se retém o que o contrato e o art. 22, §4º, autorizam, com o quadro à vista do cliente.

Se houver prazo recursal, de cumprimento ou renúncia em curso, abra com **ALERTA** e a **conta sugerida** (termo inicial, regra, úteis ou corridos, resultado provável), marcada como sugestão a conferir. A renúncia vale dez dias depois da notificação (Lei 8.906, art. 5º, §3º) e exige comprovar nos autos a comunicação ao cliente (CPC, art. 112). Vencendo em até 5 dias úteis, é o primeiro item.

#### Conferir antes de fechar

Prazos e recursos esgotados · cumprimento ou execução resolvidos · valores levantados e repassados · honorários contratuais e de sucumbência recebidos ou destacados (Lei 8.906, art. 22, §4º) · custas e despesas adiantadas reembolsadas · ficha atualizada · nenhuma pendência aberta em `PENDENCIAS.md`.

#### Prestação de contas

Concluída ou desistida a causa, haja ou não extinção do mandato, o advogado devolve ao cliente bens, valores e documentos que lhe foram confiados e **presta contas, pormenorizadamente** (CED, art. 12). A parcela dos honorários paga pelos serviços até então prestados não entra entre os valores a devolver (art. 12, parágrafo único). Recusar-se, sem justificativa, a prestar contas é infração (Lei 8.906, art. 34, XXI), e a ação de prestação de contas prescreve em cinco anos (art. 25-A).

Monte o quadro **só com o que o advogado informou**: data, origem e valor bruto recebido; honorários contratuais descontados (cláusula e art. 22, §4º); sucumbência; custas e despesas adiantadas com comprovante (CED, art. 48, §3º); valor repassado ao cliente, data e comprovante; saldo. Some apenas os números dados e **mostre a conta**. Não calcule honorários, juros nem correção: onde faltar número, `[VALOR: informar]`.

#### Devolução de documentos

Tabela: documento · original ou cópia · entregue em [data] · recebido por [cliente]. Recibo assinado. O que o escritório guarda (cópias, peças, autos) e por quanto tempo é decisão do advogado: o tratamento termina quando a finalidade é atingida ou os dados deixam de ser necessários (LGPD, art. 15, I), e depois os dados são eliminados, salvo conservação pra cumprir obrigação legal ou regulatória (art. 16, I) `[conferir prazo de guarda adotado pelo escritório e a orientação da OAB sobre arquivo]`. O direito à cobrança de honorários dura cinco anos (Lei 8.906, art. 25): considere isso ao decidir o que guardar.

#### Termo de encerramento (1 página)

Partes e objeto · o que foi feito e o **resultado, em fato, sem adjetivo** · valores prestados (remete ao quadro) · documentos devolvidos · honorários: quitados ou saldo, e como será pago · declaração de que o mandato se extingue (concluída a causa, presume-se cumprido e extinto, CED, art. 13) · reabertura só por novo contrato · local, data, assinaturas.

**Se foi revogação ou renúncia:**
- **Revogação pelo cliente:** não o desobriga dos honorários contratados, nem tira do advogado a sucumbência proporcional ao serviço prestado (CED, art. 17); o distrato não é renúncia aos honorários proporcionais, inclusive de êxito posterior (Lei 8.906, art. 24, §§5º e 6º). Nos autos, quem revoga constitui outro advogado no mesmo ato (CPC, art. 111).
- **Renúncia do advogado:** sem mencionar o motivo (CED, art. 16); não exclui responsabilidade por danos (§1º).

#### Pedido de retorno do cliente, dentro do Provimento 205/2021

- **Peça retorno privado**, depois da entrega, sobre o atendimento (clareza, resposta, organização). Um formulário curto ou uma mensagem individual, só a quem foi cliente.
- **Não peça avaliação pública nem indicação.** Anúncio e conteúdo não podem captar clientela nem induzir à contratação (Provimento, art. 2º, VIII e art. 3º, caput), e expressões persuasivas, de autoengrandecimento ou de comparação são vedadas (art. 3º, IV). Pedido de avaliação em plataforma pública: `[conferir entendimento do Tribunal de Ética da seccional]`.
- **Nunca ofereça** brinde, desconto ou vantagem em troca de retorno (art. 3º, I e V).
- **Nunca publique** resultado, caso concreto ou depoimento sobre decisão obtida: é vedada a menção a decisões e resultados em publicidade (Provimento, art. 4º, §2º; art. 5º, §3º; art. 6º), e divulgar lista de clientes e demandas é vedado (CED, art. 42, IV).
- Mensagem sem promessa, sem "indique pros amigos", sem pressão. Modelo: "Seu caso foi encerrado. Se quiser nos dizer, em particular, como foi o atendimento, ficaremos agradecidos. Se precisar de nós no futuro, estamos à disposição."

#### Saída

```
ALERTA: [prazo ou renúncia em curso, se houver]
CONFERÊNCIA: [itens ok / pendentes]
PRESTAÇÃO DE CONTAS (quadro)
DEVOLUÇÃO DE DOCUMENTOS (recibo)
TERMO DE ENCERRAMENTO
MENSAGEM AO CLIENTE (encerramento + retorno privado)
ARQUIVO: ficha final · mover pra Encerrados/ · tese boa vai pro banco de teses
```

Dados pessoais só no termo e no recibo.

#### Não fazer

- Fechar com pendência em aberto.
- Reter documento do cliente por causa de honorários em atraso: devolva e cobre pela `cobranca-de-honorarios-atrasados`.
- Pedir avaliação pública, indicação ou depoimento.
- Citar valor, resultado ou nome do cliente em post sobre o caso.

*Referências conferidas em 21/10/2026 (CED, arts. 12, 13, 16, 17, 42 e 48, PDF da OAB-SE; Provimento 205/2021, arts. 2º a 6º, PDF da OAB-ES; Lei 8.906, arts. 5º, 22, 24, 25, 25-A e 34, texto consolidado da Câmara, já com a Lei 15.472/2026; CPC, arts. 111 e 112, e LGPD, arts. 15 e 16, pelo Planalto via proxy). Reter documento por débito de honorários: a conferência não incluiu entendimento de tribunal de ética; confira na seccional.*

### Onboarding do cliente por área (`onboarding-do-cliente-por-area`)

Antes, leia nos arquivos de conhecimento do projeto o método documentos-procuracao-e-honorarios, o método peca-a-partir-da-ficha e o método plano-antes-de-gerar. Abra o `ESTILO-DO-ESCRITORIO.md`, o módulo `area-…` (a seção 5 é a lista de documentos da área) e a ficha de atendimento da primeira consulta.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se o cliente ainda não contratou, pare e use a `proposta-de-honorarios`. Se há **prazo correndo**, a primeira linha do pacote é só o que permite agir; o resto vem depois.

#### Antes (pergunte, no máximo 5)

1. Área e tipo de ação (divórcio, rescisórias, aposentadoria, defesa criminal, cobrança...).
2. Há prazo ou audiência marcada? Qual a data, como consta?
3. Quem é o cliente: pessoa capaz, menor, curatelado, empresa? (muda quem assina e quais documentos.)
4. O que o cliente já mandou? (não peça de novo.)
5. Canal e horário que o escritório usa: WhatsApp, e-mail, ligação; horário de resposta.

#### O pacote (nesta ordem)

**1. Boas-vindas** (WhatsApp, até 8 linhas, no tom do escritório): quem cuida do caso, o canal, o horário, o próximo passo imediato. Sem promessa de resultado nem de prazo, sem elogio a si mesmo (Provimento 205/2021, art. 3º, IV e art. 6º).

**2. Lista de documentos, priorizada, em até 10 itens.** O item 1 é o que o prazo ou o protocolo exige. Duas colunas: **o cliente traz** e **o escritório produz** (não peça o que o escritório faz). Base por área (a seção 5 do módulo `area-…` vem primeiro):
- **Consumo e cível:** documento, comprovante de residência, contrato ou nota, faturas, protocolos de atendimento, prints datados.
- **Família:** documentos das partes, certidões de casamento e dos filhos, comprovantes de renda e gastos dos filhos, bens e dívidas; inventário: óbito, matrículas, extratos, testamento.
- **Trabalhista:** CTPS, contracheques, TRCT e extrato do FGTS, ponto ou escala, mensagens com a empresa, nomes de testemunhas.
- **Previdenciário:** CNIS, CTPS, carta do INSS, laudos e atestados com data, PPP e LTCAT, documentos rurais, CadÚnico e renda da casa (BPC).
- **Criminal:** o que recebeu da polícia ou do juízo, intimações, mídias com origem, atestados de conduta, trabalho e estudo (execução).
- **Como mandar:** foto legível ou PDF, nome de arquivo com a data no começo (`2026-10-20 contracheque.pdf`), um arquivo por documento. Arquivo pro PJe passa de 10 MB só dividido (TRT1): peça PDFs leves.

**3. Procuração.** Poderes gerais pro foro e só os especiais de que o caso precisa. Exigem poder específico: receber citação, confessar, reconhecer a procedência, transigir, desistir, renunciar ao direito, receber e dar quitação, firmar compromisso e **assinar declaração de hipossuficiência econômica** (CPC, art. 105, caput). Pode ser assinada digitalmente (art. 105, §1º). Menor ou incapaz: documento e assinatura do responsável. Empresa: contrato social e quem tem poderes.

**4. Declaração de hipossuficiência.** Só se o advogado pedir e o cliente de fato não puder arcar com as custas sem prejuízo do sustento. Não é automática. Presume-se verdadeira a alegação de insuficiência de **pessoa natural** (CPC, art. 99, §3º), ter advogado particular não impede a gratuidade (§4º), e o juiz pode exigir comprovação se houver elementos contra (§2º). Trabalhista: o regime é o do art. 790 da CLT e da ADC 80 `[conferir: ver Pacote Trabalhista]`. Pessoa jurídica: não há presunção.

**5. O que o cliente faz e não faz** (lista curta, no tom do escritório):
- Faz: manda o que foi pedido no prazo combinado; avisa mudança de telefone, endereço e e-mail; guarda os originais e as mensagens; comparece quando intimado e avisa se não puder; fala com o escritório antes de assinar qualquer coisa que a outra parte mande.
- Não faz: apagar mensagem, foto ou arquivo; postar ou comentar o caso em rede social; combinar acordo com a outra parte sem falar com o advogado (CED, art. 2º, parágrafo único, VIII, d, impede o advogado de tratar direto com parte que tenha patrono; o cliente não é impedido, mas pode se prejudicar); mandar documento por canal que o escritório não indicou.
- Criminal: o cliente não fala com a polícia nem com o juízo sobre o fato sem o advogado.

**6. Canal e horário.** Um canal oficial; horário de resposta (ex.: dias úteis, das X às Y); o que é urgência e como avisar; janela fixa de atualização do caso (mensal, por exemplo) pra reduzir o "e meu processo?". Dado sensível (laudo, CID): peça por canal que o cliente aceite e avise que o escritório trata só o necessário.

**7. Aviso de dados e IA (1 linha).** Finalidade do tratamento (LGPD, art. 9º) e, se o escritório usa IA, o **aviso de uso de IA com consentimento assinado antes do uso** (`aviso-de-uso-de-ia-ao-cliente`; Recomendação CFOAB 001/2024, itens 4.1.1 e 4.3.1). Peça CPF e endereço só pra documentos que exigem, e use-os só no documento final (`documentos-procuracao-e-honorarios`).

#### Cobrança do que faltou

Em três níveis, no tom de quem ajuda: 1) lista do que falta, com o motivo de cada item; 2) lembrete com o que já chegou e o que ainda falta; 3) "sem estes documentos não conseguimos protocolar até [data como consta]". Sem ameaça. Se um prazo corre, diga qual item o destrava.

#### Saída

```
BOAS-VINDAS · [WhatsApp]
LISTA DE DOCUMENTOS · [área] · [cliente]
| # | Documento | Quem providencia | Para quê | Prazo |
PROCURAÇÃO · poderes: [gerais + especiais necessários]
HIPOSSUFICIÊNCIA · [gerar | não aplicar] · motivo
O QUE VOCÊ FAZ E NÃO FAZ
CANAL E HORÁRIO
PRÓXIMO PASSO DO ESCRITÓRIO
```

Os documentos de entrada (procuração, contrato, declaração) saem em .docx pela `documentos-procuracao-e-honorarios`.

#### Não fazer

- Pedir tudo de uma vez: máximo 10 itens, o que o prazo exige primeiro.
- Misturar documentos de áreas diferentes.
- Gerar declaração de hipossuficiência por padrão.
- Dar poder especial que o caso não pede.
- Prometer prazo de protocolo ou resultado nas boas-vindas.

*Referências conferidas em 21/10/2026 (CPC, arts. 99, §§2º a 4º, e 105, caput e §1º, Planalto via proxy; Provimento 205/2021, arts. 3º e 6º, PDF da OAB-ES; CED, art. 2º, PDF da OAB-SE; LGPD, art. 9º, Planalto via proxy; Recomendação CFOAB 001/2024, itens 4.1.1 e 4.3.1, PDF do acórdão; limite de 10 MB do PJe segundo o TRT1, citado na pesquisa de 29/09/2026, não reaberto: `[conferir limite do tribunal]`).*

### Prazos da semana (`prazos-da-semana`)

Antes, leia nos arquivos de conhecimento do projeto o método gestao-de-prazos-e-intimacoes e o método peca-a-partir-da-ficha. Abra o perfil do escritório (cidade, UF, tribunais, equipe) e o `PENDENCIAS.md` dos casos.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se faltar o perfil da equipe ou a lista de pendências, pare e peça. Não invente responsável.

#### Qual skill usar

- **Uma publicação ou o lote do dia, com conta e peça:** `da-intimacao-a-providencia` ou `gestao-de-prazos-e-intimacoes`.
- **A semana inteira, quem faz o quê e até quando:** esta skill.
- Publicação **crua** colada aqui: faça antes a triagem e a conta pelo método `gestao-de-prazos-e-intimacoes` (ou `da-intimacao-a-providencia`), e só então monte a semana.

#### Primeira mensagem: ALERTA e conta, antes de tudo

Com pendências em mãos, a **primeira mensagem** abre com o ALERTA (prazo provável em 5 dias úteis ou menos) e a conta de cada linha, **antes de qualquer pergunta ou plano**. O plano ganha a linha "Prazo" (o que vence primeiro e a data sugerida). Falta equipe, margem ou agenda? Monte a semana com `[definir]` e `[conferir]` e pergunte depois.

**Regra de contagem incerta** (úteis × corridos, transição de lei, feriado local): conte **os dois cenários**, **priorize pelo mais curto** e marque `[conferir]`; o ALERTA usa a data mais curta.

#### Antes (pergunte, no máximo 5)

1. Qual a semana (segunda a sexta, com datas)?
2. Quem está na equipe e quem pega que tipo de tarefa (titular, associado, estagiário, correspondente)?
3. Que audiências, perícias e compromissos já estão na agenda dessa semana?
4. O escritório tem margem interna de entrega (por exemplo, dois dias úteis antes do vencimento)? Sem resposta, use dois dias úteis e diga que usou.
5. Há feriado local, suspensão do tribunal ou recesso na semana?

#### Como montar

1. Reúna as pendências (`PENDENCIAS.md`, triagens e o que o advogado colou). Cada uma precisa de processo, ato, providência e o **vencimento sugerido com a conta**. Pendência sem conta: devolva "sem conta, rode a triagem".
2. **Mostre a conta em cada linha**, em uma linha só: `disponibilização dd/mm → publicação dd/mm → início dd/mm → N dias [úteis|corridos] → vence dd/mm (sugerido)`. Base: publicação no primeiro dia útil seguinte à disponibilização (Lei 11.419/2006, art. 4º, §3º; CPC, art. 224, §2º); início no primeiro dia útil seguinte à publicação (Lei 11.419, art. 4º, §4º; CPC, art. 224, §3º); dias úteis (CPC, art. 219); suspensão de 20/12 a 20/01 (CPC, art. 220). **O dia do início conta como dia 1**; a publicação não conta (CPC, art. 224, caput). Ex.: disponibilização na sexta, publicação na segunda, início na terça = dia 1; 5 dias úteis = terça a segunda, vence na segunda seguinte (sugerido). **Dobra** (Fazenda, art. 183; Defensoria, art. 186) conta da intimação pessoal e **não vale** quando a lei fixa prazo próprio ao ente (art. 183, §2º; art. 186, §4º), nos juizados especiais (Lei 10.259, art. 9º; Lei 12.153, art. 7º) nem pra escritório contratado pelo ente sem procuradoria própria (`[conferir jurisprudência]`); litisconsortes de escritórios diferentes (art. 229) só em autos físicos (§2º). Penal é corrido: o módulo da área manda. **Meio:** pra advogado, quando a lei não exige intimação pessoal, o prazo conta do DJEN, e a comunicação concomitante pelo painel do sistema é só informativa (Res. CNJ 455/2022, art. 11, §3º, na redação da Res. 569/2024); Domicílio Judicial Eletrônico, intimação pessoal ou intimação só pelo portal: conta à parte pela `da-intimacao-a-providencia`. Nunca escreva a data como certa: é **sugestão a conferir** (feriado local, suspensão do tribunal, rito, dobro).
3. **Prioridade:**
   - **P1:** vence hoje, amanhã ou em até 5 dias úteis; tutela; réu preso; sentença.
   - **P2:** vence nesta semana (sem ser P1).
   - **P3:** vence depois desta semana, com data.
   - **P4:** sem prazo ou só providência.
4. **ALERTA no topo** (régua única): prazo processual ou contratual que vence em **5 dias úteis ou menos**; decadência ou prescrição a 60 dias ou menos, ou janela já aberta; conta que não fecha (data de disponibilização faltando, meio diferente do DJEN). Prazo que **já venceu** vai no topo como VENCIDO. Vencimento em dia sem expediente: mostre a prorrogação legal e, pra planejar, o dia útil anterior. O alerta lista processo, ato e vencimento sugerido. Prazo curto escondido na tabela é o erro que esta skill existe pra evitar.
5. **Data interna de entrega** = vencimento sugerido menos a margem. Se a margem cair antes de hoje, marque "já dentro da margem" e suba pra P1.
6. **Responsável:** só quem o advogado indicou ou o perfil define. Sem indicação: `[definir]`. Aviso de carga quando uma pessoa tiver mais de três entregas P1 ou P2 no mesmo dia ou tiver audiência no dia de uma entrega.
7. **Conflito de agenda:** audiência ou perícia no mesmo dia da data interna vira linha de aviso. Audiência na semana: lembre de **avisar o cliente** (data, hora, local, comparecimento).

#### Saída

```
ALERTA: [processo] · [ato] · vence (sugerido) dd/mm, em N dias úteis [só se houver]

SEMANA DE dd/mm A dd/mm
| Prio | Processo | Ato / providência | Responsável | Entrega interna | Vence (sugerido) | Conta | Skill que abre |
(ordem: prioridade, depois data)

POR PESSOA
[nome]: [N entregas · dias mais carregados]

FICA PRA SEXTA
Abertos: ... · Entra na segunda: ... · Sem prazo: ...

CONFIRA
Feriado local, suspensão do tribunal, rito e dobro são do advogado. Confira cada prazo no calendário do tribunal antes de lançar na agenda.
```

Com planilha ou execução de código ligada, entregue também .xlsx ou .csv com as mesmas colunas, e um .ics só depois de o advogado conferir as datas.

#### Não fazer

- Cravar vencimento como certo. Nem "vence dia X": sempre "vence (sugerido) dia X".
- Atribuir tarefa a alguém por palpite.
- Esconder prazo curto fora do ALERTA.
- Misturar prazo de outro rito: o módulo `area-…` manda (trabalhista em dias úteis pela CLT; penal corrido).
- Incluir CPF, endereço ou dado de saúde na planilha. Use apelido do caso e número do processo.

*Referências conferidas em 21/10/2026 (CPC, arts. 183, 186, 219, 220, 224 e 229, Lei 11.419/2006, art. 4º, Lei 10.259, art. 9º, e Lei 12.153, art. 7º, pelo Planalto via proxy; Resolução CNJ 569/2024, texto oficial em atos.cnj.jus.br, que dá a redação do art. 11, §3º, da Resolução 455/2022; dobra de escritório contratado pelo ente: sem precedente confirmado). Feriado local, suspensão e prática do tribunal são do advogado.*

### Proposta de honorários (`proposta-de-honorarios`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha, o método plano-antes-de-gerar e o método documentos-procuracao-e-honorarios. Abra o `ESTILO-DO-ESCRITORIO.md` e, se existir, o modelo de proposta em `MODELOS/`.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se a pessoa ainda não foi atendida (veio só uma mensagem de contato), pare: preço não se discute no chat com quem ainda não é cliente (Provimento 205/2021, art. 3º, I; veja `triagem-de-lead-e-caso-novo`). Proposta é depois da consulta, a pedido ou por decisão do advogado, individual.

#### Antes da proposta (pergunte, no máximo 5)

1. Qual o objeto e até onde vai o patrocínio: só a fase inicial, até a sentença, recursos, execução? O contrato diz se abrange todos os atos ou se limita a um grau de jurisdição (CED, art. 48, §1º).
2. Quanto a pessoa pode pagar e como (à vista, parcelas, só no fim)? A condição econômica do cliente e o proveito esperado entram na moderação (CED, art. 49, IV).
3. Qual o valor que o advogado quer propor? Se não souber, a skill ajuda a montar o modelo, nunca escolhe o número.
4. Qual o piso da tabela de honorários da seccional da OAB do advogado, pro serviço? O advogado deve observar o valor mínimo da tabela do Conselho Seccional, inclusive nas diligências, sob pena de aviltamento (CED, art. 48, §6º). A skill não traz número de tabela: cada seccional tem a sua. `[conferir a tabela vigente da seccional]`.
5. Quem paga custas, perícia, deslocamento e diligências? Na falta de disposição, presumem-se devidos pelo cliente (CED, art. 48, §3º).

#### Modelos de cobrança (apresente 2 ou 3 que servem ao caso, com prós e contras)

- **Fixo:** valor fechado, à vista ou parcelado, com data. Simples; o risco do tempo é do advogado.
- **Por ato ou por fase:** um valor por etapa (inicial, instrução, cada recurso, execução). Combina com criminal e com causa de duração incerta. Sem estipulação, o Estatuto divide em um terço no início, um terço até a sentença de primeiro grau e o restante ao final (Lei 8.906/1994, art. 22, §3º).
- **Êxito (quota litis):** percentual sobre o proveito. Limites do CED, art. 50: os honorários têm de ser **representados por pecúnia** e, somados aos de sucumbência, **não podem superar as vantagens que o cliente obtiver**. Participação em bem do cliente só em caráter excepcional, quando ele não tiver condições pecuniárias, e em instrumento contratual (§1º). Pode incidir sobre prestações vencidas e vincendas, com moderação e razoabilidade (§2º).
- **Misto:** fixo menor na entrada + êxito. O mais comum quando o cliente tem alguma renda e o caso tem proveito.
- **Mensal (partido):** valor por mês pra assessoria ou carteira de processos, com escopo escrito e regra pra o que passa do escopo.
- **Por hora:** só consultivo, com relatório de horas.

Em todo modelo diga na proposta: o que **é** êxito (acordo conta? valor bruto ou líquido?), sobre **qual base** incide, se a sucumbência soma ou se compensa, e o que acontece se o cliente fizer acordo sem o advogado.

#### Regras que valem em qualquer modelo

- Os honorários de sucumbência pertencem ao advogado (Lei 8.906, art. 23; CPC, art. 85, §14). Diga se ficam além do contratado, se abatem do êxito, ou como ficam. Sem clareza, vira briga.
- É vedada a diminuição dos honorários contratados em razão de solução extrajudicial do litígio (CED, art. 48, §5º). Acordo não derruba o contrato.
- Honorários em valor aviltante são vedados (CED, art. 2º, parágrafo único, VIII, f).
- O advogado promove, de preferência de forma destacada, a execução dos honorários (CED, art. 48, §7º). Juntar o contrato antes de expedido o mandado de levantamento ou precatório permite o pagamento direto ao advogado, por dedução do que o cliente receberia, salvo prova de que ele já pagou (Lei 8.906, art. 22, §4º). Ponha na proposta que o contrato será juntado.
- Pro bono é gratuidade eventual e voluntária pra quem não tem recursos (CED, art. 30, §§1º e 2º) e não serve de instrumento de publicidade (§3º). Não ofereça "sem custo" como atrativo.

#### Publicidade: a proposta não é anúncio

Proposta vai pra uma pessoa, depois da consulta. Nunca em post, story, grupo de WhatsApp ou lista de transmissão. É vedada referência a valores de honorários, forma de pagamento, gratuidade ou desconto como forma de captação (Provimento 205/2021, art. 3º, I), e expressões persuasivas (art. 3º, IV). Sem "desconto só hoje", sem comparar com outro advogado, sem "só paga se ganhar" como chamada.

#### Saída

```
PROPOSTA · VERSÃO CURTA (WhatsApp, até 8 linhas)
[tratamento do escritório]. Como conversamos, a proposta pra [objeto] é: [modelo: valores e datas]. Custas e despesas: [quem paga]. [Se houver êxito: percentual sobre ___ ; sucumbência: ___]. Vale até [data]. Qualquer dúvida, me diga antes de assinar.

PROPOSTA · VERSÃO FORMAL (carta de 1 página)
Objeto e extensão do patrocínio · Honorários ajustados e forma de pagamento · Êxito (definição e base) · Sucumbência · Custas e despesas · Acordo, rescisão e substabelecimento · Validade da proposta · Local, data, advogado e OAB.

PARA O ADVOGADO
Piso da seccional: [conferir tabela vigente]. Limites do art. 50 do CED conferidos? Contrato a gerar por `contrato-de-honorarios-por-area`.
```

Valor e percentual saem como `[valor: definido pelo advogado]` e `[percentual: definido pelo advogado]` quando ele não informou. Não calcule o proveito do cliente.

#### Julgado

Com o Advoclaude Jurisprudência ligado, busque antes de redigir: `buscar_precedentes` no tema "honorários contratuais, quota litis e destaque de honorários" (súmula e precedente qualificado primeiro) e `buscar_em_todos`. Cite só o que voltou com link, e passe cada citação em `verificar_citacao` antes de pôr na peça. Sem o conector, ou sem resultado, deixe `[INSERIR JULGADO: honorários contratuais, conferir]`. Nunca escreva número de processo, relator, data ou ementa que não veio de uma dessas fontes. (Súmula Vinculante 47 do STF, conferida no BNP/CNJ em 19/10/2026: honorários incluídos na condenação ou destacados do montante principal têm natureza alimentar e são pagos por precatório ou RPV.)

#### Não fazer

- Inventar número de tabela da OAB ou dizer que "a tabela manda X%".
- Propor abaixo do piso da seccional sem avisar o advogado.
- Condicionar honorários a resultado em causa em que o advogado não possa ligar pagamento a êxito sem ferir a ética; em dúvida, `[conferir no Tribunal de Ética da seccional]`.
- Prometer resultado ou prazo na proposta.

*Referências conferidas em 21/10/2026 (CED, Resolução CFOAB 02/2015, arts. 2º, 30, 48, 49 e 50, PDF da OAB-SE; Lei 8.906/1994, arts. 22 e 23, texto consolidado da Câmara, já com a Lei 15.472/2026; CPC, art. 85, Planalto via proxy; Provimento 205/2021, art. 3º, PDF da OAB-ES; Súmula Vinculante 47, BNP/CNJ). Confira alterações posteriores do CED e a tabela da sua seccional.*

### Roteiro da primeira consulta (`roteiro-da-primeira-consulta`)

Antes, leia nos arquivos de conhecimento do projeto o método peca-a-partir-da-ficha, o método plano-antes-de-gerar e o método triagem-de-lead-e-caso-novo. Abra também o `ESTILO-DO-ESCRITORIO.md` e o módulo `area-…` do perfil (a seção 5 dele é a lista de documentos da área).

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se a pessoa ainda não foi atendida e só mandou mensagem, pare e use a `triagem-de-lead-e-caso-novo`. Roteiro é pra conversa que já vai acontecer.

#### Antes do roteiro (pergunte, no máximo 5)

1. Qual a área ou o assunto, em uma frase?
2. A conversa é presencial, por vídeo ou por telefone? (muda o que se pede: documento na mão ou depois.)
3. A pessoa recebeu intimação, citação, carta, decisão ou notificação? Com que data? Se sim, **pare o roteiro**: o prazo vem primeiro (`gestao-de-prazos-e-intimacoes`). Registre a data como ela disse, sem contar prazo.
4. Quem é a parte contrária (nome completo)? É o que permite checar conflito.
5. Há outro advogado ou processo já em andamento nesse assunto?

#### Ordem fixa do roteiro

1. **Urgência.** "Tem algo com data marcada ou prazo correndo?" Já respondido acima: repita só se mudar.
2. **Conflito e outro patrono.** Parte contrária, quem mais está envolvido, se já houve outro advogado. O advogado não aceita procuração de quem tem patrono sem conhecimento deste, salvo motivo plenamente justificável ou medida urgente (CED, art. 14). Conflito de interesses motivado por intervenção anterior no assunto: declinar (CED, art. 22). A ficha leva `A CONFERIR: conflito com [nome]`.
3. **Fatos, do começo.** "Me conta do começo." Deixe falar sem interromper; depois volte pras datas, uma por vez.
4. **O que a pessoa quer.** "O que resolveria pra você?" e "o que já tentou?" (reclamação, acordo, notificação).
5. **O que tem em mãos.** Só o essencial pra avaliar. O resto se pede depois da contratação (`onboarding-do-cliente-por-area`).
6. **O que espera.** "O que você espera que aconteça, e em quanto tempo?" Serve pra calibrar o que você não vai prometer.

#### Perguntas por área (use as que couberem; uma informação por pergunta)

- **Consumo e cível:** data do fato e da última tentativa de resolver; protocolo ou reclamação feita; valor envolvido; contrato ou nota; se já há negativação, cobrança ou ação contra a pessoa.
- **Família:** casamento ou união estável e desde quando; filhos menores e com quem moram; há violência ou medida protetiva (pare e trate como urgência); bens e dívidas; se houve tentativa de acordo; se o outro lado tem advogado.
- **Trabalhista:** datas de admissão e de saída e como saiu; função e salário; jornada real; o que não foi pago; se ainda trabalha; testemunhas; sindicato ou convenção.
- **Previdenciário:** o que pediu ao INSS, quando e a resposta (carta de indeferimento, data); se há perícia marcada; o que consta no CNIS; se é rural ou atividade especial; incapacidade: desde quando e atestados.
- **Criminal:** a pessoa está presa ou solta e desde quando; fase (delegacia, denúncia, instrução, execução); data do fato; se já deu depoimento e sem advogado; quem está pagando os honorários. Pergunte o que ela **sabe**, e não peça detalhe do fato que ela não precise contar nesta conversa.
- **Despejo, cobrança, imóvel:** contrato, valor em aberto, notificação recebida, prazo dado, garantia.

#### Dados pessoais

Na consulta peça só nome e contato. CPF, RG, endereço completo e dado de saúde vêm quando a pessoa contratar, e só o necessário (LGPD, art. 6º, III). Dado sensível entra na ficha só se for o fato do caso.

#### Sinais de caso ruim

- **Barra o caso (diga ao advogado, que decide):** nenhum fato jurídico concreto; o cliente quer usar o processo pra um fim ilícito ou levar prova que sabe falsa (CED, art. 6º veda expor fatos falseando a verdade); lide temerária, que o advogado deve desaconselhar (CED, art. 2º, parágrafo único, VII); conflito de interesses; o assunto parece fora do prazo (marque "provavelmente fora do prazo, conferir", sem concluir).
- **Pede cautela:** já trocou de advogado várias vezes falando mal de todos; quer garantia de resultado; nenhuma prova nem testemunha, só "ouvi dizer"; proveito econômico pequeno pro custo do caso (o proveito entra na moderação dos honorários, CED, art. 49, IV); pressa em contratar "hoje".
- **Risco alto e pouco proveito:** avise o advogado, que decide se atende e como cobra. A conversa de preço é da `proposta-de-honorarios`, não desta ficha.

#### O que não prometer

Resultado, prazo de desfecho, "causa ganha", valor de indenização, porcentagem de chance. O advogado informa os riscos e as consequências da pretensão "de modo claro e inequívoco" (CED, art. 9º), inclusive o lado ruim. Promessa de resultado é vedada na publicidade (Provimento 205/2021, art. 6º) e fere o dever de informação. Registre na ficha o que foi explicado sobre risco.

#### Sigilo

O que a pessoa contou na consulta é sigiloso mesmo que não contrate (CED, art. 35; art. 36, §1º, presume confidenciais as comunicações entre advogado e cliente).

#### Ficha de atendimento (saída)

```
FICHA DE ATENDIMENTO · [data] · [presencial|vídeo|telefone]
Pessoa: [nome] · Contato: [telefone/e-mail]
Área: [...] · Urgência: [prazo informado, como dito: "recebeu em ..."] 
Parte contrária: [nome] · Conflito: A CONFERIR com [nome] · Outro advogado/processo: [...]
Relato em ordem: [data como dita]: [fato]
| Fato | Documentado (qual documento) | Só relatado |
Objetivo da pessoa: [...]
Documentos: tem [...] · falta [...] · pedir depois da contratação [...]
Sinais: [nenhum | cautela: ... | barra: ...]
O que expliquei sobre risco: [...]
Decisão: contratou | vai pensar | não atendemos (motivo)
Próximo passo e data: [...]
```

Fechamento: "Virou caso? A `ficha-do-caso` organiza o caso; a `proposta-de-honorarios` e o `onboarding-do-cliente-por-area` seguem."

#### Não fazer

- Dar parecer ou calcular valor, prazo ou prescrição na ficha. Sinalize e mande conferir.
- Pedir todos os documentos já na primeira conversa.
- Falar de preço aqui. Preço é proposta, depois da consulta.
- Gravar dado de saúde, de criança ou de terceiro além do necessário.

*Referências conferidas em 21/10/2026 (Código de Ética e Disciplina, Resolução CFOAB 02/2015, arts. 2º, 6º, 9º, 14, 22, 35, 36 e 49, PDF da OAB-SE; Provimento 205/2021, art. 6º, PDF da OAB-ES; LGPD, art. 6º, Planalto via proxy). Norma muda: confira a redação vigente.*
