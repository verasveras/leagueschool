const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;
const reduxLogger = require('redux-logger')();
const rootReducer = require('./reducers/root-reducer');

let middlewear = applyMiddleware(reduxLogger);
module.exports = createStore(rootReducer, middlewear);