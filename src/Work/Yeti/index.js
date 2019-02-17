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

        <div id="coreValue-container">
          <p className="coreValue-p1">
            It was shocking to observe how much effort was put into showcasing YETI’s commitment to the community that relies on these products to drive their livelihood. Additionally, I was impressed by the multitude of partnerships that they have fostered that focus on improving and sustaining the social good.
          </p>

          <h4 className="coreValue-h4">
            At this point, it was clear. The problem was much larger than just trying to help busy people save time. Although still a valid piece of the puzzle, I needed to find a better way   to communicate YETI’s brand to their users.
          </h4>

          <img  className="coreValue-img1" src="https://previews.dropbox.com/p/thumb/AAVQGxJwPmaymITQzHdgcEGJaJ4eC20YCe8TWMfSBSOXHhoZzGRXbk9JjfxdLjbp7H5fNiNdxaDulqGOVFKdpeZNy7Q-b8NN3GSy4QjaL8s0YaodId_4yt3DqlYClNaGA2ApoqM0Bgg2jzAzkJTZc19bZs0kDe8YJF6UkX4qrXg0SybbK4uQm_H5jtiVTYbO25wMSFkV2wQz4yD8UKsecE0o-MdSjSEkukftK1qQMr4gMg/p.png?size_mode=5"/>
          <img className="coreValue-img2" src="https://previews.dropbox.com/p/orig/AAXsUSaC7_NMvpQB9Tct_2bFTBuW8U6gvHAi2YFct7rWXbaLSM2jdm3raJXT-1Cpxv4R7CGGNltvNNI2iGlnw2e53FgW_TmyrcDv5OR7WOTxkQLXRXdqcr-bnzS68UwpUfUwETpp8Y_ylbct_8LHsY6DlL0tF3WBsBhZVs8aplv9XoGqX7DKik4jdM2HxCKKrQmFr5RnY_-MFEeNZozJebR5/p.svg?size_mode=5"/>
        </div>

        <div id="yeti-futureResearch">
          <p className="futureResearch-p1">Future Research</p>
          <h2 className="futureResearch-h2">
            AFTER COMING TO THIS REALIZATION, I DECIDED TO DO A COMPAREATIVE ANALYSIS WITHIN THE LARGER OUTDOOR
            SPECIALTY CATEGORY TO SEEE WHAT THE DIFFERENTIATING FACTORS OF SUCCESS TRULY WERER BETWEEN THOSE
            BRANDS THAT ALREADY POSSESS WHAT I WOULD DESCRIBE AS A SELF-SUSTAINING ECOSYSTEM OF SUPPORT AND
            GUIDANCE, AND WHERE YETI CURRENTLY STANDS.
          </h2>

          <div className="futureResearch-imgs">
            <img className="future-img1" src="https://previews.dropbox.com/p/thumb/AAWvj9FJjDJo42ZYZLO24z5hXkzBj6S5ooTdwyakV4S5VhkrLWqUG6Z4An5tux4TaTxXEx09_aeK9R5r9G6N6AE-gOSM59xlk7OKRnnA0mG_rbiYk5jA8Tx2P9cuKnevKn7EuebtBiLeVEONz6rafkzQp80S72GNcasOvg3W6N4BWz8D_Q3v82AS9axfnUstDpv35Cf3q0haOyDxk0_kW9p9icoC9NWyvoQKLxbDeHfDHw/p.png?size_mode=5"/>
            <img className="future-img2" src="https://previews.dropbox.com/p/thumb/AAVpeWlItfa4HlZcfwMWfyjzgktYi0FLFSEQOc3g4gff2ze1osb3vBXZ5raTv3ZFvhDZ81UHUd-bzzUkGl2AbJuaeUelAAnuH_5tJun7NUMrT901v-44PCRXDAPLlmyzj7VnU7y7BMtHSb27YNM0FgVBAQatJ5TW04eOtBetJCQszoPfjIpQecyGbf2rQu3ptBKZQ5a5s8u3eQaZ0jt7UotbKJ4sIVIvB6YuxPDhbQ_x4Q/p.png?size_mode=5"/>
            <img className="future-img3" src="https://previews.dropbox.com/p/orig/AAWpOqGqURLzgWZUAlHDjO-iQAAnUFGDyRY1-h07mUuAVSvFqFFjayz67w8iChnt2FWMcREK9ZiASTiwUTk0-OuxdGwpsLRtNFfJ84r8GB8OmGl6xxXtaXaZolAexP3KxBj2IErw7Iya3FIgHbUY-DWAZw_SiNRQ0aZb2elz70ZIYocr_XM8ec0vdLNXa0srqvTx3yHPvd6NQZHyj7SSd_N5/p.svg?size_mode=5"/>
          </div>
        </div>


        <div id="yeti-hypothesis">
          <p className="hypothesis-p1">Refined Hypothesis</p>
          <h2 className="hypothesis-h2">
            I BELIEVE THAT CREATING A BETTER WAY TO COMMUNICATE THE RESOURCES AND FOUNDATION OF COMMUNITY, ON A MACRO
            LEVEL, THAT IS ALREADY AT YETI&rsquo;S CORE, AND DEVELOPING A MORE STRAIGHTFORWARD AND INTUITIVE IA AND VISUAL
            HERARCHY WITHIN THE NAVIGATION AND CONTENT WILL POTENTIALLY HELP CULTIVATE A LARGER CLIENT BASE AND
            INCREASE OVERALL BRAND LOYALTY.
          </h2>

          <img className="hypothesis-img" src="https://previews.dropbox.com/p/thumb/AAWjmz5MJiGScsdRo7-9fLIJoo4QOglaVav66Qopv8ok8VR1Dsngh-IBu-rYIv2tI-RYXZHiPFDctRG8nTs5DGcM7kv8PDDP5d_qC57JwQCVdH4FUBQimH215FSYj8yuGmvixlQAwAfN80DruRF1h_nuIMcKabV_KkTd1-tPpYNQW3ZeOp28RvfILmSCgSBQfEZqMHfV95HMX5_TWb9jn2ECPh1vSv9Okaj1h2vCDTi4Cg/p.png?size_mode=5" />
        </div>

        <div id="yeti-prototyping">
          <p className="yprototyping-p1">Prototyping</p>

          <img className="yprototyping-im1" src="https://previews.dropbox.com/p/thumb/AAX27qIfNXzFRQR60b7NSOx1kHe29tD-HIW0giL-zc0xXk83ePSYe3jIjgvV_S_UB4TZgm3NQ6R0P5l32Q-o-GuY0-AwgAA72sN63XT4hTaWfnNfoiuH-vF2Ccsav-xQ3hAw0ZFGiQ7E_JYZS3OtDt7fjOozfFpIgjnLnso_-4rdCksEqSo4Gp0rJbDHizEpUVASRddj5mW0RabujzZRjIGgZpKAcaRzApmOSy9Bi_ySCg/p.png?size_mode=5" />
          <img className="yprototyping-im2" src="https://previews.dropbox.com/p/thumb/AAXUfa33816hCVW9umLUW6Cs1mDvVWPatsJQsl6xOSrUY-UmkZFw8iSuTnxWnFKLf4vUg5WN2jmSWuf84vZwadhoPxV_rI8h_8IjgMGU22f-eNYG1_uy3hYnyauw86UxvXFi-v0tQv9wSpwgYmn4rzvSDwNmIFFkoYWs7AfIudEGHNvbq_GpxTUP1H-6e-oNqP8qp_pKMxTVw3cG2x-PHf4uac1VgmjvumBF3RfhnzVHeQ/p.png?size_mode=5"/>
          <img className="yprototyping-im3" src="https://previews.dropbox.com/p/thumb/AAVeNV7eQWrD0PLTrRMxgpd-xiHwMLBPTdnjT9cKf88fS_uv0Sa5cgQmOEHelku6pbvLDUwG5jhZYAH06ND8qBQltJIVWf1hCdJp142FfxArHwl3xhnt1gaM4yzyoPXNiJZnwn7g2jC6WJL-SYyKWG-U5EncWw006Pda5TE3MQRZRgFckL9yT3_JZjefnGYQZg54ArnTZnKDBCrSGFfBxIZyKPrqvMAsE6Ty6d8XLAinlWJmCvKcX_VAIXxplr5T0C376PnNg8v9d89evD-6tcFLQCxshweHzitUYa9C6BV2n1eLaUAkY9Dz4cfa48I0faM/p.png?size_mode=5"/>

        </div>

        <div id="yeti-redesign">
          <p className="redesign-p1">
            The Redesign &
            Design Decisions
            Behind Them
          </p>

          <div className="redesign-div1">
            <h1 className="div1-h1">REDESIGN GOALS</h1>
            <ol className="div1-ol">
              <li>CREATE CONSISTENT SIMPLE NAVIGATION</li>
              <li>COMMUNICATE COMMUNITY VALUE IN AN EFFICIENT AND BUSINESS MINDED MANOR.</li>
              <li>SHOWCASE PARTNERSHIP WORK AND IMPACT ON COMMUNITIES.</li>
            </ol>
            <img className="div1-img1" src="https://previews.dropbox.com/p/thumb/AAXQ5TIYEItmqCMWPtgaS4dFooQ9qq9EPSOQD4EPQGAUWVhDKjRc0g7dDaOUyY5qB_77xCmDPR-kaIevbUrsUSj5kOGv7PdIXvaEACXvWu1WzmpRSZkHlbwYWh84dqr08ulQkKyNNNPM1KARBT1f1hq5kQ6RvuFd0RLVTOU6NBEkq-TLbr_JCkSipGVMH-9FhRaPHTqBSNk6lga_XQm-wCPrM9RDB5GHFOO6C05QWAiG_c_rwi2k76X97YQIQ7sWwmM/p.png?size_mode=5"/>
          </div>

          <div className="redesign-div2">
            <h1 className="redesign-h1">NEXT STEPS</h1>
            <ul className="div2-ul1">
              <li>FURTHER DEVELOPMENT OF REDESIGN PROTOTYPE</li>
              <li>IMPLEMENT USER REVIEWS INTO PROTOTYPE</li>
              <li>DESIGN MOBILE PAGES</li>
            </ul>

            <ul className="div2-ul2">
              <li>CONTINUED USER TESTING AND SUS ANALYSIS TO DETERMINE WHAT&rsquo;S WORKING AND WHAT ISN&rsquo;T</li>
              <li>REDEVELOP USER TASKS TO PROPERLY MEASURE COMMUNITY ENGAGEMENT FACTORS.</li>
              <li>DESIGN MOBILE PAGE&rsquo;S </li>
            </ul>
          </div>

        </div>

        <div  id="yeti-footer">

          <div className="yeti-contact">
            <p className="ycontact-p">Contact</p>
            <h3 className="ycontact-h3">WANT TO LEARN MORE ABOUT WHAT I LEARNED DURING THIS EXPLORATION?</h3>
            <button className="ycontact-btn">Read On</button>
          </div>

          <p className="yeti-year">&#xa9;2019</p>
          <div className="yeti-footer-rightsie-links">
            <a href="#" >Linkedln </a>
            <a href="#" >Dribble </a>
            <a href="#" >Medium </a>
          </div>
        </div>

      </div>
    )
  }
}

export default Yeti;
