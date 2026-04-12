# Simulação Arquitetural do WannaCry

Este repositório apresenta uma implementação parcial e acadêmica de uma solução arquitetural baseada em uma simulação do comportamento do ransomware WannaCry.

O objetivo é demonstrar a estrutura da solução, com foco em organização do código, separação por camadas, uso de dados mockados e entradas simuladas.

> Aviso ético: este projeto não executa exploração real, criptografia real, propagação real, Tor real ou transações reais em Bitcoin. Todo o fluxo é estritamente simulado para fins acadêmicos.

## Objetivo

Representar, de forma controlada, os principais elementos do diagrama arquitetural:
- vulnerabilidade;
- computador alvo;
- infecção;
- arquivos afetados;
- chave de criptografia simulada;
- propagação lateral;
- pedido de resgate;
- carteira Bitcoin fictícia.

## Arquitetura da solução

A organização do projeto segue uma arquitetura em camadas:

```text
src/
├── application/
│   ├── PedidoResgateService.js
│   └── PropagacaoService.js
├── domain/
│   ├── ChaveCriptografia.js
│   ├── ComputadorAlvo.js
│   ├── DadosArquivo.js
│   ├── Infeccao.js
│   └── Vulnerabilidade.js
├── infrastructure/
│   └── ConsoleLogger.js
├── mocks/
│   └── computadores.js
└── main.js
```

### Camadas

- **Domain:** contém entidades e regras centrais da simulação.
- **Application:** contém os serviços que orquestram o fluxo de propagação e resgate.
- **Infrastructure:** contém componentes técnicos de apoio, como logging.
- **Mocks:** contém os dados simulados usados na execução da solução.

## Fluxo da simulação

1. Carregar os computadores mockados.
2. Selecionar um host inicial.
3. Verificar se o computador está vulnerável à CVE-2017-0144.
4. Simular a infecção.
5. Marcar arquivos como criptografados logicamente.
6. Simular a propagação lateral para outros hosts.
7. Gerar um pedido de resgate fictício.
8. Exibir o log final da execução.


## Estrutura do repositório

```text
wannacry-simulacao/
├── docs/
│   └── arquitetura.md
├── src/
│   ├── application/
│   ├── domain/
│   ├── infrastructure/
│   ├── mocks/
│   └── main.js
├── .gitignore
├── package.json
└── README.md
```

## Observações acadêmicas

- Implementação parcial.
- Dados totalmente mockados.
- Entradas simuladas.
- Sem exploração real.
- Sem persistência externa.
- Foco em arquitetura e organização do código.