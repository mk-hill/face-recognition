import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, box }) => {
  return (
    <div className="center ma">
      <div className="img-container center absolute mt2">
        <img
          id="inputImage"
          src={imgUrl}
          alt="Enter URL above"
          width="660px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
