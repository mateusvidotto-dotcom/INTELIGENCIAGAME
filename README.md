# MIND FORGE OMEGA ∞ — A Forja do Intelecto

Jogo web estático para prática de raciocínio lógico, atenção, memória, matemática, criatividade, pensamento crítico, interpretação, ciência, estratégia e estudo bíblico contextual. Feito com HTML5, CSS3 e JavaScript nativo, sem dependências obrigatórias, servidor próprio ou APIs externas.

> **Importante:** XP, níveis e estatísticas são indicadores internos de participação e desempenho nas atividades desta aplicação. Não são medidas científicas de inteligência, QI, diagnóstico ou avaliação clínica.

## O que está implementado

- Painel inicial, navegação responsiva e 12 laboratórios com 269 desafios iniciais, distribuídos em bancos próprios por habilidade.
- Questões de múltipla escolha, resposta numérica, contagem de símbolos, memória de sequência e reflexões abertas com checklist de autoavaliação.
- Nove níveis internos de dificuldade, XP, recompensas e recomendações heurísticas baseadas no histórico recente.
- Sessões adaptativas, treino livre, desafio surpresa, revisão e campanha de cinco etapas interdisciplinares.
- Feedback explicativo após a tentativa, pistas progressivas, referências bíblicas em questões pertinentes e registro de erros.
- Fila de revisão com agendamento local simples, itens dominados e possibilidade de praticar um item isolado.
- Painel de evolução por módulo, histórico, métricas de tentativa/confiança/uso de pistas e conquistas.
- Persistência via `localStorage`, exportação e importação de backup JSON com validação de estrutura.
- Preferências de acessibilidade, suporte a teclado, foco visível, responsividade e respeito à preferência de movimento reduzido.
- Autotestes de integridade de módulos e questões no navegador.

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
├── tests/
│   └── test-plan.md
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

Não é necessário instalar pacotes. Servir a pasta por HTTP é recomendado para que o comportamento do armazenamento local seja mais previsível que a abertura direta por `file://`.

## Executar o autoteste

Abra `http://localhost:8000/?test=1`. A página mostra um painel com a quantidade de módulos e questões, IDs duplicados, estrutura de questões inválidas e conferência das sequências geradas de atenção e memória.

Também é possível abrir o console do navegador e executar:

```javascript
MindForge.Tests.run()
```

O retorno contém `ok`, `failures`, `moduleCount` e `questionCount`.

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

Depois de adicionar uma questão, abra `?test=1`, resolva-a manualmente e confirme a explicação e o resultado. O autoteste valida a estrutura, não substitui uma revisão editorial do conteúdo.

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
