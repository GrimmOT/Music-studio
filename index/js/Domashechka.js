function sum(num1, num2){
    result = num1 + num2
    return result
}

function sub(num1, num2){
    result = num1 - num2
    return result
}

function mult(num1, num2){
    result = num1 * num2
    return result
}

function div(num1, num2){
    result = num1 / num2
    return result
}

let s = "5 + 8"
let sList = s.split(" ")
num1 = Number(sList[0])
num2 = Number(sList[2])

if (sList[1] == "+"){
    alert(sum(num1, num2))
}
if (sList[1] == "-"){
    alert(sub(num1, num2))
}
if (sList[1] == "*"){
    alert(mult(num1, num2))
}
if (sList[1] == "/" || sList[1] == "%"){
    alert(div(num1, num2))
}


// let word = prompt("Введите слово ")
// let isPalindrom = true
// for (i = 0; i < word.length / 2; i++){
//     if (word[i] != word[word.length - i - 1]){
//         isPalindrom = false
//     }
// }
// if (isPalindrom == false){
//     alert("Это слово не палиндром((( ")
// }
// else{
//     alert("Это слово палиндром ")
// }


// let shifr = prompt("Введите 6-ти значный код: ")
// let sum1 = Number(shifr[0]) + Number(shifr[1]) + Number(shifr[2])
// let sum2 = Number(shifr[3]) + Number(shifr[4]) + Number(shifr[5])
// if (sum1 == sum2){
//     alert("Этот код счастливый")
// }
// else{
//     alert("Ваш код не счастливый")
// }


// let a = Number(prompt("Введите громкость первой колонки: "))
// let b = Number(prompt("Введите громкость второй колонки: "))
// let n = Number(prompt("Введите ограничения на громкость: "))
// if (a + b <= n){
//     alert("Можно включить обе колонки")
// }
// else{
//     if (a > n && b > n){
//         alert("Нельзя включить никакую из колонок")
//     }
//     else{
//         if (a > n){
//             alert("Можно включить только колонку B")
//         }
//         if (b > n){
//             alert("Можно включить только колонку A")
//         }
//         if (a <= n && b <= n){
//             alert("Можно включить любую одну колонку")
//         }
//     }
// }
