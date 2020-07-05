import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(thunk))
)
export default store;
