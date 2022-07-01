import React, { useContext } from 'react'
import ComC from './ComC'
import {FirstName , LastName} from "./App"

function ComB() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName)
  return (
    <div>
      <h1>Contaxt Api second Way </h1>
      <h2>my name is {fname} {lname}</h2>
        
        {/* <ComC/> */}
    </div>
  )
}

export default ComB