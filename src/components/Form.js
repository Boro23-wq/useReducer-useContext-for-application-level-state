import React, { useState, useContext } from 'react';
import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
} from 'reactstrap';
import { v4 as uuid } from 'uuid';

import { ExpenseContext } from '../GlobalState';

export default function Form() {
  const [state, dispatch] = useContext(ExpenseContext);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  // handle name function
  const handleName = (event) => {
    console.log('Name ', event.target.value);
    setName(event.target.value);
  };

  // handle amount function
  const handleAmount = (event) => {
    console.log('Amount ', event.target.value);
    setAmount(event.target.value);
  };

  // form handle submit
  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (name !== '' && amount > 0) {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: { id: uuid(), name, amount },
      });

      // clean input fields
      setName('');
      setAmount('');
    } else {
      console.log('Invalid expense name or the amount!');
    }
  };

  // return form component
  return (
    <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
      <FormGroup
        className='row'
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Label for='exampleEmail' sm={2}>
          Expense
        </Label>
        <Col sm={4}>
          <Input
            type='text'
            name='name'
            id='expenseName'
            placeholder='Name of expense?'
            value={name}
            onChange={handleName}
          />
        </Col>
      </FormGroup>
      <FormGroup
        className='row'
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Label for='exampleEmail' sm={2}>
          Amount
        </Label>
        <Col sm={4}>
          <Input
            type='number'
            name='amount'
            id='expenseAmount'
            placeholder='$ 0'
            value={amount}
            onChange={handleAmount}
          />
        </Col>
      </FormGroup>
      <Button type='submit' color='info'>
        Add
      </Button>
    </BTForm>
  );
}
