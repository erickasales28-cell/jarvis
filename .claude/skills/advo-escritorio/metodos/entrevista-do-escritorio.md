# entrevista-do-escritorio

Quando usar: Use quando o advogado disser "vamos configurar o escritório", "vamos começar", "monta meu perfil" ou "atualiza o perfil", ou quando o projeto ainda não tiver um PERFIL DO ESCRITÓRIO. Conduz uma entrevista curta, escolhe o módulo da área e gera o perfil que todas as outras skills do kit leem.

# Entrevista do escritório

O resultado é um perfil de **uma página no máximo** (cerca de 400 palavras). Ele vai junto em toda conversa, então cada linha precisa mudar o trabalho. Se uma linha não muda nada, ela sai.

## Como conduzir

- **Comece pelas peças, não pelas perguntas.** Com a pasta conectada (Cowork) ou o Drive ligado, rode junto a `modelos-do-escritorio` e preencha sozinho o que as peças protocoladas já mostram: nome, cidade, OAB no fecho, áreas, tribunais, sistema, tratamento ao juízo, jeito de citar, fecho. Sem pasta nem Drive, a primeira pergunta é onde ficam as peças.
- **Depois, uma mensagem só** com o que as peças não responderam, em tópicos de resposta curta. O que ele não souber fica "a definir". Não pergunte o que você já leu.
- Não registre dado de cliente no perfil. O perfil é do escritório, não de um caso.

## O que o perfil precisa ter

1. **Quem** (as peças mostram quase tudo): nome do escritório, cidade e UF, quantas pessoas trabalham, e se o número da OAB entra no fecho das peças.
2. **Onde atua:** áreas em ordem de volume, justiça (estadual, federal, do trabalho), tribunais e sistemas (PJe, e-SAJ, eproc, Projudi). Pelas áreas, indique o **módulo da área**: o kit traz oito (`area-civel-consumidor-e-imobiliario`, `area-familia-e-sucessoes`, `area-trabalhista`, `area-previdenciario`, `area-penal`, `area-tributario`, `area-empresarial`, `area-eleitoral`). Ele instala o da área principal (mais de um, se atua em mais de uma) e o perfil ganha a linha `Módulos de área: area-…`. Toda skill que faz peça, prazo, pesquisa, risco, checklist ou audiência abre esse módulo antes de trabalhar. Área fora da lista: o de Cível cobre a base.
3. **Como escreve** (sai das peças, não se pergunta): tratamento ao juízo, grau de formalidade, tamanho típico da peça, se usa tópicos numerados, como cita jurisprudência (ementa, trecho ou só a referência) e o fecho padrão. Duas preferências entram sempre, em linha própria e com estas palavras exatas, porque a `timbrado-e-formatacao` as lê ao pé da letra: `Numeração de parágrafos: sim` (ou `não`) e `Destaques: negrito` (ou `sublinhado`, ou `nenhum`). Se as peças não mostram, pergunte as duas.
4. **O que nunca fazer:** expressões que o escritório não usa, teses que não sustenta, cuidados próprios da casa.
5. **Com o cliente:** o canal (WhatsApp, e-mail), se trata por você ou por senhor(a), o tamanho das mensagens, e se o contrato de honorários já avisa o cliente sobre o uso de IA. Se ainda não avisa, o perfil anota: "incluir cláusula de IA no contrato".

## Saída

Entregue o arquivo `PERFIL-DO-ESCRITORIO.md` neste formato, em tópicos curtos:

```
# Perfil do escritório: [nome]
## Quem somos
## Onde atuamos
Módulos de área: area-…
## Como escrevemos
Numeração de parágrafos: sim
Destaques: negrito
[demais linhas: tratamento ao juízo, abertura, fecho, como cita]
## Nunca fazemos
## Com o cliente
```

Depois, diga ao advogado onde colar o perfil:
- **Claude:** nas instruções do projeto ("Instruções do projeto"), pra valer em toda conversa daquele projeto.
- **ChatGPT:** no campo de instruções do GPT do escritório ou do Projeto.

**Mais de um advogado no escritório:** no plano Team do Claude, o projeto "Escritório" e os projetos de caso podem ser compartilhados com a equipe. O perfil nas instruções, o timbrado, os modelos e o `TESES-E-TRECHOS.md` nos arquivos passam a valer pra todos, e a peça sai com a mesma cara qualquer que seja quem escreve. Cada advogado liga o Advoclaude na própria conta. Combine uma pessoa só pra editar o perfil e o banco de teses, pra não nascerem duas versões. Caso em segredo de justiça se compartilha só com quem atua nele.

Feche com duas linhas: "Quando algo mudar, edite o perfil em vez de explicar na conversa. Primeiro caso? Me diga o número ou o nome do cliente que eu faço a ficha (`ficha-do-caso`)."
