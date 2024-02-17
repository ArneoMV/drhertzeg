import React from 'react';

export default function ProductDetailsLayout({ children }) {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading product");
  }
  return (
    <>
      {children}
      <h2>Features products</h2>
      
    </>
  );
}
