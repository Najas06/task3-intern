"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ProductCard = ({
  title,
  category,
  img,
  price,
  discountPercentage
}: {
  title: string;
  category: string;
  img: string;
  price: number,
  discountPercentage: number
}) => {
  return (
    <>
      <motion.div
      initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.3}}
      className="flex flex-col bg-black rounded-3xl border   transition-all duration-300 justify-between w-[400px] max-2xl:w-[300px] max-lg:w-[250px] max-sm:w-[300px] max-lg:items-center">
        <div className="px-6 py-8 sm:p-10 sm:pb-6">
          <div className="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <h2 className="text-lg font-medium tracking-tighter text-white lg:text-2xl">
                {title}
              </h2>
              <p className="mt-2 text-sm text-gray-100">{category}</p>
            </div>
            <div className="flex justify-center ">
              <Image src={img} width={200} height={200} alt="products"/>
            </div>
            <div className="mt-6">
              <p>
                <span className="text-5xl font-light tracking-tight text-white">
                  ${price}
                </span>
                <a className="text-base font-medium text-white"> -% <span className="text-base font-medium text-red-300">{discountPercentage}</span> </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-6 pb-8 sm:px-8">
          <a
            aria-describedby="tier-starter"
            className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
            href="#"
          >
            View Product
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;
