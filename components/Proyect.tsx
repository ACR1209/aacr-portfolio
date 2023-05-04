import Image from 'next/image'
import React from 'react'

export type Proyect = {
    title: string,
    imgSrc: string, 
    liveSrc: string,
    description: string
}

function Proyect({title, imgSrc, liveSrc, description}: Proyect) {
  return (
    <div className='w-full md:w-1/2 p-5 group relative flex flex-col items-center'>
        <div className='flex flex-col items-center'>
            <Image
                width={2000}
                height={2000}
                src={imgSrc}
                alt='Proyect'
                className='h-[200px] md:h-52 mb-3   w-96 object-fill'
                />
            <h3 className='text-xl text-center font-bold'>{title}</h3>
        </div>

        <div className='group-hover:flex justify-center items-center flex-col hidden  text-offWhite absolute left-0 top-0  bg-[rgba(0,0,0,0.8)] w-full h-full '>
            <p className='w-1/2 text-justify xl:text-xl'>{description}</p>
            <a className='border-white border-2 p-2 xl:text-xl hover:bg-white hover:text-black mt-5' href={liveSrc} target="_blank">Live Site</a>
        </div>
    </div>
  )
}

export default Proyect