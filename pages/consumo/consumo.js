function consumo(distanciaPercorrida, combustivelGasto){
    return distanciaPercorrida / combustivelGasto
}

let consumoMedio1 = consumo(500, 35.0)
let consumoMedio2 = consumo(2254, 124.4)
let consumoMedio3 = consumo(4554, 464.6)


console.log(` ${consumoMedio1.toFixed(3)} KM/L`)
console.log(` ${consumoMedio2.toFixed(3)} KM/L`)
console.log(` ${consumoMedio3.toFixed(3)} KM/L`)