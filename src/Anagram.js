import React, {Component} from "react";



class Anagram extends Component {
	
	//React has something called state management
	state = {
		input:{
			first: "",
			second: ""
		}
	};

	handleChange = e => {
		const input = {...this.state.input};
		input[e.currentTarget.name] = e.currentTarget.value;
		this.setState({input});
	}

	handleCheck = e => {
		//The next code stops the page from automatically reloading
		e.preventDefault();
		const {first, second} = this.state.input;
		const getFirst = first.split("").sort().join("");
		const getSecond = second.split("").sort().join("");
		//Here you are comparing the first and the second strings to see if they are the same in ES6.
		// The older style would have been if else if condition
		getFirst === getSecond ? this.setState({check:"This is anagram!"}) : this.setState({check:"This is not anagram!"});
		
		//After the comparisson, the fields gets set to nothing
		this.setState({
			input: {
				first: "",
				second: ""
			}
		})
	}

	render() {

		// this we call destructing 
		const {first, second} = this.state.input;
		return (
			<div className="anagram">
				<form onSubmit={this.handleCheck}>
					<input type="text" name="first" placeholder="word 1" value={first} onChange={this.handleChange}/>
					<br /><br />
					<input type="text" name="second" placeholder="word 2" value={second} onChange={this.handleChange}/>
					<br /><br />
					<button class="btn btn-primary">Check Anagram</button>
				</form><br />

				<p>ANAGRAM TEST: {this.state.check}</p>
			</div>
		);
	}
}

export default Anagram;
