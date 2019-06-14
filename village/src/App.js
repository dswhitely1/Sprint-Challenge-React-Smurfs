import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navbar from './components/Navbar';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    try {
      axios.get( 'http://localhost:3333/smurfs' )
           .then( res => this.setState( {smurfs: res.data} ) )
           .catch( err => console.log( err ) );
    } catch (err) {
      this.setState( {smurfs: []} );
    }
  }

  addSmurf = smurf => {
    try {
      axios.post( 'http://localhost:3333/smurfs', smurf )
           .then( res => this.setState( {smurfs: res.data} ) )
           .catch( err => console.log( err ) );
      this.props.history.push( '/' );
    } catch (err) {
      console.log( err );
    }
  };

  deleteSmurf = smurfId => {
    try {
      axios.delete( `http://localhost:3333/smurfs/${smurfId}` )
           .then( res => {
             const updatedSmurfs = this.state.smurfs.filter( smurf => smurf.id !== smurfId );
             this.setState( {smurfs: updatedSmurfs} );
           } )
           .catch( err => console.log( err ) );
    } catch (err) {
      console.log(err);
    }
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'
                 render={() => <Smurfs smurfs={this.state.smurfs}
                                       deleteSmurf={this.deleteSmurf} />} />
          <Route path='/smurf-form'
                 render={() => <SmurfForm addSmurf={this.addSmurf} />} />

        </Switch>
      </div>
    );
  }
}

export default withRouter( App );
