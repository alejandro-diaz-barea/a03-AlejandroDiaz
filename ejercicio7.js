class CaesarCipher {
    constructor(shift) {
        this.shift = shift;
    }

    codificar(texto) {
        const textoCodificado = this.transformarTexto(texto, this.shift);
        alert("Texto Codificado: " + textoCodificado);
    }

    decodificar(texto) {
        const textoDecodificado = this.transformarTexto(texto, -this.shift);
        alert("Texto Decodificado: " + textoDecodificado);
    }

    transformarTexto(texto, shift) {
        return texto
            .toUpperCase()
            .split('')
            .map(caracter => {
                if (caracter >= 'A' && caracter <= 'Z') {
                    const codigo = caracter.charCodeAt(0) - 'A'.charCodeAt(0);
                    const nuevoCodigo = (codigo + shift + 26) % 26;
                    return String.fromCharCode('A'.charCodeAt(0) + nuevoCodigo);
                }
                return caracter;
            })
            .join('');
    }
}

// Ejemplo de uso:
const cifrador = new CaesarCipher(3); // Desplazamiento de 3 posiciones
const textoOriginal = prompt("Ingresa el texto a codificar:");
cifrador.codificar(textoOriginal);
