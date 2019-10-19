const NAME_SPACE = 'user';

export const actionsType = {
  SET_USER: `${NAME_SPACE}/SET_USER`,
};

export const setUser = (payload) => ({
  type: actionsType.SET_USER,
  payload,
});
