# ADR 2025-06 – Arquitetura Inicial do Darwin

## Contexto
O Darwin será um software de gestão pessoal com foco em organização de ideias e documentos para toda a vida. O projeto demanda flexibilidade, escalabilidade e facilidade de manutenção.

## Decisão
- **Clean Architecture** será adotada para garantir separação de responsabilidades, testabilidade e independência de frameworks.
- **Microsserviços**: Cada domínio principal (cofres, arquivos, pesquisa, etc.) será isolado em um serviço próprio, comunicando-se via RabbitMQ.
- **Mensageria**: RabbitMQ será utilizado para comunicação assíncrona entre microsserviços, facilitando escalabilidade e desacoplamento.
- **Monitoramento**: Logs centralizados e integração futura com ferramentas de observabilidade (ex: Prometheus, Grafana).
- **Documentação**: Toda decisão relevante será registrada em ADRs e documentação contínua em `/docs`.

## Justificativa
- Clean Architecture facilita evolução do sistema e onboarding de novos desenvolvedores.
- Microsserviços permitem escalar partes do sistema de forma independente.
- Mensageria desacopla serviços e permite resiliência.

## Consequências
- Maior complexidade inicial de infraestrutura.
- Facilidade de manutenção e evolução a longo prazo.
- Possibilidade de integração com outros sistemas no futuro.

---

> Esta decisão será revisada conforme o projeto evoluir e novas necessidades surgirem.
