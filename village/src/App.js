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
    console.log('add');
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
      console.log( err );
    }
  };

  updateSmurf = smurf => {
    console.log('update');
    try {
      axios.put( `http://localhost:3333/smurfs/${smurf.id}`, smurf )
           .then( res => {
             const updatedSmurfs = this.state.smurfs.map( thisSmurf => thisSmurf.id === smurf.id ? smurf : thisSmurf );
             this.setState( {smurfs: updatedSmurfs} );
             this.props.history.push( '/' );
           } )
           .catch( err => console.log( err ) );
    } catch (err) {
      console.log( err );
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
          <Route exact path='/smurf-form'
                 render={props => <SmurfForm {...props} key={'addSmurf'}
                                             addSmurf={this.addSmurf}
                                             updateSmurf={this.updateSmurf} />} />
          <Route path='/smurf-form/:smurfId'
                 render={props => <SmurfForm {...props}
                                             updateSmurf={this.updateSmurf}
                                             key={'editSmurf'}
                                             smurfs={this.state.smurfs}
                                             addSmurf={this.addSmurf} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter( App );
