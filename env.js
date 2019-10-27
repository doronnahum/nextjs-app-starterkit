
const common = {
  userTokenKey: 'userTokenKey',
};

const dev = {
  ...common,
  serverUrl: 'https://xsctrl-dev-server-19.herokuapp.com',
};
const prod = {
  ...common,
  serverUrl: 'https://xsctrl-server-19.herokuapp.com',
};
const local = {
  ...common,
  serverUrl: 'https://barak19-dev.herokuapp.com/',
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
