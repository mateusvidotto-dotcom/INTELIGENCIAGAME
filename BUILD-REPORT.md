# Relatório de construção e verificação — MIND FORGE OMEGA ∞

Versão do projeto: 1.1.0  
Data: 13/10/2026

## Escopo desta versão

- 12 módulos integrados e 269 desafios iniciais.
- Tipos de atividade: 173 questões objetivas, 24 numéricas, 8 contagens visuais, 24 desafios de memória e 40 atividades abertas.
- 124 conjuntos de alternativas revisados editorialmente; o gabarito é embaralhado na interface com remapeamento do índice para manter a resposta correta.
- Geradores procedurais de atenção e memória e seleção adaptativa que evita questões recentes quando há alternativas suficientes e intercala famílias de tarefas.
- Auditoria Python, testes do núcleo em Node.js e integração contínua por GitHub Actions.

## Verificações executadas

| Verificação | Resultado |
|---|---|
| Sintaxe de todos os arquivos JavaScript de `scripts/` e `tools/` | Aprovada |
| Auditoria Python estrita do banco exportado | Aprovada; 0 falhas estruturais, 0 alertas de comprimento, 0 prompts repetidos e 0 quase-duplicatas identificadas |
| Autotestes dos módulos e variantes | Aprovados: 12 módulos e 269 questões |
| Núcleo: XP, persistência simulada, fila de revisão e seleção adaptativa | Aprovado |
| Navegador Chromium: renderização, resposta objetiva com gabarito embaralhado e feedback | Aprovado |
| Navegador Chromium: tentativa e feedback nos 12 módulos | Aprovado |
| Viewport móvel de 390 px: acesso aos 12 módulos e ausência de rolagem horizontal | Aprovado |
| Erros JavaScript detectados durante o smoke test no navegador | 0 |

## Como repetir a auditoria

Na raiz do repositório, com Node.js e Python instalados:

```bash
node tools/export-question-bank.cjs .question-bank.audit.json
python tools/audit_questions.py .question-bank.audit.json --strict
node tools/run-tests.cjs
```

O GitHub Actions executa essas verificações automaticamente quando mudanças são enviadas às branches `main` ou `master`, em pull requests ou quando o fluxo é iniciado manualmente.

## Limites e integridade

- Testes automatizados e smoke tests reduzem riscos, mas não provam ausência absoluta de defeitos.
- A auditoria estrutural não substitui a revisão humana de todos os conteúdos, especialmente interpretações bíblicas, fatos históricos e qualidade pedagógica dos distratores.
- As atividades de resposta aberta são registradas com critérios para autoavaliação; não recebem uma nota semântica automática fictícia.
- Estatísticas, XP e níveis são métricas internas do jogo, não teste de QI nem medida clínica.
- A hospedagem principal continua estática. Python é usado somente na auditoria de desenvolvimento e no GitHub Actions; não é necessário para o site funcionar no GitHub Pages.
- O site ainda precisa ser enviado ao repositório do usuário e ter a fonte do GitHub Pages selecionada uma vez em **Settings → Pages**.
