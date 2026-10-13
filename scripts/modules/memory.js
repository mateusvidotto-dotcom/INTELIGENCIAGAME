(function (global) {
  'use strict';
  const MF = global.MindForge;
  const symbols = ['▲','●','◆','■','✦','○','△','◇'];
  const questions = [];
  for (let i = 1; i <= 24; i++) {
    const length = 3 + Math.floor((i - 1) / 3);
    const sequence = [];
    for (let j = 0; j < length; j++) sequence.push(symbols[(i * 3 + j * 5 + Math.floor(i / 2) * j) % symbols.length]);
    questions.push({ id:`memory-seq-${String(i).padStart(2,'0')}`, moduleId:'memory', type:'memory', level:Math.min(8, 1 + Math.floor((i - 1) / 2)), prompt:'Memorize a sequência e depois reproduza os símbolos na mesma ordem.', shortTitle:`Sequência de memória (${length})`, sequence, answer:sequence.join(''), explanation:`A sequência correta tinha ${length} símbolo(s). A tarefa trabalha recuperação da ordem, não uma medida geral de inteligência. Uma estratégia útil é agrupar os elementos em pares ou pequenas unidades significativas.`, hints:['Tente agrupar símbolos em pares e repetir mentalmente os grupos.','Você precisa preservar tanto os símbolos quanto a ordem em que aparecem.'], tags:['memória de trabalho','recuperação ativa'] });
  }
  MF.registerModule({ id:'memory', title:'Câmara da memória', shortTitle:'Memória', description:'Pratique recordação de sequências e recuperação ativa, sem cronômetro.', icon:'▦', accent:'#c0a2ff', category:'cognitive', tag:'RETENÇÃO', kicker:'CÂMARA DA MEMÓRIA', subtitle:'Observe, codifique a informação e recupere-a sem consultar a sequência.', questions, duration:'3–8 min' });
})(window);
