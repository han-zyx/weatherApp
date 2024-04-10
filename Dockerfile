
FROM node:alpine

COPY src/ /app

RUN npm install

EXPOSE 8081

CMD ["node", "app.js"]
