import React from 'react'
import './spinner.css'
const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className="custom-loader h-[50px] w-[50px] rounded-[100]">
        </div>
            <p className='text-white text-lg font-semibold'>Loading....</p>
    </div>
  )
}

export default Spinner