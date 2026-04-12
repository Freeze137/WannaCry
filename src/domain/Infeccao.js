class Infeccao {
  constructor({ computador, vulnerabilidade, chaveCriptografia }) {
    this.computador = computador;
    this.vulnerabilidade = vulnerabilidade;
    this.chaveCriptografia = chaveCriptografia;
    this.executada = false;
  }

  executar() {
    if (!this.computador.estaVulneravel()) {
      return {
        infectado: false,
        motivo: 'Host protegido por patch ou SMBv1 desabilitado.'
      };
    }

    this.computador.arquivos.forEach((arquivo) => arquivo.criptografar());
    this.executada = true;

    return {
      infectado: true,
      arquivosAfetados: this.computador.arquivos.length,
      chaveId: this.chaveCriptografia.id,
      cve: this.vulnerabilidade.cve
    };
  }
}

module.exports = Infeccao;
