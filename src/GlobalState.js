import React, { useReducer, createContext } from 'react';
import { v4 as uuid } from 'uuid';

export const ExpenseContext = createContext();

// Initial state with one expense
const initialState = {
  expenses: [
    {
      id: uuid(),
      name: 'Buy Airpods',
      amount: 299,
    },
  ],
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        expenses: [...state.expenses, action.payload],
      };
    default:
      return {
        state,
      };
  }
};

// Context Provider
export const ExpenseContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExpenseContext.Provider value={[state, dispatch]}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
