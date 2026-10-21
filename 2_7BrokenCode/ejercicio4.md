function saludar(nombre) {

    console.log("Hola " + name);

}
 
saludar("Ana");

Se pasa nombre por la funcion saludar y se le asigna la cadena Ana a la variable nombre de la funcion saludar pero en el console.log se le pasa una variable name que no existe. Para solucionarlo hay que quitar name y añadir nombre <<("Hola "+ nombre)>>.

function saludar(nombre) {

    console.log("Hola " + nombre);

}

saludar("Ana");