
let n = Number(prompt("Введите  n:"));
let k = Number(prompt("Введите  k:"));
let p = Number(prompt("Введите  p (от 0 до 1):"));
function bernoulli(n, k, p) {
   
    function combination(n, k) {
        if (k < 0 || k > n) return 0;
        if (k === 0 || k === n) return 1;
        k = Math.min(k, n - k);
        let c = 1;
        for (let i = 1; i <= k; i++) {
            c = c * (n - k + i) / i;
        }
        return c;
    }
    const q = 1 - p;
    return combination(n, k) * Math.pow(p, k) * Math.pow(q, n - k);
}
let result = bernoulli(n, k, p);
console.log("Результат:", result);