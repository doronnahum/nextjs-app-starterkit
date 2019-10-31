const common = {
  userTokenKey: 'userTokenKey',
};

const dev = {
  ...common,
  serverUrl: 'https://barak19.herokuapp.com',
};
const qa = {
  ...common,
  serverUrl: 'https://barak19.herokuapp.com',
};
const prod = {
  ...common,
  serverUrl: 'https://barak19.herokuapp.com',
};
const local = {
  ...common,
  serverUrl: 'https://barak19.herokuapp.com',
};

const configByEnv = {
  development: dev,
  production: prod,
  local,
  qa,
};

const config = function config(env) {
  return configByEnv[env];
};

module.exports = config;
