import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Work from './Work';
import Yeti from './Work/Yeti';
import DesignWeek from './Work/DesignWeek';
import Coffee from './Work/Coffee';





class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Work} />
          <Route  path="/about" component={About} />
          <Route  path="/contact" component={Contact} />

          <Route  path="/yeti" component={Yeti} />
          <Route  path="/design" component={DesignWeek} />
          <Route  path="/coffee" component={Coffee} />
        </Switch>
      </div>
    );
  }
}

export default App;
