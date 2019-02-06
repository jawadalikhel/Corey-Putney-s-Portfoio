import React, {Component} from 'react';
import './work.css';

class Work extends Component{
  render(){
    return(
      <div>
        <img className="header" src="https://previews.dropbox.com/p/thumb/AAU28wUHNr7QBW6IoknQL-E-BMkKqKURWRexPDggSfbOTKPYHx2dpz2hx5yB4MA3V0-OUZHEU2TbTvSUPt_xALawk9f3R_MdkMl7C7xDJ_oO_YEfyRzbA36sqb8LgV0JNorMnW9KdwIjpZhp4mRo4ZHPqQoHbjOxtOniocb8NCwjDzPnquhbgWOkAyXsPB6RkXxF1p8GkWfD6FUJqlmZ9vBhYStErNs9YIJMqGZ9PJp6wA/p.png?size_mode=5" />

        <div className="header-info">
          <div className="h1"><h1>hello-im corey, a ux designer<br/> based in austin, texas.</h1></div>
          <p>As a UX Designer, I bring my intuitive curiosity and my passion for helping others together in a way that works for the greater good. I intimately understand how design thinking brings value to all facets of life, and I have a relentless desire to fully understand and embrace the design process. </p>
        </div>

        <div className="projects-container">
          <h3 className="stuide-header">Case Studies</h3>

          <a href="/coffee">
            <div className="projects">
              <img className="proj1-img" src="https://i1.wp.com/danverspublicschools.org/dhs/wp-content/uploads/sites/4/2017/09/coffee-clipart-free-coffee-cup-clipart.jpg?fit=318%2C283&ssl=1" />

              <div className="project-info">
                <h3>COFFEE SHARE</h3>
                <p>Mobile App</p>
                <p>
                  A crowd sharing  app that makes getting your coffee quick, consistent, and reliable through loyalty programs and participation incentives.
                </p>
              </div>
            </div>
          </a>

          <a href="/design">
            <div className="projects">
              <img className="proj1-img" src="https://i1.wp.com/danverspublicschools.org/dhs/wp-content/uploads/sites/4/2017/09/coffee-clipart-free-coffee-cup-clipart.jpg?fit=318%2C283&ssl=1" />

              <div className="project-info">
                <h3>AUSTIN DESIGN WEEK</h3>
                <p>Web App</p>
                <p>
                  A dedicated mobile application designed to help users get more lasting relationships and connections from the networking events through gamification and reward.
                </p>
              </div>
            </div>
          </a>

          <a href="/yeti">
            <div className="projects">
              <img className="proj1-img" src="https://i1.wp.com/danverspublicschools.org/dhs/wp-content/uploads/sites/4/2017/09/coffee-clipart-free-coffee-cup-clipart.jpg?fit=318%2C283&ssl=1" />

              <div className="project-info">
                <h3>YETI COMMUNITY VALUE</h3>
                <p>Website Redesign</p>
                <p>
                  A web redesign based on better structuring of the IA to showcase the already robust and valuable community power this brand evokes.
                </p>
              </div>
            </div>
          </a>

        </div>
      </div>
    )
  }
}
export default Work;
