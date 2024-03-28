import input from 'readline-sync'

let alu = input.questionInt('Digite o numero de alunos na turma: ')
let cont = 1
let medtur= 0
while (alu >=cont){
    let not= input.questionInt('Digite a nota do Primeiro Bimestre: ')
    let not2= input.questionInt('Digite a nota do Segundo Bimestre: ')
    let not3= input.questionInt('Digite a nota do Terceiro Bimestre: ')
    let not4= input.questionInt('Digite a nota do Quarto Bimestre: ')
    let med= (not+not2+not3+not4)/4
    console.log(`a media do ${cont}º aluno é ${med.toFixed(2)}`)
    cont++;
    medtur+= med

}
console.log(`a media da turma é ${(medtur/alu).toFixed(2)}`)