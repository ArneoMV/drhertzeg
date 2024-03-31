import React from 'react';
import './_textbox.scss';

const TextBox = ({ label, placeholder }) => {
  return (
    <div className="textbox">
      <label>{label}</label>
      <textarea placeholder={placeholder} rows="5" cols="10" className="textbox-input" required></textarea>
    </div>
  );
};

export default TextBox;
