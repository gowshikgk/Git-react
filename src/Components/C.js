import React, { useState } from 'react';

function FormComponent() {
  const [darkMode, setDarkMode] = useState(false);

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

 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const formStyle = {
    background: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
  };

  function clicked(){
    alert(`Thank you for your response ${name}`)
}


  return (
    <div className='form'>
    <div style={formStyle}>
    
    
            <h1>Login Form</h1>
          Username  <input type='text' placeholder='enter your name' onChange={changes} /><br></br><br></br>
          Password  <input type='password'placeholder='enter your password'onChange={changing} /><br></br><br></br>
          <button onClick={clicked}>Submit</button> <br></br> <br></br>
            <button onClick={toggleDarkMode}>changebackground</button>


      
    </div>
    </div>
  );
}

export default FormComponent;
