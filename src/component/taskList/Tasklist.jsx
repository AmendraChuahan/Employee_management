import AcceptTask from "./AcceptTask"
import Complet from "./Complet"
import Faildtask from "./Faildtask"
import NewTask from "./NewTask"


const Tasklist = ({data = {}}) => {
 
  return (
    <div  id= 'tasklist' className=' gap-5 h-[55%] overflow-auto  flex items-center justify-start  w-full  mt-10 h-screen py-5 flex-nowrap'>
     {data.tasks.map((elem ,idx)=>{
      if(elem.active){
        return<AcceptTask key={idx} data={elem}/>
      }
      if(elem.new){
return <NewTask key={idx} data={elem}/>
      }
      if(elem. complete){
        return <Complet key={idx} data={elem}/>
      }
      if(elem.failed){
        return <Faildtask key={idx} data={elem}/>
      }

     })}   






</div>
   
  )
}

export default Tasklist