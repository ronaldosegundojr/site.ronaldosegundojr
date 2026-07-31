/* Conteúdo dinâmico: Habilidades, Projetos e Certificações (bilíngue) */
(function () {
  /* ------------------------------ SKILLS ------------------------------ */
  const SKILL_GROUPS = [
    {
      title: { pt: "Web Analytics & Dados", en: "Web Analytics & Data" },
      skills: [
        "GA4",
        "GTM",
        "BigQuery",
        "Looker Studio",
        "Adobe Analytics",
        "Tableau",
        "SQL",
        "Data Layer",
      ],
    },
    {
      title: { pt: "Linguagens & Frameworks", en: "Languages & Frameworks" },
      skills: [
        "Python",
        "JavaScript",
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "Expo",
        "Flask",
      ],
    },
    {
      title: { pt: "Infraestrutura & DevOps", en: "Infrastructure & DevOps" },
      skills: ["Docker", "Git", "GitHub", "Servidores", "Linux", "Cloud"],
    },
    {
      title: {
        pt: "Inteligência Artificial & Automação",
        en: "Artificial Intelligence & Automation",
      },
      skills: ["IA / LLMs", "Claude Code", "Automação", "Web Scraping"],
    },
  ];

  function renderSkills() {
    const container = document.getElementById("skills-cards");
    if (!container) return;
    const lang = window.I18N.current;

    container.innerHTML = "";
    SKILL_GROUPS.forEach((group) => {
      const article = document.createElement("article");
      article.className = "skill-group intervalCardReveal";

      const h3 = document.createElement("h3");
      h3.textContent = group.title[lang];
      article.appendChild(h3);

      const chips = document.createElement("div");
      chips.className = "skill-chips";
      group.skills.forEach((skill) => {
        const span = document.createElement("span");
        span.className = "skill-chip";
        span.textContent = skill;
        chips.appendChild(span);
      });
      article.appendChild(chips);
      container.appendChild(article);
    });
  }

  /* ------------------------------ PROJETOS ---------------------------- */
  const PROJECTS = [
    {
      title: { pt: "Gerdau", en: "Gerdau" },
      tag: { pt: "Mensuração Digital", en: "Digital Measurement" },
      text: {
        pt: "Estruturação, manutenção e evolução da mensuração das propriedades digitais com foco em coleta de dados. Criação e validação de tags, tagging plan e governança com GA4 e GTM.",
        en: "Structuring, maintaining and evolving the measurement of digital properties focused on data collection. Tag creation and validation, tagging plan and governance with GA4 and GTM.",
      },
      link: null,
      repo: null,
      tools: ["GA4", "GTM", "Data Layer"],
    },
    {
      title: { pt: "Broto (Agronegócio)", en: "Broto (Agribusiness)" },
      tag: { pt: "Data Lead", en: "Data Lead" },
      text: {
        pt: "Liderança das iniciativas de Web Analytics: novas estratégias de tagueamento, correção de bugs, auditorias completas com GA4 e GTM e orientação técnica de analistas.",
        en: "Leading Web Analytics initiatives: new tagging strategies, bug fixing, complete audits with GA4 and GTM, and technical mentoring of analysts.",
      },
      link: null,
      repo: null,
      tools: ["GA4", "GTM", "SQL", "Looker Studio"],
    },
    {
      title: { pt: "Azul Linhas Aéreas", en: "Azul Airlines" },
      tag: { pt: "Adobe Analytics", en: "Adobe Analytics" },
      text: {
        pt: "Análise de dados e geração de insights estratégicos com Adobe Analytics, criação de relatórios personalizados, mapas de calor e apresentações executivas.",
        en: "Data analysis and strategic insights generation with Adobe Analytics, creation of custom reports, heatmaps and executive presentations.",
      },
      link: null,
      repo: null,
      tools: ["Adobe Analytics", "Excel", "Google Slides"],
    },
    {
      title: { pt: "Yamaha (EUA/Japão)", en: "Yamaha (USA/Japan)" },
      tag: { pt: "Projeto Internacional", en: "International Project" },
      text: {
        pt: "Arquitetura de tracking com GA4 e GTM, modelagem de dados com SQL e BigQuery, dashboards em Tableau e automação de processos em Python em projeto internacional.",
        en: "Tracking architecture with GA4 and GTM, data modeling with SQL and BigQuery, Tableau dashboards and Python process automation in an international project.",
      },
      link: null,
      repo: null,
      tools: ["GA4", "GTM", "BigQuery", "SQL", "Tableau", "Python"],
    },
    {
      title: { pt: "Nespresso", en: "Nespresso" },
      tag: { pt: "Web Analytics", en: "Web Analytics" },
      text: {
        pt: "Coleta, validação e análise de dados digitais com GA4 e GTM, auditorias de tags, acompanhamento do data layer e dashboards em Looker Studio.",
        en: "Digital data collection, validation and analysis with GA4 and GTM, tag audits, data layer monitoring and Looker Studio dashboards.",
      },
      link: null,
      repo: null,
      tools: ["GA4", "GTM", "Looker Studio", "Data Layer"],
    },
    {
      title: { pt: "YugiDex", en: "YugiDex" },
      tag: { pt: "Frontend · API", en: "Frontend · API" },
      text: {
        pt: "Banco de dados de cartas de Yu-Gi-Oh! que consome uma API em JSON para buscar cartas, criar e organizar decks com drag & drop. Inclui reconhecimento de cartas por OCR (tesseract.js).",
        en: "Yu-Gi-Oh! card database that consumes a JSON API to search cards and create/organize decks with drag & drop. Includes card recognition by OCR (tesseract.js).",
      },
      link: "https://yugidex.vercel.app/",
      repo: "https://github.com/ronaldosegundojr/yugidex",
      tools: ["React", "Vite", "React Router", "dnd-kit", "Tesseract.js", "REST API"],
    },
    {
      title: { pt: "NostalgiaBR 2000", en: "NostalgiaBR 2000" },
      tag: { pt: "Frontend · Retrô", en: "Frontend · Retro" },
      text: {
        pt: "Máquina do tempo nostálgica que simula o Windows XP no navegador, com área de trabalho, MSN Messenger, Winamp, som de inicialização e apps clássicos.",
        en: "A nostalgic time machine that simulates Windows XP in the browser, with desktop, MSN Messenger, Winamp, startup sound and classic apps.",
      },
      link: "https://nostalgiabr2000.vercel.app/",
      repo: "https://github.com/ronaldosegundojr/nostalgiabr2000",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: { pt: "Perfumaria Golden", en: "Perfumaria Golden" },
      tag: { pt: "E-commerce · Freelance", en: "E-commerce · Freelance" },
      text: {
        pt: "Loja de perfumaria com catálogo de produtos e checkout via WhatsApp, interface responsiva e foco em conversão.",
        en: "Perfume store with product catalog and WhatsApp checkout, responsive interface and conversion focus.",
      },
      link: "https://perfumariagolden.vercel.app/",
      repo: null,
      tools: ["React", "Vite", "JavaScript", "WhatsApp API"],
    },
    {
      title: { pt: "Orkut Clone (Tukro)", en: "Orkut Clone (Tukro)" },
      tag: { pt: "Fullstack", en: "Fullstack" },
      text: {
        pt: "Clone moderno do Orkut com login, perfis, amizades e recados. Backend próprio com autenticação JWT e banco de dados.",
        en: "Modern Orkut clone with login, profiles, friendships and scraps. Custom backend with JWT authentication and database.",
      },
      link: "https://orkut-clone-eta.vercel.app/login",
      repo: "https://github.com/ronaldosegundojr/orkut-clone",
      tools: ["React", "React Router", "Node.js", "Express", "SQLite", "JWT"],
    },
    {
      title: { pt: "Site Corretor de Imóveis", en: "Real Estate Agent Site" },
      tag: { pt: "Fullstack", en: "Fullstack" },
      text: {
        pt: "Site institucional para corretor(a) de imóveis de alto padrão, com listagem de imóveis, área de login e painel de administração.",
        en: "Institutional website for a luxury real estate agent, with property listings, login area and admin panel.",
      },
      link: "https://site-corretor-imoveis.vercel.app/",
      repo: "https://github.com/ronaldosegundojr/site-corretor-imoveis",
      tools: ["React", "TypeScript", "Node.js", "Express", "SQLite", "JWT"],
    },
    {
      title: { pt: "Ficha de RPG Interativa", en: "Interactive RPG Sheet" },
      tag: { pt: "Frontend", en: "Frontend" },
      text: {
        pt: "Ficha de personagem de RPG interativa para criar e gerenciar personagens, atributos, habilidades e inventário em tempo real.",
        en: "Interactive RPG character sheet to create and manage characters, attributes, skills and inventory in real time.",
      },
      link: "https://ficharpg-nine.vercel.app/",
      repo: "https://github.com/ronaldosegundojr/Ficha-de-Personagem-de-RPG-Interativa",
      tools: ["React", "Vite", "TypeScript"],
    },
    {
      title: { pt: "Projeto Freelancer", en: "Freelance Project" },
      tag: { pt: "Freelance", en: "Freelance" },
      text: {
        pt: "Projeto web desenvolvido como freelancer, com React e interface responsiva voltada para o cliente final.",
        en: "Web project developed as a freelancer, with React and a responsive interface focused on the end client.",
      },
      link: "https://projeto-freelancer-one.vercel.app/",
      repo: null,
      tools: ["React", "JavaScript", "CSS"],
    },
    {
      title: { pt: "E-commerce", en: "E-commerce" },
      tag: { pt: "Fullstack", en: "Fullstack" },
      text: {
        pt: "E-commerce completo em HTML, CSS, JavaScript, Python, Flask e MySQL com phpMyAdmin.",
        en: "Full e-commerce built with HTML, CSS, JavaScript, Python, Flask and MySQL using phpMyAdmin.",
      },
      link: "https://github.com/ronaldosegundojr/e_commerce_generico",
      repo: "https://github.com/ronaldosegundojr/e_commerce_generico",
      tools: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"],
    },
    {
      title: { pt: "Gamer Store", en: "Gamer Store" },
      tag: { pt: "Fullstack", en: "Fullstack" },
      text: {
        pt: "Projeto de e-commerce completo construído durante curso da Cod3r.",
        en: "Full e-commerce project built during the Cod3r course.",
      },
      link: "https://github.com/ronaldosegundojr/projeto_cod3r_ecommerce",
      repo: "https://github.com/ronaldosegundojr/projeto_cod3r_ecommerce",
      tools: ["HTML", "CSS", "JavaScript", "Vue.js", "Node.js"],
    },
    {
      title: { pt: "Gestão de Containers", en: "Container Management" },
      tag: { pt: "Fullstack", en: "Fullstack" },
      text: {
        pt: "Sistema web de gestão de containers em HTML, CSS, JavaScript, Python, Flask e MySQL.",
        en: "Container management web system built with HTML, CSS, JavaScript, Python, Flask and MySQL.",
      },
      link: "https://github.com/ronaldosegundojr/container",
      repo: "https://github.com/ronaldosegundojr/container",
      tools: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"],
    },
    {
      title: { pt: "Docker OS", en: "Docker OS" },
      tag: { pt: "DevOps", en: "DevOps" },
      text: {
        pt: "Experimentos com virtualização de sistemas operacionais (Mac OS e Windows) em Docker.",
        en: "Experiments with operating system virtualization (Mac OS and Windows) using Docker.",
      },
      link: "https://github.com/ronaldosegundojr/Docker-OSX",
      repo: "https://github.com/ronaldosegundojr/Docker-OSX",
      tools: ["Docker", "macOS", "Windows"],
    },
  ];

  function renderProjects() {
    const container = document.getElementById("projects");
    if (!container) return;
    const lang = window.I18N.current;

    container.innerHTML = "";
    PROJECTS.forEach((project) => {
      const article = document.createElement("article");
      article.className = "intervalCardReveal project-card";

      const h3 = document.createElement("h3");
      h3.textContent = project.title[lang];
      article.appendChild(h3);

      const tag = document.createElement("p");
      tag.className = "project-tag";
      tag.textContent = project.tag[lang];
      article.appendChild(tag);

      const text = document.createElement("p");
      text.textContent = project.text[lang];
      article.appendChild(text);

      if (project.tools && project.tools.length) {
        const tools = document.createElement("div");
        tools.className = "project-tools";
        project.tools.forEach((tool) => {
          const span = document.createElement("span");
          span.className = "tool-chip";
          span.textContent = tool;
          tools.appendChild(span);
        });
        article.appendChild(tools);
      }

      if (project.link || project.repo) {
        const links = document.createElement("div");
        links.className = "project-links";
        if (project.link) {
          const a = document.createElement("a");
          a.href = project.link;
          a.rel = "noopener";
          a.target = "_blank";
          a.textContent = lang === "pt" ? "Ver projeto" : "View project";
          links.appendChild(a);
        }
        if (project.repo) {
          const a = document.createElement("a");
          a.href = project.repo;
          a.rel = "noopener";
          a.target = "_blank";
          a.textContent = lang === "pt" ? "Repositório" : "Repository";
          links.appendChild(a);
        }
        article.appendChild(links);
      }

      container.appendChild(article);
    });
  }

  /* --------------------------- CERTIFICAÇÕES --------------------------- */
  const CERTIFICATIONS = [
    {
      title: {
        pt: "Adobe Certified Professional - Adobe Real-Time CDP Business Practitioner",
        en: "Adobe Certified Professional - Adobe Real-Time CDP Business Practitioner",
      },
      org: "Adobe",
      date: { pt: "Mar 2025", en: "Mar 2025" },
      link: "https://certification.adobe.com/credential/verify/e13c7d19-0ba6-11f0-9883-42010a40002a",
    },
    {
      title: {
        pt: "Adobe Customer Journey Analytics: Sales Accreditation",
        en: "Adobe Customer Journey Analytics: Sales Accreditation",
      },
      org: "Adobe",
      date: { pt: "Out 2025", en: "Oct 2025" },
      link: null,
    },
    {
      title: {
        pt: "Adobe Real Time Customer Data Platform: Adobe Accreditation",
        en: "Adobe Real Time Customer Data Platform: Adobe Accreditation",
      },
      org: "Adobe",
      date: { pt: "Out 2025", en: "Oct 2025" },
      link: null,
    },
    {
      title: {
        pt: "Python para Processamento de Linguagem Natural (ICMC - USP)",
        en: "Python for Natural Language Processing (ICMC - USP)",
      },
      org: "Universidade de São Paulo",
      date: { pt: "Dez 2021", en: "Dec 2021" },
      link: null,
    },
    {
      title: { pt: "Introdução ao Git e Github", en: "Introduction to Git and Github" },
      org: "Digital Innovation One",
      date: { pt: "Jan 2022", en: "Jan 2022" },
      link: "https://github.com/ronaldosegundojr/Certificados/blob/main/Certificado%20DIO%20-%20Git%20e%20Github.pdf",
    },
    {
      title: {
        pt: "Linux: Introdução ao Sistema Operacional e Terminal",
        en: "Linux: Introduction to the Operating System and Terminal",
      },
      org: "Digital Innovation One",
      date: { pt: "Jan 2022", en: "Jan 2022" },
      link: "https://github.com/ronaldosegundojr/Certificados/blob/main/Certificado%20Linux%20-%20Introdu%C3%A7%C3%A3o%20ao%20Sistema%20Operacional.pdf",
    },
    {
      title: { pt: "Lógica de Programação", en: "Programming Logic" },
      org: "Digital Innovation One",
      date: { pt: "Jan 2022", en: "Jan 2022" },
      link: "https://github.com/ronaldosegundojr/Certificados/blob/main/Certificado%20DIO%20-%20Logica%20de%20Programa%C3%A7ao%2007012022.pdf",
    },
    {
      title: { pt: "Python Básico", en: "Basic Python" },
      org: "NerdIn",
      date: { pt: "Out 2021", en: "Oct 2021" },
      link: "https://github.com/ronaldosegundojr/Certificados/blob/main/Certificado%20Python%20-%20Nerdin%20-%2014-10-2021.pdf",
    },
  ];

  function renderCertifications() {
    const container = document.getElementById("certifications");
    if (!container) return;
    const lang = window.I18N.current;

    container.innerHTML = "";
    CERTIFICATIONS.forEach((cert) => {
      const article = document.createElement("article");
      article.className = "intervalCardReveal";

      const h3 = document.createElement("h3");
      h3.textContent = cert.title[lang];
      article.appendChild(h3);

      const org = document.createElement("p");
      org.className = "cert-org";
      org.textContent = cert.org + " · " + cert.date[lang];
      article.appendChild(org);

      if (cert.link) {
        const a = document.createElement("a");
        a.href = cert.link;
        a.rel = "noopener";
        a.target = "_blank";
        a.textContent = lang === "pt" ? "Ver credencial" : "See credential";
        article.appendChild(a);
      }

      container.appendChild(article);
    });
  }

  function renderAll() {
    renderSkills();
    renderProjects();
    renderCertifications();
  }

  window.addEventListener("languagechange", renderAll);
  document.addEventListener("DOMContentLoaded", renderAll);
})();
