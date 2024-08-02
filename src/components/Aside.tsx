'use client';
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Aside = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.6,duration:0.6}}
      
    className="col-span-3 p-5 bg-black text-white flex flex-col justify-start  transition-all duration-150 hover:text-white items-center relative min-h-screen max-lg:hidden ">
      <ul className="flex flex-col gap-10 fixed  top-1/4 ">
        <Link href={"/women"}>
          <li className="cursor-pointer text-3xl font-bold ">WOMENS</li>
        </Link>
        <Link href={"/tops"}>
          <li className="cursor-pointer text-3xl font-bold ">TOPS</li>
        </Link>
        <Link href={"/beauty"}>
          <li className="cursor-pointer text-3xl font-bold hover:underline-offset-4 ">
            BEAUTY 
          </li>
        </Link>
        <Link href={"/men"}>
          <li className="cursor-pointer text-3xl font-bold hover:underline-offset-4 ">
            MENS
          </li>
        </Link>
        <Link href={"/fragrances"}>
          <li className="cursor-pointer text-3xl font-bold hover:underline-offset-4 ">
            FRAGRANCES
          </li>
        </Link>
        <Link href={"/sunglasses"}>
          <li className="cursor-pointer text-3xl font-bold hover:underline-offset-4 ">
            SUNGLASSES
          </li>
        </Link>
        <Link href={"/sports"}>
          <li className="cursor-pointer text-3xl font-bold hover:underline-offset-4 ">
            SPORTS
          </li>
        </Link>
      </ul>
    </motion.div>
  );
};

export default Aside;
