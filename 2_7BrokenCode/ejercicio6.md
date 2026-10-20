function esPar(num) {
    if (num % 2 = 0) {
        return true;
    } else {
        return false;
    }
}
 
console.log(esPar(3));
console.log(esPar(4));

En el if dice que es par si el resto da 0 pero se añade solo un = cuando se debe de poner ==.

function esPar(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
 
console.log(esPar(3));
console.log(esPar(4));