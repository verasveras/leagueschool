const SET_SUMMONER_NAME = require('./constants.js').SET_SUMMONER_NAME;
const SET_SUMMONER_ID = require('./constants').SET_SUMMONER_ID;
const SET_SUMMONER_LEVEL = require('./constants').SET_SUMMONER_LEVEL;
const SET_GAME = require('./constants.js').SET_GAME;

const initialSummonerState = {
  name: null,
  id: null,
  level: null,
  game: null,
  tips: null
};

module.exports = function (state = initialSummonerState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_SUMMONER_NAME:
      newState.name = action.name;
      break;

    case SET_SUMMONER_ID:
      newState.id = action.id;
      break;

    case SET_SUMMONER_LEVEL:
      newState.level = action.level;
      break;

    case SET_GAME:
      newState.game = action.game;
      break;

    default:
      return state;
  }

  return newState;

}