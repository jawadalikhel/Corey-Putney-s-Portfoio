import React, {Component} from 'react';
import './work.css';
import { Link } from 'react-router-dom';


class Work extends Component{
  render(){
    return(
      <div>
        <div id="work-container">
          <div className="about-container img-text-center" id="work-header">

            <div className="navwork" >
              <h2 className="wname" style={{"color":"#555966"}}>COREY PUTNEY</h2>

              <nav className="wlinks" style={{}}>
                <Link to={"/"}  style={{}}>Work</a>
                <Link to={"/about"}  style={{}}>About</a>
                <Link to={"/contact"}  style={{}}>Contact</a>
              </nav>

            </div>

            <img src={require("./hPhoto.png")} />
            <div className="text" id="aboutme-div">
              <h1 className="about-me2"><text style={{"color":"#FFF5A8"}}>hello-im corey,</text> a ux designer<br/> based in austin, texas.</h1>
              <p className="about-me3">As a UX Designer, I bring my intuitive curiosity and my passion for helping others together in a way that works for the greater good. I intimately understand how design thinking brings value to all facets of life, and I have a relentless desire to fully understand and embrace the design process.</p>
            </div>

          </div>

          <div id="projects-container">

            <div id="grid">
              <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p>
            </div>

            <h4 className="case-study">Case Study</h4>

            <a href="/coffee" id="wcoffee-container">
              <div className="proj1-info">
                <h3>COFFEE SHARE</h3>
                <p>Mobile app</p>
                <p>A crowd sharing  app that makes getting your coffee quick, consistent, and reliable through loyalty programs and participation incentives.</p>
              </div><br/>

              <a href="/coffee" className="c-img" >
                <img className="wcoffee-img" src={require("./coffeimg.png")} />
              </a>
            </a>

            <a href="/design" id="wdesign-container">
              <div className="proj2-info">
                <h3>AUSTIN DESIGN WEEK</h3>
                <p>Web app</p>
                <p>A dedicated mobile application designed to help users get more lasting relationships and connections from the networking events through gamification and reward.</p>
              </div>
              <a href="/design" className="d-img">
                <img className="wdesign-img" src={require("./designimg.png")} />
              </a>
            </a>

            <a href="/yeti" id="wyeti-container">
              <div className="proj3-info">
                <h3>YETI COMMUNITY VALUE</h3>
                <p>Website Redesign</p>
                <p>A web redesign based on better structuring of the IA to showcase the already robust and valuable community power this brand evokes.</p>
              </div>

              <a href="/yeti" className="y-img">
                <img className="wyti-img" src={require("./yetiimg.png")} />
              </a>
            </a>

          </div>

          <footer  id="wfooter-container">
            <p className="wyear">c2019</p>
            <div className="wfooter-rightsie-links">
              <a href="#" >Linkedln </a>
              <a href="#" >Dribble </a>
              <a href="#" >Medium </a>
            </div>
          </footer>

        </div>
      </div>
    )
  }
}
export default Work;





