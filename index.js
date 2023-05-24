class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const primeiroCliente = new Cliente();

// Primeiro Cliente
primeiroCliente.nome = 'Ricardo';
primeiroCliente.cpf = 11111111111;
primeiroCliente.agencia = 1001;
primeiroCliente.saldo = 0;
primeiroCliente.rg = 123456789;

const segundoCliente = new Cliente();

// Segundo Cliente
segundoCliente.nome = 'Alice';
segundoCliente.cpf= 22222222222;
segundoCliente.agencia = 1001;
segundoCliente.saldo = 0;
segundoCliente.rg = 12345678;

console.log(primeiroCliente);
console.log(segundoCliente);