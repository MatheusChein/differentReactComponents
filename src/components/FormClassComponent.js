import { Component, createRef } from "react";

export class NameForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			value: ''
		};

		this.inputRef = createRef()

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert('The value submitted is ' + this.state.value);
		event.preventDefault();	
	}

	componentDidMount() {
		this.inputRef.current.focus()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type='text' value={this.state.value} onChange={this.handleChange} ref={this.inputRef}/>
				</label>
				<input type='submit' value='Submit'/>
			</form> 
		)
	}
}