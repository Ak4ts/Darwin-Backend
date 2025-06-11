# Darwin – Cofre de Ideias para a Vida Toda

## Visão Geral

Darwin é um software de gestão pessoal projetado para ser um cofre de ideias, documentos e informações relevantes para toda a vida. O objetivo é oferecer uma experiência simples, flexível e segura para organizar temas pessoais, profissionais e de pesquisa, com navegação intuitiva e edição de documentos em markdown.

## Principais Telas

- **Área de Trabalho**: Tela principal com três divisões (menu lateral de arquivos, editor markdown central, painel lateral de informações adicionais).
- **Biblioteca**: Visualização hierárquica de todos os documentos, organizados em cofres, temas e subtemas.

## Stack e Arquitetura

- **Backend**: Node.js 24, TypeScript, Express
- **Arquitetura**: Clean Architecture, microsserviços
- **Mensageria**: RabbitMQ
- **Monitoramento**: Logs e ferramentas de observabilidade (a definir)

## Estrutura Inicial Recomendada

- `/src` – Código-fonte principal
- `/docs` – Documentação técnica e de uso
- `/adr` – Registros de decisões arquiteturais

## Funcionalidades Essenciais (MVP)

1. **Gestão de Cofres**: Listar, criar, renomear e deletar cofres
2. **Sistema de Arquivos**: Listar conteúdo, obter árvore, criar/mover/renomear/deletar temas e documentos
3. **Edição de Documentos**: Ler e salvar conteúdo de arquivos markdown e outros formatos
4. **Metadados**: Obter informações detalhadas sobre arquivos e pastas
5. **Pesquisa**: Busca global e por cofre

## Decisões Técnicas Iniciais

- Clean Architecture para facilitar manutenção e escalabilidade
- Microsserviços para isolar domínios críticos
- RabbitMQ para comunicação assíncrona
- Documentação contínua em `/docs` e ADRs em `/adr`

## Instruções Iniciais

1. Instale as dependências com `npm install`
2. Para rodar o backend: `npm run dev` (ajustar conforme scripts definidos)
3. Consulte `/docs/funcionalidades-mvp.md` para detalhes das features

---

> Para dúvidas, consulte os arquivos em `/docs` e `/adr`.
