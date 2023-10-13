let matriz = [
    [],
    [3,6,8],
    [7,1]
]


let matrizPlana = []

for (i=0;i<matriz.length;i++){
    for(j = 0; j<matriz[i].length;j++){
        matrizPlana.push(matriz[i][j])
    }
}

let matrizPlanaOrdenada = []

numeroPequeño = ""
while (  matrizPlana.length>0){
    numeroPequeño = Math.min(...matrizPlana)
    matrizPlanaOrdenada.push(numeroPequeño)
    if( matrizPlana.indexOf(numeroPequeño) !== -1){
        matrizPlana.splice(matrizPlana.indexOf(numeroPequeño), 1)
    }
}

alert(matrizPlanaOrdenada)