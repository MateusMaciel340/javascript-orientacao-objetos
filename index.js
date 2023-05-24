class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {

        if (valor <= 0) {
            return;
        }

        this._saldo += valor;
    }
}

// Cliente Ricardo
const clienteRicardo = new Cliente();
clienteRicardo.nome = 'Ricardo';
clienteRicardo.cpf = 11111111111;

// Cliente Alice
const clienteAlice = new Cliente();
clienteAlice.nome = 'Alice';
clienteAlice.cpf = 22222222222;

// Conta Corrente do Cliente Ricardo
const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo._saldo = 1000;

// Depositos do Cliente Ricardo
contaCorrenteRicardo.depositar(300);

// Valor Sacado
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

// Chamando Conta Corrente do Ricardo com Alterações
console.log(contaCorrenteRicardo);