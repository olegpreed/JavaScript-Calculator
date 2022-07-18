// const x = document.querySelector('.gridslot:nth-child(14) .button')
// const y = document.querySelector('.gridslot:nth-child(14) div')

let xy = [0, 0];
let finalResult = 0;
let i = 0;
const operation = [0, 0, 0, 0]

const buttonC = document.querySelector('.gridslot:nth-child(2)')
const button1 = document.querySelector('.gridslot:nth-child(3)')
const button2 = document.querySelector('.gridslot:nth-child(4)')
const button3 = document.querySelector('.gridslot:nth-child(5)')
const buttonPlus = document.querySelector('.gridslot:nth-child(6)')
const button4 = document.querySelector('.gridslot:nth-child(7)')
const button5 = document.querySelector('.gridslot:nth-child(8)')
const button6 = document.querySelector('.gridslot:nth-child(9)')
const buttonMinus = document.querySelector('.gridslot:nth-child(10)')
const button7 = document.querySelector('.gridslot:nth-child(11)')
const button8 = document.querySelector('.gridslot:nth-child(12)')
const button9 = document.querySelector('.gridslot:nth-child(13)')
const buttonX = document.querySelector('.gridslot:nth-child(14)')
const buttonDivide = document.querySelector('.gridslot:nth-child(15)')
const button0 = document.querySelector('.gridslot:nth-child(16)')
const buttonDot = document.querySelector('.gridslot:nth-child(17)')
const buttonEqual = document.querySelector('.gridslot:nth-child(18)')

const result = document.querySelector('.gridslot div')

buttonEqual.addEventListener('click', function (event) {
    if (operation[0] === 1) {
        if (i === 1) {
            xy[0] = xy[0] + xy[1]
            document.querySelector('.gridslot div').innerText = xy[0]
            xy[1] = 0
            i = 0
        }
        else {
            xy[1] = xy[0] + xy[1]
            document.querySelector('.gridslot div').innerText = xy[1]
            xy[0] = 0
            i = 0
        }
        operation[0] = 0
    }

    document.querySelector('.gridslot div').style.color = 'black'



})

buttonC.addEventListener('click', function (event) {
    xy[i] = 0;
    document.querySelector('.gridslot div').innerText = xy[i]
})

buttonPlus.addEventListener('click', function (event) {
    if (i == 0) i = 1
    else i = 0
    operation[0] = 1
})

button1.addEventListener('click', function (event) {
    xy[i] = xy[i] * 10 + 1;
    document.querySelector('.gridslot div').innerText = xy[i]
    document.querySelector('.gridslot div').style.color = 'black'
})

button2.addEventListener('click', function (event) {
    xy[i] = xy[i] * 10 + 2;
    document.querySelector('.gridslot div').innerText = xy[i]
    document.querySelector('.gridslot div').style.color = 'black'
})

button3.addEventListener('click', function (event) {
    xy[i] = xy[i] * 10 + 3;
    document.querySelector('.gridslot div').innerText = xy[i]
    document.querySelector('.gridslot div').style.color = 'black'
})

button4.addEventListener('click', function (event) {
    xy[i] = xy[i] * 10 + 4;
    document.querySelector('.gridslot div').innerText = xy[i]
    document.querySelector('.gridslot div').style.color = 'black'
})

button5.addEventListener('click', function (event) {
    xy[i] = xy[i] * 10 + 5;
    document.querySelector('.gridslot div').innerText = xy[i]
    document.querySelector('.gridslot div').style.color = 'black'
})

button6.addEventListener('click', function (event) {
    xy[i] = xy[i] * 10 + 6;
    document.querySelector('.gridslot div').innerText = xy[i]
    document.querySelector('.gridslot div').style.color = 'black'
})

button7.addEventListener('click', function (event) {
    xy[i] = xy[i] * 10 + 7;
    document.querySelector('.gridslot div').innerText = xy[i]
    document.querySelector('.gridslot div').style.color = 'black'
})

button8.addEventListener('click', function (event) {
    xy[i] = xy[i] * 10 + 8;
    document.querySelector('.gridslot div').innerText = xy[i]
    document.querySelector('.gridslot div').style.color = 'black'
})

button9.addEventListener('click', function (event) {
    xy[i] = xy[i] * 10 + 9;
    document.querySelector('.gridslot div').innerText = xy[i]
    document.querySelector('.gridslot div').style.color = 'black'
})

button0.addEventListener('click', function (event) {
    xy[i] = xy[i] * 10;
    document.querySelector('.gridslot div').innerText = xy[i]
    document.querySelector('.gridslot div').style.color = 'black'
})


function one(callback) {
    if (callback && typeof callback === 'function') {
        return (callback(1));
    } else return 1;
}
function two(callback) {
    if (callback && typeof callback === 'function') {
        return (callback(2));
    } else return 2;
}
function three(callback) {
    if (callback && typeof callback === 'function') {
        return (callback(3));
    } else return 3;
}
function four(callback) {
    if (callback && typeof callback === 'function') {
        return (callback(4));
    } else return 4;
}
function five(callback) {
    if (callback && typeof callback === 'function') {
        return (callback(5));
    } else return 5;
}
function six(callback) {
    if (callback && typeof callback === 'function') {
        return (callback(6));
    } else return 6;
}
function seven(callback) {
    if (callback && typeof callback === 'function') {
        return (callback(7));
    } else return 7;
}
function eight(callback) {
    if (callback && typeof callback === 'function') {
        return (callback(8));
    } else return 8;
}
function nine(callback) {
    if (callback && typeof callback === 'function') {
        return (callback(9));
    } else return 9;
}

function plus(a) {
    return (b) => {
        return (a + b);
    }
}

function minus(a) {
    return (b) => {
        return (a - b);
    }
}

function divide(a) {
    return (b) => {
        return (a / b);
    }
}

function mult(a) {
    return (b) => {
        return (a * b);
    }
}
