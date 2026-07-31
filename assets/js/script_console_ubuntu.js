document.addEventListener("DOMContentLoaded", function () {
  const commandInput = document.getElementById("commandInput");
  const consoleBody = document.getElementById("consoleBody");

  function getLang() {
    return window.I18N ? window.I18N.current : "pt";
  }

  function messages() {
    const en = getLang() === "en";
    return {
      skills:
        en
          ? "My skills are: GA4, GTM, BigQuery, Looker Studio, Adobe Analytics, Tableau, SQL, Python, JavaScript, React, Node.js, Docker, Git, Expo, Artificial Intelligence (Claude Code)."
          : "Minhas skills são: GA4, GTM, BigQuery, Looker Studio, Adobe Analytics, Tableau, SQL, Python, JavaScript, React, Node.js, Docker, Git, Expo, Inteligência Artificial (Claude Code).",
      notRecognized: en
        ? "Command not recognized. Type /help to see options."
        : "Comando não reconhecido. Digite /help para ver as opções.",
      helpOptions: en
        ? [
            "To find my linkedin, type /linkedin",
            "To find my Github type /github",
            "To see the White Rabbit type /coelho",
            "To see my skills type /skills",
            "To clear the chat, type /clear",
          ]
        : [
            "Para encontrar meu linkedin, digite /linkedin",
            "Para encontrar meu Github, digite /github",
            "Para ver o Coelho Branco, digite /coelho",
            "Para ver minhas skills, digite /skills",
            "Para limpar o chat, digite /clear",
          ],
      clear: en
        ? "Type /help for more information."
        : "Digite /help para mais informações.",
    };
  }

  commandInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleCommand(commandInput.value);
      commandInput.value = "";
    }
  });

  function handleCommand(command) {
    const output = document.createElement("p");
    output.textContent = `> ${command}`;
    consoleBody.appendChild(output);

    switch (command) {
      case "/help":
        displayHelpOptions();
        break;
      case "/linkedin":
        displayResult("https://www.linkedin.com/in/r-segundojr");
        break;
      case "/github":
        displayResult("https://www.github.com/ronaldosegundojr");
        break;
      case "/skills":
        displayResult(messages().skills);
        break;
      case "/coelho":
        showRunningRabbit();
        break;
      case "/clear":
        resetConsole();
        break;
      default:
        displayResult(messages().notRecognized);
    }

    consoleBody.scrollTop = consoleBody.scrollHeight;
  }

  function displayHelpOptions() {
    messages().helpOptions.forEach((option) => {
      displayResult(option);
    });
  }

  function displayResult(result) {
    const resultElement = document.createElement("p");
    resultElement.textContent = result;
    consoleBody.appendChild(resultElement);
  }

  function showRunningRabbit() {
    consoleBody.innerHTML = "";
    const img = document.createElement("img");
    img.src = "./assets/image/coelho.gif";
    img.style.width = "100%";
    consoleBody.appendChild(img);
  }

  function resetConsole() {
    consoleBody.innerHTML = "";
    const prompt = document.createElement("p");
    prompt.className = "neo";
    prompt.innerHTML = 'neo@neo-pc:~$ <span id="cursor">|</span>';
    consoleBody.appendChild(prompt);

    const span = document.createElement("span");
    span.className = "text";
    consoleBody.appendChild(span);

    displayResult(messages().clear);
    if (typeof runMatrixAnimation === "function") {
      runMatrixAnimation();
    }
  }
});
