import React, {Component} from 'react';
import './about.css';

class About extends Component{
  render(){
    return(
      <div id="about-container">

        <div className="navabout">
          <h2 className="aname" style={{'color':'#FFAE7C'}}>COREY PUTNEY</h2>
          <div className="alinks">
            <a href="/contact" >Contact</a>
            <a href="/about" >About</a>
            <a href="/" >Work</a>

          </div>
        </div>

        <div id="aheader-container">

            <div className="aintro">
              <p className="aintro2" style={{'color':'#FFAE7C'}}>Intro</p>
              <h1 className="aintro3">PASSIONATE ABOUT <text style={{'color':'#FFAE7C'}}>UX AND UI DESIGN.</text><br/>
                  AFFICIONADO OF <text style={{'color':'#FFAE7C'}}>FIND WINE.</text><br/>
                  SPENDS TIME <text style={{'color':'#FFAE7C'}}>BACKCOUNTRY SKIING.</text><br/>
                  RACES <text style={{'color':'#FFAE7C'}}>AUTOCROSS.</text>
              </h1>
            </div>

            <div className="bio">
              <p  className="bio2" style={{'color':'#FFAE7C'}}>Bio</p>
              <p className="bio3">
              I’m Corey, a user-interface and user-experience designer focused on creating digital products. I have 6 years of experience working in the design field—initially in graphic and web design; working on projects ranging from print, web, branding, and even WordPress theme development. Over time, with additional experience in B2B and retail sales, as well as, several team lead and management positions I have developed a deep understanding of relationships and communication that has brought me to UX. The creation of digital products that have the ability to communicate personality and core values, while also bringing value to people’s lives is an exceptionally exciting area of innovation in today’s marketplace.

              I am currently working as a freelance designer, soaking in as much knowledge and perspective on passion projects and prospective works as I possibly can. I have a Bachelors of Organizational Communication from The University of Texas at Austin and am also a graduate from General Assembly’s User Experience Bootcamp. Outside of design I have a passion for the outdoors, and all things adrenaline. I love earning my turns off piste in the Rockies and auto crossing my Mustang that I built from the ground up, in my garage.
              </p>
            </div>

            <img className="profile-pic" src={require('./meimg.png')}/>
            <div id="btns-container">
              <button className="journey-btn">My Journey</button>
              <button className="resume-btn">Resume</button>
            </div>

        </div>

        <div id="arsenal-container">
          <img className="arsenal-img" src={require('./icons.png')}/>
        </div>

        <footer  id="afooter-container">
          <p className="ayear">c2019</p>
          <div className="afooter-rightsie-links">
            <a href="#" >Linkedln </a>
            <a href="#" >Dribble </a>
            <a href="#" >Medium </a>
          </div>
        </footer>

      </div>
    )
  }
}
export default About;
