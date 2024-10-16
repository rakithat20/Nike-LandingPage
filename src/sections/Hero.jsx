import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
  const [bigShoeImg,setBigShoe]=useState(bigShoe1)
  return (
    <motion.section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
    >
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full xl:px-10 pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our summer Collection
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 ">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt6 mb14">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((statistic, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <motion.div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center" >
        <img
          src={bigShoeImg}
          alt="Shoes"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        {/* Adjusting the small shoes container */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[15%]  max-sm:px-10 ">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgUrl={shoe}
                changeImg={(shoe) => setBigShoe(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
