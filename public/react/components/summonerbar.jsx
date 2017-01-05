'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class Summonerbar extends React.Component {


	render() {

		let name = this.props.name;
		let level = this.props.level;
		let id = this.props.id;
		let showInfoBox = this.props.id ? true : false;

		const divStyle = {
  			backgroundColor: '#FCE97B', // '#312648' '#FCE97B'
  			textAlign: 'center',
  			marginTop: '10px',
  			marginRight: '25%',
  			marginLeft: '25%',
  			paddingTop: '7px',
  			paddingBottom: '7px',
  			verticalAlign: 'middle',
		}

		return (<div style={divStyle}>
			Summoner: {name}<br/>
			Level: {level}<br/>
			ID: {id}
		</div>
		)
	}

}

module.exports = Summonerbar;