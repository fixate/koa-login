var loginService = require('./loginService');

module.exports = options => {
  const login = loginService(options);

  return handler;

  function* handler() {
    const result = yield login(this);

    if (result.error) {
      this.body = result;
      this.status = 401;
      return;
    }

    const publicData = options.publicDataProvider(result.user);
    this.body = {
      user: publicData,
      token: result.token,
    };

    this.status = 200;

    if (options.afterLogin) {
      yield function(next) {
        options.afterLogin.apply(this, [result, next]);
      };
    }
  }
};
