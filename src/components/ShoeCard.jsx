const ShoeCard = ({ imgUrl, changeImg, bigShoeImg }) => {
    const handleClick = () => {
      // Assuming imgUrl contains both thumbnail and bigShoe properties
      if (bigShoeImg !== imgUrl.bigShoe) {
        changeImg(imgUrl.bigShoe); // Pass the correct image
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigShoeImg === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div
          className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4"
        >
          <img
            src={imgUrl.thumbnail}
            alt="Shoe"
            width={127}
            height={103}
            className="object-contain"
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;
  