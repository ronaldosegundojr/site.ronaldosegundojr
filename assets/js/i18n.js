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
      pt: "Desenvolvedor com forte experiência em <span>web (frontend e backend), servidores e homelab</span>, além de mensuração digital com <span>GA4, GTM, BigQuery, Looker Studio, SQL e Python</span>.",
      en: "Developer with strong experience in <span>web (frontend and backend), servers and homelab</span>, plus digital measurement with <span>GA4, GTM, BigQuery, Looker Studio, SQL and Python</span>.",
    },
    home_text: {
      pt: "Minha maior experiência está no desenvolvimento de software: frontend e backend com JavaScript, React, Node e Python, além de administração de servidores e homelab (Casa OS). Também tenho forte atuação em mensuração digital, coleta e governança de dados em grandes contas (Azul, Nespresso, Yamaha, Gerdau e Broto), certificação Adobe em Real-Time CDP e experiência com Inteligência Artificial (Claude Code). Tenho ainda conhecimento empírico em desenvolvimento de jogos com Godot e Unreal Engine.",
      en: "My biggest experience is in software development: frontend and backend with JavaScript, React, Node and Python, plus server administration and homelab (Casa OS). I also have strong experience in digital measurement, data collection and governance on major accounts (Azul, Nespresso, Yamaha, Gerdau and Broto), Adobe Real-Time CDP certification and experience with Artificial Intelligence (Claude Code). I also have hands-on knowledge of game development with Godot and Unreal Engine.",
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
    about_role: { pt: "Desenvolvedor & Especialista em Dados", en: "Developer & Data Specialist" },
    about_text: {
      pt: "Meu nome é Ronaldo A. Segundo Junior. Sou desenvolvedor e especialista em dados, com maior experiência em desenvolvimento web (frontend e backend), administração de servidores e homelab (Casa OS), além de conhecimento empírico em desenvolvimento de jogos com Godot e Unreal Engine. Também atuo fortemente com coleta, governança e mensuração digital, tendo conduzido projetos de grande porte no Brasil e no exterior. Iniciei minha jornada em 2019 e, desde então, venho aprendendo e produzindo grandes resultados.",
      en: "My name is Ronaldo A. Segundo Junior. I am a developer and data specialist, with my main experience in web development (frontend and backend), server administration and homelab (Casa OS), plus hands-on knowledge of game development with Godot and Unreal Engine. I also work strongly with data collection, governance and digital measurement, having led large-scale projects in Brazil and abroad. I started my journey in 2019 and since then I have been learning and producing great results.",
    },
    about_skills: {
      pt: "Skills: JavaScript, React, Node, Python, HTML, CSS, Docker, Git, Expo, GA4, GTM, BigQuery, Looker Studio, SQL, Servidores (Casa OS), Godot, Unreal Engine, Inteligência Artificial.",
      en: "Skills: JavaScript, React, Node, Python, HTML, CSS, Docker, Git, Expo, GA4, GTM, BigQuery, Looker Studio, SQL, Servers (Casa OS), Godot, Unreal Engine, Artificial Intelligence.",
    },

    skills_title: { pt: "Habilidades", en: "Skills" },
    skills_intro: {
      pt: "Ferramentas e tecnologias que utilizo no dia a dia, entre desenvolvimento de software, servidores e homelab, mensuração digital, desenvolvimento de jogos e inteligência artificial.",
      en: "Tools and technologies I use every day, across software development, servers and homelab, digital measurement, game development and artificial intelligence.",
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
