import { useState } from "react";
import { PopularProductCard } from "../components";
import { products } from "../constants";
import { shoe4 } from "../assets/images";

const PopularProducts = () => {
  const [targetImage, setTargetImage] = useState(shoe4);

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience the pinnacle of quality and style in our exclusive
          selections. Dive into a world where comfort, design, and value
          converge seamlessly. Elevate your lifestyle with our sought-after
          offerings, where excellence is not just a standard but a commitment.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard
            key={product.name}
            // {...product}
            name={product.name}
            price={product.price}
            imgURL={product.imgURL}
            changeTargetImage={(target) => setTargetImage(target)}
            targetImage={targetImage}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
