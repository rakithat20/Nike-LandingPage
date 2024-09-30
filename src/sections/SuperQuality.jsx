import Button from "../components/Button"
import {shoe8} from "../assets/images"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      
        <h2
          className="mt-10 font-palanquin text-4xl font-bold capitalize max-lg:max-w-lg"
        >
         We Provide You <span className="text-coral-red inline-block mt-3 "> Super</span><br />

          
          <span className="text-coral-red inline-block mt-3 ">Quality</span> Shoes
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Ensuring premium comfirt and style ,our meticulosly crafted footware
          is designed to elavate your experience. Providing you with unmatched quality
          , innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detial and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
        <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 items-center justify-center">
        <img src={shoe8} alt="" width={570} height={522}  className="object-contain"/>
      </div>

    </section>
  )
}

export default SuperQuality