console.log("Mi primer javascript");
console.log("hola, Soy un factorial");

function factorial(num) {
    if (num === 0) {
        return 1;
    }else{
        return num * factorial(num - 1)
    }
}

console.log('====================================');
console.log(factorial(5));
console.log('====================================');