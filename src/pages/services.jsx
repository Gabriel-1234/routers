import React, { useState } from 'react'
//import { Navigate} from 'react-router-dom'

const Services = () => {

  const [selected, setSelected] = useState('')


  return (
    <div>
      <h1>Services</h1>
      <button onClick={() => {
        setSelected('selected')
        console.log(selected)

      }}>Logout</button>
    </div>
  )
}

export default Services
