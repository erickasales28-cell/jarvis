# Kit Penal: comece aqui

Complemento do Advoclaude pras peças mais comuns de direito penal. Cada skill soma à **Peça a partir da ficha** a estrutura e a lista de conferência da peça, e lê o módulo `area-penal`. As regras de sempre continuam valendo: ficha antes, roteiro antes, nunca inventar julgado e conferência antes de protocolar.

| Skill | Pra quê |
|---|---|
| **Resposta à acusação** | CPP 396 e 396-A, absolvição sumária (397), rol de testemunhas, ANPP e sursis na primeira oportunidade |
| **Habeas corpus** | Tribunal pela autoridade coatora, CPP 647, 647-A e 648, liminar, HC substitutivo e seus limites |
| **Liberdade provisória e revogação da preventiva** | Relaxamento, liberdade e cautelares; CPP 310, 312, 313 e 316 como as Leis 15.272/2025, 15.358/2026 e 15.487/2026 deixaram |
| **Alegações finais e memoriais** | CPP 403 e 404, incisos do 386, dosimetria em três fases sem cálculo, detração e recorrer solto |
| **Apelação criminal** | Interposição em 5 dias e razões em 8, as quatro alíneas do júri, embargos do 609 |
| **Acordo de não persecução penal** | Teste de cabimento do CPP 28-A, Temas 1098 e 1303 do STJ (confissão), recusa e remessa ao órgão superior |
| **Queixa-crime** | CPP 38 (12 meses na violência doméstica desde a Lei 15.438/2026), 41 e 44, crimes contra a honra, perempção |
| **Defesa no Juizado Especial Criminal** | Lei 9.099: composição, transação, sursis processual, resposta oral e Turma Recursal |
| **Agravo em execução e progressão de regime** | LEP 112 depois das Leis 15.358 e 15.402/2026, exame criminológico da Lei 14.843/2024, prazo de 5 dias |

## Instalação

- **Claude:** em **Customize > Skills**, envie os 9 arquivos `.zip` da pasta `claude/zips/`.
- **ChatGPT:** envie `chatgpt/kit-penal.md` em **Conhecimento** e acrescente nas instruções a linha de `chatgpt/linha-nas-instrucoes-do-gpt.md`.

As referências de lei e jurisprudência foram conferidas em outubro de 2026 (Câmara dos Deputados, Planalto, Banco Nacional de Precedentes do CNJ) e revisadas após teste em 20/10/2026. O que é recente e a skill já considera: Lei 14.836/2024 (CPP 647-A), Lei 14.843/2024 (exame criminológico e saída temporária), Leis 15.159 e 15.160/2025 (agravante e atenuante), Lei 15.272/2025 (preventiva e custódia), Lei 15.358/2026 (crime organizado, custódia, LEP 112 e 41-A/41-B), Lei 15.402/2026 (LEP 112 caput e incisos I a III, remição em domiciliar), Lei 15.438/2026 (decadência de 12 meses na violência doméstica) e Lei 15.487/2026 (CPP 313, VI). Há temas do STF ainda sem tese (1408, 1381, 1319): a skill os marca como ponto aberto. A Lei 15.402/2026 foi promulgada após derrubada de veto e tem a constitucionalidade questionada no STF; a Súmula 690 do STF (HC contra Turma Recursal no STF) está superada desde 2006, embora ainda conste na base do CNJ: as skills avisam. Lei, súmula e enunciado mudam, e a lei penal mais grave só vale para fato posterior: a conferência antes de protocolar existe por isso. A contagem de cada prazo é sua, pela regra do rito e pelo calendário do tribunal. Onde a peça pede julgado, a skill deixa a marca `[INSERIR JULGADO: ...]` pra você preencher com um julgado conferido. A skill nunca calcula pena, fração de progressão, remição, prescrição nem prazo: lista o que entra.

Dado de investigado, vítima, testemunha, criança e de organização criminosa é sensível: use iniciais, não suba processo em segredo de justiça para conta individual e não ponha relato do crime em conversa de WhatsApp.

---

*O Kit Penal é um método de organização e produtividade que você instala na sua própria conta do Claude ou do ChatGPT. Não é serviço jurídico, consultoria nem revisão de peças. O que a IA gera é rascunho: quem confere, assina e responde pela peça, pelo prazo e pela relação com o cliente é o advogado. Claude é marca da Anthropic e ChatGPT é marca da OpenAI; este é um produto independente da Lumos, sem vínculo com nenhuma das duas.*
