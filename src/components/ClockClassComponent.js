import { Component } from "react"

export class ClockClassComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date()
		}
	}

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}

	render() {

		return (
			<>
				<h1>Hello Clock</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
			</>
		)
	}
}