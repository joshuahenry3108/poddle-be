FROM node:18
RUN mkdir node
COPY . ./node
WORKDIR ./node/
RUN npm hello #npm install
EXPOSE 8080
CMD npm start #npm start - altered to test invalid pre-script scenario
