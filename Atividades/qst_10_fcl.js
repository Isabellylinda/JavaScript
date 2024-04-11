function validarCPF(cpf) {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verificar se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verificar se todos os dígitos são iguais
    var cpfArray = cpf.split('');
    var isAllEqual = cpfArray.every(digit => digit === cpfArray[0]);
    if (isAllEqual) {
        return false;
    }

    
    var soma = 0;
    for (var i = 0; i < 9; i++) {
        soma += parseInt(cpfArray[i]) * (10 - i);
    }
    var resto = soma % 11;
    var digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

    
    if (parseInt(cpfArray[9]) !== digitoVerificador1) {
        return false;
    }

    
    soma = 0;
    for (var i = 0; i < 10; i++) {
        soma += parseInt(cpfArray[i]) * (11 - i);
    }
    resto = soma % 11;
    var digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

    
    if (parseInt(cpfArray[10]) !== digitoVerificador2) {
        return false;
    }

    
    return true;
}


var cpf1 = "529.982.247-25";
var cpf2 = "111.111.111-11";
console.log("CPF 1 é válido? " + validarCPF(cpf1)); 
console.log("CPF 2 é válido? " + validarCPF(cpf2)); 