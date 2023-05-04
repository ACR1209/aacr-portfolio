import Image from 'next/image'
import React from 'react'

export type RemarkType = {
    title: string,
    description: string,
    imgSrc: string
}

function Remark({title, description, imgSrc}: RemarkType) {
  return (
    <div className='flex flex-col md:flex-row p-5 w-full'>
        <Image
            width={2000}
            height={2000}
            src={imgSrc}
            alt='Remark'
            className='object-cover w-full md:w-1/2'
            />
        <div className='w-full md:w-1/2 p-5'>
            <h3 className='text-2xl font-bold'>{title}</h3>
            <p className='text-base text-justify mt-10'>{description}</p>
        </div>
    </div>
  )
}

export default Remark