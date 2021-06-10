export default class Cliente {
  constructor(nome, cpf, senha) {
    this.nome = nome;
    this._cpf = cpf;
    this._senha = senha;
    this.autenticar = 123;
  }

  // autenticar(senha) {
  //   return senha === this._senha;
  // }

  get cpf() {
    return this._cpf;
  }
}