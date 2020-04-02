import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import caloriesReducer from '../reducers/calories';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

//The first one is for redux dev tools and the second one for our redux middleware.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            calories: caloriesReducer,
            filters: filtersReducer,
            auth: authReducer
        }), composeEnhancer(applyMiddleware(thunk))
    );
    return store;
};