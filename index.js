import { Cliente } from './Classes/Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './Classes/SistemaAutenticacao.js';

// Diretor Rodrigo
const diretorRodrigo = new Diretor('Rodrigo', 1000, 123456789);
diretorRodrigo.cadastrarSenha('12345678');
const statusLogadoDiretor = SistemaAutenticacao.login(diretorRodrigo, '12345678');

// Gerente Ricardo
const gerenteRicardo = new Gerente('Ricardo', 5000, 123456789);
gerenteRicardo.cadastrarSenha('1234');
const statusLogadoGerente = SistemaAutenticacao.login(gerenteRicardo, '1234');

// Cliente
const clienteLais = new Cliente('Lais', 123456789, '4002');
const statusLogadoCliente = SistemaAutenticacao.login(clienteLais, '4002');

// Verificação de Status
console.log(statusLogadoDiretor);
console.log(statusLogadoGerente);
console.log(statusLogadoCliente);