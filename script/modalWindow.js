export function modalWindow() {
  // Маска для телефона
  let inp = document.querySelector(".phone");

  inp.addEventListener("input", function () {});
  // Отменяем ввод не цифр
  inp.addEventListener("keypress", (e) => {
    // if (!/\d/.test(e.key)) e.preventDefault();
  });
  let old = 0;
  // Для разграничения начала ввода с + или с 7,8,9
  let flag 
  inp.addEventListener("input", function () {
  
    this.value = this.value.replace(/[^0-9\" "\+]/g, '');

    if (inp.value[0] == "7") {
      inp.value = "+" + inp.value;
      flag = false
    } else if (inp.value[0] == "9") {
      inp.value = "+7 " + inp.value;
      flag = false
    } else if (inp.value[0] == "8") {
      inp.value = "";
      inp.value = " 8" + inp.value;
      flag = false
    }

    let inpValueLength = inp.value.length;
    if (inpValueLength < old) {
      old--;
      return;
    }
    if (inp.value[0] == "+") {
      inp.value = null;
      inp.value = ` +7 ` + inp.value;
      flag = true
    }
    if(flag === true){
      calc(3,7,11,14,17)
    }
    else{
      calc(2,6,10,13,16)
    }

    old++;
    function calc(one,two,tree,four,five){
      if (
        inpValueLength == one ||
        inpValueLength == two ||
        inpValueLength == tree ||
        inpValueLength == four
      )
        inp.value = inp.value + " ";

        if (inpValueLength > five)
          inp.value = inp.value.substring(0, inp.value.length - 1);
    }
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
      if (
        // inputGlaw[1].value.endsWith("@gmail.com") === true ||
        // inputGlaw[1].value.endsWith("@yandex.ru") === true ||
        // inputGlaw[1].value.endsWith("@yaho.com") === true ||
        inputGlaw[1].value.includes("@") === true
      ) {
        inputGlaw[1].classList.remove("input__decore");
      }
      if (inputGlaw[2].value === "") {
        inputGlaw[2].classList.add("input__decore");
      } else {
      }
      if (inputGlaw[2].value.length <= 15) {
        inputGlaw[2].classList.add("input__decore");
      } else {
        inp.classList.remove("input__decore");
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
      document.querySelector(".cookies").style.display = "none"
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
    arr = arr.join("");
    let bool = arr.includes("true");
    if (bool === false) {
      document.querySelector(".contact-form").style.display = "none";
      document.querySelector(".thank-you").style.display = "flex";
      document.querySelector(".contact-form__text-error").style.display =
        "none";
      inputForm.forEach((input) => (input.value = ""));
    } else {
      document.querySelector(".contact-form__text-error").style.display =
        "inline";
    }
  });
  document
    .querySelector(".thank-you__button")
    .addEventListener("click", function () {
      document.querySelector(".thank-you").style.display = "none";
    });
  // Кнопка закрытия формы благодарности
  document
    .querySelector(".thank-you__close")
    .addEventListener("click", function () {
      document.querySelector(".thank-you").style.display = "none";
    });
  // Кнопка закрытия формы
  document
    .querySelector(".contact-form__close")
    .addEventListener("click", function () {
      inputForm.forEach((input) => (input.value = ""));
      inputForm.forEach((input) => input.classList.remove("input__decore"));
      document.querySelector(".contact-form").style.display = "none";
      document.querySelector(".contact-form__text-error").style.display =
        "none";
    });
}
