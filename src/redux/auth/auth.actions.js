import ApiService from 'src/services/api';
import logger from 'src/services/logger';
import { setUser } from 'src/redux/user/user.actions';
import { removeToken } from 'src/services/userToken';

const NAME_SPACE = 'auth';

export const actionsType = {
  SET_TOKEN: `${NAME_SPACE}/SET_TOKEN`,
  ON_CHECK_TOKEN_START: `${NAME_SPACE}/ON_CHECK_TOKEN_START`,
  ON_CHECK_TOKEN_END: `${NAME_SPACE}/ON_CHECK_TOKEN_END`,
  ON_CHECK_TOKEN_FAILED: `${NAME_SPACE}/ON_CHECK_TOKEN_FAILED`,
  LOGIN: `${NAME_SPACE}/LOGIN`,
  REGISTER: `${NAME_SPACE}/REGISTER`,
  SEND_VERIFY_ACCOUNT: `${NAME_SPACE}/SEND_VERIFY_ACCOUNT`,
  ON_LOGIN_END: `${NAME_SPACE}/ON_LOGIN_END`,
  ON_REGISTER_END: `${NAME_SPACE}/ON_REGISTER_END`,
};

export const onCheckTokenStart = () => ({
  type: actionsType.ON_CHECK_TOKEN_START,
});
export const onCheckTokenEnd = () => ({
  type: actionsType.ON_CHECK_TOKEN_END,
});
export const onCheckTokenFailed = () => ({
  type: actionsType.ON_CHECK_TOKEN_FAILED,
});

export const onLoginEnd = (token) => ({
  type: actionsType.ON_LOGIN_END,
  token,
});
export const onRegisterEnd = (token) => ({
  type: actionsType.ON_REGISTER_END,
  token,
});
/**
 * @function login
 * @param {object} payload
 * @param {string} payload.email
 * @param {string} payload.mobile
 * @param {string} payload.password
 * @param {string} payload.nextRoute next route
 *
 */
export const login = (payload) => ({
  type: actionsType.LOGIN,
  payload,
});

/**
 * @function register
 * @param {object} payload
 * @param {string} payload.email
 * @param {string} payload.mobile
 * @param {string} payload.password
 * @param {string} payload.nextRoute next route
 *
 */
export const register = (payload) => ({
  type: actionsType.REGISTER,
  payload,
});

/**
 * @function sendVerifyAccount
 * @param {object} payload
 * @param {string} payload.email
 * @param {string} payload.mobile
 *
 */
export const sendVerifyAccount = (payload) => ({
  type: actionsType.SEND_VERIFY_ACCOUNT,
  payload,
});


/**
 * @function getMe
 * This is action create to let as make the action async
 * @param {*} dispatch
 * @param {*} token
 * @param {*} onRemoveToken
 */
export function reAuthenticate(dispatch, token) {
  logger.debug('reAuthenticate start');
  ApiService.reAuthenticate(token).then((response) => {
    logger.debug('Token is valid');
    dispatch(setUser(response));
    dispatch(onCheckTokenEnd());
  })
    .catch(() => {
      logger.debug('Token is not valid');
      removeToken();
      dispatch(onCheckTokenFailed());
    })
    .finally(() => {
      logger.debug('reAuthenticate end');
    });
}
