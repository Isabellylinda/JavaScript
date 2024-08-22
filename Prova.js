// Dupla: João Pedro Bento de Andrade / Isabelly Lopes Bispo

import input from 'readline-sync'

while (true) {
    let menu= input.questionInt('Escolha uma das figuras abaixo para saber a área!\n (1) Retângulo\n (2) Triângulo\n (3) Círculo\n (4) Sair\nResponda aqui: ')
    if (menu==4) {
        console.log('Programa Encerrado!')
        break
    }
    switch (menu) {
        case 1:
            function AreaRetangulo(Largura,Altura) {
                let area= Largura*Altura
                return area
            }

            let LarguraRetangulo= input.questionInt('Digite a Largura do Retângulo: ')
            let AlturaRetangulo= input.questionInt('Digite a Altura do Retângulo: ')

            if (AlturaRetangulo>0 & LarguraRetangulo>0) {
                let resultadoArea= AreaRetangulo(LarguraRetangulo, AlturaRetangulo)
                console.log(`A área do Retângulo é ${resultadoArea.toFixed(2)}\n`)
            } else{
                console.log('Digite a Altura e a Largura maior que 0!\n')
            }
            break

        case 2:
            
            function AreaTriangulo(Base, Altura) {
                let area= (Base*Altura)/2
                return area
            }

            let BaseTriangulo= input.questionInt('Digite a do Base Triangulo: ')
            let AlturaTriangulo= input.questionInt('Digite a Altura do Triângulo: ')
            if (BaseTriangulo>0 & AlturaTriangulo>0) {
                let resultadoArea2= AreaTriangulo(BaseTriangulo, AlturaTriangulo)
            console.log(`A área do Triângulo é ${resultadoArea2.toFixed(2)}\n`)
            } else{
                console.log('Digite o numero da base e da altura maior que 0!\n')
            }
            break

        case 3:
            function calcularAreaDoCirculo(raio) {
                let area = 3.1415 * Math.pow(raio, 2);
                return area;
              }
              
              let raioDoCirculo = input.questionInt('Digite o Raio do Círculo: ')
              if (raioDoCirculo>0) {
                let areaDoCirculo = calcularAreaDoCirculo(raioDoCirculo);
                console.log(`A área do círculo é: ${areaDoCirculo.toFixed(2)}\n`);
              } else{
                console.log('Digite um número maior que 0!\n')
              }

            break

        default:
            break;
    }



}