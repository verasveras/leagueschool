'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class Footer extends React.Component {


	render() {
		const divStyle = {
  			backgroundColor: '#FCE97B', // '#312648' '#FCE97B'
  			textAlign: 'center',
  			marginTop: '80%',
  			paddingTop: '7px',
  			paddingBottom: '7px',
  			verticalAlign: 'middle',
		}

		return (<div style={divStyle}> 
			Developed by <a href="http://lisaveras.com/">Lisa Veras</a><a href="http://twitter.com/lisaveras"> <img src="/images/twitter.svg"/></a> 
		</div>
		)
	}

}

module.exports = Footer;