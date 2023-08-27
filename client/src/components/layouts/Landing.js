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
    const onSubmit1=(e)=>{
        navigate('/post')
    }
    const onSubmit2=(e)=>{
        navigate('/seeposts')
    }
    return (
    <nav>
        
        <form onSubmit={e=>onSubmit1(e)}>
        <input type="submit" value="post"/>
        </form>
        <form onSubmit={e=>onSubmit2(e)}>
        <input type="submit" value="seeposts"/>
        </form>

       
       
        hi the landing page
    </nav>
    )}
export default Landing;