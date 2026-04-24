import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap'; // add this
import { NavBar } from './Navbar';

export const Layout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <NavBar />
      <Container className="mt-4">
        {children}
      </Container>
    </div>
  );
}