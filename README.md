# MIND FORGE OMEGA ∞ — A Forja do Intelecto

Jogo web estático para prática de raciocínio lógico, atenção, memória, matemática, criatividade, pensamento crítico, interpretação, ciência, estratégia e estudo bíblico contextual. Feito com HTML5, CSS3 e JavaScript nativo, sem dependências obrigatórias, servidor próprio ou APIs externas.

> **Importante:** XP, níveis e estatísticas são indicadores internos de participação e desempenho nas atividades desta aplicação. Não são medidas científicas de inteligência, QI, diagnóstico ou avaliação clínica.

## O que está implementado

- Painel inicial, navegação responsiva e 12 laboratórios com 269 desafios iniciais, distribuídos em bancos próprios por habilidade.
- 124 conjuntos de alternativas revisados editorialmente, com respostas reescritas em alguns itens para reduzir pistas de comprimento; opções objetivas embaralhadas em cada sessão sem alterar o gabarito.
- Atenção e memória com variantes procedurais e diferentes famílias de tarefa, além de seleção adaptativa que evita questões recentemente vistas e intercala mecânicas quando o banco permite.
- Questões de múltipla escolha, resposta numérica, contagem de símbolos, memória de sequência e reflexões abertas com checklist de autoavaliação.
- Nove níveis internos de dificuldade, XP, recompensas e recomendações heurísticas baseadas no histórico recente.
- Sessões adaptativas, treino livre, desafio surpresa, revisão e campanha de cinco etapas interdisciplinares.
- Feedback explicativo após a tentativa, pistas progressivas, referências bíblicas em questões pertinentes e registro de erros.
- Fila de revisão com agendamento local simples, itens dominados e possibilidade de praticar um item isolado.
- Painel de evolução por módulo, histórico, métricas de tentativa/confiança/uso de pistas e conquistas.
- Persistência via `localStorage`, exportação e importação de backup JSON com validação de estrutura.
- Preferências de acessibilidade, suporte a teclado, foco visível, responsividade e respeito à preferência de movimento reduzido.
- Autotestes de integridade de módulos e questões no navegador e testes de núcleo executáveis com Node.js.

As atividades abertas são registradas para reflexão e autoavaliação; a aplicação não finge julgar automaticamente a qualidade de respostas discursivas. O motor adaptativo é uma heurística de jogo documentada no código, não um método psicométrico validado.

## Estrutura

```text
mind-forge-omega/
├── index.html
├── styles/
│   ├── main.css
│   └── responsive.css
├── scripts/
│   ├── app.js
│   ├── core/
│   │   ├── storage.js
│   │   ├── progression.js
│   │   ├── adaptive-engine.js
│   │   ├── review-system.js
│   │   └── module-registry.js
│   ├── modules/
│   │   ├── logic.js
│   │   ├── attention.js
│   │   ├── memory.js
│   │   ├── creativity.js
│   │   ├── mathematics.js
│   │   ├── critical-thinking.js
│   │   ├── bible.js
│   │   ├── science.js
│   │   ├── language.js
│   │   ├── strategy.js
│   │   ├── interdisciplinary.js
│   │   └── metacognition.js
│   └── tests/
│       └── self-tests.js
├── tools/
│   ├── export-question-bank.cjs
│   ├── audit_questions.py
│   └── run-tests.cjs
├── .github/workflows/
│   └── quality-check.yml
├── tests/
│   └── test-plan.md
├── .nojekyll
├── LICENSE
└── .gitignore
```

## Executar localmente

1. Extraia o arquivo ZIP.
2. Abra um terminal na pasta `mind-forge-omega`.
3. Execute um servidor estático local:

   ```bash
   python -m http.server 8000
   ```

4. Abra `http://localhost:8000` em um navegador moderno.

Não é necessário instalar pacotes para executar o jogo. Servir a pasta por HTTP é recomendado para que o comportamento do armazenamento local seja mais previsível que a abertura direta por `file://`. Python neste comando é só um servidor local simples; não é dependência de execução do jogo publicado.

## Executar o autoteste

Abra `http://localhost:8000/?test=1`. A página mostra um painel com a quantidade de módulos e questões, IDs duplicados, estrutura de questões inválidas e conferência das sequências geradas de atenção e memória.

Também é possível abrir o console do navegador e executar:

```javascript
MindForge.Tests.run()
```

O retorno contém `ok`, `failures`, `moduleCount` e `questionCount`.


## Qualidade do banco e testes automatizados

O repositório inclui ferramentas independentes para detectar falhas estruturais antes da publicação:

