import {createBrowserHistory} from "history";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import artistsReducer from "./reducers/artistsReducer";
import albumsReducer from "./reducers/albumsReducer";
import trackReducer from "./reducers/tracksReducer";
import usersReducer from "./reducers/usersReducer";
import trackHistoriesReducer from "./reducers/trackHistoriesReducer";
import axios from "../axios-api";
import thunkMiddleware from 'redux-thunk';
import {loadState, saveState} from "./localStorage";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    artists: artistsReducer,
    albums: albumsReducer,
    tracks: trackReducer,
    users: usersReducer,
    trackHistories: trackHistoriesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveState({
        users: {
            user: store.getState().users.user
        }
    });
});

axios.interceptors.request.use(config => {
    try {
        config.headers['Authorization'] = store.getState().users.user.token;
    } catch (e) {
        //
    }
    return config;
});

export default store;