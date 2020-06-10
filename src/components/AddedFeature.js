import React from 'react';
import { connect } from 'react-redux'
import { removeFeature} from '../actions/RemoveFeature'
// import AddFeature from './AddFeature';

const AddedFeature = props => {
  // const removeFeat = (e) => {
  //   e.preventDefeault();
  //   props.RemoveFeature(props.feature)
  // }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.removeFeature(props.feature)}
        className='button'
      >
        Remove
      </button>
      {props.feature.name}
    </li>
  );
};



export default connect(null, { removeFeature })(AddedFeature);