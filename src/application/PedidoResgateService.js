class PedidoResgateService {
  gerar({ computadorId, valorBTC }) {
    return {
      idUnico: `PR-${computadorId}-${Date.now()}`,
      valorBTC,
      enderecoBTC: 'btc_mock_endereco_001',
      carteiraDestino: 'carteira_btc_mock',
      status: 'PENDENTE',
      observacao: 'Pedido de resgate apenas simulado para fins acadêmicos.'
    };
  }
}

module.exports = PedidoResgateService;
