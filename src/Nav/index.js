import React, {Component} from 'react';
import './style.css';

class Nav extends Component{
  render(){
    return(
      <div>

        <div className="nav">
          <h2 className="name">COREY PUTNEY</h2>
          <div className="links">
            <a href="/" >Work</a>
            <a href="/about" >About</a>
            <a href="/contact" >Contact</a>
          </div>
        </div>

      </div>
    )
  }
}
export default Nav;
