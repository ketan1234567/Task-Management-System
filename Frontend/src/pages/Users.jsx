import React from 'react';
import { Layout } from './Layout';
import { Table, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export const Users = () => {
  const users = [
    { id: 1, name: 'Rahul', email: 'rahul@mail.com', role: 'Admin' },
    { id: 2, name: 'Priya', email: 'priya@mail.com', role: 'User' },
    { id: 3, name: 'Amit', email: 'amit@mail.com', role: 'User' },
    { id: 4, name: 'Sneha', email: 'sneha@mail.com', role: 'Editor' },
    { id: 5, name: 'Vikram', email: 'vikram@mail.com', role: 'User' },
  ];

  const handleDelete = (name) => {
    Swal.fire({
      title: 'Delete ' + name + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete'
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({ title: 'Deleted!', icon: 'success', timer: 1000, showConfirmButton: false });
      }
    });
  };

  return (
    <Layout>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Users</h2>
        <Button variant="primary">Add User</Button>
      </div>
      <Table bordered hover>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <Button variant="info" size="sm" className="me-2">Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(u.name)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
}