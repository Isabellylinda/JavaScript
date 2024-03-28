
import rl from 'readline-sync'

let tabuada = rl.questionInt("Informe um numero: ");{
let numero = tabuada;
let cont = 0;
    
    console.log("Tabuada de multiplicação - Nº " + numero);
    
    while (cont <= 10) {
        let resultado = numero * cont;
        console.log(`${numero} x ${cont} = ${resultado}`);
        cont++;
    }
}
