function calcularIMC(altura, peso) {
    
    altura = altura / 100;
    
    
    var imc = peso / (altura * altura);
    
    return imc;
}


var altura = 175; 
var peso = 70; 
var imc = calcularIMC(altura, peso);
console.log("O IMC é: " + imc.toFixed(2));