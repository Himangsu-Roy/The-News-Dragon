import React, { useContext } from 'react';
import { useState } from 'react';
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContex } from '../../../providers/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContex);
  const [accepted, setAccepted] = useState(false)

   const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;

      createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
        })
        .catch(error => {
          console.log(error)
        })
   }


   const handleAccepted = (e) => {
      setAccepted(e.target.checked)
      console.log(e.target.checked)
   }


    return (
        <Container className="w-25 mx-auto">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your photo url"
            name="photo"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
          onClick={handleAccepted}
          type="checkbox" 
          name="accept" 
          label={<>Accept <Link to="/terms">Terms & Conditions</Link> </>}
          />
        </Form.Group>
        <Button 
        variant="primary" type="submit"
        disabled={!accepted}
        >
          Register
        </Button>
      </Form>
      <Form.Text className="text-secondary">
        Already Hava an Account? <Link to="/login">Login</Link>
      </Form.Text>
      <Form.Text className="text-success">
        We'll never share your email with anyone else.
      </Form.Text>
      <Form.Text className="text-danger">
        We'll never share your email with anyone else.
      </Form.Text>
    </Container>
    );
}

export default Register;
