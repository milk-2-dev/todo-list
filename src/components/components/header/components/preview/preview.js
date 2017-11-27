import React, { Component } from 'react';

import './preview.css';

class Preview extends Component {
	constructor(props) {
		super(props);
		this.componentName = "[Preview]";

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
				<span className="eye pull-right"></span>
		);
	}
}

export default Preview;
