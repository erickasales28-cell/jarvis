# documentos-procuracao-e-honorarios

Quando usar: Use quando o advogado disser "o que eu peço pro cliente?", "cobra os documentos que faltam", "faz a procuração", "contrato de honorários do cliente novo" ou pedir a lista de documentos de um caso novo, a mensagem cobrando o que falta, ou os documentos de entrada (procuração, contrato de honorários, declaração de hipossuficiência). Cobre as duas pontas — o checklist para pedir ao cliente e a geração dos documentos a partir dos dados dele.

# Documentos, procuração e honorários

Duas tarefas separadas, mas que andam juntas no caso novo: (a) o checklist do que pedir e cobrar, e (b) a geração dos documentos de entrada a partir dos dados do cliente.

**Skills do pacote de Gestão (Pro).** Instaladas, elas prevalecem sobre este método nos pontos delas: `contrato-de-honorarios-por-area` (cláusulas por área, destaque dos honorários, rescisão e substabelecimento), `proposta-de-honorarios` (a proposta antes do contrato), `aviso-de-uso-de-ia-ao-cliente` (aviso e consentimento sobre IA) e `onboarding-do-cliente-por-area` (boas-vindas e documentos priorizados por área). Onde divergirem deste método, vale a skill, com o aviso de uma linha.

## (a) Checklist de documentos por tipo de ação

Liste só o que é comum ao tipo de ação informado, sem inventar exigência que o advogado não confirmou. Se o perfil tem módulo de área (`area-…`), o checklist da seção 5 dele vem primeiro, e os poderes especiais da procuração saem da seção 9; a lista abaixo é a reserva. Categorias mais comuns:

- **Cível/consumo**: documento pessoal (RG/CPF ou CNH), comprovante de endereço, contrato ou nota fiscal do produto/serviço, prints da negociação/reclamação, protocolo de atendimento (Procon, SAC).
- **Família**: documento pessoal das partes, certidão de casamento/união estável, certidão de nascimento dos filhos, comprovante de renda (se houver pedido de alimentos), comprovante de bens (se houver partilha).
- **Trabalhista**: documento pessoal, carteira de trabalho (física ou CTPS digital), contracheques, comunicações com a empresa (e-mail, WhatsApp), eventual carta de demissão/aviso.
- **Previdenciário**: documento pessoal, CNIS, carteira de trabalho, documentos médicos (se for benefício por incapacidade), comprovante de atividade rural/especial quando for o caso.
- **Penal**: documento pessoal, boletim de ocorrência ou notícia-crime, eventual notificação/intimação recebida, contato de testemunhas.

Se o tipo de ação não estiver claro, pergunte antes de montar a lista — não misture documentos de áreas diferentes.

### Mensagens prontas

No tom do escritório, gere só a que a hora pede (as duas rodam bem no modelo leve):
1. **Pedido inicial**, listando o que falta, em linguagem simples, sem prazo ameaçador. É a padrão.
2. **Cobrança do que faltou**, só quando ele pedir: mais direta, lembrando o que já foi enviado e o que falta, sem soar como pressão indevida.

## (b) Procuração, contrato de honorários e declaração de hipossuficiência

**Dados de entrada** (o mínimo para os três documentos): nome completo, nacionalidade, estado civil, profissão, RG, CPF, endereço completo. Se algum faltar, gere o documento com `[DEFINIR: dado]` no lugar — não invente número nem endereço.

- **Modelo do escritório:** abra o do mesmo tipo em `MODELOS/`. Sem ele, busque na pasta conectada ou no Drive a última procuração ou o último contrato de honorários do escritório e use como base, sem copiar dado do outro cliente.
- **Sem nenhum**, use a estrutura padrão (qualificação das partes, objeto, poderes/cláusulas, foro, data e local para assinatura) e avise numa linha que saiu na estrutura padrão.
- **Procuração ad judicia**: poderes gerais para o foro em geral, mais os específicos que o advogado indicar (substabelecer, transigir, receber e dar quitação etc.). Sem poder de substabelecer com reserva por padrão, salvo se pedido.
- **Contrato de honorários**: percentual/valor, forma de pagamento e foro sempre entram como `[DEFINIR: percentual]`, `[DEFINIR: forma de pagamento]`, `[DEFINIR: foro]` a não ser que o advogado já tenha informado. Lembre que o percentual costuma seguir a tabela de honorários da OAB do estado como piso de referência (CED, art. 48, §6º) **[conferir na seccional]** — não afirme um número de tabela sem fonte confirmada pelo advogado. Com o pacote de Gestão, o contrato por área sai pela skill `contrato-de-honorarios-por-area` (cláusulas de família, trabalhista com êxito, previdenciário com retroativo, criminal por fase, destaque pelo art. 22, §4º, da Lei 8.906); sem proposta aceita, ela gera com `[DEFINIR]` e sugere a `proposta-de-honorarios`. Quota litis: CED, art. 50.
- **Aviso de uso de IA**: se o escritório usa IA com dado do cliente, ofereça junto com a procuração e o contrato o aviso e o consentimento da Recomendação CFOAB 001/2024, pela skill `aviso-de-uso-de-ia-ao-cliente`. No contrato de honorários, a IA entra só como cláusula de remissão ao aviso. Dado de saúde ou de criança que vá para a ferramenta pede consentimento específico e destacado (LGPD, art. 11, I): não escreva no aviso que "não colocamos" esses dados se eles forem usados. Sem a skill, avise o advogado de que o aviso falta e não improvise a numeração da Recomendação.
- **Declaração de hipossuficiência**: só gere se o advogado pedir expressamente e confirmar que o cliente de fato se declara sem condição de arcar com custas sem prejuízo do sustento próprio ou da família — não é automático para todo caso. A procuração precisa de poderes especiais para assinar essa declaração (CPC, art. 105).

## Regra de dados pessoais

CPF, RG, endereço completo e demais dados pessoais **só entram no documento final gerado**, nunca ficam soltos na conversa além do necessário para montar o documento. Não repita esses dados em resumos ou mensagens que não sejam o próprio documento.

## Formato fixo

```
# [Tipo de documento] — [nome do cliente]

[corpo do documento, na estrutura do escritório ou na padrão]

---
[DEFINIR: itens que faltaram]
```

Para o checklist:

```
# Documentos — [tipo de ação] — [cliente]

## O que falta
- [ ] item — [para quê serve, se não for óbvio]

## Mensagem: [pedido inicial | cobrança do que faltou]
[texto]
```

## Entrega em Word

Procuração, contrato de honorários e declaração vão **no arquivo .docx pra baixar e editar**, gerado com a ferramenta de criação de arquivos e montado pelo `timbrado-e-formatacao.md` (timbrado, ou `.docx` de modelo do mesmo tipo, ou documento limpo). Não cole o documento no chat. No chat vai um resumo de até 8 linhas: o que fez, de onde tirou os dados, o que ficou `[DEFINIR]`. Se o ambiente não gerar .docx, diga em uma linha como ligar (Settings › Capabilities) e aí, sim, entregue o documento inteiro no chat, em texto limpo, **sem marcação markdown** (sem `**`, sem `#`, sem `>`), pronto pra colar no Word.

## Depois de entregar

Diga ao advogado: "Confira os campos marcados [DEFINIR] antes de imprimir ou enviar para assinatura, principalmente percentual de honorários e foro. Quando os documentos chegarem, a `ficha-do-caso` organiza o caso." Se o escritório usa IA com dado do cliente e não há aviso, lembre o `aviso-de-uso-de-ia-ao-cliente`.
