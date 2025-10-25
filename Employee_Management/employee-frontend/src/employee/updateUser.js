import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'; // useParams import
import './updateUser.css';

const UpdateUser = () => {
  const { id } = useParams(); // Get the 'id' from URL params
  const navigate = useNavigate(); // For navigation after update

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
  });

  // Fetch employee data on component mount (or when 'id' changes)
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/employees/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching employee:', error.message);
      }
    };
    fetchEmployee();
  }, [id]); // Dependency array includes 'id'

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit to update employee
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
        method: 'PATCH', // PATCH request for partial update
        headers: {
          'Content-Type': 'application/json', // Correct content type
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to employee list page after successful update
        navigate('/'); // Navigate to home or the employee list
      } else {
        console.error('Failed to update employee');
      }
    } catch (error) {
      console.error('Error updating employee:', error.message);
    }
  };

  return (
    <div className="center-form">
      <h1>Edit Employee</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicDepartment">
          <Form.Control
            type="text"
            name="department"
            placeholder="Enter department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Edit Employee
        </Button>
      </Form>
    </div>
  );
};

export default UpdateUser;
