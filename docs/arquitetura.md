# Arquitetura da Simulação

## Visão geral

A solução representa, de forma simulada, uma cadeia de eventos inspirada no comportamento do ransomware WannaCry. O foco está na modelagem arquitetural dos componentes e de seus relacionamentos, e não na execução operacional real de um malware.

## Entidades principais

### Vulnerabilidade
Representa a falha explorada na simulação, associada à CVE-2017-0144 (EternalBlue).

### ComputadorAlvo
Representa a máquina candidata à infecção. Possui atributos como IP, sistema operacional, status de patch, estado do SMBv1 e arquivos associados.

### Infeccao
Representa o processo principal da simulação. Essa entidade coordena a validação de vulnerabilidade e a alteração lógica do estado dos arquivos do computador alvo.

### DadosArquivo
Representa os arquivos afetados no contexto da simulação. Em vez de criptografar de fato, a solução apenas altera um status lógico para indicar que o arquivo foi “criptografado”.

### ChaveCriptografia
Representa uma chave fictícia usada apenas como elemento de modelagem para o processo de alteração de estado dos arquivos.

## Serviços de aplicação

### PropagacaoService
Simula a tentativa de propagação lateral para outros computadores da rede, com base no estado de vulnerabilidade de cada host.

### PedidoResgateService
Gera um pedido de resgate fictício contendo identificador único, valor em BTC e endereço Bitcoin simulado.

## Decisões arquiteturais

- Separação de responsabilidades por camadas.
- Uso de entidades para representar os elementos centrais do domínio.
- Uso de serviços para os fluxos de orquestração.
- Uso de mocks para evitar dependência de ambiente real.
- Logging centralizado para facilitar demonstração da execução.

## Limites da implementação

Esta implementação não realiza:

- exploração real de vulnerabilidade;
- varredura real de rede;
- propagação real via SMB;
- criptografia real de arquivos;
- comunicação com rede Tor;
- geração de carteira Bitcoin real;
- pagamento real;
- persistência em banco de dados.

## Adequação ao requisito

A solução atende ao requisito de implementação parcial da arquitetura por apresentar uma simulação executável, com dados mockados, entradas simuladas e foco explícito na estrutura arquitetural e na organização do código.
