

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Registration() {
    const nav= useNavigate()
  return (
    <div>
    
    <InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm">First name</InputGroup.Text>
    <Form.Control
      aria-label="Small"
      aria-describedby="inputGroup-sizing-sm"
    />
  


   </InputGroup>
     <InputGroup size="sm">
     <InputGroup.Text id="inputGroup-sizing-lg">Last name</InputGroup.Text>
     <Form.Control
       aria-label="Large"
       aria-describedby="inputGroup-sizing-sm"
     />
   </InputGroup>
   <br/>


   <InputGroup size="sm">
     <InputGroup.Text id="inputGroup-sizing-lg">User name</InputGroup.Text>
     <Form.Control
       aria-label="Large"
       aria-describedby="inputGroup-sizing-sm"
     />
   </InputGroup>
   <br/>

   <InputGroup size="sm">
     <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
     <Form.Control
       aria-label="Large"
       aria-describedby="inputGroup-sizing-sm"
     />
     <br/>
     
   </InputGroup>
   <br/>
   <Button onClick={()=>nav('/log')} variant="success" type="submit">
Submit
</Button>

   
   
   

   

   </div>
  



  )
}

export default Registration