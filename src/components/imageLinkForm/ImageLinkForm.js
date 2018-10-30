import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onImgSubmit }) => {
  return (
    <div>
      <p className="f3 w-90 center">
        {
          'This app will detect the faces in your pictures. Enter a URL below to give it a try!'
        }
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-5 form center">
          <input
            className="f4 pa2 w-70 center mr2"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white ml2 detect-btn"
            onClick={onImgSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
