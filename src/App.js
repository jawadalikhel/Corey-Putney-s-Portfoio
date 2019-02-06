import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Work from './Work';
import About from './About';
import Contact from './Contact';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
