import React, { Fragment, useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faPenFancy } from '@fortawesome/free-solid-svg-icons'
// import { Link } from "react-router-dom";


const UpdateStudents = ({ student }) => {
  const [fullname, setFullname] = useState(student.fullname);
  const [email, setEmail] = useState(student.email);
  const [phone, setPhone] = useState(student.phone);
  const [address, setAddress] = useState(student.address);
  const [course, setCourse] = useState(student.course);
  const [message, setMessage] = useState(student.message);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateStudent = async e => {
    e.preventDefault();
    try {
      const body = { fullname, email, phone, address, course,message };
      const response = await fetch(
        `/students/${student.std_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
   
    
        return (
            <Fragment>
             
              <span onClick={handleShow} >
              <FontAwesomeIcon icon={faPenFancy} className="text-primary" />

      </span>

      <Modal show={show} onHide={handleClose}>
      
        <Modal.Header>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Row >
        <Form.Control
            required
            type="text"
            placeholder="fullname"
            value={fullname}
            onChange={e => setFullname(e.target.value)}

          />
          </Form.Row>
          <Form.Row className="mt-2">
           <Form.Control
            required
            type="email"
            placeholder="email"
            value= {email}
            onChange= {e=> setEmail(e.target.value)}
          />
          </Form.Row>
          <Form.Row className="mt-2">
     <Form.Control
            required
            type="number"
            placeholder="phone"
            value= {phone}
            onChange= {e=> setPhone(e.target.value)}
          />
          </Form.Row>
          <Form.Row className="mt-2">
<Form.Control
            required
            type="text"
            placeholder="address"
            value= {address}
            onChange= {e=> setAddress(e.target.value)}
          />   
          </Form.Row>
          <Form.Row className="mt-2">
<Form.Control
            required
            type="text"
            placeholder="course"
            value= {course}
            onChange= {e=> setCourse(e.target.value)}
          />
          </Form.Row>
          <Form.Row className="mt-2">
<Form.Control
            required
            type="text"
            placeholder="message"
            value= {message}
            onChange= {e=> setMessage(e.target.value)}
          />


</Form.Row>

          </Form>
          
      
          </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={e => updateStudent(e)}>
            update
          </Button>
        <Button variant="danger" onClick={handleClose}>
            close
          </Button>
         
          
        </Modal.Footer>
      </Modal>

    
     </Fragment>
  );
}
           
   
export default UpdateStudents
