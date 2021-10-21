import { combineReducers,  createStore } from "redux";
import formEntry from './redusers/formEntry';

const store = createStore(combineReducers({
    formEntry
}))

export default store