import './header.css'

const Header = ()=>{
   return(
      <header className='container'>
          <a href='#' className='logoPortfolio'>PortfolioCreator</a>
           
          <nav className='logopit'>
               
               <ul>
                    <li>  <a href='#'>About</a>    </li>
                    <li>  <a href='#'>Services</a>    </li>
                    <li>  <a href='#'>Project</a>    </li>
                    <li>  <a href='#'>Blog</a>    </li>
                    <li>  <a href='#'>Book a call</a>   </li>
               </ul>
          </nav>
      </header>
   )
}

export default Header;