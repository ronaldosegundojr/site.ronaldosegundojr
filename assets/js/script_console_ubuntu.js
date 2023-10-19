

document.addEventListener('DOMContentLoaded', function () {
  const commandInput = document.getElementById('commandInput');
  const consoleBody = document.getElementById('consoleBody');

  // Adiciona o evento de digitar no input
  commandInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      handleCommand(commandInput.value);
      commandInput.value = '';
    }
  });

  function handleCommand(command) {
    // Adiciona o comando digitado ao console
    const output = document.createElement('p');
    output.textContent = `> ${command}`;
    consoleBody.appendChild(output);

    // Verifica o comando digitado e gera a saída correspondente
    switch (command) {
      case '/help':
        displayHelpOptions();
        break;
      case '/linkedin':
        displayResult('https://www.linkedin.com/in/r-segundojr');
        break;
      case '/github':
        displayResult('https://www.github.com/ronaldosegundojr');
        break;
        case '/skills':
          displayResult('Minhas skills são: Python, Javascript, HTML, CSS, Google Analytics 4, Google Tag Manger, Tableau, SQL Server e SQL');
          break;
      case '/coelho':
        showRunningRabbit();
        break;
      case '/clear':
        resetConsole();
        break;
      default:
        // Comando não reconhecido
        displayResult('Comando não reconhecido. Digite /help para ver as opções.');
    }

    // Rola para baixo para exibir a resposta mais recente
    consoleBody.scrollTop = consoleBody.scrollHeight;
  }

  function displayHelpOptions() {
    const helpOptions = [
      ' Para saber meu linkedin, digite /linkedin',
      ' Para saber meu Github digite /github',
      ' Para ver o White Rabbit digite /coelho',
      ' Para ver minhas skills (habilidades) digite /skills',
      ' Para limpar o chat, digite /clear'
    ];

    helpOptions.forEach((option) => {
      displayResult(option);
    });
  }

  function displayResult(result) {
    const resultElement = document.createElement('p');
    resultElement.textContent = result;
    consoleBody.appendChild(resultElement);
  }

  function showRunningRabbit() {
    // Limpa o console
    consoleBody.innerHTML = '';

    // Adiciona a imagem do coelho correndo
    const img = document.createElement('img');
    img.src = './assets/image/coelho.gif';
    img.style.width = '100%'; // Ajuste conforme necessário
    consoleBody.appendChild(img);
  }

  function showMatrixText() {
    // Limpa o console
    consoleBody.innerHTML = '';

    // Executa a animação do Matrix
    runMatrixAnimation();
  }

  function resetConsole() {
    // Limpa o console
    consoleBody.innerHTML = '';

    // Exibe a mensagem inicial
    displayResult('Digite /help para maiores informações.');

    // Reinicia a animação do Matrix
    runMatrixAnimation();
  }
});

