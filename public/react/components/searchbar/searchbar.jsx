const React = require('react');
const ReactDOM = require('react-dom');

class Searchbar extends React.Component {

	render() {
		let currentSummoner = this.props.currentSummoner;
		let submitSummmoner = this.props.submitSummmoner;

		return (
		<center>
		<form onSubmit={submitSummmoner}>
			<input type="text" name="summonerName" placeholder={currentSummoner}/><br/>
			<input type="submit" value="Submit"/>
		</form>
		</center>
		)
	}

}

module.exports = Searchbar;
