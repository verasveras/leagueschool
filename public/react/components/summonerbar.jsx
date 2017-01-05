'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class Summonerbar extends React.Component {

	constructor() {
		super();
		this.state = store.getState();
  	}

	render() {
		return (<div> 
			{this.state.name}
		</div>
		)
	}

}

module.exports = Summonerbar;