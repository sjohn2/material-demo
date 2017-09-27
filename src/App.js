import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';

/*
class Login extends Component{

  render(){
    return(
      <form>
        <label>
            Name: <input type="text" />
        </label>
        <label>
            Password: <input type="password" />
        </label>
        <label>
            <input type="button"  value="Login"  />
            <input type="button" value="Canel" />                   
        </label>
    </form>
    )
  }
}
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Header</h2>
        </div>
        <Login></Login>
      </div>
    );
  }
}

export default App;
