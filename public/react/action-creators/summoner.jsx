const SET_SUMMONER_NAME = require('../reducers/constants').SET_SUMMONER_NAME;
const SET_SUMMONER_ID = require('../reducers/constants').SET_SUMMONER_ID;
const SET_GAME = require('../reducers/constants').SET_GAME;

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
    name: name
  };
}


// GETTING THINGS -- CALL THESE AND LET THESE CALL SETTERS FOR YOU
function setSummonerGame (name){
	return dispatch => {
    axios.get(`/api/albums/${albumId}`)
      .then(response => {
        dispatch(setGame(response.data));
      });
  };
}

module.exports = {
	setSummonerName
}



