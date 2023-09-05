import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const nav=useNavigate()

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-primary">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <br/>
      
      <Button className='ms-3' onClick={()=>nav('/home')} variant="success" type="submit">
        Submit
      </Button>
    
      <Button className='ms-3' onClick={()=>nav('/')} variant="success" type="submit" >
        Previous
      </Button>
      
    </Form>
  );
}

export default Login;