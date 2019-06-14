import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <Link to={`/view-smurf/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Link to={`/smurf-form/${props.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => props.deleteSmurf( props.id )}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name  : '',
  height: '',
  age   : ''
};

export default Smurf;

