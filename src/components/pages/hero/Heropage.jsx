import React from 'react'
import '../hero/hero.css'

const Heropage = () => {

   const Marqueetext = [
    {
        icon:'1',
        text:'Sustainably Sourced'
    },
    {
        icon:'2',
        text:'Sustainably Sourced'
    },
    {
        icon:'3',
        text:'Sustainably Sourced'
    },
    {
        icon:'4',
        text:'Sustainably Sourced'
    },
    {
        icon:'5',
        text:'Sustainably Sourced'
    },
    {
        icon:'6',
        text:'Sustainably Sourced'
    },
    {
        icon:'7',
        text:'Sustainably Sourced'
    }
   ]
  return (
    <div className='hero-container'>
        <div className='hero-text-wrapper'>
            <section className='first-text-wrapper' >
                <h4> Autumn / Winter 2026 Collection</h4>
            </section>
         
            <section className='text-wrapper'>
            <h1>Where Wood</h1>
                <h1 style={{color:"rgb(212,132,61)"}}>Remembers
                </h1>
                <h1>Fire.</h1>
            </section>
            <section className='sub-text-wrapper'>
                <p>Furniture forged from slow-grown hardwoods and finished by hand. Each piece carries the warmth of centuries.</p>
            </section>
            <div className='btns-wrapper'>
                <button className=' button-collection'>
                    EXPLORE COLLECTION
                </button>
                <button className=' button-story'>
                    OUR STORY
                </button>
            </div>
        </div>
        <div className="marquee-wrapper">
  <div className="marquee-content">
    {[...Marqueetext, ...Marqueetext].map((item, index) => (
      <div className="marquee-box" key={index}>
        <p>{item.icon}</p>
        <h4>{item.text}</h4>
      </div>
    ))}
  </div>
</div>
      
    </div>
  )
}

export default Heropage
