import React, {Component} from "react";
import Ability from './Ability.jsx'
import "../App.css";

class Step2 extends Component {
    render(){
        return(
            <div>
                <Ability 
                    name="ACCURACY" 
                    description="Accuracy measures aim and precision, and measures your ability to hit targets with ranged or thrown weapons."
                />
                <Ability 
                    name="CONSTITUTION"
                    description="Constitution is your character’s overall health, fortitude, and resistance to harm, illness, and fatigue."
                />
                <Ability 
                    name="FIGHTING"
                    description="Fighting is your character’s capability and prowess in close combat, ranging from a brawl to wielding weapons."
                />
                <Ability 
                    name="COMMUNICATION"
                    description="Communication covers social skills and generally making friends and influencing people."
                />
                <Ability 
                    name="DEXTERITY"
                    description="Dexterity covers deftness, agility, and reaction time, affecting how quickly and gracefully you move."
                />
                <Ability 
                    name="INTELLIGENCE"
                    description="Intelligence measures a character’s reasoning, memory, problem solving, and overall knowledge."
                />
                <Ability 
                    name="PERCEPTION"
                    description="Perception is the ability to pick up on and noticethings using any of the character’s senses."
                />
                <Ability 
                    name="STRENGTH"
                    description="Strength is sheer muscle power and the ability to apply it, from lifting heavy things to feats of athletics. "
                />
                <Ability 
                    name="WILLPOWER"
                    description="Willpower measures self control, self-discipline, mental fortitude, and confidence."
                />
            </div>
        );
    }
}

export default Step2