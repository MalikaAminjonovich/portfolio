import React from 'react'
import './testimonial.css'
import personImg from '../../image&icon/testiminialImagePErson.png'
import vergulIcon from '../../image&icon/vergullar.png'

import strelka1 from "../../image&icon/o'ngga strelka.png"
import strelka2 from "../../image&icon/chapga strelka.png"


const Testimonial = () => {
  return (
    <div>
     <div className='container'>
      <section className='testimonials'>
        <p>Testimonials</p>
        <h1>Word on the streeet</h1>
        <div className='testimonial-box'>
          <div className='testimonial-box_image'>
            <img src={personImg}  alt='Image'/>
          </div>
          <div className='testimonial-box_info'>
            <div className='info-img'>
              <img src={vergulIcon} alt='Image' />
              <h6>Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.</h6>
            </div>
            <div className='info-bottom'>
              <div className='testimonial_str'>
              <h6>John Frankin</h6>
              <p>Founder, Double Bunch</p>
              </div>
            <div className='strelka'>
                <div className='strelka1'>
                  <img src={strelka2} />
                </div>
                <div className='strelka2'>
                  <img src={strelka1} />
                </div>
            </div>
            </div>
            
          </div>
        </div>
      </section>
     </div>
    </div>
  )
}

export default Testimonial
