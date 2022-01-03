import React, { useState } from 'react';

function Forgot(props){
const [newpassword,setNewpassword] = useState("");
const [renterpassword,setrenterPassword] = useState("");
const [error,setrError] = useState("");
function confirm(){
    if(newpassword=="" && renterpassword==""){
        setrError("plz enter password")
    }
    else if(newpassword!==renterpassword){
        setrError(" password not match")
    }
    else{
        alert("password reset succesfully")
    }
}
    return(
        <div>
          <div className="card">
              <label>New Password</label><br></br>
              <input type="password" value={newpassword} onChange={(e)=>setNewpassword(e.target.value)}/><br></br>
              <label>Re-enter Password</label><br></br>
              <input type="Password" value={renterpassword} onChange={(e)=>setrenterPassword(e.target.value)}/><br></br>
             <div>   
             {error!==""? error:null} 

            <button onClick={()=>props.history(-1)}>back</button><br />
              <button onClick={()=>props.history("/newuser")}>new user</button><br />
              <button onClick={confirm}>confirm</button><br />
              <button onClick={()=>props.history("/login")}>login</button><br />
              
              </div> 
          </div>
     
          </div>
    );
}
export default Forgot;
