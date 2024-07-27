import React from 'react';
import { Logos, Social, User, Illustrations } from "../../../utilities/images.js";

// import { IconImage } from './Images';
import Image from 'next/image'

const Icon = ({ name, className, color, size }) => {
  const iconImageSrc = IconLogosImage[name];
  
  if (!iconImageSrc) {
    return null;
  }

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