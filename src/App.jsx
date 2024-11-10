import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import Login from "./component/Authorigation/login"
import Admin from "./component/dashbord/Admin"
import EmployeeDashbord from "./component/dashbord/EmployeeDashbord"
import { AuthContext } from "./context/AuthProvider"


const App = () => {

const [user, setUser] = useState(null)
const [loggedInUserData, setloggedInUserData] = useState(null)
const [authData,setUserData] = useContext(AuthContext)
useEffect(()=>{

  const loggedInUser = localStorage.getItem('loggedInUser')
  if(loggedInUser){
  const userdata = JSON.parse (loggedInUser)
 setUser(userdata.role)
 setloggedInUserData(userdata.data)
  }

},[])



const handleLogin = (email,password)=>{
if(email == 'admin@example.com' && password =='123'){
setUser('admin')
localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
}else if(authData ){
  const employee = authData.find((e)=>email== e.email && e.password==password)
  if(employee){
    setUser('employee')
    setloggedInUserData(employee)
localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
  }
}
else{
  alert("invalid credentail")
}
}
// const data = useContext(AuthContext)
// console.log(data)


 
  return (
 <>
 
{!user ? <Login handleLogin={handleLogin} />: ''}
{user == 'admin' ? <Admin changeUser={setUser}/> :(user == 'employee' ? <EmployeeDashbord changeUser={setUser} data={loggedInUserData}/> : null)}
 
 </>
  )
}

export default App