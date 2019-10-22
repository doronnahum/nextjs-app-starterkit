
import axios from 'axios';

export { default as httpRequest } from './httpRequest';

const SERVER_URL = process.env.serverUrl;

const METHODS = {
  GET: 'get',
  POST: 'post',
  UPDATE: 'update',
  PATCH: 'patch',
};

export const END_POINTS = {
  createUser: {
    url: 'users',
    getErrMessage: (error) => error.response.data.message,
  },
  login: {
    url: 'authentication',
    getErrMessage: (error) => error.response.data.message,
  },
  resendVerifyAccount: {
    url: 'authManagement',
    getErrMessage: (error) => error.response.data.message,
  },
  passwordChange: {
    url: 'authManagement',
    getErrMessage: (error) => error.response.data.message,
  },
  forgotPassword: {
    url: 'authManagement',
    getErrMessage: (error) => error.response.data.message,
  },
  changedPasswordWithToken: {
    url: 'authManagement',
    getErrMessage: (error) => error.response.data.message,
  },
};


export default class ApiService {
  // Auth
  static createUser(email, mobile, password, firstName, lastName) {
    return axios.request({
      baseURL: SERVER_URL,
      url: END_POINTS.createUser.url,
      method: METHODS.POST,
      data: { email, mobile, password, firstName, lastName },
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

  static login(email, mobile, password) {
    return axios.request({
      baseURL: SERVER_URL,
      url: END_POINTS.login.url,
      method: METHODS.POST,
      data: { email, mobile, password, strategy: 'local' },
    });
  }

  static resendVerifyAccount(email, mobile) {
    return axios.request({
      baseURL: SERVER_URL,
      url: END_POINTS.resendVerifyAccount.url,
      method: METHODS.POST,
      data: {
        action: 'resendVerifySignup',
        value: { email, mobile },
      },
    });
  }

  static passwordChange(email, oldPassword, password) {
    return axios.request({
      baseURL: SERVER_URL,
      url: END_POINTS.passwordChange.url,
      method: METHODS.POST,
      data: {
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
      data: {
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
      data: {
        action: 'resetPwdLong',
        value: {
          password,
          token,
        },
      },
    });
  }
}
