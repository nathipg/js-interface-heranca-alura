import Conta from './Conta.js';

export default class ContaCorrente extends Conta {
  static numeroContas = 0;
  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numeroContas++;
  }

  sacar(valor) {
    const taxa = 1.1;
    return super._sacar(valor, taxa);
  }
}