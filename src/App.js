import React from "react";
import "./App.css"
import Input from "./Input";
import Operand from "./Operand";
import Output from "./Output";

class App extends React.Component {
  state = {
    val1: 0,
    val2 : '',
    currOprand : '',
    currOutput : 0,  
    
  };

  inputTask1 = (value) => {
    this.setState({val1: value});
  }

  inputTask2 = (value) => {
    this.setState({val2: value});
  }

  operand = (optr) =>{
    this.setState({currOprand: optr})
  }

  output = () =>{
    if(this.state.currOprand == '+'){
      this.setState({currOutput: this.state.val1*1 + this.state.val2*1});
    }
    else if(this.state.currOprand == '-'){
      this.setState({currOutput: this.state.val1 - this.state.val2});
    }else if(this.state.currOprand == '*'){
      this.setState({currOutput: this.state.val1 * this.state.val2});
    }else if(this.state.currOprand == '/'){
      this.setState({currOutput: this.state.val1 / this.state.val2});
    }
  }

  clear = () =>{
    this.setState({val1: 0, val2: '', currOprand: '', currOutput: 0});
  }

  render = () => {
    return (
      <div>
       <div className="display">
         <p>{this.state.val1} {this.state.currOprand} {this.state.val2}</p>
         <p>{this.state.currOutput}</p>
       </div>
        <Operand operand={this.operand}/>
        <Input inputTask1={this.inputTask1} inputTask2={this.inputTask2} val1={this.state.val1} val2={this.state.val2} />
        <Output output={this.output} clear={this.clear}/>
      </div>
    );
  };
}

export default App;