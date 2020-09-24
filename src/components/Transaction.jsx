import React, { useContext } from 'react';
import { GlobalContext } from './../context/GlobalContext';

const Transaction = ({ trans }) => {
  const { deleteTrans } = useContext(GlobalContext);
  const sign = trans.amount < 0 ? '-' : '+';

  return (
    <li className={trans.amount < 0 ? 'minus' : 'plus'}>
      {trans.text}
      <span>
        {sign}${Math.abs(trans.amount)}
      </span>
      <button className='delete-btn' onClick={() => deleteTrans(trans.id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
