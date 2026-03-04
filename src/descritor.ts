import Empresa from "./empresa.js";

export default class Descritor{
    public descrever(empresa: Empresa){
        console.log(
    `
    Razão social: ${empresa.razaoSocial}
    Nome fantasia: ${empresa.nomeFantasia}
    cnpj: ${empresa.cnpj}
    Endereço
    Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} numero: ${empresa.endereco.numero}
    `
    )
    for (let f of empresa.funcionarios){
        console.log(
    `
    funcionários:

    Nome: ${f.nome}
    matricula: ${f.matricula}
    cpf: ${f.cpf}
    Rua: ${f.endereco.rua} Bairro: ${f.endereco.bairro} Cidade: ${f.endereco.cidade} numero: ${f.endereco.numero} 
    `         
        )
    }
    }
}