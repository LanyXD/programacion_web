/* codigo */
/*
console.log("hola");

if (1 == 1.0) {
    console.log("Iguales");
} else {
    console.log("No iguales");
}

let value = 1 === "1" ? "Iguales": "No iguales";
*/

/* Variables de entorno */
const PASSWORD = process.env.PASSWORD ? process.env.PASSWORD : null;
/* es lo mismo que un echo $CLASE en terminal*/

/* Funciones
function saludar(nombre |soporta hasta 3 parametros, si no, un objeto|) {
    return "Hola, " + nombre;
}


function test(a, b, c, d, e, f) {
    return a + b + c;
}

const variables = {
    a:3,
    b:2
}

*/

/* Estructuras de control */
/*
let array_number = [1, 2, 3, 4, 5, 6];

array_number.map(x => {
    console.log(x);
});

const person = {
    age: 14,
    name: Juanito,
    surname: "Perez"
};

const student = {
    ...person,
    id: 123,
    career: "Ingenieria"
};

console.log(person);
console.log(student);
*/

/* no se que esta haciendo */
const person = {
    age: 14,
    name: Juanito,
    surname: "Perez",
    grades: [1, 2, 3, 4],
    birth_place: {
        country: "Guatemala",
        state: "Quetzaltenango"
    },
    parents: {
        mother_name: "loremimpuxd",
        father_name: "loremimpusumxd"
    }
};
