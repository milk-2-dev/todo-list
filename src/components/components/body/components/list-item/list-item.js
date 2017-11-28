import React, { Component } from 'react';


import './list-item.css';

class Item extends Component{

	constructor(props) {
		super(props);
		this.componentName = "[Item]";

		this.state = {
			enabled: this.props.data.status,

		};

		this.handleClick = this.handleClick.bind(this);
		this.handleStatusClick = this.handleStatusClick.bind(this);

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


	////private methods
	handleClick(){
		this.props.handleRemoveItem(this.props.id.toString());
	}

	handleStatusClick(){
		let status = this.state.enabled;
		status = !status;

		console.log('status '+status);

		this.setState(
				{
					enabled: status
				}
		)
	}



	render(){
		return(
				<li className={"list-item " + (this.state.enabled ? "list__item--completed" : "")}
					onClick={this.handleStatusClick}>
					<span className="close" onClick={this.handleClick}>x</span>
					<p className="item__title text-primary">{this.props.data.title}</p>
					<p className="item__desc text-info">{this.props.data.description}</p>
				</li>
		)
	}
}

export default Item;