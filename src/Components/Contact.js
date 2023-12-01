import React from 'react'

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <h1>Login form</h1>
      <div className='validation'>
      <label for="name">Username:</label>
      <input type='text' id='name' placeholder='enter your username'>
        
      </input><br></br><br></br>
      <label for="pass">Password:</label>
      <input type='text' id='pass' placeholder='enter your password' maxLength={12} required>

        </input>
        <br></br><br></br>

        <button type='submit'>Submit</button>
        </div>



      
    </div>
  )
}

export default Contact
