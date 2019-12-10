import React, {Component} from "react";
import "./App.css";
import Step1 from './steps/Step1.jsx'
import Step2 from './steps/Step2.jsx'
import Step3 from './steps/Step3.jsx'
import Step4 from './steps/Step4.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeStep: 0,
      availableSteps: [
        Step1,
        Step2,
        Step3,
        Step4
      ],
      nextDisabled: false,
      backDisabled: true,
      stepData: {}
    }

    this.onNext = this.onNext.bind(this);
    this.onBack = this.onBack.bind(this);
    this.updateStepData = this.updateStepData.bind(this);
    this.stepRef = React.createRef();
  }

  updateStepData() {
    let currStep = this.stepRef.current;
    let currStepName = currStep.getStepName();
    let currStepData = currStep.getStepData();
    let newStepData = {
      [currStepName]: currStepData
    }
    this.setState({stepData: {...this.state.stepData, ...newStepData}})
  }

  onNext() {
    this.updateStepData();
    let nextStep = this.state.activeStep;
    if(nextStep < this.state.availableSteps.length - 1) {
      nextStep++;
      this.setState({backDisabled : false})
    }
    if(nextStep == this.state.availableSteps.length - 1) {
      this.setState({nextDisabled: true})
    } else {
      this.setState({nextDisabled: false})
    }
    this.setState({activeStep: nextStep})
  }

  onBack() {
    this.updateStepData();
    let nextStep = this.state.activeStep;
    if(nextStep > 0) {
      nextStep--;
      this.setState({nextDisabled : false})
    }
    if(nextStep == 0) {
      this.setState({backDisabled: true})
    } else {
      this.setState({backDisabled: false})
    }
    this.setState({activeStep: nextStep})
  }

  render(){
    let Step = this.state.availableSteps[this.state.activeStep];

    return(
      <div className="App">
        <Step stepData={this.state.stepData} ref={this.stepRef}/>
        <button onClick={this.onBack} disabled={this.state.backDisabled}>
          Back
        </button>
        <button onClick={this.onNext} disabled={this.state.nextDisabled}>
          Next
        </button>
      </div>
    );
  }
}

export default App;