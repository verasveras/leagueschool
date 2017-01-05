const React = require('react');
const store = require ('../store.js');
const Searchbar = require('../components/searchbar.jsx');
const setSummonerName = require('../action-creators/summoner.jsx').setSummonerName; // action to add new summoner
const getSummonerName = require('../action-creators/summoner.jsx').getSummonerName; // action to add new summoner

// console.log('getSummonerName', getSummonerName);

class SearchbarContainer extends React.Component {

  constructor(){
    
  	super();
  	this.state = store.getState();
  	this.submitSummmer = this.submitSummmoner.bind(this);

  };

  componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
         this.setState(store.getState());
      }); // subscribe takes a callback function and returns and unsubcribe function.
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  submitSummmoner (event) {
    event.preventDefault();
    let summonerName = event.target.summonerName.value;
    store.dispatch(getSummonerName(summonerName)); // dispatch an action creatore that will change the store.
  }

  render () {
    let currentSummoner = this.state.name; 
  	return (
  		<Searchbar submitSummmoner={this.submitSummmoner} currentSummoner={currentSummoner}/>
  	)
  };

}

module.exports = SearchbarContainer;