import React from 'react'
import Contacts from './Contacts'

function Props(Props) {
  return (
    <div>
        <div className='wrapper'>
        <div className='wrapper-head'>
        <h1>{Props.name}</h1>
        </div> 
        <div className='wrapper-img'>
        <img src={Props.img}/>
            </div>    
            <div className='wrapper-desc'>
            <h3>{Props.desc}</h3>
            </div>
            </div>
        </div>    
  )
}
export default Props
