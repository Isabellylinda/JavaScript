function calcularValorComDesconto(valorOriginal, percentualDesconto) {
    
    let valorDescontado = valorOriginal - (valorOriginal * (percentualDesconto / 100));
    return valorDescontado;
  }
  
  let valorProduto1 = 50;
  let descontoProduto1 = 10;
  let valorFinalProduto1 = calcularValorComDesconto(valorProduto1, descontoProduto1);
  console.log("Valor final do Produto 1: " + valorFinalProduto1);
  
  let valorProduto2 = 80;
  let descontoProduto2 = 20;
  let valorFinalProduto2 = calcularValorComDesconto(valorProduto2, descontoProduto2);
  console.log("Valor final do Produto 2: " + valorFinalProduto2);
  
  let valorProduto3 = 120;
  let descontoProduto3 = 15;
  let valorFinalProduto3 = calcularValorComDesconto(valorProduto3, descontoProduto3);
  console.log("Valor final do Produto 3: " + valorFinalProduto3);