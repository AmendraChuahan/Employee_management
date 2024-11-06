import{ useState } from "react";



const Login = ({handleLogin}) => {
  console.log(handleLogin)

const [email,setEmail] = useState('')
const [password, setPassword] = useState('')



const  submitHandler =(e)=> {
  e.preventDefault()
handleLogin(email,password)

console.log("email is",email);
console.log("password is",password);
setEmail("")
setPassword("")

}
  return (
    <div className=" bg-red-400 h-screen w-screen flex items-center justify-center">
      <div className="border-2  p-20 border-emerald-600 rounded-xl" >
        <form 
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className= ' flex flex-col items-center justify-center'>

<input 
value={email}
onChange={(e)=>{
  setEmail(e.target.value) 
  
}}
required   className=" outline-none border-2 bg-transparent border-emerald-600  text-xl py-3  px-5 rounded-full placeholder:text-gray-300" type="email" placeholder="Enter your email"/>
<input 
value={password}
onChange={(e)=>{
  setPassword(e.target.value)
}}
required  className="  mt-5  outline-none border-2 bg-transparent border-emerald-600  text-xl py-3  px-5 rounded-full placeholder:text-gray-300" type="password" placeholder="Enter  passowrd"/>
<button className=" mt-5 border-none  outline-none text-white  bg-emerald-700  font-semibold text-lg py-3  px-20 rounded-full placeholder:text-white"> Log in </button>

        </form>
      </div>
    </div>
  );
};

export default Login