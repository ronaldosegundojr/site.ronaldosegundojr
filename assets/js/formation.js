document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um evento de clique para cada empresa de formação
    document.querySelectorAll("#formation .formation").forEach(function (formation) {
      formation.addEventListener("click", function () {
        // Obtém o nome da formação do elemento pai
        var formationName = this.classList[1];
  
        // Define o texto da experiência com base na formação
        var formationText = getFormationText(formationName);
  
        // Atualiza o conteúdo da tag <p class="changeUniversity">
        document.querySelector(".text-formation p.changeUniversity").textContent = formationText;
  
        // Atualiza o conteúdo da tag <h4 class="titleExperience">
        document.querySelector(".text-formation h4.titleFormation").textContent = getTitleText(formationName);
  
        // Atualiza o conteúdo da tag <h5 class="formationUniversity">
        document.querySelector(".text-formation h5.formationUniversity").textContent = formatFormationName(formationName);
  
        // Atualiza o conteúdo da tag <p class="dateExperience">
        document.querySelector(".text-formation p.dateFormation").textContent = getDateText(formationName);
      });
    });
  
    // Função para obter o texto de experiência com base na formação
    function getFormationText(formationName) {
      switch (formationName) {
        case "usp":
          return `My career at USP began in 2018, when I enrolled in the Bachelor's degree in Statistics and Exact Sciences, I studied this wonderful course for 2 years, but I ended up looking for new horizons and 2 years later, in 2020, I enrolled in the Bachelor's degree in Statistics and Science. Data seeking to follow my dream of working with technology and computers.`;
  
        case "icmc-pln":
          return `In 2020 I joined the Bachelor's degree in Statistics and Data Science, where I was able to have contact with different areas of Computing and with excellent research professors, with projects focused on statistics and artificial intelligence.`;
  
        case "dio":
          return `Short course aimed at introducing Git and Github, where I was able to learn about code versioning and the Github platform, where I now host my projects.`;
  
        default:
          return "";
      }
    }
  
    // Função para obter o texto do título com base na formação
    function getTitleText(formationName) {
      switch (formationName) {
        case "usp":
          return "Degree in Exact Sciences (2018 - 2020) / Bachelor's Degree in Statistics and Data Science (2020 - Current)";
  
        case "icmc-pln":
          return "Python for Introduction to Natural Language Processing (NLP)";
  
        case "dio":
          return "Git and Github Course";
  
        default:
          return "";
      }
    }
  
    // Função para obter o texto da data com base na formação
    function getDateText(formationName) {
      switch (formationName) {
        case "usp":
          return "Mar 2018 - Current";
  
        case "icmc-pln":
          return "Set 2021 - Set 2021";
  
        case "dio":
          return "Jan 2022 - Jan 2022";
  
        default:
          return "";
      }
    }
  
    // Função para formatar o nome da formação
    function formatFormationName(formationName) {
      switch (formationName) {
        case "usp":
          return "Universidade de São Paulo (USP)";
  
        case "icmc-pln":
          return "Institute of Mathematical and Computer Sciences at USP(ICMC USP)";
  
        case "dio":
          return "Digital Innovation One (DIO)";
  
        default:
          return "";
      }
    }
  
    // Função para lidar com o clique nas formações
    function handleFormationClick(formationName) {
      // Remove a classe 'activeExperience' de todas as formações
      var allFormations = document.querySelectorAll('#formation .formation');
      allFormations.forEach(function (formation) {
        formation.classList.remove('activeExperience');
      });
  
      // Adiciona a classe 'activeExperience' apenas à formação clicada
      var clickedFormation = document.querySelector('.formation.' + formationName);
  
      // Verifica se o elemento foi encontrado antes de tentar adicionar a classe
      if (clickedFormation) {
        clickedFormation.classList.add('activeExperience');
      }
    }
  
    // Adiciona o evento de clique a todas as formações
    var allFormations = document.querySelectorAll('#formation .formation');
    allFormations.forEach(function (formation) {
      formation.addEventListener('click', function () {
        var formationName = formation.classList[1]; // Assume que a segunda classe é o nome da formação
        handleFormationClick(formationName);
      });
    });
  });
  