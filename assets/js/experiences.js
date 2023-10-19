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
        return `Responsável por criar Tags no Google Tag Maneger para dar visibilidade aos clientes a respeito do comportamento dos usuários em plataformas web. 
        Responsável pela criação de relatórios automatizados que integram os dados de diversas plataformas do cliente, facilitando a visualização dos resultados através de Dashboards de forma a possibilitar os melhores insights na tomada de decisão. 
        Configuração e análises para manter a saúde da plataforma Google Analytics 4 dos clientes. 
        Documentação dos projetos e das implementações realizadas. 
        Aprendizado constante sobre as tecnologias fundamentais da área e também sobre os conceitos básicos das demais áreas da Análise de Dados. 
        Atuação com mais de um cliente de grande porte no mercado.
        
        Skills: Javascript, HTML, CSS, Google Analytics 4, Google Tag Maneger, Excel, Jira, Regex`;

      case "roche":
        return `Responsável por validar o que o time de engenharia de dados e visualização de dados desenvolvem, com uso da documentação de software e ferramentas como SQL e Tableau. 
        Participo como Business Analyst no time ágil criando uma conexão entre o time de negócios e o time de engenharia de dados. 
        Além disso, sou responsável por elaborar a documentação com as informações que o time de negócios solicita e repasso para os engenheiros de dados com os campos que precisarão trabalhar, de forma estruturada e concisa para o desenvolvimento das tabelas no Hadoop e posteriormente para o time de DataViz desenvolver os dashboards e as telas e responsável por movimentar os cards referentes a validação das histórias de usuário no Jira.
        
        Skills: Tableau, SQL, Excel, Jira`;

      case "k2partneringsolutions":
        return `Atuei como Consultor Analista de Dados Pleno alocado na multinacional da indústria Farmacêutica, Roche.`;

      case "proethicconsultoriaecompliance":
        return `Responsável por fazer Análise de Dados via Excel dos dados recebidos pelo Canal de Denúncias. \n
        Atuação como Líder de equipe revisando os processos a serem executados por todas as equipes.  \n
        Experiência com Google Cloud para utilizar a API Speech-To-Text. Responsável por desenvolver dashboards em Excel com uso de tabelas dinâmicas. \n
        Responsável por realizar auditoria interna e auditoria externa dos relatórios. Responsável por fazer SELECTS na base de dados com uso do SQL Server e SQL. \n
        Responsável por administrar o software de telefonia IP 3CX. Responsável pela solução de problemas de software e hardware. Responsável por realizar manutenção e suporte a rede de computadores. \n
        Recebi o desafio de adaptar o dia-a-dia da empresa para o modelo Home office durante a pandemia do COVID-19 em 2020, fiz um planejamento e a empresa toda migrou com base no que estruturei. \n
        Responsável por acompanhar o andamento da implantação de novos clientes. Participei ativamente ajudando a organizar a implantação de 15 clientes no 1º semestre de 2021. \n
        Responsável pelo treinamento de novos funcionários e também pelo aprimoramento dos funcionários antigos.
        
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
        return "Analista de Dados Pleno";

      case "k2partneringsolutions":
        return "Consultor Analista de Dados Pleno";

      case "proethicconsultoriaecompliance":
        return "Analista de Dados Sênior";

      default:
        return "";
    }
  }

  // Função para obter o texto da data com base na empresa
  function getDateText(companyName) {
    switch (companyName) {
      case "media.monks":
        return "Mai 2023 - Atual";

      case "roche":
        return "Mai 2022 - Jan 2023";

      case "k2partneringsolutions":
        return "Mai 2022 - Jan 2023";

      case "proethicconsultoriaecompliance":
        return "Abr 2019 - Atual (sob demanda)";

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
