

import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"

const CreateTask = () => {
  const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState("")
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})
  const submitHandler =(e)=>{
    e.preventDefault()

    setNewTask({taskTitle,taskDate,taskDescription,category,active:false,new:true,failed:false,complete:false})
    const data =  userData



   data.forEach(function(elem){
   if(asignTo== elem.firstName){
    elem.tasks.push(newTask)
    elem.taskNumbers.new = elem.taskNumbers.new+1
    
   }
   })
   setUserData(data)
  console.log(data)

setAsignTo('')
setCategory('')
setTaskDate('')
setTaskDescription('')
setTaskTitle('')

  

  }
  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
    <form
    onSubmit={(e)=>{
      submitHandler(e)
    }} className=" w-full flex items-start justify-between flex-wrap ">

        <div className="w-1/2 "> 
        <div>
       <h3 className="text-sm text-gray-300 mb-0.5"> Task Title</h3> 
       <input 
       value={taskTitle}
       onChange={(e)=>{
        setTaskTitle(e.target.value)
       }}
       className ="  text-white bg-transparent mt-2 text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-red-400 mb-4   " type = "text" placeholder="decide task"/>
       </div>
       <div>
        <h3 className="text-sm text-gray-300 mb-0.5"> Date</h3>
        <input
        value={taskDate}
        onChange={(e)=>{
         setTaskDate(e.target.value)
        }}
        className="text-sm py-1 px-2 w-4/5 rounded outline-none  border-[1px] border-red-400 mb-4 bg-transparent  text-gray-300"  type="Date" />
        </div>
        <div>
        <h3 className="text-sm text-gray-300 mb-0.5"> Asign</h3>
        <input
        value={asignTo}
        onChange={(e)=>{
         setAsignTo(e.target.value)
        }}
        className=" text-white text-sm py-1 px-2 w-4/5 rounded outline-none  border-[1px] border-red-400 mb-4 bg-transparent "type="text" placeholder="employee name" />
        </div>
      <div>
      <h3 className="text-sm text-gray-300 mb-0.5"> Category</h3>
      <input 
      value={category}
      onChange={(e)=>{
       setCategory(e.target.value)
      }}
      className="  text-white text-sm py-1 px-2 w-4/5 rounded outline-none  border-[1px] border-red-400 mb-4 bg-transparent"  type="text" placeholder="design,dev,ect" />
      </div>
        </div>
      
        <div className="  w-2/5 flex flex-col items-start">
        <h3
        className="text-sm text-gray-300 mb-0.5"> Description</h3>
        <textarea
        value={taskDescription}
        onChange={(e)=>{
         setTaskDescription(e.target.value)
        }}
         className=" text-white w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" ></textarea>
       
        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full text-white  "> Create Task</button>
       
        </div>
    </form>
</div>
  )
}

export default CreateTask