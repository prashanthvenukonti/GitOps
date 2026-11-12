FROM node:22-alpine 
WORKDIR /app 
COPY app/package.json ./package.json 
COPY app/server.js ./server.js 
ENV PORT=3000 
EXPOSE 3000 
USER node 
CMD ["npm", "start"] 