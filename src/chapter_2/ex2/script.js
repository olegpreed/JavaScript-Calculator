// const x = document.querySelector('.gridslot:nth-child(14) .button')
// const y = document.querySelector('.gridslot:nth-child(14) div')

let xy = [0, 0];
let finalResult = 0;
let i = 0;
let dot = 0;
let stepen = 1;
const operation = [0, 0, 0, 0];

const buttonC = document.querySelector(".gridslot:nth-child(2)");
const button1 = document.querySelector(".gridslot:nth-child(3)");
const button2 = document.querySelector(".gridslot:nth-child(4)");
const button3 = document.querySelector(".gridslot:nth-child(5)");
const buttonPlus = document.querySelector(".gridslot:nth-child(6)");
const button4 = document.querySelector(".gridslot:nth-child(7)");
const button5 = document.querySelector(".gridslot:nth-child(8)");
const button6 = document.querySelector(".gridslot:nth-child(9)");
const buttonMinus = document.querySelector(".gridslot:nth-child(10)");
const button7 = document.querySelector(".gridslot:nth-child(11)");
const button8 = document.querySelector(".gridslot:nth-child(12)");
const button9 = document.querySelector(".gridslot:nth-child(13)");
const buttonMultiply = document.querySelector(".gridslot:nth-child(14)");
const buttonDivide = document.querySelector(".gridslot:nth-child(15)");
const button0 = document.querySelector(".gridslot:nth-child(16)");
const buttonDot = document.querySelector(".gridslot:nth-child(17)");
const buttonEqual = document.querySelector(".gridslot:nth-child(18)");

const result = document.querySelector(".gridslot div span");

function equal(event) {
  if (operation[0] === 1) {
    if (i === 1) {
      xy[0] = xy[0] + xy[1];
      document.querySelector(".gridslot div span").innerText = xy[0];
      xy[1] = 0;
      i = 0;
    } else {
      xy[1] = xy[0] + xy[1];
      document.querySelector(".gridslot div span").innerText = xy[1];
      xy[0] = 0;
      i = 1;
    }
    operation[0] = 0;
  }
  if (operation[1] === 1) {
    if (i === 1) {
      xy[0] = xy[0] - xy[1];
      document.querySelector(".gridslot div span").innerText = xy[0];
      xy[1] = 0;
      i = 0;
    } else {
      xy[1] = xy[1] - xy[0];
      document.querySelector(".gridslot div span").innerText = xy[1];
      xy[0] = 0;
      i = 1;
    }
    operation[1] = 0;
  }
  if (operation[2] === 1) {
    if (i === 1) {
      xy[0] = xy[0] * xy[1];
      document.querySelector(".gridslot div span").innerText = xy[0];
      xy[1] = 0;
      i = 0;
    } else {
      xy[1] = xy[1] * xy[0];
      document.querySelector(".gridslot div span").innerText = xy[1];
      xy[0] = 0;
      i = 1;
    }
    operation[2] = 0;
  }
  if (operation[3] === 1) {
    if (i === 1) {
      xy[0] = xy[0] / xy[1];
      document.querySelector(".gridslot div span").innerText = xy[0];
      xy[1] = 0;
      i = 0;
    } else {
      xy[1] = xy[1] / xy[0];
      document.querySelector(".gridslot div span").innerText = xy[1];
      xy[0] = 0;
      i = 1;
    }
    operation[3] = 0;
  }
  stepen = 1;
  document.querySelector(".gridslot div span").innerText = xy[i];
  document.querySelector(".gridslot div span").style.color = "black";
}

function plusuem(event) {
  console.log(xy[0], xy[1], i);
  if (i == 0) i = 1;
  else i = 0;
  operation[0] = 1;
  stepen = 1;
  dot = 0;
}

function reset(event) {
  xy = [0, 0];
  stepen = 1;
  document.querySelector(".gridslot div span").innerText = xy[i];
  document.querySelector(".gridslot div span").style.color = "black";
}

function multiplaem(event) {
  if (i == 0) i = 1;
  else i = 0;
  operation[2] = 1;
  stepen = 1;
  dot = 0;
}

function delim(event) {
  if (i == 0) i = 1;
  else i = 0;
  operation[3] = 1;
  stepen = 1;
  dot = 0;
}

function vichitaem(event) {
  if (i == 0) i = 1;
  else i = 0;
  operation[1] = 1;
  stepen = 1;
  dot = 0;
}

function tochka(event) {
  console.log(xy[0], xy[1], i);
  document.querySelector(".gridslot div span").append(".");
  dot = 1;
}

function putOne(event) {
  console.log(xy[0], xy[1], i);
  if (!dot) xy[i] = xy[i] * 10 + 1;
  else {
    xy[i] = xy[i] + 0.1 / stepen;
    stepen = stepen * 10;
  }
  document.querySelector(".gridslot div span").innerText = xy[i];
  document.querySelector(".gridslot div span").style.color = "black";
}

function putTwo(event) {
  if (!dot) xy[i] = xy[i] * 10 + 2;
  else {
    xy[i] = xy[i] + 0.2 / stepen;
    stepen = stepen * 10;
  }
  document.querySelector(".gridslot div span").innerText = xy[i];
  document.querySelector(".gridslot div span").style.color = "black";
}

