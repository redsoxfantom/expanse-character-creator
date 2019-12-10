import React, {Component} from "react";
import "../App.css";

class Step1 extends Component {
    constructor(props) {
        super(props)

        if(props.stepData["Step1"]) {
            this.state = {concept: props.stepData["Step1"]["concept"]}
        } else {
            this.state = {concept: ""}
        }

        this.onChange = this.onChange.bind(this)
        this.getStepData = this.getStepData.bind(this);
    }

    onChange(event) {
        this.setState({concept: event.target.value})
    }

    getStepData() {
        return {
            concept: this.state.concept
        }
    }
    
    getStepName() {
        return "Step1"
    }
    
    render() {
        return (
            <div>
                <h2>Step 1: Concept</h2>
                <p>
                    Come up with the type of character you’re interested in playing. You may want to read through the options in this and the following chapters for a sense of the range of characters you can create and play, especially if you are not already familiar with The Expanse setting and characters. Talk with the GM and the other players in your group about your character concept and how well it will fit into the kind of game the GM is looking to run and the kinds of characters the other players want to create. For example, a hard-bitten ex-mercenary might or might not fit in with a game about Martian naval officers, but could easily have a place in one focusing on a team of for-hire medical experts, even if just as a bodyguard for other characters. You may also want to come up with a set of abilities, as detailed in Step 2, and then consider potential concepts that work with those abilities as a jumping-off point.
                </p>
                <textarea cols="80" rows="5" onChange={this.onChange} value={this.state.concept} />
            </div>
        );
    }
}

export default Step1