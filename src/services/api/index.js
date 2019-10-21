
import axios from 'axios';

const SERVER_URL = process.env.serverUrl;

const METHODS = {
  GET: 'get',
  POST: 'post',
  UPDATE: 'update',
  PATCH: 'patch',
};

export const END_POINTS = {
  createUser: {
    url: 'users/',
    getErrMessage: (error) => error.response.data.message,
  },
  login: {
    url: 'authentication/',
    getErrMessage: (error) => error.response.data.message,
  },
  resendVerifyEmail: {
    url: 'authManagement/',
    getErrMessage: (error) => error.response.data.message,
  },
  passwordChange: {
    url: 'authManagement/',
    getErrMessage: (error) => error.response.data.message,
  },
  forgotPassword: {
    url: 'authManagement/',
    getErrMessage: (error) => error.response.data.message,
  },
  changedPasswordWithToken: {
    url: 'authManagement/',
    getErrMessage: (error) => error.response.data.message,
  },
};


export default class ApiService {
  // Auth
  static createUser(email, password) {
    return axios.request({
      baseURL: SERVER_URL,
      url: END_POINTS.createUser.url,
      method: METHODS.POST,
      body: { email, password, strategy: 'local' },
    });
  }

  static me(token) {
    if (token) {
      return axios.request({
        baseURL: SERVER_URL,
        url: END_POINTS.login.url,
        method: METHODS.POST,
        headers: {
          Authorization: token,
        },
      });
    }
    // TODO: axios incatnce
    return null;
  }

  static login(email, password) {
    return axios.request({
      baseURL: SERVER_URL,
      url: END_POINTS.login.url,
      method: METHODS.POST,
      body: { email, password, strategy: 'local' },
    });
  }

  static resendVerifyEmail(email) {
    return axios.request({
      baseURL: SERVER_URL,
      url: END_POINTS.resendVerifyEmail.url,
      method: METHODS.POST,
      body: {
        action: 'resendVerifySignup',
        value: { email },
      },
    });
  }

  static passwordChange(email, oldPassword, password) {
    return axios.request({
      baseURL: SERVER_URL,
      url: END_POINTS.passwordChange.url,
      method: METHODS.POST,
      body: {
        action: 'passwordChange',
        value: {
          user: {
            email,
          },
          oldPassword,
          password,
        },
      },
    });
  }

  static forgotPassword(email) {
    return axios.request({
      baseURL: SERVER_URL,
      url: END_POINTS.forgotPassword.url,
      method: METHODS.POST,
      body: {
        action: 'sendResetPwd',
        value: {
          email,
        },
      },
    });
  }

  static changedPasswordWithToken(password, token) {
    return axios.request({
      baseURL: SERVER_URL,
      url: END_POINTS.changedPasswordWithToken.url,
      method: METHODS.POST,
      body: {
        action: 'resetPwdLong',
        value: {
          password,
          token,
        },
      },
    });
  }
}
