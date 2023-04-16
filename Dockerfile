FROM node:lts

WORKDIR /app
COPY . .
RUN npm install
RUN export NODE_OPTIONS=--openssl-legacy-provider 
EXPOSE 3001
CMD ["npm", "start"]