
import { useState } from "react";
import axios from "axios";
import {Link,Navigate} from 'react-router-dom';
import  {useNavigate}  from 'react-router-dom';
const SaySomething=()=>{
    const navigate = useNavigate();
    const [formData,setFormData]=useState({
        sayings:'',
      });
      const { sayings } = formData;
      const onChange=  e=>setFormData({...formData,[e.target.name]:e.target.value});
      const onSubmit= async e=>{
        e.preventDefault(); 
        try{
            const config={
                headers:{ 'Content-Type':'application/json'}
              }
              const token=localStorage.getItem('token')
              const body=JSON.stringify({token,sayings});
              console.log("token is from frontend",token)
              const res=await axios.post('http://127.0.0.1:3001/speech',body,config);
              console.log("just before navigate");
              navigate("/") 
        }catch(err){
            console.log(err)
            // localStorage.removeItem('token')
        }
        }
        // =======================
    return(
        <>
        
        <form onSubmit={e=>onSubmit(e)} >
            <input type="text" name="sayings" onChange={(e)=>onChange(e)  } value={sayings}/><br/>
            <input type="submit" className="btn btn-primary" value="post" />
        </form>
        </>
    )


}
export default SaySomething;