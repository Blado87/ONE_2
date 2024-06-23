/* 
    Desafíos - Oracle Next Education
*/

// CURSO: Lógica de programación: explorar funciones y listas

// desafio 02 - Funciones.

// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
};

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    return numero * calcularFactorial(numero - 1);
};

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresReales(dolares) {
    const cotizacionDolar = 4.80;
    return dolares * cotizacionDolar;
};

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaPerimetroRectangular(altura, anchura) {
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    console.log(`Área: ${area}, Perímetro: ${perimetro}`);
};

calcularAreaPerimetroRectangular(3, 4);

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaYPerimetroCircular(radio) {
    const pi = 3.14;
    const area = pi * radio * radio;
    const perimetro = 2 * pi * radio;
    console.log(`Área: ${area}, Perímetro: ${perimetro}`);
};

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function mostrarTablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
};
