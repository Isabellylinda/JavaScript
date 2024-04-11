function calcularAreaDoCirculo(raio) {
    
    let area = Math.PI * Math.pow(raio, 2);
    return area;
  }
  
  let raioDoCirculo = 5;
  let areaDoCirculo = calcularAreaDoCirculo(raioDoCirculo);
  console.log("A área do círculo é: " + areaDoCirculo.toFixed(2));