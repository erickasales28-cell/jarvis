# Advoclaude · Contratos e documentos de entrada

Este arquivo reúne 3 métodos. Cada um começa num título "MÉTODO:". Leia só o método do pedido, inteiro.

Índice
- MÉTODO: Contrato a partir do briefing (contrato-a-partir-do-briefing): "faz um contrato de…", locação, compra e venda, NDA → contrato novo com [DEFINIR] e alertas
- MÉTODO: Auditor de contratos (auditor-de-contratos): contrato para revisar, "vê os riscos", comparar versões, "pode assinar?" → matriz de risco por cláusula
- MÉTODO: Documentos, procuração e honorários (documentos-procuracao-e-honorarios): "o que peço ao cliente?", procuração, honorários, hipossuficiência → checklist e documentos

Neste kit, "Drive conectado" é o app do Google Drive ligado ao ChatGPT; "arquivos do Projeto" são os arquivos que o advogado subiu no Projeto do ChatGPT. O .docx é gerado com a execução de Python do ChatGPT (python-docx) e oferecido pra baixar. A montagem do arquivo segue o método Timbrado e formatação (`timbrado-e-formatacao`, no arquivo do escritório).

---

## MÉTODO: Contrato a partir do briefing (contrato-a-partir-do-briefing)


Quando usar: Use quando o advogado disser "faz um contrato de prestação de serviços", "minuta de locação", "preciso de um NDA", "contrato de compra e venda pro cliente" ou pedir contrato novo (prestação de serviços, compra e venda, locação, mútuo, confidencialidade) a partir do que o cliente quer. Tira do pedido o que já veio, pergunta o resto numa mensagem só, redige sobre o modelo do escritório, marca [DEFINIR] no que falta e alerta cláusula abusiva em relação de consumo e dado pessoal. Contrato de honorários não entra aqui.


Contrato novo, do zero ou de um modelo. Revisar contrato que já existe é o `auditor-de-contratos`; contrato de honorários do escritório é o `contrato-de-honorarios-por-area` (pacote de Gestão do Pro) ou, sem ele, o `documentos-procuracao-e-honorarios`.

**Skills do Pro.** Contrato de prestação de serviços, NDA, acordo de sócios, alteração de contrato social, compromisso de compra e venda, e notificação ou distrato empresarial têm skill própria (`contrato-de-prestacao-de-servicos`, `nda-e-confidencialidade`, `acordo-de-socios`, `contrato-social-e-alteracao`, `compromisso-de-compra-e-venda`, `notificacao-e-distrato-empresarial`). Instalada, a skill prevalece sobre este método: siga este fluxo (plano e aval) e use as cláusulas e os alertas dela; onde divergirem, vale a skill, com o aviso de uma linha.

### Antes de escrever

1. Leia o perfil do escritório, `ESTILO-DO-ESCRITORIO.md` e o modelo do mesmo tipo em `MODELOS/`. Sem modelo, busque na pasta conectada ou no Drive o último contrato desse tipo feito pelo escritório e use como base, sem copiar dado do outro cliente. Sem nenhum, avise que o contrato sai na estrutura desta skill, sem a voz do escritório.
2. Briefing: tire do pedido o que ele já disse. Contrato também passa pelo `plano-antes-de-gerar`, em formato de **plano de uma tela**: a primeira mensagem abre com o ALERTA de prazo, se houver (assinatura que precisa de registro em prazo, vigência que vence, prazo de aviso), e traz **até 5 perguntas, priorizadas**, e o plano curto (tipo e lado, partes, objeto, condições essenciais, alertas de consumo, dado pessoal e vínculo, o que fica `[DEFINIR]`), sem Eixo nem Jurisprudência. Só redija depois do aval ("pode escrever"). Com **tipo, lado do cliente e objeto** no pedido, o plano sai com o que já veio e o resto vira `[DEFINIR: …]`; se o advogado aprovar "direto", siga como o `plano-antes-de-gerar` manda. Faltando um dos três, pergunte, dentro das cinco perguntas, o que falta desta lista:
   - tipo e quem o escritório representa;
   - partes (física ou jurídica) e se uma delas é consumidor;
   - objeto, com o detalhe que importa;
   - valor, pagamento, reajuste, multa e juros de atraso;
   - início, vigência, renovação, aviso prévio pra sair;
   - o que o cliente quer evitar; dado pessoal circulando; garantia; foro.
   O que ele não souber vira `[DEFINIR: …]`. Não trave o contrato por isso.

