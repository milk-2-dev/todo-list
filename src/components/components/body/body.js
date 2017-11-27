import React, { Component } from 'react';
import Avatar from './components/avatar';
import ButtonAdd from './components/add-button';
import Overview from './components/overview';
import Item from './components/list-item';

import './body.css';

class Body extends Component{
	constructor(props) {
		super(props);
		this.componentName = "[Body]";

		this.state = {
			items: []
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);

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

	addItem(){
		let tmpItems = this.state.items;
		tmpItems.push({
			title: "Default Title",
			description: "Default description",
			status: false,
			id: new Date().now
		});

		this.setState(
				{
					items: tmpItems
				}
		);
	}

	deleteItem(id){
		let tmpItems = this.state.items;

		tmpItems = tmpItems.filter((item) => {
			return item.id === id;
		});

		this.setState(
				{
					items: tmpItems
				}
		);
	}

	render(){
		return(
				<div className="profile">

					<Avatar/>

					<ButtonAdd handleAddItem={this.addItem}/>

					<Overview/>

					<ul className="task-list">
						{
							this.state.items.map((item, index) =>
									<Item key={index}
									      title={item.title}
									      description={item.description}
									      status={item.status}
									      handleRemoveItem={this.deleteItem}
												id={item.id}/>
							)
						}
					</ul>

				</div>
		)
	}
}

export default Body;