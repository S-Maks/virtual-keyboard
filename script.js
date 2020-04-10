const first__Line = [
  {
    ENGlanguage: "`",
    RUSlanguage: "ё",
    upperCase: "~",
  },
  {
    ENGlanguage: 1,
    RUSlanguage: 1,
    upperCase: "!",
  },
  { ENGlanguage: 2, RUSlanguage: 2, upperCase: "@" },
  { ENGlanguage: 3, RUSlanguage: 3, upperCase: "#" },
  { ENGlanguage: 4, RUSlanguage: 4, upperCase: "$" },
  { ENGlanguage: 5, RUSlanguage: 5, upperCase: "%" },
  { ENGlanguage: 6, RUSlanguage: 6, upperCase: "^" },
  { ENGlanguage: 7, RUSlanguage: 7, upperCase: "&" },
  { ENGlanguage: 8, RUSlanguage: 8, upperCase: "*" },
  { ENGlanguage: 9, RUSlanguage: 9, upperCase: "(" },
  { ENGlanguage: 0, RUSlanguage: 0, upperCase: ")" },
  { ENGlanguage: "-", RUSlanguage: "-", upperCase: "_" },
  { ENGlanguage: "=", RUSlanguage: "=", upperCase: "+" },
  {
    ENGlanguage: "Backspace",
    RUSlanguage: "Backspace",
    functionButton: "Backspace",
  },
];

const second__Line = [
  { ENGlanguage: "Tab", RUSlanguage: "Tab", functionButton: "Tab" },
  { ENGlanguage: "q", RUSlanguage: "й" },
  { ENGlanguage: "w", RUSlanguage: "ц" },
  { ENGlanguage: "e", RUSlanguage: "у" },
  { ENGlanguage: "r", RUSlanguage: "к" },
  { ENGlanguage: "t", RUSlanguage: "е" },
  { ENGlanguage: "y", RUSlanguage: "н" },
  { ENGlanguage: "u", RUSlanguage: "г" },
  { ENGlanguage: "i", RUSlanguage: "ш" },
  { ENGlanguage: "o", RUSlanguage: "щ" },
  { ENGlanguage: "p", RUSlanguage: "з" },
  { ENGlanguage: "[", RUSlanguage: "х", upperCase: "{" },
  { ENGlanguage: "]", RUSlanguage: "ъ", upperCase: "}" },
  { ENGlanguage: "::", RUSlanguage: "::", upperCase: "::" },
  { ENGlanguage: "Delete", RUSlanguage: "Delete", functionButton: "Delete" },
];

const third___Line = [
  {
    ENGlanguage: "CapsLock",
    RUSlanguage: "CapsLock",
    functionButton: "CapsLock",
  },
  { ENGlanguage: "a", RUSlanguage: "ф" },
  { ENGlanguage: "s", RUSlanguage: "ы" },
  { ENGlanguage: "d", RUSlanguage: "в" },
  { ENGlanguage: "f", RUSlanguage: "а" },
  { ENGlanguage: "g", RUSlanguage: "п" },
  { ENGlanguage: "h", RUSlanguage: "р" },
  { ENGlanguage: "j", RUSlanguage: "о" },
  { ENGlanguage: "k", RUSlanguage: "л" },
  { ENGlanguage: "l", RUSlanguage: "д" },
  { ENGlanguage: ";", RUSlanguage: "ж", upperCase: ":" },
  { ENGlanguage: "'", RUSlanguage: "э", upperCase: '"' },
  { ENGlanguage: "Enter", RUSlanguage: "Enter", functionButton: "Enter" },
];

