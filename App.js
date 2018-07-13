import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/redux/reducers';

import GamesList from './src/components/GamesList/GamesList';

export default class App extends React.Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>
                <GamesList />
            </Provider>
        );
    }
}
