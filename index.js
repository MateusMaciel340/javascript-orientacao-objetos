import { Cliente } from './classes/Cliente.js';
import { Conta } from './classes/Conta.js';
import { ContaCorrente } from './classes/ContaCorrente.js';
import { ContaPoupanca } from './classes/ContaPoupanca.js';

// Cliente Ricardo
const clienteRicardo = new Cliente('Ricardo', 11111111111);

// Conta Corrente do Ricardo
const contaCorrenteRicardo = new Conta(0, clienteRicardo, 1001);

// Transferência
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

// Conta Poupança do Ricardo
const contaPoupancaRicardo = new Conta(50, clienteRicardo, 1001);

// Chamando conta corrente  e poupança do Ricardo
console.log(contaPoupancaRicardo);
console.log(contaCorrenteRicardo);