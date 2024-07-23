import './home.css'
import personImage from '../../image&icon/person.svg'
const Home =() =>{
     return(
          <div className='container'>
               <section id='Home'  className='Home'>
                    <div className='home_info'>
                         <div className='productsInfo_top'>
                              <h1 className='h1color'><span>I design product</span> <br/>that deligh and <br /> inspire people</h1>
                              
                              <p>
                               hi i'm aJake aproduct desighner based in parlin  <br></br>hi i'm aJake aprodhi i'm aJake aproduct desighner based in parlin 
                              </p>
                         </div>
                         <div className='productsInfo_button'>
                              <button className='bookCall'>Book a call</button>
                              <button className='download'>Download CV </button>
                         </div>
                    </div>
                    <div className='home_image'>
                         <img src={personImage} alt='Bu yerda rasm bor'></img>
                    </div>
               </section>
          </div>
     )
}
export default Home;