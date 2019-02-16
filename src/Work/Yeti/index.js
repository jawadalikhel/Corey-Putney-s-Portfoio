import React, {Component} from 'react';
import './yeti.css';

class Yeti extends Component{
  render(){
    return(
      <div id="yeti-container">

        <div id="yeti-header">

          <div className="navFor-yeti">
            <h2 className="name">COREY PUTNEY</h2>
            <div className="ylinks">
              <a href="/" >Work</a>
              <a href="/about" >About</a>
              <a href="/contact" >Contact</a>

            </div>
          </div>

          <div className="yetiH-info">
            <div className="yeti-header-info">
              <h3>YETI: COMMUNITY REDESIGN</h3>
              <p>
                A web redesign based on better structuring of the IA to showcase the already robust and valuable community power this brand evokes.
              </p>
            </div>

            <div className="header-yetiImg">
              <img src="https://previews.dropbox.com/p/thumb/AAWvLi7Ahw9NwJlWuWmLoWTLxAmYXZeBvfP3OOJlBPXj-KJpdRqtlFsbc0cmJGFBroC4bTTHOt9QEED_DSIsM-Ne67uliiK-d7wdUFI9y-BUXfNX2tTPyTNxWBvoP2mg6Y-GyMTIAEqjs2GUReOgZiEmNixlu54VqiaCUxMchj-O9ym6fP9V9AgEHbaeebZ236NdN01gsYz79aKbGfUfkw07cQlVGut3MbtrM2Zzb2lAO5jpKVCfrlbJ3f9863icTM8/p.png?size_mode=5"/>
            </div>
          </div>

        </div>

        <div id="yeti-roles">
          <p className="roles1-yeti">Roles</p>
          <p className="roles2-yeti">
            My role and processes that I owned for this project were completing a Heuristic Evaluation, conducting User Interviews, Competitive Analysis, Task Flow Analysis, redesigning Content Strategy and IA, facilitating SUS Testing, Rapid Sketching solution explorations, and Lo-Fi wireframing. This sprint was conducted in a 2 week timeframe.
          </p>
        </div>

        <div id="yeti-challenge">
          <p className='y-challenge1'>The Challenge</p>
          <p className='y-challenge2'>
            I WAS CHALLENGED TO REDESIGN AN EXISTING E-COMMERCE WEBSITE THAT HAD
            BEEN IDENTIFIED AS HAVING USABILITY AND HEURISTIC ISSUES. WE WERE
            GIVEN THE CHOICE TO SELECT FROM SEVEN AUSTIN BASED COMPANY ECOMMERCE WEBSITES,
            AND I CHOSE TO WORK ON YETI&#37;S EXPERIENCE BECAUSE I HAVE LENGTHY EXPERIENCE
            WORKING WITH THE BRAND AND AN INTIMATE KNOWLEDGE OF THE POWER THEIR COMMUNITY PROVIDES.
          </p>
        </div>


        <div id="yeti-guideline">
          <p className="guideline1">Project Guidelines</p>
          <p className="guideline2">
            During my design process, I began by conducting basic exploratory user research to uncover
            the various user groups and behaviors in order to accurately build a refined and accurate
            persona. Included with the instructions for this project, we were given three specific proto personas to choose from.
            This was more about being able to design with intention, and understanding what it means to validate your design decisions based on user needs.
          </p>
        </div>


        <div id="perona-yeti">
          <img className="perona-img" src="https://previews.dropbox.com/p/thumb/AAX4nKZpM5XwAhKGPLrailSJHmscLMk_KooUoqzTAl38_di7_kLVzPnHTS21IJpqCVjfDjgq9HydrxQkm8qY6wpEsOaRnlbUX702p_8NxUOCRWZuAP9qENDqYpKnXv-4tSA2sCDx1aMVqzshNkdfM8z1WyO46T6i7yz8bhvEvPSDsyMwnQ9cHDNmOWHxJlq7H-iZqwRhxUeEB0LyP5QZ9UiAntDKu7wi9DuVsvo8b5frGQ/p.png?size_mode=5"/>
        </div>


        <div id="problem-yeti">
          <p className="prob-yeti1">The problem</p>
          <h3 className="prob-yeti2">
            AMITIOUS, BUT MINDFUL INDIVIDUALS WHO DON&rsquo;T HAVE EXTRA TIME
            IN THE DAY NEED MORE INTUITIVE INFORMATION ARCHITECTURE AND NAVIGATION SO THEY
            CAN CONSERVE THEIR TIME AND CONCENTRATION AND PUT IT TOWARDS THE THINGS THEY
            FIND JOY AND RELAXATION IN.
          </h3>
          <h4 className="prob-yeti3">
            I hypothesized that by simplifying the current IA of the menu structure, and reducing the number of choices that were needed I would be able to provide a more enjoyable shopping experience for those on the run during the holiday season.
          </h4>
        </div>

        <div id="yeti-research">
          <p className="p1-yetiResearch">Research</p>
          <p className="p2-yetiResearch">
            At this point, I began conducting user interviews with six participants that closely aligned with the same characteristics and pain points as the “Victor” persona.
          </p>

          <p className="p3-yetiResearch">
            Through this process, I was able to pinpoint the flows within the current site that were problematic and I then developed 4 tasks to put users through before administering the SUS Analysis at the end of the session.
          </p>

          <img className="yetiResearch-img" src="https://previews.dropbox.com/p/thumb/AAWEKpgESrcYX_Vi-ogDlLE7fv13P3oO4qxp7lfFpihjZ_mGUrRvx-VvARrIMVjbbO94cS_fkUeDVI7pLv-LGVsoAmSwTRljluIHStDuc6VIriAFohLEsODf-Z634M7agwUn8bWFkIhFTANvVezRy2BV4usqE-xhRQSG-f-SPzQ4FGiInkfskhVdoPLxzkUqzZSC9JhzuHqkDJ76wwDv9KD8JLI7p6y70UJH9JvVmNCiHaO5Zb0BHSV-Z3vAdvqTDWU/p.png?size_mode=5"/>
        </div>

        <div id="yeti-findings">
          <p className="y-p1">Findings</p>
          <p className="y-p2">Some of the key insights from the interviews that emerged.</p>
          <h3 className="y-h1">
            &ldquo;I HAD DIFFICULTY SEEING WHAT IT WAS THAT THEY WERE ACTUALLY  SELLING, AND THEN ONCE I DID FIND<br/>
            SOMETHING OF INTEREST, I HAD AND IDEA WHERE TO FIND IT.&rdquo;
          </h3>

          <h3 className="y-h2">
            &ldquo;THE NAVIGATION IS CONFUSING AND CLUNKY. IT&rsquo;S NOT INTUITIVE AT ALL.&rdquo;
          </h3>

          <h3 className="y-h3">
            &ldquo;I HAD A HORRILE TIME WITH THE SEARCH BAR, AND CART OVERLAY. THEY KEPT EXPANDING AND
            BLOCKING MY INTERACTION WITH THE SITE WHEN I WAS NOT EVEN TRYING TO ACCESS THEM.&rdquo;
          </h3>
        </div>

        <div id="yeti-reframing">
          <p className="reframing-p1">Reframing</p>
          <p className="reframing-p2">
            Moving forward, I decided to take a step back, and do some more digging into what the existing brand personality had to offer. I visited the YETI flagship store, (somewhere I knew the company story and values would be on display), to evaluate how well it matched up with what was being conveyed by their online presence.
          </p>
          <img  className="reframing-img" src="https://previews.dropbox.com/p/thumb/AAXgI8QWXp6691sZDrWKjBSQ1VVJSplA9Ji5QEPX89oU1pL_Mhm1tL9Selu_RPzoCLeBMwgev1Xp_kecpnxWpa7cWOK--H1XI2gx9UNqOPcuS-XHf2WzvtSJvksdyks9Itm6UNYumMxZCTR9AP3o-7W9QAb9dNBtHYZNgUiSJAiiRhF4RhAr7vmhlr1cFnRRIrfnltJGYZ6GftECd-ZzRq-1uWmSujAmIau1OfSW-CUErQ/p.png?size_mode=5"/>
        </div>

      </div>
    )
  }
}

export default Yeti;
