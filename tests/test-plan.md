# Plano de teste manual — Mind Forge Omega

## Integridade de conteúdo
- [ ] Abrir `/?test=1` e confirmar que o painel indica sucesso.
- [ ] Conferir o conteúdo factual e a explicação apresentada numa amostra de cada módulo.
- [ ] Confirmar que não existem IDs repetidos.

## Fluxo de sessão
- [ ] Iniciar um laboratório, selecionar uma opção e enviar.
- [ ] Confirmar que a explicação aparece somente depois da tentativa.
- [ ] Em uma questão errada, tentar novamente e depois avançar.
- [ ] Usar uma pista e verificar o indicador de pistas.
- [ ] Terminar uma sessão e conferir o relatório.
- [ ] Sair de uma sessão antes do fim e confirmar que as respostas já enviadas permanecem no histórico.

## Mecânicas específicas
- [ ] Atenção: contar o símbolo-alvo e conferir o feedback.
- [ ] Memória: observar a sequência, ocultá-la, responder e conferir o feedback.
- [ ] Criatividade/metacognição: escrever uma resposta, marcar critérios e registrar a reflexão sem que ela seja tratada como questão objetiva.
- [ ] Revisão: errar uma questão, abrir a fila e praticar o item novamente.
- [ ] Campanha: concluir corretamente uma etapa e confirmar que ela fica registrada; uma etapa errada deve continuar disponível.

## Dados e acessibilidade
- [ ] Atualizar a página e confirmar a persistência do progresso.
- [ ] Exportar um backup e importar o mesmo arquivo.
- [ ] Tentar importar um JSON inválido e confirmar mensagem de erro.
- [ ] Redefinir o progresso somente após confirmação.
- [ ] Navegar por teclado e verificar foco visível.
- [ ] Conferir layout em viewport de celular e desktop.

Este checklist acompanha o projeto. As verificações devem ser marcadas depois de executadas no navegador alvo.

## Verificações automatizadas executadas nesta entrega

- [x] Verificação sintática (`node --check`) de todos os arquivos JavaScript.
- [x] Autotestes de integridade: 12 módulos, 269 questões, IDs e estruturas válidas; nenhuma falha reportada.
- [x] Teste em Chromium/Playwright: tela inicial e botão de Desafio de Elite; questão avançada renderizada e feedback após submissão.
- [x] Teste responsivo em viewport móvel: menu de módulos funcional e sem transbordamento horizontal.
- [x] Fluxos de módulos, campanha interdisciplinar, feedback, nova tentativa e fila de revisão exercitados no navegador durante a verificação do projeto.

A lista manual acima continua sendo útil para novas versões e para verificar navegadores/dispositivos diferentes. Os autotestes validam a integridade estrutural; não substituem revisão editorial especializada de todos os conteúdos nem testes com usuários reais.
