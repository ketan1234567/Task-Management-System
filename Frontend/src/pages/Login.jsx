import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

import { Link,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CheckLogin } from '../Services/UserServices';

export const Login = () => {

const navigate = useNavigate();


  // State to hold what the user types

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');







//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

  // Function to run when the form is submitted
//   const handleLogin = (e) => {
//     e.preventDefault(); // Prevents the page from refreshing
//     console.log("Login submitted!");
//     console.log("Email:", email);
//     console.log("Password:", password);
    
//     // You can add your backend API call here later
//     alert("Login button clicked! Check the console (F12) to see the data.");
//   }


const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await CheckLogin({ email, password });

    if (response.data.success) {
  localStorage.setItem("token", response.data.token);

  Swal.fire({
    title: "Success!",
    text: "Login successful!",
    icon: "success",
  });

  // optional
navigate('/dashboard');
}

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
    <Container className="mt-5  ">
      <Row className="justify-content-center">
        {/* md={4} makes the form take up only 1/3 of the screen on desktop */}
        <Col md={4}>
          
          {/* Card gives it a nice white box with a shadow */}
          <Card className="shadow-lg border-0 rounded-4 text-dark">
            <Card.Body className="p-4">
              
              <h2 className="text-center mb-4 fw-bold">Login</h2>
              
              <Form  onSubmit={handleLogin}>
                
                {/* Email Field */}
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail" >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
           
                    required 
                  />
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-4 text-start" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    
                    required 
                  />
                </Form.Group>

                {/* Submit Button */}
                <Button variant="primary" type="submit" className="w-100 fw-bold">
                  Login
                </Button>

                <div className="text-center mt-3">
  Don't have an account? 
  <Link to="/signup" className="text-primary"> Signup </Link>
</div>
                
              </Form>
              
            </Card.Body>
          </Card>
          
        </Col>
      </Row>
    </Container>
    
    </>
  )
}
