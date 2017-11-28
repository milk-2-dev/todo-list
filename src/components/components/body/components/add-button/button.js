import React, { Component } from 'react';

import './button.css';

class ButtonAdd extends Component{


	///components methods

	constructor(props) {
		super(props);
		this.componentName = "[ButtonAdd]";

		this.state = {};

		this.handleClick = this.handleClick.bind(this);

		console.log(`${this.componentName} component constructor is called...`);
	}

	componentWillMount() {
		console.log(`${this.componentName} component will mount...`);
	}

	componentDidMount() {
		console.log(`${this.componentName} component did mount...`);
	}

	componentWillReceiveProps(newProps) {
		console.log(`${this.componentName} component will receive props...`);
	}

	shouldComponentUpdate(newProps, newState) {
		let shouldUpdate = true;

		console.log(`Should ${this.componentName} component update: ` + shouldUpdate);
		return shouldUpdate;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log(`${this.componentName} component will update...`);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(`${this.componentName} component did update...`);
	}

	componentWillUnmount() {
		console.log(`${this.componentName} component will unmount...`);
	}

	componentDidCatch(error, info) {
		console.log(`${this.componentName} component did catch...`);
	}

	/////

	////public methods


	////private methods
	handleClick(){
		this.props.handleAddItem(this.props.id);

		console.log('this,props.id ' + this.props.id)
	}

	render(){
		return(
				<span className="actionItem" onClick={this.handleClick}></span>
		)
	}
}

export default ButtonAdd;