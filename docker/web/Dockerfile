FROM node:19

EXPOSE 80
ENV BIND_HOST=0.0.0.0

WORKDIR /work-weather

RUN yarn install
CMD ["npm", "start"]