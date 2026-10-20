function procesarDatos(datos, callback) {
    callback(dat);
}
 
procesarDatos([1,2,3], function(d) {
    console.log("Datos recibidos:", d);
});


En callback llama a la variable dat cuando debe ser datos.

function procesarDatos(datos, callback) {
    callback(datos);
}
 
procesarDatos([1,2,3], function(d) {
    console.log("Datos recibidos:", d);
});