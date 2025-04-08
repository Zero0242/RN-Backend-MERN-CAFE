FROM node:21-alpine3.20 as prod
WORKDIR /app
COPY package*.json .
RUN npm install

FROM node:21-alpine3.20 as runner
WORKDIR /app
COPY --from=prod /app/node_modules ./node_modules
COPY . .
ENV PORT=8080
ENV SECRETORPRIVATEKEY="replace_this_env_value"
EXPOSE 8080
CMD [ "npm" ,"start"]