import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/v1/auth/register', {
        name,
        email,
        password,
      });

      setSuccess(true);
      setError(null);
      setName('');
      setEmail('');
      setPassword('');
    } catch (err: any) {
      setError(err.response.data.message || 'Registration failed.');
    }
  };

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleRegister(e)}>
        <Form.Group controlId='formBasicName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
          />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E-mail'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </Form.Group>

        <Button
          variant='primary'
          type='submit'
          // onClick={(e) => handleSubmit(e)}
        >
          Register
        </Button>
      </Form>
      {error && <p className='text-danger'> {error}</p>}
      {success && (
        <Alert
          key='success'
          variant='success'
        >
          Registration successful! <Alert.Link href='login'>Log In</Alert.Link>
        </Alert>
      )}
    </>
  );
};

export default RegisterPage;
