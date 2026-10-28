# timbrado-e-formatacao

Quando usar: Use no fim de toda peça, contrato, parecer ou minuta, na hora de montar o arquivo, e quando o advogado disser "põe no meu timbrado", "segue meu timbrado", "liga (ou desliga) a numeração dos parágrafos", "baixar em Word" ou mandar o .docx timbrado do escritório. Monta o documento sobre o timbrado dele (enviado uma vez), aplica a numeração de parágrafos gravada no perfil, destaca em negrito os trechos-chave e entrega sempre o .docx; se o ambiente não criar arquivo, entrega o texto limpo, sem marcação markdown, pra colar no Word.

# Timbrado e formatação

## 1. Timbrado: enviado uma vez, usado sempre

- **Receber:** o advogado envia o `.docx` timbrado do escritório (logo, endereço, OAB no cabeçalho ou no rodapé). Abra-o e diga em três linhas o que leu: o que há no cabeçalho, no rodapé, margens e fonte base. Se a logo estiver no corpo da página e não no cabeçalho, avise: ela só se repete em toda página se estiver no cabeçalho (Word: Inserir › Cabeçalho).
- **Formato errado:** PDF, imagem ou `.dotx`: peça que ele abra no Word e salve como `.docx`. Só a logo, sem timbrado: ofereça montar um cabeçalho simples com a logo e os dados do perfil, e mostre antes de usar.
- **Guardar:** nos arquivos do projeto "Escritório", com o nome `TIMBRADO.docx`. Com pasta conectada, na raiz da pasta do escritório.
- **Ordem de uso:** `TIMBRADO.docx` → `.docx` de modelo do mesmo tipo na pasta → documento limpo. Com timbrado, o modelo entra só como texto e estrutura.

**Montar sobre ele** (ferramenta de criação de arquivos, `python-docx`): abra o timbrado como base, apague o corpo mantendo a configuração de página, e escreva a peça por cima. Cabeçalho, rodapé, margens e formatação vêm do arquivo dele.

```python
from docx import Document
doc = Document("TIMBRADO.docx")
corpo = doc.element.body
for el in list(corpo):
    if not el.tag.endswith("}sectPr"):   # a configuração de página fica
        corpo.remove(el)
# acrescente a peça com doc.add_paragraph(texto, style=...) e salve com o nome final
```

**Sem timbrado:** `.docx` limpo e sóbrio: a fonte do `ESTILO-DO-ESCRITORIO.md` ou Times New Roman 12, espaçamento 1,5, texto justificado com recuo na primeira linha, margens usuais (3 cm em cima e à esquerda, 2 cm embaixo e à direita), número de página no rodapé. No primeiro documento sem timbrado, diga em uma linha que ele pode mandar o dele uma vez e toda peça passa a sair nele.

## 2. Numeração de parágrafos: preferência do escritório

- Fica no perfil, na seção "Como escrevemos", nesta linha exata: `Numeração de parágrafos: sim` ou `Numeração de parágrafos: não` (é assim que a `entrevista-do-escritorio` grava). Perfil escrito à mão com outra forma ("numeração de parágrafos ligada", em outra seção): vale o sentido, e entregue a linha no formato exato pra ele trocar.
- Sem a linha no perfil: siga o que os modelos dele mostram; se nada mostrar, pergunte uma vez e entregue a linha pronta pra ele colar nas instruções do projeto (com pasta conectada e perfil em arquivo, atualize o arquivo).
- "Desliga a numeração" muda o perfil (entregue a linha nova). "Nesta peça sem numeração" vale só pra esta.
- Numera-se o corpo (fatos e direito). Não se numeram endereçamento, qualificação, títulos, citações recuadas, fecho e assinatura; os pedidos seguem as alíneas do modelo dele.
- Use a numeração automática do Word (a lista numerada do documento), não número digitado, pra que a conta se refaça quando ele inserir parágrafo. Se o timbrado não tiver essa lista, numere no texto e avise que a renumeração será manual.

## 3. Trechos-chave em negrito

Destaque, em negrito real do Word (nunca asterisco):

- a tese de cada tópico, em uma frase;
- o fato decisivo e a data ou valor que decidem;
- o dispositivo legal central;
- o pedido principal.

No máximo um trecho por parágrafo, e só nos parágrafos que carregam tese, fato decisivo ou pedido. Parágrafo inteiro em negrito, não. Citação literal fica como no original. Se o escritório não destaca, ou destaca com sublinhado ou itálico, vale o dele: o perfil traz, em "Como escrevemos", a linha exata `Destaques: negrito`, `Destaques: sublinhado` ou `Destaques: nenhum`.

## 4. Baixar em .docx: sempre o arquivo

- Toda peça, contrato, parecer e minuta vai no `.docx`, gerado com a ferramenta de criação de arquivos. Não cole o documento no chat. No chat vai só o resumo de até 8 linhas: o que fez, de onde tirou os fatos, o que ficou `[DEFINIR]` ou `[INSERIR JULGADO]` (e, na peça, o resultado da conferência).
- Nome do arquivo: `<tipo>-<caso ou iniciais>-<data>.docx` (ex.: `contestacao-0801234-2026-09-30.docx`). Revisão ganha `-rev1`, `-rev2`.
- Marcas `[INSERIR JULGADO: …]`, `[DEFINIR: …]`, `[JUNTAR: …]` e `[conferir]` com realce amarelo, pra ele achar tudo de relance.
- **Antes de entregar, reabra o arquivo salvo e confira:** timbrado presente em todas as páginas; numeração como o perfil manda; negrito só nos trechos-chave; nenhum resto de markdown (`**`, `#`, `>`) no texto; marcas visíveis; nada do modelo antigo ou de outro cliente.
- Com pasta do caso conectada, salve o arquivo nela, além de oferecer o download.

**Se o ambiente não criar .docx:** diga em uma linha como ligar (Settings › Capabilities, criação e edição de arquivos) e aí, sim, entregue o documento inteiro no chat, em **texto limpo, sem nenhuma marcação markdown** (sem `**`, sem `#`, sem `>`, sem lista com hífen), pronto pra colar sobre o timbrado no Word: títulos em caixa alta, como o modelo dele, e numeração digitada conforme o perfil. Asterisco colado no Word vira asterisco, não negrito: avise em uma linha que, colado, ele aplica o negrito nos trechos-chave (a tese de cada tópico e o pedido principal) e confere a numeração.

## Regras

- O arquivo é rascunho dele: você não protocola, não envia, não assina.
- Julgado só com link aberto; sem ele, a marca `[INSERIR JULGADO: tema, conferir]` fica no documento, em amarelo.
- Timbrado e perfil não levam dado de cliente.
