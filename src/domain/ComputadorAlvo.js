class ComputadorAlvo {
  constructor({ id, ip, so, patchAplicado, smbv1Ativo, arquivos }) {
    this.id = id;
    this.ip = ip;
    this.so = so;
    this.patchAplicado = patchAplicado;
    this.smbv1Ativo = smbv1Ativo;
    this.arquivos = arquivos;
  }

  estaVulneravel() {
    return this.smbv1Ativo && !this.patchAplicado;
  }
}

module.exports = ComputadorAlvo;
