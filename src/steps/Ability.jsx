import React, {Component} from "react";
import "../App.css";
import DiceButton from "../core/DiceButton.jsx"

class Ability extends Component {
    constructor(props) {
        super(props)

        if(props.initVal) {
            this.state = {
                value: props.initVal
            }
        } else {
            this.state = {
                value: ''
            }
        }

        this.handleRandom = this.handleRandom.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({value: event.target.value});
        this.props.onChange(event.target.value);
    }

    handleRandom(rolls) {
        let sum = 0;
        rolls.forEach(function(element) {
            sum += element;
        }, this);

        let val;

        if(sum === 3) {val = -2}
        if(sum === 4) {val = -1}
        if(sum === 5) {val = -1}
        if(sum === 6) {val = 0}
        if(sum === 7) {val = 0}
        if(sum === 8) {val = 0}
        if(sum === 9) {val = 1}
        if(sum === 10) {val = 1}
        if(sum === 11) {val = 1}
        if(sum === 12) {val = 2}
        if(sum === 13) {val = 2}
        if(sum === 14) {val = 2}
        if(sum === 15) {val = 3}
        if(sum === 16) {val = 3}
        if(sum === 17) {val = 3}
        if(sum === 18) {val = 4}

        this.setState({value : val})
        this.props.onChange(val);
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