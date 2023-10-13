// Escribir un script que simule el lanzamiento de 2 dados:
// - Utiliza la función Math.random() para obtener números aleatorios 
// entre 1 y 6 para cada uno de los lanzamientos de los dados
// - Luego, suma el valor de los 2 dados y almacena su resultado
// - Ahora, haz 36.000 lanzamientos
// - Por último, muestra por pantalla el número de veces que ha salido cada resultado

let dado1 = Math.floor(Math.random() * 6) + 1;

let dado2 = Math.floor(Math.random() * 6) + 1;

let suma = dado1 + dado2

let uno = 0;
let dos = 0;
let tres = 0;
let cuatro = 0;
let cinco = 0;
let seis = 0;
let siete = 0;
let ocho = 0;
let nueve = 0;
let diez = 0;
let once = 0;
let doce = 0;



for (i = 0; i<36000;i++){
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;
    suma = dado1 + dado2
    switch (suma) {
        case 1:
            uno++;
            break;
        case 2:
            dos++;
            break;
        case 3:
            tres++;
            break;
        case 4:
            cuatro++;
            break;
        case 5:
            cinco++;
            break;
        case 6:
            seis++;
            break;
        case 7:
            siete++;
            break;
        case 8:
            ocho++;
            break;
        case 9:
            nueve++;
            break;
        case 10:
            diez++;
            break;
        case 11:
            once++;
            break;
        case 12:
            doce++;
            break;
        default:
            // Manejar el caso por defecto si es necesario
            break;
    }
}

alert(`El 1 se repite ${uno} veces
El 2 se repite ${dos} veces
El 3 se repite ${tres} veces
El 4 se repite ${cuatro} veces
El 5 se repite ${cinco} veces
El 6 se repite ${seis} veces
El 7 se repite ${siete} veces
El 8 se repite ${ocho} veces
El 9 se repite ${nueve} veces
El 10 se repite ${diez} veces
El 11 se repite ${once} veces
El 12 se repite ${doce} veces`);
