import { combineReducers } from 'redux';
import repoReducer from './repos';

export default combineReducers({
    repos: repoReducer
});