const fourth___Line = [
  {
    ENGlanguage: "Shift",
    RUSlanguage: "Shift",
    functionButton: "ShiftLeft",
  },
  { ENGlanguage: "\\", RUSlanguage: "\\" },
  { ENGlanguage: "z", RUSlanguage: "я" },
  { ENGlanguage: "x", RUSlanguage: "ч" },
  { ENGlanguage: "c", RUSlanguage: "с" },
  { ENGlanguage: "v", RUSlanguage: "м" },
  { ENGlanguage: "b", RUSlanguage: "и" },
  { ENGlanguage: "n", RUSlanguage: "т" },
  { ENGlanguage: "m", RUSlanguage: "ь" },
  { ENGlanguage: ",", RUSlanguage: "б", upperCase: "<" },
  { ENGlanguage: ".", RUSlanguage: "ю", upperCase: ">" },
  { ENGlanguage: "/", RUSlanguage: "/", upperCase: "?" },
  { ENGlanguage: "↓", RUSlanguage: "↓", functionButton: "ArrowUp" },
  {
    ENGlanguage: "Shift",
    RUSlanguage: "Shift",
    functionButton: "ShiftRight",
  },
];

const fifth___Line = [
  { ENGlanguage: "Ctrl", RUSlanguage: "Ctrl", functionButton: "CtrlLeft" },
  { ENGlanguage: "Win", RUSlanguage: "Win", functionButton: "MetaLeft" },
  { ENGlanguage: "Alt", RUSlanguage: "Alt", functionButton: "AltLeft" },
  { ENGlanguage: " ", RUSlanguage: " ", functionButton: "Space" },
  { ENGlanguage: "Alt", RUSlanguage: "Alt", functionButton: "AltRight" },
  { ENGlanguage: "Ctrl", RUSlanguage: "Ctrl", functionButton: "CtrlRight" },
  { ENGlanguage: "↓", RUSlanguage: "↓", functionButton: "ArrowLeft" },
  { ENGlanguage: "↓", RUSlanguage: "↓", functionButton: "ArrowDown" },
  { ENGlanguage: "↓", RUSlanguage: "↓", functionButton: "ArrowRight" },
];

let Language = localStorage.getItem("lang");
let CapsLock = false;
let Shift = false;

