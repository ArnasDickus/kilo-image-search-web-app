import React from "react";
import "./ImageGrid.scss";

const ImageGrid = props => {
  // Add something if nothing added. How to check if api send empty?
  if (!props.responseData) {
    console.log(`It's empty`);
  }
  return (
    <React.Fragment>
      <img
        className="img"
        id={props.responseData.id}
        src={props.responseData.urls.thumb}
        alt="input"
      />
    </React.Fragment>
  );
};

export default ImageGrid;
