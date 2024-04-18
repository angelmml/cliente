// Importamos la función sumar del módulo funciones.js
import { sumar } from './funciones.js';

// Pedimos al usuario dos números
let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));

// Llamamos a la función sumar e imprimimos el resultado
let resultado = sumar(numero1, numero2);
console.log("La suma de", numero1, "y", numero2, "es:", resultado);
