# Advoclaude Kit: comece aqui

O Advoclaude Kit traz o assistente do escritório, as skills de cada área do direito, os 87 comandos, o módulo cível e consumidor e o bônus de marketing jurídico. Faça nesta ordem e, se travar em qualquer passo, chame a gente no WhatsApp (por texto e print).

## 1. Instale no Claude

1. Em **Configurações › Funcionalidades**, ligue **Execução de código e criação de arquivos**.
2. Em **Personalizar › Skills**, clique em **+**, depois em **+ Criar skill** e em **Carregar um skill**. Envie primeiro o `advo-escritorio-v2.2.zip`, que é o assistente do escritório.
3. Depois, envie os `.zip` das áreas em que você atua, na pasta `skills/<área>/claude/zips/`. Cada arquivo é uma skill, uma por peça. Não precisa instalar todas: comece pelas peças que você mais faz.
4. Não descompacte nada. O Claude recebe o `.zip` do jeito que ele veio.

Já tinha o Advoclaude Kit instalado? Troque o `advo-escritorio` antigo pelo `advo-escritorio-v2.2.zip`: ele traz os módulos de área conferidos em outubro de 2026 e conhece as skills novas.

## 2. Apresente o escritório e o seu estilo

Crie o projeto **Escritório**, escreva "vamos configurar o escritório" e cole o perfil que o Claude devolver nas instruções do projeto. Depois, envie de 3 a 5 peças protocoladas e peça "aprende o estilo das minhas peças".

## 3. No ChatGPT

Na conta pessoal, o Advoclaude mora num **Projeto**: cole o texto de `chatgpt/nucleo/instrucoes.md` nas instruções do projeto e envie os 10 arquivos de `chatgpt/nucleo/conhecimento/` e os 4 arquivos `chatgpt/areas-*.md`. São 14 arquivos; o Plus aceita 25 por projeto, então sobra espaço para o seu estilo, os seus modelos e o timbrado.

## O que tem no pacote

| Pasta | O que é |
|---|---|
| `advo-escritorio-v2.2.zip` | o assistente do escritório (instale primeiro) |
| `skills/<área>/` | as skills de cada área: `LEIA-PRIMEIRO.md` da área, `claude/zips/` para instalar e a versão de cada uma em texto |
| `chatgpt/` | o mesmo conteúdo para o ChatGPT |
| `kit/` | os 87 comandos, o módulo cível e consumidor e o bônus de marketing jurídico |

## Três cuidados

1. Desligue o uso das suas conversas para treinar os modelos: no Claude, em **Configurações › Privacidade**; no ChatGPT, em **Configurações › Controles de dados**.
2. Processo em segredo de justiça fica fora da conta individual de IA (regra do Advoclaude, por cautela).
3. Cada skill traz no fim a data em que a lei e a súmula foram conferidas na fonte oficial. Lei muda: confira toda citação, todo prazo e todo valor antes de protocolar. Quem assina é você.

---

*O Advoclaude Kit é um método de produtividade que você usa na sua própria conta do Claude ou do ChatGPT. Não é serviço jurídico, consultoria nem revisão de peças. O que a IA gera é rascunho: quem confere, assina e responde pela peça, pelo prazo e pela relação com o cliente é o advogado. Claude é marca da Anthropic e ChatGPT é marca da OpenAI; este é um produto independente da Lumos, sem vínculo com nenhuma das duas.*
