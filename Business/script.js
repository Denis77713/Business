// Куки
const cookiesClose = document.querySelector(".cookies__close");
const cookiesBtn = document.querySelectorAll(".cookies__button");
const cookies = document.querySelector(".cookies");
// Поля modal
const modal = document.querySelectorAll(".button-modal");
// Появление кук
setTimeout(function () {
  cookies.style.display = "flex";
}, 1000);
// Клик по кукам
cookiesBtn.forEach((btn) => btn.addEventListener("click", displayNoneCookies));
cookiesClose.addEventListener("click", displayNoneCookies);

// Функция удаления сообщения о куках
function displayNoneCookies() {
  cookies.style.display = "none";
}
// modal
modal.forEach((button) =>
  button.addEventListener("click", function () {
    console.log(123);
  })
);
// Маска для телефона
let inp = document.querySelector(".phone");

inp.addEventListener("input", function () {});
// Отменяем ввод не цифр
inp.addEventListener("keypress", (e) => {
  if (!/\d/.test(e.key)) e.preventDefault();
});
let old = 0;
inp.addEventListener("input", function () {
  if (inp.value[0] == "7") {
    inp.value = "+" + inp.value;
  } else if (inp.value[0] == "9") {
    inp.value = "+7 " + inp.value;
  } else if (inp.value[0] == "8") {
    inp.value = "";
    inp.value = " 8" + inp.value;
  }
  let inpValueLength = inp.value.length;
  if (inpValueLength < old) {
    old--;
    return;
  }

  if (
    inpValueLength == 2 ||
    inpValueLength == 6 ||
    inpValueLength == 10 ||
    inpValueLength == 13
  )
    inp.value = inp.value + " ";
  if (inpValueLength > 16)
    inp.value = inp.value.substring(0, inp.value.length - 1);

  old++;
});
const inputForm = document.querySelectorAll(".contact-form__input");
// Проверка заполнено ли хоть одно поле ввода, если да, кнопка активна
const contactFormButtin = document.querySelector(".contact-form__button");
inputForm.forEach((input) =>
  input.addEventListener("input", function () {
    if (input.value != "") {
      contactFormButtin.classList.add("button_background");
      contactFormButtin.classList.remove("btn-disable");
      contactFormButtin.removeAttribute("disabled");
    }
  })
);
// Проверка главных полей
const inputGlaw = document.querySelectorAll(".input-glaw");
inputForm.forEach((input) =>
  input.addEventListener("change", function (e) {
    e.preventDefault();
    if (inputGlaw[0].value === "") {
      inputGlaw[0].classList.add("input__decore");
    } else {
      inputGlaw[0].classList.remove("input__decore");
    }
    inputGlaw[1].classList.add("input__decore");
    if (inputGlaw[1].value === "") {
      inputGlaw[1].classList.add("input__decore");
    } else {
      inputGlaw[1].classList.remove("input__decore");
    }
    if (inputGlaw[2].value === "") {
      inputGlaw[2].classList.add("input__decore");
    } else {
      inputGlaw[2].classList.remove("input__decore");
    }
  })
);
// Имя
inputGlaw[0].addEventListener("change", function () {
  let str = inputGlaw[0].value;
  str = str.split("");
  str[0] = str[0].toLocaleUpperCase();
  str = str.join("");
  inputGlaw[0].value = str;
});
document.querySelectorAll("#btn").forEach((button) =>
  button.addEventListener("click", function () {
    document.querySelector(".contact-form").style.display = "block";
  })
);
// Кнопка. проверяю есть ли у полей класс input__decore, если да появляется поле благодарности и скрывается форма
const formButton = document.querySelector(".contact-form__button");
formButton.addEventListener("click", function (e) {
  e.preventDefault();
  let arr = [];
  inputGlaw.forEach((input) =>
    arr.push(input.classList.contains("input__decore"))
  );
  console.log(arr);
  arr = arr.join("");
  let bool = arr.includes("true");
  if (bool === false) {
    console.log("qwe");
    document.querySelector(".contact-form").style.display = "none";
    document.querySelector(".thank-you").style.display = "flex";
    document.querySelector(".contact-form__text-error").style.display = "none";
    inputForm.forEach(input=>input.value = "")
  }else{
    document.querySelector(".contact-form__text-error").style.display = "inline";
  }
  console.log(bool);
});
document.querySelector(".thank-you__button").addEventListener("click",function(){
  document.querySelector(".thank-you").style.display = "none";
})
document.querySelector(".thank-you__close").addEventListener("click",function(){
  document.querySelector(".thank-you").style.display = "none";
})
document
  .querySelector(".contact-form__close")
  .addEventListener("click", function () {
    inputForm.forEach(input=>input.value = "")
    inputForm.forEach(input=>input.classList.remove("input__decore"))
    document.querySelector(".contact-form").style.display = "none";
    document.querySelector(".contact-form__text-error").style.display = "none";
  });
const options = {
  treshold: 0,
};

const everyone = document.querySelector(".section-everyone__inner")
const header = document.querySelector(".header")
const headerBottom = document.querySelector(".header__container")
const observer = new IntersectionObserver(callBack, options);
observer.observe(header);
function callBack(entries) {
  if(entries[0].isIntersecting === false){
    headerBottom.classList.add("fix")
    everyone.classList.add("pt")
  }else{
    headerBottom.classList.remove("fix")
    everyone.classList.remove("pt")
  }
}
document.querySelector(".header__burger").addEventListener("click",function(){
  document.querySelector(".mobile-menu").style.display = "inline"
})
document.querySelector(".mobile-menu__img").addEventListener("click",function(){
  document.querySelector(".mobile-menu").style.display = "none"
})
document.querySelector(".mobile-menu__button").addEventListener("click",function(){
  document.querySelector(".mobile-menu").style.display = "none"
  document.querySelector(".contact-form").style.display = "block";
})
