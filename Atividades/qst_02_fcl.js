function verificar(num) {
    if (num % 2 === 0) {
      return "O número é par.";
    } else {
      return "O número é ímpar.";
    }
  }
  
  let num = 8;
  let resultado = verificar(num);
  console.log(resultado);