class Vulnerabilidade {
  constructor({ id, nome, cve, exploracao }) {
    this.id = id;
    this.nome = nome;
    this.cve = cve;
    this.exploracao = exploracao;
  }
}

module.exports = Vulnerabilidade;
