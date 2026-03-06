FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# Backend folder-kulla irukkira server.js-ah run panna solrom
CMD ["node", "backend/server.js"]
