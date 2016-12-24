const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;
const reduxLogger = require('redux-logger')();
const thunkMiddleware = require('redux-thunk').default;
const rootReducer = require('./reducers/root-reducer');

let middleware = applyMiddleware(reduxLogger, thunkMiddleware);

module.exports = createStore(rootReducer, middleware);