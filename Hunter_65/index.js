console.log("That's code for Factorial function");
//  const factorial = (n) => {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);   }
//     console.log(factorial(2)); // Output: 120
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result; 
}
console.log(factorial(6)); // Output: 120