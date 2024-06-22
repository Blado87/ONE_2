/* 
    Desafíos - Oracle Next Education
*/

// CURSO: Lógica de programación: explorar funciones y listas

// desafio 01 - Interactuar con HTML.

// Desafíos

// Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.

// Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
document.querySelector('h1').textContent = "Hora del Desafío";

// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function mostrarMensaje() {
    console.log("El botón fue clicado");
};

// Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function preguntarCiudad() {
    let ciudad = prompt("Ingresa el nombre de una ciudad de Brasil:");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
};    

// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function mostrarAlerta() {
    alert("Yo amo JS");
}

// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function realizarSuma() {
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

    let suma = numero1 + numero2;
    alert(`El resultado de la suma es: ${suma}`)
}