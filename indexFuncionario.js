import Cliente from './Cliente.js';
import SistemaAutenticacao from './SistemaAutenticacao.js';
import Gerente from './Funcionario/Gerente.js';
import Diretor from './Funcionario/Diretor.js';

const diretor = new Diretor('Rodrigo', 10000, 12312312301);
const gerente = new Gerente('Ricardo', 5000, 12312312302);
const cliente = new Cliente('Lais', 12312312303, '123');

diretor.cadastrarSenha('123');
gerente.cadastrarSenha('4561');

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '456');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '123');

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);