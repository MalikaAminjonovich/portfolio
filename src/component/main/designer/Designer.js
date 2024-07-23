import React from 'react'
import './designer.css'
import phoneImg  from '../../image&icon/phone_designer.png'
import BoyImg from '../../image&icon/boy_designer.png'
import laptopImg  from '../../image&icon/laptop_designer.png'
import girlsImg  from '../../image&icon/girls_designer.png'

const Designer = () => {
  return (
    <div>
      <div className='container'>
          <section id='designer' className='designer'>
               <div className='designer-info'>
                    <div className='designer-info_left'>
                         <p>Product Designer</p>
                         <h1>That's me!</h1>
                    </div>
                    <div className='designer-info_right'>
                         <p>Over the past 12 years, I've worked with a diverse range of <br/>clients, from startups to Fortune 500 companies. I love crafting <br /> interfaces that delight users and help businesses grow.</p>
                    </div>
               </div>
               <div className='designer-image'>
                    <div className='designer-image_phone'>
                         <img src = {phoneImg } alt='image'></img>
                    </div>
                    <div className='designer-image_boy'>
                    <img src = {BoyImg} alt='image'></img>
                    </div>
                    <div className='designer-image_laptop'>
                          <div className='designer-image_notebook'>
                          <img src = {laptopImg } alt='image'></img>
                          </div>
                          <div className='designer-image_girls'>
                          <img src = {girlsImg} alt='image'></img>
                          </div>
                    </div>
                   
               </div>
          </section>
      </div>
    </div>
  )
}

export default Designer
