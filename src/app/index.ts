import Empresa from "../empresa.js";
import Funcionario from "../funcionario.js";
import Telefone from "../telefone.js";
import Endereco from "../endereco.js";
import Descritor from "../descritor.js";

let endereco = new Endereco(123, 'Rua Iguape', 'Jardim Satélite', 'São José dos Campos')
let telefone = new Telefone('012', '9-9999-9999')
let funcionario = new Funcionario('João', '123456789', '999.999.999-99', endereco, telefone)
let funcionarios = [funcionario]
let telefones = [telefone]
let empEndereco = new Endereco(321, 'Rua das árvores', 'Bosque dos Eucaliptos', 'São josé dos Campos')
let empresa = new Empresa(funcionarios, 'ABC LTDA', 'Mercado Online', '999.999.999.999-9', empEndereco, telefones)

let descritor = new Descritor
descritor.descrever(empresa)