import React, { Component } from 'react';
import './App.css';
import Header from './../Header/Header';
import SearchBar from './../SearchBar/SearchBar';
import ResultContainer from "./../ResultContainer/ResultContainer"

const name = require('@rstacruz/startup-name-generator')

class App extends Component {

  state = {
    headerText: "Name your startup!!",
    headerExpanded: "true",
    headerFontBig: "true",
    suggestedNames: []
  }

  onInputChange = (inputText) => {
    // alert("Yayyy I got called from my child");
    // console.log(name(inputText))

    // suggestedNames = name(inputText);

    if(inputText.length>0){
      // console.log(inputText.length);
      // this.setState({ headerExpanded: "false"})
      // this.setState({ headerFontBig: "false"})
      // this.setState({suggestedNames: name(inputText)})

      this.setState({ headerExpanded: "false",headerFontBig: "false",
      suggestedNames: inputText.length>0 ? name(inputText) : []})

    }
    else{
      // console.log(inputText.length);
      this.setState({ headerExpanded: "true"})
      this.setState({ headerFontBig: "true"})
      this.setState({suggestedNames: []})
    }
  }
  render() {
    return (
      <div className='app-container'>
        <Header headerTitle={this.state.headerText} headerExpanded={this.state.headerExpanded}
        headerFontBig={this.state.headerFontBig}/>
        <SearchBar onInputChange={this.onInputChange}/>
        <ResultContainer suggestedNames={this.state.suggestedNames}/>
      </div>
    )
  }
}


export default App;