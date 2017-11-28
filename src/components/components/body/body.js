import React, { Component } from 'react';
import Guid from 'guid';
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
			status: true,
			id: Guid.create()
		});

		this.setState(
				{
					items: tmpItems
				}
		);
	}

	deleteItem(id){
		let tmpItems = this.state.items;
		let sortArr = [];

		console.log('deleteItem id '+ id);

		sortArr = tmpItems.filter((item) => {
			return !item.id.equals(id.toString());
		});

		console.log('sortArr '+ sortArr);

		this.setState(
				{
					items: sortArr
				}
		);
	}

	render(){
		return(
				<div className="profile">

					<Avatar/>

					<ButtonAdd handleAddItem={this.addItem}/>

					<Overview overviewData={this.state.items}/>

					<ul className="task-list">
						{
							this.state.items.map((item, index) =>
									<Item key={item.id.toString()}
									      status={item.status}
									      handleRemoveItem={this.deleteItem}
												id={item.id.toString()}
									      data={item}
									/>
							)
						}
					</ul>

				</div>
		)
	}
}

export default Body;