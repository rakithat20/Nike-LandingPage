import { star } from "../assets/icons"

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
        <img src={imgURL} alt={customerName} width={124} height={124} className="rounded-full object-cover" />
        <p className="mt-6 info-text max-w-sm">{feedback}</p>
        <div className="flex gap-4">
        <img src={star} alt="" width={24} height={24} className="object-contain m-0"/><p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        
        </div>
        <h2 className="text-3xl font-palanquin font-bold mt-1 text-center">
           {customerName}
        </h2>
       
    </div>
  )
}

export default ReviewCard