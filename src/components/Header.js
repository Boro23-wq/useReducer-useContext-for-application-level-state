import React from 'react';
import { Jumbotron } from 'reactstrap';
import Logo from '../logo.svg';

export default function Headers() {
  return (
    <Jumbotron fluid>
      <h3 className='display-6'>
        <img
          src={Logo}
          style={{ marginBottom: '4px', width: 50, height: 50 }}
          alt='react-logo'
        />
        Expense Tracker
      </h3>
    </Jumbotron>
  );
}
