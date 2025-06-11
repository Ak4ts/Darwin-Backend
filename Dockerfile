# Dockerfile para Darwin Backend

FROM node:24-alpine

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install --production

# Copia o restante do código
COPY . .

# Compila o projeto
RUN npm run build

# Expõe a porta padrão
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
