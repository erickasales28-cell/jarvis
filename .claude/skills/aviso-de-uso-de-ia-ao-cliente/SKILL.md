---
name: aviso-de-uso-de-ia-ao-cliente
description: Use quando o advogado pedir "aviso de uso de IA pro cliente", "termo de consentimento de inteligência artificial", "preciso avisar o cliente que uso IA", "o cliente não quer que eu use IA", "como formalizo o uso do Claude no caso", "modelo de aviso da Recomendação da OAB". Gera o documento escrito, em linguagem clara, com os cinco pontos da Recomendação 001/2024 do Conselho Federal da OAB, a assinatura do consentimento, o tratamento da recusa e a regra de arquivamento. Complementa contrato-de-honorarios-por-area e onboarding-do-cliente-por-area, que apenas apontam pra ele.
---

# Aviso de uso de IA ao cliente

Antes, use a skill `advo-escritorio` e leia nela `metodos/peca-a-partir-da-ficha.md`, `metodos/plano-antes-de-gerar.md` e `metodos/anonimizacao-para-ia.md`. Abra o `ESTILO-DO-ESCRITORIO.md` e a `FICHA-DO-CASO.md`.

Onde esta skill e o método do Kit divergirem (ex.: `gestao-de-prazos-e-intimacoes`, `documentos-procuracao-e-honorarios`), vale esta skill, e a divergência é dita ao advogado.

Não é peça processual. Plano de uma tela: até 5 perguntas, priorizadas; sem Eixo nem Jurisprudência quando não houver tese. Se o advogado não usa IA no caso, pare: não há o que avisar. Entrega em .docx, como a `documentos-procuracao-e-honorarios`.

## O que a Recomendação pede (item 4, conferido no PDF do acórdão do Conselho Pleno em 21/10/2026)

A Recomendação CFOAB 001/2024 (Conselho Pleno, 11/11/2024) é **recomendação, não norma**: orienta, e o advogado responde pelo que fizer. O item 4 diz:
- **4.1.1:** quem usar IA na prestação do serviço deve, **antes de começar a usar**, formalizar a intenção ao cliente.
- **4.2.1:** a formalização é por **documento escrito, em linguagem clara e acessível**, explicando cinco pontos: (I) o propósito do uso na defesa dos direitos do cliente; (II) os benefícios e as limitações da tecnologia aplicada ao caso; (III) os riscos, como a precisão das informações geradas e a exposição de dados; (IV) as medidas de segurança e confidencialidade; (V) a possibilidade de revisão humana dos resultados.
- **4.3:** a comunicação com o cliente não pode ser feita só a partir de conteúdo gerado por IA; o cliente pode pedir pra falar com um ser humano.
- **4.3.1:** consentimento **informado e explícito, por assinatura** do documento.
- **4.3.2:** se o cliente não consentir, o advogado respeita e informa as outras abordagens, tecnológicas ou manuais.
- **4.3.3:** o documento fica **arquivado até o fim da prestação de serviços**, acessível pra consulta e auditoria.
- **4.3.4:** vale em **qualquer fase** em que o advogado decida usar IA (peças, pesquisa, análise de documentos, outra atividade).

Base geral: o advogado informa o cliente de modo claro e inequívoco sobre riscos e consequências (CED, art. 9º); o contrato diz com clareza e precisão o objeto e a extensão do patrocínio (CED, art. 48, §1º); sigilo (CED, arts. 35 e 36); LGPD (art. 6º, finalidade e necessidade; art. 9º, informação clara; art. 11, dado sensível; art. 33, transferência internacional).

## Antes (pergunte, no máximo 5)

1. Quais ferramentas o escritório usa (nome e plano: Claude, ChatGPT, outra) e pra quê (pesquisa, rascunho, organização de documentos, transcrição)?
2. O plano usado permite desligar o uso dos dados pra treinamento? O advogado já conferiu? (CFOAB 2.2: diligência na escolha do fornecedor.) Se não souber: `[conferir configuração da conta]`.
3. O provedor trata dados fora do Brasil? (LGPD, art. 33.) Se não souber: `[conferir política do provedor]`.
4. Que dados do cliente entram: só fatos anonimizados, ou documentos com nome, saúde, financeiro? (Dado sensível, como laudo com CID: aviso na versão B, com consentimento específico; sem dado sensível: versão A.)
5. Algum caso em segredo de justiça? Aí o aviso pergunta se o cliente quer IA mesmo assim, e a ferramenta só recebe o anonimizado.

## O documento (modelo)

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

## Regras

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

## Saída

O aviso em .docx, com `[DEFINIR]` onde o advogado não informou a ferramenta, a finalidade ou a política do provedor. No chat, até 8 linhas: o que foi preenchido, o que ficou `[DEFINIR]` e `[conferir]`, e o lembrete de colher a assinatura **antes** do uso.

## Não fazer

- Prometer que a ferramenta é "100% segura" ou que "nenhum dado sai do computador".
- Pôr dado do cliente no próprio aviso além do nome e do apelido do caso.
- Usar o aviso como cláusula escondida no meio do contrato: é documento separado, que o cliente lê e assina.
- Dizer que a Recomendação é obrigatória: é recomendação do Conselho Federal; a conformidade é do advogado, que responde pelo que fizer.

*Referências conferidas em 21/10/2026 (Recomendação CFOAB 001/2024, texto final anexo ao acórdão do Conselho Pleno de 11/11/2024 na Proposição 49.0000.2024.007325-9/COP, PDF publicado pelo Migalhas, itens 2.2, 2.4, 4.1.1, 4.2.1, 4.3 e 4.3.1 a 4.3.4, 5.1; CED, arts. 9º, 35, 36 e 48, PDF da OAB-SE; LGPD, arts. 6º, 8º, §1º, 9º, 11, I, e 33, Planalto via proxy). A Recomendação será revisada periodicamente (item 5.1): confira a versão vigente.*
