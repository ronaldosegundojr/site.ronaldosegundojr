/* Script principal: menu mobile, alternador de idioma e animações de scroll */
document.addEventListener("DOMContentLoaded", function () {
  /* Alternador de idioma */
  document.querySelectorAll(".translate-button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (window.I18N) {
        window.I18N.setLang(this.dataset.lang);
      }
    });
  });

  /* Inicializa o idioma salvo */
  if (window.I18N) {
    window.I18N.init();
  }

  /* Menu mobile */
  const mobileMenu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");

  if (mobileMenu && navList) {
    mobileMenu.addEventListener("click", function () {
      navList.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-list a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("active");
        mobileMenu.classList.remove("active");
      });
    });
  }

  /* Scroll reveal simples via IntersectionObserver */
  const revealElements = document.querySelectorAll(
    ".delaySmallReveal, .delayMediumReveal, .delayLargeReveal, .delayExtraBigReveal, .intervalCardReveal"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("revealed");
    });
  }
});
