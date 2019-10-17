const NAME_SPACE = 'global';

export const globalActionType = {
  INCREMENT: `${NAME_SPACE}_INCREMENT`,
  CHANGE_WINDOW_SIZE: `${NAME_SPACE}_CHANGE_WINDOW_SIZE`,
};

// eslint-disable-next-line import/prefer-default-export
export const increment = (payload) => ({
  type: globalActionType.INCREMENT,
  payload,
});

export const changeWindowSize = (payload) => ({
  type: globalActionType.CHANGE_WINDOW_SIZE,
  payload,
});