### Cláusulas essenciais por tipo

- **Prestação de serviços:** escopo e o que fica fora, entregas e aceite, preço, prazo, obrigações de cada lado, rescisão, multa, propriedade intelectual, confidencialidade e **natureza da relação** (autonomia real: quem organiza o trabalho, quem pode ser substituído, sem exclusividade nem horário imposto). Não escreva "ausência de vínculo" como cláusula padrão nem como escudo: declaração das partes não afasta o vínculo que os fatos mostram (CLT arts. 2º, 3º e 9º; STF, Tema 1389, afetado e sem tese). Com pessoalidade, habitualidade, exclusividade, subordinação e horário na ficha, a triagem barra: responda a consulta e ofereça as alternativas (contrato de trabalho ou reestruturação), e só redija se o advogado, informado, decidir. Se ele pedir a cláusula mesmo assim, escreva como declaração das partes, registre o alerta em ALERTAS e não a use como substituto da análise. Reajuste: sem cláusula não há reajuste; o IPCA do CC art. 389, parágrafo único, é só a atualização da obrigação inadimplida; reajuste com periodicidade menor que um ano é nulo (Lei 10.192/2001, art. 2º, §1º).
- **Compra e venda:** a coisa bem identificada, preço, entrega e risco, vícios, evicção, despesas de transferência. Imóvel de valor superior a **trinta vezes o maior salário mínimo vigente no País** pede escritura pública (CC art. 108, "não dispondo a lei em contrário", texto da Câmara conferido em 20/10/2026); abaixo disso, ou na promessa de compra e venda, o instrumento pode ser particular (CC art. 1.417 prevê o direito real com o registro). Imóvel: matrícula com ônus, alienação fiduciária e penhora averbada, certidões do vendedor, IPTU e condomínio em atraso; veja o `compromisso-de-compra-e-venda`.
- **Locação (Lei 8.245/1991):** finalidade, aluguel e reajuste, encargos, uma garantia só (art. 37, parágrafo único), multa proporcional na devolução antecipada (art. 4º), vistorias, benfeitorias.
- **Mútuo:** valor, parcelas, juros (CC art. 591; o teto depende de quem empresta: `[conferir taxa vigente]`), garantia, vencimento antecipado.
- **Confidencialidade:** o que é confidencial, exceções (já pública, já conhecida, ordem judicial), uso permitido, prazo que sobrevive ao contrato, devolução, multa.

Em todos: qualificação, foro e, se o cliente quer título executivo, duas testemunhas (CPC art. 784, III).

### Regras

- **Consumo:** confira cada cláusula contra o art. 51 do CDC. Cláusula que limita direito do consumidor vai em destaque (art. 54, §4º). O alerta vai no fim, visível.
- **Dado pessoal:** se o contrato faz circular dado de pessoa (cliente, funcionário, paciente), inclua cláusula de proteção de dados (Lei 13.709/2018): finalidade, papel de cada parte, segurança, incidente, destino no fim.
- **Lei atualizada:** você não revisou a legislação vigente. Nunca escreva que o contrato "está de acordo com a lei". Índice, taxa e valor de referência saem com `[conferir]`; artigo em dúvida, `[conferir artigo]`.
- CPF, RG e endereço só na qualificação. Sem o dado, `[DEFINIR: qualificação]`.

### Formato da saída

```
## [Tipo de contrato] · rascunho de [data]
Representamos: [parte]

[contrato completo, na numeração e no fecho do modelo]

---
PENDÊNCIAS
- [DEFINIR: …] (cláusula X)
ALERTAS
- Consumo: [cláusula · risco · sugestão]
- Dados pessoais: [o que circula · cláusula incluída]
A CONFERIR
- [artigos, taxas e índices marcados]
```

### Entrega em Word

