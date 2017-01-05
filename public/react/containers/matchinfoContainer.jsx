'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Matchinfo = require('../components/matchinfo.jsx');

class MatchinfoContainer extends React.Component {

  constructor(){
    
  	super();
  	this.state = store.getState();
  	this.submitSummmer = this.submitSummmoner.bind(this);

  };

  componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
         this.setState(store.getState());
      }); // subscribe takes a callback function and returns and unsubcribe function.
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

	render() {
		return (<div> 

			
		</div>
		)
	}

}

module.exports = MatchinfoContainer;