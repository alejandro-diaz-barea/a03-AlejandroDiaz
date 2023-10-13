const colores = [
    { nombre: "Rojo", codigo: "red" },
    { nombre: "Azul", codigo: "blue" },
    { nombre: "Verde", codigo: "green" },
    { nombre: "Amarillo", codigo: "yellow" },
    { nombre: "Morado", codigo: "purple" },
    { nombre: "Naranja", codigo: "orange" },
    { nombre: "Rosa", codigo: "pink" },
    { nombre: "Marrón", codigo: "brown" },
    { nombre: "Cian", codigo: "cyan" },
    { nombre: "Magenta", codigo: "magenta" }
];

function mostrarColores() {
    const container = document.getElementById("container");
    colores.forEach(color => {
        const div = document.createElement("div");
        div.style.backgroundColor = color.codigo;
        div.className = "color-box";
        div.textContent = color.nombre;
        container.appendChild(div);
    });
}

mostrarColores();