import React from 'react';
import ReactDOM from 'react-dom';

class StrikeWater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      malt: 55,
      target: 152,
      ratio: 1.4,
      message: 'Strike water temperature is ' + this.temp(55, 152, 1.4)
    };

    this.handleMaltChange = this.handleMaltChange.bind(this);
    this.handleTargetChange = this.handleTargetChange.bind(this);
    this.handleRatioChange = this.handleRatioChange.bind(this);
  }

  temp(malt, target, ratio) {
    return ((0.2 / ratio) * (target - malt) + Number(target)).toFixed(1);
  }

  updateMessage(temp) {
    this.state.message = 'Strike water temperature is ' + temp;
  }

  handleMaltChange(event) {
    this.setState({
      malt: event.target.value
    });
    this.updateMessage(
      this.temp(event.target.value, this.state.target, this.state.ratio)
    );
  }

  handleTargetChange(event) {
    this.setState({
      target: event.target.value
    });
    this.updateMessage(
      this.temp(this.state.malt, event.target.value, this.state.ratio)
    );
  }

  handleRatioChange(event) {
    this.setState({
      ratio: event.target.value
    });
    this.updateMessage(
      this.temp(this.state.malt, this.state.target, event.target.value)
    );
  }

  render() {
    return (
      <form>
        <h2>Strike Water Temperature</h2>
        <div>
          <label htmlFor="malt">Malt temperature</label>
          <input
            type="number"
            id="malt"
            value={this.state.malt}
            onChange={this.handleMaltChange}
          />
        </div>
        <div>
          <label htmlFor="target">Target temperature</label>
          <input
            type="number"
            id="target"
            value={this.state.target}
            onChange={this.handleTargetChange}
          />
        </div>
        <div>
          <label htmlFor="ratio">Water to malt ratio</label>
          <input
            type="number"
            id="ratio"
            value={this.state.ratio}
            step=".1"
            onChange={this.handleRatioChange}
          />
        </div>
        <div>{this.state.message}</div>
      </form>
    );
  }
}

export default StrikeWater;
