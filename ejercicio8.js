class Monedero {
    constructor(nombre, billetes5, billetes10, billetes20) {
        this.nombre = nombre;
        this.billetes5 = billetes5;
        this.billetes10 = billetes10;
        this.billetes20 = billetes20;
    }

    calcularTotal() {
        return (this.billetes5 * 5) + (this.billetes10 * 10) + (this.billetes20 * 20);
    }
}

function seleccionarMonedero(monederos) {
    let maxDinero = 0;
    let monederoSeleccionado = null;

    for (const monedero of monederos) {
        const dineroActual = monedero.calcularTotal();
        if (dineroActual > maxDinero) {
            maxDinero = dineroActual;
            monederoSeleccionado = monedero;
        } else if (dineroActual === maxDinero) {
            monederoSeleccionado = "Cualquiera";
        }
    }

    return monederoSeleccionado;
}

const monedero1 = new Monedero("Amigo1", 5, 3, 2);
const monedero2 = new Monedero("Amigo2", 2, 4, 1);
const monedero3 = new Monedero("Amigo3", 3, 1, 5);

const monederos = [monedero1, monedero2, monedero3];

const monederoMasDinero = seleccionarMonedero(monederos);
const resultadoElement = document.getElementById("resultado");

if (monederoMasDinero instanceof Monedero) {
    resultadoElement.textContent = "El monedero con más dinero es: " + monederoMasDinero.nombre;
} else {
    resultadoElement.textContent = "Varios monederos tienen la misma cantidad de dinero: " + monederoMasDinero;
}
