import Endereco from "./endereco.js";
import Funcionario from "./funcionario.js";
import Telefone from "./telefone.js";

export default class Empresa {
    public razaoSocial: string
    public nomeFantasia: string
    public cnpj: string
    public endereco: Endereco
    public funcionarios: Funcionario[]
    public telefones: Telefone[]
    constructor(funcionarios: Funcionario[], razaoSocial: string, nomeFantasia: string, cnpj: string, endereco: Endereco, telefones: Telefone[]) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.endereco = endereco
        this.funcionarios = funcionarios
        this.telefones = telefones
    }
}