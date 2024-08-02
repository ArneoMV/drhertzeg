import React from 'react';
import './_chip.scss';

const Chip = ({ text, colorBg = '#FFFEFE', colorText = '#242424' }) => {
  const chipStyle = {
    backgroundColor: colorBg,
    color: colorText
  };

  return (
    <div className="chip" style={chipStyle}>
      {text}
    </div>
  );
};

export default Chip;
