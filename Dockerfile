FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=4096"

# react-snap (Puppeteer) için sistem Chromium'u kullan.
# Alpine'da Puppeteer'ın kendi Chromium'u çalışmıyor — apk paketi + ENV yönlendirmesi
# en güvenilir çözüm. Build aşamasında lazım, runtime imajında gerekmiyor.
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
# node_modules'ü de kopyala (express dahil)
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js
EXPOSE 3000
CMD ["node", "server.js"]
