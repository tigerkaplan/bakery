import {heroData} from '../data';  // import data
import Header from  './Header' // import components
import {motion } from 'framer-motion' // framer motion
import {fadeIn, staggerContainer} from '../variants' // variation




const Hero = () => {
    //destructure hero data
    const {pretitle, title, subtitle, btnText} = heroData
    

  return (
    <section className='min-h-[980px] bg-hero bg-cover bg-right'>
      {/* header */}
      <Header />
        <div className="container mx-auto">
          {/* text */}
          <div>
            {/* pretitle */}
            <div className='text-white text-[24px]'> {pretitle} </div>
            {/* title */}
            <div>{title}</div>
            {/* subtitle */}
            <div>{subtitle}</div>
             {/* subtitle */}
             <button>{btnText}</button>
          </div>
        </div>
    </section>
  )
}

export default Hero;