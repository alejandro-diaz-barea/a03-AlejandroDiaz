// Implementar una función recursiva que reciba un parámetro n y repita n veces 
// el string “bauuuba”. Por ejemplo, si pasamos el parámetro 5, devolverá 
// “bauuuba bauuuba bauuuba bauuuba bauuuba”
let cadena = ""
let cadena2 = ""

cadena = prompt("Introduce la cadena")
cadena2 = cadena
num = parseInt(prompt("Intrudce el numero de veces"))


if (isNaN(num) || num <= 0 || cadena === "") {
    alert("No has introducido una cadena válida o un número mayor que 0.");
} else {
    recursiva(num);
}

function recursiva(n) {
    for (i=0; i<n; i++){
        cadena = cadena + " " + cadena2
    }
    alert(cadena)
}