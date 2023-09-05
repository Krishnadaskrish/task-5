import React from "react";

import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


function Home() {
    const nav=useNavigate()
  return (
    <div>
        <h2>Home page</h2>

       <img  src="https://i.graphicmama.com/blog/wp-content/uploads/2020/06/03111347/38-Free-Modern-PowerPoint-Templates-1024x575.jpg"/>
           
      <Button className='ms-3' onClick={()=>nav('/log')} variant="success" type="submit">
        Previous
      </Button>
      
    </div>
  )
}

export default Home
