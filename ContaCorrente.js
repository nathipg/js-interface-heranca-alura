import Cliente from './Cliente.js';

export default class ContaCorrente {
  static numeroContas = 0;
  agencia;
  // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0;
  _cliente;

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroContas++;
  }

  get saldo() {
    return this._saldo;
  }

  set cliente(cliente) {
    if(cliente instanceof Cliente) {
      this._cliente = cliente;
    }
  }

  get cliente() {
    return this._cliente;
  }

  sacar(valor) {
    if (this._saldo < valor) {
      return 0;
    }

    this._saldo -= valor;
    return valor;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }

    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}