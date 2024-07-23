import React from 'react'
import './faq.css'
import IconStr from '../../image&icon/pastgaStrelka.png'

const FAQ = () => {
  const data =[
    {title:'What type of projects do you take on?', icon:IconStr},
    {title:'What is your hourly rate?', icon:IconStr},
    {title:'What time-zone do you work in?', icon:IconStr},
    {title:'What is the typical timeline for a project?', icon:IconStr},
  ]

  const newData = [
    {title:'How do you charge for projects ?',icon:IconStr},
    {title:'What does your design process look like?',icon:IconStr},
    {title:'What metrics do you use to measure success?',icon:IconStr},
    {title:'What if I need help after the project is complete?',icon:IconStr},
  ]
  return (
    <div className='faqData'>
     <div className='container'>
      <section className='faq'>
        <div className='faqHead'>
          <h3>FAQ</h3>
          <h1>Frequently asked questions</h1>
        </div>
        <div className='faqBottom'>
          <div className='faqBottom-left'>
            {data.map( (item) => {
              return(
                <div className='faqBotto-left_info'>
                  <h1>{item.title}</h1>
                   <img src={item.icon} />
                   
                   </div>
              )
            })}
          </div>
          <div className='faqBottom-right'>

            {newData.map( (item) => {
              return(
              <div className='faqBotto-right_info'>
                <h1>{item.title}</h1>
                <img src={item.icon} />
              </div>)

            })}
          </div>
        </div>
      </section>
     </div>
    </div>
  )
}

export default FAQ
