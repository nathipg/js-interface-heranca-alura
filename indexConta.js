import Cliente from './Cliente.js';
import ContaSalario from './Conta/ContaSalario.js';
import ContaCorrente from './Conta/ContaCorrente.js';
import ContaPoupanca from './Conta/ContaPoupanca.js';

const clienteRicardo = new Cliente('Ricardo', 11122233309);

const contaCorrenteRicardo = new ContaCorrente(clienteRicardo, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, clienteRicardo, 1001);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(clienteRicardo);
contaSalario.depositar(500);
contaSalario.sacar(100);

console.log(contaCorrenteRicardo);
console.log(contaPoupanca);
console.log(contaSalario);