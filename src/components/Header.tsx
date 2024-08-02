"use client";

import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import logo from "../assests/logo.png";
import { motion } from "framer-motion";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-5 w-full top-0 bg-black max-sm:py-2 max-md:px-0"
      >
        <div className="mx-6 justify-between items-center flex max-sm:mx-1">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
          <ul className="flex justify-between items-center gap-6 max-sm:hidden">
            <li className="font-bold hover:bg-white hover:text-black px-2 py-1 rounded-sm transition-all duration-200 t">
              Home
            </li>
            <li className="font-bold hover:bg-white hover:text-black px-2 py-1 rounded-sm transition-all duration-200 t">
              About
            </li>
            <li className="font-bold hover:bg-white hover:text-black px-2 py-1 rounded-sm transition-all duration-200 t">
              Services
            </li>
            <li className="font-bold hover:bg-white hover:text-black px-2 py-1 rounded-sm transition-all duration-200 t">
              Blog
            </li>
            <li className="font-bold hover:bg-white hover:text-black px-2 py-1 rounded-sm transition-all duration-200 t">
              Contact
            </li>
          </ul>
          <IoIosMenu className="hidden max-sm:block" />
        </div>
      </motion.div>
    </>
  );
};

export default Header;
