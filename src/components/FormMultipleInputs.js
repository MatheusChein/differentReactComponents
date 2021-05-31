import { Component } from "react";

export class Reservation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isGoing: true,
			numberOfGuests: 2
		}

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleInputChange(event) {
		const { target } = event;
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	handleSubmit(event) {
		const going = this.state.isGoing === true ? 'Yes' : 'No'
		alert('Are you going? ' + going)
		going === 'Yes' && alert('How many guests? ' + this.state.numberOfGuests)
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label >
					Is going:
					<input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/>
				</label>
				<label >
					Number of guests
					<input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}