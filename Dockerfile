FROM node:20
WORKDIR /home/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g prisma
COPY . .
EXPOSE 3000
CMD ["npm","run","ready"]
