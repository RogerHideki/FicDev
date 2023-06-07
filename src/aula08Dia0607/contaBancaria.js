function ContaBancaria(saldoInicial) {
    let saldo = saldoInicial;
    this.getSaldo = function () {
        return saldo;
    };
    this.depositar = function (valor) {
        saldo += valor;
    };
    this.sacar = function (valor) {
        if (saldo >= valor) {
            saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    };
}

let minhaConta = new ContaBancaria(1000);
console.log(minhaConta.getSaldo());
minhaConta.depositar(500);
console.log(minhaConta.getSaldo());
minhaConta.sacar(2000);
minhaConta.sacar(1000);
console.log(minhaConta.getSaldo());