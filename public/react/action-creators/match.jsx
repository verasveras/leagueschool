https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/32401288?api_key=RGAPI-2f6257e5-8e75-4a10-853c-0e8009f1632d
const SET_SUMMONER_NAME = require('../reducers/constants').SET_SUMMONER_NAME;
const SET_SUMMONER_ID = require('../reducers/constants').SET_SUMMONER_ID;
const SET_SUMMONER_LEVEL = require('../reducers/constants').SET_SUMMONER_LEVEL;
const SET_GAME = require('../reducers/constants').SET_GAME;
const RIOT_KEY = require('../../../keys.js');
const axios = require('axios');

function getMatchlist (matchId){
  return (dispatch, getstate) => {
    axios.get(`https://na.api.pvp.net/api/lol/na/v2.2/match/${matchId}?api_key=${RIOT_KEY}`)
      .then(response => {
        dispatch(setMatchlist(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

function getMatch (matchId){
  return (dispatch, getstate) => {
    axios.get(`https://na.api.pvp.net/api/lol/na/v2.2/match/${matchId}?api_key=${RIOT_KEY}`)
      .then(response => {
        dispatch(setGame(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };

}

module.exports = { 
	getMatchlist
};