import React,{useState} from 'react'

function Background() {
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
        <div className='switches'>{text}</div>
        <div className='wrappers'style={mystyle}>
            <p>this is a background changing effect</p>
      
    </div>
    <button onClick={toggleClick}>changebackground</button>
    </div>
  )
  }


export default Background

