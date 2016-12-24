const SET_SUMMONER_NAME = require('../reducers/constants').SET_SUMMONER_NAME;
const SET_SUMMONER_ID = require('../reducers/constants').SET_SUMMONER_ID;
const SET_GAME = require('../reducers/constants').SET_GAME;
const RIOT_KEY = require('../../../keys.js');

function setSummonerName (name) {
  return {
    type: SET_SUMMONER_NAME,
    name: name
  };
};

function setSummonerID(id){
	 return {
    type: SET_GAME,
    name: name
  };
}

function setGame(game){
	 return {
    type: SET_GAME,
    name: name1
  }
}


// GETTING THINGS -- CALL THESE AND LET THESE CALL SETTERS FOR YOU

function getSummonerName (name){
	 return (dispatch, getstate) => {
    axios.get(`https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${name}?api_key=${RIOT_KEY}`)
      .then(response => {
        console.log(response);
        dispatch(setSummonerName(name));
      });
  };

} // check if a valid name and get the id and set name.

function setSummonerGame (name){

}

module.exports = setSummonerName;