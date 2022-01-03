import React, { useState } from 'react';
function Newuser(props){
const [name,setName] = useState("");
const [age,setAge] = useState("");
const [password,setPassword] = useState("");
function validate(){
    if(name==""){
        alert("Enter the  username")
    }
    else if(age==""){
        alert("Enter the age")
    }
    else if(password==""){
        alert("Enter the password")

    }
    else{
        alert("Registed succesfully")
        
}

}
    return(
        <div className="main">
          <div className="card">
              <label>Name</label><br></br>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
              <label>Age</label><br></br>
              <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/><br></br>
              <label>Password</label><br></br>
              <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
              <div className="buttons">
              <button onClick={()=>props.history(-1)}>BACK</button><br />
              <button onClick={validate}>Register</button><br />
              <button onClick={()=>props.history("/login")}>login</button><br />
              </div>
          </div>
          
          </div>
    );
}
export default Newuser;