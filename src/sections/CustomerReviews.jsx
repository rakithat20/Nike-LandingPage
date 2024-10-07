import {reviews} from '../constants'
import ReviewCard from '../components/ReviewCard'
const CustomerReviews = () => {
  return (
    <section className="max-container flex items-center justify-center flex-col">
      <h3 className="text-4xl font-palanquin leading-tight font-bold ">
        What Our 
        <span className="text-coral-red" > Customers </span>
         Say ?
      </h3>
      <p className="text-slate-gray font-montserrat mt-6 text-lg text-center max-w-lg">
      Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className="mt-20 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>(<ReviewCard imgURL={review.imgURL}/>))}
      </div>
    </section>
  )
}

export default CustomerReviews