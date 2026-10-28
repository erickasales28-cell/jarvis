# contrato-a-partir-do-briefing

Quando usar: Use quando o advogado disser "faz um contrato de prestação de serviços", "minuta de locação", "preciso de um NDA", "contrato de compra e venda pro cliente" ou pedir contrato novo (prestação de serviços, compra e venda, locação, mútuo, confidencialidade) a partir do que o cliente quer. Tira do pedido o que já veio, pergunta o resto numa mensagem só, redige sobre o modelo do escritório, marca [DEFINIR] no que falta e alerta cláusula abusiva em relação de consumo e dado pessoal. Contrato de honorários não entra aqui.

# Contrato a partir do briefing

Contrato novo, do zero ou de um modelo. Revisar contrato que já existe é o `auditor-de-contratos`; contrato de honorários do escritório é o `contrato-de-honorarios-por-area` (pacote de Gestão do Pro) ou, sem ele, o `documentos-procuracao-e-honorarios`.

**Skills do Pro.** Contrato de prestação de serviços, NDA, acordo de sócios, alteração de contrato social, compromisso de compra e venda, e notificação ou distrato empresarial têm skill própria (`contrato-de-prestacao-de-servicos`, `nda-e-confidencialidade`, `acordo-de-socios`, `contrato-social-e-alteracao`, `compromisso-de-compra-e-venda`, `notificacao-e-distrato-empresarial`). Instalada, a skill prevalece sobre este método: siga este fluxo (plano e aval) e use as cláusulas e os alertas dela; onde divergirem, vale a skill, com o aviso de uma linha.

## Antes de escrever

1. Leia o perfil do escritório, `ESTILO-DO-ESCRITORIO.md` e o modelo do mesmo tipo em `MODELOS/`. Sem modelo, busque na pasta conectada ou no Drive o último contrato desse tipo feito pelo escritório e use como base, sem copiar dado do outro cliente. Sem nenhum, avise que o contrato sai na estrutura desta skill, sem a voz do escritório.
2. Briefing: tire do pedido o que ele já disse. Contrato também passa pelo `plano-antes-de-gerar`, em formato de **plano de uma tela**: a primeira mensagem abre com o ALERTA de prazo, se houver (assinatura que precisa de registro em prazo, vigência que vence, prazo de aviso), e traz **até 5 perguntas, priorizadas**, e o plano curto (tipo e lado, partes, objeto, condições essenciais, alertas de consumo, dado pessoal e vínculo, o que fica `[DEFINIR]`), sem Eixo nem Jurisprudência. Só redija depois do aval ("pode escrever"). Com **tipo, lado do cliente e objeto** no pedido, o plano sai com o que já veio e o resto vira `[DEFINIR: …]`; se o advogado aprovar "direto", siga como o `plano-antes-de-gerar` manda. Faltando um dos três, pergunte, dentro das cinco perguntas, o que falta desta lista:
   - tipo e quem o escritório representa;
   - partes (física ou jurídica) e se uma delas é consumidor;
   - objeto, com o detalhe que importa;
   - valor, pagamento, reajuste, multa e juros de atraso;
   - início, vigência, renovação, aviso prévio pra sair;
   - o que o cliente quer evitar; dado pessoal circulando; garantia; foro.
   O que ele não souber vira `[DEFINIR: …]`. Não trave o contrato por isso.

## Cláusulas essenciais por tipo

