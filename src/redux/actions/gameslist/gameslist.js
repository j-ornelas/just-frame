import { SELECT_GAME } from '../../types';

export const selectGame = id => ({
    type: SELECT_GAME,
    id
});