O contrato vai **no arquivo .docx pra baixar e editar**, gerado com a ferramenta de criação de arquivos e montado pelo `timbrado-e-formatacao.md` (timbrado, ou `.docx` de modelo do mesmo tipo, ou documento limpo); PENDÊNCIAS, ALERTAS e A CONFERIR vão no fim do arquivo. Não cole o contrato no chat. No chat vai um resumo de até 8 linhas: o que fez, de onde tirou os dados, os alertas de consumo e de dado pessoal, o que ficou `[DEFINIR]` ou `[conferir]`. Se o ambiente não gerar .docx, diga em uma linha como ligar (Settings › Capabilities) e aí, sim, entregue o contrato inteiro no chat, em texto limpo, **sem marcação markdown** (sem `**`, sem `#`, sem `>`), pronto pra colar no Word.

### No fim

Diga ao advogado: "É rascunho. Preencha as pendências, confira os itens marcados e, se quiser uma segunda leitura, rode o `auditor-de-contratos` indicando o lado do seu cliente."

---

## MÉTODO: Auditor de contratos (auditor-de-contratos)


Também atende por: Análise contratual com parecer (a matriz de risco com a redação sugerida é o parecer; pedido de parecer formal sai em .docx).

Quando usar: Use quando o advogado colar ou apontar na pasta um contrato pra revisar, auditar, "ver os riscos", comparar duas versões ou dizer se o cliente pode assinar. Entrega a matriz de risco por cláusula (alto, médio, baixo, com o motivo), cláusulas abusivas e faltantes, obrigações e prazos como constam, o que mudou entre versões, redação sugerida por cláusula e um resumo de duas linhas pro cliente.

## Auditor de contratos

Contrato pronto, do cliente ou da outra parte, antes de assinar ou negociar. Contrato do zero é o `contrato-a-partir-do-briefing`.

### O que entra

- **O contrato.** Com a pasta conectada (Cowork) ou o Drive ligado, abra de lá, buscando pelo nome do cliente ou da outra parte; só peça o arquivo na conversa sem pasta nem Drive. Duas versões? Leia as duas.
- **De que lado o cliente está.** Sem isso não há risco: a mesma multa protege um e ameaça o outro. Se o advogado não disse, veja pela pasta do cliente ou pela ficha; pergunte só se não der pra saber.
- O que o cliente quer do negócio, se o advogado souber, em uma linha.
- O perfil do escritório e, pra redação sugerida, `ESTILO-DO-ESCRITORIO.md` e o modelo do mesmo tipo em `MODELOS/`. O modelo também é régua pra achar o que falta.

### Regras

- **Cláusula por cláusula, pelo número, mas na matriz só entra a que tem risco.** Cláusula neutra fica de fora, e o topo diz quantas foram lidas. O risco é medido pro lado do cliente, com o motivo em uma linha. Alto: pode custar dinheiro relevante, prender o cliente no contrato ou ser nulo. Médio: desequilíbrio que dá pra negociar. Baixo: redação confusa ou incompleta.
- **Abusiva:** em relação de consumo, confira contra o art. 51 do CDC e contra o destaque que o art. 54, §4º exige na cláusula que limita direito. Fora do consumo, fale em desequilíbrio, não em abusividade.
- **Faltante:** o que esse tipo de contrato costuma ter e este não tem (rescisão, multa, reajuste, foro, garantia, limite de responsabilidade, proteção de dados quando circula dado pessoal).
- **Obrigações e prazos como constam:** copie o prazo ou a data ao pé da letra, com a cláusula. Não converta em data de vencimento.
- **Versões:** só o que mudou, e quem ganha com a mudança.
- **Redação sugerida:** texto pronto pra colar, só nas cláusulas de risco alto e médio, na voz do modelo do escritório.
- Artigo em dúvida: `[conferir artigo]`. Nunca escreva que o contrato "está conforme a lei": você não revisou a legislação vigente.
- CPF, endereço e conta bancária do contrato não se repetem na saída.

### Formato da saída

