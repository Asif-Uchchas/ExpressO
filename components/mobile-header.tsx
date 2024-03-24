import React from 'react'
import MobileSidebar from './mobile-sidebar'

const MobileHeader = () => {
  return (
      <nav className='lg:hidden  px-6 h-[50px] flex items-center bg-green-500 
      border-b fixed w-full top-0 z-50'>
          <MobileSidebar/>
    </nav>
  )
}

export default MobileHeader