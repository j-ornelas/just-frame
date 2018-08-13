import data from '../../../../frameData';
import { SELECT_GAME, SELECT_CHARACTER } from '../../types';

const INITIAL_STATE = {
    selectedGame: {},
    allGamesList: data,
    selectedCharacter: {}
};

export const gamesListState = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_GAME:
            return { ...state, selectedGame: action.game };
        case SELECT_CHARACTER:
            return { ...state, selectedCharacter: action.character}
        default:
            return state;
    }
};