- **Prestação de serviços:** escopo e o que fica fora, entregas e aceite, preço, prazo, obrigações de cada lado, rescisão, multa, propriedade intelectual, confidencialidade e **natureza da relação** (autonomia real: quem organiza o trabalho, quem pode ser substituído, sem exclusividade nem horário imposto). Não escreva "ausência de vínculo" como cláusula padrão nem como escudo: declaração das partes não afasta o vínculo que os fatos mostram (CLT arts. 2º, 3º e 9º; STF, Tema 1389, afetado e sem tese). Com pessoalidade, habitualidade, exclusividade, subordinação e horário na ficha, a triagem barra: responda a consulta e ofereça as alternativas (contrato de trabalho ou reestruturação), e só redija se o advogado, informado, decidir. Se ele pedir a cláusula mesmo assim, escreva como declaração das partes, registre o alerta em ALERTAS e não a use como substituto da análise. Reajuste: sem cláusula não há reajuste; o IPCA do CC art. 389, parágrafo único, é só a atualização da obrigação inadimplida; reajuste com periodicidade menor que um ano é nulo (Lei 10.192/2001, art. 2º, §1º).
- **Compra e venda:** a coisa bem identificada, preço, entrega e risco, vícios, evicção, despesas de transferência. Imóvel de valor superior a **trinta vezes o maior salário mínimo vigente no País** pede escritura pública (CC art. 108, "não dispondo a lei em contrário", texto da Câmara conferido em 20/10/2026); abaixo disso, ou na promessa de compra e venda, o instrumento pode ser particular (CC art. 1.417 prevê o direito real com o registro). Imóvel: matrícula com ônus, alienação fiduciária e penhora averbada, certidões do vendedor, IPTU e condomínio em atraso; veja o `compromisso-de-compra-e-venda`.
- **Locação (Lei 8.245/1991):** finalidade, aluguel e reajuste, encargos, uma garantia só (art. 37, parágrafo único), multa proporcional na devolução antecipada (art. 4º), vistorias, benfeitorias.
- **Mútuo:** valor, parcelas, juros (CC art. 591; o teto depende de quem empresta: `[conferir taxa vigente]`), garantia, vencimento antecipado.
- **Confidencialidade:** o que é confidencial, exceções (já pública, já conhecida, ordem judicial), uso permitido, prazo que sobrevive ao contrato, devolução, multa.

Em todos: qualificação, foro e, se o cliente quer título executivo, duas testemunhas (CPC art. 784, III).

## Regras

- **Consumo:** confira cada cláusula contra o art. 51 do CDC. Cláusula que limita direito do consumidor vai em destaque (art. 54, §4º). O alerta vai no fim, visível.
- **Dado pessoal:** se o contrato faz circular dado de pessoa (cliente, funcionário, paciente), inclua cláusula de proteção de dados (Lei 13.709/2018): finalidade, papel de cada parte, segurança, incidente, destino no fim.
- **Lei atualizada:** você não revisou a legislação vigente. Nunca escreva que o contrato "está de acordo com a lei". Índice, taxa e valor de referência saem com `[conferir]`; artigo em dúvida, `[conferir artigo]`.
- CPF, RG e endereço só na qualificação. Sem o dado, `[DEFINIR: qualificação]`.

## Formato da saída

```
# [Tipo de contrato] · rascunho de [data]
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

## Entrega em Word

O contrato vai **no arquivo .docx pra baixar e editar**, gerado com a ferramenta de criação de arquivos e montado pelo `timbrado-e-formatacao.md` (timbrado, ou `.docx` de modelo do mesmo tipo, ou documento limpo); PENDÊNCIAS, ALERTAS e A CONFERIR vão no fim do arquivo. Não cole o contrato no chat. No chat vai um resumo de até 8 linhas: o que fez, de onde tirou os dados, os alertas de consumo e de dado pessoal, o que ficou `[DEFINIR]` ou `[conferir]`. Se o ambiente não gerar .docx, diga em uma linha como ligar (Settings › Capabilities) e aí, sim, entregue o contrato inteiro no chat, em texto limpo, **sem marcação markdown** (sem `**`, sem `#`, sem `>`), pronto pra colar no Word.

## No fim

Diga ao advogado: "É rascunho. Preencha as pendências, confira os itens marcados e, se quiser uma segunda leitura, rode o `auditor-de-contratos` indicando o lado do seu cliente."
