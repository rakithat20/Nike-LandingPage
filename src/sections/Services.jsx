import {services} from '../constants'
import ServiceCard from '../components/ServiceCard'
import { motion } from 'framer-motion'
const Services = () => {
  return (
    <motion.section className="max-container flex flex-wrap justify-center gap-9" initial={{opacity:0}} whileInView={{opacity:1}}>
      {services.map((service)=>(
        <ServiceCard key ={service.label} {...service}/>
      ))}
    </motion.section>
  )
}

export default Services