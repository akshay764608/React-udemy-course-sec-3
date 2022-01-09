import React from 'react';

import ExpenseItem from './ExpenseItem';

import './Expenses.css';

import Card from '../UI/Card';

const Expenses = ({ expenses: items }) => {
  return (
    // ---> Here in Card 'className', Card (Custom HTML elements) does only understand className or whatever name as props and thus we can pass this props to catch on Card.js <---

    <Card classNames='expenses'>
      {/* ---> Map the expenses array <--- */}
      {/*{expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}*/}

      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </Card>
  );
};

export default Expenses;
