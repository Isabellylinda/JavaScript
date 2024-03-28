import input from'readline-sync';
let num1 = input.questionInt('Digite um numero: ')
let num2 = input.questionInt('Digite um numero: ')
let ope = input.question('Digite um Operador (+) (-) (x) (/ = divisao): ')

switch (ope) {
    case '+':
        console.log(`${num1} + ${num2} = ${num1+num2}`)
        break
    case '-':
        console.log(`${num1} - ${num2} = ${num1-num2}`)
        break
    case 'x':
        console. log(`${num1} x ${num2} = ${num1*num2}`)
        break 
    case '/':
        console. log(`${num1} / ${num2} = ${num1/num2}`)
        break

}