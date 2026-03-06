
function decoder(value, totalBits) {
    let result = new Array(totalBits).fill(0);
    if (value >= 0 && value < totalBits) {
        result[value] = 1;
    }
    return result;
}

function encoder(oneHotArray) {
    for (let i = 0; i < oneHotArray.length; i++) {
        if (oneHotArray[i] === 1) {
            return i; 
        }
    }
  
}


let mode = prompt("1 - декодер , 2 - кодер");

if (mode === "1") {
    let value = Number(prompt("Введите число (от 0 до 6):"));
    let bits = Number(prompt("Из кольки цыфр оно будет состоять? (например 7)"));
    let oneHot = decoder(value, bits);
    alert("готово: [" + oneHot.join(", ") + "]");

} else if (mode === "2") {
    let input = prompt("Введите массив через пробел (например, '0 1 0 1'):");
    let arr = input.split(" ").map(Number);
    let num = encoder(arr);
    alert("Закодированное число: " + num);
} else {
    alert("ошибка, повтоорите попытку");
}

