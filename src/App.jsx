import React, {Component} from "react";
import "./App.css";
import Step1 from './steps/Step1.jsx'
import Step2 from './steps/Step2.jsx'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Step1 />
        <Step2 />
      </div>
    );
  }
}

export default App;