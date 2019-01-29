import React, { Component } from 'react';
import './App.css';
import Comparisiontable from './Comparision';
import _ from 'lodash';

class App extends Component {

  state = {
    pcnOne:'',
    pcnTwo:'',
    addEmployees: false
  }

  tempEmployee = {};
  
  async componentDidMount() {
    await fetch("http://localhost:8080/compare/0/1").then(async (resp) => {
      let fetchedResponse = await resp.json()
      console.log("Response from BackEnd is", fetchedResponse)
      this.setState({
        pcnOne: fetchedResponse[0],
        pcnTwo: fetchedResponse[1]
      })
    }
    )
  }

  render() {
    return (
      <div>
        {
          _.isEqual(Object.getOwnPropertyNames(this.state.pcnOne), Object.getOwnPropertyNames(this.state.pcnTwo)) ?
            <Comparisiontable pcnOne={this.state.pcnOne} pcnTwo={this.state.pcnTwo} /> : (<tr><td>Not True</td></tr>)
        }
      </div>
    );
  }
}

export default App;
