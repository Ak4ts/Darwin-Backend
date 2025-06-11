# Funcionalidades do MVP – Darwin Backend

Este documento detalha as funcionalidades essenciais do backend para o MVP do Darwin, agrupadas por domínio.

## 1. Gestão de Cofres (Vaults)
- **listar_cofres()**: Retorna todos os cofres existentes.
- **criar_cofre(nome)**: Cria um novo cofre na raiz.
- **renomear_cofre(nome_antigo, nome_novo)**: Renomeia um cofre.
- **deletar_cofre(nome)**: Remove um cofre e todo seu conteúdo.

## 2. Sistema de Arquivos (Temas e Documentos)
- **listar_conteudo(caminho)**: Retorna o conteúdo de um caminho (cofre, tema, etc.), diferenciando temas (pastas) e documentos (arquivos).
- **obter_arvore_de_arquivos(caminho)**: Retorna toda a estrutura de pastas e arquivos aninhados a partir de um ponto.
- **criar_tema(caminho_pai, nome_tema)**: Cria uma nova pasta (tema) dentro de outra.
- **criar_documento(caminho_pai, nome_arquivo, conteudo_inicial)**: Cria um novo arquivo com conteúdo inicial.
- **renomear_item(caminho_antigo, novo_nome)**: Renomeia um tema ou documento.
- **mover_item(caminho_origem, caminho_destino)**: Move um tema ou documento.
- **deletar_item(caminho)**: Remove um tema ou documento específico.

## 3. Edição de Documentos
- **ler_documento(caminho)**: Retorna o conteúdo completo de um arquivo de texto.
- **salvar_documento(caminho, novo_conteudo)**: Salva o conteúdo editado de um arquivo.

## 4. Metadados e Informações Adicionais
- **obter_metadados(caminho)**: Retorna informações como data de criação, última modificação, tamanho, contagem de palavras, tipo de item.

## 5. Pesquisa
- **pesquisar_global(termo_busca)**: Busca termo em todos os documentos de todos os cofres.
- **pesquisar_no_cofre(nome_cofre, termo_busca)**: Busca termo em um cofre específico.

---

> Para detalhes de payloads, contratos e exemplos de uso, consulte a documentação de endpoints (a ser criada).
