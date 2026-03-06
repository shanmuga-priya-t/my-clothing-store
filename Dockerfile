FROM node:20
WORKDIR /app

# Dependency-ah install panna
COPY package*.json ./
RUN npm install

# Ella files-aiyum copy panna
COPY . .

# Port 3000-ah open panna
EXPOSE 3000

# Server-ah run panna (Correct Path)
CMD ["node", "backend/server.js"]
