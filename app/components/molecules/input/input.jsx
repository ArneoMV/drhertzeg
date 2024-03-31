import React, { useState } from 'react';
import Image from 'next/image'
import { IconImage } from '../../atoms/icon/Images.js'
import './_input.scss';


const Input = ({ label, placeholder, error, success, disabled, register }) => {
  const hasError = error && !success;
  return (
    <div className={`input${hasError ? 'input-error' : ''}${ success ? 'input-success' : '' }`} >
      
      {label && <label className="input-label">{label}</label>}
      
      <div className="input-wrapper">
        { hasError && ( <Image 
                          src={IconImage.check}
                          alt='geoAlt'
                          quality={100}
                          className="input-icon input-icon-error"
                        /> 
                      )
        }
        { success && <Image 
                      src={IconImage.checkFill}
                      alt='geoAlt'
                      quality={100}
                      className="input-icon input-icon-success"
                    /> 
        }
        <input
          {...register}
          type="text"
          className="input-field"
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      {hasError && <div className="input-error-text">{error}</div>}
    </div>
  );
};

export default Input;
