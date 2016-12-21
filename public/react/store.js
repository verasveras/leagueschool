const createStore = require('redux').createStore;
const rootReducer = require('./reducers/root-reducer');

module.exports = createStore(rootReducer);