import React, {Component} from "react";
import Ability from './Ability.jsx'
import DefaultAbilityData from './DefaultAbilityData.js'
import "../App.css";

class Step2 extends Component {
    constructor(props) {
        super(props);

        if(props.stepData["Step2"]) {
            this.stepData = props.stepData["Step2"]
        } else {
            this.stepData = DefaultAbilityData
        }

        this.getStepData = this.getStepData.bind(this)
    }

    getStepName() {
        return "Step2"
    }

    getStepData() {
        return this.stepData;
    }
    
    render(){
        return(
            <div>
                <h2>Step 2: Abilities</h2>
                <p>
                    AGE System characters are defined by nine abilities. They’re scored on a numeric scale from –2 (quite poor) to 4 (truly outstanding). A score of 1 is considered average for Player Characters and other extraordinary people. 0 is average for everyday individuals, the sort of folks who avoid having adventures. Your character’s ability scores provide a useful “snapshot” of the areas where your character is outstanding, above average, poor, or just average, and you use ability scores to determine the outcome of most actions in the game via ability tests.
                </p>
                <Ability 
                    name="ACCURACY" 
                    description="Accuracy measures aim and precision, and measures your ability to hit targets with ranged or thrown weapons."
                    initVal={this.stepData["ACCURACY"]}
                    onChange={(newVal)=>{this.stepData["ACCURACY"] = newVal;}}
                />
                <Ability 
                    name="CONSTITUTION"
                    description="Constitution is your character’s overall health, fortitude, and resistance to harm, illness, and fatigue."
                    initVal={this.stepData["CONSTITUTION"]}
                    onChange={(newVal)=>{this.stepData["CONSTITUTION"] = newVal;}}
                />
                <Ability 
                    name="FIGHTING"
                    description="Fighting is your character’s capability and prowess in close combat, ranging from a brawl to wielding weapons."
                    initVal={this.stepData["FIGHTING"]}
                    onChange={(newVal)=>{this.stepData["FIGHTING"] = newVal;}}
                />
                <Ability 
                    name="COMMUNICATION"
                    description="Communication covers social skills and generally making friends and influencing people."
                    initVal={this.stepData["COMMUNICATION"]}
                    onChange={(newVal)=>{this.stepData["COMMUNICATION"] = newVal;}}
                />
                <Ability 
                    name="DEXTERITY"
                    description="Dexterity covers deftness, agility, and reaction time, affecting how quickly and gracefully you move."
                    initVal={this.stepData["DEXTERITY"]}
                    onChange={(newVal)=>{this.stepData["DEXTERITY"] = newVal;}}
                />
                <Ability 
                    name="INTELLIGENCE"
                    description="Intelligence measures a character’s reasoning, memory, problem solving, and overall knowledge."
                    initVal={this.stepData["INTELLIGENCE"]}
                    onChange={(newVal)=>{this.stepData["INTELLIGENCE"] = newVal;}}
                />
                <Ability 
                    name="PERCEPTION"
                    description="Perception is the ability to pick up on and notice things using any of the character’s senses."
                    initVal={this.stepData["PERCEPTION"]}
                    onChange={(newVal)=>{this.stepData["PERCEPTION"] = newVal;}}
                />
                <Ability 
                    name="STRENGTH"
                    description="Strength is sheer muscle power and the ability to apply it, from lifting heavy things to feats of athletics. "
                    initVal={this.stepData["STRENGTH"]}
                    onChange={(newVal)=>{this.stepData["STRENGTH"] = newVal;}}
                />
                <Ability 
                    name="WILLPOWER"
                    description="Willpower measures self control, self-discipline, mental fortitude, and confidence."
                    initVal={this.stepData["WILLPOWER"]}
                    onChange={(newVal)=>{this.stepData["WILLPOWER"] = newVal;}}
                />
            </div>
        );
    }
}

export default Step2