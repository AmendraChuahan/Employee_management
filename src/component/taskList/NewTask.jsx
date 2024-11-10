import React from 'react'

const NewTask = ({data ={}}) => {
  return (
    <div className=' flex-shrink-0 h-full  w-[300px] bg-green-400 rounded-xl p-5 '>

<div className='flex justify-between  items-center'> 

    <h3 className='bg-red-500 text-sm rounded '>{data.category}   </h3>
    <h3> {data.TaskDate}</h3>
     </div>

     <h2 className='mt-5 text-2xl font-semibold '> {data.title} </h2>
     <p className='text-sm mt-5'>
{data.description}
         </p>
         <div className=' mt-4'>
            <button> Accept Task </button>
         </div>
</div>
  )
}

export default NewTask