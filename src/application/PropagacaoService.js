class PropagacaoService {
  propagar(origem, alvos) {
    return alvos.map((alvo) => ({
      origem: origem.ip,
      destino: alvo.ip,
      vulneravel: alvo.estaVulneravel(),
      tentativa: alvo.estaVulneravel() ? 'SUCESSO_SIMULADO' : 'BLOQUEADO'
    }));
  }
}

module.exports = PropagacaoService;
