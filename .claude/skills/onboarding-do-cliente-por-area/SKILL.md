---
name: onboarding-do-cliente-por-area
description: Use quando o advogado disser "o cliente fechou, e agora?", "kit de boas-vindas", "onboarding do cliente", "lista de documentos do caso novo", "o que o cliente precisa fazer", "procuração e declaração de hipossuficiência do cliente novo", "combina canal e horário com o cliente". Complementa documentos-procuracao-e-honorarios (checklist genérico e geração dos documentos) com o pacote de entrada por área: boas-vindas, lista priorizada, poderes da procuração, hipossuficiência, o que o cliente faz e não faz, canal e horário.
---

# Onboarding do cliente por área

Antes, use a skill `advo-escritorio` e leia nela `metodos/documentos-procuracao-e-honorarios.md`, `metodos/peca-a-partir-da-ficha.md` e `metodos/plano-antes-de-gerar.md`. Abra o `ESTILO-DO-ESCRITORIO.md`, o módulo `area-…` (a seção 5 é a lista de documentos da área) e a ficha de atendimento da primeira consulta.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se o cliente ainda não contratou, pare e use a `proposta-de-honorarios`. Se há **prazo correndo**, a primeira linha do pacote é só o que permite agir; o resto vem depois.

## Antes (pergunte, no máximo 5)

1. Área e tipo de ação (divórcio, rescisórias, aposentadoria, defesa criminal, cobrança...).
2. Há prazo ou audiência marcada? Qual a data, como consta?
3. Quem é o cliente: pessoa capaz, menor, curatelado, empresa? (muda quem assina e quais documentos.)
4. O que o cliente já mandou? (não peça de novo.)
5. Canal e horário que o escritório usa: WhatsApp, e-mail, ligação; horário de resposta.

## O pacote (nesta ordem)

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

## Cobrança do que faltou

Em três níveis, no tom de quem ajuda: 1) lista do que falta, com o motivo de cada item; 2) lembrete com o que já chegou e o que ainda falta; 3) "sem estes documentos não conseguimos protocolar até [data como consta]". Sem ameaça. Se um prazo corre, diga qual item o destrava.

## Saída

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

## Não fazer

- Pedir tudo de uma vez: máximo 10 itens, o que o prazo exige primeiro.
- Misturar documentos de áreas diferentes.
- Gerar declaração de hipossuficiência por padrão.
- Dar poder especial que o caso não pede.
- Prometer prazo de protocolo ou resultado nas boas-vindas.

*Referências conferidas em 21/10/2026 (CPC, arts. 99, §§2º a 4º, e 105, caput e §1º, Planalto via proxy; Provimento 205/2021, arts. 3º e 6º, PDF da OAB-ES; CED, art. 2º, PDF da OAB-SE; LGPD, art. 9º, Planalto via proxy; Recomendação CFOAB 001/2024, itens 4.1.1 e 4.3.1, PDF do acórdão; limite de 10 MB do PJe segundo o TRT1, citado na pesquisa de 29/09/2026, não reaberto: `[conferir limite do tribunal]`).*
