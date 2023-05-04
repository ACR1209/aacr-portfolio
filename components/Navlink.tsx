import React, { ReactNode } from 'react'

function Navlink({children}: {children: ReactNode }) {
  return (
    <li className='cursor-pointer flex items-center hover:scale-110 transition-all'>{children}</li>
  )
}

export default Navlink