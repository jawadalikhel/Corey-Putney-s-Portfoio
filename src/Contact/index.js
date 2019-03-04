import React, {Component} from 'react';
import './contact.css'

class Contact extends Component{
  render(){
    return(
      <div id="contact-container">

        <div className="navcontact">
          <h2 className="cname" style={{'color':''}}>COREY PUTNEY</h2>
          <div className="clinks">
            <a href="/about" >About</a>
            <a href="/" >Work</a>
            <a href="/contact" >Contact</a>

          </div>
        </div>

        <div id="header-container">
          <h1 className="txt">
            want to chat user experience?<br/>
            build amazing products?<br/>
            <text className="letsTalk" style={{'color':'#FFF5A8'}}>let&#39;s talk!</text>
          </h1>
        </div>

        <div id="form-container">
          <p className="cform-p">Form</p>
          <div className="cform-input">
            <div className="left-input">
              <label className="label">Name</label><br/>
              <input className="input" type="text" /><br/><br/>
              <label className="">Email address</label><br/>
              <input className="input" type="text" /><br/><br/>
              <label className="">Subject</label><br/>
              <input className="input" type="text" /><br/><br/>
            </div>
            <div  className="right-input">
              <label className="">Message</label><br/>
              <input className="input msg" type="text"/><br/>
              <button className="send-btn"  style={{"background":"orange"}}>Send</button>
            </div>
          </div>

        </div>

        <footer  id="cfooter-container">
          <p className="cyear">c2019</p>
          <div className="cfooter-rightsie-links">
            <a href="#" >Linkedln </a>
            <a href="#" >Dribble </a>
            <a href="#" >Medium </a>
          </div>
        </footer>

      </div>
    )
  }
}
export default Contact;
