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
          return `Minha trajetória na USP teve inicio em 2018, quando ingressei no curso de Licenciatura em Estatística e Ciências Exatas, cursei 2 anos desse curso maravilhoso, porém acabei buscando novos horizontes e 2 anos depois, em 2020 ingressei no curso de Bacharelado em Estatística e Ciência de Dados buscando seguir meu sonho de trabalhar com tecnologia e computadores.`;
  
        case "icmc-pln":
          return `Em 2020 ingressei no curso de Bacharelado em Estatistica e Ciência de Dados, onde pude ter contato com diversas áreas da Computação e com excelentes professores pesquisadores, com projetos voltados a estatística e inteligencia artificial.`;
  
        case "dio":
          return `Curso de curta duração voltado para a introdução ao Git e Github, onde pude aprender sobre o versionamento de código e a plataforma Github, onde hoje hospedo meus projetos.`;
  
        default:
          return "";
      }
    }
  
    // Função para obter o texto do título com base na formação
    function getTitleText(formationName) {
      switch (formationName) {
        case "usp":
          return "Licenciatura em Ciências Exatas (2018 - 2020) / Bacharelado em Estatística e Ciência de Dados (2020 - Atual)";
  
        case "icmc-pln":
          return "Python para Introdução a Processamento de Linguagem Natural (PLN)";
  
        case "dio":
          return "Curso de Git e Github";
  
        default:
          return "";
      }
    }
  
    // Função para obter o texto da data com base na formação
    function getDateText(formationName) {
      switch (formationName) {
        case "usp":
          return "Mar 2018 - Atual";
  
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
          return "Instituto de Ciências Matemáticas e de Computação da USP (ICMC USP)";
  
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
  