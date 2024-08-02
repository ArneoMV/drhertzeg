import React from 'react';
import './_button.scss';

const Button = ({ type = 'default', children, disabled, onClick, className }) => {
  const buttonClassName = `button ${type}${disabled ? ' disabled' : ''}${className || ''}`;

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled} >
      {children}
    </button>
  );
};

export default Button;






