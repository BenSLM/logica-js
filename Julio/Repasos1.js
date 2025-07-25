// 1. Filtrar elementos mayores a 10 en un array.
const arrayNumbers = [1,2,3,4,5,6,50,10,30,1000, -10, 29, 43, -24, 100, -110, 64]

const filteredNumbers = arrayNumbers.filter((number) => number > 10).sort((a,b) => a - b);

console.log(filteredNumbers);

// 2. Crear un nuevo array con los nombres en mayúsculas.
// Ejemplo: ['juan', 'ana', 'pedro'] => ['JUAN', 'ANA', 'PEDRO']

const arrayNames = ['juan', 'ana', 'pedro']

const uppercaseNames = arrayNames.map((name) => name.toUpperCase())

console.log(uppercaseNames)

// 3. Sumar todos los valores de un array usando .reduce()
// Ejemplo: [1, 2, 3, 4] => 10

const sumArray = arrayNumbers.reduce((acummulator, currentValue) => acummulator + currentValue, 0)

console.log(sumArray)

// 4. Encontrar a las personas con id mayor a 2. Imprimir su nombre y edad

const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 24 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Diana', age: 29 },
  { id: 5, name: 'Jorge', age: 20 }
];

const filteredUsers = users
  .filter((user) => user.id > 3)
  .forEach((user) => console.log(`Nombre: ${user.name} - Edad: ${user.age}`))

// 5. Ordenar un array de números de menor a mayor.

console.log(arrayNumbers.sort((a, b) => a-b))

// 6. Encontrar usuario por ID
// Array de usuarios con id y name
// Crear una función que reciba un id y devuelva el usuario o null si no existe

const users2 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const findUser = (id) => {
  const foundUser = users2.find((person) => person.id === id)
  return foundUser ? `Usuario con ese ID: ${foundUser.name}` : null
}

console.log(findUser(4))

//Input: id
//Output: user || null

// 7. Agrupar productos por categoría
// Array de productos con id, name y category
// Crear una función que agrupe los productos por categoría y retorne un objeto
// donde cada clave sea una categoría y su valor un array con los productos de esa categoría

const products = [
  { id: 1, name: 'Laptop', category: 'Tech' },
  { id: 2, name: 'Headphones', category: 'Tech' },
  { id: 3, name: 'Table', category: 'Furniture' },
  { id: 4, name: 'Chair', category: 'Furniture' },
  { id: 5, name: 'Cellphone', category: 'Tech' },
   {id: 6, name: 'Football Ball', category: 'Sports' }
];

const groupByCategory = (productsArray) => {
                            //acumulador,      valor actual
  return productsArray.reduce((groupedProducts, product) => {
    
    const { category } = product

    //Si la categoria aun no existe como clave en el objeto, se crea.
    if (!groupedProducts[category]) {
      groupedProducts[category] = []
    }

    groupedProducts[category].push(product)
    
    return groupedProducts
  }, {})
}

const productsByCategory = groupByCategory(products);
console.log(productsByCategory);

//input: no tiene input
//output: {Tech:[{ id: 1, name: 'Laptop', category: 'Tech' },...], Furniture:[{ id: 3, name: 'Table', category: 'Furniture' }]}

// 8. Contar ocurrencias de nombres en un array
// Array de strings con nombres repetidos
// Crear una función que devuelva un objeto con la cantidad de veces que aparece cada nombre

const names = ['Ana', 'Luis', 'Ana', 'Pedro', 'Luis', 'Ana'];

const totalNames = (arrayNames) => {
  
  return arrayNames.reduce((totalNames, currentName) => {
    if (totalNames[currentName]) {
      totalNames[currentName] += 1;
    }
    else {
      totalNames[currentName] = 1;
    }
    return totalNames
  },{}) 
}

console.log(totalNames(names))

// input: array con nombres
// output: { Ana: 3,Luis: 2,Pedro: 1 }

// 9. Limpiar array de objetos eliminando los que tengan campos vacíos o nulos
// Array de objetos con id y name
// Crear una función que filtre y retorne sólo los objetos cuyo name no sea null, undefined o cadena vacía

const items = [
  { id: 1, name: 'John' },
  { id: 2, name: '' },
  { id: 3, name: null },
  { id: 4, name: 'Sofia' }
];

const clean = (arrayItems) => {
  return arrayItems.filter((item) => (item.name !== null && item.name !== undefined && item.name !== ''))
}

// 10. Obtener nombres de usuarios mayores de edad
// Array de personas con name y age
// Crear una función que retorne un array sólo con los nombres de las personas con edad >= 18

const people = [
  { username: 'Pepe', age: 16 },
  { username: 'Laura', age: 21 },
  { username: 'Thomas', age: 18 },
  { username: 'Nico', age: 15 }
];

const isAdult = (arrayPeople) => {
   const filteredArray = arrayPeople.filter((person) => person.age >= 18)
   const mappedArray = filteredArray.map(({username}) => username)
   return mappedArray
 }

const isAdultCompact = (arrayPeople) => arrayPeople
  .filter(person => person.age >= 18)
  .map(({username}) => username)

console.log(isAdultCompact(people))

// input: array de personas
// output: retorna array con personas >= 18