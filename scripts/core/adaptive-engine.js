(function (global) {
  'use strict';
  const MF = global.MindForge = global.MindForge || {};
  MF.Adaptive = {
    recommendedLevel(moduleId) {
      const stats = MF.moduleStats(moduleId);
      const configured = Number(MF.state.settings.difficulty) || 1;
      if (!stats.answered || !stats.recent || stats.recent.length < 4) return configured;
      const recent = stats.recent.slice(-8);
      const rate = recent.filter(item => item.correct).length / recent.length;
      const hints = MF.state.history.filter(item => item.moduleId === moduleId).slice(0, 8).filter(item => item.hintUsed).length;
      if (rate >= 0.85 && hints <= 2) return Math.min(9, Math.max(configured, this.lastObservedLevel(moduleId) + 1));
      if (rate <= 0.45) return Math.max(1, Math.min(configured, this.lastObservedLevel(moduleId) - 1 || 1));
      return Math.max(1, Math.min(9, this.lastObservedLevel(moduleId) || configured));
    },
    lastObservedLevel(moduleId) {
      const attempt = MF.state.history.find(entry => entry.moduleId === moduleId);
      return attempt ? Number(attempt.difficulty) || 1 : Number(MF.state.settings.difficulty) || 1;
    },
    pick(questions, moduleId, opts) {
      const options = opts || {};
      let pool = questions.slice();
      if (options.review) return pool;
      const level = options.level || this.recommendedLevel(moduleId);
      const within = pool.filter(q => (q.level || 1) <= Math.min(9, level + 1) && (q.level || 1) >= Math.max(1, level - 2));
      if (within.length) pool = within;
      const recentIds = new Set(MF.state.history.slice(0, 8).map(h => h.questionId));
      const fresh = pool.filter(q => !recentIds.has(q.id));
      if (fresh.length >= Math.min(3, pool.length)) pool = fresh;
      return pool.sort(() => Math.random() - 0.5);
    }
  };
})(window);
