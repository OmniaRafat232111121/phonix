import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProductProps } from '../../type';
const ProductCard = ({ product }: { product:ProductProps  }) => {
  return (
    <Link href={{ pathname: '/singleproduct', query: { _id: product._id } }}>
      <div className='border-[1px] border-gray-300 rounded-xl overflow-hidden hover:border-gray-800 duration-400 transition-all ease-in-out'>
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className='w-full h-80 object-cover'
        />
        <div className='px-4 pb-2 text-sm flex flex-col gap-1'>
          <p className='text-gray-600'>{product.title}</p>
          <p className='font-semibold mb-2'>price: ${product.price}</p>
          <div className='flex items-center justify-between'>
            <button className='bg-black text-white font-semibold rounded-lg p-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out cursor-pointer'>Add to cart</button>
            <button className='font-bold uppercase hover:text-indigo-700'>More Info</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard