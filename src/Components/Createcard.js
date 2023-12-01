import React from 'react'
import Props from './Props'
import Contacts from './Contacts'

function Createcard(Contacts) {
  return (
    <Props
    name = {Contacts.name}
    img  = {Contacts.img}
    desc = {Contacts.desc}

    />
   
  )
}
{Contacts.map(Createcard)}
export default Createcard
