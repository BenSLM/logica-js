// 1. Crear un objeto persona con propiedades: nombre (string), edad (number) y hobbies (array de strings).

//Forma 1 de toda la vida

const person1 = {
  name: "Benjamin",
  age: 22,
  hobbies: ["Videogames", "Movies", "Plants"],
};

//Forma 2 usando new Object()

const person2 = new Object();
person2.name = "Luisa";
person2.age = 22;
person2.hobbies = ["Dance", "Sing"];

// Usando Clases

class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  greet = () => console.log(`Hola, soy ${this.name}`);
}

const person3 = new Person("Pepe", 43, ["Videogames", "Sing"]);

person3.greet();

// 2. Modificar la edad de un objeto persona y agregar una nueva propiedad ciudad (string).

person1.age = 23;
person1.city = "Santiago";

console.log(person1);

// Recordando principio de inmutabilidad
const updatedPerson = { ...person3, age: 44, city: "Valparaiso" };

console.log(updatedPerson);

// 3. Escribir una función que reciba una edad (number) y retorne un mensaje según el rango:
//     - Menor a 18: "Menor de edad"
//     - Entre 18 y 65: "Adulto"
//     - Mayor a 65: "Adulto mayor"

const verifyAge = (age) => {
  if (typeof age !== "number" || age <= 0) {
    return "Edad invalida";
  }

  if (age < 18) {
    return "Menor de edad";
  } else if (age <= 65) {
    return "Adulto";
  } else {
    return "Adulto Mayor";
  }
};

// 4. Crear una función que reciba un array de objetos y un nombre de propiedad (string) y
//    retorne un nuevo array con sólo los objetos que tienen esa propiedad definida y no vacía.

const items = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "", price: 500 },
  { id: 3, price: 200 },
  { id: 4, name: "Chair", price: null },
  { id: 5, name: null },
];

const definedProperty = (arrayItems, property) =>
  arrayItems.filter(
    (item) =>
      item[property] !== null &&
      item[property] !== undefined &&
      item[property] !== ""
  );

console.log("==================");
console.log(definedProperty(items, "price"));

// 5. Crear una clase libro con propiedades título, autor y número de páginas.
//    Luego modificar el número de páginas y agregar un año de publicación.

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  get info() {
    return `Titulo: ${this.title}, Autor:${this.author}`;
  }

  updateBook(updates) {
    //Haciendo referencia al objeto en si
    const newBook = new Book(this.title, this.author, this.pages);

    //Iterando sobre cada key en el objeto que le pasaremos como parametro
    for (const key in updates) {
      newBook[key] = updates[key];
    }

    return newBook;
  }
}

const originalBook = new Book("The Final Empire", "Brandon Sanderson", 601);

const updatedBook = originalBook.updateBook({ pages: 630, year: 2006 });

console.log(originalBook);
console.log(updatedBook);

// 6. Escribir una función que reciba un array de números y
//    retorne un nuevo array con sólo los números pares.

const numbers = [3, 8, 12, 5, 7, 10, 2, 19, 6, 13];

const evenNumbers = (arrayNumbers) =>
  arrayNumbers.filter((number) => number % 2 === 0).sort((a, b) => a - b);

console.log(evenNumbers(numbers));

// 7. Crear una función que reciba un objeto usuario y una clave,
//    y retorne true si la clave existe y su valor no es nulo o vacío, sino false.

const user = {
  id: 1,
  name: "Benja",
  email: "benja@example.com",
  phone: null,
  address: "",
};

const confirmKeys = (user, key) =>
  user[key] !== null && user[key] !== "" && user[key] !== undefined;

// 8. Hacer una función async que consulte a https://jsonplaceholder.typicode.com/users,
//    y retorne un array con los nombres de usuario (username) de los usuarios recibidos.

// Usando .then para legacy por ejemplo
function getUsersOld() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => console.log(users))
    .catch((error) => console.log("Error al obtener usuarios", error));
}

// Usando arrow functions y async await
const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log("Error al obtener usuarios", error);
  }
};


// 9. Usar fetch para traer datos de la API pública https://jsonplaceholder.typicode.com/todos
//    y mostrar en consola los títulos de los primeros 5 ítems.

const firstFiveTasks = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos"); 
        const data = await response.json();
        // console.log(data[0]['title'])

        data.slice(0,5).forEach((element, index) => console.log(`Tarea ${index + 1} Por hacer: ${element.title}`));

    } catch (error) {
        console.log("Error al obtener To Dos", error);
    }
}

firstFiveTasks()


// 10. Crear una función fetchItems(limit) que reciba cuántos ítems mostrar
//     desde la API y muestre sólo esa cantidad de títulos.

// function fetchItems(limit) {
//     // Tu código aquí
// }

// 11. Validar que el parámetro de la función anterior sea un número mayor que 0
//     y mostrar un mensaje si es inválido.

// function fetchItems(limit) {
//     // Tu código aquí
// }

// 12. Separar responsabilidades: una función fetchTodos() que traiga los datos,
//     y otra showTitles(array, limit) que los muestre.

// async function fetchTodos() {
//     // Tu código aquí
// }

// function showTitles(array, limit) {
//     // Tu código aquí
// }

// 13. Usar una variable global `cachedTodos` para guardar los datos una vez descargados,
//     y evitar volver a hacer fetch si ya están disponibles.

// let cachedTodos = [];

// async function fetchTodos() {
//     // Tu código aquí
// }

// 14. Agregar un parámetro `force` a fetchTodos() para forzar recarga de datos
//     incluso si ya hay datos en caché.

// async function fetchTodos(force = false) {
//     // Tu código aquí
// }

// 15. Crear una función showCompletedTitles() que filtre y muestre
//     sólo los títulos de tareas completadas (completed: true)

// async function showCompletedTitles() {
//     // Tu código aquí
// }

// 16. Crear una función getTitles({ limit, completedOnly, force })
//     que combine todo lo anterior en una sola función con opciones personalizadas.

// async function getTitles({ limit = 5, completedOnly = false, force = false }) {
//     // Tu código aquí
// }