import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      name  : '',
      age   : '',
      height: ''
    };
  }

  componentDidMount() {
    try {
      if (this.props.smurfs) {
        const targetedSmurf=this.props.smurfs.filter(smurf => smurf.id.toString() === this.props.match.params.smurfId)[0];
        console.log(targetedSmurf);
        const {id, name, age, height} = targetedSmurf;
        this.setState({id,name,age,height, buttonMsg: 'Edit this smurf'})
      } else {
        this.setState({
          name  : '',
          age   : '',
          height: '',
          buttonMsg: 'Add to the Village'
        })
      }
    } catch(err) {
      this.props.history.push('/')
    }

}
  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api


    this.state.id !== undefined ? this.props.updateSmurf(this.state) : this.props.addSmurf( this.state );
  };

  handleInputChange = e => {
    this.setState( {[e.target.name]: e.target.value} );
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{this.state.buttonMsg}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
