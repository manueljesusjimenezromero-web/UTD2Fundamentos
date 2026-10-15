
    // Lote de transacciones que llega de la API (mezcla tipos de datos de forma incorrecta)
        let transacciones = ["100.50", "200.00", "ERROR_RECHAZADO", "50.25", "9999.99", "10.00"];
        let saldoTotal = 0;
        let error="";
        
        console.log("Iniciando auditoría de transacciones...");
        
        
        for (let i = 0; i < transacciones.length; i++) {
            let transaccion = transacciones[i];
        
        
            // Bug 1: Controlar valores corruptos
            if (transaccion === "ERROR_RECHAZADO") {
                console.log("Transacción corrupta saltada.");
                // Falta algo aquí para saltar a la siguiente vuelta...
                continue;
            }
        
        
            // Bug 2: Detener operaciones sospechosas (Alerta de fraude si supera 5000)
            if (transaccion > 5000) {
                console.log("¡Alerta de Fraude detectada! Cancelando proceso.");
                // Falta algo aquí para abortar el bucle inmediatamente...
                break;
            }
        
        
         
            
            
            
            
                
            
        }
        
            // Bug 3: Coerción de tipos oculta
        for (let i=0;i< transacciones.length; i++){
            if (transacciones[i] !== "ERROR_RECHAZADO" ) saldoTotal +=Number(transacciones[i]); 
        }
         for (let i=0;i< transacciones.length; i++){
            if (isNaN(transacciones[i])) {
                error=error+transacciones[i]+" ";
                
            }
                
            }
        
    console.log("Saldo total auditado: "+saldoTotal );
    console.log("Transacciones no Numericos");
    console.log(error)
