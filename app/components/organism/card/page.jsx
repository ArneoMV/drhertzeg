import React from 'react';

const Card = ({ children }) => {
  const cardStyles = {
    padding: "100px",
    margin: "10px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    border: "1px solid",
    display: "flex",
    justifyContent: "Center",
    alignItems: "center",
  };

  return <div style={cardStyles}>{children}</div>;
};

export default Card;
