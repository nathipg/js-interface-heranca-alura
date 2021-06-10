import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';

const contaCorrenteRicardo = new ContaCorrente(
  1001,
  new Cliente('Ricardo', 11122233309),
);
contaCorrenteRicardo.depositar(100);

const contaCorrenteAlice = new ContaCorrente(
  1001,
  new Cliente('Alice', 11122233308),
);
contaCorrenteAlice.depositar(200);

contaCorrenteRicardo.transferir(50, contaCorrenteAlice);

console.log('Numero de contas', ContaCorrente.numeroContas);
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);
