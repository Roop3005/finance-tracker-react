import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState.jsx';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <span style={{fontSize: '0.8em', color: '#777', marginLeft: '10px'}}>({transaction.category})</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}