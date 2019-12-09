import React, {Component} from "react";
import "../App.css";
import DiceButton from "../core/DiceButton.jsx"

class Ability extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }

        this.handleRandom = this.handleRandom.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({value: event.target.value});
    }

    handleRandom(rolls) {
        let sum = 0;
        rolls.forEach(function(element) {
            sum += element;
        }, this);

        if(sum === 3) {this.setState({value : -2})}
        if(sum === 4) {this.setState({value : -1})}
        if(sum === 5) {this.setState({value : -1})}
        if(sum === 6) {this.setState({value : 0})}
        if(sum === 7) {this.setState({value : 0})}
        if(sum === 8) {this.setState({value : 0})}
        if(sum === 9) {this.setState({value : 1})}
        if(sum === 10) {this.setState({value : 1})}
        if(sum === 11) {this.setState({value : 1})}
        if(sum === 12) {this.setState({value : 2})}
        if(sum === 13) {this.setState({value : 2})}
        if(sum === 14) {this.setState({value : 2})}
        if(sum === 15) {this.setState({value : 3})}
        if(sum === 16) {this.setState({value : 3})}
        if(sum === 17) {this.setState({value : 3})}
        if(sum === 18) {this.setState({value : 4})}
    }

    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <input 
                    type="text" 
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <br/>
                <DiceButton onRoll={this.handleRandom}/>
            </div>
        );
    }
}

export default Ability