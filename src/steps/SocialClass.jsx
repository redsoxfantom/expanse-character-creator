import React, {Component} from "react";
import DiceButton from '../core/DiceButton.jsx'
import "../App.css";

class SocialClass extends Component {
    constructor(props) {
        super(props)

        if(props.stepData["Step4"]) {
            this.state = props.stepData["Step4"]
        } else {
            this.state = {
                selectedClass: ""
            }
        }

        this.descriptions = {
            "":"",
            "OUTSIDER" : "More of a non-social class, outsiders tend to be outcasts, criminals, or non-conformists who can’t or won’t live according to society’s customs. They often lack access to things other people take for granted and learn to get by on their own, sometimes forming their own support networks and structures outside of those of mainstream society. Some outsiders reject the mainstream by choice, but in many cases, outsiders are pushed out by society’s biases.",
            "LOWER CLASS" : "Hard, usually physical, labor and precarious employment tend to rule the lives of lower class characters. Still, that work is often all that separates them from becoming outsiders, so they cling to it. Lower class characters often depend on family and friends to help keep them out of utter poverty. They might live in failing industrial areas, inner city slums, or hardscrabble farms. In all cases, they make do with what is available and find ways to stretch out resources until the next payday or job comes along.",
            "MIDDLE CLASS" : "A measure of comfort and security comes with the middle class. A steady job, often skilled labor or “white collar,” supplies the means to afford a few luxuries or non-essentials. Middle class characters might start off as a bit insular. They often separate themselves from the struggles of the lower social classes, focusing on the climb towards upper class status. Sometimes that climb leads to a slip. They tumble down to the lower class or even become outsiders. Some settle for stability instead, and prefer not to rock the boat.",
            "UPPER CLASS" : "Upper class characters sit at a society’s summit where they rarely need to worry about resources, except, of course, when they want more. Their concerns are often focused on the responsibilities and privileges associated with their status. Some are born into upper class privilege, inheriting wealth and opportunity, while others worked their way up to join the elite. In some societies, it’s almost impossible to work your way to upper class status, and even if you do, you might get less respect compared to hereditary 'old money' peers."
        }

        this.classChanged = this.classChanged.bind(this)
        this.onRoll = this.onRoll.bind(this)
    }

    classChanged(event) {
        this.setState({selectedClass: event.target.value})
    }

    onRoll(vals, sum) {

        let randomClass;

        if(this.props.origin === "BELTER") {
            if(sum === 2){randomClass = "OUTSIDER"}
            if(sum === 3){randomClass = "OUTSIDER"}
            if(sum === 4){randomClass = "OUTSIDER"}
            if(sum === 5){randomClass = "OUTSIDER"}
            if(sum === 6){randomClass = "LOWER CLASS"}
            if(sum === 7){randomClass = "LOWER CLASS"}
            if(sum === 8){randomClass = "LOWER CLASS"}
            if(sum === 9){randomClass = "MIDDLE CLASS"}
            if(sum === 10){randomClass = "MIDDLE CLASS"}
            if(sum === 11){randomClass = "MIDDLE CLASS"}
            if(sum === 12){randomClass = "UPPER CLASS"}
        } else if(this.props.origin === "EARTHER") {
            if(sum === 2){randomClass = "OUTSIDER"}
            if(sum === 3){randomClass = "OUTSIDER"}
            if(sum === 4){randomClass = "LOWER CLASS"}
            if(sum === 5){randomClass = "LOWER CLASS"}
            if(sum === 6){randomClass = "LOWER CLASS"}
            if(sum === 7){randomClass = "MIDDLE CLASS"}
            if(sum === 8){randomClass = "MIDDLE CLASS"}
            if(sum === 9){randomClass = "MIDDLE CLASS"}
            if(sum === 10){randomClass = "MIDDLE CLASS"}
            if(sum === 11){randomClass = "UPPER CLASS"}
            if(sum === 12){randomClass = "UPPER CLASS"}
        } else if(this.props.origin === "MARTIAN") {
            if(sum === 2){randomClass = "OUTSIDER"}
            if(sum === 3){randomClass = "LOWER CLASS"}
            if(sum === 4){randomClass = "LOWER CLASS"}
            if(sum === 5){randomClass = "LOWER CLASS"}
            if(sum === 6){randomClass = "LOWER CLASS"}
            if(sum === 7){randomClass = "MIDDLE CLASS"}
            if(sum === 8){randomClass = "MIDDLE CLASS"}
            if(sum === 9){randomClass = "MIDDLE CLASS"}
            if(sum === 10){randomClass = "MIDDLE CLASS"}
            if(sum === 11){randomClass = "MIDDLE CLASS"}
            if(sum === 12){randomClass = "UPPER CLASS"}
        }

        this.setState({selectedClass: randomClass})
    }

    render() {
        return(
            <div>
                <select value={this.state.selectedClass} onChange={this.classChanged}>
                    <option value=""></option>
                    <option value="OUTSIDER">OUTSIDER</option>
                    <option value="LOWER CLASS">LOWER CLASS</option>
                    <option value="MIDDLE CLASS">MIDDLE CLASS</option>
                    <option value="UPPER CLASS">UPPER CLASS</option>
                </select>
                <br/>
                <DiceButton numDice="2" onRoll={this.onRoll} />
                <h4>Description</h4>
                <p>{this.descriptions[this.state.selectedClass]}</p>
            </div>
        );
    }
}

export default SocialClass