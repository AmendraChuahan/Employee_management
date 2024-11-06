

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">

    <form className=" w-full flex items-start justify-between flex-wrap ">

        <div className="w-1/2 "> 
        <div>
       <h3 className="text-sm text-gray-300 mb-0.5"> Task Title</h3> 
       <input className =" bg-transparent mt-2 text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-red-400 mb-4   " type = "text" placeholder="decide task"/>
       </div>
       <div>
        <h3 className="text-sm text-gray-300 mb-0.5"> Date</h3>
        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none  border-[1px] border-red-400 mb-4 bg-transparent  text-white"  type="Date" />
        </div>
        <div>
        <h3 className="text-sm text-gray-300 mb-0.5"> Asign</h3>
        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none  border-[1px] border-red-400 mb-4 bg-transparent "type="text" placeholder="employee name" />
        </div>
      <div>
      <h3 className="text-sm text-gray-300 mb-0.5"> Category</h3>
      <input className="text-sm py-1 px-2 w-4/5 rounded outline-none  border-[1px] border-red-400 mb-4 bg-transparent"  type="text" placeholder="design,dev,ect" />
      </div>
    

        </div>
      
        <div className="  w-2/5 flex flex-col items-start">
        <h3 className="text-sm text-gray-300 mb-0.5"> Description</h3>
        <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" ></textarea>
       
        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full text-white  "> Create Task</button>
       
        </div>
    </form>
</div>
  )
}

export default CreateTask