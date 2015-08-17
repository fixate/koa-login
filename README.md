# koa-login
[![NPM](https://nodei.co/npm/koa-login.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/koa-login/)
  
[![Build Status](https://travis-ci.org/marc1404/koa-login.svg)](https://travis-ci.org/marc1404/koa-login)
[![Code Climate](https://codeclimate.com/github/marc1404/koa-login/badges/gpa.svg)](https://codeclimate.com/github/marc1404/koa-login)
[![Test Coverage](https://codeclimate.com/github/marc1404/koa-login/badges/coverage.svg)](https://codeclimate.com/github/marc1404/koa-login/coverage)
  
[![dependencies](https://david-dm.org/marc1404/koa-login.svg)](https://david-dm.org/marc1404/koa-login)
[![dev-dependencies](https://david-dm.org/marc1404/koa-login/dev-status.svg)](https://david-dm.org/marc1404/koa-login#info=devDependencies)
  
## Description
Use in conjunction with [koa-auth-jwt](https://www.npmjs.com/package/koa-auth-jwt).
  
## Installation
```
$ npm install koa-login
```
  
## Usage
```javascript
var login = require('koa-login');
var options = {
  secret: process.env.SECRET,
  userProvider: name => {
    return // TODO: find user by name e.g. in database
  },
  publicDataProvider: user => {
    return {
      name: user.name
    };
  },
  tokenDataProvider: user => {
    return {
      id: user.id
    };
  }
};

router.post('/api/login', login(options));
```
  
## Test
```
$ npm install -g mocha  
$ mocha
```
  
## License
**MIT**
