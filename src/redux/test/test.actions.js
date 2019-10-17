const NAME_SPACE = 'test';

export const actionsType = {
INCREMENT: `${NAME_SPACE}/INCREMENT`,
DECREMENT: `${NAME_SPACE}/DECREMENT`,
};

export const increment = (payload) => ({
type: actionsType.INCREMENT,
payload,
});

export const decrement = (payload) => ({
type: actionsType.DECREMENT,
payload,
});
