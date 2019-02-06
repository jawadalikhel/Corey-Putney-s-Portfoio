import React, {Component} from 'react';
import './style.css';

class Nav extends Component{
  render(){
    return(
      <div>
        <div className="nav">
          <a href="/" >Work</a>
          <a href="/about" >About</a>
          <a href="/contact" >Contact</a>
        </div>
      </div>
    )
  }
}
export default Nav;
