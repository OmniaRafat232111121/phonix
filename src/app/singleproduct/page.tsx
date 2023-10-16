import Container from '@/components/Container';
import { getSingleProduct } from '@/helper'
import Image from 'next/image';
import React from 'react'

const singleProduct=async({searchParams}:any)=>{
const _String=searchParams?._id;
const _id=Number(_String);
const product = await  getSingleProduct(_id);
return(
  <>
 <Container className='flex items-center mx-auto h-screen'>
 <Image
  src={product?.image}
  width={500}
  height={500}
  alt='productimage'


  />
  <div>
    <h2 className='font-semibold text-3xl mb-3'>{product?.title}</h2>
    <p className='text-gray-800 leading-7'>{product?.description}</p>
    <p className='text-red-800   p-3 w-[20%]'>Price $ :{product?.price}</p>

    <p>{product?.category}</p>
    <p>{product?.isNew ? (
      <>
      <p className='font-semibold text-lg leading-4 mt-3 '>IsNew</p>
      </>

    ):(
      <>
            <p className='text-semibold text-lg leading-4 mt-3'>IsOld</p>

      </>
    )
    }</p>


  </div>
 </Container>
  </>
)


}
export default singleProduct