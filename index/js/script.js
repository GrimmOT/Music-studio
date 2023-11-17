


// let alph = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
// let cipher = "йцукенгшщзхъёфывапролджэюбьтимсчя"
// let result = ""
// 
// function encrypt(s){
//     let result = ""
//     for (i = 0; i < s.length; i++){
//         index = alph.indexOf(s[i])
//         if (index == -1){
//             result += s[i]
//         }
//         else{
//             result += cipher[index]
//         } 
//     }
//     return result
// }
// 
// function decrypt(s){
//     let result = ""
//     for (i = 0; i < s.length; i++){
//         index = cipher.indexOf(s[i])
//         if (index == -1){
//             result += s[i]
//         }
//         else{
//             result += alph[index]
//         } 
//     }
//     return result
// }
// 
// let s = prompt("Введите что-то ")
// let choise = prompt("Введите 1, чтобы зашифровать или введите 2, чтобы разшифровать ")
// 
// if (choise == 1){
//     alert(encrypt(s))
// }
// else{
//     alert(decrypt(s))
// }


// let sentence = "Administration, a"
// a = 0
// for (let i = 0; i < sentence.length; i++){
//     if (sentence[i] == "a" || sentence[i] == "A"){
//         a++
//     } 
// }
// console.log(a)


// let sentence = "Hello world, rrrrrrrr"
// let words = sentence.split(" ")
// let wordLength = words[words.length - 1].length
// console.log(wordLength)


// let email = "ivanov@gmail.com"
// let emailArray = email.split("@")
// console.log(emailArray[0])


// let lamp = [false, false, false, false, true, false]
// let lampToOn = 3
// lamp[lampToOn - 1] = true
// for (let i = 0; i < lamp.length; i++){
//     if (lamp[i] == true && i != lampToOn - 1){
//         lamp[i] = false
//     }
// }
// console.log(lamp)


// let array = [12, -12, 0, 67, -2222, -44, 98, 0, 61, 0]
// for (let i = 0; i < 10; i++){
//     if (array[i] < 0){
//         array[i] = -1
//     }
//     if (array[i] > 0){
//         array[i] = 1
//     }
// }
// console.log(array)


// let array = []
// for (let i = 0; i < 10; i++){
//     array.push(i * 2)
// }
// console.log(array)


// let temp = Number(prompt("Введите температуру воды: "))
// if (temp >= 25 && temp <= 45){
//     alert("Можно купаться")
// }
// else{
//     alert("Купаться нельзя!")
// }
