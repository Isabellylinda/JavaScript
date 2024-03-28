class Imovel{
    quartos;
    tipo;
    endereco;
    exibirInformacoes() {
        return` È um(s) ${this.tipo} com ${this.quartos} quartos no ${this.endereco}`
    }

}
const Casa= new Imovel();
Casa.quartos = 4
Casa.tipo = "Casa"
Casa.endereco = "Rua da Amizade, 789 - Bairro Alegre"
Casa.exibirInformacoes()
console.log(Casa.exibirInformacoes)

const Apartamento = new Imovel();
Apartamento.quartos = 2
Apartamento.tipo = "Apartamento"
Apartamento.endereco = "Avenida da Paz, 123 - Centro"
Apartamento.exibirInformacoes()
console.log(Apartamento.exibirInformacoes())


