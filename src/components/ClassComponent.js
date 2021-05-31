import { Component } from "react";

export class ClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}

		this.handleClick = this.handleClick.bind(this)

	}

	// state = {
	// 	count: 0
	// }

	componentDidMount() {
		console.log('mounted');

	}

	componentWillUnmount() {
		console.log('bye')
	}

	handleClick() {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		const { name } = this.props;
		console.log('render')
		return (
			<>
				<h1>I'm a class component, my name is {name}</h1>
				<button onClick={this.handleClick}>Increase me {this.state.count}</button>
			</>
		)
	}
}