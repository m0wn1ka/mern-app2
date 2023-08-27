import { Link } from 'react-router-dom';
import SaySomething from './SaySomething';
import { useState } from 'react';
import {Navigate} from 'react-router-dom';
import  {useNavigate}  from 'react-router-dom'
const Landing = () => {
    const navigate = useNavigate();
    const [post,setPost]=useState({});
    
    const handlePost=()=>{
        setPost(true)
    }
    const onSubmit=(e)=>{
        navigate('/post')
    }
    return (
    <nav>
        {/* <button onClick={handlePost}>post something</button> */}
        <form onSubmit={e=>onSubmit(e)}>
        <input type="submit" value="post"/>
        </form>
       
       
        hi the landing page
    </nav>
    )}
export default Landing;