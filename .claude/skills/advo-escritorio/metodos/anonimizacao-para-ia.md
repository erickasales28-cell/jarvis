# anonimizacao-para-ia

Quando usar: Use quando o advogado quiser preparar um documento pra mandar pra IA, pra virar modelo ou pra subir no Conhecimento do GPT, e pedir pra "tirar os dados", "anonimizar" ou "tarjar". Troca nomes por papéis ou iniciais, remove CPF, RG, endereço, telefone, e-mail, dados bancários, CID e nome de médico, e gera a tabela de correspondência que fica só no computador do advogado.

# Anonimização para IA

## Onde rodar

O ideal é o documento cheio não sair do computador. No Claude, rode com a pasta conectada no Cowork. Se o advogado colar o documento cheio na conversa, avise uma vez: o original já foi enviado nesta conversa; a versão limpa serve pro que vem depois (modelo, Conhecimento do GPT, outras conversas).

## O que entra

- O documento, colado, anexado ou da pasta.
- A finalidade: modelo de peça, análise, Conhecimento do GPT.
- O que manter: não pare pra perguntar. Mantenha datas e valores, troque o número do processo por `[PROCESSO]` e a cidade por `[CIDADE]`, e diga isso numa linha na entrega. Se ele quiser manter outra coisa, ajusta.

## Regras

- **Pessoa vira papel,** o mesmo do começo ao fim: AUTOR, RÉU, TESTEMUNHA 1, PERITO. Quem não tem papel no processo (familiar, funcionário) vira iniciais. Empresa parte vira EMPRESA RÉ; banco ou operadora grande pode ficar com o nome, se o advogado autorizar.
- **Sai sempre:** CPF, RG, CNH, endereço (fica só a cidade, se autorizado), telefone, e-mail, dados bancários e chave PIX, placa, matrícula, número de prontuário, CID, nome de médico, clínica e hospital.
- **Dado sensível** (saúde, criança, vida sexual, religião, origem racial): avise e tarje também o trecho que descreve, não só o nome.
- **Contexto que identifica** (cargo único, apelido, fato que saiu na imprensa): aponte em "A conferir". Não resolva sozinho.
- **Ficam:** nome do advogado, do escritório e OAB, como estão no perfil do escritório. São dele.
- **O resto não muda.** Mesma estrutura, mesmos parágrafos. Não resuma nem corrija.
- **Honestidade:** com a tabela guardada, o documento está pseudonimizado, não anônimo no sentido da LGPD. Pra mandar pra IA, basta; diga isso se ele perguntar.

## Formato da saída

Dois blocos, sempre separados. Com a pasta conectada, grave o documento limpo como arquivo `-LIMPO` ao lado do original e a tabela num arquivo à parte (peça que ele tire a tabela da pasta que a IA lê); na conversa vão só o A CONFERIR e quantas marcas foram trocadas, sem repetir o documento.

```
DOCUMENTO LIMPO · pode ir pra IA
[texto com as substituições]
```

```
TABELA DE CORRESPONDÊNCIA · NÃO ENVIAR
Guarde só no seu computador. Não cole em conversa, Drive compartilhado nem Conhecimento do GPT.
| Marca no texto | Original |
| AUTOR | [nome] |
| [CPF 1] | [número] |

A CONFERIR
- [trecho que ainda pode identificar alguém, e por quê]
```

## No fim

Diga ao advogado: "Salve a tabela no seu computador, fora da pasta que a IA lê, e apague esta conversa. Leia o documento limpo uma vez antes de usar: a última revisão é sua. Ele já pode virar modelo (`modelos-do-escritorio`) ou ficha (`ficha-do-caso`)."
