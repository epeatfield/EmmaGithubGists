import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Error page, if any unknown url is accessed
 */

const Error = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
  </div>
);

export default Error