window.onload = () => {
  write__board();
  const textareaDOM = document.querySelector("textarea");
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn")) {
      writeSybmol(event, textareaDOM);
    }
  });
  document.addEventListener("keydown", (event) => {
    if ((event.shiftKey && event.altKey) || (event.ctrlKey && event.altKey)) {
      choiсeLanguage();
    }
  });
  document.addEventListener("keyup", (event) => {
    if (event.code == "CapsLock") {
      CapsLock = choiceCapsLock(CapsLock);
    } else if (event.code == "Shift") {
      Shift = choiceShiftChanger(Shift);
    }
    if (Shift) {
      for (let i = 0; i < first__Line.length; i++) {
        if (
          first__Line[i].ENGlanguage === event.key.toLowerCase() ||
          first__Line[i].RUSlanguage === event.key.toLowerCase() ||
          first__Line[i].functionButton === event.code
        ) {
          if (first__Line[i].upperCase) {
            writeKey(first__Line[i].upperCase, textareaDOM);
          } else if (Language == "ENG") {
            writeKey(first__Line[i].ENGlanguage, textareaDOM);
          } else {
            writeKey(first__Line[i].RUSlanguage, textareaDOM);
          }
          break;
        }
        if (
          first__Line[i].RUSlanguage === Number(event.key.toLowerCase()) ||
          Number(first__Line[i].ENGlanguage === event.key.toLowerCase()) ||
          first__Line[i].functionButton === event.code
        ) {
          if (event.key != " ") {
            if (first__Line[i].upperCase) {
              writeKey(first__Line[i].upperCase, textareaDOM);
            } else if (Language == "ENG") {
              writeKey(first__Line[i].ENGlanguage, textareaDOM);
            } else {
              writeKey(first__Line[i].RUSlanguage, textareaDOM);
            }
            break;
          }
        }
      }
    } else
      for (let i = 0; i < first__Line.length; i++) {
        if (
          first__Line[i].ENGlanguage === event.key.toLowerCase() ||
          first__Line[i].RUSlanguage === event.key.toLowerCase() ||
          first__Line[i].functionButton === event.code
        ) {
          if (Language == "ENG") {
            writeKey(first__Line[i].ENGlanguage, textareaDOM);
          } else {
            writeKey(first__Line[i].RUSlanguage, textareaDOM);
          }
          break;
        }
        if (
          Number(first__Line[i].ENGlanguage === event.key.toLowerCase()) ||
          first__Line[i].RUSlanguage === Number(event.key.toLowerCase()) ||
          first__Line[i].functionButton === event.code
        ) {
          if (event.key != " ") {
            if (Language == "ENG") {
              writeKey(first__Line[i].ENGlanguage, textareaDOM);
            } else {
              writeKey(first__Line[i].RUSlanguage, textareaDOM);
            }
            break;
          }
        }
      }
    if (Shift) {
      for (let i = 0; i < second__Line.length; i++) {
        if (
          second__Line[i].functionButton === event.code ||
          second__Line[i].RUSlanguage === event.key.toLowerCase() ||
          second__Line[i].ENGlanguage === event.key.toLowerCase()
        ) {
          if (second__Line[i].upperCase) {
            writeKey(second__Line[i].upperCase, textareaDOM);
          } else if (Language == "ENG") {
            writeKey(second__Line[i].ENGlanguage, textareaDOM);
          } else {
            writeKey(second__Line[i].RUSlanguage, textareaDOM);
          }
          break;
        }
      }
    } else
      for (let i = 0; i < second__Line.length; i++) {
        if (
          second__Line[i].ENGlanguage === event.key.toLowerCase() ||
          second__Line[i].RUSlanguage === event.key.toLowerCase() ||
          second__Line[i].functionButton === event.code
        ) {
          if (Language == "ENG") {
            writeKey(second__Line[i].ENGlanguage, textareaDOM);
          } else {
            writeKey(second__Line[i].RUSlanguage, textareaDOM);
          }
          break;
        }
      }
    if (Shift) {
      for (let i = 0; i < third___Line.length; i++) {
        if (
          third___Line[i].ENGlanguage === event.key.toLowerCase() ||
          third___Line[i].RUSlanguage === event.key.toLowerCase() ||
          third___Line[i].functionButton === event.code
        ) {
          if (third___Line[i].upperCase) {
            writeKey(third___Line[i].upperCase, textareaDOM);
          } else if (Language == "ENG") {
            writeKey(third___Line[i].ENGlanguage, textareaDOM);
          } else {
            writeKey(third___Line[i].RUSlanguage, textareaDOM);
          }
          break;
        }
      }
    } else
      for (let i = 0; i < third___Line.length; i++) {
        if (
          third___Line[i].ENGlanguage === event.key.toLowerCase() ||
          third___Line[i].RUSlanguage === event.key.toLowerCase() ||
          third___Line[i].functionButton === event.code
        ) {
          if (Language == "ENG") {
            writeKey(third___Line[i].ENGlanguage, textareaDOM);
          } else {
            writeKey(third___Line[i].RUSlanguage, textareaDOM);
          }
          break;
        }
      }
    if (Shift) {
      for (let i = 0; i < fourth___Line.length; i++) {
        if (
          fourth___Line[i].ENGlanguage === event.key.toLowerCase() ||
          fourth___Line[i].RUSlanguage === event.key.toLowerCase() ||
          fourth___Line[i].functionButton === event.code
        ) {
          if (fourth___Line[i].upperCase) {
            writeKey(fourth___Line[i].upperCase, textareaDOM);
          } else if (Language == "ENG") {
            writeKey(fourth___Line[i].ENGlanguage, textareaDOM);
          } else {
            writeKey(fourth___Line[i].RUSlanguage, textareaDOM);
          }
          break;
        }
      }
    } else
      for (let i = 0; i < fourth___Line.length; i++) {
        if (
          fourth___Line[i].ENGlanguage === event.key.toLowerCase() ||
          fourth___Line[i].RUSlanguage === event.key.toLowerCase() ||
          fourth___Line[i].functionButton === event.code
        ) {
          if (Language == "ENG") {
            writeKey(fourth___Line[i].ENGlanguage, textareaDOM);
          } else {
            writeKey(fourth___Line[i].RUSlanguage, textareaDOM);
          }
          break;
        }
      }
    if (event.code === "Space") {
      writeKey("Space", textareaDOM);
    }
    for (let i = 0; i < fifth___Line.length; i++) {
      if (
        fifth___Line[i].functionButton === event.code &&
        fifth___Line[i].functionButton.indexOf("Arrow") === 0
      ) {
        writeKey(fifth___Line[i].ENGlanguage, textareaDOM);
      } else if (event.code === fifth___Line[i].functionButton) {
        animationfunctionButtonKey(event.code);
      }
    }
  });
};

