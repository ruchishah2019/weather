import { combineReducers } from 'redux';
import {wheather} from './whether';

const rootReducer = combineReducers({
    wheather: wheather,
});

export default rootReducer;
