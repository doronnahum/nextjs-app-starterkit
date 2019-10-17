
const common = {
};

const dev = {
  ...common,
  url: 'https://xsctrl-dev-server-19.herokuapp.com',
};
const prod = {
  ...common,
  url: 'https://xsctrl-server-19.herokuapp.com',
};
const local = {
  ...common,
  url: 'http://localhost:3030',
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
