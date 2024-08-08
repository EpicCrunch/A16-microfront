FROM node:alpine 

WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install -g @angular/cli@16.1.0
RUN npm install

EXPOSE 4210

CMD [ "ng","serve","--host","0.0.0.0"]
