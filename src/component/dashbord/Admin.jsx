import Alltask from "../others/Alltask"
import CreateTask from "../others/CreateTask"
import Header from "../others/Header"


const Admin = (props={}) => {
  return (
    <div className="h-screen w-full p-7">
<Header changeUser ={props.changeUser} />
<CreateTask  />
<Alltask />
    </div>
  )
}

export default Admin