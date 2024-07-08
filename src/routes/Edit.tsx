import React from 'react';
import { Form, useNavigate } from 'react-router-dom';
// TODO delete file
const Edit = () => {
  const navigate = useNavigate();
  return (
    <Form
      method='post'
      id='contact-form'
    >
      <p>
        <span>Name</span>
        <input
          placeholder='First'
          aria-label='First name'
          type='text'
          name='first'
          defaultValue={'contact?.first'}
        />
        <input
          placeholder='Last'
          aria-label='Last name'
          type='text'
          name='last'
          defaultValue={'contact?.last'}
        />
      </p>

      <p>
        <button type='submit'>Save</button>
        // TODO implement going back like this in login register etc
        <button
          type='button'
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
};

export default Edit;
