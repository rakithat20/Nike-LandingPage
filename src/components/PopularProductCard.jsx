import { star } from "../assets/icons"
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 w-full max-sm:w-full flex-col hover:scale-105 transition">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
        <div className="flex justify-start gap-2.5 mt-8">
            <img src={star} alt="ratings star" />
            <p className="text-xl text-slate-gray font-montserrat leading-normal">4.5</p>

        </div>
        <h3 className="mt-2 text-2xl font-palanquin font-bold leading-normal">{name}</h3>
        <p className="text-coral-red mt-2 leading-normal font-montserrat">{price}</p>
    </div>
  )
}

export default PopularProductCard