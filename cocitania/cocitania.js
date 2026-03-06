let n = Number(prompt("Введите n :"));
let k = Number(prompt("Введите k :"));
function factorial(num) {
    let f = 1;
    for (let i = 2; i <= num; i++) f *= i;
    return f;
}

function combination(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}
let result = combination(n, k);
console.log("Результат:", result);