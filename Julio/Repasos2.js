// 1. Crear un objeto persona con propiedades: nombre (string), edad (number) y hobbies (array de strings).

//Forma 1 de toda la vida

const person1 = {
    name: 'Benjamin',
    age: 22,
    hobbies: ['Videogames','Movies','Plants']
}

//Forma 2 usando new Object()

const person2 = new Object();
person2.name = 'Luisa'
person2.age = 22
person2.hobbies = ['Dance','Sing']

// Usando Clases

class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    
    greet = () => console.log(`Hola, soy ${this.name}`)
}

const person3 = new Person('Pepe', 43, ['Videogames','Sing']);

person3.greet()

// 2. Modificar la edad de un objeto persona y agregar una nueva propiedad ciudad (string).

person1.age = 23
person1.city = 'Santiago'

console.log(person1)

// Recordando principio de inmutabilidad
const updatedPerson = { ...person3, age:44, city: 'Valparaiso' }

console.log(updatedPerson)

// 3. Escribir una función que reciba una edad (number) y retorne un mensaje según el rango:
//     - Menor a 18: "Menor de edad"
//     - Entre 18 y 65: "Adulto"
//     - Mayor a 65: "Adulto mayor"

const verifyAge = (age) => {
    
    if (typeof age !== "number" || age <= 0) {
        return "Edad invalida"
    }
    
    if (age < 18) {
        return "Menor de edad"
    }
    else if (age <= 65) {
        return "Adulto"
    }
    else {
        return "Adulto Mayor"
    }
}

// 4. Crear una función que reciba un array de objetos y un nombre de propiedad (string) y
//    retorne un nuevo array con sólo los objetos que tienen esa propiedad definida y no vacía.

// 5. Usar fetch para traer datos de la API pública https://jsonplaceholder.typicode.com/todos
//    y mostrar en consola los títulos de los primeros 5 ítems.

// 6. Manejar errores usando try/catch al hacer la petición fetch y mostrar un mensaje de error en consola si falla.

// 7. Crear un objeto libro con propiedades título, autor y número de páginas. Luego modificar el número de páginas y agregar un año de publicación.

// 8. Escribir una función que reciba un array de números y retorne un nuevo array con sólo los números pares.

// 9. Crear una función que reciba un objeto usuario y una clave, y retorne true si la clave existe y su valor no es nulo o vacío, sino false.

// 10. Hacer una función async que consulte a https://jsonplaceholder.typicode.com/users,
//     y retorne un array con los nombres de usuario (username) de los usuarios recibidos.
