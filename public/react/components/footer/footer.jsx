'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class Footer extends React.Component {


	render() {
		const divStyle = {
  			backgroundColor: 'gray',
  			textAlign: 'center',
  			marginTop: '80%',
  			paddingTop: '10px',
  			paddingBottom: '10px'
		}

		return (<div style={divStyle}> 
			Twitter: @lisaveras
		</div>
		)
	}

}

module.exports = Footer;