```
## Auditoria: [tipo de contrato] · cliente = [parte]
Lido em: [data] · Versões: [única | v1 e v2] · Cláusulas lidas: [N] · com risco: [X]

MATRIZ DE RISCO (mais grave primeiro)
| Cláusula | O que diz (até 10 palavras) | Risco | Por quê | Sugestão |

FALTANDO
- [cláusula ausente · por que importa]

OBRIGAÇÕES E PRAZOS COMO CONSTAM
| Quem | O quê | Prazo ou data (literal) | Cláusula |

O QUE MUDOU ENTRE VERSÕES (só com duas)
| Cláusula | Antes | Depois | Favorece |

REDAÇÃO SUGERIDA
Cláusula X: onde se lê "…", leia-se "…"

PRO CLIENTE (duas linhas)
[o que o contrato faz com ele e o que mudar antes de assinar]

A CONFERIR
- [artigos marcados, trecho ilegível, anexo citado e não enviado]
```

### No fim

Diga ao advogado: "A matriz mede o risco pro lado que você indicou. Confira os artigos marcados, e leia o resumo pro cliente antes de mandar: ele sai em seu nome. Pra virar mensagem de WhatsApp, é a `comunicacao-com-cliente`."

---

## MÉTODO: Documentos, procuração e honorários (documentos-procuracao-e-honorarios)


Quando usar: Use quando o advogado disser "o que eu peço pro cliente?", "cobra os documentos que faltam", "faz a procuração", "contrato de honorários do cliente novo" ou pedir a lista de documentos de um caso novo, a mensagem cobrando o que falta, ou os documentos de entrada (procuração, contrato de honorários, declaração de hipossuficiência). Cobre as duas pontas — o checklist para pedir ao cliente e a geração dos documentos a partir dos dados dele.


Duas tarefas separadas, mas que andam juntas no caso novo: (a) o checklist do que pedir e cobrar, e (b) a geração dos documentos de entrada a partir dos dados do cliente.

**Skills do pacote de Gestão (Pro).** Instaladas, elas prevalecem sobre este método nos pontos delas: `contrato-de-honorarios-por-area` (cláusulas por área, destaque dos honorários, rescisão e substabelecimento), `proposta-de-honorarios` (a proposta antes do contrato), `aviso-de-uso-de-ia-ao-cliente` (aviso e consentimento sobre IA) e `onboarding-do-cliente-por-area` (boas-vindas e documentos priorizados por área). Onde divergirem deste método, vale a skill, com o aviso de uma linha.

### (a) Checklist de documentos por tipo de ação

Liste só o que é comum ao tipo de ação informado, sem inventar exigência que o advogado não confirmou. Se o perfil tem módulo de área (`area-…`), o checklist da seção 5 dele vem primeiro, e os poderes especiais da procuração saem da seção 9; a lista abaixo é a reserva. Categorias mais comuns:

- **Cível/consumo**: documento pessoal (RG/CPF ou CNH), comprovante de endereço, contrato ou nota fiscal do produto/serviço, prints da negociação/reclamação, protocolo de atendimento (Procon, SAC).
- **Família**: documento pessoal das partes, certidão de casamento/união estável, certidão de nascimento dos filhos, comprovante de renda (se houver pedido de alimentos), comprovante de bens (se houver partilha).
- **Trabalhista**: documento pessoal, carteira de trabalho (física ou CTPS digital), contracheques, comunicações com a empresa (e-mail, WhatsApp), eventual carta de demissão/aviso.
- **Previdenciário**: documento pessoal, CNIS, carteira de trabalho, documentos médicos (se for benefício por incapacidade), comprovante de atividade rural/especial quando for o caso.
- **Penal**: documento pessoal, boletim de ocorrência ou notícia-crime, eventual notificação/intimação recebida, contato de testemunhas.

Se o tipo de ação não estiver claro, pergunte antes de montar a lista — não misture documentos de áreas diferentes.

#### Mensagens prontas

No tom do escritório, gere só a que a hora pede (as duas rodam bem no modelo leve):
1. **Pedido inicial**, listando o que falta, em linguagem simples, sem prazo ameaçador. É a padrão.
2. **Cobrança do que faltou**, só quando ele pedir: mais direta, lembrando o que já foi enviado e o que falta, sem soar como pressão indevida.

### (b) Procuração, contrato de honorários e declaração de hipossuficiência

**Dados de entrada** (o mínimo para os três documentos): nome completo, nacionalidade, estado civil, profissão, RG, CPF, endereço completo. Se algum faltar, gere o documento com `[DEFINIR: dado]` no lugar — não invente número nem endereço.

