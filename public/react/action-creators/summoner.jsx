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
    name: name1
  }
}


// GETTING THINGS -- CALL THESE AND LET THESE CALL SETTERS FOR YOU

function getSummonerName (){
	return 

} // check if a valid name and get the id and set name.

function setSummonerGame (name){
	return (dispatch) => {
    axios.get(`~~~~~~~~~~`)
      .then(response => {
        dispatch(setGame(response.data));
      });
  };
}

module.exports = setSummonerName;