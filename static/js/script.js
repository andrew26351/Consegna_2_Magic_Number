function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function sanitize(input) {
    let sanitizedInput = parseInt(input);
    if (isNaN(sanitizedInput)) {
        return null;
    } else {
        return sanitizedInput;
    }
}

const max_vite = 5;
let vite = 0;
const r = getRandomInt(100);

let userField = document.querySelector("#guess");
let btn = document.querySelector("#guessBtn");

function handleClick() {
    let num = sanitize(userField.value);

    if (vite < max_vite) {
        if (num === null) {
            document.querySelector('#output').innerHTML = "Per favore, inserisci un numero valido.";
        } else if (num === r) {
            document.querySelector('#output').innerHTML = "Bravo, hai vinto!";
        } else {
            vite++;
            if (num < r) {
                document.querySelector('#output').innerHTML = "Troppo piccolo.";
            } else {
                document.querySelector('#output').innerHTML = "Troppo grande.";
            }
        }
    }

    if (vite === max_vite) {
        document.querySelector('#output').innerHTML = "Hai esaurito le vite. Il numero era"  + r + ".";
    }
}

btn.addEventListener("click", handleClick);
