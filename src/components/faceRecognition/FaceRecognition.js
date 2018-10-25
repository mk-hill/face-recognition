import React from 'react';

const FaceRecognition = ({ imgUrl }) => {
  return (
    <div className="center ma">
      <div
        style={{
          borderRadius: 5 + 'px',
          overflow: 'hidden',
          marginTop: 20 + 'px',
        }}
        className="absolute mt2"
      >
        <img src={imgUrl} alt="Enter image URL" width="650px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
