class ConsoleLogger {
  info(mensagem, dados) {
    console.log(`[INFO] ${mensagem}`);
    if (dados) {
      console.log(JSON.stringify(dados, null, 2));
    }
  }
}

module.exports = ConsoleLogger;
