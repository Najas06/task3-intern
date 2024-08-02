'use client'

import NavMenu from "@/components/NavMenu";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/type/product";
import React, { useEffect, useState } from "react";

const TopPage = () => {
  const [top, setTop] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/tops"
    );
    const data: { products: IProduct[] } = await response.json();
    setTop(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="bg-white min-h-screen w-full flex justify-center col-span-9 max-lg:col-span-12">
        <div className="p-5 w-full">
          <h1 className="text-black font-bold text-5xl text-center p-5 ">
            Tops
          </h1>
          <NavMenu/>
          <p className="text-black font-bold text-xl text-center my-5 underline">
            {/* Men's Shirts */}
          </p>
          <div className="grid grid-cols-3 gap-8 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:items-center max-lg:justify-center max-sm:flex max-sm:flex-col">
            {top.map((item) => {
              // const title = item.title
              return (
                <ProductCard
                  key={item.id}
                  title={item.title.slice(0, 20)}
                  category={item.category}
                  img={item.thumbnail}
                  price={item.price}
                  discountPercentage={item.discountPercentage}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPage;
