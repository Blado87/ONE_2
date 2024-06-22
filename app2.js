/* 
    Desafíos - Oracle Next Education
*/

// CURSO: Lógica de programación: explorar funciones y listas

// desafio 02 - Funciones.

// Desafíos

// Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludar() {
    console.log("¡Hola, mundo!");
};

saludar();

// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludarNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
};

saludarNombre('jose');

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(numero) {
    return numero * 2;
};

dobleNumero(3);

// Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioNumeros(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
};

promedioNumeros(1, 2, 3);

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
};

numeroMayor(5, 7);

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadradoNumero(numero) {
    return numero * numero;
};

cuadradoNumero(8);
