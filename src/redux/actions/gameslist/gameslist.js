import { SELECT_GAME, SELECT_CHARACTER } from '../../types';

export const selectGame = game => ({
    type: SELECT_GAME,
    game
});

export const selectCharacter = character => ({
    type: SELECT_CHARACTER,
    character
});
