function comprobarFecha() {
    // Fecha introducida por teclado.
    var fecha = document.getElementById('fecha').value;
    // Patrón de la fecha, con inicio el 1 de enero de 1970, 
    // hasta 2999.
    var patron = /^(3[0-1]|2[0-9]|1[0-9]|0[1-9])\/(1[0-2]|0[1-9])\/(1[9][7-9][0-9]|2[0-9]{3})$/;
    var expReg = new RegExp(patron);
    if (fecha.match(expReg) && diasMesBisiestos(fecha)) {
        document.write("<h2>Fecha correcta!</h2>");
    } else {
        document.write("<h2>Error en Fecha!</h2>");
    }
}

function diasMesBisiestos(fecha) {
    // Divido la fecha para comprobar días del mes y años bisiestos.
    var fechaSplit = fecha.split("/");
    var dia = fechaSplit[0];
    var mes = fechaSplit[1];
    var anio = fechaSplit[2];
    var bisiesto = (anio % 4 === 0);
    // Días con 30 o menos días.
    if (mes == 04 || mes == 06 || mes == 09 || mes == 11) {
        if (dia > 30) {
            return false;
        }
        // 29 de febrero de los años bisiestos.
    } else if (mes == 2 && dia == 29 && bisiesto) {
        return true;
    } else {
        return false;
    }
}

function comprobarCp() {
    // Código postal introducido por teclado.
    var cp = document.getElementById('cp').value;
    // Patrón de los códigos postales. Desde 01000 a 52999.
    var patron = /^(0[1-9]|5[0-2]|[0-4][0-9])([0-9]{3})$/;
    var expReg = new RegExp(patron);
    if (cp.match(expReg) && ceroCp(cp)) {
        document.write("<h2>C.P. correcto!</h2>");
    } else {
        document.write("<h2>Error en C.P.!</h2>");
    }
}

function ceroCp(cp) {
    // Con esta función comprobamos que no haya tres ceros al final.
    // 08000 es false.
    // 08001 es true.
    var codigoPostal = cp.toString();
    if (codigoPostal.substr(2, 2) == "00" && codigoPostal.substr(4, 1) == "0") {
        return false;
    } else {
        return true;
    }
}