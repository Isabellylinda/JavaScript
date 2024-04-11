function validarSenha(senha) {
    if (senha.length < 8) {
        return false;
    }

    var temMaiuscula = /[A-Z]/.test(senha);

    var temMinuscula = /[a-z]/.test(senha);

    var temEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha);

    return temMaiuscula && temMinuscula && temEspecial;
}


var senha1 = "SenhaSegura123!";
var senha2 = "fraca123";
console.log("A senha 1 é válida? " + validarSenha(senha1)); 
console.log("A senha 2 é válida? " + validarSenha(senha2)); 