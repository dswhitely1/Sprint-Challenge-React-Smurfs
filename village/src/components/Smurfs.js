import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  state = {
    smurfs: []
  };

  componentDidMount() {
    try {
      if (this.props.match.params.smurfId) {
        const singleSmurf = this.props.smurfs.filter( smurf => smurf.id.toString() === this.props.match.params.smurfId );
        this.setState( {smurfs: singleSmurf} );
      } else {
        this.setState( {smurfs: this.props.smurfs} );
      }
    } catch(err) {
      this.props.history.push( '/' );
    }

  }

  componentDidUpdate( prevProps ) {
    if (prevProps.smurfs !== this.props.smurfs) {
      if (this.props.match.params.smurfId) {
        const singleSmurf = this.props.smurfs.filter( smurf => smurf.id === this.props.match.params.smurfId );
        this.setState( {smurfs: singleSmurf} );
      } else {
        this.setState( {smurfs: this.props.smurfs} );
      }
    }
  }

  render() {
    console.log( this.props );
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map( smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          } )}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
