# Step 1: Frontend Build Process
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Step 2: Final Backend Image
FROM node:18-alpine
WORKDIR /app

# Production package-ah mattum install panrom
COPY package*.json ./
RUN npm install --only=production

# Frontend build panna 'dist' folder-ah backend-kulla copy panrom
COPY --from=frontend-build /app/frontend/dist ./frontend/dist
COPY backend/ ./backend/

# App run aaga 5000 port-ah expose panrom
EXPOSE 5000
CMD ["node", "backend/server.js"]