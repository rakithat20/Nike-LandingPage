import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h2 className="text-4xl font-bold leading-normal font-palanquin max-w-md ">Sign Up for
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h2>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-gray-400 rounded-full">
        <input type="text" placeholder="Subscribe@nike.com" className="input w1"/>
        <Button label="Sign Up" fullWidth ="w-full lg:w-1/4"/>
      </div>
    </section>
  )
}

export default Subscribe