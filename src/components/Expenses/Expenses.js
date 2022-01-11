import React, { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';

import ExpensesFilter from './ExpensesFilter';

import ExpensesList from './ExpensesList';

import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses: items }) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    // ---> Here in Card 'className', Card (Custom HTML elements) does only understand className or whatever name as props and thus we can pass this props to catch on Card.js <---
    <Card classNames='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
