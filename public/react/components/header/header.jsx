'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class Header extends React.Component {

	render() {
		return (<div> 
			<img src="/images/LSLogoBar.png"/>
			Dogs love League School 
		</div>
		)
	}

}

module.exports = Header;