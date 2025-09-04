
/**  Definicion de la clase Armas */

class Armas {

    constructor(id, Modelo, tipo, precio, color) {

        this.id = id;
        this.Modelo = Modelo;
        this.tipo = tipo;
        this.precio = precio;
        this.color = color;
}
    mostrar_datos() {
        return "El arma es un/a ${this.Modelo}, de tipo ${this.tipo}, color ${this.color} y tiene un precio de $${this.precio}."
}
    getId() {
        return this.id;
}
    setId(nuevo_id) {
        this.id = nuevo_id;
}
    getModelo() {
        return this.Modelo;
}   
    setModelo(nuevo_Modelo) {
        this.Modelo = nuevo_Modelo;
}       
    getTipo() {
        return this.tipo;
}   
    setTipo(nuevo_tipo) {
        this.tipo = nuevo_tipo;
}   
    getPrecio() {
        return this.precio;
}   
    setPrecio(nuevo_precio) {
        this.precio = nuevo_precio;
}   
    getColor() {
        return this.color;
}   
    setColor(nuevo_color) {
        this.color = nuevo_color;
}
}

/**
    Definicion del arreglo de armas
 */

let arreglo_armas = new Array();

arreglo_armas.push(new Armas(1, "AK-47", "Asalto", 150000, "negro"));
arreglo_armas.push(new Armas(2, "M4A1", "Asalto", 140000, "coyote"));
arreglo_armas.push(new Armas(3, "Glock 17", "Pistola", 60000, "negro"));
arreglo_armas.push(new Armas(4, "Desert Eagle", "Pistola", 120000, "plateado"));
arreglo_armas.push(new Armas(5, "MP5", "Subfusil", 130000, "Tan"));
arreglo_armas.push(new Armas(6, "Uzi", "Subfusil", 110000, "gris oscuro"));

let respuesta = true;
while (respuesta != "Salir" && respuesta ) {

    respuesta = mostrarMenu();
}

function mostrarMenu() {
    let respuesta = prompt("Ingrese una opcion: \n 1. Mostrar todas las armas \n 2. Buscar arma por ID \n 3. Filtrar armas por tipo \n 4. Filtrar armas por precio \n 5. Salir");
    if (respuesta == "1") {

        alert("Las armas son: "+ mostrar_datos());
}else if (respuesta == "2") {
}
}

 return respuesta;
/**  Mostrar datos de las armas */

function mostrar_datos() {

    let datos ="";
    for (let i = 0; i < arreglo_armas.length; i++) {

        datos += "/n" + arreglo_armas[i].mostrar_datos();
}

return datos;
}

