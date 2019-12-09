import React, {Component} from "react";
import "../App.css";

class Step1 extends Component {
    constructor(props) {
        super(props)
        this.state = {concept: ""}

        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        this.setState({concept: event.target.value})
    }
    
    render() {
        return (
            <div>
                <textarea cols="30" rows="10" onChange={this.onChange} />
            </div>
        );
    }
}

export default Step1