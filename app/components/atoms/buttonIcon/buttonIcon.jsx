import React from 'react';
import Image from 'next/image';
import './_button-icon.scss';

const ButtonIcon = ({ iconSrc, onClick, className, alt }) => {
  return (
    <button className={`button-icon ${className}`} onClick={onClick}>
      <Image 
        src={iconSrc}
        alt={alt}
        quality={100}
        width={24}
        height={24}
      />
    </button>
  );
};

export default ButtonIcon;
