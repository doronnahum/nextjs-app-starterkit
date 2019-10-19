import ApiService from 'src/services/api';
import logger from 'src/services/logger';
import { setUser } from 'src/redux/user/user.actions';

const NAME_SPACE = 'auth';

export const actionsType = {
  SET_TOKEN: `${NAME_SPACE}/SET_TOKEN`,
  ON_CHECK_TOKEN_START: `${NAME_SPACE}/ON_CHECK_TOKEN_START`,
  ON_CHECK_TOKEN_END: `${NAME_SPACE}/ON_CHECK_TOKEN_END`,
  ON_CHECK_TOKEN_FAILED: `${NAME_SPACE}/ON_CHECK_TOKEN_FAILED`,
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


/**
 * @function getMe
 * This is action create to let as make the action async
 * @param {*} dispatch
 * @param {*} token
 * @param {*} onRemoveToken
 */
export function getMe(dispatch, token, onRemoveToken) {
  logger.debug('getMe start');
  ApiService.me(token).then((response) => {
    logger.debug('Token is valid');
    dispatch(setUser(response));
    dispatch(onCheckTokenEnd());
  })
    .catch(() => {
      logger.debug('Token is not valid');
      onRemoveToken();
      dispatch(onCheckTokenFailed());
    })
    .finally(() => {
      logger.debug('getMe end');
    });
}
