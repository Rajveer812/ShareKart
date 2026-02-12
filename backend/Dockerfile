FROM node:22-alpine

WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy rest of app
COPY . .

EXPOSE 3002

CMD ["node", "index.js"]
