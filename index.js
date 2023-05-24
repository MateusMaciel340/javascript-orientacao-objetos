import { Cliente } from './classes/Cliente.js';
import { ContaCorrente } from './classes/ContaCorrente.js';

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
contaCorrenteRicardo.cliente = clienteRicardo;
contaCorrenteRicardo._saldo = 1000;

// Conta Corrente da Cliente Alice
const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = clienteAlice;
contaCorrenteAlice.agencia = 102;

// Transferência
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200, contaCorrenteAlice);

// Chamando Conta Corrente do Ricardo e Alice com Alterações
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice.saldo);