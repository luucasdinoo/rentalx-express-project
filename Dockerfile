FROM node:20-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]

# docker build -t rentx . 
# docker run -p 8080:8080 rentx  
