import React, { Component } from 'react';
import OverviewItem from './components/overview-item';

import './overview.css';

class Overview extends Component{
	constructor(props) {
		super(props);
		this.componentName = "[Overview]";

		this.state = {
			completed:0,
			total:0
		};

		console.log(`${this.componentName} component constructor is called...`);
	}

	componentWillMount() {
		console.log(`${this.componentName} component will mount...`);
	}

	componentDidMount() {
		console.log(`${this.componentName} component did mount...`);
	}

	componentWillReceiveProps(newProps) {
		this.setState(
				{
					total: newProps.overviewData.length,
					completed: newProps.overviewData.filter((item) => {
						return item.status
					}).length
				}
		);
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



	render(){
		return(
				<ul className="task clearfix">

					<OverviewItem itemCount={this.state.total} itemStatus={'total'}/>
					<OverviewItem itemCount={this.state.completed} itemStatus={'completed'}/>

				</ul>
		)
	}
}

export default Overview;