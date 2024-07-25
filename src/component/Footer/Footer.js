import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'


const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='container'>
        
          <div className='footer-head'>
            <h1>Ready to make something kiskass?</h1>
            <h2>Let's get on a call</h2>
          </div>
          <div className='footer-bottom'>
            <div className='footer-bottom_info'>
              <ul>
                
                <li className='footer_item'> Portfolio Creator</li>
                <li><Link to='/' className='footer_item2'>4353 Delaware Avenue,San Francisco , USA</Link></li>
                <li><Link to='/' className='footer_item3'>hi@thefolio.com</Link></li>
                               
              </ul>
            </div>
            <div className='footer-bottom_about'>
              <ul>
                <li><Link to='/' className='footer_item5'>About</Link></li>
                <li><Link to='/' className='footer_item5'>Contact</Link></li>
                <li><Link to='/' className='footer_item5'>Dribble</Link></li>
              </ul>
            </div>
            <div className='footer-bottom_services'>
              <ul>
                <li><Link to='/' className='footer_item5'>Services</Link></li>
                <li><Link to='/' className='footer_item5'>Blog</Link></li>
                <li><Link to='/' className='footer_item5'>Istagramm</Link></li>
              </ul>
            </div>
            <div className='footer-bottom_experienc'>
              <ul>
                <li><Link to='/' className='footer_item5'>Experiens</Link></li>
                <li><Link to='/' className='footer_item5'>Project</Link></li>
                <li><Link to='/' className='footer_item5'>Twitter</Link></li>
              </ul>
            </div>
          </div>
          <div className='footers_info'>

            <h1>© All rights reserved.</h1>
            <h1>Sumit Hegde</h1>
            <h1>. Powered by</h1>
            <h1>Webflow/</h1>
            <h1>Image License Info/</h1>
            <h1>Instructions/</h1>
            <h1>Changelog/</h1>
            <h1>Style Guide</h1>
          </div>
        
      </div>
    </div>
  )
}

export default Footer
