export class User {

    id: number;
    nome: string;
    senha: string;
    email: string;

    constructor(id: number, nome: string, senha: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.email = email;
    }
}