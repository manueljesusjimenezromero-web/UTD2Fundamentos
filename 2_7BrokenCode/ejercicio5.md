let numeros = [1, 2, 3, 4];
let suma = 0;

for (let i = 0; i <= numeros.length; i++) {
    suma += numeros[i];
    
}


console.log("Suma total: "+suma );

En el for hay un <= recorriendo una vez mas como si hubiera 5 valores en el array cuando solo hay 4 dando lugar a un NaN. Para solucionarlo se debe dejar solo i < numeros.lenght recorre hasta el ultimo del array y no se repita otra vez en el ultimo valor.  


let numeros = [1, 2, 3, 4];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    
}


console.log("Suma total: "+suma );
