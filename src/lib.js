'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  hash: (password, saltRounds) => new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds || 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  }),
  compare: (password, passwordHash) => new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  })
};
