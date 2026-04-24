import React, { useState } from 'react';
import { Layout } from './Layout';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

export const Profile = () => {
  const [name, setName] = useState('Admin User');
  const [phone, setPhone] = useState('9876543210');
  const [address, setAddress] = useState('Mumbai, India');

  const handleSave = (e) => {
    e.preventDefault();
    Swal.fire({ title: 'Saved!', text: 'Profile updated', icon: 'success', timer: 1500, showConfirmButton: false });
  };

  return (
    <Layout>
      <h2>Profile</h2>
      <Row className="mt-3 justify-content-center">
        <Col md={6}>
          <Card className="p-4">
            <Form onSubmit={handleSave}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} value={address} onChange={(e) => setAddress(e.target.value)} />
              </Form.Group>
              <Button type="submit" variant="primary">Save Changes</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}