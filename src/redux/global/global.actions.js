const NAME_SPACE = 'global';

export const actionsType = {
  INCREMENT: `${NAME_SPACE}/INCREMENT`,
  DECREMENT: `${NAME_SPACE}/DECREMENT`,
};

// eslint-disable-next-line import/prefer-default-export
export const increment = (payload) => ({
  type: actionsType.INCREMENT,
  payload,
});

export const decrement = (payload) => ({
  type: actionsType.DECREMENT,
  payload,
});
