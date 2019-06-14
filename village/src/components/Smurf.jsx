import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf card mb-3">
      <Link to={`/view-smurf/${props.id}`}>
        <h3 className='card-header'>{props.name}</h3>
      </Link>
      <div className='card-body'>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
      <div className='card-footer'>
        <Link to={`/smurf-form/${props.id}`}>
          <button className='btn btn-info mr-2'>Edit</button>
        </Link>

        <Link to='/'>
          <button className='btn btn-danger'
                  onClick={() => props.deleteSmurf( props.id )}>Delete
          </button>
        </Link>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name  : '',
  height: '',
  age   : ''
};

export default Smurf;

