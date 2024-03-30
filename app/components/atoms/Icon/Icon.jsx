import React from 'react';
import { IconImage } from './Images';
import Image from 'next/image'

const Icon = ({ name, className, color, size }) => {
  const iconImageSrc = IconImage[name];
  
  if (!iconImageSrc) {
    return null;
  }


  // const iconStyle = {
  //   width: '24px', // Default size
  //   height: '24px'
  // };

  const svgStyle = {
    fill: color, // Set the color using the 'color' prop
  };


  return (
    <Image 
      src={ iconImageSrc } 
      alt={ `Icon ${name}` }
      className={ className }
      // style={ iconStyle }
      quality={ 100 }
      width={ size }
    />
  );
};

export default Icon;
export { Icon };