# Simulação Arquitetural do WannaCry

## Descrição
Este projeto apresenta uma simulação educacional de uma arquitetura moderna de detecção, monitoramento e resposta a incidentes, inspirada nas lições aprendidas com o caso WannaCry. O foco do projeto não é reproduzir malware real, mas demonstrar como decisões arquiteturais adequadas podem reduzir impacto, propagação e indisponibilidade em ambientes críticos.

## Objetivo
Simular um fluxo arquitetural de identificação de ativos vulneráveis, detecção de eventos suspeitos, geração de alertas e execução de ações automatizadas de contenção, considerando uma proposta de solução para o contexto de 2026.

## Características
- Inventário de hosts com dados mockados
- Simulação de eventos de risco e tentativa de exploração
- Detecção de comportamento suspeito
- Seleção de estratégia de resposta
- Isolamento lógico de hosts comprometidos
- Registro de logs e eventos
- Visualização simplificada do estado do sistema

## Arquitetura
A solução foi projetada com arquitetura híbrida baseada em microservices orientados a eventos. Os principais módulos são:
- Inventory Service: mantém os ativos monitorados
- Detection Service: avalia eventos e classifica risco
- Response Service: aplica políticas de contenção
- Monitoring Service: registra logs, métricas e eventos
- Dashboard: apresenta o estado da simulação

A comunicação entre os módulos ocorre por eventos, favorecendo desacoplamento, escalabilidade e resiliência.

## Design Patterns utilizados
- Strategy: seleção de políticas de resposta
- Observer: notificação de eventos para múltiplos componentes
- Factory: criação padronizada de agentes e serviços
- Circuit Breaker: prevenção de falhas em cascata
- Singleton: centralização controlada de configurações globais


## Estrutura do projeto
- /src/inventory
- /src/detection
- /src/response
- /src/monitoring
- /src/dashboard
- /docs

## Observações
Este projeto é exclusivamente acadêmico e educacional.
Nenhum malware real é executado.
Nenhuma vulnerabilidade é explorada de forma real.
Toda a dinâmica do sistema é simulada com dados e eventos mockados.
