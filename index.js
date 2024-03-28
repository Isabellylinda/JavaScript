import entradaDados from 'readline-sync';

//let nome = entradaDados.question('Digite seu nome: ')
//console.log(`Olá, ${nome}.`);

let x = entradaDados.questionInt('X: ');
let y = entradaDados.questionInt('Y: ');
console.log(`Total: ${x+y}`);

//if e else
let idade = 15;
if(idade >= 18){
    console.log("Maior de idade");
}
else{
    console.log("Menor de idade")
}

//so if
if(idade>= 18) console.log("Maior de idade");
(idade >= 18) && console.log("Maior de idade"); // so if

let mensagem = idade >= 18? "Maior de idade" : "Menor de idade" // so if

