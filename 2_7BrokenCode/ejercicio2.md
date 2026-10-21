let edad = 16; 

if (edad => 18) { 

    console.log("Eres mayor de edad"); 

} else { 

    console.log("Eres menor de edad"); 

} 
 
En el if no funciona como una comparacion si no como una flecha =>, para que sea una comparacion se tiene que utilizar el >= por lo cual es un error sintactico.
 
let edad = 16; 

if (edad >=  18) { 

    console.log("Eres mayor de edad"); 

} else { 

    console.log("Eres menor de edad"); 
    
}