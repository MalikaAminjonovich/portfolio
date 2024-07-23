import './trustedBy.css'

import logoIpsum1 from '../../image&icon/IMAGE (1).svg'
import logoIpsum2 from '../../image&icon/IMAGE (2).svg'
import logoIpsum3 from '../../image&icon/IMAGE (3).svg'
const TrustedBy = () => {
     return(
          <div className='container'>
              <div className='trustedBy'>
               <h1>Trusted By</h1>
               <div className='trustedBy_info'>
                    <img src={logoIpsum2} alt='icon'></img>
                    <img src={logoIpsum3} alt='icon'></img>
                    <img src={logoIpsum3} alt='icon'></img>
                    <img src={logoIpsum1} alt='icon'></img>
               </div>
               </div>
          </div>
     )
}
export default TrustedBy;