import Button from '../components/Button'
import {offer} from '../assets/images'
import {arrowRight} from '../assets/icons'
import {motion} from 'framer-motion'
const SpecialOffer = () => {
  return (
    <motion.section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container" initial={{opacity:0}} whileInView={{opacity:1}}>
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
      
        <h2
          className="mt-10 font-palanquin text-4xl font-bold capitalize max-lg:max-w-lg"
        >

          
          <span className="text-coral-red inline-block mt-3 ">Special</span> Offer
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.

        </p>
        <div className="mt-11 flex flex-wrap gap-4 flex-row">
        <Button label="Shop Now" iconUrl={arrowRight}/>
        <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </motion.section>
  )
}

export default SpecialOffer