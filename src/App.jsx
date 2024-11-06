import { useEffect } from "react"
import Login from "./component/Authorigation/login"
import Admin from "./component/dashbord/Admin"
import EmployeeDashbord from "./component/dashbord/EmployeeDashbord"
import { setLocalStorage } from "./utils/Local"




const App = () => {

useEffect(() => {
setLocalStorage()

  
},)







  
  return (
 
 
 <>
 
<Login/>
{/* <EmployeeDashbord /> */}
{/* <Admin /> */}


 </>
  )
}

export default App