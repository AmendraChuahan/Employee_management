import { setLocalStorage } from "../../utils/Local"

//  import { useState } from "react"
const Header = (props={}) => {
//   const [username, setUsername] = useState('')
//   if(!data){
//     setUsername('Admin')
//   }
//   else{
//     setUsername(data.firstName)
//   }
const logOutUser= ()=>{
 localStorage.setItem('loggedInUser','')
 props.changeUser('')
 //window.location.reload()
}

  
  return (
    <div className="flex items-end justify-between">
<h1 className=" text-white text-2xl font-medium"> hello  <br/> <span className=" text-white text-3xl font-semibold">Username👋</span> </h1>
<button onClick={logOutUser} className= "bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-s-sm"> Log out</button>


    </div>
  )
}

export default Header