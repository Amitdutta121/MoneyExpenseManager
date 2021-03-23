import {createStore, combineReducers} from "redux";
import categoryReducer from "../Reducers/CategoryReducer";

const rootReducer = combineReducers({
    categoryReducer:categoryReducer
})
const configureStore = ()=> createStore(rootReducer)

export default configureStore;
