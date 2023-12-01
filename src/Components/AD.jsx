import React from 'react'
import img from '../image/Untitled.svg';
import PropTypes from 'prop-types'
export const AD = (props) =>{
    const shouldLink = props.isTrue;
    return (
        <div>
          {shouldLink ? (<img src = {img} alt = "img"/>):(<p></p>)}
        </div>
    )
}
AD.propTypes = {
  isTrue:PropTypes.bool.isRequired,
};