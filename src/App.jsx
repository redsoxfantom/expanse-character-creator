import React, {Component} from "react";
import "./App.css";
import Step1 from './steps/Step1.jsx'
import Step2 from './steps/Step2.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeStep: Step1
    }
  }

  render(){
    let Step = this.state.activeStep;

    return(
      <div className="App">
        <Step />  
      </div>
    );
  }
}

export default App;