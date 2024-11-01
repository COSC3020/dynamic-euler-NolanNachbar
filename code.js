function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e2(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e2(n - 1);
}

function e(n) {
    function _e(n2, n, acc, euler) {
        if (n2 < n) _e(n2++, (n2 * (acc)), euler + 1/(n2 * (acc))); 
        return euler;
    }
    return _e(1, n, 1, 1)
}

let k = 5;

console.log(e(k));
console.log(e2(k));
