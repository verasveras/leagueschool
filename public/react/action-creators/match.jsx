// https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/32401288?api_key=RGAPI-2f6257e5-8e75-4a10-853c-0e8009f1632d
const SET_MATCHLIST = require('../reducers/constants').SET_MATCHLIST;
const SET_POSITIONS = require('../reducers/constants').SET_POSITIONS;
const RIOT_KEY = require('../../../keys.js');
const axios = require('axios');

function getMatchlist (summonerId){
  return (dispatch, getstate) => {
    axios.get(`https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/${summonerId}?api_key=${RIOT_KEY}`)
      .then(response => {
      	let matches = response.data.matches || [];

        let positions = { 
          TOP: 0,
          MID: 0,
          JUNGLE: 0,
          DUO_CARRY: 0, 
          DUO_SUPPORT: 0
        }

      	let matchlist = matches.map((match) => {

          if (match.lane === 'MID' || match.lane === 'MIDDLE'){
            console.log('Adding to mid probably');
            positions.MID++;
          }
          else if (match.lane === 'BOT' || match.lane === 'BOTTOM'){
            console.log(match.lane);
            if (match.role === 'DUO_CARRY') positions.DUO_CARRY++;
            if (match.role === 'DUO_SUPPORT') positions.DUO_SUPPORT++;
          }
          else {
            positions[match.lane]++;

          }
        
          return match.matchId;
        });

        /* lane: Participant's lane (Legal values: MID, MIDDLE, TOP, JUNGLE, BOT, BOTTOM)
        role: Participant's role (Legal values: DUO, NONE, SOLO, DUO_CARRY, DUO_SUPPORT) */
        console.log('These are the positions', positions);
        dispatch(setPositions(positions));
        dispatch(setMatchlist(matchlist));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

function setMatchlist (matchlist){
  return {
    type: SET_MATCHLIST,
    matchlist: matchlist
  };
}

module.exports = { 
	getMatchlist
};

function setPositions (positions){
  return {
    type: SET_POSITIONS,
    positions: positions
  };
}

module.exports = { 
  getMatchlist
};