import React from 'react';
import './_chip.scss';

const Chip = ({ text }) => {
    return (
      <div className="chip">
        {text}
      </div>
    );
  };
  
  export default Chip;