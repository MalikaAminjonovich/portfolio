import React from 'react'
import './experience.css'
import icon from '../../image&icon/strelka_icon.png'
import eduIcon from '../../image&icon/📚 Education (1).png'
import workIcon from '../../image&icon/💼 Work Experience.png'
import raketaicon from '../../image&icon/raketa_icon.png'
import musicIcon from '../../image&icon/music_icon.png'
import kingIcon from '../../image&icon/toj_image.png'

const Experience = () => {
  const eduData =[ 
    {title:'Stanford University',info:'MSc (Human Computer Interaction)',data:'• 2013-2015',icon:icon},
    {title:'MIT Summer School',info:'MIT Summer School',data:'• 2013-2014',icon:icon},
    {title:'California State University',info:'BSc in Software Engineering',data:'• 2009-2012',icon:icon},
  ]

  const workData= [
    {newIcon:raketaicon,title:'SpaceFleet',info:'SpaceFleet',data:'• April 2019 - Current',icon:icon},
    {newIcon:musicIcon,title:'MusicMash',info:'Information Architect',data:'• April 2016 - May 2017',icon:icon},
    {newIcon:kingIcon,title:'Kingdom',info:'UI Designer',data:'• April 2016 - May 2017',icon:icon},
  ]
  return (
    <div>
      <div className='container'>
        <section id='experience' className='experience'>
          <div className='education'>
            <div className='headeing'>
             <div className='educatonImg'> <img src={eduIcon} />  </div>
              {eduData.map( (item) => {
                return(
                  <div className='expereince-eduInfo'>

                    <div className='experience-eduInfo_left'>
                      <h1>{item.title}  </h1>
                      <p>{item.info}</p><hr />
                    </div>
                    <div className='experience-eduInfo_right'> 
                      <img src={icon} />
                      <h6>{item.data}</h6><hr />
                    </div>    
                        
                 </div>
                )
              })}
            </div>
          </div>
          <div className='work'>
            <div className='workIcon'> <img src={workIcon} alt='bu sarlavha' /></div>
            {workData.map( (item) => {
                return(
                  <div className='expereince-workInfo'>

                    <div className='experience-workInfo_left'>
                      <div className='experience_workInfo_leftImg'>
                       <img src={item.newIcon} alt='icon'></img>
                      </div>
                      <div className='experience_info'>
                      <h1>{item.title}  </h1>
                      <p>{item.info}</p><hr/>
                      </div>
                    </div>
                    <div className='experience-workInfo_right'> 
                      <img src={icon} />
                      <h6>{item.data}</h6>
                      <hr />    
                      </div>             
                 </div>

                )
              })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Experience
