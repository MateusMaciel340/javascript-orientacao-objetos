import { Cliente } from './classes/Cliente.js';
import { ContaCorrente } from './classes/ContaCorrente.js';

// Cliente Ricardo e Alice
const clienteRicardo = new Cliente('Ricardo', 11111111111);
const clienteAlice = new Cliente('Alice', 22222222222);

// Conta Corrente do Cliente Ricardo
const contaCorrenteRicardo = new ContaCorrente(1001, clienteRicardo);
contaCorrenteRicardo._saldo = 1000;

// Conta Corrente da Cliente Alice
const contaCorrenteAlice = new ContaCorrente(102, clienteAlice);

// Transferência
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200, contaCorrenteAlice);

// Chamando Conta Corrente do Ricardo e Alice com Alterações
console.log(contaCorrenteRicardo);

// Contagem da quantidade de contas correntes
console.log(ContaCorrente.numeroDeContas);