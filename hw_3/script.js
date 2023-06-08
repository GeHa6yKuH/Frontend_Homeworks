//Первая программа

const number = +prompt("Введите число")
console.log(number * 0.1)

//Вторая программа

const a = +prompt("Number")
const b = +prompt("Number1")
if (a < b) {
    console.log(a)
} else if (b < a) {
    console.log(b)
} else {
    console.log(a + b)
}

// Третья программа

const n = +prompt("Number")
if (n > 100) {
    console.log("Число больше 100")
} else if (100 > n) {
    console.log("Число меньше 100")
} else {
    console.log("Число равно 100")
}

// Четвертая программа

const name = prompt("Enter your name")
const age = prompt("Enter your age in years")
if (age >= 18) {
    console.log("Hello, " + name)
} else {
    console.log("Hi, " + name)
}