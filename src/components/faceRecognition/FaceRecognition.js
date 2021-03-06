import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, box }) => {
  return imgUrl ? (
    <div className="center ma">
      <div className="img-container absolute mt2 shadow-5">
        <img
          id="inputImage"
          src={imgUrl}
          alt="Enter a valid image URL"
          width="660px"
          height="auto"
        />
        {box.map((box, i) => {
          return (
            <div
              key={i}
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            />
          );
        })}
      </div>
    </div>
  ) : null;
};

export default FaceRecognition;