const write__board = () => {
  let first__LineTemplate = `<div class="first-line">`;
  let item = ``;
  let Language = localStorage.getItem("lang");

  for (let i = 0; i < first__Line.length; i++) {
    item = `<div class="btn">`;
    if (Language === "ENG") {
      item += first__Line[i].ENGlanguage;
    } else {
      item += first__Line[i].RUSlanguage;
    }
    item += `</div>`;
    first__LineTemplate += item;
  }

  first__LineTemplate += `</div>`;

  let second__LineTemplate = `<div class="second-line">`;
  for (let i = 0; i < second__Line.length; i++) {
    item = `<div class="btn">`;
    if (Language === "ENG") {
      item += second__Line[i].ENGlanguage;
    } else {
      item += second__Line[i].RUSlanguage;
    }
    item += `</div>`;
    second__LineTemplate += item;
  }
  second__LineTemplate += `</div>`;

  let third___LineTemplate = `<div class="third-line">`;
  for (let i = 0; i < third___Line.length; i++) {
    item = `<div class="btn">`;
    if (Language === "ENG") {
      item += third___Line[i].ENGlanguage;
    } else {
      item += third___Line[i].RUSlanguage;
    }
    item += `</div>`;
    third___LineTemplate += item;
  }
  third___LineTemplate += `</div>`;

  let fourth___LineTemplate = `<div class="fourth-line">`;
  for (let i = 0; i < fourth___Line.length; i++) {
    item = `<div class="btn">`;
    if (Language === "ENG") {
      item += fourth___Line[i].ENGlanguage;
    } else {
      item += fourth___Line[i].RUSlanguage;
    }
    item += `</div>`;
    fourth___LineTemplate += item;
  }
  fourth___LineTemplate += `</div>`;

  let fifth___LineTemplate = `<div class="fifth-line">`;
  fifth___Line.classList = `fifth-line`;
  for (let i = 0; i < fifth___Line.length; i++) {
    item = `<div class="btn">`;
    if (Language === "ENG") {
      item += fifth___Line[i].ENGlanguage;
    } else {
      item += fifth___Line[i].RUSlanguage;
    }
    item += `</div>`;
    fifth___LineTemplate += item;
  }
  fifth___LineTemplate += `</div>`;
  document.body.insertAdjacentHTML("afterbegin", fifth___LineTemplate);
  document.body.insertAdjacentHTML("afterbegin", fourth___LineTemplate);
  document.body.insertAdjacentHTML("afterbegin", third___LineTemplate);
  document.body.insertAdjacentHTML("afterbegin", second__LineTemplate);
  document.body.insertAdjacentHTML("afterbegin", first__LineTemplate);
  let temp = document.querySelectorAll("div");
  temp[58].classList.add("ArrowUp");
  temp[67].classList.add("ArrowLeft");
  temp[68].classList.add("ArrowDown");
  temp[69].classList.add("ArrowRight");
  const textarea = `<textarea readonly placeholder="Клавиатура создана на OC Windows. Переключение языка через Shift + Alt или Ctrl + Alt"></textarea>`;
  document.body.insertAdjacentHTML("afterbegin", textarea);
};
const choiсeLanguage = () => {
  if (Language === "ENG") {
    Language = "RUS";
  } else {
    Language = "ENG";
  }
  localStorage.setItem("lang", Language);
  choiceLanguage(Language);
};

