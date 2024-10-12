import React from 'react';

const TextStyleConfig = () => {
  return (
    <div className="TextStyleConfig">
      <label className='configlabel'>
        Font Size:
        <input type="text" className='input' />
      </label>
      <label className='configlabel'>
        Font Color:
        <input type="color" className='colorPicker' />
      </label>
      <label className='configlabel'>
        Bold:
        <input type="checkbox"/>
      </label>
    </div>
  );
};

export default TextStyleConfig;
