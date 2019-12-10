import React, {Component} from "react";
import DiceButton from '../core/DiceButton.jsx'
import "../App.css";

class Step3 extends Component {
    constructor(props) {
        super(props)

        if(props.stepData["Step3"]) {
            this.state = {
                origin: props.stepData["Step3"]["origin"]
            }
        } else {
            this.state = {
                origin: "BELTER"
            }
        }

        this.descriptions = {
            "BELTER" : {
                description: "You were born and raised in the Black, on a station or ship, and have lived most, if not all, of your life out in the Belt or beyond. Separated from death by nothing more than basic support systems your whole life, you have learned to be cautious and aware of your environment.",
                traits: [
                    "Your native gravity is microgravity. Belters are most comfortable “on the float” and handle moving in free-fall easily. You automatically have the Dexterity (Free-fall) focus. Conversely, Earth-normal gravity is crushingly heavy for a Belter.",
                    "You speak Belter Creole, a combination of loan-words and phrases from various languages, combined with gestures useful for communicating while wearing a vac suit and unable to speak.",
                    "Belters tend to be tall and willowy as a result of being raised in low- or microgravity environments. Regimens of bone-density drugs and genetic treatments are needed  to keep Belters healthy, and some Belters have minor physical abnormalities because of this.",
                    "Belters often have a diverse ethnic heritage, given the “melting pot” of the Belt, with ancestors from many different Earth cultures"
                ]
            },
            "EARTHER" : {
                description:"With a population of some 30 billion, many Earthers are unemployed and live on government-provided Basic Assistance (generally known as just “Basic”) which provides for their essential food, housing, and medical needs, but little else. You are likely one of the few to leave Earth to find a new life elsewhere",
                traits: [
                    "Your native gravity is normal gravity—“Earth-normal” or 1 g. Earthers can and do learn to operate in lower gravity, but lack the instincts of people raised in it.",
                    "Earthers have greater muscle and bone density from being raised in a gravity well, making them shorter and more broadly built than Belters or even native-born Martians, but Earthers in space need regular exercise and medical treatments to avoid muscle atrophy and bone density loss."
                ]
            },
            "MARTIAN" : {
                description: "Born in the Martian Congressional Republic, your life has been influenced by the Martian dream: to terraform the Red Planet into a lush and life-sustaining garden. Like the generations before you, you know that you will likely never see the completion of this work in your lifetime.",
                traits: [
                    "Your native gravity is low, the gravity of Mars rather than Earth. Martians are more comfortable with microgravity than Earthers, and better able to tolerate a full 1 g than Belters, operating in-between."
                ]
            }
        }
        this.onRoll = this.onRoll.bind(this);
        this.getStepData = this.getStepData.bind(this);
    }

    getStepName() {
        return "Step3"
    }

    getStepData() {
        return {
            origin: this.state.origin
        }
    }

    onRoll(result) {
        result = result[0]
        if(result == 1){this.setState({origin: "BELTER"})}
        if(result == 2){this.setState({origin: "BELTER"})}
        if(result == 3){this.setState({origin: "EARTHER"})}
        if(result == 4){this.setState({origin: "EARTHER"})}
        if(result == 5){this.setState({origin: "MARTIAN"})}
        if(result == 6){this.setState({origin: "MARTIAN"})}
    }

    render() {
        return (
            <div>
                <h2>Step 3: Origin</h2>
                <p>
                    As humanity has spread throughout the System, where you are from has increasingly had an effect on who you are. There are people for whom Earth is just a distant story they’ve heard about and seen on screens, who have never experienced being outside without a vac suit. Consider and choose your character’s origin. 
                </p>
                <select value={this.state.origin} onChange={(event)=>{this.setState({origin: event.target.value})}}>
                    <option value="BELTER">BELTER</option>
                    <option value="EARTHER">EARTHER</option>
                    <option value="MARTIAN">MARTIAN</option>
                </select>
                <br/>
                <DiceButton onRoll={this.onRoll} numDice="1"/>
                <h3>Description</h3>
                <p>
                    {this.descriptions[this.state.origin].description}
                </p>
                <h3>Traits</h3>
                <ul>
                    {this.descriptions[this.state.origin].traits.map((traits,idx)=>{
                        return <li key={idx}>{traits}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Step3