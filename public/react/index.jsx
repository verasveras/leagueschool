'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./components/header.jsx');
const Footer = require('./components/footer.jsx');
const SearchbarContainer = require('./containers/searchbarContainer.jsx');
const SummonerbarContainer = require('./containers/summonerbarContainer.jsx');

// import Header from 

class App extends React.Component {

	render() {
		return (<div>
			<Header />
			<SearchbarContainer/>
			<SummonerbarContainer/>
			<Footer/>
		</div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('app'));