// <div id="work-container">
//
//   <div id="work-header">
//
//     <div className="about-container img-text-center" id="work-header">
//
//       <div className="navwork" >
//         <h2 className="wname" style={{"color":"#555966"}}>COREY PUTNEY</h2>
//
//         <nav className="wlinks" style={{}}>
//           <a href="/"  style={{}}>Work</a>
//           <a href="/about"  style={{}}>About</a>
//           <a href="/contact"  style={{}}>Contact</a>
//         </nav>
//
//       </div>
//
//       <img id="img" src="https://previews.dropbox.com/p/thumb/AAW6AKzSaxJDftQcCmEcT2bk0scHUxJJMjQUsoEWrsp2p-NC2yvdytGNugyWjwANqhD_mJbHJzBVd71TKcO8sKf03ZHmG-Sm-Tazt0C-ZaMkknGA1WNqIJqPf_abKKANPBLl0rgO5dUuF5W1qM3O9ec2WV6BfivOL3zu4b6DS8ZgqevvxR_GsPSakChq-g-UhUhu3VAGO3P1E4eH1z8Ha72mCYAXV5Eb-ua3vTZtiu9fHQ/p.png?size_mode=5"/>
//       <div className="text" id="aboutme-div">
//         <h1 className="about-me2"><text style={{"color":"#FFF5A8"}}>hello-im corey,</text> a ux designer<br/> based in austin, texas.</h1>
//         <p className="about-me3">As a UX Designer, I bring my intuitive curiosity and my passion for helping others together in a way that works for the greater good. I intimately understand how design thinking brings value to all facets of life, and I have a relentless desire to fully understand and embrace the design process.</p>
//       </div>
//
//     </div>
//
//
//
//   <div id="projects-container">
//
//     <h4 className="case-study">Case Study</h4>
//
//     <a href="/coffee" className="coffee ">
//       <div className="proj1-info">
//         <h3>COFFEE SHARE</h3>
//         <p>Mobile app</p>
//         <p>A crowd sharing  app that makes getting your coffee quick, consistent, and reliable through loyalty programs and participation incentives.</p>
//       </div>
//
//       <a href="/coffee" className="proj1-img">
//         <img className="Img" src="https://previews.dropbox.com/p/thumb/AAXfazzZIRiSZ0Tcihwdq-aZkx7i5IT1YfED6ieWjniu6gi-D9V0qBZFPvqakO1ZUwEKDf1YK25XLY38_g5BpTtvMU4RH3F_80u0jg3JsJ6RuBruj09cfxG9heQw5ZET7bEM0zXh2hPUpH5KwBnCX8oViojjhsU4pKUyxO1dt_9aooQe-7AQaTdVA0fl0DUvWBsoOiEMkNiPhjnJl7XkwD6LvshNPlN0HRdZVTVSsEOcDK7zdUJSA2RdSoX_cdg2SwE/p.png?size_mode=5" />
//       </a>
//     </a>
//
//     <a href="/design" className="design">
//       <div className="proj2-info">
//         <h3>AUSTIN DESIGN WEEK</h3>
//         <p>Web app</p>
//         <p>A dedicated mobile application designed to help users get more lasting relationships and connections from the networking events through gamification and reward.</p>
//       </div>
//       <a href="/design" className="proj2-img">
//         <img className="Img2" src="https://previews.dropbox.com/p/thumb/AAUfbUqaSflZgbO7DYkQZTSYp9wy19DQIefvxcah7xOL9TQqzBlSKcGeOUeGcJzI3O9wOVLYeE2ZVbjR95b52oaGlqrNixjUetYxMHLu0BsE2iEZk1oF9MS45oEzPWpQSEEwxYbAJ3JRxcvusq9-gj0_OMznrzhA6tUSJgsLDHBB_x-GmBJ4pmu7aN3XAjJYY8wJkrVOYgde4fGnMt2ph08K7AiGWvww42YLrjjH-pPfNQ/p.png?size_mode=5" />
//       </a>
//     </a>
//
//     <a href="/yeti" className="yeti">
//       <div className="proj3-info">
//         <h3>YETI COMMUNITY VALUE</h3>
//         <p>Website Redesign</p>
//         <p>A web redesign based on better structuring of the IA to showcase the already robust and valuable community power this brand evokes.</p>
//       </div>
//
//       <a href="/yeti" className="proj3-img">
//         <img className="Img3" src="https://previews.dropbox.com/p/thumb/AAVCMfk11hvUR6JrhOOVimO7W4zLjXnwhTKjEsRpeqlUuP28CNGm_kmdIGjCsII6KZY8W9PfzDfXKaOxykB-ivO_lF1Y6ng3TYGcBPLEuVHvA6kOf7ZNGBBh_VrRyaj9ld8e6m0ovKTT7qSX8h1ZqyPA6YEpazkWdifTJ0ORyLgwyIKOccEIn0rkdAwxyph4u-ZxGL3exmJ_i9C7sU8nOhc-HpVdGoha0aNS1xYs2Dlcyw/p.png?size_mode=5" />
//       </a>
//     </a>
//
//   </div>
//
//   <footer  className="footer-container">
//     <p className="year">c2019</p>
//     <a href="#" >Linkedln </a>
//     <a href="#" >Dribble </a>
//     <a href="#" >Medium </a>
//   </footer>
//   </div>
// </div>
