"use client";
import NavMenu from "@/components/NavMenu";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/type/product";
import { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [shoes, setShoes] = useState<IProduct[]>([]);
  const [watch, setWatch] = useState<IProduct[]>([]);
  //'https://dummyjson.com/products/category/smartphones'
  const productFetch = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/mens-shirts"
    );
    const data: { products: IProduct[] } = await response.json();
    setProducts(data.products);

    const response2 = await fetch(
      "https://dummyjson.com/products/category/mens-shoes"
    );
    const data2: { products: IProduct[] } = await response2.json();
    setShoes(data2.products);

    const response3 = await fetch(
      "https://dummyjson.com/products/category/mens-watches"
    );
    const data3: { products: IProduct[] } = await response3.json();
    setWatch(data3.products);
  };
  console.log(products);

  useEffect(() => {
    productFetch();
  }, []);
  return (
    <div className="bg-white min-h-screen w-full flex justify-center col-span-9 max-lg:col-span-12">
      <div className="p-5 w-full">
        <h1 className="text-black font-bold text-5xl text-center p-5 ">
          Men Category
        </h1>
        <NavMenu/>
        <p className="text-black font-bold text-xl text-center my-5 underline">
          Men's Shirts
        </p>
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
        <p className="text-black font-bold text-xl text-center my-10 underline">
          Men's Shoes
        </p>
        <div className="grid grid-cols-3 gap-8 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {shoes.map((item) => {
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
        <p className="text-black font-bold text-xl text-center my-10 underline">
          Men's Watches
        </p>
        <div className="grid grid-cols-3 gap-8 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {watch.map((item) => {
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
};

export default page;
