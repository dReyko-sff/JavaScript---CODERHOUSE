//** arreglos  **//

let data = ["perro", 2, "gato", 4, true, 6, false, 8, "iguana", 10, "tigre"];

let no_numbers = new Array();
let sum = 0;

for (let i=0; i<data.length; i++){

if (typeof data[i] === "number"){

    sum += data[i];

} else {
    no_numbers.push(data[i]);
    }
}

console.log("el contenido del arreglo es: " + no_numbers);
console.log("la suma de los números es: " + sum);