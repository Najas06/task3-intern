"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/type/product";
import NavMenu from "@/components/NavMenu";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  // console.log(products);

  const productFetch = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data: { products: IProduct[] } = await response.json();
    setProducts(data.products);
  };
  console.log(products);

  useEffect(() => {
    productFetch();
  }, []);

  return (
    <div className="bg-white min-h-screen w-full flex justify-center col-span-9 max-lg:col-span-12 max-lg:items-center ">
      <div className="p-5 w-full">
        <h1 className="text-black font-bold text-5xl text-center p-5 ">All Product</h1>
        <NavMenu/>
        <div className="grid grid-cols-3 gap-8 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:items-center max-lg:justify-center max-sm:flex max-sm:flex-col">
          {products.map((item) => {
            // const title = item.title
            return (
              
                <ProductCard
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
  );
}
