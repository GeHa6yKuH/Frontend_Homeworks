// Задача 1
function minimum (num1, num2) {
    return Math.min(num1, num2)
}

//задача 2
function even (num1, num2) {
    let begin = Math.max(num1, num2)
    let end = Math.min(num1, num2)
    for (let i = begin; i >= end; i--) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

//задача 3
function power (num1, powerNum = 2) {
    return num1 ** powerNum
}

//задача 4
function sum (n) {
    let sumToNum = 0
    for (let i = 1; i <= n; i++) {
        sumToNum = sumToNum + i
    }
    return sumToNum
}

//задача 5
function twoSum (n, m) {
    let sumOdd = 0
    let sumEven =  0
    for (let i = n; i <= m; i++) {
        if (i % 2 == 0) {
            sumEven = sumEven + i
        } else if (i % 2) (
            sumOdd = sumOdd + i
        )
    }
    console.log(sumOdd)
    console.log(sumEven);
}

//задача 6
function largeel(arrStr) {
    let maxLength = 0
    let elNumber
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length > maxLength){
            maxLength = arrStr[i].length
            elNumber = i
        }
    return arrStr[elNumber]
    }
}

