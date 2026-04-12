class DadosArquivo {
  constructor({ id, caminho, tipo, acessoUsuario, statusCriptografia = 'INTEGRO' }) {
    this.id = id;
    this.caminho = caminho;
    this.tipo = tipo;
    this.acessoUsuario = acessoUsuario;
    this.statusCriptografia = statusCriptografia;
    this.bloqueador = false;
  }

  criptografar() {
    this.statusCriptografia = 'CRIPTOGRAFADO';
    this.bloqueador = true;
  }
}

module.exports = DadosArquivo;
