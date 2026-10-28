# Kit Bancário: comece aqui

Complemento do Advoclaude pras peças mais comuns de direito bancário do lado do consumidor e do pequeno devedor. Cada skill soma à **Peça a partir da ficha** a estrutura e a lista de conferência da peça, e lê o módulo `area-civel-consumidor-e-imobiliario`. As regras de sempre continuam valendo: ficha antes, roteiro antes, nunca inventar julgado e conferência antes de protocolar.

| Skill | Pra quê |
|---|---|
| **Revisional de contrato bancário** | Juros, capitalização, tarifas e comissão de permanência, com a discriminação das cláusulas e o valor incontroverso (CPC 330, §§ 2º e 3º) |
| **Superendividamento** | Plano de pagamento de até 5 anos, audiência global, processo do CDC 104-B e o mínimo existencial depois do STF |
| **Consignado não contratado** | Desconto indevido no benefício ou na folha, cartão RMC/RCC, ônus da assinatura (Tema 1061), Lei 15.327/2026 e dobra |
| **Fraude, Pix e golpe** | Responsabilidade do banco, Súmula 479 e seus limites, MED do Pix, boleto falso e falsa central |
| **Defesa na busca e apreensão** | Prazos de 5 e 15 dias da execução da liminar, purga pelo valor integral (Tema 722), notificação e busca extrajudicial |
| **Contestação de cobrança de cartão** | Embargos à monitória e contestação, prova da contratação e das faturas, teto de 100% do rotativo |
| **Negativação e score** | Notificação prévia, Súmula 385, prazos de exclusão e limite do score (Tema 710) |

## Instalação

- **Claude:** em **Customize > Skills**, envie os 7 arquivos `.zip` da pasta `claude/zips/`.
- **ChatGPT:** envie `chatgpt/kit-bancario.md` em **Conhecimento** e acrescente nas instruções a linha de `chatgpt/linha-nas-instrucoes-do-gpt.md`.

As referências de lei e jurisprudência foram conferidas e revisadas depois do teste em 20/10/2026 (Câmara dos Deputados, Planalto, Banco Nacional de Precedentes do CNJ, STJ, BACEN). O que é recente e as skills já consideram: Lei 14.711/2023 (busca e apreensão extrajudicial, validada pelo STF nas ADIs 7.600, 7.601 e 7.608, em 30/06/2025, e regulamentada pelo Provimento CNJ 196/2025), Lei 14.690/2023 e Resolução CMN 5.112/2023 (teto de 100% no rotativo), Lei 14.905/2024 (taxa legal do CC 406, que não alcança os juros do contrato bancário), Lei 15.327/2026 (bloqueio e autorização biométrica do consignado do INSS, com a IN PRES/INSS 138/2022 alterada em 2026), julgamento do STF de 23/04/2026 sobre o mínimo existencial (ADPFs 1.005, 1.006 e 1.097), MED 2.0 do Pix (Guia do BACEN, versão 4.4) e a decisão da Terceira Turma do STJ de julho de 2026 sobre o golpe da falsa central. Alguns pontos estão em movimento e as skills os marcam com `[conferir]`: a tese publicada do Tema 929 (dobra), os Temas 1414, 1435 e 1116 (afetados, com suspensão de processos), o acórdão do STF sobre o mínimo existencial, o acórdão das ADIs da busca extrajudicial e a IN do INSS vigente. Em prazo e prescrição, as skills mostram a conta (termo inicial, regra de contagem, resultado provável) como sugestão a conferir e abrem o resumo com ALERTA quando o prazo vence em 5 dias úteis ou menos ou a prescrição pode estar consumada; a conferência pelo calendário do tribunal é sua. Onde a peça pede julgado, a skill deixa a marca `[INSERIR JULGADO: ...]` pra você preencher com um julgado conferido. A skill nunca calcula juros, saldo, restituição nem parcela: lista o que entra e indica onde buscar a taxa média do BACEN.

Renda, dívida, extrato bancário e dado de saúde são sensíveis: use o mínimo necessário e não suba processo em segredo de justiça para conta individual.

---

*O Kit Bancário é um método de organização e produtividade que você instala na sua própria conta do Claude ou do ChatGPT. Não é serviço jurídico, consultoria nem revisão de peças. O que a IA gera é rascunho: quem confere, assina e responde pela peça, pelo prazo e pela relação com o cliente é o advogado. Claude é marca da Anthropic e ChatGPT é marca da OpenAI; este é um produto independente da Lumos, sem vínculo com nenhuma das duas.*
