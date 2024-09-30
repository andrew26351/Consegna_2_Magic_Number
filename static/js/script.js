function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function sanitize(input) {
    let sanitizedInput = parseInt(input)
    if (isNaN(sanitizedInput)) {
        return null
    } else {
        return sanitizedInput
    }
}


const max_vite = 5
let vite = 0

console.log("Benvenuto nel gioco INDOVINA IL NUMERO!")
console.log("Il gioco consinste nel indovinare un numero tra 0-99 che io penserò, hai 5 vite")
console.log("Incominciamo!")


const r = getRandomInt(100)
//console.log(r)


while(vite < max_vite){
    let num = prompt("Inserisci il numero (0-99)")
    num = sanitize(num)
    
    if (num === null) {
        console.log("Per favore, inserisci un numero valido.")
    } else if (num === r) {
        console.log("Bravo, hai vinto")
        break
    } else {
        vite++
        if (num < r) {
            console.log("Troppo piccolo")
        } else {
            console.log("Troppo grande")
        }
    }
}

if (vite === max_vite) {
    console.log("Hai esaurito le vite. Il numero era " + r)
}

