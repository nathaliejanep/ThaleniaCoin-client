import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { addTransaction } from '../../services/api-service';
import useLocalStorage from '../../hooks/useLocalStorage';

const TransactionForm = ({ blockchain }: any) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState('');
  const [token] = useLocalStorage('token', null);
  console.log('TOOKEN', token);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const addTx = await addTransaction({ recipient, amount }, 3000, token);

      console.log('Transaction successful:', addTx);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group
        className='mb-3'
        controlId='formrecipient'
      >
        <Form.Label>Recipient Address</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter recipient address'
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </Form.Group>

      <Form.Group
        className='mb-3'
        controlId='formAmount'
      >
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type='number'
          placeholder='Enter amount'
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </Form.Group>

      {error && <div className='text-danger'>{error}</div>}

      <Button
        variant='primary'
        type='submit'
      >
        Send
      </Button>
    </Form>
  );
};

export default TransactionForm;
