//Los objetos son las opciones elejidas por el usuario. Los atributos de cada objeto son la opción que haya elejido la maquina. Los valores de los atributos son el resultado del juego.

const userChoices = [
    stone  = {
        stone: 'Empataste',
        paper: 'Perdiste',
        scissors: 'Ganaste',
        lizard: 'Perdiste',
        Spock: 'Ganaste'
    },  

    paper = {
        stone: 'Ganaste',
        paper: 'Empataste',
        scissors: 'lose',
        lizard: 'Perdiste',
        Spock: 'Ganaste'
        
    },
    
    scissors = {
        stone: 'Perdiste',
        paper: 'Ganaste',
        scissors: 'Empataste',
        lizard: 'Gasnaste',
        Spock: 'Perdiste' 
    },

    lizard = {
        stone: 'Perdiste',
        paper: 'Ganaste',
        scissors: 'Perdiste',
        lizard: 'Empataste',
        Spock: 'Ganaste' 
    },

    Spock = {
        stone: 'Ganaste',
        paper: 'Perdiste',
        scissors: 'Ganaste',
        lizard: 'Perdiste',
        Spock: 'Empataste' 
    }
    
]

//Opciones del juego

let optionsBasic = ['stone', 'paper', 'scissors', 'lizard', 'Spock']; //Arreglo de objetos

//Obtener opción de usuario cuando se elije juego básico. Devuelve un número entre 0 y 2.
function getUserOptionBasic(){
    let userOption;
    let noValid;
    do{
        userOption = parseInt(prompt("Ingresa un número que corresponda a la opción que deseas. Elige 0 para Piedra, 1 para Papel y 2 para tijera"));
        noValid =  isNaN(userOption) || userOption < 0 || userOption > 4;
        if(noValid){
            alert("Número no válido")
        }

    } while(noValid)

    return userOption;
}

//Obtener opción de maquina. 
function getRandom(myArray) {
    let machineOption = myArray[Math.floor(Math.random()*5)]; //Formula para tener números aleatorios entre dos cifras, incluyendo ambos extremos Math.floor(Math.random() * (max - min + 1) + min);
    return machineOption
}

function getWinnerBasic(userOption, machineOption){
    console.log(userChoices[userOption][machineOption])
}

userOption = getUserOptionBasic()
console.log("Tu elegiste: " + optionsBasic[userOption])
let machineOption = getRandom(optionsBasic);
console.log("La maquina eligió: " + machineOption)
getWinnerBasic(userOption, machineOption)