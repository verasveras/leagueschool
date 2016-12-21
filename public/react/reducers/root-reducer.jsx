const SET_SUMMONER_NAME = require('./constants.js').SET_SUMMONER_NAME;
const SET_GAME = require('./constants.js').SET_GAME;

const initialSummonerState = {
  name: '',
  game: {}
};

module.exports = function (state = initialSummonerState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_SUMMONER_NAME:
      newState.name = action.name;
      break;

    case SET_GAME:
      newState.game = action.game;
      break;

    default:
      return state;
  }

  return newState;

}