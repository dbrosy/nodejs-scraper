FROM node:latest
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# set the loglevel for npm with environment variable
ENV NPM_CONFIG_LOGLEVEL=warn

# and/or set it with a command-line option
RUN npm install --loglevel=warn

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install noodlejs
RUN npm install jquery
RUN npm install jsdom


# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
