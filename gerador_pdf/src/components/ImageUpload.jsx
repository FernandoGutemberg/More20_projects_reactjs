import React from 'react';

const ImageUpload = () => {
  return (
    <div className="ImageUpload">
      <label className='configlabel'>
        Upload Image:
        <input type="file" accept='image/' className='fileInput' />
      </label>

    </div>
  );
};

export default ImageUpload;
