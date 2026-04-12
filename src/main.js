const Vulnerabilidade = require('./domain/Vulnerabilidade');
const ChaveCriptografia = require('./domain/ChaveCriptografia');
const Infeccao = require('./domain/Infeccao');
const PropagacaoService = require('./application/PropagacaoService');
const PedidoResgateService = require('./application/PedidoResgateService');
const ConsoleLogger = require('./infrastructure/ConsoleLogger');
const computadores = require('./mocks/computadores');

const logger = new ConsoleLogger();
const propagacaoService = new PropagacaoService();
const pedidoResgateService = new PedidoResgateService();

const vulnerabilidade = new Vulnerabilidade({
  id: 'VULN-001',
  nome: 'EternalBlue',
  cve: 'CVE-2017-0144',
  exploracao: 'SIMULADA'
});

const chave = new ChaveCriptografia({
  id: 'KEY-MOCK-001',
  origem: 'Gerada no contexto da simulação'
});

const computadorInicial = computadores[0];
const infeccao = new Infeccao({
  computador: computadorInicial,
  vulnerabilidade,
  chaveCriptografia: chave
});

logger.info('Iniciando simulação WannaCry', {
  alvo: computadorInicial.id,
  ip: computadorInicial.ip,
  sistemaOperacional: computadorInicial.so,
  cve: vulnerabilidade.cve
});

const resultadoInfeccao = infeccao.executar();
logger.info('Resultado da infecção', resultadoInfeccao);

const resultadoPropagacao = propagacaoService.propagar(computadorInicial, computadores.slice(1));
logger.info('Resultado da propagação lateral', resultadoPropagacao);

const pedidoResgate = pedidoResgateService.gerar({
  computadorId: computadorInicial.id,
  valorBTC: 0.05
});
logger.info('Pedido de resgate gerado', pedidoResgate);

logger.info('Estado final dos arquivos do host inicial', computadorInicial.arquivos);
