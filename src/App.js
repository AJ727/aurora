import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

//Change logo later
class App extends Component {
  render() {
    return (
      <div>  
        <Header />
      </div>
      );
  }
}

//Header -> Nav, Body -> left_col + right_col
class Header extends Component {
  render() {
    return (
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Aurora</h1>
      <Nav />
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <div>
        Nav
      </div>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <div>
        Body
      </div>
    );
  }
}

//ReactDOM.render(<Header />, document.getElementById('app'));

export default App;