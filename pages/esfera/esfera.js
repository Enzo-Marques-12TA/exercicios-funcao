function areaEsfera(raio){
    return  (4/3) * 3.14159 * Math.pow(raio, 3)
}

let teste1 = areaEsfera(3)
let teste2 = areaEsfera(15)
let teste3 = areaEsfera(1523)

console.log(`VOLUME = ${teste1.toFixed(3)}`)
console.log(`VOLUME = ${teste2.toFixed(3)}`)
console.log(`VOLUME = ${teste3.toFixed(3)}`)

