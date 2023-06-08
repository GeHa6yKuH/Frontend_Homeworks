//Задача 1

for (let i = 0; i <= 10; i = i + 2) {
    console.log(i)
}

// Задача 2

for (let i = 55; i > 20; i--) {
    console.log(i)
}
const numbers = [3, 5, 11, 2, 8, 1, 6]
for(let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i])
}

const numbers_squared = []
for(let i = 0; i <= numbers.length; i++) {
    numbers_squared.push(numbers[i] ** 2)
}

//Задача 3

const last_elem = numbers_squared[6]

// Задача 4

const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }
const info = ("Users name is " + user.first_name + " " + user.last_name + "." + "He is " + user.age + " years old")
console.log(info)

