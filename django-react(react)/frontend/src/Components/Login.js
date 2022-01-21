

import React,{useState ,useEffect} from 'react';
import ApiServices from '../ApiServices';
import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom'



function Login() {

const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
const [token,setToken]=useCookies(['mytoken'])
const[isLogin,setLogin]=useState(true)
const navigate = useNavigate()



useEffect(()=>{
    if (token['mytoken']){
        navigate('/article')
    }
    
  },[token])
  
  
  


const login=()=>{

     ApiServices.LoginUser({username,password})
    .then(resp=>setToken('mytoken',resp.token))
    .catch(error=>console.log(error))
    

}




 
const registerBtn = () => {
  ApiServices.RegisterUser({username,password})
  .then(resp => (resp))
  .catch(error=>console.log(error))



}

  return <div className='loginpage '>

    {isLogin ? <h1 className='text-center'>Login Here</h1>:<h1 className='text-center'>Register Here</h1>}
{/* <h1 className='text-white bg-dark text-center '>Login here</h1> */}
<div className='mx-5'>
<label className=''>User Name</label>
<input type='test' className='form-control' value={username}  onChange={e=>setUsername(e.target.value)}placeholder='Enter username'></input>
<label className=''>Password</label>
<input type='password' className='form-control' onChange={e=>setPassword(e.target.value)} value={password} placeholder='Enter password'></input>
</div>




<br/>

{isLogin?

<div className='col mx-5'>
<button className=  'loginb my-2 form-control text-white bg-dark' onClick={login}>Login</button>
</div>

:<div className='col mx-5'>
<button className=  ' my-2 form-control text-white bg-dark'  onClick={registerBtn}>Register</button>
</div>

}


<div className='my-5 mx-4'>
{isLogin? <h5>New user <button className='btn btn-outline-warning' onClick={()=>setLogin(false)}>Register </button>Here</h5>

:<h5>Already Registered <button className='btn btn-outline-dark ' onClick={()=> setLogin(true)}>Login </button> Here</h5>



}
</div>

</div> 



}

export default Login;
