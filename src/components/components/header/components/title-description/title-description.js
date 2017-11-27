import React, { Component } from 'react';

import './title-description.css';

class TitleDescription extends Component {
	constructor(props) {
		super(props);
		this.componentName = "[TitleDescription]";

		this.state = {};

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
	render() {
		return (
				<h4 className="title-description">UI Developer</h4>
		);
	}
}

export default TitleDescription;
