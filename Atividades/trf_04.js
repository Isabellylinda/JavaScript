import input from 'readline-sync'
let cate = input.question('Digite sua categoria: ')
let salario = input.question('Digite seu salario atual: ')
switch (cate) {
    case 'A':
        console.log(`Seu Salario Com o Aumento da Categoria agora è De ${(salario*1.05).toFixed(2)}`)
        break;
    case 'B':
        console.log(`Seu Salario Com o Aumento da Categoria agora è De ${(salario*1.10).toFixed(2)}`)
        break;
    case 'C':
        console.log(`Seu Salario Com o Aumento da Categoria agora è De ${(salario*1.10).toFixed(2)}`)
        break;
    case 'D':
        console.log(`Seu Salario Com o Aumento da Categoria agora è De ${(salario*1.10).toFixed(2)}`)
        break;
    
    default:
        console.log('Categoria Invalida')
        break



}