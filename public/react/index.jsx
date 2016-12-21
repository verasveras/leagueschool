'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./components/header/header.jsx');
const Footer = require('./components/footer/footer.jsx');
const SearchbarContainer = require('./components/searchbar/SearchbarContainer.jsx');

// import Header from 

class App extends React.Component {

	render() {
		return (<div>
			<Header />
			<SearchbarContainer/>
			<Footer/>
		</div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('app'));