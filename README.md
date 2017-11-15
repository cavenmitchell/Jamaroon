# Jamaroon

This project was formed from ReduxSimpleStarter https://github.com/StephenGrider/ReduxSimpleStarter.git because I liked it as a clean boilerplate i could use for future projects.

#### Setup
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com:cavenmitchell/Jamaroon.git
> cd Jamaroon
> npm install
> npm start
```

#### Defaults
Default port is 8090, just because everyone uses 8080 and it's annoying.

Want to change it back? Edit package.json and change the "start" key in "scripts"

```
"scripts": {
  "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --port 8090",
  "test": "mocha --compilers js:babel-core/register --require ./test/test_helper.js --recursive ./test",
  "test:watch": "npm run test -- --watch"
}
```