const choiceLanguage = (Language) => {
  const first__LineDOM = document.querySelector(".first-line");
  const second__LineDOM = document.querySelector(".second-line");
  const third___LineDOM = document.querySelector(".third-line");
  const fourth___LineDOM = document.querySelector(".fourth-line");
  const firstTemp = first__LineDOM.querySelectorAll("div");
  for (let i = 0; i < firstTemp.length; i++) {
    if (Language == "RUS") {
      firstTemp[i].innerHTML = first__Line[i].RUSlanguage;
    } else {
      firstTemp[i].innerHTML = first__Line[i].ENGlanguage;
    }
  }
  const secondTemp = second__LineDOM.querySelectorAll("div");
  for (let i = 0; i < secondTemp.length; i++) {
    if (Language == "RUS") {
      secondTemp[i].innerHTML = second__Line[i].RUSlanguage;
    } else {
      secondTemp[i].innerHTML = second__Line[i].ENGlanguage;
    }
  }
  const thirdTemp = third___LineDOM.querySelectorAll("div");
  for (let i = 0; i < thirdTemp.length; i++) {
    if (Language == "RUS") {
      thirdTemp[i].innerHTML = third___Line[i].RUSlanguage;
    } else {
      thirdTemp[i].innerHTML = third___Line[i].ENGlanguage;
    }
  }
  const fourthTemp = fourth___LineDOM.querySelectorAll("div");
  for (let i = 0; i < fourthTemp.length; i++) {
    if (Language == "RUS") {
      fourthTemp[i].innerHTML = fourth___Line[i].RUSlanguage;
    } else {
      fourthTemp[i].innerHTML = fourth___Line[i].ENGlanguage;
    }
  }
};

const writeSybmol = (event, textareaDOM) => {
  if (event.target.classList.contains("ArrowUp")) {
    writeArrow(textareaDOM, "ArrowUp");
    animationArrow("ArrowUp");
    return;
  } else if (event.target.classList.contains("ArrowLeft")) {
    writeArrow(textareaDOM, "ArrowLeft");
    animationArrow("ArrowLeft");
    return;
  } else if (event.target.classList.contains("ArrowRight")) {
    writeArrow(textareaDOM, "ArrowRight");
    animationArrow("ArrowRight");
    return;
  } else if (event.target.classList.contains("ArrowDown")) {
    writeArrow(textareaDOM, "ArrowDown");
    animationArrow("ArrowDown");
    return;
  } else if (event.target.innerHTML == "Tab") {
    textareaDOM.innerHTML += "  ";
    animationArrow("Tab");
    return;
  } else if (event.target.innerHTML == "Enter") {
    textareaDOM.innerHTML += "\n\r";
    animationArrow("Enter");
    return;
  } else if (
    event.target.innerHTML == "Alt" ||
    event.target.innerHTML == "Ctrl" ||
    event.target.innerHTML == "Win" ||
    event.target.innerHTML == "Delete"
  ) {
    animationTargetfunctionButtonKey(event.target);
    return;
  } else if (event.target.innerHTML == "CapsLock") {
    choiceCapsLock(CapsLock);
    animationArrow("CapsLock");
    return;
  } else if (event.target.innerHTML == "Shift") {
    choiceShiftChanger(Shift);
    animationArrow("Shift");
    return;
  }
  if (event.target.innerHTML == "Backspace") {
    textareaDOM.innerHTML = textareaDOM.innerHTML.slice(
      0,
      textareaDOM.innerHTML.length - 1
    );
  } else if (Shift || CapsLock)
    textareaDOM.innerHTML += event.target.innerHTML.toUpperCase();
  else {
    textareaDOM.innerHTML += event.target.innerHTML;
  }
  ButtonAnimation(event.target.innerHTML);
};

