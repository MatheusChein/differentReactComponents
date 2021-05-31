import { Component } from "react";

export class Toggle extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isToggleOn: true
		}

	}

	handleClick = () => {
		this.setState({
			isToggleOn: !this.state.isToggleOn
		})
	}

	componentDidMount() {
		console.log('toggle button mounted')
	}

	// shouldComponentUpdate() {
	// 	return false
	// }

	componentDidUpdate() {
		console.log('toggle button updated')
	}

	render() {
		console.log('toggle button rendered')

		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		);
	}


}