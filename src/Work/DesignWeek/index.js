import React, {Component} from 'react';
import './design.css';

class DesignWeek extends Component{
  render(){
    return(
      <div id="design-container">

        <div id="design-header">

          <div className="navFor-design">
            <h2 className="name">COREY PUTNEY</h2>
            <div className="dlinks">
              <a href="/" >Work</a>
              <a href="/about" >About</a>
              <a href="/contact" >Contact</a>

            </div>
          </div>

          <div className="designH-info">
            <div className="header-info">
              <h3>AUSIN DESIGN WEEK</h3>
              <p>
                A dedicaed mobile applicaion designed to help users create more lasting relationships and connections from networking events through gamification and reward.
              </p>
            </div>

            <div className="header-img">
              <img src="https://previews.dropbox.com/p/thumb/AAVupByZCumqQkiQPHchqyxUVjQgQ3yQAHMmXc7Zb1yiHwTs1XdA7S_j4gthg5gMlFZoZMmJMtX0Dmlk1j8Tz59oaY5M9DZI1eNpY9kAk7yvuPc7et1m4M8CsDT1Lb1et8fN4G1vmiWkDBUqEvYij2FI-6evwOkjOEsYkm9QCknPrMHVBCZorhqUl6kizlyea0x889XYAM41TnI7OslyuuGUZdZvwBkez7pQsA7YrVk5Pg/p.png?size_mode=5"/>
            </div>
          </div>

        </div>




        <div id="design-roles">
          <p className="roles1">Roles</p>
          <p className="roles2">Research, User Interviews, Affinity Mapping, Synthesis, Co-Creation Sessions, Paper Prototyping, Usability Testing, High Fidelity Prototype.</p>
        </div>

        <div id="design-challenge">
          <p className='d-challenge1'>The Challenge</p>
          <p className='d-challenge2'>
            During this design sprint, we were challenged with creating an outside-the-box niche web app to improve an aspect of Austin Design Week. We were given four weeks to complete our design and worked on a team of six. My primary responsibilities were facilitating the research synthesis process, ensuring that our solution iterations did not fall into the trap of assumptions, and leading the creation of our gamification framework.
          </p>
        </div>

        <div id="design-research">

          <div className="research1">
            <p className="research1-p">Research</p>
            <h3 className="research1-h">
                WE CONDUCTED USER INTERVIEWS WITH 12 PARTICIPANTS. RANGING FROM INDVIDUALS IN THE
                GENERAL TECH SPACE, TO ORGANIZERS OF AUSTIN DESIGN WEEK. EACH LASTING APROXIMATELY
                ONE HOUR AND FOCUSING ON PAST AND PRESENT EXPERIENCE WITH PROFESSIONAL NETWORKING.
            </h3>

            <p className="research1-p2">
               After conducting our interview and using offinity mapping to distill the information.
               Three key themes emerged, in regards to what users seek when attending workshops and networking events.
            </p>
          </div>

          <div  id="research2">

            <div className="research2-growth">
              <h2>GROWTH</h2>
              <img className="growthImg" src="https://previews.dropbox.com/p/thumb/AAWsLI-tshwDXGIzvuHi9XQTZzml7Nos5XlXchGxqe9Po2loOeBFTLsbc0QHBLRzMQUN-exyVUqXy3_NCIjAqrOFHBJ5j0T8slrzuFhaFTPS3LbkWPxz9OtzDhBGFIv6gHu7zy-mR7Ofp83RMndMlavWY4Sn8fPImXcyJgpdjYYxVFO2Ue5x-THr1kmlUA-GZNZ2i7hAXiqAYHCB797cJZvUKvrp-sjgA6XKH5DQBgIH6Q/p.png?size_mode=5" />
              <p>
                Expect to Gain Knowledge + Resources <br/>
                Almost everyone that we talked to cited the need for a clear value to their
                professional growth as a differentiating factor when choosing what event they were going to attend.
              </p>
            </div>

            <div className="research2-value">
              <h2>VALUE</h2>
              <img className="valueImg" src="https://previews.dropbox.com/p/thumb/AAUQVH_O1i03xWLJs5Vm_oLdO4ZvLi09wH8cN-AYf8Ait-K5TByLxamfZiPz7QvOEtAwoYjUdr50ZYcdxp9uZ5GqepihI2QhzL38qXHMfDiP6eIMTswOO26v9b9kgbEKVrG8MUba1R9G4QFoocgwmV_hp8VYYFI7bwPM7P-NReYm12RQuYFcX0USfGxfpNsnlVsC_tzxRgQoPGaBBhDgtyvB4Xy1IljfLxSyyxEvNNLQrw/p.png?size_mode=5" />
              <p>
                What&#39;s in it for me?<br/>
                Another, almost ubiquitous, trend that emerged was that users wanted to know the exact takeaway
                that they would be receiving before actually attending on event.
              </p>
            </div>

            <div className="research2-connection">
              <h2>CONNECTION</h2>
              <img  className="connectionImg" src="https://previews.dropbox.com/p/thumb/AAV8vV7jWJcp3jBMyNgUMeSqg-T8WYxM7b2cVjojgYlbZjRoFoBSqtOXNYejVKpIohMUUIQkVxw5GTwq02op8bc4RGYtCBDTUtndVOWpO4m4U4SpcZGfiSgIlnsOhFsmJyU59KlzDoaNj5cmrkkVzsQZq1k0RBDCGhEBJ3yyj09oB-GE8UponV4-RRiYb0zUCOQ612iK39WNRTDenASM1Frheqt_LiQRSv9lPed6M8alwg/p.png?size_mode=5" />
              <p>
                Lasting and Meaningful Relationships<br/>
                finally, users desired to form lasting and meaningful connections from their engagements.
              </p>
            </div>
          </div>

        </div>

        <div id="persona-container">
          <div className="persona1">
            <p className="persona1-p1">Persona</p>
            <p className="persona1-p2">After internalizing all of the data and digging a bit deeper, we build a primary persona for which we would focus our solution ideation on.</p>
          </div>

          <img className="persona-img" src="https://previews.dropbox.com/p/thumb/AAXBoUKJ-fMgX7qcQNj532h7byzIp-MHG6AocwaYYR3zLHXROdpdlqBbwCNvjV30g-wwWCyQ9bei55a778iV1UOJCXnFR7Y4zah3E7opQm88kNfDuy_534164e7Icy31fWm2Qhs9y5oILLXwbvH_ztu3zNlIPt7f2TW-lChfL4AUzXax3L97DzzBtrdGF2ljIMIEbdbkuoP9vYOW3NFdPJeezNi3lNNUdbmMCswvP0KcZw/p.png?size_mode=5" />

          <p className="persona1-p3">
            We decided to honein an early career professionals, due to the fact that they are usually
            the most active in networking activities, and also the most unsure of their place within
            the larger design community.
          </p>
        </div>

        <div id="design-howMight">
          <p  className="howMight1">How might we</p>
          <h3 className="howMight2">
            HOW MIGHT WE BETTER ENGAGE ATTENDEES, AS WELL AS, WILLING CONTRIBUTORS?<br/>
            HOW MIGHT WE HELP REDUCE UNCERTAINTY OF EXPECTATIONS WHEN ATTENDING EVENTS?
          </h3>
        </div>

        <div id="design-problem">
          <p className="problem-p">
            Problem<br/>
            Statement& <br/>
            Hypothesis
          </p>

          <h3 className="problem-h3">
            AUSTIN DESIGN WEEK ATTENDEES NEED AN ENJOYABLE NETWORKING EXPERIENCE AT EVENTS BECAUSE METTING
            NEW PEOPLE CAN BE INTIMIDATING AND DIFFICULT TO FORM MEANINGFUL CONNECTIONS WITH.
            <br/><br/><br/>
            WE BELIEVE THAT BY GAMIGYING THE NETWORKING EXPERIENCE FOR EARLY CAREER PROFESSIONALS, WE CAN
            ACHIEVE A MORE INTERCONNECTED DESIGN COMMUNITY.
          </h3>
        </div>

        <div id="design-team">
          <p className="team-p1">Team Dynamics</p>
          <p className="team-p2">
            My team and I struggled with communication during this phase of the project, and most of the design decisions we had made were purely based on personal biases and assumptions of “knowing what the user needs”. Of course, this is one of the many traps that teams fall into when things get a little messy and the next step isn’t as easy as moving to the next Trello card on your first project plan.
            With much of the team being first time “UX’ers” we were bound to hit a couple of bumps along the way. Fortunately, we were able to regroup and distill the angst caused from the uncertainty of the process. We instituted ammendments to our team agreement, and started holding more frequent co-creation sessions so that we would all be on the same page, and prevent doing things over again.
          </p>
        </div>

        <div id="ideation-container">
          <div className="ideation-p">
            <p className="ideation-p2">Ideation</p>
            <p className="ideation-p3">
              After realigning, we began our solution explorations through a number rapid sketching setssions,
              and came up with a wide range of ideas that we began to explore.
            </p>
          </div>

          <img className="ideation-img1" src="https://previews.dropbox.com/p/thumb/AAUmjSxofipbDQSePpzvCQ3Mar96bxxL3glKvkmz5VdCCVZHqtvhRMkQEL5ZGPGXij6H8nsZuWvU5EJtC81RPkG5vdQe5Lg3_OQOCbeKISCEN6Tnyw_MM_li695_5ugUURJljqENY5HAmBE_4tyQAWka6w0Pj_8vbmWz8zKYzeMsSXTNj6B_RcmXRdYv0Wsxbb6zjK1UpL1AthTvCvSKix51fEZTkjZUf8VkZ9qhragiUQ/p.png?size_mode=5" />
          <img className="ideation-img2" src="https://previews.dropbox.com/p/thumb/AAX9UxEgBQiYfbHOPYe11ZlRcp-Y5XoaeP0EFK1K4kGEhd_4Z8I3mJXlTkCVvqkP8GpiZSP36-9kPKaXptiSWjPUHfdn_UXhq5LlK-apd0AcRQhV-Y7FLy4KwZFfjShoOhiwEslhaJ_bz8PykgTxn1f4CRCZPBFURk_vGnSSqK9nKRuEZbEArUFa3xIrZDcSrHo_fHqZNarLwqsa0t_2jJdUVb_902JtCDCjBKpl55t0zg/p.png?size_mode=5" />
          <img className="ideation-img3" src="https://previews.dropbox.com/p/thumb/AAUHefx2Ql7_7oK8afW72yIrsi0sPA_dVl4hQQ2YblxiTjHJWJCYWUNOTWXBBw3ZK1Vjbued3Lv-jFwOMME1JIsmYqbbMWDlveXeaIKcBmnyKDVdS2ytGg9USOv1B8r0SrhuiHtL5XVbV8wSng_kr3LO-cInScR6RF1QY1jwjYaT5XowsJQ_YFjLFP2frzAXWlxAPukhNqrbFT9x17OpNLqlXlFMJ4fh0-fho0_n00IuvQ/p.png?size_mode=5" />
          <img className="ideation-img4" src="https://previews.dropbox.com/p/thumb/AAX9UxEgBQiYfbHOPYe11ZlRcp-Y5XoaeP0EFK1K4kGEhd_4Z8I3mJXlTkCVvqkP8GpiZSP36-9kPKaXptiSWjPUHfdn_UXhq5LlK-apd0AcRQhV-Y7FLy4KwZFfjShoOhiwEslhaJ_bz8PykgTxn1f4CRCZPBFURk_vGnSSqK9nKRuEZbEArUFa3xIrZDcSrHo_fHqZNarLwqsa0t_2jJdUVb_902JtCDCjBKpl55t0zg/p.png?size_mode=5" />
        </div>



        <div id="design-feedback">

          <div className="feedback-header">
            <p className="feedbackH-p">User feedback</p>
            <h2 className="feedbackH-h2">THE FUTURE WE DUG INTO THE EXPERIENCE THE CLEARER THE PATH TO FOLLOW BECAME</h2>
            <h3 className="feedbackH-h3">WE ENCOUNTERED A NUMBER OF UNEXPECTED RESULTS WITH OUR INITIAL USABILITY TESTING, AND FEATURE PRIORITIZATION.</h3>
          </div>

          <div className="feedback1">
            <h3>FAST FAIL1</h3>
            <p>
              Once we had some time to think about our task at hand, and the outlines of our challenge,
              we decided that a simple redesign of the current information architecture was outside of our scope in that we needed to come up
              with an innovative niche web app to improve an experience.
            </p>
          </div>

          <div className="feedback2">
            <h3>FAST FAIL2</h3>
            <p>
              Our first main feature flub was the idea behind creating an interactive scheduling app with a heat map to visually show
              users where things were currently happening. People already have scheduling tools that they like to use and are familiar with,
              therefore we abandonded this idea to the scrap pile.
            </p>
          </div>

          <div className="feedback3">
            <h3>FAST FAIL3</h3>
            <h3>INSIGHT DRIVEN DESCISION</h3>
            <p>
              When we tested the profile creation screen, with users, they surprisingly had very strong opinions about having to input data,
              which actual makes sense after the fact since most of our users wanted to know what value they were getting before investing
              any of their time in. So instead of recreating the wheel, we decided that linking and populating a user profile from their existing linkedin account
              would be the best course of action, expecially for use during professional skill development and networking events.
            </p>
          </div>

          <div className="feedback4">
            <h3>INSIGHT DRIVEN WINNER4</h3>
            <p>
              Introducing the concept of creating an environment for networking that set forth clear expectations and value, along with an onboarding process of how the
              user would most benefit through use of the app was the CLEAR WINNER of all explorations. People were excited, and ideas became flying from all corners.

            </p>
          </div>

          <div className="feedback5">
            <h3 className="feedback5-h3">NEEDS MORE WORK6</h3>
            <p className="feedback5-p1">
              From some of those initial testing sessions, we iterated on how the game should functionn and what would be most beneficial and feasible for real life application.
            </p>

            <p className="feedback5-p2">
              Unfortunately, at this point the team dynamics again broke down, and the possibilities of our idea were limited to what the few of us that were still engaged could muster
              up, while also seemingly fighting others who for whatever reason would not allow us to progress on the current track.
            </p>

            <p className="feedback5-p3">
              Once we got to this point, we had a one-on-one collaboration session with Candace Digby, the co-founder of Austin Design Week. She was incredible to talk to, and gave us so many great ideas and useful constructive feedback.
            </p>
          </div>

        </div>




        <div id="design-visuals">
          <p className="visuals-p">Visuals</p>
          <img className="visuals-img" src="https://previews.dropbox.com/p/thumb/AAXmtAA72hxqumNj7eO7hVMtl6US20TKk6HHGWAE9TPW7OObdv2u7EHRGQJxYY8RqJ-lyW1KIf2YInz50sksNLEOYaQvXpIvgCqNvguxRhyk_B2e3G4McOecr0k7EwZeYY8YefSDxiBtYhy9SR_opEDPsz3G384lvW94FhGT6Prb23t8TVuPYxXa9YP-tLg7yvLx60CrhYFv6wnltN2eEmGt4GL9J4qflVcquTRHLE6Jsw/p.png?size_mode=5" />
          <button className="prototype-btn">App Prototype</button>
        </div>

        <div id="design-retrospective">
          <p className="retrospective-p">Retrospective</p>
          <h3 className="retrospective-h3">
            THE MOST INTRIGUING PART OF THIS PROJECT WAS THE POSSIBILITIES FOR INNOVATE AND USEFUL SOLUTIONS
            FOR THE AUSTIN DESIGN COMMUNITY AS A WHOLE. WE NEEDED TO PARTAKE IN MORE USER RESEARCH ABOUT THE MOTIVATIONS
            BEHIND ENGAGEMENT FOR BOTH NEW TO THE SCENCE PROFESSIONALS AND THOSE THAT ARE ALREADY SET IN STONE, AND
            SOMETIMES NOT AS EAGER TO CONTINUE CONTRIBUTING TO THE COMMUNITY.
            <br/><br/>
            I WOULD HAVE ALSO LIKED TO WORK ON THE APP UI. HOWEVER FOR THEIS PROJECT I STEPPED ASIDE AND ALLOWED FOR A FELLOW
            TEAMMATE TO TAKE THE LEAD AND GAIN SOME VALUABLE EXPERIENCE.
            <br/><br/>
            I DEFINITELY WANT TO CONTINUE WITH THIS PROJECT IN THE NEAR FUTURE NOW THAT I HAVE
            COMPLETED MY BOOTCAMP, AND SEE WHAT THE POSSIBILITIES HOLD!
          </h3>

          <div  id="design-footer">

            <div className="design-contact">
              <p className="contact-p">Contact</p>
              <h3 className="contact-h3">WANT TO LEARN MORE ABOUT MY DESIGN PROCESS?</h3>
              <button className="contact-btn">Contact Me</button>
            </div>

            <p className="design-year">&#xa9;2019</p>
            <div className="design-footer-rightsie-links">
              <a href="#" >Linkedln </a>
              <a href="#" >Dribble </a>
              <a href="#" >Medium </a>
            </div>
          </div>
        </div>



      </div>
    )
  }
}

export default DesignWeek;
