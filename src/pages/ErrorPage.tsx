import React from 'react';
import { useRouteError } from 'react-router-dom';
// TODO move file to pages
const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  // Check if error is of type Error
  const errorMessage =
    error instanceof Error ? error.message : 'An unknown error occurred';

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
