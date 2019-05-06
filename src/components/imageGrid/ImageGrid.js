

import React from 'react'
import './ImageGrid.scss';

// Add something if nothing added.
const ImageGrid = (props) => {
    console.log(props.responseData);
    if(props.responseData){
      console.log(`It's empty`);
    }
  return (
    <React.Fragment>
      <img className = "img"  id = {props.responseData.id} src={props.responseData.urls.thumb } alt = 'input' /> 
    </React.Fragment>
  )
}

export default ImageGrid