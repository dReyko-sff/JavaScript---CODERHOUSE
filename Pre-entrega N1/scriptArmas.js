
/**  Definicion de la clase y modelaje de los objetos Armas */

class Arma {

    constructor(id, Modelo, tipo, precio, color) {

        this.id = id;
        this.Modelo = Modelo;
        this.tipo = tipo;
        this.precio = precio;
        this.color = color;
}
    mostrar_datos() {
        /*return `El arma es un/a ${this.Modelo}, de tipo ${this.tipo}, color ${this.color} y tiene un precio de $${this.precio}. \n`;*/
        return "#" + this.id + " - " + " El arma es un/a " + this.Modelo + " , de tipo " + this.tipo + " , Color: " + this.color + " y tiene un precio de $" + this.precio;
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

arreglo_armas.push(new Arma(1, "AK-47", "Asalto", 150000, "negro"));
arreglo_armas.push(new Arma(2, "M4A1", "Asalto", 140000, "coyote"));
arreglo_armas.push(new Arma(3, "Glock 17", "Pistola", 60000, "negro"));
arreglo_armas.push(new Arma(4, "Desert Eagle", "Pistola", 120000, "plateado"));
arreglo_armas.push(new Arma(5, "MP5", "Subfusil", 130000, "Tan"));
arreglo_armas.push(new Arma(6, "Uzi", "Subfusil", 110000, "gris oscuro"));

let respuesta = true;
while (respuesta != "salir" && respuesta ) {

    respuesta = mostrarMenu();
}

function mostrarMenu() {
    let respuesta = prompt("Ingrese una opcion: \n 1. Mostrar todas las armas \n 2. Actualizar nuevo Precio \n 3. Escribe salir para cerrar el Menu");
    if (respuesta == "1") {

        alert("Las armas son: "+ mostrar_datos());
}else if (respuesta == "2") {

    actualizarPrecio();

}
    return respuesta;
}

    function actualizarPrecio() {

        let arma = prompt("Ingrese el ID del arma a actualizar: \n" + mostrar_datos());
        let indice = buscarArma(arma);
        if (indice >= 0 ) {

            let nuevo_precio = parseInt(prompt("Ingrese un nuevo Precio"));
            arreglo_armas[indice].setPrecio(nuevo_precio);
            alert("Ahora la Lista es: \n" + mostrar_datos());

        }else{
            alert ("No ingresaste un Id de Arma existente");
        }
    }


    function buscarArma(id) {

        let i = 0;
        while (i < arreglo_armas.length) {

            if (arreglo_armas[i].getId() == id) {
                return i ;
        }
        i++;

    }

    return -1;
    }

/**  Mostrar datos de las armas */

function mostrar_datos() {

    let datos ="";
    for (let i = 0; i < arreglo_armas.length; i++) {

        datos += "\n" + arreglo_armas[i].mostrar_datos();
}

return datos;
}

