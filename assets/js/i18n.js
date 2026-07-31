/* Sistema de internacionalização (PT/EN) */
(function () {
  const dict = {
    nav_home: { pt: "Início", en: "Home" },
    nav_about: { pt: "Sobre mim", en: "About me" },
    nav_skills: { pt: "Habilidades", en: "Skills" },
    nav_formation: { pt: "Formação", en: "Education" },
    nav_experience: { pt: "Experiência", en: "Experience" },
    nav_projects: { pt: "Projetos", en: "Projects" },
    nav_services: { pt: "Serviços", en: "Services" },
    nav_contact: { pt: "Contato", en: "Contact" },

    home_title: {
      pt: "Especialista em Dados e Web Analytics com forte experiência em <span>Google Analytics 4, Google Tag Manager, BigQuery, Looker Studio, SQL e Python</span>.",
      en: "Data & Web Analytics Specialist with strong experience in <span>Google Analytics 4, Google Tag Manager, BigQuery, Looker Studio, SQL and Python</span>.",
    },
    home_text: {
      pt: "Trabalho com mensuração digital, coleta e governança de dados em grandes contas (Azul, Nespresso, Yamaha, Gerdau e Broto), além de desenvolvimento de software com JavaScript, React, Node e Docker. Possuo certificação Adobe em Real-Time CDP e experiência com Inteligência Artificial (Claude Code).",
      en: "I work with digital measurement, data collection and data governance on major accounts (Azul, Nespresso, Yamaha, Gerdau and Broto), as well as software development with JavaScript, React, Node and Docker. I am Adobe Real-Time CDP certified and experienced with Artificial Intelligence (Claude Code).",
    },
    home_cta: { pt: "Entre em contato", en: "Get in touch" },

    console_title: {
      pt: "Se quiser, você pode interagir com o console abaixo",
      en: "If you wish, you can interact with the console below",
    },
    console_placeholder: {
      pt: "Digite /help para ver os comandos",
      en: "Type /help to see the commands",
    },
    console_commands_title: {
      pt: "Comandos que podem ser usados no console acima:",
      en: "Commands you can use in the console above:",
    },
    console_cmd_help: {
      pt: "Para conhecer os comandos que podem ser usados no console.",
      en: "To know the commands that can be used in the console.",
    },
    console_cmd_linkedin: { pt: "Para descobrir meu Linkedin.", en: "To find out my Linkedin." },
    console_cmd_github: { pt: "Para conhecer meu Github.", en: "To know my Github." },
    console_cmd_skills: {
      pt: "Para descobrir minhas habilidades / linguagens de programação e ferramentas que conheço.",
      en: "To find out my programming skills / programming languages and tools that I know.",
    },
    console_cmd_coelho: {
      pt: "Para ver um gif de um coelho correndo, feito com a tabela ASCII, é uma referência ao filme Matrix de 1999.",
      en: "To see a gif of a running rabbit, made with the ASCII table, it's a reference to the 1999 film The Matrix.",
    },
    console_cmd_clear: { pt: "Para limpar o console.", en: "To clean the console." },

    about_label: { pt: "Quem sou eu", en: "Who am I" },
    about_role: { pt: "Data & Web Analytics Specialist", en: "Data & Web Analytics Specialist" },
    about_text: {
      pt: "Meu nome é Ronaldo A. Segundo Junior. Sou especialista em dados e web analytics, com forte atuação em coleta, governança e mensuração digital. Iniciei minha jornada em 2019 e, desde então, venho aprendendo e produzindo grandes resultados em projetos de grande porte no Brasil e no exterior.",
      en: "My name is Ronaldo A. Segundo Junior. I am a data and web analytics specialist, strongly focused on data collection, governance and digital measurement. I started my journey in 2019 and since then I have been learning and producing great results on large-scale projects in Brazil and abroad.",
    },
    about_skills: {
      pt: "Skills: GA4, GTM, BigQuery, Looker Studio, Adobe Analytics, SQL, Python, JavaScript, React, Node, Docker, Git, Expo, Inteligência Artificial.",
      en: "Skills: GA4, GTM, BigQuery, Looker Studio, Adobe Analytics, SQL, Python, JavaScript, React, Node, Docker, Git, Expo, Artificial Intelligence.",
    },

    skills_title: { pt: "Habilidades", en: "Skills" },
    skills_intro: {
      pt: "Ferramentas e tecnologias que utilizo no dia a dia, entre mensuração digital, desenvolvimento de software e inteligência artificial.",
      en: "Tools and technologies I use every day, across digital measurement, software development and artificial intelligence.",
    },

    formation_title: { pt: "Formação", en: "Education" },
    experience_title: { pt: "Experiência", en: "Experience" },
    projects_title: { pt: "Projetos", en: "Projects" },
    certifications_title: { pt: "Certificações", en: "Certifications" },
    services_title: { pt: "Serviços", en: "Services" },

    service_data_title: { pt: "Análise de Dados", en: "Data Analysis" },
    service_data_text: {
      pt: "Excelente capacidade de trabalhar com análise de dados, prontidão para atuar em projetos de diferentes escalas, de coleta a dashboards e insights.",
      en: "Excellent ability to work with data analysis, readiness to work on projects of different scales, from data collection to dashboards and insights.",
    },
    service_web_title: { pt: "Desenvolvimento Web", en: "Web Development" },
    service_web_text: {
      pt: "Desenvolvo sites profissionais, blogs, portfólios, landing pages e e-commerces com JavaScript, React, Node e Python.",
      en: "I develop professional websites, blogs, portfolios, landing pages and e-commerce using JavaScript, React, Node and Python.",
    },
    service_consultancy_title: { pt: "Consultoria", en: "Consultancy" },
    service_consultancy_text: {
      pt: "Consultoria de dados e TI para pequenas e médias empresas em mensuração digital (GA4/GTM), banco de dados, análise de dados e aplicações web.",
      en: "Data and IT consultancy for small and medium-sized companies in digital measurement (GA4/GTM), databases, data analysis and web applications.",
    },
    service_computer_title: { pt: "Montagem de Computadores", en: "Computer Assembly" },
    service_computer_text: {
      pt: "Comprou um computador novo e não sabe como montar? Seu computador está lento? Você já sabe, não é? Eu monto e cuido para você!",
      en: "Did you buy a new computer and don't know how to assemble it? Is your computer slow? You already know, right? I build and take care of it for you!",
    },

    contact_text: {
      pt: "Quer me conhecer melhor, fechar um freela ou alguma oportunidade profissional? Fale comigo pelo <a id=\"span-linkedin\" href=\"https://www.linkedin.com/in/r-segundojr\">LinkedIn</a>",
      en: "Do you want to get to know me better, arrange a freelance gig or some professional opportunity? Get in touch with <a id=\"span-linkedin\" href=\"https://www.linkedin.com/in/r-segundojr\">LinkedIn</a>",
    },

    footer_copyright: { pt: "Copyright © 2026", en: "Copyright © 2026" },
    footer_powered: { pt: "Feito por", en: "Powered by" },
  };

  const I18N = {
    current: "pt",
    dict,

    t(key) {
      const entry = this.dict[key];
      return entry ? entry[this.current] : "";
    },

    apply() {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (el.hasAttribute("data-i18n-html")) {
          el.innerHTML = this.t(key);
        } else {
          el.textContent = this.t(key);
        }
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        el.setAttribute("placeholder", this.t(key));
      });

      window.dispatchEvent(new CustomEvent("languagechange", { detail: this.current }));
    },

    setLang(lang) {
      this.current = lang === "en" ? "en" : "pt";
      document.documentElement.lang = this.current === "en" ? "en" : "pt-br";

      document.querySelectorAll(".translate-button").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === this.current);
      });

      this.apply();
    },

    init() {
      const saved = localStorage.getItem("lang");
      this.setLang(saved === "en" ? "en" : "pt");
    },
  };

  window.I18N = I18N;
})();
