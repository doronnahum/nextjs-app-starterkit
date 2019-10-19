const TOKEN_KEY = process.env.userTokenKey;

const store = require('store');


function getToken() {
  return store.get(TOKEN_KEY);
}
function setToken(token) {
  return store.set(TOKEN_KEY, token);
}
function removeToken() {
  return store.remove(TOKEN_KEY);
}

module.exports = {
  getToken,
  setToken,
  removeToken,
};
