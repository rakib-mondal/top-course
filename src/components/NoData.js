import React from 'react'

const NoData = () => {
  return (
    <div>
        <div className='grid place-items-center bg-slate-300 w-[300px]  rounded-md p-5'>
            <p className='font-semibold pb-3'>No Data Found</p>
            <button onClick={()=>window.location.reload(false)} className=' py-[10px] px-[20px] rounded-md bg-slate-600 text-white shadow-md shadow-zinc-950 hover:bg-slate-900 ease-in-out duration-300'>Refresh</button>
        </div>
    </div>
  )
}

export default NoData