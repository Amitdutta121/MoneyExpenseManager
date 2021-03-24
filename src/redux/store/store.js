import {createStore, combineReducers, applyMiddleware} from "redux";
import categoryReducer from "../Reducers/CategoryReducer";
import {persistStore, persistReducer} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLogger} from "redux-logger/src";
import expenseReducer from "../Reducers/ExpenseReducer";


const rootReducer = combineReducers({
    categoryReducer:categoryReducer,
    expenseReducer:expenseReducer
})


let persistConfig ={
    key:'root',
    storage:AsyncStorage,
    whitelist:['categoryReducer','expenseReducer']
}

const persistedReducer = persistReducer(persistConfig , rootReducer)


export let configureStore =  createStore(persistedReducer, applyMiddleware(createLogger()))
const persistedStore = persistStore(configureStore)

export default persistedStore;
