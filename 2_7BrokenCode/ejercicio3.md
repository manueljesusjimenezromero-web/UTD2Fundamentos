function multiplicar (a, b) {
    let ofthejedi=a * b;
    
}
 
let total = multiplicar(3, 4);
console.log("Total: " + total);

No funciona ya que no llega a enviar el resultado de la funcion con return hace falta añadirlo para poder pasar lo que vale el total.

function multiplicar (a, b) {
    let ofthejedi=a * b;
    return ofthejedi;
}
 
let total = multiplicar(3, 4);
console.log("Total: " + total);