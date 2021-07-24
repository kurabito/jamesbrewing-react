import React from 'react';
import ReactDOM from 'react-dom';

class ABVfromOGandFG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      og: 1.05,
      fg: 1.01,
      message: 'The ABV is ' + this.abv(1.05, 1.01) + '%'
    };

    this.handleOgChange = this.handleOgChange.bind(this);
    this.handleFgChange = this.handleFgChange.bind(this);
  }

  abv(og, fg) {
    return ((100 * (og - fg)) / 0.75).toFixed(1);
  }

  updateMessage(abv) {
    this.state.message = 'The ABV is ' + abv + '%';
  }

  handleOgChange(event) {
    this.setState({
      og: event.target.value
    });
    // alert('OG: ' + event.target.value);
    this.updateMessage(this.abv(event.target.value, this.state.fg));
  }

  handleFgChange(event) {
    this.setState({
      fg: event.target.value
    });
    this.updateMessage(this.abv(this.state.og, event.target.value));
  }


  render() {
    return (
      <form>
        <h2>ABV from OG and FG</h2>
        <div>
          <label htmlFor="og">Original gravity</label>
          <input
            type="number"
            id="og"
            step=".001"
            value={this.state.og}
            onChange={this.handleOgChange}
          />
        </div>
        <div>
          <label htmlFor="fg">Final gravity</label>
          <input
            type="number"
            id="fg"
            step=".001"
            value={this.state.fg}
            onChange={this.handleFgChange}
          />
        </div>
        <div>
          {this.state.message}
        </div>
      </form>
    );
  }
}

export default ABVfromOGandFG;
