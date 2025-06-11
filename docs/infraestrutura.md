# Infraestrutura e Clean Architecture – Darwin Backend

## Estrutura de Diretórios

```
/src
  /application         # Casos de uso, serviços de aplicação
  /domain              # Entidades, repositórios, regras de negócio
  /infrastructure      # Adapters externos (logger, metrics, db, mensageria)
    /logger
    /metrics
  /interfaces          # Interfaces de entrada/saída (HTTP, eventos, CLI)
    /http
  main.ts              # Ponto de entrada (composition root)
  server.ts            # (legado, pode ser removido após migração total)
```

- **application**: onde ficarão os casos de uso e orquestração de regras de negócio.
- **domain**: entidades, agregados, interfaces de repositório, regras puras.
- **infrastructure**: adapters para frameworks, drivers, provedores externos.
- **interfaces**: controladores HTTP, listeners de eventos, etc.
- **main.ts**: inicialização e composição de dependências.

> Todos os imports devem ser relativos à raiz do projeto (`baseUrl` no tsconfig).

## Próximos Passos
- Ajustar `tsconfig.json` para refletir a estrutura e facilitar imports relativos.
- Garantir que todos os arquivos de configuração (Jest, ESLint, etc.) estejam compatíveis com a estrutura.

## Padrões Adotados

- **Clean Architecture**: Separação clara entre infraestrutura, interfaces e domínio (a ser expandido para casos de uso e entidades).
- **Inversão de Dependências**: Providers/adapters injetados no ponto de entrada.
- **Observabilidade**: Logging estruturado, métricas Prometheus e health checks prontos para produção.

## Como rodar

```sh
npm run dev # desenvolvimento
npm run build && npm start # produção
```

## Endpoints de Infraestrutura

- `GET /healthz` – Health check
- `GET /readyz` – Readiness check
- `GET /metrics` – Métricas Prometheus

## O que pode ser melhorado futuramente

- Adicionar camada de domínio e casos de uso (application/domain)
- Injeção de dependências via container (ex: tsyringe, awilix)
- Testes unitários para adapters e controllers
- Documentação de padrões de extensão

## Arquivos Criados/Modificados

- `src/main.ts`
- `src/infrastructure/logger/pino-logger.ts`
- `src/infrastructure/metrics/metrics-provider.ts`
- `src/interfaces/http/health-controller.ts`
- `src/server.ts` (marcado como legado)
- `docs/infraestrutura.md` (este documento)
