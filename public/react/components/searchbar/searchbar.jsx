const React = require ('react');
const ReactDOM = require('react-dom');


class Searchbar extends React.Component {

	render() {
		return (<div><form>
			<input type="text" name="FirstName" placeholder="Summoner Name Here"/><br/>
			<input type="submit" value="Submit"/>
		</form></div>
		)
	}

}

module.exports = Searchbar;
