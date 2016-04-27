var loginService = require('./loginService');

module.exports = options => {
  const login = loginService(options);

  return handler;

  function* handler() {
    const result = yield login(this.request);

    this.body = result;
    this.status = result.error ? 401 : 200;
  }
};