const writeArrow = (textareaDOM, arrow = null) => {
  if (event.code) {
    if (event.code == "ArrowUp") {
      textareaDOM.innerHTML += "&#8593;";
    } else if (event.code == "ArrowLeft") {
      textareaDOM.innerHTML += "&#8592";
    } else if (event.code == "ArrowDown") {
      textareaDOM.innerHTML += "&#8595;";
    } else if (event.code == "ArrowRight") {
      textareaDOM.innerHTML += "&#8594;";
    }
  } else {
    if (arrow == "ArrowUp") {
      textareaDOM.innerHTML += "&#8593;";
    } else if (arrow == "ArrowLeft") {
      textareaDOM.innerHTML += "&#8592";
    } else if (arrow == "ArrowDown") {
      textareaDOM.innerHTML += "&#8595;";
    } else if (arrow == "ArrowRight") {
      textareaDOM.innerHTML += "&#8594;";
    }
  }
  animationArrow(event.code);
};

const writeKey = (symbol, textareaDOM) => {
  if (symbol == "Shift") {
    Shift = choiceShiftChanger(Shift);
  }
  if (
    symbol == "Alt" ||
    symbol == "Ctrl" ||
    symbol == "CapsLock" ||
    symbol == "Shift"
  ) {
    if (event.code.indexOf("Shift") === 0) {
      animationfunctionButtonKey(event.code);
      return;
    }
  } else if (symbol == "Tab") {
    textareaDOM.innerHTML += "  ";
  } else if (symbol == "Enter") {
    textareaDOM.innerHTML += "\n";
  } else if (symbol == "Space") {
    textareaDOM.innerHTML += " ";
  } else if (symbol == "Delete") {
    ButtonAnimation(symbol);
    return;
  } else if (symbol == "Backspace") {
    textareaDOM.innerHTML = textareaDOM.innerHTML.pop();
  } else if (event.code.indexOf("Arrow") === 0) {
    writeArrow(textareaDOM);
    return;
  } else {
    if (Shift || CapsLock) {
      textareaDOM.innerHTML += symbol.toUpperCase();
    } else {
      textareaDOM.innerHTML += symbol;
    }
  }
  ButtonAnimation(symbol);
};

const ButtonAnimation = (symbol) => {
  var divs = document.querySelectorAll("div");
  if (symbol === "Space") symbol = " ";
  divs.forEach((element) => {
    if (element.innerHTML.toLowerCase() == symbol.toString().toLowerCase()) {
      element.classList.add("active");
      setTimeout(() => {
        element.classList.remove("active");
      }, 200);
    }
  });
};

const animationfunctionButtonKey = (target) => {
  let divs = document.querySelectorAll("div");
  if (target.indexOf("Left") != -1) {
    target = target.slice(0, target.indexOf("Left"));
    if (target === "Meta") target = "Win";
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].innerHTML.toLowerCase() == target.toLowerCase()) {
        divs[i].classList.add("active");
        setTimeout(() => {
          divs[i].classList.remove("active");
        }, 200);
        break;
      }
    }
  } else {
    target = target.slice(0, target.indexOf("Right"));
    for (let i = divs.length - 1; i >= 0; i--) {
      if (divs[i].innerHTML.toLowerCase() == target.toLowerCase()) {
        divs[i].classList.add("active");
        setTimeout(() => {
          divs[i].classList.remove("active");
        }, 200);
        break;
      }
    }
  }
};

const animationTargetfunctionButtonKey = (target) => {
  target.classList.add("active");
  setTimeout(() => {
    target.classList.remove("active");
  }, 200);
};

