'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const store = require ('../store.js');
const Summonerbar = require('../components/summonerbar.jsx');

class SummonerbarContainer extends React.Component {

  constructor(){
    
  	super();
  	this.state = store.getState();

  };

  componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
         this.setState(store.getState());
      }); // subscribe takes a callback function and returns and unsubcribe function.
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

	render() {
		return (<div> 
			<Summonerbar name={this.state.name} level={this.state.level} id={this.state.id} />
		</div>
		)
	}

}

module.exports = SummonerbarContainer;