- `tools/export-question-bank.cjs` carrega os módulos e exporta o banco efetivo, incluindo as revisões editoriais de alternativas.
- `tools/audit_questions.py` verifica IDs duplicados, tipos e níveis inválidos, alternativas objetivas repetidas ou incompletas, coerência de respostas de memória, perguntas repetidas e indícios de desequilíbrio nas alternativas. É uma auditoria estrutural/heurística, não um avaliador automático definitivo de qualidade pedagógica.
- `tools/run-tests.cjs` executa os autotestes de questões, amostragem de variantes geradas, embaralhamento do gabarito e fluxos do núcleo como pontuação, persistência, revisão e seleção adaptativa.
- `.github/workflows/quality-check.yml` executa a verificação de sintaxe, auditoria e testes no GitHub Actions ao enviar alterações para `main`/`master`, abrir um pull request ou disparar o fluxo manualmente.

Para executar tudo localmente, na raiz do repositório:

```bash
node tools/export-question-bank.cjs .question-bank.audit.json
python tools/audit_questions.py .question-bank.audit.json --strict
node tools/run-tests.cjs
```

É necessário ter Node.js e Python instalados **apenas para executar as ferramentas de desenvolvimento**. O site publicado não precisa de Python para funcionar; continua sendo HTML, CSS e JavaScript estáticos. O GitHub Pages não executa Python do lado do servidor, mas o GitHub Actions pode executar este auditor durante o controle de qualidade. Consulte a [documentação oficial do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

A interface embaralha as alternativas preservando o gabarito, reduzindo padrões de posição da resposta correta. A seleção adaptativa evita IDs vistos recentemente quando há banco suficiente e intercala famílias de tarefa. Algumas tarefas procedurais de atenção e memória geram variantes em cada sessão. A geração aleatória reduz a repetição mecânica, mas não substitui a revisão e expansão contínua do conteúdo.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie o conteúdo desta pasta para a raiz do repositório.
2. Abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Selecione a branch principal e a pasta `/ (root)`; salve.
5. Acesse a URL publicada que o GitHub Pages indicar.

É um site estático: não exige build nem backend. Se editar a organização das pastas, atualize também os caminhos de scripts e estilos em `index.html`.

## Como acrescentar questões

Cada arquivo em `scripts/modules/` registra um módulo usando `MindForge.registerModule`. Uma questão pode ter os seguintes campos:

- `id`: identificador estável e exclusivo;
- `moduleId`: o ID do módulo registrado;
- `type`: `choice`, `number`, `count`, `memory`, `text` ou `open`;
- `level`: número inteiro de 1 a 9;
- `prompt`: enunciado;
- `options` e `answer`: para `choice`, `answer` é o índice da opção correta (começando em zero);
- `answer`: valor numérico para `number` e `count`; texto normalizado para `text`; sequência de símbolos para `memory`;
- `explanation`: justificativa apresentada depois da tentativa;
- `hints`: array opcional de pistas progressivas;
- `tags`: habilidades trabalhadas;
- `reference`: referência textual ou bíblica, quando relevante;
- `criteria`: critérios de autoavaliação em atividades abertas.

Depois de adicionar uma questão, abra `?test=1`, resolva-a manualmente e confirme a explicação e o resultado. O autoteste valida a estrutura e algumas regras geradas, mas não substitui uma revisão editorial do conteúdo.

## Persistência, backup e privacidade

O progresso é guardado no armazenamento local do navegador. Não é enviado a um servidor; por isso, não é sincronizado automaticamente entre dispositivos ou navegadores. Limpar os dados do navegador pode apagar o progresso. Use **Evolução → Exportar progresso** para obter um backup JSON e **Importar backup** para restaurá-lo.

## Conteúdo bíblico e precisão

O módulo bíblico inclui questões textuais e contextuais com referências específicas. As questões de conhecimento textual têm gabaritos objetivos; quando há interpretação, o feedback identifica o foco e ressalta que a conclusão precisa ser limitada pelo texto. O banco inicial não substitui comentário acadêmico, estudo de idiomas originais, pesquisa histórica ou consulta a fontes especializadas. Caso o projeto seja ampliado com conteúdo externo, registre as fontes e revise os direitos autorais das traduções utilizadas.

## Limitações conhecidas

- O progresso é local, sem login, sincronização ou ranking online.
- A geração adaptativa utiliza regras heurísticas transparentes, não uma avaliação cognitiva validada cientificamente.
- O temporizador foi deliberadamente omitido da experiência base; o treino prioriza ritmo livre e exatidão.
- Questões discursivas não recebem avaliação automática: são registradas, pontuadas por conclusão da atividade e acompanhadas de checklist para autoavaliação.
- O banco inicial é expansível e substancial para começar, mas uma versão educacional institucional exigiria revisão especializada, teste com usuários, mais conteúdo validado e auditoria de acessibilidade.

## Licença

Distribuído sob a licença MIT; consulte `LICENSE`.
