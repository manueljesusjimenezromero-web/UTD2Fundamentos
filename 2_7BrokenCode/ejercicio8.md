
<!DOCTYPE html>
<html lang="es">
<body>
  <button id="miBoton">Click me</button>
 
  <script>
    const btn = document.getElementById("miBoton");
    btn.addEventListener("click", function() {
      let msg = "Hola mundo";
      console.log(msj);
    });
  </script>
</body>
</html>

El error esta en el console.log(msj) donde la variable no esta correctamente escrita asi que hay que corregirla.

<!DOCTYPE html>
<html lang="es">
<body>
  <button id="miBoton">Click me</button>
 
  <script>
    const btn = document.getElementById("miBoton");
    btn.addEventListener("click", function() {
      let msg = "Hola mundo";
      console.log(msg);
    });
  </script>
</body>
</html>