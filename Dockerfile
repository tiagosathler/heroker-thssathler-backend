FROM node:lts-alpine3.14

WORKDIR /api

COPY package.json .

RUN npm install

COPY . .

ENV DATABASE=postgres
ENV DB_HOST=db.vygfvnalsumpdioeerav.supabase.co
ENV DB_USERNAME=postgres
ENV DB_PASSWORD=W272d7@U@eyAgyv
ENV DB_PORT=5432

CMD ["node", "src/server.js"]