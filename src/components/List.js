import React, { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { ExpenseContext } from '../GlobalState';

export default function List() {
  const [state] = useContext(ExpenseContext);
  return (
    <ListGroup style={{ color: '#17A2B8' }}>
      {state.expenses.map((item) => {
        return (
          <ListGroupItem key={item.id}>
            {item.name} - ${item.amount}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
