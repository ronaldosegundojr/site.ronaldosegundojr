/* Formação - conteúdo bilíngue com alternador de abas */
(function () {
  const FORMATIONS = [
    {
      key: "cruzeiro",
      name: { pt: "Universidade Cruzeiro do Sul", en: "Universidade Cruzeiro do Sul" },
      title: {
        pt: "Bacharelado em Ciência da Computação",
        en: "Bachelor's Degree in Computer Science",
      },
      date: { pt: "2025 - 2028", en: "2025 - 2028" },
      text: {
        pt: "Bacharelado em Ciência da Computação focado no aprofundamento em engenharia de software, estruturas de dados, algoritmos, inteligência artificial e desenvolvimento de aplicações, complementando minha atuação prática com dados e web analytics.",
        en: "Bachelor's degree in Computer Science focused on deepening software engineering, data structures, algorithms, artificial intelligence and application development, complementing my hands-on experience with data and web analytics.",
      },
    },
    {
      key: "usp",
      name: { pt: "Universidade de São Paulo (USP)", en: "Universidade de São Paulo (USP)" },
      title: {
        pt: "Bacharelado em Estatística e Ciência de Dados (2020 - Atual) / Licenciatura em Ciências Exatas (2018 - 2020)",
        en: "Bachelor's Degree in Statistics and Data Science (2020 - Current) / Degree in Exact Sciences (2018 - 2020)",
      },
      date: { pt: "Mar 2020 - Atual", en: "Mar 2020 - Current" },
      text: {
        pt: "Minha jornada na USP começou em 2018, quando ingressei na Licenciatura em Ciências Exatas no IFSC (Instituto de Física de São Carlos). Estudei dois anos desse curso incrível, mas busquei novos horizontes e, em 2020, ingressei no Bacharelado em Estatística e Ciência de Dados no ICMC (Instituto de Ciências Matemáticas e de Computação).",
        en: "My journey at USP began in 2018, when I joined the Degree in Exact Sciences at IFSC (Instituto de Física de São Carlos). I studied two years of this wonderful course, but ended up looking for new horizons and, in 2020, I joined the Bachelor's Degree in Statistics and Data Science at ICMC (Institute of Mathematical and Computer Sciences).",
      },
    },
    {
      key: "icmc-pln",
      name: { pt: "ICMC USP", en: "ICMC USP" },
      title: {
        pt: "Python para Processamento de Linguagem Natural (NLP)",
        en: "Python for Introduction to Natural Language Processing (NLP)",
      },
      date: { pt: "Set 2021 - Set 2021", en: "Sep 2021 - Sep 2021" },
      text: {
        pt: "Curso focado em Processamento de Linguagem Natural (NLP) utilizando Python, com contato com técnicas de inteligência artificial aplicadas a textos.",
        en: "Course focused on Natural Language Processing (NLP) using Python, with contact with artificial intelligence techniques applied to text.",
      },
    },
    {
      key: "dio",
      name: { pt: "Digital Innovation One (DIO)", en: "Digital Innovation One (DIO)" },
      title: { pt: "Git e Github", en: "Git and Github" },
      date: { pt: "Jan 2022 - Jan 2022", en: "Jan 2022 - Jan 2022" },
      text: {
        pt: "Curso de introdução ao Git e Github, onde pude aprender sobre versionamento de código e a plataforma Github, onde hoje hospedo meus projetos.",
        en: "Short course aimed at introducing Git and Github, where I was able to learn about code versioning and the Github platform, where I now host my projects.",
      },
    },
  ];

  const optionEl = document.getElementById("formation-option");
  const titleEl = document.querySelector(".text-formation h4.titleFormation");
  const dateEl = document.querySelector(".text-formation p.dateFormation");
  const uniEl = document.querySelector(".text-formation h5.formationUniversity");
  const textEl = document.querySelector(".text-formation p.changeUniversity");

  let current = 0;

  function render() {
    const lang = window.I18N.current;

    optionEl.innerHTML = "";
    FORMATIONS.forEach((form, i) => {
      const div = document.createElement("div");
      div.className = "formation " + form.key + (i === current ? " activeExperience" : "");
      const h3 = document.createElement("h3");
      h3.textContent = form.name[lang];
      div.appendChild(h3);
      div.addEventListener("click", () => {
        current = i;
        render();
      });
      optionEl.appendChild(div);
    });

    const form = FORMATIONS[current];
    titleEl.textContent = form.title[lang];
    dateEl.textContent = form.date[lang];
    uniEl.textContent = form.name[lang];
    textEl.textContent = form.text[lang];
  }

  window.addEventListener("languagechange", render);
  document.addEventListener("DOMContentLoaded", render);
})();
