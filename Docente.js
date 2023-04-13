import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovarEstudate(estudante, curso) {
    return `estudate ${estudante}, aprovado no ${curso} curso`;
  }
}
