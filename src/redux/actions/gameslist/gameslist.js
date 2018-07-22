import { SELECT_GAME } from '../../types';

export const selectGame = game => ({
    type: SELECT_GAME,
    game
});
