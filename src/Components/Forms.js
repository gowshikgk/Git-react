import React, { useState } from 'react'
import Background from './Background';

<>
<Background/>
</>


function Forms() {
  
    const[name,setName]=useState("");
    const[pass,setPass]=useState("");
    function changes(event){
        setName(event.target.value)
    }
    function changing(event){
        setPass(event.target.value)
    }
    function clicked(){
        alert(`Thank you for your response Mr.${name}`)
    }
    const [mystyle,setMystyle]=useState({
      color:"black",
      backgroundColor:"white"  
  });

    const [text,setText]=useState("switched to light Mode")
    function toggleClick(){
        if (mystyle.color==='white'){
            setMystyle({color:'black',backgroundColor:'white'},setText("switched to light Mode"))

        }else{
            setMystyle({color:'white',backgroundColor:'black'},setText("switched to dark Mode"))
        }
    }
    

  return (
    
    <div>
        <div className='form'>
        <form>
        
        <div className='switches'>{text}</div>
        <div className='wrappers'style={mystyle}>
      
    
            <h1>Login Form</h1>
          Username  <input type='text' placeholder='enter your name' onChange={changes}/><br></br><br></br>
          Password  <input type='password'placeholder='enter your password' onChange={changing}/><br></br><br></br>
            <button onClick={clicked}>Submit</button>
            <button onClick={toggleClick}>changebackground</button>

        </div>

        </form>
      </div>
    </div>
    
  )
}

export default Forms
