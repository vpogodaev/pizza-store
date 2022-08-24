FROM node:16-slim

WORKDIR /frontend

COPY ./ ./

RUN npm install

RUN npm run build

RUN npm install -g serve

COPY . .

CMD ["serve", "-s", "build"]
