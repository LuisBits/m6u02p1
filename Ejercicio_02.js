function ejercicio_02() {
    // Creamos el objeto con sus propiedades y método.
    function ProductosAlimenticios(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.imprimeDatos = function () {
            document.write("El código de '" + nombre + "' es " +
                codigo + " y su precio es de " + precio + "€<br><br>");
        }
    }
    // Creamos 3 instancias del objeto.
    var producto_01 = new ProductosAlimenticios(1111, "Mayonesa", 1.99);
    var producto_02 = new ProductosAlimenticios(2222, "Pan Molde", 1.59);
    var producto_03 = new ProductosAlimenticios(3333, "Helado Fresa", 3.25);
    // Y las guardamos en 1 array.
    var productos = [producto_01, producto_02, producto_03];
    // Bucle for que usa el método para imprimir los datos.
    for (var i = 0; i < productos.length; i++) {
        productos[i].imprimeDatos();
    }
}