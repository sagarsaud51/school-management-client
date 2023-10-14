import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './login.css';
const Login = () => {
    const[username,usernameupdate]=useState('');
    const[password,passwordupdate]=useState('');
    const usenavigate=useNavigate();
    useEffect(()=>{
        sessionStorage.clear();
    })
    const ProceedLogin=(e)=>{
e.preventDefault();
if(validate()){
    //console.log('proceed');
    fetch('http://localhost:8000/user/' +username).then((res)=>{
return res.json();
    }).then((resp)=>{
console.log(resp);
if(Object.keys(resp).length===0){
    toast.error("please enter valid username");
}else{
    if(resp.password===password){
        toast.success("Logged in successfully");
        sessionStorage.setItem('username',username);
usenavigate('/');
    }
    else{
        toast.error("please enter valid credentials");
    }
}
    }).catch((err)=>{
toast.error("login failed due to :" +err.message);
    });
}
    }
    const validate=()=>{
        let result=true;
        if(username===''||username==null){
       result=false;
       toast.warning('please enter username');
    }
    if(password===''||password==null){
        result=false;
        toast.warning('please enter password');
     }
    return result;
    }
   return (<div className="row">
<div className="offset-lg-3 col-lg-6">
    <form onSubmit={ProceedLogin} className="container">
    <div className="card">
                        <div className="card-header">
                            <h1>User Login</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span className="errmsg">*</span></label>
                                        <input value={username} onChange={e=>usernameupdate(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e=>passwordupdate(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                             
                              
                              
                              
                               
                            </div>

                        </div>
                        <div className="card-footer">
                    
                            <button type="submit" className="btn btn-primary">Login</button><span>   </span>
                            <Link to={'/register'} className="btn btn-success">New User ?</Link>
                        </div>
                    </div>

    </form>
</div>
   </div>);
}
 
export default Login;