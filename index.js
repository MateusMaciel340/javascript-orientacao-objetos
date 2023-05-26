import { Cliente } from './classes/Cliente.js';
import { ContaCorrente } from './classes/ContaCorrente.js';
import { ContaPoupanca } from './classes/ContaPoupanca.js';
import { ContaSalario } from './classes/ContaSalario.js';

// Cliente Ricardo
const clienteRicardo = new Cliente('Ricardo', 11111111111);

// Conta Corrente do Ricardo
const contaCorrenteRicardo = new ContaCorrente(clienteRicardo, 1001);

// Conta Poupança do Ricardo
const contaPoupancaRicardo = new ContaPoupanca(50, clienteRicardo, 1001);

// Conta Salário
const contaSalario = new ContaSalario(clienteRicardo);
contaSalario.depositar(100);
contaSalario.sacar(50);

console.log(contaSalario);