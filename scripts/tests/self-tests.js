(function (global) {
  'use strict';
  const MF = global.MindForge;
  MF.Tests = {
    run() {
      const failures = [];
      const seen = new Set();
      let questionCount = 0;
      for (const module of MF.modules) {
        if (!module.questions.length) failures.push(`Módulo sem questões: ${module.id}`);
        for (const question of module.questions) {
          questionCount++;
          if (seen.has(question.id)) failures.push(`ID duplicado: ${question.id}`);
          seen.add(question.id);
          if (!MF.validateQuestion(question)) failures.push(`Questão inválida: ${question.id}`);
          if (question.moduleId !== module.id) failures.push(`Módulo incoerente em ${question.id}`);
          if (question.type === 'choice' && (question.answer < 0 || question.answer >= question.options.length)) failures.push(`Resposta fora das opções: ${question.id}`);
          if (question.type === 'count' && question.displaySequence.split(/\s+/).filter(symbol => symbol === question.target).length !== question.answer) failures.push(`Contagem gerada não confere: ${question.id}`);
          if (question.type === 'memory' && question.sequence.join('') !== question.answer) failures.push(`Sequência de memória inválida: ${question.id}`);
        }
      }
      return { ok: failures.length === 0, failures, questionCount, moduleCount: MF.modules.length };
    }
  };
  if (global.location && new URLSearchParams(global.location.search).get('test') === '1') {
    global.addEventListener('DOMContentLoaded', () => {
      const result = MF.Tests.run();
      const panel = global.document.createElement('pre');
      panel.style.cssText = 'position:fixed;z-index:200;left:10px;bottom:10px;max-width:90vw;max-height:45vh;overflow:auto;padding:14px;background:#0c1928;color:#c4f1df;border:1px solid #548b7e;border-radius:10px;font:12px monospace;white-space:pre-wrap';
      panel.textContent = `SELF-TESTS ${result.ok ? 'PASSOU' : 'FALHOU'}\nMódulos: ${result.moduleCount}\nQuestões: ${result.questionCount}\n${result.failures.join('\n') || 'Nenhuma falha estrutural identificada.'}`;
      global.document.body.appendChild(panel);
    });
  }
})(window);
