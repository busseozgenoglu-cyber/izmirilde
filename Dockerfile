FROM node:20-alpine AS builder

WORKDIR /app

# Memory limit artır - büyük TypeScript projeleri için
ENV NODE_OPTIONS="--max-old-space-size=4096"

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Production - minimal image
FROM node:20-alpine

WORKDIR /app

RUN npm install -g serve@14

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["sh", "-c", "serve dist -s -l ${PORT:-3000}"]
