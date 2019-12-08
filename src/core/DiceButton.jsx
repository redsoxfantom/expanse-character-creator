import React, {
    Component
} from "react";
import "../App.css";

class DiceButton extends Component{
    constructor(props) {
        super(props)
        this.state = {}

        this.buttonPressed = this.buttonPressed.bind(this)
    }
  
    buttonPressed() {
        let dicerolls = []
        let numDice = this.props.numDice ? this.props.numDice : 3
        for(let i = 0; i < numDice; i++) {
            dicerolls.push(Math.floor((Math.random() * 6) + 1));
        }

        this.props.onRoll(dicerolls);
    }

    render(){
        return(
            <button onClick={this.buttonPressed}>
                {this.props.text ? this.props.text : "Randomize"}
            </button>
        );
    }
}

export default DiceButton;