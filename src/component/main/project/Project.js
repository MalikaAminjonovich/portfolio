import React from 'react'
import './project.css'
import img1 from '../../image&icon/img_project1.png'
import img2 from '../../image&icon/img_project2.png'
import img3 from '../../image&icon/img_project3.png'

const Project = () => {
  const proData = [
      {image:img1,title:'BRANDING',head:'Soulful Rebrand',info:'View Project->'},
      {image:img2,title:'PRODCUT DESIGN',head:'Datadash Product design',info:'View Project->'},
      {image:img3,title:'WEB DESIGN',head:'Maize Website Design',info:'View Project->'},
    ] 
    return (
   
    <div className='container'>
     <section id='project' className='project ,container'>
      <div className='project-top'>
       <div className='project-top_info' >
        <h4>PROJECT</h4>
        <h1>I bring result.<br />My clients are proof.</h1>
        </div>
          <div>
          <button className='btn'>View all projects</button>
          </div>
        
      </div>
      <div className='project-bottom'>
        {proData.map( (data) => {
          return(
            <div className='project-bottom_box'>
              <div className='proImage'> <img src={data.image} /></div>
              <p>{data.title}</p>
              <h2>{data.head}</h2>
              <h6>{data.info}</h6>
            </div>

          )
        })}
      </div>
      </section> 
    </div>
  )
}

export default Project
