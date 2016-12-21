const SET_SUMMONER_NAME = require('../reducers/constants').SET_SUMMONER_NAME;

function setSummonerName (name) {
  return {
    type: SET_SUMMONER_NAME,
    name: name
  };
};

module.exports = {
	setSummonerName
}



