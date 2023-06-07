class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar() {
        console.log(`O ${this.modelo} está acelerando!`);
    }
}

let meuCarro = new Carro("Ford", "Mustang", 2022);

console.log(meuCarro.marca);
console.log(meuCarro.modelo);
console.log(meuCarro.ano);
meuCarro.acelerar();