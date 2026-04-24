import React from 'react';
import { Layout } from './Layout';
import { Row, Col, Card } from 'react-bootstrap';

export const Dashboard = () => {
  return (
    <Layout>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard</p>
      <Row className="mt-3 g-3">
        <Col md={3}>
          <Card className="text-center p-3">
            <h3>150</h3>
            <p className="text-muted mb-0">Orders</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center p-3">
            <h3>$5,200</h3>
            <p className="text-muted mb-0">Revenue</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center p-3">
            <h3>89</h3>
            <p className="text-muted mb-0">Users</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center p-3">
            <h3>12</h3>
            <p className="text-muted mb-0">Pending</p>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}