const NAME_SPACE = 'user';

export const actionsType = {
  SET_USER: `${NAME_SPACE}/SET_USER`,
  REMOVE_USER: `${NAME_SPACE}/REMOVE_USER`,
};

export const setUser = (payload) => ({
  type: actionsType.SET_USER,
  payload,
});

export const removeUser = (payload) => ({
  type: actionsType.REMOVE_USER,
  payload,
});
