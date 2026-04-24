import React, { useState } from 'react'

import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

import Swal from 'sweetalert2';
import{SignupUser} from '../Services/UserServices'

export const SignupForm = () => {

    const [FormData,setFormData]= useState({
firstName:'',
email:'',
phone:'',
address:'',
zip:'',
password:''

    });

    const [error,setError]=useState({});


  const handleChange=(e)=>{
   setFormData({...FormData,[e.target.name]:e.target.value});

;
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError({});

  const requiredFields = ['firstName', 'email', 'phone', 'address', 'zip','password'];

  let newErrors = {}; // ✅ FIXED
  let hasError = false;

  requiredFields.forEach((field) => {
    if (!FormData[field]) { // ✅ FIXED
      newErrors[field] = "This field is required";
      hasError = true;
    }
  });

  if (hasError) {
    setError(newErrors);
    return;
  }

  try {
    const response = await SignupUser(FormData);

    Swal.fire({
      title: "Success!",
      text: "Account created successfully!",
      icon: "success"
    });

  } catch (error) {
    Swal.fire({
      title: "Oops...",
      text: error.response?.data?.message || "Something went wrong!",
      icon: "error"
    });
  }
};
  return (
    <>
    <Container className="mt-5">
      <Row className="justify-content-center">
        {/* md={5} makes it slightly wider than the login form to fit more fields */}
        <Col md={5}>
          
          <Card className="shadow-lg border-1 rounded-4 text-dark">
            <Card.Body className="p-5">
              
              <h2 className="text-center mb-4 fw-bold">Sign Up</h2>
              
              <Form onSubmit={handleSubmit}>
                
                {/* First Name */}
                <Form.Group className="mb-3 border-1 text-start" controlId="formFirstName">
                  <Form.Label className="fw-semibold">First Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your first name" 
                    name="firstName" 
                    onChange={handleChange}
                    value={FormData.firstName} 
                    className="rounded-3 shadow-sm border-0 py-2" 
                  />

                  {
                    error.firstName && <span className='text-danger'>{error.firstName}</span>
                  }



                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3 text-start" controlId="formEmail">
                  <Form.Label className="fw-semibold">Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                      name="email" 
                                     onChange={handleChange}
                    value={FormData.email} 
                    placeholder="Enter email" 
                    className="rounded-3 shadow-sm border-0 py-2" 
                  />
                  
                  {
                    error.email && <span className='text-danger'>{error.email}</span>
                  }
                </Form.Group>

                {/* Phone */}
                <Form.Group className="mb-3 text-start" controlId="formPhone">
                  <Form.Label className="fw-semibold">Phone Number</Form.Label>
                  <Form.Control 
                    type="tel" 
                     name="phone"
                    onChange={handleChange}
                    value={FormData.phone} 
                    placeholder="Enter phone number" 
                    className="rounded-3 shadow-sm border-0 py-2" 
                  />
                           {
                    error.phone && <span className='text-danger'>{error.phone}</span>
                  }
                </Form.Group>

                {/* Address */}
                <Form.Group className="mb-3 text-start" controlId="formAddress">
                  <Form.Label className="fw-semibold">Address</Form.Label>
                  <Form.Control 
                    type="text" 
                     name="address"
                      onChange={handleChange}
                    value={FormData.address} 
                    placeholder="Enter your street address" 
                    className="rounded-3 shadow-sm border-0 py-2" 
                  />
                           {
                    error.address && <span className='text-danger'>{error.address}</span>
                  }
                </Form.Group>

                {/* Zipcode */}
                <Form.Group className="mb-4 text-start"  controlId="formZipcode">
                  <Form.Label className="fw-semibold">Zip Code</Form.Label>
                  <Form.Control 
                    type="text" 
                     name="zip"
                         onChange={handleChange}
                    value={FormData.zip} 
                    placeholder="Enter zip code" 
                    className="rounded-3 shadow-sm border-0 py-2" 
                  />
                   {
                    error.zip && <span className='text-danger'>{error.zip}</span>
                  }
                </Form.Group>



                <Form.Group className="mb-3 border-1 text-start" controlId="formFpassword">
                  <Form.Label className="fw-semibold">Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter your  Password" 
                    name="password" 
                    onChange={handleChange}
                    value={FormData.password} 
                    className="rounded-3 shadow-sm border-0 py-2" 
                  />

                  {
                    error.password && <span className='text-danger'>{error.password}</span>
                  }

                </Form.Group>
                {/* Submit Button */}
                <Button variant="primary" type="submit" className="w-100 fw-bold rounded-3 py-2 mt-2">
                  Sign Up
                </Button>
                
              </Form>
              
            </Card.Body>
          </Card>
          
        </Col>
      </Row>
    </Container>
    
    </>
  )
}
