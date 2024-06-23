
/* 
    Desafíos - Oracle Next Education
*/

// CURSO: Lógica de programación: explorar funciones y listas

// desafio 04 - Listas

// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista() {
    lenguagesDeProgramacion.forEach(lenguaje => console.log(lenguaje));
};

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarListaInversa() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
};

// Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(lista) {
    let suma = lista.reduce((acc, num) => acc + num, 0);
    return suma / lista.length;
};

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarMayorYMenor(lista) {
    let max = Math.max(...lista);
    let min = Math.min(...lista);
    console.log(`Número más grande: ${max}, Número más pequeño: ${min}`);
}

// Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarLista(lista) {
    return lista.reduce((acc, num) => acc + num, 0);
}

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {

    let nuevaLista = [];
    for (let i = 0; i < lista1.length; i++) {
        nuevaLista.push(lista1[i] + lista2[i]);
    }
    return nuevaLista;
}

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoDeElementos(lista) {
    return lista.map(num => num * num);
}