import React from 'react';
import './_textbox.scss';

const TextBox = ({ label, placeholder }) => {
  return (
    <div className="textbox">
      <label>{label}</label>
      <input type="text" placeholder={placeholder} className="textbox-input" />
    </div>
  );
};

export default TextBox;
