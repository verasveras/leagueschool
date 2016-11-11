'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./components/header/header.jsx');

class App extends React.Component {

	render() {
		return (<Header />)
	}

}

ReactDOM.render(<App />, document.getElementById('app'));