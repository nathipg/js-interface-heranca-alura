export default class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if(this.constructor == Conta) {
      throw new Error('Não é possível instanciar uma classe abstrata (Conta)');
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
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
    throw new Error('Não é possível executar um método abstrato (Conta.sacar)');
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
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