import React from 'react';
import './_button.scss';
import Icon from '../icon/Icon';

const Button = ({ type = 'default', children, disabled, onClick, iconName, className }) => {
  const buttonClassName = `button ${type} ${disabled ? 'disabled' : ''} ${className || ''}`;

  if (type === 'icon') {
    return (
      <button className={buttonClassName} onClick={onClick} disabled={disabled}>
        <Icon name={iconName} />
      </button>
    );
  }
  if (type === 'iconRight') {
    return (
      <button className={buttonClassName} onClick={onClick} disabled={disabled}>
        {children}
        <Icon name={iconName} width={18} />
      </button>
    );
  }

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;






