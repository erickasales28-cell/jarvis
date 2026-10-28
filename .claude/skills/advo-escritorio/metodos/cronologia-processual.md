# cronologia-processual

Quando usar: Use quando o advogado pedir linha do tempo, cronologia, "a ordem dos fatos" ou o histórico de um processo, ou quando uma peça depender dos fatos em ordem. Monta a cronologia a partir da FICHA DO CASO ou dos autos, uma linha por evento datado com a referência (fl., ID ou evento), marca o que pesa, aponta lacuna e data que não bate, e entrega em tabela e, quando é pra peça, em texto corrido pronto pra colar, na voz do escritório.

# Cronologia processual

A ficha do caso traz uma linha do tempo curta. Esta é a completa: todo evento datado, em ordem, com a página onde está, pra achar o buraco antes que o outro lado ache.

## Quando cabe

Antes de inicial, contestação, réplica, recurso ou memoriais em que a narrativa depende da ordem dos fatos; em processo longo; quando o escritório assumiu o caso no meio.

## O que entra

- **Fonte:** o padrão é a ficha (`FICHA-DO-CASO.md` na pasta do caso). Os autos só quando ele pedir a completa: com a pasta conectada (Cowork) ou o Drive ligado, abra você mesmo os arquivos do caso, do mais antigo pro mais novo, e leia o que tem data e fato (petições, decisões, certidões, documentos), sem reler anexo repetido. Sem pasta, peça o PDF. Se a leitura mudar algo na ficha, diga.
- **Fato de fora do processo** (contrato, e-mail, conversa) entra se o advogado mandar, com a origem: "doc. do cliente, não juntado".
- **Voz:** perfil do escritório (instruções do projeto) e, pro texto corrido, `ESTILO-DO-ESCRITORIO.md` e o modelo do tipo de peça em `MODELOS/`: como ele chama as partes e como cita fl. ou ID.

## Regras

- **Uma linha, um evento, uma data,** copiada como está. Data aproximada vai marcada `~` ("~ início de 2023") e nunca vira dia inventado.
- **Toda linha com referência.** Sem referência, a linha não entra na tabela: vai pra "A conferir".
- **Data do fato não é data da juntada.** Registre a do fato e cite onde o documento foi juntado.
- **Marcas:** `[DECISÃO]` decisão, sentença ou acórdão · `[INTIMAÇÃO]` citação ou intimação, com o meio · `[PROVA]` documento, perícia ou depoimento que sustenta uma tese · `[CONTROVERSO]` fato ou data que o outro lado nega · `[MARCO]` fato que pode abrir ou fechar prazo de direito material (prescrição, decadência, vencimento). A marca é só sinal: quem conclui é o advogado.
- **Lacuna:** o que devia existir entre dois eventos e não aparece. Citação sem comprovante juntado, decisão sem intimação registrada, documento mencionado e não juntado, meses sem movimento.
- **Datas que não batem:** a mesma data diferente em dois documentos, evento que vem antes daquilo de que depende, data da peça contrária diferente da do documento. Cada uma vira linha em "A conferir", com as duas referências.
- **Prazo:** data e meio da intimação e prazo em dias, como o documento traz. Não calcule vencimento nem prescrição.
- **Dados pessoais:** as regras da ficha (iniciais em dado sensível e em segredo de justiça; sem CPF, endereço ou dados bancários).

## Formato fixo

```
# Cronologia: [apelido do caso]
Fonte: [ficha de dd/mm/aaaa | autos até fl./ID X] · Montada em: [data]

| Data | Evento | Ref. | Marca |
|---|---|---|---|

## Lacunas
- [entre que eventos · o que falta · onde procurar]

## A conferir
- [fato ou data · ref. A x ref. B]

## Texto corrido (pra colar na peça)
[parágrafos em ordem, com o tratamento e o jeito de citar do escritório]
```

O texto corrido só sai quando a cronologia é pra uma peça; sem isso, a tabela basta. É narrativa: não adjetiva nem argumenta. A tese vem na peça, e o advogado corta o que não serve.

## No fim

Diga ao advogado: "Confira nos autos as linhas marcadas [MARCO] e [INTIMAÇÃO]: são elas que decidem prazo e prescrição, e a contagem é sua. Atualizo a linha do tempo da ficha? A peça sai pela `peca-a-partir-da-ficha` com esta cronologia."
