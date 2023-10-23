document.addEventListener("DOMContentLoaded", function () {
  // Adiciona um evento de clique para cada empresa
  document.querySelectorAll("#experience-company .company").forEach(function (company) {
    company.addEventListener("click", function () {
      // Obtém o nome da empresa do elemento pai
      var companyName = this.classList[1];

      // Atualiza o conteúdo com base na empresa
      updateExperienceContent(companyName);
    });
  });

  // Função para atualizar o conteúdo com base na empresa
  function updateExperienceContent(companyName) {
    // Define o texto da experiência com base na empresa
    var experienceText = getExperienceText(companyName);

    // Atualiza o conteúdo da tag <p class="changeExperience">
    document.querySelector(".text-experience p.changeExperience").textContent = experienceText;

    // Atualiza o conteúdo da tag <h4 class="titleExperience">
    document.querySelector(".text-experience h4.titleExperience").textContent = getTitleText(companyName);

    // Atualiza o conteúdo da tag <h5 class="companyExperience">
    document.querySelector(".text-experience h5.companyExperience").textContent = formatCompanyName(companyName);

    // Atualiza o conteúdo da tag <p class="dateExperience">
    document.querySelector(".text-experience p.dateExperience").textContent = getDateText(companyName);

    // Lidar com o clique nas empresas
    handleCompanyClick(companyName);
  }

  // Função para obter o texto de experiência com base na empresa
  function getExperienceText(companyName) {
    switch (companyName) {
      case "media.monks":
        return `Responsible for creating Tags on Google Tag Maneger to give customers visibility regarding user behavior on web platforms.
        Responsible for creating automated reports that integrate data from various client platforms, facilitating the visualization of results through Dashboards in order to provide the best insights into decision making.
        Configuration and analytics to maintain the health of customers' Google Analytics 4 platform.
        Documentation of projects and implementations carried out.
        Constant learning about the fundamental technologies in the area and also about the basic concepts of other areas of Data Analysis.
        Working with more than one large client in the market.
        
        Skills: Javascript, HTML, CSS, Google Analytics 4, Google Tag Maneger, Excel, Jira, Regex`;

      case "roche":
        return `Responsible for validating what the data engineering and data visualization team develops, using software documentation and tools such as SQL and Tableau.
        I participate as a Business Analyst in the agile team, creating a connection between the business team and the data engineering team.
        Furthermore, I am responsible for preparing the documentation with the information that the business team requests and passing it on to the data engineers with the fields that they will need to work on, in a structured and concise way for the development of the tables in Hadoop and later to the development team. DataViz developed the dashboards and screens and was responsible for moving the cards related to validating user stories in Jira.
        
        Skills: Tableau, SQL, Excel, Jira`;

      case "k2partneringsolutions":
        return `I worked as a Full Data Analyst Consultant allocated to the multinational pharmaceutical industry, Roche.`;

      case "proethicconsultoriaecompliance":
        return `Responsible for performing Data Analysis via Excel of the data received by the Reporting Channel. \n
        Acting as Team Leader reviewing the processes to be carried out by all teams. \n
        Experience with Google Cloud to use the Speech-To-Text API. Responsible for developing dashboards in Excel using pivot tables. \n
        Responsible for carrying out internal audit and external audit of reports. Responsible for making SELECTS in the database using SQL Server and SQL. \n
        Responsible for administering the 3CX IP telephony software. Responsible for solving software and hardware problems. Responsible for maintaining and supporting the computer network. \n
        I received the challenge of adapting the company's day-to-day activities to the Home Office model during the COVID-19 pandemic in 2020, I made a plan and the entire company migrated based on what I structured. \n
        Responsible for monitoring the progress of new customer implementation. I actively participated in helping organize the implementation of 15 clients in the 1st half of 2021. \n
        Responsible for training new employees and also for improving old employees.
        
        Skills: Python, Excel, HTML, CSS, SQL Server, SQL, 3CX PABX.`;

      default:
        return "";
    }
  }

  // Função para obter o texto do título com base na empresa
  function getTitleText(companyName) {
    switch (companyName) {
      case "media.monks":
        return "Web Analytics Analyst";

      case "roche":
        return "Full Data Analyst";

      case "k2partneringsolutions":
        return "Data Analyst Consultant";

      case "proethicconsultoriaecompliance":
        return "Senior Data Analyst";

      default:
        return "";
    }
  }

  // Função para obter o texto da data com base na empresa
  function getDateText(companyName) {
    switch (companyName) {
      case "media.monks":
        return "May 2023 - Current";

      case "roche":
        return "Mai 2022 - Jan 2023";

      case "k2partneringsolutions":
        return "Mai 2022 - Jan 2023";

      case "proethicconsultoriaecompliance":
        return "Abr 2019 - Current (on demand)";

      default:
        return "";
    }
  }

  // Função para formatar o nome da empresa
  function formatCompanyName(companyName) {
    switch (companyName) {
      case "media.monks":
        return "Media.Monks";

      case "roche":
        return "Roche";

      case "k2partneringsolutions":
        return "K2 Partnering Solutions";

      case "proethicconsultoriaecompliance":
        return "Proethic Consultoria e Compliance";

      default:
        return "";
    }
  }

  // Função para lidar com o clique nas empresas
  function handleCompanyClick(companyName) {
    // Remove a classe 'activeExperience' de todas as empresas
    var allCompanies = document.querySelectorAll('.option-experience .company');
    allCompanies.forEach(function(company) {
      company.classList.remove('activeExperience');
    });

    // Adiciona a classe 'activeExperience' apenas à empresa clicada
    var clickedCompany = document.querySelector('.company.' + companyName);
  
    // Verifica se o elemento foi encontrado antes de tentar adicionar a classe
    if (clickedCompany) {
      clickedCompany.classList.add('activeExperience');
    }
  }

  // Adiciona o evento de clique a todas as empresas
  var allCompanies = document.querySelectorAll('.option-experience .company');
  allCompanies.forEach(function(company) {
    company.addEventListener('click', function() {
      var companyName = company.classList[1]; // Assume que a segunda classe é o nome da empresa
      updateExperienceContent(companyName);
    });
  });
});
