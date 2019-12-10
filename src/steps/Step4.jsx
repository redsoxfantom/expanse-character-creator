import React, {Component} from "react";
import SocialClass from "./SocialClass.jsx"
import "../App.css";

class Step4 extends Component {
    constructor(props) {
        super(props)

        if(props.stepData["Step4"]) {
            this.state = props.stepData["Step4"]
        } else {
            this.state = {}
        }

        this.origin = props.stepData["Step3"]["origin"]
        this.getStepData = this.getStepData.bind(this);
    }

    getStepName() {
        return "Step4"
    }

    getStepData() {
        return {}
    }

    render() {
        return(
            <div>
                <h3>Step 4: Background</h3>
                <p>
                    Characters do not spring from nowhere, fully formed. Their stories start somewhere, and they had a life and experiences prior to the start of the story being told around the game table. This is the character’s background.
                </p>
                <p>
                    Backgrounds are broad by design. They offer room for deciding exactly what a given background means in the context of your character’s story. Backgrounds are intended to offer inspiration as to your character’s history, early life, and personality
                </p>
                <SocialClass origin={this.origin} stepData={this.state}/>
            </div>
        )
    }
}

export default Step4