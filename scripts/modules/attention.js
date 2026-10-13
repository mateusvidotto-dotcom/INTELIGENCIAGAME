(function (global) {
  'use strict';
  const MF = global.MindForge;
  const symbols = ['●','▲','■','◆'];
  const questions = [];
  for (let i = 1; i <= 24; i++) {
    const target = symbols[(i - 1) % symbols.length];
    const count = 4 + ((i * 3) % 8);
    const length = 24 + ((i * 7) % 13);
    const list = [];
    for (let n = 0; n < count; n++) list.push(target);
    for (let n = count; n < length; n++) list.push(symbols[(i + n * 3 + Math.floor(n / 4)) % symbols.length]);
    for (let k = list.length - 1; k > 0; k--) { const j = (i * 17 + k * 11) % (k + 1); [list[k], list[j]] = [list[j], list[k]]; }
    const actualCount = list.filter(value => value === target).length;
    questions.push({ id:`attention-count-${String(i).padStart(2,'0')}`, moduleId:'attention', type:'count', level:Math.min(9, 1 + Math.floor(i / 3)), prompt:`Quantas vezes o símbolo ${target} aparece na sequência?`, shortTitle:`Contagem de ${target}`, displaySequence:list.join('  '), target, answer:actualCount, explanation:`O símbolo-alvo é ${target}. A sequência contém ${actualCount} ocorrência(s). O método mais confiável é percorrer a linha de maneira sistemática, agrupando mentalmente em pequenos blocos sem contar o mesmo símbolo duas vezes.`, hints:['Percorra a sequência da esquerda para a direita e mantenha a contagem em grupos pequenos.',`Procure apenas o símbolo ${target}; ignore os demais.`], tags:['atenção seletiva','observação'], context:`Ignore os outros símbolos. Não há limite de tempo.` });
  }
  MF.registerModule({ id:'attention', title:'Atenção e percepção', shortTitle:'Atenção', description:'Encontre detalhes relevantes, detecte padrões e resista a distrações.', icon:'⌖', accent:'#7ddbd3', category:'cognitive', tag:'OBSERVAÇÃO', kicker:'CENTRO DE ATENÇÃO', subtitle:'Observe com método. A precisão vale mais do que a velocidade.', questions, duration:'3–8 min' });
})(window);
