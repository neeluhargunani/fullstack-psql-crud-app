import axios from 'axios';
import React, {Fragment, useState, useEffect } from 'react'
import { Table,Card } from 'react-bootstrap';
import UpdateStudents from './UpdateStudents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';





const ListComponents = () => {
  const [studentList , setStudentList] = useState([]);

 
//  get student list
  useEffect(() =>{
    axios.get('/students').then(res =>{
      console.log(res)
      setStudentList(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])
 
 //delete studentlist function

 const deleteStudent = async id => {
  try {
    const deleteTodo = await fetch(`/students/${id}`, {
      method: "DELETE"
    });

    setStudentList(studentList.filter(student => student.std_id !== id));
  } catch (err) {
    console.error(err.message);
  }
};

  return (
    <Fragment>
    <div className="register">
    <div className="container">
    <div className="row">
    <Link to ="/" className="table-link" >back to Registration</Link>
    <div className="col-md-12 col-lg-12 col-sm-12 col-xl-12 mt-5 ">
    <Card className="p-3 card box">
                    <Card.Title  className="text-center mt-2 c-title"><h3>Registerd Students List</h3></Card.Title>
                    <div className="table-responsive">
                    <Table className="table table-striped table-hover">
    <thead>
    <tr>
      <th>#</th>
      <th>Full Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Course</th>
      <th>Message</th>
      <th>operations</th>
    </tr>
  </thead>
  <tbody>
  {
       studentList.map(student => 
       <tr>
       <td>{student.std_id}</td>
       <td>{student.fullname}</td>
       <td>{student.email}</td>
       <td>{student.phone}</td>
       <td>{student.address}</td>
       <td>{student.course}</td>
       <td>{student.message}</td>
      

       <td>
               
      <UpdateStudents student = {student}/>

               <Link> <span onClick={() => deleteStudent(student.std_id)}>
               <FontAwesomeIcon icon={faTimes} className="text-danger" />
                </span>
                </Link>
              </td>
       </tr>)
     }
  </tbody>
    
    </Table>
    
    </div>
    </Card>
    
  
    </div>
    </div>
     </div>
     </div>
    </Fragment>
  );
}

export default ListComponents
