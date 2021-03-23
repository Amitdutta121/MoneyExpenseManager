/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import configureStore from "./src/redux/store/store";

const store = configureStore();

const ExpenseManager = () => {
    return(
        <Provider store={store}>
            <App>


            </App>
        </Provider>
    )
}


AppRegistry.registerComponent(appName, () => ExpenseManager);
