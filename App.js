import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import reducers from './src/redux/reducers';
import RootStack from './src/navigation';

const logger = createLogger({
    // ...options
});

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}
