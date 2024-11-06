
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import Tasklist from '../taskList/Tasklist'
const EmployeeDashbord = (props) => {
  console.log(props)
  return (
    <div className='p-10 pg-[#1C1C1C] h-screen'>
        
        <Header/>
        <TaskNumber />
        <Tasklist />
    </div>
  )
}

export default EmployeeDashbord