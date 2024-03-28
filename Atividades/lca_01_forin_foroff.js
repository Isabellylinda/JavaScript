console.log("\t--- Exercício 01 ---")
// Definir um objeto com algumas propriedades
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
