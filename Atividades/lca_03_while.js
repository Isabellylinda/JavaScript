import rl, {questionInt} from 'readline-sync';

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativa;

do {
    tentativa = rl.questionInt("Tente adivinhar o numero (entre 1 e 100):");

    if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você adivinhou o numero correto.");
    } else if (tentativa < numeroAleatorio) {
        console.log("Tente um numero maior.");
    } else {
        console.log("Tente um numero menor.");
    }

} while (tentativa !== numeroAleatorio);