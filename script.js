//Los objetos son las opciones elejidas por el usuario. Los atributos de cada objeto son la opción que haya elejido la maquina. Los valores de los atributos son el resultado del juego.

const userChoices = {
    stone: {
        stone: 'Empataste',
        paper: 'Perdiste',
        scissors: 'Ganaste',
        lizard: 'Ganaste',
        spock: 'Perdiste'
    },

    paper: {
        stone: 'Ganaste',
        paper: 'Empataste',
        scissors: 'Perdiste',
        lizard: 'Perdiste',
        spock: 'Ganaste'

    },

    scissors: {
        stone: 'Perdiste',
        paper: 'Ganaste',
        scissors: 'Empataste',
        lizard: 'Gasnaste',
        spock: 'Perdiste'
    },

    lizard: {
        stone: 'Perdiste',
        paper: 'Ganaste',
        scissors: 'Perdiste',
        lizard: 'Empataste',
        spock: 'Ganaste'
    },

    spock: {
        stone: 'Ganaste',
        paper: 'Perdiste',
        scissors: 'Ganaste',
        lizard: 'Perdiste',
        spock: 'Empataste'
    }

}

let translation = { stone: "piedra", paper: "papel", scissors: "tijeras", lizard: "lagartija", spock: "Spock" }


//Obtener opción de usuario cuando se elije juego básico. Devuelve un número entre 0 y 2.
function getUserOptionBasic() {
    let userOption;
    let noValid;
    do {
        userOption = parseInt(prompt("Ingresa un número que corresponda a la opción que deseas. Elige 0 para Piedra, 1 para Papel, 2 para tijera, 3 para lagartija y 4 para Spock"));
        noValid = isNaN(userOption) || userOption < 0 || userOption > 4;
        if (noValid) {
            alert("Número no válido")
        }

    } while (noValid)

    return userOption;
}

//Obtener opción de maquina. 
function getRandom(myArray) {
    let machineOption = myArray[Math.floor(Math.random() * 5)]; //Formula para tener números aleatorios entre dos cifras, incluyendo ambos extremos Math.floor(Math.random() * (max - min + 1) + min);
    return machineOption
}

function getWinnerBasic(userOption, machineOption) {
    return userChoices[userOption][machineOption];
}

let userOptionId = getUserOptionBasic() //Numero
let userOption = Object.keys(userChoices)[userOptionId]
let machineOption = getRandom(Object.keys(userChoices));
const printUserOption = `<div>Tu elegiste: ${translation[userOption]}.</div>`;
const printMahcineOption = `<div>La máquina eligió: ${translation[machineOption]}.</div>`;

const body = document.getElementById("body");
body.innerHTML += printUserOption;
body.innerHTML += printMahcineOption;
let result = `<div>Resultado: ${getWinnerBasic(userOption, machineOption)}.</div>`;
body.innerHTML += result;