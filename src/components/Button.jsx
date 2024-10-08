
const Button = ({label,iconUrl,backgroundColor,textColor,borderColor ,fullWidth}) => {
  return (
   <button className={`flex justify-center items-center ${fullWidth}
   gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
   ${backgroundColor?`${backgroundColor} ${borderColor} ${textColor}`:`bg-coral-red  text-white`} `}>

   {label}
   {iconUrl&&<img src={iconUrl} className="ml-2 rounded-full w-5 h-5
   " />}
   </button>
  )
}

export default Button