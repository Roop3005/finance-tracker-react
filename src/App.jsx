import React from 'react';
import { Header } from './Header.jsx';
import { Balance } from './Balance.jsx';
import { IncomeExpenses } from './IncomeExpenses.jsx';
import { TransactionList } from './TransactionList.jsx';
import { AddTransaction } from './AddTransaction.jsx';
import { ExpensesChart } from './ExpensesChart.jsx';
import { GlobalProvider } from './GlobalState.jsx';

import './index.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <ExpensesChart />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App