function putThree(event) {
  if (!dot) xy[i] = xy[i] * 10 + 3;
  else {
    console.log(xy[i], stepen, i);
    xy[i] = xy[i] + 0.3 / stepen;
    stepen = stepen * 10;
  }
  document.querySelector(".gridslot div span").innerText = xy[i];
  document.querySelector(".gridslot div span").style.color = "black";
}

function putFour(event) {
  if (!dot) xy[i] = xy[i] * 10 + 4;
  else {
    console.log(xy[i], stepen, i);
    xy[i] = xy[i] + 0.4 / stepen;
    stepen = stepen * 10;
  }
  document.querySelector(".gridslot div span").innerText = xy[i];
  document.querySelector(".gridslot div span").style.color = "black";
}

function putFive(event) {
  if (!dot) xy[i] = xy[i] * 10 + 5;
  else {
    console.log(xy[i], stepen, i);
    xy[i] = xy[i] + 0.5 / stepen;
    stepen = stepen * 10;
  }
  document.querySelector(".gridslot div span").innerText = xy[i];
  document.querySelector(".gridslot div span").style.color = "black";
}

function putSix(event) {
  if (!dot) xy[i] = xy[i] * 10 + 6;
  else {
    console.log(xy[i], stepen, i);
    xy[i] = xy[i] + 0.6 / stepen;
    stepen = stepen * 10;
  }
  document.querySelector(".gridslot div span").innerText = xy[i];
  document.querySelector(".gridslot div span").style.color = "black";
}

function putSeven(event) {
  if (!dot) xy[i] = xy[i] * 10 + 7;
  else {
    console.log(xy[i], stepen, i);
    xy[i] = xy[i] + 0.7 / stepen;
    stepen = stepen * 10;
  }
  document.querySelector(".gridslot div span").innerText = xy[i];
  document.querySelector(".gridslot div span").style.color = "black";
}

function putEight(event) {
  if (!dot) xy[i] = xy[i] * 10 + 8;
  else {
    console.log(xy[i], stepen, i);
    xy[i] = xy[i] + 0.8 / stepen;
    stepen = stepen * 10;
  }
  document.querySelector(".gridslot div span").innerText = xy[i];
  document.querySelector(".gridslot div span").style.color = "black";
}

function putNine(event) {
  if (!dot) xy[i] = xy[i] * 10 + 9;
  else {
    console.log(xy[i], stepen, i);
    xy[i] = xy[i] + 0.9 / stepen;
    stepen = stepen * 10;
  }
  document.querySelector(".gridslot div span").innerText = xy[i];
  document.querySelector(".gridslot div span").style.color = "black";
}

function putZero(event) {
  xy[i] = xy[i] * 10;
  document.querySelector(".gridslot div span").innerText = xy[i];
  document.querySelector(".gridslot div span").style.color = "black";
}

button2.addEventListener("click", putTwo);

button3.addEventListener("click", putThree);

button4.addEventListener("click", putFour);

button5.addEventListener("click", putFive);

button6.addEventListener("click", putSix);

button7.addEventListener("click", putSeven);

button8.addEventListener("click", putEight);

button9.addEventListener("click", putNine);

button0.addEventListener("click", putZero);

buttonEqual.addEventListener("click", equal);

buttonPlus.addEventListener("click", plusuem);

buttonMultiply.addEventListener("click", multiplaem);

buttonDivide.addEventListener("click", delim);

buttonMinus.addEventListener("click", vichitaem);

buttonC.addEventListener("click", reset);

buttonDot.addEventListener("click", tochka);

button1.addEventListener("click", putOne);

addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "=" || e.key === "Enter") equal();
  else if (e.key === "+") plusuem();
  else if (e.key === "Backspace" || e.key === "Clear") reset();
  else if (e.key === "*") multiplaem();
  else if (e.key === "-") vichitaem();
  else if (e.key === "/") delim();
  else if (e.key === ".") tochka();
  else if (e.key === "1") putOne();
  else if (e.key === "2") putTwo();
  else if (e.key === "3") putThree();
  else if (e.key === "4") putFour();
  else if (e.key === "5") putFive();
  else if (e.key === "6") putSix();
  else if (e.key === "7") putSeven();
  else if (e.key === "8") putEight();
  else if (e.key === "9") putNine();
  else if (e.key === "0") putZero();
});

function one(callback) {
  if (callback && typeof callback === "function") {
    return callback(1);
  } else return 1;
}
function two(callback) {
  if (callback && typeof callback === "function") {
    return callback(2);
  } else return 2;
}
function three(callback) {
  if (callback && typeof callback === "function") {
    return callback(3);
  } else return 3;
}
function four(callback) {
  if (callback && typeof callback === "function") {
    return callback(4);
  } else return 4;
}
function five(callback) {
  if (callback && typeof callback === "function") {
    return callback(5);
  } else return 5;
}
function six(callback) {
  if (callback && typeof callback === "function") {
    return callback(6);
  } else return 6;
}
function seven(callback) {
  if (callback && typeof callback === "function") {
    return callback(7);
  } else return 7;
}
function eight(callback) {
  if (callback && typeof callback === "function") {
    return callback(8);
  } else return 8;
}
function nine(callback) {
  if (callback && typeof callback === "function") {
    return callback(9);
  } else return 9;
}

function plus(a) {
  return (b) => {
    return a + b;
  };
}

function minus(a) {
  return (b) => {
    return a - b;
  };
}

function divide(a) {
  return (b) => {
    return a / b;
  };
}

function mult(a) {
  return (b) => {
    return a * b;
  };
}
