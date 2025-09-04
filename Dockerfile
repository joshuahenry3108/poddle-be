FROM node:18
RUN mkdir node
COPY . ./node
WORKDIR ./node/
RUN npm test #npm install - altered to test invalid pre-script scenario
EXPOSE 8080
CMD npm start
