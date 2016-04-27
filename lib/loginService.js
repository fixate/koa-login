module.exports = init;

function init(opts) {
  const options = Object.assign({ fields: {} }, opts);
  const secret = options.secret;
  const userProvider = options.userProvider;
  const publicDataProvider = options.publicDataProvider;
  const tokenDataProvider = options.tokenDataProvider;
  const passwordService = options.passwordService || require('./passwordService');
  const tokenService = options.tokenService || require('./tokenService');

  return login;

  function login(request) {
    const identityField = options.fields.identity || 'username';
    const passwordField = options.fields.password || 'password';
    const identity = request.body[identityField];
    const password = request.body[passwordField];

    return userProvider(ident).then(user => {
      if (!user) {
        return { error: 'User does not exist.' };
      }

      const passwordHash = user[passwordField];

      return passwordService.verify(password, passwordHash).then(isPasswordCorrect => {
        if (!isPasswordCorrect){
          return { error: 'Username or password is incorrect.' }
        }

        const publicData = publicDataProvider(user);
        const tokenData = tokenDataProvider(user);
        const token = tokenService.create(tokenData, secret);

        return {
          user: publicData,
          token: token,
        };
      });
    });
  }
}
