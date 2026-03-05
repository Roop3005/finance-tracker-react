import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GlobalContext } from './GlobalState.jsx';

export const ExpensesChart = () => {
  const { transactions } = useContext(GlobalContext);

  const expenses = transactions.filter(t => t.amount < 0);
  
  const data = expenses.reduce((acc, curr) => {
    const existing = acc.find(item => item.name === curr.category);
    if (existing) {
      existing.value += Math.abs(curr.amount);
    } else {
      acc.push({ name: curr.category, value: Math.abs(curr.amount) });
    }
    return acc;
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4560'];

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <h3>Spending by Category</h3>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p style={{textAlign: 'center', color: '#777'}}>No expenses to display</p>
      )}
    </div>
  );
};