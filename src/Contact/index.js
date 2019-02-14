import React, {Component} from 'react';
import './contact.css'

class Contact extends Component{
  render(){
    return(
      <div id="contact-container">

        <div id="cnav-container">
          <h2 className="namee">COREY PUTNEY</h2>
          <div className="linkss">
            <a href="/"  className="link3" style={{"color":"#555966"}}>Work</a>
            <a href="/about"  className="link2" style={{"color":"#555966"}}>About</a>
            <a href="/contact"  className="link1" style={{"color":"#555966"}}>Contact</a>
          </div>
        </div>

        <div id="header-container">
          <h1 className="txt">
            want to chat user experience?<br/>
            build amazing products?<br/>
            lets talk&#39;s talk!
          </h1>
        </div>

        <div id="form-container">
          <p style={{'grid-row': '2/3','margin-top': '-.1em'}}>Form</p>
          <div className="form-input">
            <label className="label">Name</label><br/>
            <input className="input" type="text" /><br/><br/>
            <label className="">Email address</label><br/>
            <input className="input" type="text" /><br/><br/>
            <label className="">Subject</label><br/>
            <input className="input" type="text" /><br/><br/>
            <div className="msg-container">
              <label className="">Message</label><br/>
              <input className="input msg" type="text"/><br/>
              <button className="send-btn"  style={{"background":"orange"}}>Send</button>
            </div>
          </div>

        </div>

        <footer  id="footer-container"  style={{"color":"#555966"}}>>
          <p className="year">c2019</p>
          <a href="#" >Linkedln </a>
          <a href="#" >Dribble </a>
          <a href="#" >Medium </a>
        </footer>

      </div>
    )
  }
}
export default Contact;
