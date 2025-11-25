FROM node:21

WORKDIR /nextapp

COPY package* .

run npm install

COPY . .

CMD ["npm", "run", "dev"]