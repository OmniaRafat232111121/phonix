import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from './Container'
interface ProductProps{
  _id:number,
  title:string,
  price:number,
  image:string,
  previousPrice:number,
  description:string,
  category:string,
  isNew:boolean,
  brand:string,
  quantity:number
}
type Props={
  products:ProductProps[]
}
const Products = ({products}:Props) => {
  return (
    <Container className='grid xl:grid-cols-4 gap-10 py-10 md:grid-cols-2  grid-cols-1'>
      {products.map((item)=>(
        <Link href={{pathname:'/singleproduct',query:{_id: item?._id}}}
         key={item._id}>
          <div className='border-[1px] border-gray-300 rounded-xl overflow-hidden hover:border-gray-800
           duration-400 transition-all ease-in-out'>
            <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={500}
            className='w-full h-80 object-cover'
            />
            <div className=' px-4 pb-2 text-sm flex flex-col gap-1'>
              <p className='text-gray-600'>{item?.title}</p>
              <p className='font-semibold'>{item?.price}</p>
              <div className='flex items-center justify-between'>
                <button className='bg-black text-white font-semibold 
                rounded-lg p-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out cursor-pointer'>Add to cart</button>
                <button className='font-bold uppercase hover:text-indigo-700'>More Info</button>
            
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Container>

  )
}

export default Products