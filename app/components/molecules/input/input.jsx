import React, { useState } from 'react';
import Image from 'next/image'
import { Icons } from "../../../utilities/images.js";

import './_input.scss';


const Input = ({ label, placeholder, error, success, disabled, register }) => {
  const hasError = error && !success;
  return (
    <div className={`input${hasError ? 'input-error' : ''}${ success ? 'input-success' : '' }`} >
      
      {label && <label className="input-label">{label}</label>}
      
      <div className="input-wrapper">
        { hasError && ( <Image 
                          src={Icons.check}
                          alt='check'
                          quality={100}
                          className="input-icon input-icon-error"
                        /> 
                      )
        }
        { success && <Image 
                      src={Icons.checkFill}
                      alt='checkFill'
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
