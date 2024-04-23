export function headerScrool(){
    const options = {
        treshold: 0,
      };
      
      const everyone = document.querySelector(".section-everyone__inner");
      const header = document.querySelector(".header");
      const headerBottom = document.querySelector(".header__container");
      const mainMargin = document.querySelector(".cookies");
      const observer = new IntersectionObserver(callBack, options);
      observer.observe(header);
      function callBack(entries) {
        if (entries[0].isIntersecting === false) {
          headerBottom.classList.add("fix");
          everyone.classList.add("pt");
          mainMargin.classList.add("scrollCookieTop");
        } else {
          headerBottom.classList.remove("fix");
          everyone.classList.remove("pt");
          mainMargin.classList.remove("scrollCookieTop");
        }
      }
      document
        .querySelector(".header__burger")
        .addEventListener("click", function () {
          document.querySelector(".mobile-menu").style.display = "inline";
        });
      document
        .querySelector(".mobile-menu__img")
        .addEventListener("click", function () {
          document.querySelector(".mobile-menu").style.display = "none";
        });
      document
        .querySelector(".mobile-menu__button")
        .addEventListener("click", function () {
          document.querySelector(".mobile-menu").style.display = "none";
          document.querySelector(".contact-form").style.display = "block";
        });      
}