/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import {configureStore} from "./src/redux/store/store";
import persistedStore from "./src/redux/store/store";

import {PersistGate} from "redux-persist/es/integration/react"

const store = configureStore;

const ExpenseManager = () => {
    return(
        <Provider store={store}>
            <PersistGate persistor={persistedStore} loading={null}>
                <App>


                </App>
            </PersistGate>

        </Provider>
    )
}


AppRegistry.registerComponent(appName, () => ExpenseManager);
