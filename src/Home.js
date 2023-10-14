
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Home  = () => {
    const usenavigate=useNavigate();
    useEffect(()=>{
let username=sessionStorage.getItem('username');
if(username===''||username===null){
    usenavigate('/login');
}
    },[]);
    return (  <div>
        <div className='header'>
<Link to={'/'}>Home</Link>
<Link  style={{float:'right'}} to={'/register'}>Log out</Link>
<h1>Welcome to our home page</h1>

        </div>
    </div>);
}
 
export default Home ;