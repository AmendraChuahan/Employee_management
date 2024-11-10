import React from 'react'

const AcceptTask = ({data = {}}) => {
  
  return (
    <div className=' flex-shrink-0 h-full  w-[300px] bg-gray-400 rounded-xl p-5 '>

    <div className='flex justify-between  items-center'> 
    
        <h3 className='bg-red-500 text-sm rounded '> {data.category}  </h3>
        <h3> {data.taskDate}</h3>
         </div>
    
         <h2 className='mt-5 text-2xl font-semibold '> {data.title} </h2>
         <p className='text-sm mt-5'>
            {data.description}
             </p>
             <div className='flex justify-between mt-4'>
               <button className='bg-green-500 py-1 px-2 text-sm'> mark as Completed</button> 
               <button className='bg-red-500 py-1 px-2 text-sm'> mark as Failed</button>
             </div>
    </div>
  )
}

export default AcceptTask