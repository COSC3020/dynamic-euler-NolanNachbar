// function factorial(n) {
//     if(n === 0) return 1;
//     else return n * factorial(n - 1);
// }

// function e(n) {
//     if(n === 0) return 1;
//     else return 1.0 / factorial(n) + e(n - 1);
// }
function factorial (n) {
    let fact = 1;
    
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    
    return fact;
}
function e(n) {
    let factorial = 1;
    let euler = 0;
    
    for (let i = 0; i <= n; i++) {
      if (i > 0) factorial *= i;
      
      euler += 1 / factorial;
    }
    return euler;
}
