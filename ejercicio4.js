// Clase base Persona
class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    getInfo() {
        alert(`Nombre: ${this.nombre}\nEdad: ${this.edad}\nGénero: ${this.genero}`);
    }
}

// Clase Estudiante que hereda de Persona
class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    matriculado() {
        alert(`${this.nombre} ha sido matriculado en el curso ${this.curso}, grupo ${this.grupo}.`);
    }
}

// Clase Profesor que hereda de Persona
class Profesor extends Persona {
    constructor(nombre, edad, genero, modulo, nivel) {
        super(nombre, edad, genero);
        this.modulo = modulo;
        this.nivel = nivel;
    }

    imparte() {
        alert(`${this.nombre} imparte el módulo ${this.modulo} de nivel ${this.nivel}.`);
    }
}

// Crear objetos y casos de prueba
const persona1 = new Persona("Ana", 30, "Femenino");
alert("Información de Persona:\n");
persona1.getInfo();

const estudiante1 = new Estudiante("Juan", 20, "Masculino", "Matemáticas", "A");
alert("\nInformación de Estudiante:\n");
estudiante1.getInfo();
estudiante1.matriculado();

const profesor1 = new Profesor("María", 35, "Femenino", "Física", "Avanzado");
alert("\nInformación de Profesor:\n");
profesor1.getInfo();
profesor1.imparte();
