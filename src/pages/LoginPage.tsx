import React, { FormEvent, useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useAuth } from '../hooks/AuthProvider';
import useLocalStorage from '../hooks/useLocalStorage';

const LoginPage: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [setToken] = useLocalStorage('token', null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:3000/api/v1/auth/login',
        {
          email,
          password,
        }
      );
      if (data.success == true) {
        console.log(data);
        setToken(data.token);
        login();
        navigate('/dashboard', { replace: true });
      }
      setError(null);
    } catch (err: any) {
      setError(err.response.data.message || 'Login failed.');
    }
  };

  if (navigation.state === 'loading') {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <Form onSubmit={(e) => handleLogin(e)}>
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
        >
          Log In{' '}
        </Button>
      </Form>
      {error && <p className='text-danger'>{error}</p>}
    </>
  );
};

export default LoginPage;
