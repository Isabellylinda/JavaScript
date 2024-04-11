function acrescentarPorcentagem(valor, porcentagem) {
    let valorAcrescido = valor + (valor * (porcentagem / 100));
    return valorAcrescido;
  }
  
  let valorOriginal = 100;
  let porcentagem = 34;
  let novoValor = acrescentarPorcentagem(valorOriginal, porcentagem);
  console.log(novoValor);