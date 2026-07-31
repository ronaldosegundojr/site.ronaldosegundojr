/* Experiências - conteúdo bilíngue com alternador de abas */
(function () {
  const EXPERIENCES = [
    {
      key: "webjump",
      name: "AI/R WEBJUMP",
      title: {
        pt: "Data & Web Analytics Specialist",
        en: "Data & Web Analytics Specialist",
      },
      date: { pt: "2025 - Atual", en: "2025 - Current" },
      text: {
        pt: "Especialista em dados e web analytics atuando em contas de grande porte no Brasil. Responsável por estruturação, manutenção e evolução da mensuração digital com Google Analytics 4 (GA4) e Google Tag Manager (GTM), incluindo criação de tags, tagging plan, auditorias e governança de dados.\nLiderança técnica em iniciativas de web analytics (Data Lead) no projeto Broto, orientando analistas, priorizando demandas e garantindo a qualidade da coleta de dados.\nAtuação com coleta e validação de dados (Nespresso), análise de dados e geração de insights estratégicos com Adobe Analytics (Azul Linhas Aéreas) e projeto internacional com Yamaha (EUA/Japão), com arquitetura de tracking, modelagem em SQL e BigQuery, dashboards em Tableau e automação em Python.\n\nSkills: GA4, GTM, BigQuery, Looker Studio, Adobe Analytics, SQL, Python, Tableau, Data Layer.",
        en: "Data and web analytics specialist working on large-scale accounts in Brazil. Responsible for structuring, maintaining and evolving digital measurement with Google Analytics 4 (GA4) and Google Tag Manager (GTM), including tag creation, tagging plans, audits and data governance.\nTechnical leadership in web analytics initiatives (Data Lead) on the Broto project, mentoring analysts, prioritizing demands and ensuring data collection quality.\nWorking with data collection and validation (Nespresso), data analysis and strategic insights generation with Adobe Analytics (Azul Linhas Aéreas) and an international project with Yamaha (USA/Japan), with tracking architecture, SQL and BigQuery modeling, Tableau dashboards and Python automation.\n\nSkills: GA4, GTM, BigQuery, Looker Studio, Adobe Analytics, SQL, Python, Tableau, Data Layer.",
      },
    },
    {
      key: "media.monks",
      name: "Media.Monks",
      title: { pt: "Analista de Web Analytics", en: "Web Analytics Analyst" },
      date: { pt: "Mai 2023 - 2025", en: "May 2023 - 2025" },
      text: {
        pt: "Responsável pela criação de Tags no Google Tag Manager para dar visibilidade aos clientes sobre o comportamento dos usuários nas plataformas web.\nCriação de relatórios automatizados que integram dados de várias plataformas dos clientes, facilitando a visualização de resultados por meio de dashboards para fornecer os melhores insights para a tomada de decisão.\nConfiguração e análises para manter a saúde da plataforma Google Analytics 4 dos clientes.\nDocumentação de projetos e implementações realizadas. Atuação com mais de um grande cliente do mercado.\n\nSkills: JavaScript, HTML, CSS, GA4, GTM, Excel, Jira, Regex.",
        en: "Responsible for creating Tags on Google Tag Manager to give customers visibility regarding user behavior on web platforms.\nResponsible for creating automated reports that integrate data from various client platforms, facilitating the visualization of results through Dashboards in order to provide the best insights into decision making.\nConfiguration and analytics to maintain the health of customers' Google Analytics 4 platform.\nDocumentation of projects and implementations carried out. Working with more than one large client in the market.\n\nSkills: JavaScript, HTML, CSS, GA4, GTM, Excel, Jira, Regex.",
      },
    },
    {
      key: "roche",
      name: "Roche",
      title: { pt: "Analista de Dados Pleno", en: "Full Data Analyst" },
      date: { pt: "Mai 2022 - Jan 2023", en: "May 2022 - Jan 2023" },
      text: {
        pt: "Responsável por validar o trabalho do time de engenharia de dados e visualização de dados, utilizando documentação de software e ferramentas como SQL e Tableau.\nAtuação como Business Analyst no time ágil, criando uma conexão entre o time de negócios e o time de engenharia de dados.\nPreparação de documentação com as informações solicitadas pelo time de negócios para os engenheiros de dados, de forma estruturada e concisa, para o desenvolvimento das tabelas no Hadoop e, posteriormente, do time de DataViz.\n\nSkills: Tableau, SQL, Excel, Jira.",
        en: "Responsible for validating what the data engineering and data visualization team develops, using software documentation and tools such as SQL and Tableau.\nI participate as a Business Analyst in the agile team, creating a connection between the business team and the data engineering team.\nPreparing the documentation with the information the business team requests and passing it on to data engineers in a structured and concise way for the development of tables in Hadoop and later to the DataViz team.\n\nSkills: Tableau, SQL, Excel, Jira.",
      },
    },
    {
      key: "k2partneringsolutions",
      name: "K2 Partnering Solutions",
      title: { pt: "Consultor Analista de Dados", en: "Data Analyst Consultant" },
      date: { pt: "Mai 2022 - Jan 2023", en: "May 2022 - Jan 2023" },
      text: {
        pt: "Atuei como Consultor Analista de Dados Pleno alocado na multinacional da indústria farmacêutica, Roche.",
        en: "I worked as a Full Data Analyst Consultant allocated to the multinational pharmaceutical industry, Roche.",
      },
    },
    {
      key: "proethicconsultoriaecompliance",
      name: "Proethic Consultoria e Compliance",
      title: { pt: "Analista de Dados Sênior", en: "Senior Data Analyst" },
      date: { pt: "Abr 2019 - Atual (sob demanda)", en: "Apr 2019 - Current (on demand)" },
      text: {
        pt: "Responsável pela análise de dados via Excel dos dados recebidos pelo Canal de Denúncias.\nAtuação como Líder de equipe, revisando os processos a serem executados por todas as equipes.\nExperiência com Google Cloud para usar a API Speech-To-Text. Desenvolvimento de dashboards em Excel com tabelas dinâmicas.\nResponsável por realizar auditorias internas e externas de relatórios e por fazer SELECTs no banco de dados usando SQL Server e SQL.\nAdministração do software de telefonia IP 3CX e suporte a hardware e software.\n\nSkills: Python, Excel, HTML, CSS, SQL Server, SQL, 3CX PABX.",
        en: "Responsible for performing Data Analysis via Excel of the data received by the Reporting Channel.\nActing as Team Leader reviewing the processes to be carried out by all teams.\nExperience with Google Cloud to use the Speech-To-Text API. Responsible for developing dashboards in Excel using pivot tables.\nResponsible for carrying out internal and external audit of reports and for making SELECTs in the database using SQL Server and SQL.\nResponsible for administering the 3CX IP telephony software and for solving software and hardware problems.\n\nSkills: Python, Excel, HTML, CSS, SQL Server, SQL, 3CX PABX.",
      },
    },
  ];

  const optionEl = document.getElementById("experience-company");
  const titleEl = document.querySelector(".text-experience h4.titleExperience");
  const dateEl = document.querySelector(".text-experience p.dateExperience");
  const companyEl = document.querySelector(".text-experience h5.companyExperience");
  const textEl = document.querySelector(".text-experience p.changeExperience");

  let current = 0;

  function render() {
    const lang = window.I18N.current;

    optionEl.innerHTML = "";
    EXPERIENCES.forEach((exp, i) => {
      const div = document.createElement("div");
      div.className = "company " + exp.key + (i === current ? " activeExperience" : "");
      const h3 = document.createElement("h3");
      h3.textContent = exp.name;
      div.appendChild(h3);
      div.addEventListener("click", () => {
        current = i;
        render();
      });
      optionEl.appendChild(div);
    });

    const exp = EXPERIENCES[current];
    titleEl.textContent = exp.title[lang];
    dateEl.textContent = exp.date[lang];
    companyEl.textContent = exp.name;
    textEl.textContent = exp.text[lang];
  }

  window.addEventListener("languagechange", render);
  document.addEventListener("DOMContentLoaded", render);
})();
