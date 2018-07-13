import data from '../../../../frameData';
import { SELECT_GAME } from '../../types';

const INITIAL_STATE = {
    selectedGame: '',
    allGamesList: data
};

export const gamesListState = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_GAME:
            return { ...state, selectedGame: action.id };
        default:
            return state;
    }
};