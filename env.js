
const common = {
  userTokenKey: 'userTokenKey',
};

const dev = {
  ...common,
  serverUrl: '',
};
const prod = {
  ...common,
  serverUrl: '',
};
const local = {
  ...common,
  serverUrl: 'http://localhost:3030',
};

const configByEnv = {
  development: dev,
  production: prod,
  local,
};

const config = function config(env) {
  return configByEnv[env];
};

module.exports = config;
