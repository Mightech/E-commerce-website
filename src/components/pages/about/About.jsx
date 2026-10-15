import React from 'react'
import '../about/about.css'

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-img-wrapper'>
            <div className='img'>
              <img src="/Nike shoe black futuristic.jpeg" alt="" />
            </div>
            <div className='img-tag'>
                <h5>NEW SEASON</h5>
            </div>

        </div>
        <div className='about-writeup-wrapper'>
          <div className='philosophy'>
          <h5>OUR PHILOSOPHY</h5>
          </div>
          
          <div className='about-main-writeup'>
          <h2>Crafted for Rooms </h2>
        <h2>That <span style={{color:"rgb(196,102,28)"}}>Breathe.</span></h2>
          </div>
          <div className='about-subtext'>
            <p>Every Mightex piece begins as a conversation with wood — its grain, its memory, its weight. We let the material lead, and our artisans follow with tools passed down three generations.</p>
            <p>
            The result is furniture that doesn't merely fill a room, but anchors it — giving every space a story of slow, deliberate craft.
            </p>
          </div>
          <div className='about-tally'>
            <section>
            <h2 style={{color:"rgb(212,133,60)"}}> 40+ </h2>
            <span style={{color:"rgb(135,95,58)"}}>ARTISANS</span>
            </section>
            <section>
            <h2  style={{color:"rgb(212,133,60)"}}> 1982</h2>
            <span style={{color:"rgb(135,95,58)"}}>EST.</span>
            </section>
            <section>
            <h2  style={{color:"rgb(212,133,60)"}}>12</h2>
            <span style={{color:"rgb(135,95,58)"}}>WOOD SPECIES</span>
            </section>
          </div>

        </div>

      
    </div>
  )
}

export default About
