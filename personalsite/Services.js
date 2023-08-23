import React from 'react'
import "./style.css"
import Card from 'react-bootstrap/Card';



const Services = () => {
  return (
   <div>
    < div style={{display:'flex',gap:'10px',marginTop:'150px'}}>
      <div>
    <Card style={{ width: '20rem',height:'400px',backgroundColor:'white',boxShadow:'4px 4px 4px 4px black',gap:'20px'}}>
      <Card.Header>Front-end Developer</Card.Header>
      <i class="uil uil-programming-language" style={{fontSize:"100px",textAlign:'center'}}></i>
      <Card.Body>
        <Card.Text>
        creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.  
        </Card.Text>
      </Card.Body>
    </Card></div>

    <div>
    <Card style={{ width: '20rem',height:'400px',backgroundColor:'white',gap:'20px',boxShadow:'4px 4px 4px 4px black'}}>
      <Card.Header>UI/UXI</Card.Header>
      <i class="uil uil-web-grid-alt" style={{fontSize:"100px",textAlign:'center'}}></i>
      <Card.Body>
        <Card.Text>
       A fiels highly focused on real-world problmes with the main aim to provide a usefull,helpful,and expriance to the users.
        </Card.Text>
      </Card.Body>
    </Card></div>


    <div>
    <Card style={{ width: '20rem',height:'400px',backgroundColor:'white',gap:'20px',boxShadow:'4px 4px 4px 4px black'}}>
      <Card.Header>Back-end Developer</Card.Header>
      <i class="uil uil-arrow" style={{fontSize:"100px",textAlign:'center'}}></i>
      <Card.Body>
        <Card.Text>
          Desiging,building,and Maintaing ther server,database,ana APIs that power modern application.create server-side application.
        </Card.Text>
      </Card.Body>
    </Card></div>


    </div>
</div>
)
  }
 export default Services;