const animationArrow = (value) => {
  let divs = document.querySelectorAll("div");
  switch (value) {
    case "ArrowUp":
      divs[58].classList.add("active");
      setTimeout(() => {
        divs[58].classList.remove("active");
      }, 200);
      break;

    case "ArrowLeft":
      divs[67].classList.add("active");
      setTimeout(() => {
        divs[67].classList.remove("active");
      }, 200);
      break;

    case "ArrowDown":
      divs[68].classList.add("active");
      setTimeout(() => {
        divs[68].classList.remove("active");
      }, 200);
      break;

    case "ArrowRight":
      divs[69].classList.add("active");
      setTimeout(() => {
        divs[69].classList.remove("active");
      }, 200);
      break;

    default:
      break;
  }
};

const choiceCapsLock = (CapsLock) => {
  let divs = document.querySelectorAll("div");
  let regex = RegExp(
    "Tab|Del|Delete|CapsLock|Shift|Win|Ctrl|Alt|Enter|Backspace"
  );
  CapsLock = !CapsLock;
  divs.forEach((element) => {
    if (!regex.test(element.innerHTML)) element.classList.toggle("uppercase");
  });
  return CapsLock;
};

const choiceShiftChanger = (Shift) => {
  choiceCapsLock(Shift);
  let first__LineDivs = document.querySelectorAll(".first-line>div");
  let second__LineDivs = document.querySelectorAll(".second-line>div");
  let third___LineDivs = document.querySelectorAll(".third-line>div");
  let fourth___LineDivs = document.querySelectorAll(".fourth-line>div");
  if (!Shift) {
    for (let i = 0; i < first__LineDivs.length; i++) {
      if (first__Line[i].upperCase) {
        first__LineDivs[i].innerHTML = first__Line[i].upperCase;
      }
    }
    for (let i = 0; i < second__LineDivs.length; i++) {
      if (second__Line[i].upperCase) {
        second__LineDivs[i].innerHTML = second__Line[i].upperCase;
      }
    }
    for (let i = 0; i < third___LineDivs.length; i++) {
      if (third___Line[i].upperCase) {
        third___LineDivs[i].innerHTML = third___Line[i].upperCase;
      }
    }
    for (let i = 0; i < fourth___LineDivs.length; i++) {
      if (fourth___Line[i].upperCase) {
        fourth___LineDivs[i].innerHTML = fourth___Line[i].upperCase;
      }
    }
  } else {
    if (localStorage.getItem("lang") == "ENG") {
      for (let i = 0; i < first__LineDivs.length; i++) {
        first__LineDivs[i].innerHTML = first__Line[i].ENGlanguage;
      }
      for (let i = 0; i < second__LineDivs.length; i++) {
        second__LineDivs[i].innerHTML = second__Line[i].ENGlanguage;
      }
      for (let i = 0; i < third___LineDivs.length; i++) {
        third___LineDivs[i].innerHTML = third___Line[i].ENGlanguage;
      }
      for (let i = 0; i < fourth___LineDivs.length; i++) {
        fourth___LineDivs[i].innerHTML = fourth___Line[i].ENGlanguage;
      }
    } else {
      for (let i = 0; i < first__LineDivs.length; i++) {
        first__LineDivs[i].innerHTML = first__Line[i].RUSlanguage;
      }
      for (let i = 0; i < second__LineDivs.length; i++) {
        second__LineDivs[i].innerHTML = second__Line[i].RUSlanguage;
      }
      for (let i = 0; i < third___LineDivs.length; i++) {
        third___LineDivs[i].innerHTML = third___Line[i].RUSlanguage;
      }
      for (let i = 0; i < fourth___LineDivs.length; i++) {
        fourth___LineDivs[i].innerHTML = fourth___Line[i].RUSlanguage;
      }
    }
  }
  return !Shift;
};
