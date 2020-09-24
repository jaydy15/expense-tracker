import React, { useContext } from 'react';
import { GlobalContext } from './../context/GlobalContext';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((trans) => (
          <Transaction key={trans.id} trans={trans} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
