import React from 'react';

export default function TeaDetailsLayout({ children }) {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading tea");
  }
  return (
    <>
      {children}
      <h2>Features teas</h2>
      
    </>
  );
}
