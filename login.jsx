import {Link,Route} from 'react-router-dom';
import React, { useState } from 'react';
function Login(props){
    console.log(props);
    const [first,setFirst] = useState("");
    const [second,setSecond] = useState("");
    const[check,setcheck]=useState(false)
    const [isPreview, setIsPreview] = useState(false);
    function login(){
 const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjA4NjdkMTVhNjVhYmQwOTBlMGMxMGQ4Iiwicm9sZSI6ImFwcCIsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6IjEyNy4wLjAuMSIsInRva2VuX2lkIjoiNjBjYzYyOGY1M2M0YTgxOGQxNGJmNzEyIn0.W-obHq4nAD6uHLZcfqjmybC8D9NPEqT1T59J-wiW94lpxXMi_On-RIiIZuunvcHMLC2BPgzuBRPhJT2xH7MyGqfdkIjv8LCeNDqJ7nkdBILH4gfDZyVDbSxgKbyn5LZVRpL3DwUv6nVrQ2jcw26MeD8qwe_UnsrcevhxFUuNixN5yHXNEx-T7bpBRvVB7L_3RSWKXrT3S9HlYuzb5aKTWJuF7eU87-d9_DAA03VlcL8x2TaRgbOz2sArwYeVFSoLBcEWZD5W568K6L3DFg8xhlE_WZmZai4WF6Lz0x7Gi_Q7UcDVp60LKK1dT1DNjjK4lcDdhp5E1Al1sQWZZG_Nqw'
    
        fetch(`https://connector-dev.demo.cedcommerce.com/mercado/public/user/login?username=${first}&password=${second}`,{
            
            headers: {

                Authorization: `Bearer  ${token}`
              }
        }
        
        )
        
        .then((result) => result.json())
        .then((json) => {
            console.log(json)
        localStorage.setItem("token", json.data.token);
        sessionStorage.setItem("token", json.data.token);
        document.cookie = `token=${json.data.token}`;
        if(json.success==true){
           setIsPreview(true);
           props.history("/logout")
  
           
        }
          
        });
    }
    function logout(){
        localStorage.removeItem(`token`);
        sessionStorage.removeItem(`token`);
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
    return(
        <div className="main">

          <div className="card">
              <label>UserName</label><br></br>
              <input type="text" value={first} onChange={(e)=>setFirst(e.target.value)}/><br></br>
              <label>Password</label><br></br>
              <input type={check?"text":"password"} value={second} onChange={(e)=>setSecond(e.target.value)}/><br></br>
              <button onClick={login}>Login</button><br />
              {isPreview==true?<button onClick={logout}>logout</button>:null}
              <button onClick={()=>setcheck(!check)} >show password</button>
              <Link to="forget">forgot password</Link>
              <Link to="Newuser" className="new">New User</Link>
          </div>
          
          </div>
    );
}
export default Login;