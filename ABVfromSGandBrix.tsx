import React from 'react';
import ReactDOM from 'react-dom';

class ABVfromSGandBrix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sg: 1.01,
      brix: 8,
      message: 'The ABV is ' + this.abv(1.01, 8) + '%'
    };

    this.handleSgChange = this.handleSgChange.bind(this);
    this.handleBrixChange = this.handleBrixChange.bind(this);
  }

  abv(sg, brix) {
    return (1.646 * brix - 2.703 * (145 - 145 / sg) - 1.794).toFixed(1);
  }

  updateMessage(abv) {
    this.state.message = 'The ABV is ' + abv + '%';
  }

  handleSgChange(event) {
    this.setState({
      sg: event.target.value
    });
    this.updateMessage(this.abv(event.target.value, this.state.brix));
  }

  handleBrixChange(event) {
    this.setState({
      brix: event.target.value
    });
    this.updateMessage(this.abv(this.state.sg, event.target.value));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>ABV from SG and Brix</h2>
        <div>
          <label htmlFor="sg">Specific gravity</label>
          <input
            type="number"
            id="sg"
            step=".001"
            value={this.state.sg}
            onChange={this.handleSgChange}
          />
        </div>
        <div>
          <label htmlFor="brix">Brix</label>
          <input
            type="number"
            id="brix"
            step=".1"
            value={this.state.brix}
            onChange={this.handleBrixChange}
          />
        </div>
        <div>
          {this.state.message}
        </div>
      </form>
    );
  }
}

export default ABVfromSGandBrix;
