import { cn } from '@/lib/utils'
import React from 'react'
interface Props{
  className?:string
  title?:string
}
const Title = ({title,className}:Props) => {
  return (
    <h1 className={cn('font-semibold text-xl  mt-10 text-center underline   hover:underline-offset-4 mx-auto',className)}>{title}</h1>
  )
}

export default Title