- **Modelo do escritório:** abra o do mesmo tipo em `MODELOS/`. Sem ele, busque na pasta conectada ou no Drive a última procuração ou o último contrato de honorários do escritório e use como base, sem copiar dado do outro cliente.
- **Sem nenhum**, use a estrutura padrão (qualificação das partes, objeto, poderes/cláusulas, foro, data e local para assinatura) e avise numa linha que saiu na estrutura padrão.
- **Procuração ad judicia**: poderes gerais para o foro em geral, mais os específicos que o advogado indicar (substabelecer, transigir, receber e dar quitação etc.). Sem poder de substabelecer com reserva por padrão, salvo se pedido.
- **Contrato de honorários**: percentual/valor, forma de pagamento e foro sempre entram como `[DEFINIR: percentual]`, `[DEFINIR: forma de pagamento]`, `[DEFINIR: foro]` a não ser que o advogado já tenha informado. Lembre que o percentual costuma seguir a tabela de honorários da OAB do estado como piso de referência (CED, art. 48, §6º) **[conferir na seccional]** — não afirme um número de tabela sem fonte confirmada pelo advogado. Com o pacote de Gestão, o contrato por área sai pela skill `contrato-de-honorarios-por-area` (cláusulas de família, trabalhista com êxito, previdenciário com retroativo, criminal por fase, destaque pelo art. 22, §4º, da Lei 8.906); sem proposta aceita, ela gera com `[DEFINIR]` e sugere a `proposta-de-honorarios`. Quota litis: CED, art. 50.
- **Aviso de uso de IA**: se o escritório usa IA com dado do cliente, ofereça junto com a procuração e o contrato o aviso e o consentimento da Recomendação CFOAB 001/2024, pela skill `aviso-de-uso-de-ia-ao-cliente`. No contrato de honorários, a IA entra só como cláusula de remissão ao aviso. Dado de saúde ou de criança que vá para a ferramenta pede consentimento específico e destacado (LGPD, art. 11, I): não escreva no aviso que "não colocamos" esses dados se eles forem usados. Sem a skill, avise o advogado de que o aviso falta e não improvise a numeração da Recomendação.
- **Declaração de hipossuficiência**: só gere se o advogado pedir expressamente e confirmar que o cliente de fato se declara sem condição de arcar com custas sem prejuízo do sustento próprio ou da família — não é automático para todo caso. A procuração precisa de poderes especiais para assinar essa declaração (CPC, art. 105).

### Regra de dados pessoais

CPF, RG, endereço completo e demais dados pessoais **só entram no documento final gerado**, nunca ficam soltos na conversa além do necessário para montar o documento. Não repita esses dados em resumos ou mensagens que não sejam o próprio documento.

### Formato fixo

```
## [Tipo de documento] — [nome do cliente]

[corpo do documento, na estrutura do escritório ou na padrão]

---
[DEFINIR: itens que faltaram]
```

Para o checklist:

```
## Documentos — [tipo de ação] — [cliente]

### O que falta
- [ ] item — [para quê serve, se não for óbvio]

### Mensagem: [pedido inicial | cobrança do que faltou]
[texto]
```

### Entrega em Word

Procuração, contrato de honorários e declaração vão **no arquivo .docx pra baixar e editar**, gerado com a ferramenta de criação de arquivos e montado pelo `timbrado-e-formatacao.md` (timbrado, ou `.docx` de modelo do mesmo tipo, ou documento limpo). Não cole o documento no chat. No chat vai um resumo de até 8 linhas: o que fez, de onde tirou os dados, o que ficou `[DEFINIR]`. Se o ambiente não gerar .docx, diga em uma linha como ligar (Settings › Capabilities) e aí, sim, entregue o documento inteiro no chat, em texto limpo, **sem marcação markdown** (sem `**`, sem `#`, sem `>`), pronto pra colar no Word.

### Depois de entregar

Diga ao advogado: "Confira os campos marcados [DEFINIR] antes de imprimir ou enviar para assinatura, principalmente percentual de honorários e foro. Quando os documentos chegarem, a `ficha-do-caso` organiza o caso." Se o escritório usa IA com dado do cliente e não há aviso, lembre o `aviso-de-uso-de-ia-ao-cliente`.

