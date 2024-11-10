import { useContext } from "react"
import {AuthContext} from'../../context/AuthProvider'

const Alltask = () => {
    const [userData,setUserData] = useContext(AuthContext)
    
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5  '>
<div className='bg-red-400 mb-5 p-5 flex justify-between rounded'>
            <h2 className=" text-lg font-medium w-1/5 ">Employee Name</h2>
            <h3 className=" text-lg font-medium w-1/5 ">New Task</h3>
            <h5 className=" text-lg font-medium w-1/5 "> Active</h5>
            <h5 className=" text-lg font-medium w-1/5 "> Completed</h5>
            <h5 className=" text-lg font-medium w-1/5 "> Failed</h5>
        </div>  


      <div className=" ">
      {userData.map(function(elem,idx){
            return  <div key={idx} className= 'border-2 bg-emerald-500 mb-5 p-5 flex justify-between rounded mb-2 py-2 px-4 py-3 bg-transparent'>
            <h2 className="text-lg font-medium  w-1/5 text-green-500"> {elem.firstName}</h2>
            <h3 className="text-lg font-medium  w-1/5 text-yellow-600"> {elem.taskNumbers.new}</h3>
            <h5 className="text-lg font-medium  w-1/5 text-white"> {elem.taskNumbers.active}</h5>
            <h5 className="text-lg font-medium  w-1/5 text-blue-600"> {elem.taskNumbers.complete}</h5>
            <h5 className="text-lg font-medium  w-1/5 text-red-600"> {elem.taskNumbers.failed}</h5>
        </div>
        }
        )}

      </div>
 </div>
  )
}

export default Alltask