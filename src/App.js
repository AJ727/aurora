import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

//Change logo later
class App extends Component {
  constructor(props){
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.addOptions = this.addOptions.bind(this);
    this.state = {
      options: []
    }
  }  

  deleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  addOptions(option) {
    if(!option) {
      return 'Enter valid value!';
    }

    else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists!';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }
  render() {
    const title = "Shopping List!";
    const subtitle = "MAKE YOUR LIST HO";
    return(
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends Component {
  render() {
    return(
      <button
        onClick = {this.props.addOptions}
        disabled = {!this.props.hasOptions}
      >
      Add Item</button>
    )
  }
}

class Options extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.deleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class Option extends Component {
  render(){
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
          error: undefined
      }
  }
  handleAddOption(e) {
      e.preventDefault();

      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);

      this.setState(() => {
          return {
              error
          }
      })
  }
  render() {
      return (
          <div>
              {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit={this.handleAddOption}>
                  <input type="text" name="option"/>
                  <button>Add Option</button>
              </form>
          </div>
      )
  }
}

//ReactDOM.render(<App />, document.getElementById('app'));

export default App;