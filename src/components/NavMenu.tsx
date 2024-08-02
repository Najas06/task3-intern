import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <>
      <ul className="hidden gap-5 bg-black py-3 px-6 justify-center rounded-sm  max-lg:flex  max-sm:w-full max-sm:justify-center max-sm:gap-3 max-sm:text-xs ">
        <Link href={"/women"} className="cursor-pointer">
          <li>Womens</li>
        </Link>
        <Link href={"/tops"} className="cursor-pointer">
          <li>Top</li>
        </Link>
        <Link href={"/beauty"} className="cursor-pointer">
          <li>Beauty</li>
        </Link>
        <Link href={"/men"} className="cursor-pointer">
          <li>Mens</li>
        </Link>
        <Link href={"/fragrances"} className="cursor-pointer">
          <li>Fragrances</li>
        </Link>
        <Link href={"/sunglasses"} className="cursor-pointer">
          <li>Sunglasses</li>
        </Link>
        <Link href={"/sports"} className="cursor-pointer">
          <li>Sports</li>
        </Link>
      </ul>
    </>
  );
};

export default NavMenu;
