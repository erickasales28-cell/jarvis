# meus-casos-e-documentos

Quando usar: Use quando o advogado disser "abre um caso", "cria o caso do [cliente]", "onde eu guardo isso?", "acha aquela contestação de…", "cadê a procuração do [cliente]", "organiza meus documentos", ou anexar os autos ("segue o processo", "mandei os autos"). Monta o caso como um Projeto do Claude (ou uma pasta), diz onde cada arquivo mora, reencontra peça, tese e trecho, e lê os autos que ele anexar. Também atende por: Caso, Meus Casos, Meus Documentos, Enviar autos do processo.

# Meus casos e documentos

Um caso é um lugar só: a ficha, os documentos, a cronologia, as pendências e as conversas daquele assunto. Você monta o lugar e diz onde cada coisa vai; o advogado não decora nada.

## O que o kit não faz sozinho

Não acha processos pela OAB nem vigia o tribunal: isso exige ligação direta com os tribunais e rodar todo dia sem ninguém pedir, e um kit dentro do Claude não tem nenhuma das duas. Aqui o advogado traz o andamento: cola as publicações do dia (comunica.pje.jus.br pela OAB, painel do tribunal ou o e-mail do serviço de publicações que ele já assina) e a `gestao-de-prazos-e-intimacoes` transforma em pendências. Diga isso em uma linha, na primeira vez que ele perguntar.

## Caso

Um **Projeto do Claude por caso**, com o nome `[cliente ou apelido] · [assunto] · [nº do processo]`. Mais de um processo do mesmo assunto (ação, recurso, cumprimento de sentença) fica no mesmo projeto; outro assunto do mesmo cliente é outro caso.

- **Instruções do projeto:** o PERFIL DO ESCRITÓRIO e duas linhas do caso: quem o escritório representa e o número de cada processo.
- **Arquivos do projeto:** `FICHA-DO-CASO.md` (da `ficha-do-caso`, trabalho seu), `PENDENCIAS.md` (da `gestao-de-prazos-e-intimacoes`), `CRONOLOGIA.md` quando houver, os autos e documentos em PDF com a data no começo do nome (`2026-09-12 sentenca.pdf`) e as peças protocoladas do caso em .docx.
- **Conversas:** uma por tarefa, dentro do projeto do caso. O projeto guarda o contexto; ninguém precisa explicar o caso de novo.

Você não grava sozinho nos arquivos de um Projeto: entregue o arquivo novo ou atualizado e diga "substitua no projeto". Com a pasta do computador conectada (Cowork), grave direto.

**Sem Projeto** (ChatGPT, plano sem Projetos, ou quem prefere pasta): o caso vira a pasta `Casos/[cliente] - [assunto] - [nº]/`, com os mesmos arquivos. Com Cowork ou Drive, você abre de lá.

**O que é do escritório não mora no caso.** O jeito de escrever, os modelos, as teses e o timbrado ficam no projeto "Escritório" ou na pasta `Escritório/`. Um Projeto não enxerga os arquivos de outro: com o Drive ligado, leia de lá a partir de qualquer caso; sem Drive, o projeto do caso leva uma cópia de `ESTILO-DO-ESCRITORIO.md`, `TESES-E-TRECHOS.md` e dos modelos dos tipos de peça que o caso vai usar.

**Segredo de justiça** não vira projeto em conta individual: avise em uma linha e trabalhe só na conversa, com iniciais.

## Meus documentos

A árvore do escritório, no computador ou no Drive:

```
Escritório/
  PERFIL-DO-ESCRITORIO.md · ESTILO-DO-ESCRITORIO.md · TESES-E-TRECHOS.md
  TIMBRADO.docx · MODELOS/
Casos/
  [cliente] - [assunto] - [nº]/
    FICHA-DO-CASO.md · PENDENCIAS.md · CRONOLOGIA.md
    autos/ · pecas/ · documentos-do-cliente/
Encerrados/
```

- **Nome de arquivo:** data no começo, tipo e a versão final marcada: `2026-09-30 contestacao protocolada.docx`. É o que faz a busca achar e a `modelos-do-escritorio` escolher a peça certa.
- **Reencontrar** ("acha a contestação de consumidor com dano moral do ano passado"): procure primeiro pelo nome (tipo e data), depois pelo conteúdo, na pasta, no Drive ou nos arquivos do projeto. Devolva até cinco resultados, cada um com caminho, data e uma linha do que é. A busca no conteúdo é a do próprio Claude ou do Drive: se não achar, diga onde procurou.
- **Tese ou trecho** ("aquela preliminar de ilegitimidade", "aquele julgado sobre negativação"): primeiro em `TESES-E-TRECHOS.md` (`banco-de-teses-e-trechos`), depois nas peças.
- **Caso encerrado** vai pra `Encerrados/` ou o projeto é arquivado; a tese boa dele continua viva no banco de teses.

## Enviar autos do processo

Quando o advogado anexar o PDF dos autos, ou de um documento novo, no projeto do caso:

1. Leia uma vez e faça ou atualize a ficha pela `ficha-do-caso` (documento novo: só ele, não o processo inteiro).
2. Se havia pendência "Aguardando os autos" em `PENDENCIAS.md`, ela passa a "Peça a fazer" ou fecha, com a data.
3. Siga direto pro que a pendência pedia. Sem pendência, feche com a próxima linha do fluxo.

PDF grande demais pra conversa: peça as peças principais em separado (inicial, contestação, decisões, última intimação), não o processo inteiro de novo. Página escaneada sem texto pode não ser lida: registre na seção 10 da ficha ("A conferir").

## No fim

Uma linha: "Próximo passo: as publicações do dia viram pendências pela `gestao-de-prazos-e-intimacoes`; a peça sai pela `peca-a-partir-da-ficha`."
