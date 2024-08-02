'use client'
import NavMenu from '@/components/NavMenu';
import ProductCard from '@/components/ProductCard';
import { IProduct } from '@/type/product';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [dress, setDress] = useState<IProduct[]>([]);
    const [bag,setBag] = useState<IProduct[]>([]);
    const [jewelery,setJewellery] = useState<IProduct[]>([]);
    const [shoes,setShoes] = useState<IProduct[]>([]);
    const [watch,setWatch] = useState<IProduct[]>([]);

    const fetchProducts = async () => {

        const response = await fetch('https://dummyjson.com/products/category/womens-dresses');
        const data: { products: IProduct[] } = await response.json();
        setDress(data.products);

        const response2 = await fetch('https://dummyjson.com/products/category/womens-bags');
        const data2: { products: IProduct[] } = await response2.json();
        setBag(data2.products);

        const response3 = await fetch('https://dummyjson.com/products/category/womens-jewellery');
        const data3: { products: IProduct[] } = await response3.json();
        setJewellery(data3.products);

        const response4 = await fetch('https://dummyjson.com/products/category/womens-shoes');
        const data4: { products: IProduct[] } = await response4.json();
        setShoes(data4.products);

        const response5 = await fetch('https://dummyjson.com/products/category/womens-watches');
        const data5: { products: IProduct[] } = await response5.json();
        setWatch(data5.products);

        // const 
    };
    useEffect(() => {
        fetchProducts();
    }, []);
  return (
  
    <div className="bg-white min-h-screen w-full flex justify-center col-span-9 max-lg:col-span-12 max-lg:items-center">
      <div className="p-5 w-full">
        <h1 className="text-black font-bold text-5xl text-center p-5 ">Women Category</h1>
        <NavMenu/>
        <p className="text-black font-bold text-xl text-center my-5 underline">Women's Dress</p>
        <div className="grid grid-cols-3 gap-8 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:items-center max-lg:justify-center max-sm:flex max-sm:flex-col">
          {dress.map((item) => {
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
     
        <p className="text-black font-bold text-xl text-center my-5 underline">Women's Bag</p>
        <div className="grid grid-cols-3 gap-8 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {bag.map((item) => {
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

        <p className="text-black font-bold text-xl text-center my-5 underline">Women's Jewellery</p>
        <div className="grid grid-cols-3 gap-8 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {jewelery.map((item) => {
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

        <p className="text-black font-bold text-xl text-center my-5 underline">Women's Shoes</p>
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

        <p className="text-black font-bold text-xl text-center my-5 underline">Women's Watches</p>
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
  )
}

export default page