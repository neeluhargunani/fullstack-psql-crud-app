import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,  InputGroup, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import ListComponents from './ListComponents';

function FormComponents() {
  const [validated, setValidated] = useState(false);

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const [studentList, setStudentList] = useState([{}]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    
    }

    setValidated(true);
    
  };

  const addStudent=()=>{
    axios.post('/students', {
      fullname: fullname,
      email: email,
      phone: phone,
      address: address,
      course: course,
      message:message,
    }).then(()=>{
        setStudentList([...studentList,{
          fullname: fullname,
          email: email,
          phone: phone,
          address: address,
          course: course,
          message:message,
        }]);
        console.log(studentList);
       
      });
      alert(`${fullname} Thankyou your form had been submited`)
};

  return (
    <div className="register">
    <div className="container ">
    <div className= "row mt-5 p-3  ">
  <div className="col-md-8 col-lg-8 col-sm-12 col-xl-8 m-auto d-lg-flex d-md-flex d-xl-flex ">
    <div className="col-md-4  p-0 ">
    <Card className="register-left card">
    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3> WebCreationz Tutions</h3>
                        <p>The perfect Place to Learn Tutions For Website Creators,
                    </p>
                    
                        <Link to='/listcomponents' className="link">View List</Link>
                        <h6>Designed and developed by neelu hargunani contact :neelamh1000@gmail.com 7400219129</h6>
                        </Card>
                    </div>
     
    <div className="col-md-8 p-0 register-right">
   
    <Card className="p-3 card">
    <Card.Title className="text-center mt-2 c-title">Course Enrollment Form</Card.Title>
    <Card.Body>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group  controlId="validationCustom01">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="fullname"
            onChange={(event)=>{ 
         setFullName(event.target.value)
       }}  className= "text-secondary"
          
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="email"
              placeholder="email"
              onChange={(event)=>{ 
         setEmail(event.target.value)
       }}   className= "text-secondary"
             
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid email
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group  controlId="validationCustom03">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="phone" onChange={(event)=>{ 
         setPhone(event.target.value)
       }} className= "text-secondary" required />
          <Form.Control.Feedback type="invalid">
            Please provide 10 digits mobile number
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  controlId="validationCustom04">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="address" onChange={(event)=>{ 
         setAddress(event.target.value)
       }} className= "text-secondary" required />
          <Form.Control.Feedback type="invalid">
            Please provide your address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  controlId="validationCustom05">
    <Form.Label> course</Form.Label>
    <Form.Control  as="select"  onChange={(event)=>{ 
         setCourse(event.target.value)
       }} custom className="form-control bg-white text-secondary">
      <option>html-css</option>
      <option>html-css-bootstrap-jquery</option>
      <option>bootstrap version 3/4</option>
      <option>bootstrap-jquery</option>
      <option>ui development full course</option>
      <option>ui/ux principals</option>
      <option>drupal-7 theming</option>
      <option>wordpress</option>
      <option>frontend development full course</option>
      <option>jquery-javascript basics</option>
      <option>mysql database</option>
      <option>react development</option>
      <option>wordpress- drupal7 theming</option>
      <option> ui-frontend full course</option>
      <option>webdesigning</option>
    </Form.Control>
    <Form.Control.Feedback type="invalid">
            Please select course
          </Form.Control.Feedback>
  </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>message</Form.Label>
    <Form.Control as="textarea" rows={3}  onChange={(event)=>{ 
         setMessage(event.target.value)
       }} className= "text-secondary" />
  </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit"  onClick={addStudent} className="btn btn-secondary register-btn">Submit form</Button>
      
    </Form>
   
    </Card.Body>
    </Card>
    
    </div>
    </div>
    </div>
    </div>
    </div>
  
  );
}

export default FormComponents;