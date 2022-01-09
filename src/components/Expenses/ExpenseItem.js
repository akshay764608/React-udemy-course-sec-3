import React from 'react';

// Importing css stylesheet
import './ExpenseItem.css';

// Importing ExpenseDate component to render Date
import ExpenseDate from './ExpenseDate';

// Importing Card as a wrapper
import Card from '../UI/Card';

const ExpenseItem = ({ title: newTitle, amount, date }) => {
  // const [title, setTitle] = useState(newTitle);

  // const clickHandler = () => {
  //   setTitle('Updated!');
  // };
  return (
    // ---> Here in Card 'className', Card (Custom HTML elements) does only understand className or whatever name as props and thus we can pass this props to catch on Card.js <---

    <Card classNames='expense-item'>
      <ExpenseDate date={date} />

      <div className='expense-item__description'>
        <h2>{newTitle}</h2>

        <div className='expense-item__price'>&#x20B9; {amount}</div>
      </div>
      {/*<button onClick={clickHandler}>Change Title</button>*/}
    </Card>
  );
};

export default ExpenseItem;
