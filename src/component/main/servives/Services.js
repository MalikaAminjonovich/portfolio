import React from 'react'
import './servives.css'
 import  icon1 from '../../image&icon/icon_services1.png' 
 import  icon2 from '../../image&icon/icon_services2.png' 
 import  icon3 from '../../image&icon/icon_services3.png' 
const Services = () => {

  const dataSer= [
    {icon: icon1, heading:'What I can do for you',title:"Faster, better products that your users love. Here's all the services I provide:",info:"Design Strategy", info2:"Web and Mobile App Design", info3:"Front-end Development"},
    {icon: icon2, heading:'What I can do for you',title:"Faster, better products that your users love. Here's all the services I provide:",info:"Design Strategy", info2:"Web and Mobile App Design", info3:"Front-end Development"},
    {icon: icon3, heading:'What I can do for you',title:"Faster, better products that your users love. Here's all the services I provide:",info:"Design Strategy", info2:"Web and Mobile App Design", info3:"Front-end Development"},
  ]
  return (
    <div>
    <div className='container'>
      <section id='services' className='services'>
        <div className='services_head'>
          <h4>Services</h4>
          <h1>Design that solves problems, <br />one product at a time.</h1>
        </div>
        <div className='services_bottom'>
          {dataSer.map( (item) =>{
            return(
              <div className='services-bottom_task' key={dataSer.index}>
                <div className='image'> <img src={item.icon} />  </div>
                <h1>{item.heading}</h1>
                <p>{item.title}</p>
                <ul>
                  <li>{item.info}</li>
                  <li>{item.info2}</li>
                  <li>{item.info3}</li>
                </ul>
            </div>
            )
          })}
       
        </div>
      </section>
    </div>
    </div>
  )
}

export default Services
