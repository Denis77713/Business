export function cookies() {
  // Куки
  const cookiesClose = document.querySelector(".cookies__close");
  const cookiesBtn = document.querySelectorAll(".cookies__button");
  const cookies = document.querySelector(".cookies");
  const modal = document.querySelector(".contact-form")
  // Появление кук
  setTimeout(function () {
    if(modal.style.display ==="block"){
      cookies.style.display = "none";
    }else{
      cookies.style.display = "flex";
    }
  }, 1000);
  // Клик по кукам
  cookiesBtn.forEach((btn) =>
    btn.addEventListener("click", displayNoneCookies)
  );
  cookiesClose.addEventListener("click", displayNoneCookies);

  // Функция удаления сообщения о куках
  function displayNoneCookies() {
    cookies.style.display = "none";
  }
}
