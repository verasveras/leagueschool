const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;
const reduxLogger = require('redux-logger')();
const thunkMiddleware = require('redux-thunk');
const rootReducer = require('./reducers/root-reducer');

let middlewear = applyMiddleware(reduxLogger, thunkMiddleware);

module.exports = createStore(rootReducer, middlewear);