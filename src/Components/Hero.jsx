import{heroData} from '../data';  //import data
import Header from './Header' ;//import components
import {motion} from 'framer-motion'; //import motion
import  {fadeIn, staggerContainer}from '../variants'

const Hero = () => {
  // destructure hero Data
  const {pretitle, title, subtitle, btnText} = heroData
  return (
    <section>
      <div className="container mx-auto">hero</div>
    </section>
  )
}

export default Hero