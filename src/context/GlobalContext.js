import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [],
};

//Create Context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  const deleteTrans = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  const addTrans = (trans) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: trans,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTrans, addTrans }}>
      {children}
    </GlobalContext.Provider>
  );
};
