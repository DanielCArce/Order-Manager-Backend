FROM node:20

COPY ./package.json /app

WORKDIR /app
RUN npm install

RUN npx prisma generate

ENV SENTRY_DSN = https://b4268284485b1b3de1a27644243151c2@o163098.ingest.sentry.io/4506474550591488

ENV SECRET = $2b$10$VAJE/2yo0kQfUi0rIKhug

EXPOSE 3000

CMD ["node","index.js"]
