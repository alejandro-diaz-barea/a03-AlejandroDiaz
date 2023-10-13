function calcular() {
    const expresion = document.getElementById("inputExpresion").value;
    try {
        const resultado = eval(expresion);
        document.getElementById("resultadoOutput").textContent = "Resultado: " + resultado;
    } catch (error) {
        document.getElementById("resultadoOutput").textContent = "Error en la expresión.";
    }
}
calcular()