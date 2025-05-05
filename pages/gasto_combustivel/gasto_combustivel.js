function gastoCombustivel(tempoGasto, velocidadeMedia){
    return (tempoGasto * velocidadeMedia) / 12
}

let gasto1 = gastoCombustivel(10, 85)
let gasto2 = gastoCombustivel(2, 92)
let gasto3 = gastoCombustivel(22, 67)

console.log(` O gasto foi de: ${gasto1.toFixed(3)}`)
console.log(` O gasto foi de: ${gasto2.toFixed(3)}`)
console.log(` O gasto foi de: ${gasto3.toFixed(3)}`)