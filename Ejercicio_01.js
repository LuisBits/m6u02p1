function comprobar() {
    // Array de letras del DNI.
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
                'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    // a) Variables que contendrán número y letra del DNI del usuario.
    var dni = document.getElementById('dni').value;
    var dniArray = dni.split("");
    var letra = dniArray.pop().toUpperCase();
    var numero = dniArray.join("");

    // b) Comprobamos si el número es menor que 0 o mayor que 99999999.
    //    En tal caso, mostramos error.
    if (numero < 0 || numero > 99999999) {
        document.write("<h2>El número introducido NO es válido!!</h2>");
    } else {
        // c) Si el número es válido, calculamos la letra correspondiente.
        var letraDni = letras[numero % 23];

        // d) Se compara con la letra introducida y se indica si es o no correcta.
        if (letra != letraDni) {
            document.write("<h2>La letra indicada NO es correcta!!</h2>");
        } else {
            document.write("<h2>El número y letra de DNI introducidos son correctos :)</h2>");
        }
    }
}