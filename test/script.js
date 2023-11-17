let example = document.querySelector("#example")
let btn = document.querySelector("#btn")


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


function click(target){
    let sList = example.value.split(" ")
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
}

btn.addEventListener("click", click)


