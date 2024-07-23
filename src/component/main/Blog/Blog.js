import React from 'react'
import './blog.css'
const Blog = () => {
  const blodData = [
    { date:'April 16, 20216 mins',title:'Design tips for designers, that cover everything you need',info:'Read the article'},
    { date:'April 16, 20216 mins',title:'How to build rapport with your web design clients',info:'Read the article'},
    { date:'April 16, 20216 mins',title:'Top 6 free website mockup tools 2021',info:'Read the article'},
    { date:'April 16, 20216 mins',title:'Logo design trends to avoid in 2021',info:'Read the article'},
    { date:'April 16, 20216 mins',title:'22 best UI design tools',info:'Read the article'},
  ]
  return (
    <div className='blogs'>
      <div className='container'>
        <section id='blog' className='blog'>
          <div className='blog-theme'>
            <p>BLOGS</p>
            <h2>Latest Blogs</h2>
            <h6>View all --></h6>
          </div>
          <div className='blog-info'>
            {blodData.map( (data) => {
              return(
                <div className='blog-info_box'> 
                <h5>{data.date}</h5>
                <h1>{data.title}</h1>
                <h4>{data.info}</h4><hr />
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Blog
