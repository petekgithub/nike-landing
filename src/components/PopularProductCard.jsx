import { star } from "../assets/icons";

const PopularProductCard = ({
  imgURL,
  name,
  price,
  changeTargetImage,
  targetImage,
}) => {
  const handleClick = () => {
    if (targetImage !== imgURL) {
      changeTargetImage(imgURL);
    }
  };
  return (
    <div
      className={`flex flex-1 flex-col w-full max-sm:w-[200px] border-2 rounded-xl
      ${
        targetImage === imgURL ? "border-yellow" : "border-transparent"
      } cursor-pointer`}
      onClick={handleClick}
    >
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] pt-5" />
      <div className="ml-5">
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray ">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
