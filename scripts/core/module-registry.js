(function (global) {
  'use strict';
  const MF = global.MindForge = global.MindForge || {};
  MF.modules = [];
  MF.registerModule = function (module) {
    if (!module || !module.id || !module.title || !Array.isArray(module.questions)) throw new Error('Módulo Mind Forge inválido.');
    if (MF.modules.some(existing => existing.id === module.id)) throw new Error('ID de módulo duplicado: ' + module.id);
    MF.modules.push(module);
  };
  MF.getModule = id => MF.modules.find(module => module.id === id) || null;
  MF.getQuestion = id => {
    for (const module of MF.modules) {
      const question = module.questions.find(q => q.id === id);
      if (question) return question;
    }
    const review = (MF.state.reviewItems || []).find(item => item.id === id);
    return review ? review.question : null;
  };
  MF.validateQuestion = function (q) {
    if (!q || typeof q.id !== 'string' || typeof q.prompt !== 'string' || !q.prompt.trim()) return false;
    if (!Number.isFinite(q.level) || q.level < 1 || q.level > 9) return false;
    if (q.type === 'choice') return Array.isArray(q.options) && q.options.length >= 2 && Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length;
    if (['number', 'text', 'count', 'memory', 'open'].includes(q.type)) return q.answer !== undefined || q.type === 'open';
    return false;
  };
})(window);
