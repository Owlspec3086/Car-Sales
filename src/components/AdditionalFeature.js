import React from 'react';
import {connect} from 'react-redux'
import { addFeature } from '../actions/addFeature'

const AdditionalFeature = props => {
  // const updateFeature = (e) => {
  //   e.preventDefault()

  // }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => props.addFeature(props.feature)}
        className='button'
      >
        Add
      </button>
      {props.feature.name} (+{props.addFeature.price})
    </li>
  );
};

const mapToStateToProps =(state)=>{
  return{
    state
  }
}

export default connect(mapToStateToProps,{addFeature})(AdditionalFeature);
