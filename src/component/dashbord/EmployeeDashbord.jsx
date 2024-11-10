

import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import Tasklist from '../taskList/Tasklist'
const EmployeeDashbord = (props ={}) => {

  return (
    <div className='p-10 pg-[#1C1C1C] h-screen'>
      

      
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskNumber data={props.data} />
        <Tasklist data={props.data} />
    </div>
  )
}

export default EmployeeDashbord