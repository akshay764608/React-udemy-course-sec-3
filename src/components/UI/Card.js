import React from 'react';

import './Card.css';

const Card = ({ children, classNames }) => {
  const classes = 'card ' + classNames;
  return <div className={classes}>{children}</div>;
};

export default Card;
