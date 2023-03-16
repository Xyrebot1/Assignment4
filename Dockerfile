FROM node:latest

WORKDIR /code

COPY node/package*.json .

RUN npm install 
 
COPY node/server.js . 

EXPOSE 8080

CMD ["/bin/bash"]



