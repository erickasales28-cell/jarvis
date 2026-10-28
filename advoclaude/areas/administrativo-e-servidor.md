# Kit Administrativo e Servidor: comece aqui

Complemento do Advoclaude pras peças mais comuns de direito administrativo e servidor público. Cada skill soma à **Peça a partir da ficha** a estrutura e a lista de conferência da peça. Não existe módulo `area-administrativo` no Kit: as skills usam o `area-civel-consumidor-e-imobiliario` só como base de CPC e trazem o rito próprio. As regras de sempre continuam valendo: ficha antes, plano antes, nunca inventar julgado e conferência antes de protocolar.

| Skill | Pra quê |
|---|---|
| **Mandado de segurança** | Lei 12.016: autoridade coatora, 120 dias, liminar e o que o STF derrubou (ADI 4296), súmulas de MS |
| **Defesa em PAD e sindicância** | Lei 8.112 como base federal, prazos de cada fase, prescrição (art. 142 e Súmula 635 STJ), Súmula Vinculante 5 |
| **Recurso administrativo** | Lei 9.784 (arts. 56 a 65), 10 dias corridos, efeito suspensivo, lei própria do ente |
| **Ação de servidor** | Vantagem, desvio de função, prescrição quinquenal (Súmula 85, Temas 1410 e 1109 STJ), vara da Fazenda ou juizado (60 salários mínimos), correção pela EC 113 e pela EC 136/2025 |
| **Impugnação de edital e ações de concurso** | Controle da banca (Tema 485), nomeação (Temas 161 e 784), heteroidentificação e a Lei 15.142/2025 |
| **Impugnação e recurso em licitação** | Lei 14.133 arts. 164 a 168, prazos em dias úteis, intenção de recorrer, ME e EPP |
| **Pedido pela LAI** | Peça curta: 20 dias mais 10, recurso em 10 dias, sigilo e informação pessoal |

## Instalação

- **Claude:** em **Customize > Skills**, envie os 7 arquivos `.zip` da pasta `claude/zips/`.
- **ChatGPT:** envie `chatgpt/kit-administrativo-e-servidor.md` em **Conhecimento** e acrescente nas instruções a linha de `chatgpt/linha-nas-instrucoes-do-gpt.md`.

As referências de lei e jurisprudência foram conferidas em 20/10/2026 (Câmara dos Deputados, Planalto, CNJ/BNP, Senado) e revisadas após o teste, na mesma data (Lei 14.133, arts. 64, 71 e 164 a 171; Súmula 633 STJ no BNP). O que é recente e as skills já consideram: Lei 15.142/2025 (nova lei de cotas raciais em concursos federais, no lugar da Lei 12.990/2014), Lei 14.965/2024 (lei geral dos concursos, em vigor só em 1º/1/2028), Lei 15.266/2025, Lei 15.210/2025 e Lei 15.471/2026 (alteram artigos da Lei 14.133 que não são os de impugnação e recurso), Lei 15.141/2025 (LAI, divulgação de remuneração). A ADI 4296 (2021) derrubou a vedação de liminar do art. 7º, §2º, e a oitiva prévia do art. 22, §2º, da Lei 12.016, e manteve a caução, o prazo de 120 dias e a vedação de honorários; as skills não escrevem o número da ação (a IA só cita julgado que veio do conector). Segunda revisão jurídica em 20/10/2026, na fonte (Planalto, STF, BNP/CNJ): 35 ajustes de lei, entre eles a referência errada a "Lei 8.443, art. 113, §1º" (era a 8.666, revogada), a "Lei 13.146, art. 37" na cota de PcD (o certo é Decreto 9.508/2018 e Lei 13.146, art. 2º, §1º) e a vigência da Lei 14.965 lida no art. 13. Revisão de lei em 21/10/2026 (Planalto, CNJ/BNP, STJ): a EC 136/2025 reescreveu o art. 3º da EC 113 (no requisitório federal, IPCA mais juros simples de 2% ao ano, limitado à Selic; o índice da fase anterior está no STF, Tema 1484), o STJ fixou que a prescrição do fundo de direito do servidor exige negativa expressa (Tema 1410) e que o reconhecimento administrativo não paga retroativo além do quinquênio (Tema 1109), a defesa em PAD ganhou a nota sobre improbidade depois da Lei 14.230/2021 (Tema 1199 STF; Súmula 651 STJ vigente), a LAI aponta o Fala.BR como canal federal e o MS traz o termo inicial do STJ contra cláusula de edital (ciência do ato de eliminação). **Estatuto de servidor, rito de recurso administrativo e lei de acesso à informação de estado e município são da lei local:** a skill avisa e marca `[conferir lei do ente]`. As skills mostram a conta de prazo e de prescrição como sugestão, com alerta quando o prazo está perto; a contagem final é sua, pela regra do rito e pelo calendário do órgão. Onde a peça pede julgado, a skill deixa `[INSERIR JULGADO: ...]` pra você preencher com um julgado conferido. A skill nunca calcula diferença salarial, juros nem multa: lista o que entra.

Dado de saúde, de raça, de servidor investigado e de terceiros é sensível: use iniciais e não suba processo sigiloso para conta individual.

---

*O Kit Administrativo e Servidor é um método de organização e produtividade que você instala na sua própria conta do Claude ou do ChatGPT. Não é serviço jurídico, consultoria nem revisão de peças. O que a IA gera é rascunho: quem confere, assina e responde pela peça, pelo prazo e pela relação com o cliente é o advogado. Claude é marca da Anthropic e ChatGPT é marca da OpenAI; este é um produto independente da Lumos, sem vínculo com nenhuma das duas.*
