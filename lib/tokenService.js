var jwt = require('jsonwebtoken');

exports.create = create;

function create(payload, secretOrPrivateKey, algorithm){
  return jwt.sign(payload, secretOrPrivateKey, { algorithm: algorithm });
}
