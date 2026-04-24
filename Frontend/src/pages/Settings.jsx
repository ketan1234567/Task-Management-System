import React, { useState } from 'react';
import { Layout } from './Layout';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

export const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('en');

  const handleSave = () => {
    Swal.fire({ title: 'Settings Saved!', icon: 'success', timer: 1500, showConfirmButton: false });
  };

  return (
    <Layout>
      <h2>Settings</h2>
      <Row className="mt-3 g-4">
        <Col md={6}>
          <Card className="p-4">
            <h5>Appearance</h5>
            <Form.Group className="mb-3">
              <Form.Label>Theme</Form.Label>
              <Form.Select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Language</Form.Label>
              <Form.Select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="mr">Marathi</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" onClick={handleSave}>Save</Button>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <h5>Notifications</h5>
            <Form.Check type="switch" label="Email Notifications" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} className="mb-3" />
            <Form.Check type="switch" label="Push Notifications" defaultChecked className="mb-3" />
            <Form.Check type="switch" label="SMS Alerts" className="mb-3" />
            <Button variant="primary" onClick={handleSave}>Save</Button>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}