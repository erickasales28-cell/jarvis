# audio-vira-registro

Quando usar: Use quando o advogado anexar um áudio do cliente, da reunião ou da audiência, ou colar a transcrição de um áudio (relato de caso, atualização, dúvida) e disser "transcreve esse áudio", "organiza esse áudio", "o que o cliente falou?", "põe isso em ordem" ou pedir pra resumir ou virar anotação. Transforma fala solta em relato cronológico, separado por pessoa, fato e pedido, pronto para entrar na ficha do caso.

# Áudio vira registro

O cliente fala como fala: solto, fora de ordem, misturando fato com opinião. Esta skill organiza sem inventar nada além do que foi dito.

## Transcrição de áudio (primeira etapa)

Se o áudio veio anexado e abriu nesta conversa, transcreva antes de organizar:

- **Texto bruto:** sem resumo e sem corrigir o que foi dito. Linha nova a cada troca de quem fala, com "Pessoa 1:", "Pessoa 2:" na ordem em que aparecem. Se o advogado disser quem é quem, troque pelo papel ("Cliente:", "Advogado:").
- Trecho incompreensível (corte, ruído, fala sobreposta): "[trecho inaudível]" no lugar. Não complete por dedução.
- **Entregue a transcrição primeiro** (no chat se o áudio é curto; como arquivo `TRANSCRICAO-[data].md` se é reunião ou audiência) e em seguida o registro organizado abaixo. Se ele pediu só a transcrição ("transcreve esse áudio"), pare nela e ofereça o registro em uma linha.

Se o áudio não abriu (o Claude nem sempre aceita arquivo de áudio), diga em uma linha como transcrever no celular e colar: no WhatsApp, segurar o áudio e tocar em Transcrever; gravação de reunião, pelo gravador do celular com transcrição ou pelo Transcrever do Word na web. Transcrição já colada pelo advogado: trabalhe em cima dela.

## Regras

- **Fato e opinião não se misturam.** "Ele me xingou na frente de todo mundo" é fato relatado; "acho que ele fez isso porque tem raiva de mim" é opinião do cliente: vai só pra seção de opinião, não pro relato.
- **Datas e valores como o cliente disse**, nunca corrigidos ou calculados por você. Se disse "uns três meses atrás", registre assim, com a nota "(data aproximada, segundo o cliente)". Não converta para data do calendário.
- **Cada pessoa citada entra por papel** (ex.: "ex-marido", "gerente da loja", "colega de trabalho"), com o nome só se o cliente o deu claramente.
- **Dado pessoal só o necessário para o relato.** CPF, endereço completo, dado bancário do cliente ou de terceiro não entram no registro, salvo se forem o próprio fato relatado (ex.: número de conta usado num golpe).
- **Dado sensível** (saúde, orientação sexual, religião, raça, dado de criança): registre só o que for necessário para entender o pedido, sem detalhe desnecessário.
- **O que o cliente quer** é uma seção própria — não misture com o relato. Às vezes o cliente não diz claramente o que quer; nesse caso escreva "não ficou claro no áudio, perguntar".
- **O que falta perguntar** nasce das lacunas reais do relato (datas que faltam, documento mencionado mas não descrito, nome que não foi dito).

## Formato fixo

```
# Registro do relato — [cliente ou apelido do caso] — [data da transcrição]

## Relato em ordem cronológica
- [data/período, como o cliente disse]: [fato]
- ...

## Pessoas citadas
- [papel]: [nome, se dito] — [o que fez/disse, segundo o cliente]

## O que o cliente quer
[um ou dois pedidos objetivos]

## Documentos citados
- [documento] — [quem tem, se disse]

## O que falta perguntar
- ...

## Trechos de opinião (não são fato)
- "[frase]" — opinião do cliente sobre [assunto]
```

## Depois de entregar

Diga ao advogado: "Confira o registro contra o áudio antes de usar, principalmente datas aproximadas e trechos inaudíveis. Ele entra na ficha pela `ficha-do-caso`; os documentos citados viram lista pela `documentos-procuracao-e-honorarios`."

Roda bem no modelo leve.
